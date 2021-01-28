/**
 * nadesiko v3
 */
import Parser from './nako_parser3'
import Lexer from './nako_lexer'
import Prepare from './nako_prepare'
import NakoGen from './nako_gen'
import NakoRuntimeError from './nako_runtime_error'
import * as NakoIndent from './nako_indent'
import PluginSystem from './plugins/plugin_system'
import PluginMath from './plugins/plugin_math'
import PluginTest from './plugins/plugin_test'
import plugin_system from './plugins/plugin_system'

const prepare = new Prepare()
const parser = new Parser()
const lexer = new Lexer()

class NakoCompiler {
  constructor() {
    this.debugAll = false
    this.debug = false || this.debugAll
    this.silent = true
    this.debugParser = false || this.debugAll
    this.debugJSCode = true || this.debugAll
    this.debugLexer = false || this.debugAll
    this.filename = 'inline'
    // 環境のリセット
    /** @type {[Record<string, unknown>, Record<string, unknown>, Record<string, unknown>]} */
    this.__varslist = [{}, {}, {}] // このオブジェクトは変更しないこと (this.gen.__varslist と共有する)
    this.__self = this
    this.__vars = this.__varslist[2]
    this.__module = {} // requireなどで取り込んだモジュールの一覧
    this.funclist = {} // プラグインで定義された関数
    this.pluginfiles = {} // 取り込んだファイル一覧
    this.isSetter = false // 代入的関数呼び出しを管理(#290)
    this.commandlist = new Set() // プラグインで定義された定数・変数・関数の名前
    // 必要なオブジェクトを覚えておく
    this.prepare = prepare
    this.lexer = lexer
    this.parser = parser
    //
    this.beforeParseCallback = (opts) => {
      return opts.tokens
    }
    // set this
    this.gen = new NakoGen(this)
    this.addPluginObject('PluginSystem', PluginSystem)
    this.addPluginObject('PluginMath', PluginMath)
    this.addPluginObject('PluginAssert', PluginTest)
  }

  get log() {
    let s = this.__varslist[0]['表示ログ']
    s = s.replace(/\s+$/, '')
    return s
  }

  static getHeader() {
    return NakoGen.getHeader()
  }

  /**
   * コードを単語に分割し属性の補正を行う
   * @param code なでしこのプログラム
   * @param isFirst 最初の呼び出しかどうか
   * @param line なでしこのプログラムの行番号
   * @returns コード (なでしこ)
   */
  tokenize(code, isFirst, line = 0) {
    const tokens = this.rawtokenize(code, line, '')
    return this.converttoken(tokens, isFirst)
  }

  async tokenizeAsync(code, isFirst, filename, line = 0) {
    let rawtokens = this.rawtokenize(code, line, filename)
    if (this.beforeParseCallback) {
      const rslt = this.beforeParseCallback({ nako3: this, tokens: rawtokens, filepath: filename })
      rawtokens = await rslt
    }
    return this.converttoken(rawtokens, isFirst)
  }

  /**
   * コードを単語に分割する
   * @param code なでしこのプログラム
   * @param line なでしこのプログラムの行番号
   * @returns トークンのリスト
   */
  rawtokenize(code, line, filename) {
    // 『##インデント構文』のチェック(#596)
    code = NakoIndent.convert(code)
    // 全角半角の統一処理
    const code2 = this.prepare.convert(code)
    // トークン分割
    const tokens = this.lexer.setInput(code2, line, filename)
    return tokens
  }

  /**
   * 単語の属性を構文解析に先立ち補正する
   * @param tokes トークンのリスト
   * @param isFirst 最初の呼び出しかどうか
   * @returns コード (なでしこ)
   */
  converttoken(tokens, isFirst) {
    return this.lexer.setInput2(tokens, isFirst)
  }

  /**
   * デバッグモードに設定する
   * @param flag デバッグモード
   */
  useDebug(flag = true) {
    this.debug = flag
  }

  /**
   * 環境のリセット
   */
  reset() {
    // スタックのグローバル変数とローカル変数を初期化
    this.__varslist = [this.__varslist[0], {}, {}]
    this.__v0 = this.__varslist[0]
    this.__v1 = this.__varslist[1]
    this.__vars = this.__varslist[2]
    this.gen.reset()
  }

  /**
   * コードを生成
   * @param ast AST
   * @param isTest テストかどうか
   */
  generate(ast, isTest) {
    // 先になでしこ自身で定義したユーザー関数をシステムに登録
    this.gen.registerFunction(ast)
    // JSコードを生成する
    const js = this.gen.convGen(ast, isTest)
    // JSコードを実行するための事前ヘッダ部分の生成
    const def = this.gen.getDefFuncCode(isTest)
    if (this.debug && this.debugJSCode) {
      console.log('--- generate ---')
      console.log(def + js)
    }
    return def + js
  }

