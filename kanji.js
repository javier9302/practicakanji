const wordData=[
    {
      "kanji": "食べる",
      "hiragana": "たべる",
      "espanol": "Comer",
      "ejemploJP": "どこで食べますか？",
      "ejemploES": "¿Dónde comes?"
    },
    {
      "kanji": "今",
      "hiragana": "いま",
      "espanol": "Ahora",
      "ejemploJP": "今から夏休みが始まります",
      "ejemploES": "Desde ahora empiezan las vacaciones de verano"
    },
    {
      "kanji": "人",
      "hiragana": "ひと",
      "espanol": "Persona",
      "ejemploJP": "その人の日本語は上手です",
      "ejemploES": "El japonés de esa persona es muy bueno"
    },
    {
      "kanji": "話す",
      "hiragana": "はなす",
      "espanol": "Hablar",
      "ejemploJP": "日本語を話せますか？",
      "ejemploES": "¿Puedes hablar japonés?"
    },
    {
      "kanji": "電話",
      "hiragana": "でんわ",
      "espanol": "Teléfono",
      "ejemploJP": "新しい電話を買いました",
      "ejemploES": "Compré un nuevo teléfono"
    },
    {
      "kanji": "水",
      "hiragana": "みず",
      "espanol": "Agua",
      "ejemploJP": "水は重要です",
      "ejemploES": "El agua es importante"
    },
    {
      "kanji": "家",
      "hiragana": "いえ",
      "espanol": "Casa",
      "ejemploJP": "この家は古いですね",
      "ejemploES": "Esta casa es muy vieja, ¿no?"
    },
    {
      "kanji": "買う",
      "hiragana": "かう",
      "espanol": "Comprar",
      "ejemploJP": "スマホを買いたい",
      "ejemploES": "Quiero comprar un celular"
    },
    {
      "kanji": "岐阜県",
      "hiragana": "ぎふけん",
      "espanol": "Prefectura de Gifu",
      "ejemploJP": "岐阜県に行きたい",
      "ejemploES": "Quiero ir a la prefectura de Gifu"
    },
    {
      "kanji": "大垣市",
      "hiragana": "おおがきし",
      "espanol": "Ciudad de Ōgaki",
      "ejemploJP": "大垣市に住んでいます",
      "ejemploES": "Vivo en Ōgaki"
    },
    {
      "kanji": "月",
      "hiragana": "つき",
      "espanol": "Luna",
      "ejemploJP": "今日の月は大きいです",
      "ejemploES": "La luna de hoy está grande"
    },
    {
      "kanji": "新しい",
      "hiragana": "あたらしい",
      "espanol": "Nuevo",
      "ejemploJP": "新しいドラマは面白いです",
      "ejemploES": "La nueva serie es muy entretenida"
    },
    {
      "kanji": "自分",
      "hiragana": "じぶん",
      "espanol": "Uno mismo",
      "ejemploJP": "自分でできます",
      "ejemploES": "Puedo hacerlo por mí mismo"
    },
    {
      "kanji": "多い",
      "hiragana": "おおい",
      "espanol": "Mucho",
      "ejemploJP": "その人はお金をたくさん持っています",
      "ejemploES": "Esa persona tiene mucho dinero"
    },
    {
      "kanji": "持つ",
      "hiragana": "もつ",
      "espanol": "Tener",
      "ejemploJP": "これを持っています",
      "ejemploES": "Tengo esto"
    },
    {
      "kanji": "私",
      "hiragana": "わたし",
      "espanol": "Yo",
      "ejemploJP": "私はハビです",
      "ejemploES": "Yo soy Javi"
    },
    {
      "kanji": "家族",
      "hiragana": "かぞく",
      "espanol": "Familia",
      "ejemploJP": "私の家族を愛しています",
      "ejemploES": "Amo a mi familia"
    },
    {
      "kanji": "作る",
      "hiragana": "つくる",
      "espanol": "Hacer",
      "ejemploJP": "サラダは野菜で作ります",
      "ejemploES": "La ensalada se hace con vegetales"
    },
    {
      "kanji": "間",
      "hiragana": "あいだ",
      "espanol": "En medio",
      "ejemploJP": "コンビニと駅の間にスーパーがあります",
      "ejemploES": "Entre la estación y la tienda hay un supermercado"
    },
    {
      "kanji": "後",
      "hiragana": "あと",
      "espanol": "Después",
      "ejemploJP": "休みの後は新しい仕事を始めます",
      "ejemploES": "Después de las vacaciones, empiezo un nuevo trabajo"
    },
    {
      "kanji": "先生",
      "hiragana": "せんせい",
      "espanol": "Profesor",
      "ejemploJP": "先生はやさしいです",
      "ejemploES": "El profesor es amable"
    },
    {
      "kanji": "友達",
      "hiragana": "ともだち",
      "espanol": "Amigo",
      "ejemploJP": "友達と映画を見ました",
      "ejemploES": "Vi una película con un amigo"
    },
    {
      "kanji": "勉強",
      "hiragana": "べんきょう",
      "espanol": "Estudio",
      "ejemploJP": "毎日日本語を勉強しています",
      "ejemploES": "Estudio japonés todos los días"
    },
    {
      "kanji": "学校",
      "hiragana": "がっこう",
      "espanol": "Escuela",
      "ejemploJP": "学校は楽しいです",
      "ejemploES": "La escuela es divertida"
    },
    {
      "kanji": "電車",
      "hiragana": "でんしゃ",
      "espanol": "Tren",
      "ejemploJP": "電車で東京へ行きます",
      "ejemploES": "Voy a Tokio en tren"
    },
    {
      "kanji": "駅",
      "hiragana": "えき",
      "espanol": "Estación",
      "ejemploJP": "駅の前にカフェがあります",
      "ejemploES": "Hay una cafetería frente a la estación"
    },
    {
      "kanji": "猫",
      "hiragana": "ねこ",
      "espanol": "Gato",
      "ejemploJP": "この猫はとてもかわいい",
      "ejemploES": "Este gato es muy lindo"
    },
    {
      "kanji": "犬",
      "hiragana": "いぬ",
      "espanol": "Perro",
      "ejemploJP": "犬と公園で遊びました",
      "ejemploES": "Jugué con el perro en el parque"
    },
    {
      "kanji": "雨",
      "hiragana": "あめ",
      "espanol": "Lluvia",
      "ejemploJP": "今日は雨が降っています",
      "ejemploES": "Hoy está lloviendo"
    },
    {
      "kanji": "山",
      "hiragana": "やま",
      "espanol": "Montaña",
      "ejemploJP": "山に登りました",
      "ejemploES": "Subí una montaña"
    },
    {
      "kanji": "道",
      "hiragana": "みち",
      "espanol": "Camino",
      "ejemploJP": "この道はまっすぐです",
      "ejemploES": "Este camino es recto"
    },
    {
      "kanji": "空",
      "hiragana": "そら",
      "espanol": "Cielo",
      "ejemploJP": "空が青いです",
      "ejemploES": "El cielo está azul"
    },
    {
      "kanji": "店",
      "hiragana": "みせ",
      "espanol": "Tienda",
      "ejemploJP": "この店は安いです",
      "ejemploES": "Esta tienda es barata"
    },
    {
      "kanji": "料理",
      "hiragana": "りょうり",
      "espanol": "Cocina (comida)",
      "ejemploJP": "日本の料理が好きです",
      "ejemploES": "Me gusta la comida japonesa"
    },
    {
      "kanji": "海",
      "hiragana": "うみ",
      "espanol": "Mar",
      "ejemploJP": "夏に海へ行きたい",
      "ejemploES": "Quiero ir al mar en verano"
    },
    {
      "kanji": "朝",
      "hiragana": "あさ",
      "espanol": "Mañana",
      "ejemploJP": "朝ごはんを食べました",
      "ejemploES": "Comí desayuno"
    },
    {
      "kanji": "夜",
      "hiragana": "よる",
      "espanol": "Noche",
      "ejemploJP": "夜は静かです",
      "ejemploES": "La noche es tranquila"
    },
    {
      "kanji": "光",
      "hiragana": "ひかり",
      "espanol": "Luz",
      "ejemploJP": "太陽の光が強いです",
      "ejemploES": "La luz del sol es fuerte"
    },
    {
      "kanji": "体",
      "hiragana": "からだ",
      "espanol": "Cuerpo",
      "ejemploJP": "体に気をつけてください",
      "ejemploES": "Cuida tu cuerpo"
    },
    {
      "kanji": "心",
      "hiragana": "こころ",
      "espanol": "Corazón (sentimientos)",
      "ejemploJP": "心が温かくなりました",
      "ejemploES": "Mi corazón se calentó (me sentí conmovido)"
    },
    {
      "kanji": "天気",
      "hiragana": "てんき",
      "espanol": "Clima",
      "ejemploJP": "今日はいい天気ですね。",
      "ejemploES": "Hoy hace buen clima, ¿verdad?"
    },
    {
      "kanji": "お金",
      "hiragana": "おかね",
      "espanol": "Dinero",
      "ejemploJP": "お金が足りません。",
      "ejemploES": "No tengo suficiente dinero."
    },
    {
      "kanji": "入",
      "hiragana": "いり",
      "espanol": "Entrar",
      "ejemploJP": "教室に入ります。",
      "ejemploES": "Entro al salón de clases."
    },
    {
      "kanji": "右",
      "hiragana": "みぎ",
      "espanol": "Derecha",
      "ejemploJP": "右に曲がってください。",
      "ejemploES": "Gire a la derecha, por favor."
    },
    {
      "kanji": "読む",
      "hiragana": "よむ",
      "espanol": "Leer",
      "ejemploJP": "毎日本を読みます。",
      "ejemploES": "Leo libros todos los días."
    },
    {
      "kanji": "友",
      "hiragana": "とも",
      "espanol": "Amigo",
      "ejemploJP": "友と遊びました。",
      "ejemploES": "Jugué con un amigo."
    },
    {
      "kanji": "達",
      "hiragana": "たち",
      "espanol": "Plural de personas",
      "ejemploJP": "子供達が元気です。",
      "ejemploES": "Los niños están enérgicos."
    },
    {
      "kanji": "書",
      "hiragana": "かく",
      "espanol": "Escribir",
      "ejemploJP": "手紙を書きます。",
      "ejemploES": "Escribo una carta."
    },
    {
      "kanji": "毎",
      "hiragana": "まい",
      "espanol": "Cada",
      "ejemploJP": "毎朝ジョギングします。",
      "ejemploES": "Corro cada mañana."
    },
    {
      "kanji": "年",
      "hiragana": "とし",
      "espanol": "Año",
      "ejemploJP": "来年は大学に入ります。",
      "ejemploES": "Entraré a la universidad el próximo año."
    },
    {
      "kanji": "毎年",
      "hiragana": "まいとし",
      "espanol": "Cada año",
      "ejemploJP": "毎年旅行します。",
      "ejemploES": "Viajo cada año."
    },
    {
      "kanji": "高",
      "hiragana": "たかい",
      "espanol": "Alto / caro",
      "ejemploJP": "この店は高いです。",
      "ejemploES": "Esta tienda es cara."
    },
    {
      "kanji": "行",
      "hiragana": "いく",
      "espanol": "Ir",
      "ejemploJP": "学校へ行きます。",
      "ejemploES": "Voy a la escuela."
    },
    {
      "kanji": "時",
      "hiragana": "じ",
      "espanol": "Hora",
      "ejemploJP": "今は三時です。",
      "ejemploES": "Ahora son las tres."
    },
    {
      "kanji": "時間",
      "hiragana": "じかん",
      "espanol": "Tiempo / hora",
      "ejemploJP": "時間がありますか？",
      "ejemploES": "¿Tienes tiempo?"
    },
    {
      "kanji": "出",
      "hiragana": "でる",
      "espanol": "Salir",
      "ejemploJP": "家を出ました。",
      "ejemploES": "Salí de casa."
    },
    {
      "kanji": "中",
      "hiragana": "なか",
      "espanol": "Dentro",
      "ejemploJP": "箱の中にあります。",
      "ejemploES": "Está dentro de la caja."
    },
    {
      "kanji": "国",
      "hiragana": "くに",
      "espanol": "País",
      "ejemploJP": "日本は美しい国です。",
      "ejemploES": "Japón es un país hermoso."
    },
    {
      "kanji": "聞",
      "hiragana": "きく",
      "espanol": "Escuchar / preguntar",
      "ejemploJP": "音楽を聞きます。",
      "ejemploES": "Escucho música."
    },
    {
      "kanji": "何",
      "hiragana": "なに",
      "espanol": "Qué",
      "ejemploJP": "何を食べたいですか？",
      "ejemploES": "¿Qué quieres comer?"
    },
    {
      "kanji": "出口",
      "hiragana": "でぐち",
      "espanol": "Salida",
      "ejemploJP": "出口はどこですか？",
      "ejemploES": "¿Dónde está la salida?"
    },
    {
      "kanji": "古",
      "hiragana": "ふるい",
      "espanol": "Viejo",
      "ejemploJP": "古い本があります。",
      "ejemploES": "Hay un libro viejo."
    },
    {
      "kanji": "白",
      "hiragana": "しろ",
      "espanol": "Blanco",
      "ejemploJP": "白い猫が好きです。",
      "ejemploES": "Me gustan los gatos blancos."
    },
    {
      "kanji": "花",
      "hiragana": "はな",
      "espanol": "Flor",
      "ejemploJP": "花が咲いています。",
      "ejemploES": "Las flores están floreciendo."
    },
    {
      "kanji": "女",
      "hiragana": "おんな",
      "espanol": "Mujer",
      "ejemploJP": "その女の人は先生です。",
      "ejemploES": "Esa mujer es profesora."
    },
    {
      "kanji": "会",
      "hiragana": "あう",
      "espanol": "Encontrarse / reunirse",
      "ejemploJP": "友達に会いました。",
      "ejemploES": "Me encontré con un amigo."
    },
    {
      "kanji": "仕事",
      "hiragana": "しごと",
      "espanol": "Trabajo",
      "ejemploJP": "仕事が忙しいです。",
      "ejemploES": "El trabajo está ocupado."
    },
    {
      "kanji": "映画",
      "hiragana": "えいが",
      "espanol": "Película",
      "ejemploJP": "映画を見ました。",
      "ejemploES": "Vi una película."
    },
    {
      "kanji": "会社",
      "hiragana": "かいしゃ",
      "espanol": "Empresa / compañía",
      "ejemploJP": "会社に勤めています。",
      "ejemploES": "Trabajo en una empresa."
    },
    {
      "kanji": "広",
      "hiragana": "ひろい",
      "espanol": "Amplio",
      "ejemploJP": "この部屋は広いです。",
      "ejemploES": "Esta habitación es amplia."
    },
    {
      "kanji": "飲",
      "hiragana": "のむ",
      "espanol": "Beber",
      "ejemploJP": "水を飲みます。",
      "ejemploES": "Bebo agua."
    },
    {
      "kanji": "赤",
      "hiragana": "あか",
      "espanol": "Rojo",
      "ejemploJP": "赤い花が咲いています。",
      "ejemploES": "Las flores rojas están floreciendo."
    },
    {
      "kanji": "物",
      "hiragana": "もの",
      "espanol": "Cosa / objeto",
      "ejemploJP": "大切な物をなくしました。",
      "ejemploES": "Perdí algo importante."
    },
    {
      "kanji": "歩",
      "hiragana": "あるく",
      "espanol": "Caminar",
      "ejemploJP": "駅まで歩きます。",
      "ejemploES": "Camino hasta la estación."
    },
    {
      "kanji": "近",
      "hiragana": "ちかい",
      "espanol": "Cerca",
      "ejemploJP": "駅は近いです。",
      "ejemploES": "La estación está cerca."
    },
    {
      "kanji": "銀行",
      "hiragana": "ぎんこう",
      "espanol": "Banco",
      "ejemploJP": "銀行でお金を下ろしました。",
      "ejemploES": "Retiré dinero en el banco."
    },
    {
      "kanji": "半",
      "hiragana": "はん",
      "espanol": "Mitad / media",
      "ejemploJP": "八時半に起きます。",
      "ejemploES": "Me levanto a las ocho y media."
    },
    {
      "kanji": "週",
      "hiragana": "しゅう",
      "espanol": "Semana",
      "ejemploJP": "来週旅行します。",
      "ejemploES": "Viajaré la próxima semana."
    },
    {
      "kanji": "安",
      "hiragana": "やすい",
      "espanol": "Barato",
      "ejemploJP": "この店は安いです。",
      "ejemploES": "Esta tienda es barata."
    },
    {
      "kanji": "母",
      "hiragana": "はは",
      "espanol": "Madre",
      "ejemploJP": "母に手紙を書きました。",
      "ejemploES": "Le escribí una carta a mi madre."
    },
    {
      "kanji": "父",
      "hiragana": "ちち",
      "espanol": "Padre",
      "ejemploJP": "父は会社員です。",
      "ejemploES": "Mi padre es un empleado de empresa."
    },
    {
      "kanji": "住",
      "hiragana": "すむ",
      "espanol": "Vivir (residir)",
      "ejemploJP": "東京に住んでいます。",
      "ejemploES": "Vivo en Tokio."
    },
    {
      "kanji": "名前",
      "hiragana": "なまえ",
      "espanol": "Nombre",
      "ejemploJP": "あなたの名前は何ですか？",
      "ejemploES": "¿Cuál es tu nombre?"
    },
    {
      "kanji": "知",
      "hiragana": "しる",
      "espanol": "Saber / conocer",
      "ejemploJP": "その人を知っていますか？",
      "ejemploES": "¿Conoces a esa persona?"
    },
    {
      "kanji": "話",
      "hiragana": "はなす",
      "espanol": "Hablar",
      "ejemploJP": "日本語で話します。",
      "ejemploES": "Hablo en japonés."
    },
    {
      "kanji": "本",
      "hiragana": "ほん",
      "espanol": "Libro",
      "ejemploJP": "本を読みました。",
      "ejemploES": "Leí un libro."
    },
    {
      "kanji": "思",
      "hiragana": "おもう",
      "espanol": "Pensar",
      "ejemploJP": "それはいいと思います。",
      "ejemploES": "Creo que eso está bien."
    },
    {
      "kanji": "長",
      "hiragana": "ながい",
      "espanol": "Largo",
      "ejemploJP": "長い道を歩きました。",
      "ejemploES": "Caminé por un camino largo."
    },
    {
      "kanji": "車",
      "hiragana": "くるま",
      "espanol": "Auto / coche",
      "ejemploJP": "車を運転します。",
      "ejemploES": "Conduzco un auto."
    },
    {
      "kanji": "幸",
      "hiragana": "しあわせ",
      "espanol": "Felicidad",
      "ejemploJP": "幸せな生活を送っています。",
      "ejemploES": "Llevo una vida feliz."
    },
    {
      "kanji": "悲",
      "hiragana": "かなしい",
      "espanol": "Triste",
      "ejemploJP": "悲しい映画でした。",
      "ejemploES": "Fue una película triste."
    },
    {
      "kanji": "僕",
      "hiragana": "ぼく",
      "espanol": "Yo (masculino informal)",
      "ejemploJP": "僕の名前はタロウです。",
      "ejemploES": "Mi nombre es Tarou."
    },
    {
      "kanji": "君",
      "hiragana": "きみ",
      "espanol": "Tú (informal)",
      "ejemploJP": "君は元気ですか？",
      "ejemploES": "¿Estás bien?"
    },
    {
      "kanji": "燦",
      "hiragana": "さん",
      "espanol": "Brillante / Resplandeciente",
      "ejemploJP": "燦々と太陽が輝く。",
      "ejemploES": "El sol brilla resplandeciente."
    },
    {
      "kanji": "見",
      "hiragana": "みる",
      "espanol": "Ver / Mirar",
      "ejemploJP": "映画を見ます。",
      "ejemploES": "Veo una película."
    },
    {
      "kanji": "味",
      "hiragana": "あじ",
      "espanol": "Sabor",
      "ejemploJP": "この料理はいい味です。",
      "ejemploES": "Esta comida tiene buen sabor."
    },
    {
      "kanji": "有",
      "hiragana": "ある",
      "espanol": "Tener / Existir (para cosas)",
      "ejemploJP": "時間がありますか？",
      "ejemploES": "¿Tienes tiempo?"
    },
    {
      "kanji": "相",
      "hiragana": "あい",
      "espanol": "Mutuo / Aspecto",
      "ejemploJP": "相談しましょう。",
      "ejemploES": "Vamos a consultar."
    },
    {
      "kanji": "答",
      "hiragana": "こたえ",
      "espanol": "Respuesta",
      "ejemploJP": "質問に答えます。",
      "ejemploES": "Respondo a la pregunta."
    },
    {
      "kanji": "誰",
      "hiragana": "だれ",
      "espanol": "Quién",
      "ejemploJP": "あの人は誰ですか？",
      "ejemploES": "¿Quién es esa persona?"
    },
    {
      "kanji": "得",
      "hiragana": "える",
      "espanol": "Obtener / Ventaja",
      "ejemploJP": "利益を得る。",
      "ejemploES": "Obtengo ganancias."
    },
    {
      "kanji": "堕",
      "hiragana": "だ",
      "espanol": "Caer / Degradarse",
      "ejemploJP": "堕落した生活。",
      "ejemploES": "Una vida de decadencia."
    },
    {
      "kanji": "目",
      "hiragana": "め",
      "espanol": "Ojo",
      "ejemploJP": "目が痛いです。",
      "ejemploES": "Me duelen los ojos."
    },
    {
      "kanji": "奪",
      "hiragana": "うばう",
      "espanol": "Arrebatar / Robar",
      "ejemploJP": "彼は財布を奪った。",
      "ejemploES": "Él robó la billetera."
    },
    {
      "kanji": "究",
      "hiragana": "きゅう",
      "espanol": "Investigar",
      "ejemploJP": "物理を究める。",
      "ejemploES": "Profundizar en la física."
    },
    {
      "kanji": "極",
      "hiragana": "きょく",
      "espanol": "Extremo / Máximo",
      "ejemploJP": "北極に行きたい。",
      "ejemploES": "Quiero ir al Polo Norte."
    },
    {
      "kanji": "金",
      "hiragana": "きん",
      "espanol": "Oro / Dinero",
      "ejemploJP": "お金がありません。",
      "ejemploES": "No tengo dinero."
    },
    {
      "kanji": "輪",
      "hiragana": "わ",
      "espanol": "Anillo / Círculo",
      "ejemploJP": "花の輪を作る。",
      "ejemploES": "Hago una corona de flores."
    },
    {
      "kanji": "際",
      "hiragana": "さい",
      "espanol": "Ocasión / Frontera",
      "ejemploJP": "旅行の際にパスポートが必要です。",
      "ejemploES": "Se necesita pasaporte para el viaje."
    },
    {
      "kanji": "現",
      "hiragana": "げん",
      "espanol": "Aparecer / Actual",
      "ejemploJP": "彼が突然現れた。",
      "ejemploES": "Él apareció de repente."
    },
    {
      "kanji": "一",
      "hiragana": "いち",
      "espanol": "Uno",
      "ejemploJP": "一つお願いします。",
      "ejemploES": "Uno, por favor."
    },
    {
      "kanji": "番",
      "hiragana": "ばん",
      "espanol": "Número / Turno",
      "ejemploJP": "一番好きな食べ物は寿司です。",
      "ejemploES": "Mi comida favorita es el sushi."
    },
    {
      "kanji": "星",
      "hiragana": "ほし",
      "espanol": "Estrella",
      "ejemploJP": "夜空に星が輝いている。",
      "ejemploES": "Las estrellas brillan en el cielo nocturno."
    },
    {
      "kanji": "荒",
      "hiragana": "あらい",
      "espanol": "Salvaje / Agitado",
      "ejemploJP": "海が荒れている。",
      "ejemploES": "El mar está agitado."
    },
    {
      "kanji": "秘",
      "hiragana": "ひ",
      "espanol": "Secreto",
      "ejemploJP": "これは秘伝のレシピです。",
      "ejemploES": "Esta es una receta secreta."
    },
    {
      "kanji": "密",
      "hiragana": "みつ",
      "espanol": "Denso / Secreto",
      "ejemploJP": "密な関係。",
      "ejemploES": "Relación estrecha."
    },
    {
      "kanji": "抜",
      "hiragana": "ぬく",
      "espanol": "Quitar / Sacar",
      "ejemploJP": "歯を抜きました。",
      "ejemploES": "Me sacaron un diente."
    },
    {
      "kanji": "彼",
      "hiragana": "かれ",
      "espanol": "Él / Novio",
      "ejemploJP": "彼は親切です。",
      "ejemploES": "Él es amable."
    },
    {
      "kanji": "完",
      "hiragana": "かん",
      "espanol": "Completo",
      "ejemploJP": "作業が完了しました。",
      "ejemploES": "El trabajo ha sido completado."
    },
    {
      "kanji": "璧",
      "hiragana": "へき",
      "espanol": "Joya / Perfecto (usado en 完璧)",
      "ejemploJP": "彼の発表は完璧だった。",
      "ejemploES": "Su presentación fue perfecta."
    },
    {
      "kanji": "嘘",
      "hiragana": "うそ",
      "espanol": "Mentira",
      "ejemploJP": "それは嘘ですか？",
      "ejemploES": "¿Eso es una mentira?"
    },
    {
      "kanji": "天",
      "hiragana": "てん",
      "espanol": "Cielo",
      "ejemploJP": "天気がいいですね。",
      "ejemploES": "Hace buen clima, ¿verdad?"
    },
    {
      "kanji": "才",
      "hiragana": "さい",
      "espanol": "Talento / Edad (años)",
      "ejemploJP": "彼は天才です。",
      "ejemploES": "Él es un genio."
    },
    {
      "kanji": "的",
      "hiragana": "てき",
      "espanol": "Objetivo / Sufijo adjetival",
      "ejemploJP": "日本的な文化",
      "ejemploES": "Cultura japonesa (típica)"
    },
    {
      "kanji": "様",
      "hiragana": "さま",
      "espanol": "Señor(a) / Modo",
      "ejemploJP": "山田様、お元気ですか？",
      "ejemploES": "Señor Yamada, ¿cómo está?"
    },
    {
      "kanji": "好",
      "hiragana": "すき",
      "espanol": "Gustar",
      "ejemploJP": "犬が好きです。",
      "ejemploES": "Me gustan los perros."
    },
    {
      "kanji": "遊",
      "hiragana": "あそぶ",
      "espanol": "Jugar / Pasar tiempo",
      "ejemploJP": "友達と遊びます。",
      "ejemploES": "Juego con mis amigos."
    },
    {
      "kanji": "内",
      "hiragana": "うち",
      "espanol": "Dentro / Interior",
      "ejemploJP": "家の内にいます。",
      "ejemploES": "Estoy dentro de casa."
    },
    {
      "kanji": "緒",
      "hiragana": "しょ",
      "espanol": "Inicio / Cordón",
      "ejemploJP": "一緒に行きましょう。",
      "ejemploES": "Vamos juntos."
    },
    {
      "kanji": "淡",
      "hiragana": "あわい",
      "espanol": "Claro / Suave",
      "ejemploJP": "淡い色が好きです。",
      "ejemploES": "Me gustan los colores suaves."
    },
    {
      "kanji": "始め",
      "hiragana": "はじめ",
      "espanol": "Comienzo",
      "ejemploJP": "新しい仕事の始めが大事です。",
      "ejemploES": "El comienzo de un nuevo trabajo es importante."
    },
    {
      "kanji": "手",
      "hiragana": "て",
      "espanol": "Mano",
      "ejemploJP": "その子の手は小さいです。",
      "ejemploES": "La mano de ese niño es pequeña."
    },
    {
      "kanji": "つなぐ",
      "hiragana": "つなぐ",
      "espanol": "Tomar de la mano",
      "ejemploJP": "道で手をつないだ。",
      "ejemploES": "Nos tomamos de la mano en la calle."
    },
    {
      "kanji": "喧嘩",
      "hiragana": "けんか",
      "espanol": "Pelea",
      "ejemploJP": "昨日友達と喧嘩しました。",
      "ejemploES": "Ayer peleé con un amigo."
    },
    {
      "kanji": "記念日",
      "hiragana": "きねんび",
      "espanol": "Aniversario",
      "ejemploJP": "今日は結婚記念日です。",
      "ejemploES": "Hoy es nuestro aniversario de boda."
    },
    {
      "kanji": "忘れる",
      "hiragana": "わすれる",
      "espanol": "Olvidar",
      "ejemploJP": "宿題を忘れました。",
      "ejemploES": "Olvidé la tarea."
    },
    {
      "kanji": "事",
      "hiragana": "こと",
      "espanol": "Cosa",
      "ejemploJP": "大切なことを話しましょう。",
      "ejemploES": "Hablemos de algo importante."
    },
    {
      "kanji": "覚える",
      "hiragana": "おぼえる",
      "espanol": "Recordar",
      "ejemploJP": "名前を覚えましたか？",
      "ejemploES": "¿Recordaste el nombre?"
    },
    {
      "kanji": "決める",
      "hiragana": "きめる",
      "espanol": "Decidir",
      "ejemploJP": "将来のことを決めました。",
      "ejemploES": "He decidido sobre el futuro."
    },
    {
      "kanji": "数",
      "hiragana": "かず",
      "espanol": "Cantidad",
      "ejemploJP": "人数の数を数えてください。",
      "ejemploES": "Cuenta la cantidad de personas."
    },
    {
      "kanji": "愛しい",
      "hiragana": "いとしい",
      "espanol": "Amado",
      "ejemploJP": "彼女はとても愛しい人です。",
      "ejemploES": "Ella es una persona muy amada."
    },
    {
      "kanji": "怖い",
      "hiragana": "こわい",
      "espanol": "Miedoso",
      "ejemploJP": "怖い夢を見た。",
      "ejemploES": "Tuve un sueño aterrador."
    },
    {
      "kanji": "別れる",
      "hiragana": "わかれる",
      "espanol": "Separarse",
      "ejemploJP": "友達と駅で別れました。",
      "ejemploES": "Me separé de mi amigo en la estación."
    },
    {
      "kanji": "思い出す",
      "hiragana": "おもいだす",
      "espanol": "Recordar",
      "ejemploJP": "昔のことを思い出します。",
      "ejemploES": "Recuerdo cosas del pasado."
    },
    {
      "kanji": "何処",
      "hiragana": "どこ",
      "espanol": "Dónde",
      "ejemploJP": "財布は何処にありますか？",
      "ejemploES": "¿Dónde está la cartera?"
    },
    {
      "kanji": "再会",
      "hiragana": "さいかい",
      "espanol": "Reencuentro",
      "ejemploJP": "10年ぶりの再会だった。",
      "ejemploES": "Fue un reencuentro tras 10 años."
    },
    {
      "kanji": "謝る",
      "hiragana": "あやまる",
      "espanol": "Disculparse",
      "ejemploJP": "先生に謝った。",
      "ejemploES": "Le pedí disculpas al profesor."
    },
    {
      "kanji": "眠る",
      "hiragana": "ねむる",
      "espanol": "Dormir",
      "ejemploJP": "赤ちゃんが眠っている。",
      "ejemploES": "El bebé está dormido."
    },
    {
      "kanji": "出会う",
      "hiragana": "であう",
      "espanol": "Encontrarse (por primera vez)",
      "ejemploJP": "彼女とは大学で出会った。",
      "ejemploES": "La conocí en la universidad."
    },
    {
      "kanji": "感じる",
      "hiragana": "かんじる",
      "espanol": "Sentir",
      "ejemploJP": "寒さを感じました。",
      "ejemploES": "Sentí frío."
    },
    {
      "kanji": "傍",
      "hiragana": "そば",
      "espanol": "Al lado",
      "ejemploJP": "犬がずっと傍にいる。",
      "ejemploES": "El perro siempre está a mi lado."
    },
    {
      "kanji": "居る",
      "hiragana": "いる",
      "espanol": "Estar (seres vivos)",
      "ejemploJP": "家に猫がいます。",
      "ejemploES": "Hay un gato en casa."
    },
    {
      "kanji": "誓う",
      "hiragana": "ちかう",
      "espanol": "Jurar",
      "ejemploJP": "永遠の愛を誓った。",
      "ejemploES": "Juró amor eterno."
    },
    {
      "kanji": "柔らかい",
      "hiragana": "やわらかい",
      "espanol": "Suave",
      "ejemploJP": "この毛布は柔らかいです。",
      "ejemploES": "Esta manta es suave."
    },
    {
      "kanji": "陽だまり",
      "hiragana": "ひだまり",
      "espanol": "Lugar soleado",
      "ejemploJP": "猫が陽だまりで寝ている。",
      "ejemploES": "El gato duerme en un lugar soleado."
    },
    {
      "kanji": "物語",
      "hiragana": "ものがたり",
      "espanol": "Historia",
      "ejemploJP": "これは愛の物語です。",
      "ejemploES": "Esta es una historia de amor."
    },
    {
      "kanji": "映す",
      "hiragana": "うつす",
      "espanol": "Reflejar",
      "ejemploJP": "湖が山を映している。",
      "ejemploES": "El lago refleja la montaña."
    },
    {
      "kanji": "訳",
      "hiragana": "わけ",
      "espanol": "Razón",
      "ejemploJP": "遅れた訳を教えてください。",
      "ejemploES": "Dime la razón del retraso."
    },
    {
      "kanji": "通り過ぎる",
      "hiragana": "とおりすぎる",
      "espanol": "Atravesar/Pasar",
      "ejemploJP": "バスが駅を通り過ぎるとき、急いで走り出した。",
      "ejemploES": "Cuando el autobús pasó por la estación, comencé a correr rápidamente."
    },
    {
      "kanji": "風",
      "hiragana": "かぜ",
      "espanol": "Viento",
      "ejemploJP": "風が強く吹いているので、外に出たくない。",
      "ejemploES": "El viento está soplando fuerte, así que no quiero salir."
    },
    {
      "kanji": "寂しさ",
      "hiragana": "さびしさ",
      "espanol": "Soledad",
      "ejemploJP": "彼は寂しさを感じると、いつも音楽を聴く。",
      "ejemploES": "Cuando él siente soledad, siempre escucha música."
    },
    {
      "kanji": "運ぶ",
      "hiragana": "はこぶ",
      "espanol": "Traer, transportar",
      "ejemploJP": "彼は重い荷物を運ぶために助けが必要だった。",
      "ejemploES": "Él necesitaba ayuda para transportar la carga pesada."
    },
    {
      "kanji": "泣く",
      "hiragana": "なく",
      "espanol": "Llorar",
      "ejemploJP": "彼女は悲しくて泣いている。",
      "ejemploES": "Ella está llorando porque está triste."
    },
    {
      "kanji": "透き通る",
      "hiragana": "すきとおる",
      "espanol": "Ser transparente, claro",
      "ejemploJP": "透き通るような青い海が見える場所に行きたい。",
      "ejemploES": "Quiero ir a un lugar donde se vea un mar tan transparente como el cristal."
    },
    {
      "kanji": "尖る",
      "hiragana": "とがる",
      "espanol": "Palabras tajantes, duras, frias",
      "ejemploJP": "彼の言葉は尖っていて、相手を傷つけてしまった。",
      "ejemploES": "Sus palabras fueron tan duras que terminaron lastimando a la otra persona."
    },
    {
      "kanji": "言葉",
      "hiragana": "ことば",
      "espanol": "Palabras, lenguaje, dialecto",
      "ejemploJP": "彼の言葉に込められた思いを理解できた。",
      "ejemploES": "Pude entender los sentimientos que estaban detrás de sus palabras."
    },
    {
      "kanji": "暖かい",
      "hiragana": "あたたかい",
      "espanol": "Calido",
      "ejemploJP": "この毛布はとても暖かいです。",
      "ejemploES": "Esta manta es muy cálida."
    },
    {
      "kanji": "優しい",
      "hiragana": "やさしい",
      "espanol": "Amable",
      "ejemploJP": "彼はとても優しい人で、みんなに親切に接する。",
      "ejemploES": "Él es una persona muy amable y siempre trata bien a los demás."
    },
    {
      "kanji": "笑顔",
      "hiragana": "えがお",
      "espanol": "Cara sonriente",
      "ejemploJP": "彼女の笑顔を見ると、私も嬉しくなる。",
      "ejemploES": "Cuando veo su sonrisa, también me siento feliz."
    },
    {
      "kanji": "夢",
      "hiragana": "ゆめ",
      "espanol": "Sueño",
      "ejemploJP": "子供のころの夢は宇宙飛行士になることだった。",
      "ejemploES": "Mi sueño cuando era niño era ser astronauta."
    },
    {
      "kanji": "全部",
      "hiragana": "ぜんぶ",
      "espanol": "Todo, entero, todo junto",
      "ejemploJP": "今日は全部やり終わった。",
      "ejemploES": "Hoy he terminado todo."
    },
    {
      "kanji": "真似",
      "hiragana": "まね",
      "espanol": "Imitar, copiar / conducta , comportamiento",
      "ejemploJP": "彼は先生の真似をして、みんなを笑わせた。",
      "ejemploES": "Él imitó al profesor y hizo reír a todos."
    },
    {
      "kanji": "少し",
      "hiragana": "すこし",
      "espanol": "Un poco",
      "ejemploJP": "少しだけ手伝ってくれますか？",
      "ejemploES": "¿Puedes ayudarme un poco?"
    },
    {
      "kanji": "駆ける",
      "hiragana": "かける",
      "espanol": "Correr, carrera",
      "ejemploJP": "学校まで駆けて行ったので、遅刻しなかった。",
      "ejemploES": "Corrí hasta la escuela, por lo que no llegué tarde."
    },
    {
      "kanji": "上がる",
      "hiragana": "あがる",
      "espanol": "Subir, ir hacia arriba",
      "ejemploJP": "温度が急に上がって、暑くなった。",
      "ejemploES": "La temperatura subió de repente y se volvió caluroso."
    },
    {
      "kanji": "嬉しい",
      "hiragana": "うれしい",
      "espanol": "Feliz",
      "ejemploJP": "あなたが来てくれてとても嬉しいです。",
      "ejemploES": "Me siento muy feliz de que hayas venido."
    },
    {
      "kanji": "越し",
      "hiragana": "ごし",
      "espanol": "Cruzar, ir mas alla, a traves del tiempo",
      "ejemploJP": "窓越しに見た夕日が美しかった。",
      "ejemploES": "El atardecer que vi a través de la ventana era hermoso."
    },
    {
      "kanji": "追い越す",
      "hiragana": "おいこす",
      "espanol": "Pasar, sobrepasar",
      "ejemploJP": "車を追い越すのは危険だからやめてください。",
      "ejemploES": "No adelantes a otros coches, es peligroso."
    },
    {
      "kanji": "願い",
      "hiragana": "ねがい",
      "espanol": "Deseo，Esperanza",
      "ejemploJP": "私の願いは、みんなが幸せであることです。",
      "ejemploES": "Mi deseo es que todos sean felices."
    },
    {
      "kanji": "無",
      "hiragana": "む",
      "espanol": "Rel. a perder, nada, obtener nada, gratis.",
      "ejemploJP": "これをやっても無駄だとわかっている。",
      "ejemploES": "Sé que esto será en vano, pero lo haré de todos modos."
    },
    {
      "kanji": "入れる",
      "hiragana": "いれる",
      "espanol": "Poner, introducir, meter",
      "ejemploJP": "鞄に財布を入れるのを忘れないで。",
      "ejemploES": "No olvides meter la cartera en la bolsa."
    },
    {
      "kanji": "部屋",
      "hiragana": "へや",
      "espanol": "Habitacion, apartamento, recamara",
      "ejemploJP": "部屋が散らかっているので、片付けなければならない。",
      "ejemploES": "La habitación está desordenada, así que tengo que organizarla."
    },
    {
      "kanji": "隅っこ",
      "hiragana": "すみっこ",
      "espanol": "Esquina",
      "ejemploJP": "部屋の隅っこに座って、静かに本を読んでいた。",
      "ejemploES": "Me senté en un rincón de la habitación y leía un libro en silencio."
    },
    {
      "kanji": "転がる",
      "hiragana": "ころがる",
      "espanol": "Rodar",
      "ejemploJP": "ボールが坂を転がると、みんなが追いかけた。",
      "ejemploES": "Cuando la pelota rodó por la pendiente, todos comenzaron a perseguirla."
    },
    {
      "kanji": "叶える",
      "hiragana": "かなえる",
      "espanol": "Conceder",
      "ejemploJP": "彼女の願いを叶えたいと思って、頑張って働いている。",
      "ejemploES": "Quiero conceder su deseo, por eso estoy trabajando duro."
    },
    {
      "kanji": "個",
      "hiragana": "ご",
      "espanol": "Contador de cosas pequenas",
      "ejemploJP": "この箱には10個のりんごが入っています。",
      "ejemploES": "En esta caja hay 10 manzanas."
    },
    {
      "kanji": "交換",
      "hiragana": "こうかん",
      "espanol": "Intercambiar",
      "ejemploJP": "私たちはお土産を交換することにした。",
      "ejemploES": "Decidimos intercambiar nuestros recuerdos de viaje."
    },
    {
      "kanji": "喋る",
      "hiragana": "しゃべる",
      "espanol": "Conversar",
      "ejemploJP": "彼とはよく長い時間喋ることがある。",
      "ejemploES": "Con él, a menudo pasamos mucho tiempo conversando."
    },
    {
      "kanji": "子",
      "hiragana": "こ",
      "espanol": "Nino, joven",
      "ejemploJP": "あの子はとても元気で、いつも笑顔を見せている。",
      "ejemploES": "Ese niño es muy energético y siempre muestra una sonrisa."
    },
    {
      "kanji": "放課後",
      "hiragana": "ほうかご",
      "espanol": "Despues de la escuela, al final de la jornada",
      "ejemploJP": "放課後に友達と公園で遊ぶのが楽しみです。",
      "ejemploES": "Me entusiasma jugar en el parque con mis amigos después de la escuela."
    },
    {
      "kanji": "声",
      "hiragana": "こえ",
      "espanol": "Voz",
      "ejemploJP": "彼の声はとても優しく、聞くと安心する。",
      "ejemploES": "Su voz es muy suave y, al escucharla, me siento tranquilo."
    },
    {
      "kanji": "慣れる",
      "hiragana": "なれる",
      "espanol": "Acostumbrarse, familiarizarse. ",
      "ejemploJP": "新しい環境に慣れるのは少し時間がかかるかもしれない。",
      "ejemploES": "Puede que tarde un poco en acostumbrarme al nuevo entorno."
    },
    {
      "kanji": "特に",
      "hiragana": "ときに",
      "espanol": "Particularmente, especialmente.",
      "ejemploJP": "特に秋の景色は美しくて、毎年楽しみにしている。",
      "ejemploES": "Especialmente, el paisaje de otoño es hermoso, y lo espero con ansias cada año."
    },
    {
      "kanji": "隣",
      "hiragana": "となり",
      "espanol": "Siguiente, adyacente",
      "ejemploJP": "隣の家からはいつもいい匂いがしてくる。",
      "ejemploES": "Desde la casa de al lado siempre llega un buen olor."
    },
    {
      "kanji": "前",
      "hiragana": "まえ",
      "espanol": "Al frente, antes ",
      "ejemploJP": "前に見た映画がとても感動的だった。",
      "ejemploES": "La película que vi antes fue muy emotiva."
    },
    {
      "kanji": "前に",
      "hiragana": "まえに",
      "espanol": "Mucho antes, tiempo atras",
      "ejemploJP": "前に行った場所が今でも忘れられない。",
      "ejemploES": "El lugar al que fui mucho antes todavía no lo olvido."
    },
    {
      "kanji": "世界",
      "hiragana": "せかい",
      "espanol": "El mundo o la sociedad",
      "ejemploJP": "この世界にはさまざまな文化がある。",
      "ejemploES": "En este mundo hay muchas culturas diferentes."
    },
    {
      "kanji": "何か",
      "hiragana": "なにか",
      "espanol": "De cierta forma, algo, alguno, por alguna razon",
      "ejemploJP": "何かいいことが起きる予感がする。",
      "ejemploES": "Tengo la sensación de que algo bueno va a suceder."
    },
    {
      "kanji": "意味",
      "hiragana": "いみ",
      "espanol": "Significado",
      "ejemploJP": "彼の言葉には深い意味が込められていた。",
      "ejemploES": "Sus palabras tenían un significado profundo."
    },
    {
      "kanji": "春",
      "hiragana": "はる",
      "espanol": "primavera",
      "ejemploJP": "春になると、桜が咲いて、とても美しい。",
      "ejemploES": "Cuando llega la primavera, los cerezos florecen y es muy hermoso."
    },
    {
      "kanji": "夏",
      "hiragana": "なつ",
      "espanol": "Verano",
      "ejemploJP": "夏休みに海に行くのが楽しみだ。",
      "ejemploES": "Estoy deseando ir al mar durante las vacaciones de verano."
    },
    {
      "kanji": "派手",
      "hiragana": "はで",
      "espanol": "Vistoso, con presencia, llamativo",
      "ejemploJP": "彼女は派手な服を着て、注目を集めた。",
      "ejemploES": "Ella usó ropa llamativa y atrajo todas las miradas."
    },
    {
      "kanji": "涙",
      "hiragana": "なみだ",
      "espanol": "Lagrimas",
      "ejemploJP": "彼の言葉に涙がこぼれた。",
      "ejemploES": "Las palabras de él hicieron que se me cayeran las lágrimas."
    },
    {
      "kanji": "止む",
      "hiragana": "やむ",
      "espanol": "Detener, parar.",
      "ejemploJP": "雨が止んだので、外に出かけることができる。",
      "ejemploES": "Como la lluvia ha parado, puedo salir al exterior."
    },
    {
      "kanji": "拒む",
      "hiragana": "こばむ",
      "espanol": "Prevenir, rechazar, denegar",
      "ejemploJP": "彼は助けを拒んで、自分で解決しようとした。",
      "ejemploES": "Él rechazó la ayuda e intentó resolverlo por sí mismo."
    },
    {
      "kanji": "零れる",
      "hiragana": "こばれる",
      "espanol": "Derramarse, regarse",
      "ejemploJP": "コップから水が零れてしまった。",
      "ejemploES": "El agua se derramó del vaso."
    },
    {
      "kanji": "大切",
      "hiragana": "たいせつ",
      "espanol": "Importante",
      "ejemploJP": "日本語を勉強しているのなら、漢字を学ぶことが大切です",
      "ejemploES": "Si estas estudiando japones, aprender kanji es importante"
    },
    {
      "kanji": "病院",
      "hiragana": "びょういん",
      "espanol": "Hospital",
      "ejemploJP": "新しい病院は銀行のとなりにあります",
      "ejemploES": "El nuevo hospital esta al lado del banco"
    },
    {
      "kanji": "看護師",
      "hiragana": "かんごし",
      "espanol": "Enfermera",
      "ejemploJP": "大丈夫、その看護師は町で一番上手",
      "ejemploES": "No te preocupes, ella es la mejor enfermera del pueblo."
    },
    {
      "kanji": "働く",
      "hiragana": "はたらく",
      "espanol": "Trabajar",
      "ejemploJP": "毎日とても頑張って働いているから、休むことを考えたほうがいいよ",
      "ejemploES": "Deberias pensar en un descanso, trabajas todos los dias muy duro"
    },
    {
      "kanji": "引っ越し",
      "hiragana": "ひっこし",
      "espanol": "Trasteo",
      "ejemploJP": "彼女は最近、仕事のためにニュ－ヨ－クに引っ越しました",
      "ejemploES": "Ella se trasteó a Nueva York por trabajo"
    },
    {
      "kanji": "彼女",
      "hiragana": "かのじょ",
      "espanol": "Ella",
      "ejemploJP": "彼女は一番きれい",
      "ejemploES": "Ella es la mas hermosa"
    },
    {
      "kanji": "最近",
      "hiragana": "さいきん",
      "espanol": "Ultimamente, recientemente",
      "ejemploJP": "最近天気はどんどん暖かくなって来ました",
      "ejemploES": "Ultimamente, el clima esta volviendose caliente rapidamente"
    },
    {
      "kanji": "来る",
      "hiragana": "くる",
      "espanol": "Venir, llegar, acercar",
      "ejemploJP": "彼が来た時、びっくりした",
      "ejemploES": "Cuando él llegó, me sorpendió"
    },
    {
      "kanji": "生",
      "hiragana": "なま",
      "espanol": "Crudo, fresco, natural",
      "ejemploJP": "生の魚を食べるのは気をつけてね",
      "ejemploES": "Ten cuidado al comer pescado crudo"
    },
    {
      "kanji": "生物",
      "hiragana": "せいぶつ",
      "espanol": "Biologia",
      "ejemploJP": "生物は理科の中で、生き物の生存について勉強する分野です",
      "ejemploES": "La biologia es el campo de la ciencia que estudia la supervivencia de los seres vivos."
    },
    {
      "kanji": "理科",
      "hiragana": "りか",
      "espanol": "Ciencias",
      "ejemploJP": "生物は理科の中で、生き物の生存について勉強する分野です",
      "ejemploES": "La biologia es el campo de la ciencia que estudia la supervivencia de los seres vivos."
    },
    {
      "kanji": "生き物",
      "hiragana": "いきもの",
      "espanol": "Seres Vivos",
      "ejemploJP": "生物は理科の中で、生き物の生存について勉強する分野です",
      "ejemploES": "La biologia es el campo de la ciencia que estudia la supervivencia de los seres vivos."
    },
    {
      "kanji": "分野",
      "hiragana": "ぶんや",
      "espanol": "Campo de estudio",
      "ejemploJP": "生物は理科の中で、生き物の生存について勉強する分野です",
      "ejemploES": "La biologia es el campo de la ciencia que estudia la supervivencia de los seres vivos."
    },
    {
      "kanji": "生存",
      "hiragana": "せいぞん",
      "espanol": "Supervivencia",
      "ejemploJP": "生物は理科の中で、生き物の生存について勉強する分野です",
      "ejemploES": "La biologia es el campo de la ciencia que estudia la supervivencia de los seres vivos."
    },
    {
      "kanji": "公園",
      "hiragana": "こうえん",
      "espanol": "Parque",
      "ejemploJP": "野口の公園は近いです。歩いて５分ぐらいです。",
      "ejemploES": "El parque de Noguchi esta cerca. Caminando son unos 5 minutos."
    },
    {
      "kanji": "自転車",
      "hiragana": "じてんしゃ",
      "espanol": "Bicicleta",
      "ejemploJP": "自転車で町の公園に行きます",
      "ejemploES": "Voy al parque de la ciudad en bicicleta."
    },
    {
      "kanji": "小",
      "hiragana": "しょう",
      "espanol": "pequeño",
      "ejemplos": "小学校（しょうがっこう）escuela primaria - 小説（しょうせつ）novela - 小川（おがわ）arroyo",
      "frases": ""
    },
    {
      "kanji": "男",
      "hiragana": "だん",
      "espanol": "hombre",
      "ejemplos": "男性（だんせい）hombre - 男子（だんし）chico - 長男（ちょうなん）hijo mayor",
      "frases": "",
      "puntaje": 1
    },
    {
      "kanji": "外",
      "hiragana": "がい",
      "espanol": "afuera, exterior",
      "ejemplos": "外国（がいこく）extranjero - 外出（がいしゅつ）salida - 屋外（おくがい）exterior",
      "frases": "",
      "puntaje": 1
    },
    {
      "kanji": "先",
      "hiragana": "せん",
      "espanol": "antes, previo, punta",
      "ejemplos": "先生（せんせい）profesor - 先輩（せんぱい）senpai - 先頭（せんとう）primero en fila",
      "frases": ""
    },
    {
      "kanji": "東",
      "hiragana": "とう",
      "espanol": "este (dirección)",
      "ejemplos": "東京（とうきょう）Tokio - 東洋（とうよう）Oriente - 関東（かんとう）región Kanto",
      "frases": ""
    },
    {
      "kanji": "万",
      "hiragana": "まん",
      "espanol": "diez mil, innumerables",
      "ejemplos": "万円（まんえん）diez mil yenes - 万能（ばんのう）versátil - 万歳（ばんざい）hurra",
      "frases": "",
      "puntaje": 1
    },
    {
      "kanji": "北",
      "hiragana": "ほく",
      "espanol": "norte",
      "ejemplos": "北海道（ほっかいどう）Hokkaidō - 北極（ほっきょく）polo norte - 東北（とうほく）región Tōhoku",
      "frases": ""
    },
    {
      "kanji": "百",
      "hiragana": "ひゃく",
      "espanol": "cien",
      "ejemplos": "百円（ひゃくえん）cien yenes - 百貨店（ひゃっかてん）gran almacén - 数百（すうひゃく）varios cientos",
      "frases": "",
      "puntaje": 1
    },
    {
      "kanji": "土",
      "hiragana": "ど",
      "espanol": "tierra, suelo",
      "ejemplos": "土曜日（どようび）sábado - 土地（とち）terreno - 粘土（ねんど）arcilla",
      "frases": ""
    },
    {
      "kanji": "西",
      "hiragana": "せい",
      "espanol": "oeste",
      "ejemplos": "西洋（せいよう）Occidente - 関西（かんさい）región Kansai - 西口（にしぐち）salida oeste",
      "frases": ""
    },
    {
      "kanji": "者",
      "hiragana": "しゃ",
      "espanol": "persona",
      "ejemplos": "医者（いしゃ）doctor - 若者（わかもの）joven - 学者（がくしゃ）académico",
      "frases": ""
    },
    {
      "kanji": "方",
      "hiragana": "ほう",
      "espanol": "dirección, persona formal",
      "ejemplos": "方法（ほうほう）método - 方角（ほうがく）dirección - 味方（みかた）aliado",
      "frases": ""
    },
    {
      "kanji": "地",
      "hiragana": "ち",
      "espanol": "tierra, lugar",
      "ejemplos": "地球（ちきゅう）planeta Tierra - 地図（ちず）mapa - 地下鉄（ちかてつ）metro",
      "frases": ""
    },
    {
      "kanji": "合",
      "hiragana": "ごう",
      "espanol": "unir, coincidir",
      "ejemplos": "合格（ごうかく）aprobación - 集合（しゅうごう）reunión - 試合（しあい）partido",
      "frases": ""
    },
    {
      "kanji": "動",
      "hiragana": "どう",
      "espanol": "movimiento",
      "ejemplos": "動物（どうぶつ）animal - 自動車（じどうしゃ）automóvil - 動作（どうさ）movimiento",
      "frases": "",
      "puntaje": 2
    },
    {
      "kanji": "社",
      "hiragana": "しゃ",
      "espanol": "empresa, santuario",
      "ejemplos": "会社（かいしゃ）empresa - 社会（しゃかい）sociedad - 神社（じんじゃ）santuario sintoísta",
      "frases": ""
    },
    {
      "kanji": "理",
      "hiragana": "り",
      "espanol": "razón, lógica",
      "ejemplos": "理由（りゆう）motivo - 理解（りかい）comprensión - 物理（ぶつり）física",
      "frases": "",
      "puntaje": 1
    },
    {
      "kanji": "同",
      "hiragana": "どう",
      "espanol": "igual, mismo",
      "ejemplos": "同意（どうい）acuerdo - 同時（どうじ）simultáneo - 同僚（どうりょう）compañero de trabajo",
      "frases": ""
    },
    {
      "kanji": "発",
      "hiragana": "はつ",
      "espanol": "partida, emisión",
      "ejemplos": "発表（はっぴょう）presentación - 出発（しゅっぱつ）salida - 発見（はっけん）descubrimiento",
      "frases": ""
    },
    {
      "kanji": "実",
      "hiragana": "じつ",
      "espanol": "verdad, realidad",
      "ejemplos": "実際（じっさい）realidad - 実験（じっけん）experimento - 実力（じつりょく）capacidad real",
      "frases": ""
    },
    {
      "kanji": "当",
      "hiragana": "とう",
      "espanol": "acertar, correspondiente",
      "ejemplos": "本当（ほんとう）verdad - 当選（とうせん）ser electo - 弁当（べんとう）bento (comida empacada)",
      "frases": ""
    },
    {
      "kanji": "新",
      "hiragana": "しん",
      "espanol": "nuevo",
      "ejemplos": "新聞（しんぶん）periódico - 新年（しんねん）año nuevo - 最新（さいしん）último, más reciente",
      "frases": ""
    },
    {
      "kanji": "世",
      "hiragana": "せ",
      "espanol": "mundo, generación",
      "ejemplos": "世界（せかい）mundo - 世紀（せいき）siglo - 出世（しゅっせ）éxito en la vida",
      "frases": ""
    },
    {
      "kanji": "度",
      "hiragana": "ど",
      "espanol": "grado, vez",
      "ejemplos": "温度（おんど）temperatura - 角度（かくど）ángulo - 一度（いちど）una vez",
      "frases": ""
    },
    {
      "kanji": "明",
      "hiragana": "めい",
      "espanol": "claro, brillante",
      "ejemplos": "明日（あした）mañana - 説明（せつめい）explicación - 明確（めいかく）claro, preciso",
      "frases": "",
      "puntaje": 2
    },
    {
      "kanji": "戦",
      "hiragana": "せん",
      "espanol": "guerra, batalla",
      "ejemplos": "戦争（せんそう）guerra - 戦士（せんし）guerrero - 決戦（けっせん）batalla decisiva",
      "frases": ""
    },
    {
      "kanji": "力",
      "hiragana": "りょく",
      "espanol": "fuerza, poder",
      "ejemplos": "努力（どりょく）esfuerzo - 能力（のうりょく）habilidad - 協力（きょうりょく）cooperación",
      "frases": ""
    },
    {
      "kanji": "性",
      "hiragana": "せい",
      "espanol": "naturaleza, género",
      "ejemplos": "性格（せいかく）carácter - 性別（せいべつ）género - 本性（ほんしょう）verdadero carácter",
      "frases": ""
    },
    {
      "kanji": "対",
      "hiragana": "たい",
      "espanol": "oposición, versus",
      "ejemplos": "反対（はんたい）oposición - 対戦（たいせん）combate - 対象（たいしょう）objeto, objetivo",
      "frases": ""
    },
    {
      "kanji": "意",
      "hiragana": "い",
      "espanol": "intención, mente",
      "ejemplos": "意味（いみ）significado - 意見（いけん）opinión - 注意（ちゅうい）cuidado, advertencia",
      "frases": ""
    },
    {
      "kanji": "用",
      "hiragana": "よう",
      "espanol": "uso",
      "ejemplos": "使用（しよう）uso - 用事（ようじ）asunto, tarea - 買い物用（かいものよう）para compras",
      "frases": ""
    },
    {
      "kanji": "主",
      "hiragana": "しゅ",
      "espanol": "principal, dueño",
      "ejemplos": "主人（しゅじん）dueño, esposo - 主張（しゅちょう）afirmación - 主婦（しゅふ）ama de casa",
      "frases": ""
    },
    {
      "kanji": "通",
      "hiragana": "つう",
      "espanol": "pasar, comunicación",
      "ejemplos": "通学（つうがく）ir a la escuela - 通信（つうしん）comunicaciones - 普通（ふつう）normal",
      "frases": ""
    },
    {
      "kanji": "関",
      "hiragana": "かん",
      "espanol": "conexión, relación",
      "ejemplos": "関係（かんけい）relación - 関心（かんしん）interés - 関東（かんとう）región Kanto",
      "frases": ""
    },
    {
      "kanji": "文",
      "hiragana": "ぶん",
      "espanol": "oración, texto",
      "ejemplos": "文法（ぶんぽう）gramática - 文化（ぶんか）cultura - 作文（さくぶん）redacción",
      "frases": ""
    },
    {
      "kanji": "屋",
      "hiragana": "や",
      "espanol": "tienda, techo",
      "ejemplos": "八百屋（やおや）verdulería - 本屋（ほんや）librería - 屋上（おくじょう）azotea",
      "frases": ""
    },
    {
      "kanji": "感",
      "hiragana": "かん",
      "espanol": "sentimiento",
      "ejemplos": "感情（かんじょう）emoción - 感謝（かんしゃ）agradecimiento - 感覚（かんかく）sensación",
      "frases": ""
    },
    {
      "kanji": "郎",
      "hiragana": "ろう",
      "espanol": "muchacho (nombre masculino)",
      "ejemplos": "一郎（いちろう）nombre de varón - 次郎（じろう）nombre de varón - 太郎（たろう）nombre de varón",
      "frases": ""
    },
    {
      "kanji": "定",
      "hiragana": "てい",
      "espanol": "establecer, decidir",
      "ejemplos": "決定（けってい）decisión - 定食（ていしょく）menú fijo - 安定（あんてい）estabilidad",
      "frases": ""
    },
    {
      "kanji": "政",
      "hiragana": "せい",
      "espanol": "gobierno, política",
      "ejemplos": "政府（せいふ）gobierno - 政治（せいじ）política - 政策（せいさく）política pública",
      "frases": "",
      "puntaje": 2
    },
    {
      "kanji": "持",
      "hiragana": "じ",
      "espanol": "sostener, tener",
      "ejemplos": "持続（じぞく）continuación - 持参（じさん）traer - 気持ち（きもち）sentimiento",
      "frases": "",
      "puntaje": 1
    },
    {
      "kanji": "取",
      "hiragana": "しゅ",
      "espanol": "tomar, obtener",
      "ejemplos": "取得（しゅとく）adquisición - 受取（うけとり）recibo - 取材（しゅざい）cobertura periodística",
      "frases": ""
    },
    {
      "kanji": "所",
      "hiragana": "しょ",
      "espanol": "lugar",
      "ejemplos": "場所（ばしょ）lugar - 住所（じゅうしょ）dirección - 所属（しょぞく）pertenencia",
      "frases": "",
      "puntaje": 1
    }
  ]

  export default wordData;  // Exporting wordData for use in other files
