// gen_nako3_plugin_declaration.ts によって自動生成されたコード

import { PluginFunction, PluginVariable } from "./nako3_plugins"

const pluginData: Record<string, Record<string, Omit<PluginFunction, "fn"> | PluginVariable>> = {
    "plugin_browser.js": {初期化:{type:'func',josi:[]}},
    "plugin_browser_ajax.js": {AJAX送信時:{type:'func',josi:[['の'],['まで','へ','に']]},GET送信時:{type:'func',josi:[['の'],['まで','へ','に']]},POSTデータ生成:{type:'func',josi:[['の','を']]},POST送信時:{type:'func',josi:[['の'],['まで','へ','に'],['を']]},POSTフォーム送信時:{type:'func',josi:[['の'],['まで','へ','に'],['を']]},AJAX失敗時:{type:'func',josi:[['の']]},AJAXオプション:{type:'const'},AJAXオプション設定:{type:'func',josi:[['に','へ','と']]},AJAX送信:{type:'func',josi:[['まで','へ','に']]},HTTP取得:{type:'func',josi:[['の','から','を']]},POST送信:{type:'func',josi:[['まで','へ','に'],['を']]},POSTフォーム送信:{type:'func',josi:[['まで','へ','に'],['を']]}},
    "plugin_browser_audio.js": {オーディオ開:{type:'func',josi:[['を','の']]},オーディオ再生位置:{type:'const'},オーディオ再生:{type:'func',josi:[['を']]},オーディオ停止:{type:'func',josi:[['を']]},オーディオ一時停止:{type:'func',josi:[['を']]}},
    "plugin_browser_canvas.js": {描画開始:{type:'func',josi:[['の','へ','で']]},描画中キャンバス:{type:'const'},線色設定:{type:'func',josi:[['に','へ']]},塗色設定:{type:'func',josi:[['に','へ']]},線描画:{type:'func',josi:[['から'],['へ','まで']]},線太設定:{type:'func',josi:[['に','へ']]},四角描画:{type:'func',josi:[['の','へ','に']]},描画クリア:{type:'func',josi:[['の','へ','に']]},円描画:{type:'func',josi:[['へ','に'],['の']]},楕円描画:{type:'func',josi:[['へ','に','の']]},多角形描画:{type:'func',josi:[['で','の','を']]},画像描画:{type:'func',josi:[['の','を'],['の','を'],['へ','に']]},描画フォント設定:{type:'func',josi:[['を','の','で','に']]},文字描画:{type:'func',josi:[['へ','に'],['の','を']]}},
    "plugin_browser_chart.js": {グラフ描画:{type:'func',josi:[['を','で','の']]},グラフオプション:{type:'const'},線グラフ描画:{type:'func',josi:[['を','で','の']]},棒グラフ描画:{type:'func',josi:[['を','で','の']]},横棒グラフ描画:{type:'func',josi:[['を','で','の']]},円グラフ描画:{type:'func',josi:[['を','で','の']]},二次元グラフデータ変形:{type:'func',josi:[['の'],['を']]}},
    "plugin_browser_color.js": {水色:{type:'const'},紫色:{type:'const'},緑色:{type:'const'},青色:{type:'const'},赤色:{type:'const'},黄色:{type:'const'},黒色:{type:'const'},白色:{type:'const'},茶色:{type:'const'},灰色:{type:'const'},金色:{type:'const'},黄金色:{type:'const'},銀色:{type:'const'},白金色:{type:'const'},オリーブ色:{type:'const'},ベージュ色:{type:'const'},アリスブルー色:{type:'const'},RGB:{type:'func',josi:[['と'],['と'],['で','の']]},色混:{type:'func',josi:[['の']]}},
    "plugin_browser_dialog.js": {言:{type:'func',josi:[['と','を']]},尋:{type:'func',josi:[['と','を']]},文字尋:{type:'func',josi:[['と','を']]},二択:{type:'func',josi:[['で','の','と','を']]}},
    "plugin_browser_dom_basic.js": {DOCUMENT:{type:'const'},WINDOW:{type:'const'},NAVIGATOR:{type:'const'},DOM要素ID取得:{type:'func',josi:[['の','を']]},DOM要素取得:{type:'func',josi:[['の','を']]},DOM要素全取得:{type:'func',josi:[['の','を']]},タグ一覧取得:{type:'func',josi:[['の','を']]},DOMイベント設定:{type:'func',josi:[['の'],['に','へ'],['を']]},DOMテキスト設定:{type:'func',josi:[['に','の','へ'],['を']]},DOMテキスト取得:{type:'func',josi:[['の','から']]},DOM_HTML設定:{type:'func',josi:[['に','の','へ'],['を']]},DOM_HTML取得:{type:'func',josi:[['の','から']]},テキスト設定:{type:'func',josi:[['に','の','へ'],['を']]},テキスト取得:{type:'func',josi:[['の','から']]},HTML設定:{type:'func',josi:[['に','の','へ'],['を']]},HTML取得:{type:'func',josi:[['の','から']]},DOM属性設定:{type:'func',josi:[['の'],['に','へ'],['を']]},DOM属性取得:{type:'func',josi:[['の','から'],['を']]},DOM和スタイル:{type:'const'},DOMスタイル設定:{type:'func',josi:[['の'],['に','へ'],['を']]},DOMスタイル一括設定:{type:'func',josi:[['に','へ'],['を']]},DOMスタイル取得:{type:'func',josi:[['の'],['を']]},DOMスタイル一括取得:{type:'func',josi:[['の'],['を']]},DOM要素作成:{type:'func',josi:[['の','を']]},DOM子要素追加:{type:'func',josi:[['に','へ'],['を']]},DOM子要素削除:{type:'func',josi:[['から'],['を']]}},
    "plugin_browser_dom_event.js": {DOMイベント追加:{type:'func',josi:[['の'],['に','へ'],['を']]},DOMイベント削除:{type:'func',josi:[['の'],['から'],['を']]},DOMイベント発火時:{type:'func',josi:[['で'],['の'],['が']]},対象イベント:{type:'const'},DOMイベント処理停止:{type:'func',josi:[['を','の']]},クリック時:{type:'func',josi:[['で'],['を']]},読込時:{type:'func',josi:[['で'],['を']]},フォーム送信時:{type:'func',josi:[['で'],['を','の']]},押キー:{type:'const'},キー押時:{type:'func',josi:[['で'],['を','の']]},キー離時:{type:'func',josi:[['で'],['を','の']]},キータイピング時:{type:'func',josi:[['で'],['を','の']]},マウスX:{type:'const'},マウスY:{type:'const'},マウス押時:{type:'func',josi:[['で'],['を','の']]},マウス移動時:{type:'func',josi:[['で'],['を','の']]},マウス離時:{type:'func',josi:[['で'],['を','の']]},タッチX:{type:'const'},タッチY:{type:'const'},タッチ配列:{type:'const'},タッチイベント計算:{type:'func',josi:[['の']]},タッチ開始時:{type:'func',josi:[['で'],['を','の']]},タッチ時:{type:'func',josi:[['で'],['を','の']]},タッチ終了時:{type:'func',josi:[['で'],['を','の']]},タッチキャンセル時:{type:'func',josi:[['で'],['を','の']]}},
    "plugin_browser_dom_parts.js": {DOM親要素:{type:'const'},DOM生成個数:{type:'const'},DOM親要素設定:{type:'func',josi:[['に','へ']]},ボタン作成:{type:'func',josi:[['の']]},エディタ作成:{type:'func',josi:[['の']]},テキストエリア作成:{type:'func',josi:[['の']]},ラベル作成:{type:'func',josi:[['の']]},改行作成:{type:'func',josi:[]},チェックボックス作成:{type:'func',josi:[['の']]},セレクトボックス作成:{type:'func',josi:[['の']]}},
    "plugin_browser_geolocation.js": {位置情報取得時:{type:'func',josi:[['の','に','へ']]},位置情報監視時:{type:'func',josi:[['の','に','へ']]},位置情報監視停止:{type:'func',josi:[['の']]}},
    "plugin_browser_hotkey.js": {ホットキー登録:{type:'func',josi:[['に','で'],['を']]},ホットキー解除:{type:'func',josi:[['を','の']]}},
    "plugin_browser_html.js": {HTML変換:{type:'func',josi:[['を']]}},
    "plugin_browser_in_worker.js": {初期化:{type:'func',josi:[]}},
    "plugin_browser_location.js": {ブラウザ移動:{type:'func',josi:[['に','へ']]},ブラウザ戻:{type:'func',josi:[]}},
    "plugin_browser_speech.js": {話:{type:'func',josi:[['と','を','の']]},話終時:{type:'func',josi:[['で'],['と','を','の']]},話者一覧取得:{type:'func',josi:[]},話者設定:{type:'func',josi:[['に','へ']]},話者速度:{type:'const'},話者声高:{type:'const'},話者音量:{type:'const'},話者詳細設定:{type:'func',josi:[['で','に','へ']]}},
    "plugin_browser_storage.js": {保存:{type:'func',josi:[['を'],['に','へ']]},開:{type:'func',josi:[['を','から','の']]},存在:{type:'func',josi:[['が']]},ローカルストレージ保存:{type:'func',josi:[['に','へ'],['を']]},ローカルストレージ読:{type:'func',josi:[['を','から','の']]},ローカルストレージキー列挙:{type:'func',josi:[[]]},ローカルストレージキー削除:{type:'func',josi:[['を','の']]},ローカルストレージ全削除:{type:'func',josi:[]}},
    "plugin_browser_system.js": {終:{type:'func',josi:[]}},
    "plugin_browser_websocket.js": {WS接続完了時:{type:'func',josi:[['を']]},WS受信時:{type:'func',josi:[['を']]},WSエラー発生時:{type:'func',josi:[['を']]},WS接続:{type:'func',josi:[['に','へ','の']]},WS送信:{type:'func',josi:[['を','と']]},WS切断:{type:'func',josi:[]}},
    "plugin_caniuse.js": {初期化:{type:'func',josi:[]},ブラウザ名変換表:{type:'const'},対応ブラウザ一覧取得:{type:'func',josi:[]}},
    "plugin_csv.js": {初期化:{type:'func',josi:[]},CSV取得:{type:'func',josi:[['を','の','で']]},TSV取得:{type:'func',josi:[['を','の','で']]},表CSV変換:{type:'func',josi:[['を']]},表TSV変換:{type:'func',josi:[['を']]}},
    "plugin_datetime.js": {初期化:{type:'func',josi:[]},元号データ:{type:'const'},今:{type:'func',josi:[]},システム時間:{type:'func',josi:[]},今日:{type:'func',josi:[]},明日:{type:'func',josi:[]},昨日:{type:'func',josi:[]},今年:{type:'func',josi:[]},来年:{type:'func',josi:[]},去年:{type:'func',josi:[]},今月:{type:'func',josi:[]},来月:{type:'func',josi:[]},先月:{type:'func',josi:[]},曜日:{type:'func',josi:[['の']]},曜日番号取得:{type:'func',josi:[['の']]},UNIX時間変換:{type:'func',josi:[['の','を','から']]},UNIXTIME変換:{type:'func',josi:[['の','を','から']]},日時変換:{type:'func',josi:[['を','から']]},和暦変換:{type:'func',josi:[['を']]},年数差:{type:'func',josi:[['と','から'],['の','までの']]},月数差:{type:'func',josi:[['と','から'],['の','までの']]},日数差:{type:'func',josi:[['と','から'],['の','までの']]},日時差:{type:'func',josi:[['と','から'],['の','までの'],['による']]},時間差:{type:'func',josi:[['と','から'],['の','までの']]},分差:{type:'func',josi:[['と','から'],['の','までの']]},秒差:{type:'func',josi:[['と','から'],['の','までの']]},時間加算:{type:'func',josi:[['に'],['を']]},日付加算:{type:'func',josi:[['に'],['を']]},日時加算:{type:'func',josi:[['に'],['を']]}},
    "plugin_express.js": {初期化:{type:'func',josi:[]},GETデータ:{type:'const'},POSTデータ:{type:'const'},WEBサーバ名前設定:{type:'func',josi:[['に','へ']]},WEBサーバ起動:{type:'func',josi:[['の','で']]},WEBサーバ起動時:{type:'func',josi:[['を'],['の','で']]},WEBサーバ起動成功時:{type:'func',josi:[['を']]},WEBサーバ起動失敗時:{type:'func',josi:[['を']]},WEBサーバ静的パス指定:{type:'func',josi:[['を'],['に','へ']]},WEBサーバGET時:{type:'func',josi:[['を'],['に','へ']]},WEBサーバPOST時:{type:'func',josi:[['を'],['に','へ']]},WEBサーバPUT時:{type:'func',josi:[['を'],['に','へ']]},WEBサーバDELETE時:{type:'func',josi:[['を'],['に','へ']]},WEBサーバヘッダ出力:{type:'func',josi:[['を','の']]},WEBサーバステータス出力:{type:'func',josi:[['を','の']]},WEBサーバ出力:{type:'func',josi:[['を','と']]},WEBサーバリダイレクト:{type:'func',josi:[['へ','に']]}},
    "plugin_kansuji.js": {初期化:{type:'func',josi:[]},漢数字:{type:'func',josi:[['を','の']]},算用数字:{type:'func',josi:[['を','の']]}},
    "plugin_keigo.js": {初期化:{type:'func',josi:[]},お世話:{type:'const'},な:{type:'func',josi:[['に','へ']]},おります:{type:'func',josi:[]},どうぞ:{type:'func',josi:[]},よろしくお願:{type:'func',josi:[]}},
    "plugin_markup.js": {マークダウンHTML変換:{type:'func',josi:[['を']]},HTML整形:{type:'func',josi:[['を']]}},
    "plugin_math.js": {初期化:{type:'func',josi:[]},SIN:{type:'func',josi:[['の']]},COS:{type:'func',josi:[['の']]},TAN:{type:'func',josi:[['の']]},ARCSIN:{type:'func',josi:[['の']]},ARCCOS:{type:'func',josi:[['の']]},ARCTAN:{type:'func',josi:[['の']]},RAD2DEG:{type:'func',josi:[['を']]},DEG2RAD:{type:'func',josi:[['を']]},度変換:{type:'func',josi:[['を']]},ラジアン変換:{type:'func',josi:[['を']]},SIGN:{type:'func',josi:[['の']]},符号:{type:'func',josi:[['の']]},ABS:{type:'func',josi:[['の']]},絶対値:{type:'func',josi:[['の']]},EXP:{type:'func',josi:[['の']]},HYPOT:{type:'func',josi:[['と'],['の']]},斜辺:{type:'func',josi:[['と'],['の']]},LN:{type:'func',josi:[['の']]},LOG:{type:'func',josi:[['の']]},LOGN:{type:'func',josi:[['で'],['の']]},FRAC:{type:'func',josi:[['の']]},小数部分:{type:'func',josi:[['の']]},整数部分:{type:'func',josi:[['の']]},乱数:{type:'func',josi:[['の']]},SQRT:{type:'func',josi:[['の']]},平方根:{type:'func',josi:[['の']]},ROUND:{type:'func',josi:[['を']]},四捨五入:{type:'func',josi:[['を','の']]},小数点切上:{type:'func',josi:[['を'],['で']]},小数点切下:{type:'func',josi:[['を'],['で']]},小数点四捨五入:{type:'func',josi:[['を'],['で']]},CEIL:{type:'func',josi:[['を']]},切上:{type:'func',josi:[['を']]},FLOOR:{type:'func',josi:[['を']]},切捨:{type:'func',josi:[['を']]}},
    "plugin_node.js": {初期化:{type:'func',josi:[]},開:{type:'func',josi:[['を','から']]},読:{type:'func',josi:[['を','から']]},バイナリ読:{type:'func',josi:[['を','から']]},保存:{type:'func',josi:[['を'],['へ','に']]},SJISファイル読:{type:'func',josi:[['を','から']]},SJISファイル保存:{type:'func',josi:[['を'],['へ','に']]},起動待機:{type:'func',josi:[['を']]},起動:{type:'func',josi:[['を']]},起動時:{type:'func',josi:[['で'],['を']]},ブラウザ起動:{type:'func',josi:[['を']]},ファイル列挙:{type:'func',josi:[['の','を','で']]},全ファイル列挙:{type:'func',josi:[['の','を','で']]},存在:{type:'func',josi:[['が','の']]},フォルダ存在:{type:'func',josi:[['が','の']]},フォルダ作成:{type:'func',josi:[['の','を','に','へ']]},ファイルコピー:{type:'func',josi:[['から','を'],['に','へ']]},ファイルコピー時:{type:'func',josi:[['で'],['から','を'],['に','へ']]},ファイル移動:{type:'func',josi:[['から','を'],['に','へ']]},ファイル移動時:{type:'func',josi:[['で'],['から','を'],['に','へ']]},ファイル削除:{type:'func',josi:[['の','を']]},ファイル削除時:{type:'func',josi:[['で'],['の','を']]},ファイル情報取得:{type:'func',josi:[['の','から']]},ファイルサイズ取得:{type:'func',josi:[['の','から']]},ファイル名抽出:{type:'func',josi:[['から','の']]},パス抽出:{type:'func',josi:[['から','の']]},相対パス展開:{type:'func',josi:[['を'],['で']]},カレントディレクトリ取得:{type:'func',josi:[]},カレントディレクトリ変更:{type:'func',josi:[['に','へ']]},作業フォルダ取得:{type:'func',josi:[]},作業フォルダ変更:{type:'func',josi:[['に','へ']]},ホームディレクトリ取得:{type:'func',josi:[]},デスクトップ:{type:'func',josi:[]},マイドキュメント:{type:'func',josi:[]},母艦パス:{type:'const'},母艦パス取得:{type:'func',josi:[]},環境変数取得:{type:'func',josi:[['の']]},環境変数一覧取得:{type:'func',josi:[]},圧縮解凍ツールパス:{type:'const'},圧縮解凍ツールパス変更:{type:'func',josi:[['に','へ']]},解凍:{type:'func',josi:[['を','から'],['に','へ']]},解凍時:{type:'func',josi:[['で'],['を','から'],['に','へ']]},圧縮:{type:'func',josi:[['を','から'],['に','へ']]},圧縮時:{type:'func',josi:[['で'],['を','から'],['に','へ']]},終:{type:'func',josi:[]},終了:{type:'func',josi:[]},秒待:{type:'func',josi:[['']]},OS取得:{type:'func',josi:[]},OSアーキテクチャ取得:{type:'func',josi:[]},クリップボード:{type:'func',josi:[['を']]},コマンドライン:{type:'const'},ナデシコランタイム:{type:'const'},ナデシコランタイムパス:{type:'const'},標準入力取得時:{type:'func',josi:[['を']]},尋:{type:'func',josi:[['と','を']]},ASSERT等:{type:'func',josi:[['と'],['が']]},自分IPアドレス取得:{type:'func',josi:[]},自分IPV6アドレス取得:{type:'func',josi:[]},AJAX送信時:{type:'func',josi:[['の'],['まで','へ','に']]},GET送信時:{type:'func',josi:[['の'],['まで','へ','に']]},POST送信時:{type:'func',josi:[['の'],['まで','へ','に'],['を']]},POSTフォーム送信時:{type:'func',josi:[['の'],['まで','へ','に'],['を']]},AJAX失敗時:{type:'func',josi:[['の']]},AJAXオプション:{type:'const'},AJAXオプション設定:{type:'func',josi:[['に','へ','と']]},文字コード変換サポート判定:{type:'func',josi:[['の','を']]},SJIS変換:{type:'func',josi:[['に','へ','を']]},SJIS取得:{type:'func',josi:[['から','を','で']]},エンコーディング変換:{type:'func',josi:[['を'],['へ','で']]},エンコーディング取得:{type:'func',josi:[['を'],['から','で']]},キー送信:{type:'func',josi:[['を','の']]},窓アクティブ:{type:'func',josi:[['を','の']]}},
    "plugin_system.js": {初期化:{type:'func',josi:[]},ナデシコバージョン:{type:'const'},ナデシコエンジン:{type:'const'},ナデシコ種類:{type:'const'},はい:{type:'const'},いいえ:{type:'const'},オン:{type:'const'},オフ:{type:'const'},改行:{type:'const'},タブ:{type:'const'},カッコ:{type:'const'},カッコ閉:{type:'const'},波カッコ:{type:'const'},波カッコ閉:{type:'const'},OK:{type:'const'},NG:{type:'const'},PI:{type:'const'},空:{type:'const'},NULL:{type:'const'},undefined:{type:'const'},未定義:{type:'const'},エラーメッセージ:{type:'const'},対象:{type:'const'},対象キー:{type:'const'},回数:{type:'const'},CR:{type:'const'},LF:{type:'const'},空配列:{type:'func',josi:[]},空ハッシュ:{type:'func',josi:[]},空オブジェクト:{type:'func',josi:[]},表示:{type:'func',josi:[['を','と']]},表示ログ:{type:'const'},表示ログクリア:{type:'func',josi:[]},言:{type:'func',josi:[['を','と']]},コンソール表示:{type:'func',josi:[['を','と']]},足:{type:'func',josi:[['に','と'],['を']]},引:{type:'func',josi:[['から'],['を']]},掛:{type:'func',josi:[['に','と'],['を']]},倍:{type:'func',josi:[['の'],['']]},割:{type:'func',josi:[['を'],['で']]},割余:{type:'func',josi:[['を'],['で']]},以上:{type:'func',josi:[['が'],['']]},以下:{type:'func',josi:[['が'],['']]},未満:{type:'func',josi:[['が'],['']]},超:{type:'func',josi:[['が'],['']]},等:{type:'func',josi:[['が'],['と']]},範囲内:{type:'func',josi:[['が'],['から'],['の']]},連続加算:{type:'func',josi:[['を'],['に','と']]},ください:{type:'func',josi:[]},お願:{type:'func',josi:[]},拝啓:{type:'func',josi:[]},礼節レベル取得:{type:'func',josi:[]},JS実行:{type:'func',josi:[['を','で']]},JSオブジェクト取得:{type:'func',josi:[['の']]},JS関数実行:{type:'func',josi:[['を'],['で']]},ナデシコ:{type:'func',josi:[['を','で']]},ナデシコ続:{type:'func',josi:[['を','で']]},実行:{type:'func',josi:[['を','に','で']]},変数型確認:{type:'func',josi:[['の']]},TYPEOF:{type:'func',josi:[['の']]},文字列変換:{type:'func',josi:[['を']]},TOSTR:{type:'func',josi:[['を']]},整数変換:{type:'func',josi:[['を']]},TOINT:{type:'func',josi:[['を']]},実数変換:{type:'func',josi:[['を']]},TOFLOAT:{type:'func',josi:[['を']]},INT:{type:'func',josi:[['の']]},FLOAT:{type:'func',josi:[['の']]},NAN判定:{type:'func',josi:[['を']]},HEX:{type:'func',josi:[['の']]},RGB:{type:'func',josi:[['と'],['の'],['で']]},論理OR:{type:'func',josi:[['と'],['の']]},論理AND:{type:'func',josi:[['と'],['の']]},論理NOT:{type:'func',josi:[['の']]},OR:{type:'func',josi:[['と'],['の']]},AND:{type:'func',josi:[['と'],['の']]},XOR:{type:'func',josi:[['と'],['の']]},NOT:{type:'func',josi:[['の']]},SHIFT_L:{type:'func',josi:[['を'],['で']]},SHIFT_R:{type:'func',josi:[['を'],['で']]},SHIFT_UR:{type:'func',josi:[['を'],['で']]},文字数:{type:'func',josi:[['の']]},何文字目:{type:'func',josi:[['で','の'],['が']]},CHR:{type:'func',josi:[['の']]},ASC:{type:'func',josi:[['の']]},文字挿入:{type:'func',josi:[['で','の'],['に','へ'],['を']]},文字検索:{type:'func',josi:[['で','の'],['から'],['を']]},追加:{type:'func',josi:[['で','に','へ'],['を']]},一行追加:{type:'func',josi:[['で','に','へ'],['を']]},文字列分解:{type:'func',josi:[['を','の','で']]},リフレイン:{type:'func',josi:[['を','の'],['で']]},出現回数:{type:'func',josi:[['で'],['の']]},MID:{type:'func',josi:[['で','の'],['から'],['を']]},文字抜出:{type:'func',josi:[['で','の'],['から'],['を','']]},LEFT:{type:'func',josi:[['の','で'],['だけ']]},文字左部分:{type:'func',josi:[['の','で'],['だけ','']]},RIGHT:{type:'func',josi:[['の','で'],['だけ']]},文字右部分:{type:'func',josi:[['の','で'],['だけ','']]},区切:{type:'func',josi:[['の','を'],['で']]},切取:{type:'func',josi:[['から','の'],['まで','を']]},文字削除:{type:'func',josi:[['の'],['から'],['だけ','を','']]},置換:{type:'func',josi:[['の','で'],['を','から'],['に','へ']]},単置換:{type:'func',josi:[['の','で'],['を'],['に','へ']]},トリム:{type:'func',josi:[['の','を']]},空白除去:{type:'func',josi:[['の','を']]},大文字変換:{type:'func',josi:[['の','を']]},小文字変換:{type:'func',josi:[['の','を']]},平仮名変換:{type:'func',josi:[['の','を']]},カタカナ変換:{type:'func',josi:[['の','を']]},英数全角変換:{type:'func',josi:[['の','を']]},英数半角変換:{type:'func',josi:[['の','を']]},英数記号全角変換:{type:'func',josi:[['の','を']]},英数記号半角変換:{type:'func',josi:[['の','を']]},カタカナ全角変換:{type:'func',josi:[['の','を']]},カタカナ半角変換:{type:'func',josi:[['の','を']]},全角変換:{type:'func',josi:[['の','を']]},半角変換:{type:'func',josi:[['の','を']]},全角カナ一覧:{type:'const'},全角カナ濁音一覧:{type:'const'},半角カナ一覧:{type:'const'},半角カナ濁音一覧:{type:'const'},JSONエンコード:{type:'func',josi:[['を','の']]},JSONエンコード整形:{type:'func',josi:[['を','の']]},JSONデコード:{type:'func',josi:[['を','の','から']]},正規表現マッチ:{type:'func',josi:[['を','が'],['で','に']]},抽出文字列:{type:'const'},正規表現置換:{type:'func',josi:[['の'],['を','から'],['で','に','へ']]},正規表現区切:{type:'func',josi:[['を'],['で']]},通貨形式:{type:'func',josi:[['を','の']]},ゼロ埋:{type:'func',josi:[['を'],['で']]},空白埋:{type:'func',josi:[['を'],['で']]},かなか判定:{type:'func',josi:[['を','の','が']]},カタカナ判定:{type:'func',josi:[['を','の','が']]},数字判定:{type:'func',josi:[['を','が']]},数列判定:{type:'func',josi:[['を','が']]},配列結合:{type:'func',josi:[['を'],['で']]},配列検索:{type:'func',josi:[['の','から'],['を']]},配列要素数:{type:'func',josi:[['の']]},要素数:{type:'func',josi:[['の']]},配列挿入:{type:'func',josi:[['の'],['に','へ'],['を']]},配列一括挿入:{type:'func',josi:[['の'],['に','へ'],['を']]},配列ソート:{type:'func',josi:[['の','を']]},配列数値ソート:{type:'func',josi:[['の','を']]},配列カスタムソート:{type:'func',josi:[['で'],['の','を']]},配列逆順:{type:'func',josi:[['の','を']]},配列シャッフル:{type:'func',josi:[['の','を']]},配列切取:{type:'func',josi:[['の'],['を']]},配列取出:{type:'func',josi:[['の'],['から'],['を']]},配列ポップ:{type:'func',josi:[['の','から']]},配列追加:{type:'func',josi:[['に','へ'],['を']]},配列複製:{type:'func',josi:[['を']]},配列足:{type:'func',josi:[['に','へ','と'],['を']]},配列最大値:{type:'func',josi:[['の']]},配列最小値:{type:'func',josi:[['の']]},表ソート:{type:'func',josi:[['の'],['を']]},表数値ソート:{type:'func',josi:[['の'],['を']]},表ピックアップ:{type:'func',josi:[['の'],['から'],['を','で']]},表完全一致ピックアップ:{type:'func',josi:[['の'],['から'],['を','で']]},表検索:{type:'func',josi:[['の'],['で','に'],['から'],['を']]},表列数:{type:'func',josi:[['の']]},表行数:{type:'func',josi:[['の']]},表行列交換:{type:'func',josi:[['の','を']]},表右回転:{type:'func',josi:[['の','を']]},表重複削除:{type:'func',josi:[['の'],['を','で']]},表列取得:{type:'func',josi:[['の'],['を']]},表列挿入:{type:'func',josi:[['の'],['に','へ'],['を']]},表列削除:{type:'func',josi:[['の'],['を']]},表列合計:{type:'func',josi:[['の'],['を','で']]},表曖昧検索:{type:'func',josi:[['の'],['から'],['で'],['を']]},表正規表現ピックアップ:{type:'func',josi:[['の','で'],['から'],['を']]},ハッシュキー列挙:{type:'func',josi:[['の']]},ハッシュ内容列挙:{type:'func',josi:[['の']]},ハッシュキー削除:{type:'func',josi:[['から','の'],['を']]},ハッシュキー存在:{type:'func',josi:[['の','に'],['が']]},秒待機:{type:'func',josi:[['']]},秒後:{type:'func',josi:[['を'],['']]},秒毎:{type:'func',josi:[['を'],['']]},秒タイマー開始時:{type:'func',josi:[['を'],['']]},タイマー停止:{type:'func',josi:[['の','で']]},全タイマー停止:{type:'func',josi:[]},今:{type:'func',josi:[]},システム時間:{type:'func',josi:[]},今日:{type:'func',josi:[]},曜日番号取得:{type:'func',josi:[['の']]},エラー発生:{type:'func',josi:[['の','で']]},システム関数一覧取得:{type:'func',josi:[]},システム関数存在:{type:'func',josi:[['が','の']]},プラグイン一覧取得:{type:'func',josi:[]},モジュール一覧取得:{type:'func',josi:[]},URLエンコード:{type:'func',josi:[['を','から']]},URLデコード:{type:'func',josi:[['を','へ','に']]},URLパラメータ解析:{type:'func',josi:[['を','の','から']]}},
    "plugin_test.js": {ASSERT等:{type:'func',josi:[['と'],['が']]},テスト実行:{type:'func',josi:[['と'],['で']]},テスト等しい:{type:'func',josi:[['と'],['が']]}},
    "plugin_turtle.js": {初期化:{type:'func',josi:[]},カメ作成:{type:'func',josi:[]},ゾウ作成:{type:'func',josi:[]},パンダ作成:{type:'func',josi:[]},カメ操作対象設定:{type:'func',josi:[['に','へ','の']]},カメ描画先:{type:'var'},カメ画像URL:{type:'var'},カメ画像変更:{type:'func',josi:[['に','へ']]},カメ速度:{type:'const'},カメ速度設定:{type:'func',josi:[['に','へ']]},カメ移動:{type:'func',josi:[['に','へ']]},カメ起点移動:{type:'func',josi:[['に','へ']]},カメ進:{type:'func',josi:[['だけ']]},カメ戻:{type:'func',josi:[['だけ']]},カメ角度設定:{type:'func',josi:[['に','へ','の']]},カメ右回転:{type:'func',josi:[['だけ']]},カメ左回転:{type:'func',josi:[['だけ']]},カメペン色設定:{type:'func',josi:[['に','へ']]},カメペンサイズ設定:{type:'func',josi:[['に','へ']]},カメペン設定:{type:'func',josi:[['に','へ']]},カメパス開始:{type:'func',josi:[]},カメパス閉:{type:'func',josi:[]},カメパス線引:{type:'func',josi:[]},カメパス塗:{type:'func',josi:[]},カメ文字描画:{type:'func',josi:[['を','と','の']]},カメ文字設定:{type:'func',josi:[['に','へ','で']]},カメ塗色設定:{type:'func',josi:[['に','へ']]},カメ全消去:{type:'func',josi:[]},カメコマンド実行:{type:'func',josi:[['の','を']]},カメ非表示:{type:'func',josi:[]},カメ表示:{type:'func',josi:[]},カメクリック時:{type:'func',josi:[['を']]}},
    "plugin_webworker.js": {初期化:{type:'func',josi:[]},対象イベント:{type:'const'},受信データ:{type:'const'},ワーカーURL:{type:'const'},ワーカーURL設定:{type:'func',josi:[['に','へ','と']]},ワーカー起動:{type:'func',josi:[['で','を','の']]},ワーカーJS起動:{type:'func',josi:[['で','を','の']]},NAKOワーカー起動:{type:'func',josi:[['で']]},NAKOワーカーハンドラ設定:{type:'func',josi:[['に','へ','の']]},NAKOワーカーデータ受信時:{type:'func',josi:[['で'],['から']]},NAKOワーカー表示時:{type:'func',josi:[['で'],['から']]},ワーカーメッセージ受信時:{type:'func',josi:[['で'],['から']]},NAKOワーカープログラム起動:{type:'func',josi:[['に','で'],['を']]},NAKOワーカーリセット:{type:'func',josi:[['を']]},ワーカー終了:{type:'func',josi:[['を']]},NAKOワーカー終了:{type:'func',josi:[['を']]},NAKOワーカーデータ送信:{type:'func',josi:[['を'],['に','へ']]},ワーカーメッセージ送信:{type:'func',josi:[['を'],['に','へ']]},NAKOワーカー転送:{type:'func',josi:[['を'],['に','へ']]}},
    "plugin_weykturtle3d.js": {初期化:{type:'func',josi:[]},T3Dカメ作成:{type:'func',josi:[]},T3Dカメ操作対象設定:{type:'func',josi:[['に','へ','の']]},T3Dカメ描画先:{type:'var'},T3DカメモデルURL:{type:'var'},T3Dカメモデル変更:{type:'func',josi:[['に','へ']]},T3Dカメ速度:{type:'const'},T3Dカメ速度設定:{type:'func',josi:[['に','へ']]},T3Dカメ移動:{type:'func',josi:[['に','へ']]},T3Dカメ原点設定:{type:'func',josi:[]},T3Dカメ原点移動:{type:'func',josi:[]},T3Dカメ起点移動:{type:'func',josi:[['に','へ']]},T3Dカメ進:{type:'func',josi:[['だけ']]},T3Dカメ戻:{type:'func',josi:[['だけ']]},T3Dカメ上平行移動:{type:'func',josi:[['だけ']]},T3Dカメ下平行移動:{type:'func',josi:[['だけ']]},T3Dカメ左平行移動:{type:'func',josi:[['だけ']]},T3Dカメ右平行移動:{type:'func',josi:[['だけ']]},T3Dカメ動:{type:'func',josi:[['へ','に'],['だけ']]},T3Dカメ角度設定:{type:'func',josi:[['に','へ','の']]},T3Dカメ右回転:{type:'func',josi:[['だけ']]},T3Dカメ左回転:{type:'func',josi:[['だけ']]},T3Dカメ上回転:{type:'func',josi:[['だけ']]},T3Dカメ下回転:{type:'func',josi:[['だけ']]},T3Dカメ回転:{type:'func',josi:[['へ','に'],['だけ']]},T3Dカメ右ロール:{type:'func',josi:[['だけ']]},T3Dカメ左ロール:{type:'func',josi:[['だけ']]},T3Dカメ傾:{type:'func',josi:[['に','へ'],['だけ']]},T3Dカメペン色設定:{type:'func',josi:[['に','へ']]},T3Dカメペンサイズ設定:{type:'func',josi:[['に','へ']]},T3Dカメペン設定:{type:'func',josi:[['に','へ']]},T3Dカメ全消去:{type:'func',josi:[]},T3Dカメ非表示:{type:'func',josi:[]},T3Dカメ表示:{type:'func',josi:[]},T3D視点カメ設定:{type:'func',josi:[['に','へ']]},T3D描画:{type:'func',josi:[]},T3D背景色設定:{type:'func',josi:[['に','へ']]},T3DJSON取得:{type:'func',josi:[]},T3Dカメラヘルパ表示:{type:'func',josi:[]},T3Dカメラヘルパ非表示:{type:'func',josi:[]},T3D軸線ヘルパ表示:{type:'func',josi:[]},T3D軸線ヘルパ非表示:{type:'func',josi:[]}},
    "plugin_worker.js": {初期化:{type:'func',josi:[]},対象イベント:{type:'const'},受信データ:{type:'const'},SELF:{type:'const'},依頼主:{type:'const'},NAKOワーカーデータ受信時:{type:'func',josi:[['で']]},ワーカーメッセージ受信時:{type:'func',josi:[['で']]},NAKOワーカーデータ送信:{type:'func',josi:[['を']]},ワーカーメッセージ送信:{type:'func',josi:[['を']]},表示:{type:'func',josi:[['を']]},終了:{type:'func',josi:[]}},
    "builtin_display.js": {表示:{type:'func',josi:[['と','を','の']]}}}

export default pluginData