  /**
   * コードをパースしてASTにする
   * @param code {string} なでしこのプログラム
   * @param filename {string}
   * @return AST
   */
  parse(code, filename) {
    // 関数を字句解析と構文解析に登録
    lexer.setFuncList(this.funclist)
    parser.setFuncList(this.funclist)
    parser.debug = this.debug
    this.parser.filename = filename
    // 単語に分割
    let rawtokens = this.rawtokenize(code, 0, filename)
    if (this.beforeParseCallback) {
      const rslt = this.beforeParseCallback({ nako3: this, tokens: rawtokens, filepath: filename })
      if (rslt instanceof Promise) {
        throw new Error('利用している機能の中に、非同期処理が必要なものが含まれています')
      }
      rawtokens = rslt
    }
    const tokens = this.converttoken(rawtokens, true)

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i]['type'] === 'code') {
        tokens.splice(i, 1, ...this.tokenize(tokens[i]['value'], false, tokens[i]['line']))
        i--
      }
    }

    if (this.debug && this.debugLexer) {
      console.log('--- lex ---')
      console.log(JSON.stringify(tokens, null, 2))
    }
    // 構文木を作成
    const ast = parser.parse(tokens)
    this.usedFuncs = this.getUsedFuncs(ast)
    if (this.debug && this.debugParser) {
      console.log('--- ast ---')
      console.log(JSON.stringify(ast, null, 2))
    }
    return ast
  }

  async parseAsync(code, filename) {
    // 関数を字句解析と構文解析に登録
    lexer.setFuncList(this.funclist)
    parser.setFuncList(this.funclist)
    parser.debug = this.debug
    this.parser.filename = filename
    // 単語に分割
    let rawtokens = this.rawtokenize(code, 0, filename)
    if (this.beforeParseCallback) {
      const rslt = this.beforeParseCallback({ nako3: this, tokens: rawtokens, filepath: filename })
      rawtokens = await rslt
    }
    const tokens = this.converttoken(rawtokens, true)

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i]['type'] === 'code') {
        tokens.splice(i, 1, ...this.tokenize(tokens[i]['value'], false, tokens[i]['line']))
        i--
      }
    }

    if (this.debug && this.debugLexer) {
      console.log('--- lex ---')
      console.log(JSON.stringify(tokens, null, 2))
    }
    // 構文木を作成
    const ast = parser.parse(tokens)
    this.usedFuncs = this.getUsedFuncs(ast)
    if (this.debug && this.debugParser) {
      console.log('--- ast ---')
      console.log(JSON.stringify(ast, null, 2))
    }
    return ast
  }

  getUsedFuncs(ast) {
    const queue = [ast]
    this.usedFuncs = new Set()

    while (queue.length > 0) {
      const ast_ = queue.pop()

      if (ast_ !== null && ast_ !== undefined && ast_.block !== null && ast_.block !== undefined) {
        this.getUsedAndDefFuncs(queue, JSON.parse(JSON.stringify(ast_.block)))
      }
    }

    return this.deleteUnNakoFuncs()
  }

  getUsedAndDefFuncs(astQueue, blockQueue) {
    while (blockQueue.length > 0) {
      const block = blockQueue.pop()

      if (block !== null && block !== undefined) {
        this.getUsedAndDefFunc(block, astQueue, blockQueue)
      }
    }
  }

  getUsedAndDefFunc(block, astQueue, blockQueue) {
    if (['func', 'func_pointer'].includes(block.type) && block.name !== null && block.name !== undefined) {
      this.usedFuncs.add(block.name)
    }

    astQueue.push.apply(astQueue, [block, block.block])
    blockQueue.push.apply(blockQueue, [block.value].concat(block.args))
  }

  deleteUnNakoFuncs() {
    for (const func of this.usedFuncs) {
      if (!this.commandlist.has(func)) {
        this.usedFuncs.delete(func)
      }
    }

    return this.usedFuncs
  }

  /**
   * プログラムをコンパイルしてJavaScriptのコードを返す
   * @param code コード (なでしこ)
   * @param isTest テストかどうか
   * @returns コード (JavaScript)
   */
  compile(code, filename, isTest) {
    const ast = this.parse(code, filename)
    return this.generate(ast, isTest)
  }

  async compileAsync(code, filename, isTest) {
    const ast = await this.parseAsync(code, filename)
    return this.generate(ast, isTest)
  }

  _run(code, fname, isReset, isTest) {
    const opts = {
      resetLog: isReset,
      testOnly: isTest
    }
    return this._runEx(code, fname, opts)
  }

  _runEx(code, fname, opts) {
    opts = Object.assign({ resetEnv: true, resetLog: true, testOnly: false }, opts)
    if (opts.resetEnv) { this.reset() }
    if (opts.resetLog) { this.clearLog() }
    let js = this.compile(code, fname, opts.testOnly)
    try {
      this.__varslist[0].line = -1 // コンパイルエラーを調べるため
      const func = new Function(js) // eslint-disable-line
      func.apply(this)
    } catch (e) {
      this.js = js
      if (e instanceof NakoRuntimeError) {
        throw e
      } else {
        throw new NakoRuntimeError(
          e.name + ':' +
          e.message, this)
      }
    }
    return this
  }

  async _runAsync(code, fname, isReset, isTest) {
    const opts = {
      resetLog: isReset,
      testOnly: isTest
    }
    return this._runExAsync(code, fname, opts)
  }

  async _runExAsync(code, fname, opts) {
    opts = Object.assign({ resetEnv: true, resetLog: true, testOnly: false }, opts)
    if (opts.resetEnv) { this.reset() }
    if (opts.resetLog) { this.clearLog() }
    let js = await this.compileAsync(code, fname, opts.testOnly)
    try {
      this.__varslist[0].line = -1 // コンパイルエラーを調べるため
      const func = new Function(js) // eslint-disable-line
      func.apply(this)
    } catch (e) {
      this.js = js
      if (e instanceof NakoRuntimeError) {
        throw e
      } else {
        throw new NakoRuntimeError(
          e.name + ':' +
          e.message, this)
      }
    }
    return this
  }

  runEx(code, fname, opts) {
    return this._runEx(code, fname, opts)
  }

  async runExAsync(code, fname, opts) {
    return this._runExAsync(code, fname, opts)
  }

  test(code, fname) {
    return this._runEx(code, fname, { testOnly: true })
  }

  run(code, fname) {
    return this._runEx(code, fname, { resetLog: false })
  }

  runReset(code, fname) {
    return this._runEx(code, fname, { resetLog: true })
  }

  async testAsync(code, fname) {
    return await this._runExAsync(code, fname, { testOnly: true })
  }

  async runAsync(code, fname) {
    return await this._runExAsync(code, fname, { resetLog: false })
  }

  async runResetAsync(code, fname) {
    return await this._runExAsync(code, fname, { resetLog: true })
  }

  clearLog() {
    this.__varslist[0]['表示ログ'] = ''
  }

  /**
   * eval()実行前に直接JSのオブジェクトを取得する場合
   * @returns {[*,*,*]}
   */
  getVarsList() {
    const v = this.gen.getVarsList()
    return [v[0], v[1], []]
  }

  /**
   * 完全にJSのコードを取得する場合
   * @returns {string}
   */
  getVarsCode() {
    return this.gen.getVarsCode()
  }

  /**
   * プラグイン・オブジェクトを追加
   * @param po プラグイン・オブジェクト
   */
  addPlugin(po) {
    // 変数のメタ情報を確認
    const __v0 = this.__varslist[0]
    if (__v0.meta === undefined) { __v0.meta = {} }

    // プラグインの値をオブジェクトにコピー
    for (const key in po) {
      const v = po[key]
      this.funclist[key] = v
      if (v.type === 'func') {
        __v0[key] = (...args) => {
          try {
            return v.fn(...args)
          } catch (e) {
            throw new NakoRuntimeError('関数『' + key + '』:' + e.name + ':' + e.message, this)
          }
        }
      } else if (v.type === 'const' || v.type === 'var') {
        __v0[key] = v.value
        __v0.meta[key] = {
          readonly: (v.type === 'const')
        }
      } else {
        throw new Error('プラグインの追加でエラー。', null)
      }
      if (key !== '初期化') {
        this.commandlist.add(key)
      }
    }
  }

  /**
   * プラグイン・オブジェクトを追加(ブラウザ向け)
   * @param objName オブジェクト名
   * @param po 関数リスト
   */
  addPluginObject(objName, po) {
    this.__module[objName] = po
    this.pluginfiles[objName] = '*'
    if (typeof (po['初期化']) === 'object') {
      const def = po['初期化']
      delete po['初期化']
      const initkey = `!${objName}:初期化`
      po[initkey] = def
      this.gen.used_func[initkey] = true
    }
    this.addPlugin(po)
  }

  /**
   * プラグイン・ファイルを追加(Node.js向け)
   * @param objName オブジェクト名
   * @param fpath ファイルパス
   * @param po 登録するオブジェクト
   */
  addPluginFile(objName, fpath, po) {
    this.addPluginObject(objName, po)
    if (this.pluginfiles[objName] === undefined) {
      this.pluginfiles[objName] = fpath
    }
  }

  /**
   * 関数を追加する
   * @param key 関数名
   * @param josi 助詞
   * @param fn 関数
   */
  addFunc(key, josi, fn) {
    this.funclist[key] = { 'josi': josi, 'fn': fn, 'type': 'func' }
    this.__varslist[0][key] = fn
  }

  /**
   * 関数をセットする
   * @param key 関数名
   * @param josi 助詞
   * @param fn 関数
   */
  setFunc(key, josi, fn) {
    this.addFunc(key, josi, fn)
  }

  /**
   * プラグイン関数を参照する
   * @param key プラグイン関数の関数名
   * @returns プラグイン・オブジェクト
   */
  getFunc(key) {
    return this.funclist[key]
  }
}

export default NakoCompiler
