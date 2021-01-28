export default {
  '初期化': {
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },

  // @システム定数
  'ナデシコバージョン': { type: 'const', value: '?' }, // @なでしこばーじょん
  'ナデシコエンジン': { type: 'const', value: 'nadesi.com/v3' }, // @なでしこえんじん
  'ナデシコ種類': { type: 'const', value: 'wnako3/cnako3' }, // @なでしこしゅるい
  'はい': { type: 'const', value: 1 }, // @はい
  'いいえ': { type: 'const', value: 0 }, // @いいえ
  'オン': { type: 'const', value: 1 }, // @おん
  'オフ': { type: 'const', value: 0 }, // @おふ
  '改行': { type: 'const', value: '\n' }, // @かいぎょう
  'タブ': { type: 'const', value: '\t' }, // @たぶ
  'カッコ': { type: 'const', value: '「' }, // @かっこ
  'カッコ閉': { type: 'const', value: '」' }, // @かっことじ
  '波カッコ': { type: 'const', value: '{' }, // @なみかっこ
  '波カッコ閉': { type: 'const', value: '}' }, // @なみかっことじ
  'OK': { type: 'const', value: 1 }, // @OK
  'NG': { type: 'const', value: 0 }, // @NG
  'PI': { type: 'const', value: Math.PI }, // @PI
  '空': { type: 'const', value: '' }, // @から
  'NULL': { type: 'const', value: null }, // @NULL
  'undefined': { type: 'const', value: undefined }, // @undefined
  '未定義': { type: 'const', value: undefined }, // @みていぎ
  'エラーメッセージ': { type: 'const', value: '' }, // @えらーめっせーじ
  '対象': { type: 'const', value: '' }, // @たいしょう
  '対象キー': { type: 'const', value: '' }, // @たいしょうきー
  '回数': { type: 'const', value: '' }, // @かいすう
  'CR': { type: 'const', value: '\r' }, // @CR
  'LF': { type: 'const', value: '\n' }, // @LF
  '空配列': { // @空の配列を返す // @からはいれつ
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  '空ハッシュ': { // @空のハッシュを返す // @からはっしゅ
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  '空オブジェクト': { // @空のオブジェクトを返す // @からおぶじぇくと
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },

  // @標準出力
  '表示': { // @Sを表示 // @ひょうじ
    type: 'func',
    josi: [['を', 'と']],
    fn: (...args) => { },
    return_none: true
  },
  '表示ログ': { type: 'const', value: '' }, // @ひょうじろぐ
  '表示ログクリア': { // @表示ログを空にする // @ひょうじろぐくりあ
    type: 'func',
    josi: [],
    fn: (...args) => { },
    return_none: true
  },
  '言': { // @Sを表示 // @いう
    type: 'func',
    josi: [['を', 'と']],
    fn: (...args) => { },
    return_none: true
  },
  'コンソール表示': { // @Sをコンソール表示する(console.log) // @こんそーるひょうじ
    type: 'func',
    josi: [['を', 'と']],
    fn: (...args) => { },
    return_none: true
  },

  // @四則演算
  '足': { // @AとBを足す // @たす
    type: 'func',
    josi: [['に', 'と'], ['を']],
    isVariableJosi: false,
    fn: (...args) => { }
  },
  '引': { // @AからBを引く // @ひく
    type: 'func',
    josi: [['から'], ['を']],
    fn: (...args) => { }
  },
  '掛': { // @AにBを掛ける // @かける
    type: 'func',
    josi: [['に', 'と'], ['を']],
    fn: (...args) => { }
  },
  '倍': { // @AのB倍を求める // @ばい
    type: 'func',
    josi: [['の'], ['']],
    fn: (...args) => { }
  },
  '割': { // @AをBで割る // @わる
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },
  '割余': { // @AをBで割った余りを求める // @わったあまり
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },
  '以上': { // @AがB以上か // @いじょう
    type: 'func',
    josi: [['が'], ['']],
    fn: (...args) => { }
  },
  '以下': { // @AがB以下か // @いか
    type: 'func',
    josi: [['が'], ['']],
    fn: (...args) => { }
  },
  '未満': { // @AがB未満か // @みまん
    type: 'func',
    josi: [['が'], ['']],
    fn: (...args) => { }
  },
  '超': { // @AがB超か // @ちょう
    type: 'func',
    josi: [['が'], ['']],
    fn: (...args) => { }
  },
  '等': { // @AがBと等しいか // @ひとしい
    type: 'func',
    josi: [['が'], ['と']],
    fn: (...args) => { }
  },
  '範囲内': { // @VがAからBの範囲内か // @はんいない
    type: 'func',
    josi: [['が'], ['から'], ['の']],
    fn: (...args) => { }
  },
  '連続加算': { // @A1+A2+A3...にBを足す // @れんぞくかさん
    type: 'func',
    josi: [['を'], ['に', 'と']],
    isVariableJosi: true,
    fn: (...args) => { }
  },

  // @敬語
  'ください': { // @敬語対応のため // @ください
    type: 'func',
    josi: [],
    fn: (...args) => { },
    return_none: true
  },
  'お願': { // @ソースコードを読む人を気持ちよくする // @おねがいします
    type: 'func',
    josi: [],
    fn: (...args) => { },
    return_none: true
  },
  '拝啓': { // @ソースコードを読む人を気持ちよくする // @はいけい
    type: 'func',
    josi: [],
    fn: (...args) => { },
    return_none: true
  },
  '礼節レベル取得': { // @(お遊び)敬語を何度使ったか返す // @おねがいします
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },

  // @特殊命令
  'JS実行': { // @JavaScriptのコードSRCを実行する(変数sysでなでしこシステムを参照できる) // @JSじっこう
    type: 'func',
    josi: [['を', 'で']],
    fn: (...args) => { }
  },
  'JSオブジェクト取得': { // @なでしこで定義した関数や変数nameのJavaScriptオブジェクトを取得する // @JSおぶじぇくとしゅとく
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'JS関数実行': { // @JavaScriptの関数NAMEを引数ARGS(配列)で実行する // @JSかんすうしゅとく
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },

  'ナデシコ': { // @なでしこのコードCODEを実行する // @なでしこする
    type: 'func',
    josi: [['を', 'で']],
    fn: (...args) => { }
  },
  'ナデシコ続': { // @なでしこのコードCODEを実行する // @なでしこつづける
    type: 'func',
    josi: [['を', 'で']],
    fn: (...args) => { }
  },
  '実行': { // @ 無名関数（あるいは、文字列で関数名を指定）Fを実行する(Fが関数でなければ無視する) // @じっこう
    type: 'func',
    josi: [['を', 'に', 'で']],
    fn: (...args) => { }
  },

  // @型変換
  '変数型確認': { // @変数Vの型を返す // @へんすうかたかくにん
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'TYPEOF': {// @変数Vの型を返す // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '文字列変換': {// @値Vを文字列に変換 // @もじれつへんかん
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  'TOSTR': { // @値Vを文字列に変換 // @とぅーすとりんぐ
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  '整数変換': { // @値Vを整数に変換 // @せいすうへんかん
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  'TOINT': {// @値Vを整数に変換 // @
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  '実数変換': {// @値Vを実数に変換 // @じっすうへんかん
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  'TOFLOAT': {// @値Vを実数に変換 // @
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  'INT': {// @値Vを整数に変換 // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'FLOAT': {// @値Vを実数に変換 // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'NAN判定': {// @値VがNaNかどうかを判定 // @NANはんてい
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  'HEX': {// @値Vを16進数に変換 // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'RGB': { // @HTML用のカラーコードを返すRGB(R,G,B)で各値は0-255 // @
    type: 'func',
    josi: [['と'], ['の'], ['で']],
    fn: (...args) => { }
  },

  // @論理演算
  '論理OR': { // @(ビット演算で)AとBの論理和を返す(v1非互換)。 // @
    type: 'func',
    josi: [['と'], ['の']],
    fn: (...args) => { }
  },
  '論理AND': { // @(ビット演算で)AとBの論理積を返す(v1非互換)。日本語の「AかつB」に相当する // @
    type: 'func',
    josi: [['と'], ['の']],
    fn: (...args) => { }
  },
  '論理NOT': { // @値Vが0ならば1、それ以外ならば0を返す(v1非互換) // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },

  // @ビット演算
  'OR': { // @(ビット演算で)AとBの論理和を返す。 // @
    type: 'func',
    josi: [['と'], ['の']],
    fn: (...args) => { }
  },
  'AND': { // @(ビット演算で)AとBの論理積を返す。日本語の「AかつB」に相当する // @
    type: 'func',
    josi: [['と'], ['の']],
    fn: (...args) => { }
  },
  'XOR': {// @(ビット演算で)AとBの排他的論理和を返す。// @
    type: 'func',
    josi: [['と'], ['の']],
    fn: (...args) => { }
  },
  'NOT': {// @(ビット演算で)vの各ビットを反転して返す。// @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'SHIFT_L': { // @VをAビット左へシフトして返す // @
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },
  'SHIFT_R': { // @VをAビット右へシフトして返す(符号を維持する) // @
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },
  'SHIFT_UR': { // @VをAビット右へシフトして返す(符号を維持しない、0で埋める) // @
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },

  // @文字列処理
  '文字数': { // @文字列Vの文字数を返す // @もじすう
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '何文字目': { // @文字列SでAが何文字目にあるか調べて返す // @なんもじめ
    type: 'func',
    josi: [['で', 'の'], ['が']],
    fn: (...args) => { }
  },
  'CHR': { // @文字コードから文字を返す // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'ASC': { // @文字列Vの最初の文字の文字コードを返す // @
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '文字挿入': { // @文字列SのI文字目に文字列Aを挿入する // @もじそうにゅう
    type: 'func',
    josi: [['で', 'の'], ['に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '文字検索': { // @文字列Sで文字列A文字目からBを検索。見つからなければ0を返す。(類似命令に『何文字目』がある)(v1非互換) // @もじけんさく
    type: 'func',
    josi: [['で', 'の'], ['から'], ['を']],
    fn: (...args) => { }
  },
  '追加': { // @文字列SにAを追加して返す(v1非互換) // @ついか
    type: 'func',
    josi: [['で', 'に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '一行追加': { // @文字列SにAと改行を追加して返す(v1非互換) // @いちぎょうついか
    type: 'func',
    josi: [['で', 'に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '文字列分解': {// @文字列Vを一文字ずつに分解して返す // @もじれつぶんかい
    type: 'func',
    josi: [['を', 'の', 'で']],
    fn: (...args) => { }
  },
  'リフレイン': { // @文字列VをCNT回繰り返す(v1非互換) // @りふれいん
    type: 'func',
    josi: [['を', 'の'], ['で']],
    fn: (...args) => { }
  },
  '出現回数': {// @文字列SにAが何回出現するか数える // @しゅつげんかいすう
    type: 'func',
    josi: [['で'], ['の']],
    fn: (...args) => { }
  },
  'MID': {// @文字列SのA文字目からCNT文字を抽出する // @
    type: 'func',
    josi: [['で', 'の'], ['から'], ['を']],
    fn: (...args) => { }
  },
  '文字抜出': { // @文字列SのA文字目からCNT文字を抽出する // @もじぬきだす
    type: 'func',
    josi: [['で', 'の'], ['から'], ['を', '']],
    fn: (...args) => { }
  },
  'LEFT': {// @文字列Sの左端からCNT文字を抽出する // @
    type: 'func',
    josi: [['の', 'で'], ['だけ']],
    fn: (...args) => { }
  },
  '文字左部分': { // @文字列Sの左端からCNT文字を抽出する // @もじひだりぶぶん
    type: 'func',
    josi: [['の', 'で'], ['だけ', '']],
    fn: (...args) => { }
  },
  'RIGHT': {// @文字列Sの右端からCNT文字を抽出する // @
    type: 'func',
    josi: [['の', 'で'], ['だけ']],
    fn: (...args) => { }
  },
  '文字右部分': {// @文字列Sの右端からCNT文字を抽出する // @もじみぎぶぶん
    type: 'func',
    josi: [['の', 'で'], ['だけ', '']],
    fn: (...args) => { }
  },
  '区切': {// @文字列Sを区切り文字Aで区切って配列で返す // @くぎる
    type: 'func',
    josi: [['の', 'を'], ['で']],
    fn: (...args) => { }
  },
  '切取': { // @文字列Sから文字列Aまでの部分を抽出する(v1非互換) // @きりとる
    type: 'func',
    josi: [['から', 'の'], ['まで', 'を']],
    fn: (...args) => { }
  },
  '文字削除': { // @文字列SのA文字目からB文字分を削除して返す // @もじさくじょ
    type: 'func',
    josi: [['の'], ['から'], ['だけ', 'を', '']],
    fn: (...args) => { }
  },

  // @置換・トリム
  '置換': {// @文字列Sのうち文字列AをBに全部置換して返す // @ちかん
    type: 'func',
    josi: [['の', 'で'], ['を', 'から'], ['に', 'へ']],
    fn: (...args) => { }
  },
  '単置換': { // @文字列Sのうち、最初に出現するAだけをBに置換して返す // @たんちかん
    type: 'func',
    josi: [['の', 'で'], ['を'], ['に', 'へ']],
    fn: (...args) => { }
  },
  'トリム': { // @文字列Sの前後にある空白を削除する // @とりむ
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '空白除去': {// @文字列Sの前後にある空白を削除する // @くうはくじょきょ
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },

  // @文字変換
  '大文字変換': {// @アルファベットの文字列Sを大文字に変換 // @おおもじへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '小文字変換': {// @アルファベットの文字列Sを小文字に変換 // @こもじへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '平仮名変換': {// @文字列Sのカタカナをひらがなに変換 // @ひらがなへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  'カタカナ変換': {// @文字列Sのひらがなをカタカナに変換 // @かたかなへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '英数全角変換': {// @文字列Sの半角英数文字を全角に変換 // @えいすうぜんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '英数半角変換': {// @文字列Sの全角英数文字を半角に変換 // @えいすうはんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '英数記号全角変換': {// @文字列Sの半角英数記号文字を全角に変換 // @えいすうきごうぜんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '英数記号半角変換': {// @文字列Sの記号文字を半角に変換 // @えいすうきごうはんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  'カタカナ全角変換': {// @文字列Sの半角カタカナを全角に変換 // @かたかなぜんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  'カタカナ半角変換': {// @文字列Sの全角カタカナを半角に変換 // @かたかなはんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '全角変換': { // @文字列Sの半角文字を全角に変換 // @ぜんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '半角変換': { // @文字列Sの全角文字を半角に変換 // @はんかくへんかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '全角カナ一覧': { type: 'const', value: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォャュョッ、。ー「」' }, // @ぜんかくかないちらん
  '全角カナ濁音一覧': { type: 'const', value: 'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ' }, // @ぜんかくかなだくおんいちらん
  '半角カナ一覧': { type: 'const', value: 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯ､｡ｰ｢｣ﾞﾟ' }, // @はんかくかないちらん
  '半角カナ濁音一覧': { type: 'const', value: 'ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ' }, // @はんかくかなだくおんいちらん

  // @JSON
  'JSONエンコード': { // @オブジェクトVをJSON形式にエンコードして返す // @JSONえんこーど
    type: 'func',
    josi: [['を', 'の']],
    fn: (...args) => { }
  },
  'JSONエンコード整形': { // @オブジェクトVをJSON形式にエンコードして整形して返す // @JSONえんこーどせいけい
    type: 'func',
    josi: [['を', 'の']],
    fn: (...args) => { }
  },
  'JSONデコード': { // @JSON文字列Sをオブジェクトにデコードして返す // @JSONでこーど
    type: 'func',
    josi: [['を', 'の', 'から']],
    fn: (...args) => { }
  },

  // @正規表現
  '正規表現マッチ': {// @文字列Aを正規表現パターンBでマッチして結果を返す(パターンBは「/pat/opt」の形式で指定。optにgの指定がなければ部分マッチが『抽出文字列』に入る) // @せいきひょうげんまっち
    type: 'func',
    josi: [['を', 'が'], ['で', 'に']],
    fn: (...args) => { }
  },
  '抽出文字列': { type: 'const', value: [] }, // @ちゅうしゅつもじれつ
  '正規表現置換': {// @文字列Sの正規表現パターンAをBに置換して結果を返す(パターンAは/pat/optで指定) // @せいきひょうげんちかん
    type: 'func',
    josi: [['の'], ['を', 'から'], ['で', 'に', 'へ']],
    fn: (...args) => { }
  },
  '正規表現区切': {// @文字列Sを正規表現パターンAで区切って配列で返す(パターンAは/pat/optで指定) // @せいきひょうげんくぎる
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },

  // @指定形式
  '通貨形式': { // @数値Vを三桁ごとにカンマで区切る // @つうかけいしき
    type: 'func',
    josi: [['を', 'の']],
    fn: (...args) => { }
  },
  'ゼロ埋': { // @数値VをA桁の0で埋める // @ぜろうめ
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },
  '空白埋': { // @文字列VをA桁の空白で埋める // @くうはくうめ
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },

  // @文字種類
  'かなか判定': { // @文字列Sの1文字目がひらがなか判定 // @かなかはんてい
    type: 'func',
    josi: [['を', 'の', 'が']],
    fn: (...args) => { }
  },
  'カタカナ判定': { // @文字列Sの1文字目がカタカナか判定 // @かたかなかはんてい
    type: 'func',
    josi: [['を', 'の', 'が']],
    fn: (...args) => { }
  },
  '数字判定': { // @文字列Sの1文字目が数字か判定 // @すうじかはんてい
    type: 'func',
    josi: [['を', 'が']],
    fn: (...args) => { }
  },
  '数列判定': { // @文字列S全部が数字か判定 // @すうれつかはんてい
    type: 'func',
    josi: [['を', 'が']],
    fn: (...args) => { }
  },

  // @配列操作
  '配列結合': { // @配列Aを文字列Sでつなげて文字列で返す // @はいれつけつごう
    type: 'func',
    josi: [['を'], ['で']],
    fn: (...args) => { }
  },
  '配列検索': { // @配列Aから文字列Sを探してインデックス番号(0起点)を返す。見つからなければ-1を返す。 // @はいれつけんさく
    type: 'func',
    josi: [['の', 'から'], ['を']],
    fn: (...args) => { }
  },
  '配列要素数': { // @配列Aの要素数を返す // @はいれつようそすう
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '要素数': { // @配列Aの要素数を返す // @ようそすう
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '配列挿入': { // @配列AのI番目(0起点)に要素Sを追加して返す(v1非互換) // @はいれつそうにゅう
    type: 'func',
    josi: [['の'], ['に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '配列一括挿入': { // @配列AのI番目(0起点)に配列bを追加して返す(v1非互換) // @はいれついっかつそうにゅう
    type: 'func',
    josi: [['の'], ['に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '配列ソート': { // @配列Aをソートして返す(A自体を変更) // @はいれつそーと
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '配列数値ソート': { // @配列Aをソートして返す(A自体を変更) // @はいれつすうちそーと
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '配列カスタムソート': { // @関数Fで配列Aをソートして返す(引数A自体を変更) // @はいれつかすたむそーと
    type: 'func',
    josi: [['で'], ['の', 'を']],
    fn: (...args) => { }
  },
  '配列逆順': { // @配列Aを逆にして返す。Aを書き換える(A自体を変更)。 // @はいれつぎゃくじゅん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '配列シャッフル': { // @配列Aをシャッフルして返す。Aを書き換える // @はいれつしゃっふる
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '配列切取': { // @配列AのI番目(0起点)の要素を切り取って返す。Aの内容を書き換える。 // @はいれつきりとる
    type: 'func',
    josi: [['の'], ['を']],
    fn: (...args) => { }
  },
  '配列取出': { // @配列AのI番目(0起点)からCNT個の要素を取り出して返す。Aの内容を書き換える // @はいれつとりだし
    type: 'func',
    josi: [['の'], ['から'], ['を']],
    fn: (...args) => { }
  },
  '配列ポップ': { // @配列Aの末尾を取り出して返す。Aの内容を書き換える。 // @はいれつぽっぷ
    type: 'func',
    josi: [['の', 'から']],
    fn: (...args) => { }
  },
  '配列追加': { // @配列Aの末尾にBを追加して返す。Aの内容を書き換える。 // @はいれつついか
    type: 'func',
    josi: [['に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '配列複製': { // @配列Aを複製して返す。 // @はいれつふくせい
    type: 'func',
    josi: [['を']],
    fn: (...args) => { }
  },
  '配列足': { // @配列Aに配列Bを足し合わせて返す。 // @はいれつたす
    type: 'func',
    josi: [['に', 'へ', 'と'], ['を']],
    fn: (...args) => { }
  },
  '配列最大値': { // @配列Aの値の最大値を調べて返す。 // @はいれつさいだいち
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '配列最小値': { // @配列Aの値の最小値を調べて返す。 // @はいれつさいしょうち
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  // @二次元配列処理
  '表ソート': { // @二次元配列AでB列目(0起点)(あるいはキー名)をキーに文字列順にソートする。Aの内容を書き換える。 // @ひょうそーと
    type: 'func',
    josi: [['の'], ['を']],
    fn: (...args) => { }
  },
  // @二次元配列処理
  '表数値ソート': { // @二次元配列AでB列目(0起点)(あるいはキー名)をキーに数値順にソートする。Aの内容を書き換える。 // @ひょうすうちそーと
    type: 'func',
    josi: [['の'], ['を']],
    fn: (...args) => { }
  },
  '表ピックアップ': { // @配列Aの列番号B(0起点)(あるいはキー名)で検索文字列Sを含む行を返す // @ひょうぴっくあっぷ
    type: 'func',
    josi: [['の'], ['から'], ['を', 'で']],
    fn: (...args) => { }
  },
  '表完全一致ピックアップ': { // @配列Aの列番号B(0起点)(あるいはキー名)で検索文字列Sと一致する行を返す // @ひょうぴっくあっぷ
    type: 'func',
    josi: [['の'], ['から'], ['を', 'で']],
    fn: (...args) => { }
  },
  '表検索': { // @二次元配列AでCOL列目(0起点)からキーSを含む行をROW行目から検索して何行目にあるか返す。見つからなければ-1を返す。 // @ひょうけんさく
    type: 'func',
    josi: [['の'], ['で', 'に'], ['から'], ['を']],
    fn: (...args) => { }
  },
  '表列数': { // @二次元配列Aの列数を調べて返す。 // @ひょうれつすう
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '表行数': { // @二次元配列Aの行数を調べて返す。 // @ひょうぎょうすう
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  '表行列交換': { // @二次元配列Aの行と列を交換して返す。 // @ひょうぎょうれつこうかん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '表右回転': { // @二次元配列Aを90度回転して返す。 // @ひょうみぎかいてん
    type: 'func',
    josi: [['の', 'を']],
    fn: (...args) => { }
  },
  '表重複削除': { // @二次元配列AのI列目にある重複項目を削除して返す。 // @ひょうじゅうふくさくじょ
    type: 'func',
    josi: [['の'], ['を', 'で']],
    fn: (...args) => { }
  },
  '表列取得': { // @二次元配列AのI列目を返す。 // @ひょうれつしゅとく
    type: 'func',
    josi: [['の'], ['を']],
    fn: (...args) => { }
  },
  '表列挿入': { // @二次元配列Aの(0から数えて)I列目に配列Sを挿入して返す // @ひょうれつそうにゅう
    type: 'func',
    josi: [['の'], ['に', 'へ'], ['を']],
    fn: (...args) => { }
  },
  '表列削除': { // @二次元配列Aの(0から数えて)I列目削除して返す // @ひょうれつそうにゅう
    type: 'func',
    josi: [['の'], ['を']],
    fn: (...args) => { }
  },
  '表列合計': { // @二次元配列Aの(0から数えて)I列目を合計して返す。 // @ひょうれつごうけい
    type: 'func',
    josi: [['の'], ['を', 'で']],
    fn: (...args) => { }
  },
  '表曖昧検索': { // @二次元配列AのROW行目からCOL列目(0起点)で正規表現Sにマッチする行を検索して何行目にあるか返す。見つからなければ-1を返す。(v1非互換) // @ひょうれつあいまいけんさく
    type: 'func',
    josi: [['の'], ['から'], ['で'], ['を']],
    fn: (...args) => { }
  },
  '表正規表現ピックアップ': { // @二次元配列AでI列目(0起点)から正規表現パターンSにマッチする行をピックアップして返す。 // @ひょうせいきひょうげんぴっくあっぷ
    type: 'func',
    josi: [['の', 'で'], ['から'], ['を']],
    fn: (...args) => { }
  },
  // @ハッシュ
  'ハッシュキー列挙': { // @ハッシュAのキー一覧を配列で返す。 // @はっしゅきーれっきょ
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'ハッシュ内容列挙': { // @ハッシュAの内容一覧を配列で返す。 // @はっしゅないようれっきょ
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  'ハッシュキー削除': { // @ハッシュAからキーKEYを削除して返す。 // @はっしゅきーさくじょ
    type: 'func',
    josi: [['から', 'の'], ['を']],
    fn: (...args) => { }
  },
  'ハッシュキー存在': { // @ハッシュAのキーKEYが存在するか確認 // @はっしゅきーそんざい
    type: 'func',
    josi: [['の', 'に'], ['が']],
    fn: (...args) => { }
  },
  // @タイマー
  '秒待機': { // @ 逐次実行構文にて、N秒の間待機する // @びょうたいき
    type: 'func',
    josi: [['']],
    fn: (...args) => { },
  },
  '秒後': { // @無名関数（あるいは、文字列で関数名を指定）FをN秒後に実行する // @びょうご
    type: 'func',
    josi: [['を'], ['']],
    fn: (...args) => { }
  },
  '秒毎': { // @無名関数（あるいは、文字列で関数名を指定）FをN秒ごとに実行する(『タイマー停止』で停止できる) // @びょうごと
    type: 'func',
    josi: [['を'], ['']],
    fn: (...args) => { }
  },
  '秒タイマー開始時': { // @無名関数（あるいは、文字列で関数名を指定）FをN秒ごとに実行する(『秒毎』と同じ) // @びょうたいまーかいししたとき
    type: 'func',
    josi: [['を'], ['']],
    fn: (...args) => { }
  },
  'タイマー停止': { // @『秒毎』『秒後』や『秒タイマー開始』で開始したタイマーを停止する // @たいまーていし
    type: 'func',
    josi: [['の', 'で']],
    fn: (...args) => { },
    return_none: false
  },
  '全タイマー停止': { // @『秒毎』『秒後』や『秒タイマー開始』で開始したタイマーを全部停止する // @ぜんたいまーていし
    type: 'func',
    josi: [],
    fn: (...args) => { },
    return_none: true
  },
  // @日時処理(簡易)
  '今': { // @現在時刻を「HH:mm:ss」の形式で返す // @いま
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  'システム時間': { // @現在のUNIX時間 (UTC(1970/1/1)からの経過秒数) を返す // @しすてむじかん
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  '今日': { // @今日の日付を「YYYY/MM/DD」の形式で返す // @きょう
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  '曜日番号取得': { // @Sに指定した日付の曜日番号をで返す。不正な日付の場合は今日の曜日番号を返す。(0=日/1=月/2=火/3=水/4=木/5=金/6=土) // @ようびばんごうしゅとく
    type: 'func',
    josi: [['の']],
    fn: (...args) => { }
  },
  // @デバッグ支援
  'エラー発生': { // @故意にエラーSを発生させる // @えらーはっせい
    type: 'func',
    josi: [['の', 'で']],
    fn: (...args) => { }
  },
  'システム関数一覧取得': { // @システム関数の一覧を取得 // @しすてむかんすういちらんしゅとく
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  'システム関数存在': { // @文字列で関数名を指定してシステム関数が存在するかを調べる // @しすてむかんすうそんざい
    type: 'func',
    josi: [['が', 'の']],
    fn: (...args) => { }
  },
  'プラグイン一覧取得': { // @利用中のプラグイン一覧を得る // @ぷらぐいんいちらんしゅとく
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },
  'モジュール一覧取得': { // @取り込んだモジュール一覧を得る // @もじゅーるいちらんしゅとく
    type: 'func',
    josi: [],
    fn: (...args) => { }
  },

  // @URLエンコードとパラメータ
  'URLエンコード': { // @URLエンコードして返す // @URLえんこーど
    type: 'func',
    josi: [['を', 'から']],
    fn: (...args) => { }
  },
  'URLデコード': { // @URLデコードして返す // @URLでこーど
    type: 'func',
    josi: [['を', 'へ', 'に']],
    fn: (...args) => { }
  },
  'URLパラメータ解析': { // @URLパラメータを解析してハッシュで返す // @URLぱらめーたかいせき
    type: 'func',
    josi: [['を', 'の', 'から']],
    fn: (...args) => { }
  }
}
