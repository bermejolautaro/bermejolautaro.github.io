const tweets = [
    {
        "texto": "Veamos el lado bueno de que no haya clases en todo el cuatrimestre no tenemos que preocuparnos pOR LA ROPA GENTE",
        "id": "1244791342196240386"
    },
    {
        "texto": "Dios como extra\u00f1o subir escaleras y andar en subte HARTA de estar con el culo en la silla leyendooooo",
        "id": "1243242956812926976"
    },
    {
        "texto": "Mi jefe de catedra haciendo un vivo de instagram la 1era vez que la usa lo quiero mucho",
        "id": "1242927360816668672"
    },
    {
        "texto": "NO HAY HELADERIAS ABIERTAS AHORA QUE HAGOOOOOOOOOOO",
        "id": "1242623412675268608"
    },
    {
        "texto": "La puta madre me estoy comiendo todo el humo de un sahumerio horrendo que mi vecina puso EN SU PATIO\u00bf\u00bf\u00bf\u00bf",
        "id": "1242484371744935937"
    },
    {
        "texto": "El presidente contestando tuits diciendo que se queden en las casas y mandandolos a dormir lo quiero mucho",
        "id": "1242110180579573762"
    },
    {
        "texto": "Hace 4 horas estoy viendo un seminario de 2 y qu\u00e9 hace la mina pelotudea en instagram",
        "id": "1241566544041136128"
    },
    {
        "texto": "Cenando pizza y con musica depresiva de los 90 nunca mas mi mama de dj",
        "id": "1241176449320706048"
    },
    {
        "texto": "Mi jefe de catedra armo un grupo de facebook para dar clases y responder dudas lo amo mucho",
        "id": "1239343905130364928"
    },
    { "texto": "La re concha de su madre larreta", "id": "1238094663426465793" },
    {
        "texto": "Curse una semana y ya me canse de cursar",
        "id": "1237495202216136707"
    },
    {
        "texto": "COMO VAN A TIRAR 16 A\u00d1OS DIESCISEIS A \u00d1 O S DE CRECIMIENTO DEL MEJOR PERSONAJE DE TODA LA SERIE A LA MIERDA ASI DIOS",
        "id": "1236095542591021056"
    },
    {
        "texto": "LA RE PUTISIMA MADRE ESTOY RE CALIENTE CON EL CAPITULO DE GREYS DE ANOCHE NO PUEDE SER",
        "id": "1236095323166081026"
    },
    {
        "texto": "No me decido si me gusta o no el modo oscuro de whatsapp maldita sea",
        "id": "1235173517886394369"
    },
    {
        "texto": "Tuve que salir de mi casa abrigada y eso basto para empezar de buen humor el dia",
        "id": "1230825122648481792"
    },
    {
        "texto": "A ustedes tambien les agarra el ataque de limpieza comer chocolate  querer ver 15 peliculas y escuchar musica la semana previa a un examen o soy yo la unica que esta en negacion y no quiere rendir",
        "id": "1227051777457082370"
    },
    {
        "texto": "LLEGA A NO GANAR JOAQUIN Y ROMPO ALGO",
        "id": "1226718653879607308"
    },
    { "texto": "DIOS EMINEM TE AMO LOKO", "id": "1226695038551326721" },
    {
        "texto": "Dios extra\u00f1o a dylan obrien el dia que saque pelicula me desmayo de la emocion",
        "id": "1226571952447533057"
    },
    {
        "texto": "Che parasite es buenisima arranca re normal y despues se pone re caotica y despues termina con un plot twist me encanta",
        "id": "1226555268454133762"
    },
    {
        "texto": "Mira que el halftime de beyonce es y sera lo mejor de la historia pero jlo y shakira LA ROMPIERON DIOS",
        "id": "1224165260229259264"
    },
    {
        "texto": "Que hijos de la gran mierda los que ponen las encuestas de ig al costadito de la pantalla uno no puede pasar historias sin darse un infarto",
        "id": "1223038726164615168"
    },
    {
        "texto": "Dios mi vieja esta tan estupidizada con el celular como pibito de 10 a\u00f1os que se olvida de cosas tipo limpiar, juntar las cosas del desayuno, COCINAR rt y se lo escondo",
        "id": "1222549774915833858"
    },
    {
        "texto": "Che que bueno el verano la presion en 9 todo el tiempo me encanta la mejor epoca del a\u00f1o",
        "id": "1219287882244001792"
    },
    {
        "texto": "Mandandole audio a mi vieja que estaba yendo a la farmacia me pase sin darme cuenta y un se\u00f1or me dijo te la pasaste eh jaja grax amigo por colaborar con mi VERG\u00dcENZA",
        "id": "1216829214822936576"
    },
    {
        "texto": "Dios hay pibitas acampando para ver a louis (que viene en MAYO) Y PARA HARRY QUE VIENE EN ATENTIS EH: OC TU BRE. No puedo creer la pelotudes que maneja la gente por favor",
        "id": "1214332017166426116"
    },
    {
        "texto": "Dios no puedo entrar a todomoda sin querer comprarme 7 pares de medias es un problema serio esto ya",
        "id": "1213488647745540098"
    },
    {
        "texto": "Dios dormi 14 horas en lo que va del dia osea me levante a las 11 y a la 1 ME VOLVI A DORMIR que es esto",
        "id": "1213166989692342273"
    },
    {
        "texto": "Dios los memes de zac efron por estar enfermo jajajajajajajajajajajaja",
        "id": "1211805579825623040"
    },
    {
        "texto": "El calor que hace y recien son las 11 de la ma\u00f1ana quiero llorar",
        "id": "1204044248951201792"
    },
    {
        "texto": "La depre post concierto no se las recomiendo",
        "id": "1203693169227059200"
    },
    {
        "texto": "HOY VOY A VER A SHAWN MENDES PERRO",
        "id": "1203330695520755713"
    },
    {
        "texto": "Me tire a ver the irishman cuando todavia era de dia y sali no sabiendo ni que dia es aprox",
        "id": "1202030609750798336"
    },
    {
        "texto": "QUE VERRRGA ES ESPERAR PARA SABER SI DOY ORAL COMPLEMENTARIO O NO MA\u00d1ANA DIOS casi que me quedo pelada",
        "id": "1199356776606568451"
    },
    {
        "texto": "Ver greys anatomy antes de dormir preparcial es mi ritual para aprobar",
        "id": "1199150298683650050"
    },
    {
        "texto": "Dia 5 de calor casi me desmayo de la presion baja esa es nueva no la tenia vamo 2019",
        "id": "1196188694828503042"
    },
    {
        "texto": "Primer dia de calor y yo ya estoy del orto dios me quiero ir a ushuaia hasta abril",
        "id": "1194635849398403072"
    },
    {
        "texto": "Ya no me da mas ni la cabeza ni el cuerpo para seguir estudiando que se termine de una vez por favooooor",
        "id": "1189684830826614785"
    },
    {
        "texto": "Mi vecino de 9 a\u00f1os y sus dos amigos estas levantados desde LAS 8 AM jugando a la la play A LOS GRITOS que tal su domingo?",
        "id": "1188447175648395264"
    },
    {
        "texto": "Amo a los medicos que me preguntan que estudio y cuando les digo medicina termino charlando media hora cual grupo de apoyo de nuestras desgracias, cebate unos mates",
        "id": "1184217816112734208"
    },
    {
        "texto": "8 lucas el lolla JAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJ",
        "id": "1182347723099521024"
    },
    { "texto": "INSTAGRAM EN MODO NOCHE YES BITCH", "id": "1181676971119583237" },
    {
        "texto": "Post examen be like: \n\"Voy a dormir media hora y voy a leer un poco para ma\u00f1ana\"\n*se despierta 2hs y media despues*",
        "id": "1181333802741911553"
    },
    {
        "texto": "Mirando una pelicula le digo a mi vieja 'veni mira, aca presta atencion a la escena q te decia'. Se sienta. Se le caen unos papeles. Se pone a buscarlos y acomodarlos uno por uno PARA QU\u00c9 ME GASTO YO PREGUNTO SERIAMENTE",
        "id": "1180312387779518465"
    },
    {
        "texto": "Por dios entre al hashtag de greys anatomy flashando que avisaban que habia estreno Y EMPECE A VER SPOILERS CASI ME DESMAYO",
        "id": "1177409478813212672"
    },
    {
        "texto": "Disney con todos los remakes evidencia que se esta quedando sin ideas ME EXPLICAS COMO HACE ESE IMPERIO PARA QUEDARSE SIN IDEAS",
        "id": "1165425599512502273"
    },
    {
        "texto": "Ya mire friends unas 4 veces y pienso seguir viendola mas, el dia que netflix la saque me deprimo definitivamente",
        "id": "1163157985679552513"
    },
    {
        "texto": "Dios me re mil duermo necesito 1 litro de cafe",
        "id": "1161641625602396160"
    },
    { "texto": "Esa era yo LITERALMENTE", "id": "1159978377501167623" },
    {
        "texto": "Para fin de a\u00f1o whatsapp va a tener modo oscuro SEEEEE",
        "id": "1156339641739558912"
    },
    {
        "texto": "Cada vez que leo ese 'sco patu mana' o lo que sea mi cabeza lee scooby doo papa",
        "id": "1154797053328777216"
    },
    {
        "texto": "Jajajajaja chicos estoy viendo la pelicula de kim posible y no saben el cringe que es esto",
        "id": "1152395459803193344"
    },
    { "texto": "Que locura far from home maaaaan", "id": "1151998305330536448" },
    {
        "texto": "Aaaaaaa me quiero comprar 14 cosas que salen como 3500 pesos lpm por que soy tan pobre dios",
        "id": "1151239672518995970"
    },
    {
        "texto": "Reabrieron plaza houssay el mundo vuelve a tener color \ud83d\ude2d\ud83d\udc95",
        "id": "1150745220767723520"
    },
    {
        "texto": "AAAA NECESITO HABLAR DE ST Y MIS AMIGOS NO LA TERMINARON MALDITA SEA",
        "id": "1148941620705931265"
    },
    {
        "texto": "Estoy hace 6 horas sin sentarme y mi viejo me tiene que venir a buscar llega a no venir en auto y lo boxeaaaa",
        "id": "1147627709943734272"
    },
    {
        "texto": "La puta madre por que es tan epica las reliquias de la muerte AAAA QUE PELICULON DIOS",
        "id": "1147323143524147200"
    },
    {
        "texto": "Como mantenerse motivado para seguir estudiando cuando queres tirar todo a la remierrrda yahoo respuestas wikihow",
        "id": "1146553590993080320"
    },
    {
        "texto": "Na chicos por favor la musica de tn jajajajajajajjaajjajaajja",
        "id": "1146156963794948098"
    },
    {
        "texto": "Jajajajajajajaja se nublo todo esa suerte no te la robo",
        "id": "1146154309702299651"
    },
    {
        "texto": "El tren de un amigo estaba mega demorado y fue porque se murio alguien que sereno todo",
        "id": "1139255447175778304"
    },
    {
        "texto": "Alto tuit de ni\u00f1a mimada les juro que no lo soy",
        "id": "1138586307150733313"
    },
    {
        "texto": "Este invierno esta siendo una decepcion DONDE ESTAN MIS 10 GRADOS",
        "id": "1136967634564657152"
    },
    {
        "texto": "Ustedes escucharon ese trueno larguisimo o fui la unica que flasho?",
        "id": "1134254813661806594"
    },
    {
        "texto": "La re putisima madre con las sireNAAAAAAAS",
        "id": "1132276265262735361"
    },
    {
        "texto": "Estoy enojadisima pero aguante sansa vieja",
        "id": "1130300732979204099"
    },
    {
        "texto": "Nose ustedes pero yo estoy decepcionadisima",
        "id": "1130298436723662850"
    },
    { "texto": "AAA ESTOY NERVIOSA LPM", "id": "1130275398284128261" },
    {
        "texto": "No estoy preparada para got hoy me llegan a dejar a sansa o arya sin el trono y los demando",
        "id": "1130159455868456960"
    },
    {
        "texto": "Estamos en mayo y yo ya no quiero estudiar mas y todavia no rendi nada NADA entienden ese nivel de estres porque yo no",
        "id": "1129462896361201665"
    },
    {
        "texto": "Me toco una mermelada de arandanos con 5kg de arandanos adentro estoy a nada de comerme el frasco solo",
        "id": "1128286295283965952"
    },
    {
        "texto": "Nose ustedes pero yo sigo enojada con cersei que en vez de quedarse parada en la torre viendo como venia drogon a hacerla brocheta SE FUE LLORISQUEANDO. Y USARON UN PUTO LADRILLO.",
        "id": "1128019401343684610"
    },
    { "texto": "Y enloquecio la daenerys nomas", "id": "1127761435776385024" },
    {
        "texto": "Quiero el vaso con luces de avengers PERO SALE 600 PESOS HOYTS YA ME ROBAS BASTANTE CON LA ENTRADA QUE MAS QUERES DE MI",
        "id": "1124087324583911426"
    },
    {
        "texto": "Mi vecinito de 2 a\u00f1os hablando con mi vieja de pared a pared como dos viejas chusmas ya ni vecinos nomarles tengo",
        "id": "1123675232986906625"
    },
    {
        "texto": "Quiero rt a un video de la escena mas epica de la tv pero soy buena y no hago spoilers PERO MAMAAAA",
        "id": "1122690800889073666"
    },
    {
        "texto": "Arya Stark la concha de sus madres ESTOY MUY MANIJA LA AMO",
        "id": "1122690062213423106"
    },
    {
        "texto": "VAMOS ARYA LA CONCHA DE TU MADRE TE AMO LAKAAAAA",
        "id": "1122687070349271040"
    },
    {
        "texto": "Nose si estoy preparada para este episodio de got, ya me estoy empezando a estresar y falta 1 hora",
        "id": "1122649283835170816"
    },
    {
        "texto": "Nose ustedes pero le tengo mas miedo de los spoilers a youtube que twitter o instagram",
        "id": "1120703862032207873"
    },
    {
        "texto": "CHICOS SI MIRAN EL CIELO HAY UN CIRCULO DE NUBES ALREDEDOR DE LA LUNA EL CIELO SE CAEEE",
        "id": "1119444673263742976"
    },
    {
        "texto": "Me queria comprar un libro que hace mil tengo que comprarme y SALE 650 PESOS MARTA EXPLICAME QUE ES ESTO",
        "id": "1118703303901294593"
    },
    {
        "texto": "Chabon que manija ese ultimo trailer de avengers me vuelvo lakaaaa",
        "id": "1118164339796660224"
    },
    {
        "texto": "Encontre en mi patio una de mis lagartijitas toda seca y rigida rip willis te vamos a extra\u00f1ar",
        "id": "1117852376390688771"
    },
    { "texto": "HOY VUELVEN LOS STARK PERROOOO", "id": "1117426379941916674" },
    {
        "texto": "Ustedes vieron el trailer de dora la exploradora? Yo no lo pude terminar del cringe que me dio",
        "id": "1109849308994695168"
    },
    {
        "texto": "Hoy llegue a la facultad, me subi al ascensor y 4 pisos despues me di cuenta que eran los ascensores del otro lado (osea bajar y subir 4 pisos, de nuevo). Esa falla no te la robo amiga",
        "id": "1108775687173869569"
    },
    {
        "texto": "Cuando tenga hijos voy a aprenderme todas las canciones que les gusten y cantarlas a los gritos con ellos para que no sientan esa inhibicion/rechazo que siento yo de los mios que odian todo y no me dejan escuchar en paz thanks for coming to my ted talk",
        "id": "1106968495194062849"
    },
    {
        "texto": "Que buena pinta el trailer de aladdin chabon",
        "id": "1105512649062793218"
    },
    {
        "texto": "Empece la semana de 10 quedandome encerrada entre mi casa y la reja de afuera ustedes que tal?",
        "id": "1103337505993170946"
    },
    {
        "texto": "Que lindo es despertarse y ver todas cosas de los jonas me siento como una ni\u00f1a feliz",
        "id": "1101454108186341376"
    },
    {
        "texto": "Puede ser que daddy yankee nunca saque canciones que no sean altos temaikenes?????? Que nunca muera se\u00f1or",
        "id": "1101310547021258753"
    },
    {
        "texto": "Llegan a hacer tour los jonas de nuevo y nos veo a todas las boludas  de 20-30 llorando como gordafans",
        "id": "1101178804448448512"
    },
    {
        "texto": "Estoy tan hecha mierda de escalar y hacer actividades necesito vacaciones de mis vacaciones jesus que intenso",
        "id": "1100810900347543553"
    },
    {
        "texto": "KEEEEE ERA PARA MARVEL ESA QUE PASO",
        "id": "1099866048361304064"
    },
    {
        "texto": "Gana spiderman o gana spiderman NO SE DISCUTE",
        "id": "1099859239953141760"
    },
    {
        "texto": "Bueno ya gano Roma como extranjera, llega a ganar como mejor pelicula y rompo algo",
        "id": "1099853326668177408"
    },
    {
        "texto": "Que aplicacion deprimente que es twitter por momentos, voy a empezar a seguir solo cuentas de memes y animales",
        "id": "1099474401362366465"
    },
    {
        "texto": "Chicos estoy en el norte y hace 18 grados IS THIS HEAVEN????",
        "id": "1099336026303152133"
    },
    {
        "texto": "Hay una murga en frente y mis ganas de meterme a hacer quilombo estan aumentando exponencialmente",
        "id": "1096974906032562177"
    },
    {
        "texto": "Quiero comprarme ojotas y cada app que abro me tira anuncios de havaianas de harry potter DONDE ESTA LA CAMARA PAREN LOCO",
        "id": "1094646369443344384"
    },
    {
        "texto": "Necesito ver into the spiderverse de nuevo maldita y genial pelicula",
        "id": "1093670083275223041"
    },
    {
        "texto": "Estuve 1 HORA eligiendo y cambiando los horarios de cursada para que no se me crucen jesus si me estreso asi no quiero ni ver en el a\u00f1o",
        "id": "1092487614656065536"
    },
    {
        "texto": "Por que nunca tengo la suerte de conseguir entradas en una preventa la re putisima madre nunca de las pocas que llegan a comprar NUNCA",
        "id": "1092428644935450627"
    },
    {
        "texto": "Esta semana se me paso mas lenta que todo enero",
        "id": "1090806650792001537"
    },
    {
        "texto": "Nose si sere la unica boluda que se super congestiona en esta epoca pero jesus me quedo sin aire e e e",
        "id": "1090257941762998273"
    },
    {
        "texto": "La puta madre con este calor que mierda les gusta no los entiendo NO PUEDEN HACER NADA PARA SOBRELLEVARLO AGUANTE EL INVIERNO Y LOS 4 BUZOS",
        "id": "1089963913465286656"
    },
    {
        "texto": "Ah no casi me infarto con el golpe que se dio contra el piso mi celular, tiene un dios aparte o no se explica",
        "id": "1088515218152529921"
    },
    {
        "texto": "Con este calor no tengo energia ni para quedarme sentada viendo la tele me voy a mudar a chubut",
        "id": "1088484703924039680"
    },
    {
        "texto": "Por que siempre que salgo a dormir de alguien me olvido el cepillo de dientes soy estupida o soy estupida  todos sabemos la respuesta",
        "id": "1085996210635358209"
    },
    {
        "texto": "VIENE SHAWN MENDES ME VUELVO LOCAAAA",
        "id": "1085604930600218624"
    },
    {
        "texto": "Chabon buenisima into the spider verse",
        "id": "1083890237728792576"
    },
    {
        "texto": "Tuit de nerd pero hoy entendi al fin una ecografia y como proyecta la imagen y me siento realizada",
        "id": "1083764196708372480"
    },
    {
        "texto": "Ahora que mis puntos de claro son de la categoria mas alta no hay nada NADA copado para canjear esa mala suerte amigaaaaa",
        "id": "1083483212972740608"
    },
    {
        "texto": "En mi cuadra conozco a mis vecinos por sus perros ejemplo abajo vive Tita y al lado Uma quien mas vivira en esa casa? Nadie sabe, a nadie le importa",
        "id": "1083099343203287041"
    },
    {
        "texto": "1era fila en el cine para bohemian rapsody pero el audio no te lo robo hermano que peliculoooon",
        "id": "1081757104539688960"
    },
    {
        "texto": "Que clima perfecto el de hoy man por que dura tan poco xq",
        "id": "1080973064375074816"
    },
    {
        "texto": "Que mal error mirar los precios del cine QUE MAL LPM me voy a endeudar",
        "id": "1080245171902734336"
    },
    {
        "texto": "Vean bandersnatch les vuela el bocho chicos",
        "id": "1078869042440617984"
    },
    {
        "texto": "Se me murieron las luces del arbolitooooo chau me deprimi hasta el 2020",
        "id": "1078336982651146240"
    },
    {
        "texto": "Ando para todos lados con un chuf de agua helada para refrescarme calo no vas a poder conmigo",
        "id": "1078075056650100737"
    },
    { "texto": "Calor asqueroso me derritoooooo", "id": "1076887531076153344" },
    {
        "texto": "Sali con un humor del culo, vi al perro de mi vecina y literal 20 segundos despues estoy re buena onda chicos son magicos los perros no los puedo amar tanto \ud83d\ude2d",
        "id": "1075914946033131520"
    },
    {
        "texto": "Ah bueno diciembre que esta pasando chabon",
        "id": "1075766179954778113"
    },
    {
        "texto": "Jajjj chicos de estudiar tanto ahora tengo una leve escoliosis jajaksjkskhaj esta vida de nerd tiene sus conzecuenzias",
        "id": "1074690329943687169"
    },
    {
        "texto": "La puta madre 2500 pe para ir solo por dimitri vegas al lolla esa pobreza no te la robo",
        "id": "1074427490024738817"
    },
    {
        "texto": "No niego ni afirmo haber venido a buscar la cena en pijama",
        "id": "1074109173611290625"
    },
    {
        "texto": "Tengo a un grupo de chinos (creo) hablando y riendose Y YO ME QUIERO REIR DE LO CHISTOSO QUE SUENAN HABLANDO Y RIENDOSE MALDITA SEA",
        "id": "1072226285383024644"
    },
    {
        "texto": "Amo que asi como mis viejos me interrogan a mi cuando salgo yo los interrogo a ellos cuando salen se intercambian mucho los papeles en esta familia ultimamente",
        "id": "1071202625725566976"
    },
    {
        "texto": "Trailer aburridisimo porque no dice nada pero AL FIN MALDITA SEA",
        "id": "1071028018955608066"
    },
    {
        "texto": "Que cringe el youtube rewind de este a\u00f1o chaboooon borren eso",
        "id": "1070755603520327681"
    },
    {
        "texto": "Mi hermana acaba de terminar las clases y ya pego en la pared un calendario para poner sus horarios del a\u00f1o que viene esa emocion no te la robo amiga",
        "id": "1070452669276409856"
    },
    {
        "texto": "Necesito estar de vacaciones estas crisis nerviosas que me agarran cada dos dias ya me tienen harta  a a aa",
        "id": "1069949112068526085"
    },
    {
        "texto": "Una vez que probaste las papas de tubo no volves mas al paquete clasico hipotesis recien confirmada by me",
        "id": "1067571599623241733"
    },
    {
        "texto": "EN UN MES ES NAVIDAD COMO SUCEDIO ESTO",
        "id": "1066070913463054337"
    },
    {
        "texto": "La inmobiliaria de la vuelta de mi casa ya puso arbol de navidad tranquilos chicos falta un mes",
        "id": "1066068866458165249"
    },
    {
        "texto": "Estuve 15 minutos afuera y me picaron todos los mosquitos del barrio aprox. Por estas cosas no salgo",
        "id": "1065427461033390081"
    },
    {
        "texto": "VIENEN DIMITRI VEGAS Y LIKE MIKE AL LOLLA EL A\u00d1O QUE VIENE VOY A COLAPSAR EN EL TREN",
        "id": "1065324889949777921"
    },
    {
        "texto": "Necesito hacer terapia profunda pero con perros. 10 perros grandes y mimosos sisi",
        "id": "1065321805777379328"
    },
    {
        "texto": "Amiga manda foto de un flaco cuyo brazo esta todo trabado y que dice ilu? \"BRO MIRA ESE TENDON,  NAAA\". Ya no puedo apreciar ni la belleza de forma normal ashuda",
        "id": "1065016625747947524"
    },
    {
        "texto": "Explicame por qu\u00e9 se me tilda el instagram Y SIEMPRE TERMINO CONTESTANDO UNA ENCUESTA LA RE PUTA MADRE XQ",
        "id": "1064659128323317761"
    },
    {
        "texto": "Bue no me puedo elegir un perfume importado para comprar porque cuando no sale 2500 sale 4700 mejor me compro los de 47street",
        "id": "1063585655027113984"
    },
    {
        "texto": "Se rompe un poste en carranza, se suicida alguien en el subte. Pero que bello jueves",
        "id": "1063064902879924224"
    },
    {
        "texto": "Tan blanca soy que las venas de mis piernas parecen pintadas con verde fl\u00fao why WHY",
        "id": "1062811655065739265"
    },
    {
        "texto": "Tan TAN desastre tienen que ser en secretaria para que no atiendan el dia que hay que inscribirse en un examen POR DOS HORAS DE MIERDA??\u00bf\u00bf\u00bf?\u00bf?\u00bf",
        "id": "1062771326472065024"
    },
    {
        "texto": "Lo que me duele la cabeza necesito terminar de rendir urgenteeee",
        "id": "1062150277497872384"
    },
    {
        "texto": "Las 3 cuadras rodeando mi casa se rompieron con la gente gritando el gol",
        "id": "1061704100075749378"
    },
    {
        "texto": "Todo el dia lloviendo y yo me la pase durmiendo lo que no dormi en dos semanas PERO QUE BUEN DIA",
        "id": "1061420828124987395"
    },
    {
        "texto": "Hoy casi me largo a llorar en medio de la clase de repaso porque me mezclaron todos los temas ustedes como va su dia?",
        "id": "1059899016698306561"
    },
    {
        "texto": "Ya tuve como dos crisis nerviosas en lo que va de la semana y estamos a jueves re sano todo",
        "id": "1058002446537113601"
    },
    {
        "texto": "Escuche el supuesto tema de avengers 4 y mi cabeza iba poniendo imagenes de tragedia-muerte-guerra-tragedia-mas guerra-mas muerte pero que lindo todo",
        "id": "1057402920377966593"
    },
    {
        "texto": "Entro a netflix y veo que agregaron zack y cody pero solo la temporada 3 netflix why u play with ma feelins bro",
        "id": "1057388051310231552"
    },
    {
        "texto": "Estoy esperando el tren bajo techo y aun asi me mojo ah no AH NO",
        "id": "1057299189821067264"
    },
    {
        "texto": "Practique mil ejercicios y estudie y vengo a rendir y ya parece que le pifie a la mitad de las cosas KOMO ES POSIBLE S\u00d1OR",
        "id": "1056994314960756742"
    },
    {
        "texto": "Mi hermana esta viendo unos premios de nose que musica y NO PARA DE GRITAR COMO INUTIL por suerte es normal, o no",
        "id": "1055624869159804928"
    },
    {
        "texto": "Un pibe al lado mio esta escuchando christina aguilera y es lo mejor que me paso en el dia",
        "id": "1054855982273228801"
    },
    {
        "texto": "Quiero ir a ver la pelicula de freddie mercury quiero ir a ver animales fantasticos y quiero ir a comprarme ropa PERO NO TENGO TIEMPO DE NADA maldita sea",
        "id": "1054764187149389824"
    },
    {
        "texto": "Estaba resumiendo y no me acordaba algo y me largue a llorar ah no ese estres no te lo robo amega",
        "id": "1054565003976761344"
    },
    {
        "texto": "No puede ser que 10.30 am y haga este calor me quiero exiliar a islandia",
        "id": "1052914992054452224"
    },
    {
        "texto": "De que cueva cavernicola salio la gente anti vacunas??????? En serio no los entiendo",
        "id": "1052712065054494720"
    },
    {
        "texto": "8 a\u00f1os tiene hannah montana y AGREGAN SOLO LA PRIMER TEMPORADA NETFLIX ARE U KIDDING ME",
        "id": "1051884101807075328"
    },
    {
        "texto": "Me vengo a estudiar a mi patio para aprovechar el sol pero entre el calor y que me quedo ciega mejor me quedo adentro dej\u00e1",
        "id": "1051561296750100480"
    },
    {
        "texto": "Hoy esta pablito en chankanab y estoy seriamente cuestionandome si ir o no",
        "id": "1051321047562289152"
    },
    {
        "texto": "Se me corto la luz cuando planeaba hacerme un cafe MALDITA SEA",
        "id": "1050816803721670656"
    },
    {
        "texto": "Ragnarok en hbo cada vez amo mas estos canales",
        "id": "1050191765385502720"
    },
    {
        "texto": "Hace 10 minutos me estoy riendo de un video de matthew mcconaughey diciendo \"alright\" en todas sus peliculas a estas horas no puedo usar el telefono jesus mira lo que hago",
        "id": "1049860499612020736"
    },
    {
        "texto": "Me metieron un parcial sabado 8.30 am JAJAJAJAJAJJAJAJA me pego un tiro ya",
        "id": "1049763505421897728"
    },
    { "texto": "Bueno alfin graniza chicos", "id": "1049462627741696000" },
    {
        "texto": "Si tuviera guita me iria de octubre a abril al sur donde siguen haciendo 15 grados y en invierno vuelvo pero la macrisis",
        "id": "1049426142548189184"
    },
    {
        "texto": "No puedo creer el calor por el que estoy pasando un 8 de octubre mama que sera de mi en enero",
        "id": "1049375798170460162"
    },
    {
        "texto": "Venom es tan rara que es buenisima",
        "id": "1048384456879423493"
    },
    {
        "texto": "Que mania infumable que tiene mi vieja de mandar audios solo porque yo le mando audio YA TE DIJE QUE NO PUEDO ESCUCHARLOS ESCRIBI LA RE PUTA MADRE",
        "id": "1047122769337561088"
    },
    {
        "texto": "Alguien mas va a hacer el meme del negro saludando a la gente???\u00bf??\u00bf\u00bf???\u00bf",
        "id": "1046956694859894785"
    },
    {
        "texto": "Jajajajajaja se acuerdan la epoca que todos nos tapabamos la boca con el pu\u00f1o y nos poniamos de costadito para la foto? Ahora es agachate de espaldas a la camara y pone cara de  malo",
        "id": "1046897826813415426"
    },
    {
        "texto": "Me estoy comiendo un sandwich de atun ya soy pato el pez",
        "id": "1046204631943184385"
    },
    {
        "texto": "Bueno me compre yogur frutillas y arandanos fue productiva la caminata",
        "id": "1046125883101188096"
    },
    {
        "texto": "Con tal de no estudiar hago lo que sea nivel me vine a jumbo a CAMINAR",
        "id": "1046116253532909568"
    },
    {
        "texto": "Youtube me felicito por un like de una youtuber a mi comentario tkm yutu sos lo +",
        "id": "1046052684422434816"
    },
    {
        "texto": "Escuche taki taki y ya van dos horas que no se me sale de la cabeza maldita sea",
        "id": "1045720142448144385"
    },
    {
        "texto": "HOY SALE TRAILER DE DARK PHOENIX NECESITO MAYUSCULAS MAS GRANDES",
        "id": "1044961674892054528"
    },
    {
        "texto": "Segundo fin de semana que digo \"llego a casa y estudio\" y aca estoy despues de 3hs de siesta",
        "id": "1043989494259744769"
    },
    {
        "texto": "Anoche LA de cosas que nos pasaron ah nono todas juntas chicos nivel NOS SUBIMOS A UN AUTO QUE NO ERA UBER CREYENDO QUE ERA UBER CHAUUU",
        "id": "1043913077123616768"
    },
    {
        "texto": "Ustedes estan viendo el color del cielo? Se viene un apocalipsis aprox",
        "id": "1043615752958414849"
    },
    {
        "texto": "Bueno este calor ya no me esta gustando estamos en septiembre tiene que hacer 20 grados como maximo hermano QU\u00c9 ES ESTE CALOR ASQUEROSO A LAS 11 AM? ? ????",
        "id": "1043497294493110273"
    },
    {
        "texto": "Dos minutos al sol y las piernas ya se me broncean ah pero la cara sigue en modo vampiro MALDITA EPIDERMIS ahre",
        "id": "1042593984386945024"
    },
    {
        "texto": "Jajajajajajajajajajajaka chicos tengo una franja de tobillo bronceada por el jean corto jajajajhsjaldskdkf",
        "id": "1042592944866439168"
    },
    {
        "texto": "Como extra\u00f1o el chocolate de rapanui y veo todos trayendo de brc 14 bolsas AAAAA\u00f1",
        "id": "1041827810145431552"
    },
    {
        "texto": "Se me fue el tren en la cara porque una forra no me dejo pasar por el molinete para pasar ella HACIA EL OTRO LADO, OJALA TE CAIGAS DEL ANDEN YEGUA",
        "id": "1041818612745551872"
    },
    {
        "texto": "Voy a ver to all the boys i ever loved por 3era vez? Voy a ver to all the boys i ever loved por 3era vez.",
        "id": "1040775989456973826"
    },
    {
        "texto": "En cualquier momento vuelo netflix al carajo ME SACA TODAS LAS PELICULAS BUENAS Y DEJA PEDORRADAS CUAL ES TU PROBLEMA MAN",
        "id": "1040441099372949504"
    },
    {
        "texto": "Estoy llorando en panico (100% real) porque me salio una caries diminuta esa intensidad no te la robo amiga",
        "id": "1040432658810122241"
    },
    {
        "texto": "Lo emocionada que estoy por ahs voy a colapsar",
        "id": "1040406060606074880"
    },
    {
        "texto": "Yo me quejo que no paro de comer pero hoy me pese y baje 3 kilos estoy hay que festejarlo PASAME UNA PIZZA",
        "id": "1040035710286397440"
    },
    {
        "texto": "Hace 8 horas estoy fuera de mi casa  saquenme de este edificio infernal (mentira lo amo)",
        "id": "1039592870913736715"
    },
    {
        "texto": "Entre a la facultad y ya me quiero ir YA VOTE DEJAME DE ROMPER LAS BOLAS",
        "id": "1039511725333258240"
    },
    {
        "texto": "Vieron que hay diferentes tipos de ebrio tipo el que se rie el que llora y el que se duerme? Bueno yo me clave una pizzeta y despues robe un dulce de leche",
        "id": "1039305369577771011"
    },
    {
        "texto": "Me iba a dormir media hora para ir al gimnasio y me acabo de despertar. La clase empezaba a las 6 LAREPUTAMADRE",
        "id": "1038174846075719681"
    },
    {
        "texto": "Me esta fallando el experimento de despertarme siempre 8am, como carajos hacia en el colegio esto es increible",
        "id": "1037696725132222466"
    },
    {
        "texto": "Warner esta dando las reliquias de la muerte p2 y QUE ganas de volver a verla por primera vez en el cine. Que pelicula maravillosa lpm",
        "id": "1037519059326263296"
    },
    {
        "texto": "La semana que viene vuelve ahs. Vuelve murder house. Vuelve coven. VUELVEN LAS DOS MEJORES TEMPORADAS NO ME ENTRA LA EMOCION",
        "id": "1037141474423578630"
    },
    {
        "texto": "Ayer re cebada me tome 4 tazas de cafe en el dia. Me sigue doliendo la cabeza.",
        "id": "1036999898498039808"
    },
    {
        "texto": "Tengo los dedos entumecidos de tanto resumir help",
        "id": "1036804137525145601"
    },
    {
        "texto": "Soy tan vampiro que me digo a mi misma \"uy hoy esta hermoso mira ese solazo salen unos mates\" pero me pega un rayito y me vuelvo a la cueva",
        "id": "1036299571834626048"
    },
    {
        "texto": "Quiero creer que estamos todos locos porque nos vamos a la mierda como pais y de repente mejora todo y sale macri diciendo 'aaaa se la creyero\u00f1 wey xd' pero que decis flaca estas cosas no pasan",
        "id": "1036289875950088192"
    },
    {
        "texto": "Cardi B un dia dijo que dejen de quejarse porque muestre las tetas porque ya que se rompio el lomo laburando para pagarse la cirugia las va a mostrar hasta que se muera y ese se\u00f1ores es mi lema de vida de ahora en mas",
        "id": "1035695515692871685"
    },
    {
        "texto": "Tnt y the winter soldier mi combo fav \ud83d\udcaf\ud83d\udcaf",
        "id": "1033888407536185350"
    },
    {
        "texto": "Me fui a comprar un paraguas super feliz porque habia pinta de tormenta huracan y NO LLOVIO fui estafada",
        "id": "1033177885425782791"
    },
    {
        "texto": "Ya me tome 3 cafes en lo que va del dia insomnio ya te siento",
        "id": "1032705829651271680"
    },
    {
        "texto": "No me gusta el chocolate blanco pero me estoy clavando terrible milka oreo #gordalife",
        "id": "1031724417481621504"
    },
    {
        "texto": "La cantidad acumulada de cosas para la facultad que tengo es inmensurable voy a explotar",
        "id": "1031583896364871680"
    },
    {
        "texto": "Me volvi a poner unas zapatillas que no usaba desde el colegio y JESUS son horribles que mal gusto tenia",
        "id": "1030560376218415105"
    },
    {
        "texto": "Hace hora y media estoy resumiendo embrio y lei tantas veces meso/endodermo embrionario que me va a explotar el cerebro",
        "id": "1030220066766446595"
    },
    {
        "texto": "Estoy esperando el bondi y creo que me acaba de pasar por al lado nancy dupla todo muy normal por san martin",
        "id": "1030169971157020672"
    },
    {
        "texto": "Estoy en la calle con este solazo y me quiero tapar la cara ya me converti en vampiro",
        "id": "1029427305645568002"
    },
    {
        "texto": "Sin darme cuenta termine con todas las distintas botellas de cepita tengo una coleccion en mi heladera",
        "id": "1029418510609469440"
    },
    {
        "texto": "En septiembre hbo estrena ragnarok y la gorda ya se lo agendo con alarma y todo obvio",
        "id": "1028482432373272576"
    },
    {
        "texto": "Mi vieja dice que no le gusta la ciencia ficcion/fantasia pero se clava 4 peliculas de piratas del caribe juntas esa indecision no se la robo",
        "id": "1028353601167613952"
    },
    {
        "texto": "Siempre que se acerca mi cumplea\u00f1os no quiero cumplir a\u00f1os y me pongo super ansiosa pero despues llega el dia y estoy super emocionada reclamando amor y regalos quien me entiende",
        "id": "1027651520865751042"
    },
    {
        "texto": "Por favor que rajen a todos los ineptos que votaron en contra de progresar como sociedad no lo puedo creer",
        "id": "1027540308249268225"
    },
    {
        "texto": "Yo en serio pense que no iban a decir burradas como \"a los perritos los regalas\" pero madre mia que estaba equivocada",
        "id": "1027263521157992448"
    },
    {
        "texto": "Amalia granata exiliate a una isla desierta en el polo norte porfi",
        "id": "1026981396697571328"
    },
    {
        "texto": "Me suspendieron la clase esa la mala leche no te la robo amigo",
        "id": "1026828711176404995"
    },
    {
        "texto": "Me levante 8 am hoy y tengo mas energia que cuando duermo 10 hs esto es el colmo",
        "id": "1026820210316201984"
    },
    {
        "texto": "Tengo banda de plata= no hay descuentos ni me quiero comprar nada\nTengo 100pe= mil promos hasta en comida",
        "id": "1026624852642471937"
    },
    {
        "texto": "Hoy fui a visitar a un bebe y les juro que me lo llevaba a mi casa no pueden ser tan lindos",
        "id": "1026269069685796864"
    },
    {
        "texto": "Chicos me levante y NO HACE FRIO me estoy yendo a palermo urgente",
        "id": "1026119438683267072"
    },
    {
        "texto": "Quiero tener un gran parque para plantar 27 cultivos de arandanos y vivir feliz comiendo arandanos con arandanos",
        "id": "1025455427679674368"
    },
    {
        "texto": "Por que ahora se les da por vender jeans unicamente con la pierna por arriba del tobillo????? La gente alta se caga de frio hermana haceme un pantalon mas largo oo  o o",
        "id": "1025382806170611712"
    },
    {
        "texto": "Me encanta la gente que se pone la foto de wpp con el \"salvemos las 2 vidas\" me hace acordar al 2008 cuando poniamos fotos de perros o famosos \ud83d\ude05",
        "id": "1025204158385799171"
    },
    {
        "texto": "Le hable a una amiga como la faraona y no me capto el chiste no lo puedo creer",
        "id": "1024833839326289921"
    },
    {
        "texto": "Que se hace cuando tu hermano/a usa tu ropa sin permiso y ni siquiera te avisa que la va a usar?????????",
        "id": "1024731049694244864"
    },
    {
        "texto": "La puta madre que maravilla las primeras temporadas de greys anatomy",
        "id": "1024452360763006978"
    },
    {
        "texto": "A esta epoca del a\u00f1o nunca salen peliculas buenas, todo sale en noviembre cuando estamos hasta las bolas con todo no se puede salir asi",
        "id": "1023963402400616454"
    },
    {
        "texto": "Sali al patio de mi casa y vi a marte en el cielo y entre en modo nerd astronoma gordafan no puedo calmarme ayuda",
        "id": "1023724282298478595"
    },
    {
        "texto": "Lo que me va a costar arrancar a cursar de nuevo mama",
        "id": "1023684106339725314"
    },
    {
        "texto": "Siempre que hay un fenomeno astronomico genial o no lo podemos ver por la zona o porque esta nubladisimo 24/7 voy a llorar",
        "id": "1023258811677728769"
    },
    {
        "texto": "Tengo menos ganas de empezar a cursar lpm esto pasa por no tener que estudiar en vacaciones",
        "id": "1023226795066318849"
    },
    {
        "texto": "A la gente que hace cosas como esas me da ganas de ir yo con un bate y romperle todo",
        "id": "1022274821898620928"
    },
    {
        "texto": "Pero siempre me fia y me dice: nadie muere por x$ usted es buena gente se\u00f1or dejeme darle un abrazo",
        "id": "1021874373089746944"
    },
    {
        "texto": "El pescadero me debe querer demasiado o verme cara de buena gente (o terrible boluda) porque siempre que voy me falta plata",
        "id": "1021874039592288257"
    },
    {
        "texto": "Por dios lo que es tomorrowland me desmallo aca",
        "id": "1021206134806515713"
    },
    {
        "texto": "Me pegue un raju\u00f1on durmienndo ahora tengo una raya roja EN EL MEDIO DEL CACHETE bai",
        "id": "1020323154227494914"
    },
    {
        "texto": "Me pone seriamente histerica escuhar a los providas discutir en el senado quiero romper mi televisor",
        "id": "1019682811643617284"
    },
    {
        "texto": "Antojos de madrugada y los mios que me quiero comer un PLATO DE FRITAS CON MILANESA 1 AM ILEANA PARA UN POCO LOK",
        "id": "1019072012948516864"
    },
    {
        "texto": "Los videos de perros fallando en atrapar comida/objetos son mi entretenimiento diario",
        "id": "1018953763053293569"
    },
    {
        "texto": "Que mala leche que se largue a llover asi ahora man",
        "id": "1018548109436182529"
    },
    { "texto": "KARRRRRRMA KARMAAAA", "id": "1018532532130852865" },
    { "texto": "Francia la re puta madreee", "id": "1018531605730725893" },
    {
        "texto": "QUE HIZO EL ARQUERO SE QUEDO MIRANDO",
        "id": "1018530034431283200"
    },
    { "texto": "Que partido intenso jesus", "id": "1018521913155612672" },
    { "texto": "GOOOOOOL CARAJO", "id": "1018517699440332801" },
    { "texto": "No te la puedo creeeeeEEeeeer", "id": "1018515161278185475" },
    {
        "texto": "No puedo creer que me perdi todo el partido por dormir que hija de puta sooooy",
        "id": "1018162696867532803"
    },
    {
        "texto": "Bueno hice el test ese de personalidad y me salio compulsiva y obsesiva del control/reglas, monica geller who?",
        "id": "1017602108063993856"
    },
    {
        "texto": "Vi 5 videos de gente en universidad tratando de cambiar el horario de sue\u00f1o: una semana levantandose 7am, al 8vo dia sin alarma se levantan. Yo no reacciono ni con 7 alarmas",
        "id": "1017539663375097856"
    },
    {
        "texto": "Quien implemento la cebolla como alimento estoy como timmy turner cuando vicky lo obliga a cortar una monta\u00f1a y no para de llorar",
        "id": "1017189505537847297"
    },
    { "texto": "It's(not) coming home jejejejeje", "id": "1017145676780703744" },
    { "texto": "GOOOOOOOOOL", "id": "1017141761175638016" },
    {
        "texto": "La piba aprobo un parcial y mi vieja ya llamo a mi viejo (a la oficina en medio del laburo) las amigas, mi madrina y tia.  Asi de intensos pero los quiero",
        "id": "1016844132181008385"
    },
    {
        "texto": "Peso 40kg despues de haber aprobado todo esta mitad de a\u00f1o los milagros ocurren chicos",
        "id": "1016771620231360517"
    },
    {
        "texto": "En la epoca que estamos tenes necesidad de irte y no volver a tu casa por 3 dias SIN AVISAR NADA Y DECIR \"ESTABA DE UN AMIGO\"?????????? LA RE PUTA MADRE LOCO",
        "id": "1016702343444881408"
    },
    {
        "texto": "Tengo mas ganas de tirarme a ver tele en la cama que de dormir las horas que perdi estudiando este mes asi estamos pipol",
        "id": "1016161055502929920"
    },
    { "texto": "VAMOOOOOOOOS", "id": "1015699642305122305" },
    {
        "texto": "Jajajajajajajajajajajaja como le pifio lpm",
        "id": "1015698735882481666"
    },
    { "texto": "Concha de la loraaaaaa", "id": "1015694476973674496" },
    { "texto": "Vamo croacia carajoooo", "id": "1015667147777986560" },
    {
        "texto": "Soy la unica boluda que le anda para el orto twitter o que lpm",
        "id": "1015655032027533314"
    },
    {
        "texto": "Esta todo normal fue momentaneo el cierre, vieron cai tarde a la fiesta como siempre",
        "id": "1015430064421425155"
    },
    {
        "texto": "Afuera espa\u00f1a chicos que mundial mas bizarro",
        "id": "1013462927280689152"
    },
    {
        "texto": "Vayanse a cagar todos los que predijeron que llegabamos a la final son unos chantas todos",
        "id": "1013088585006944257"
    },
    { "texto": "Weno chicos un placer fue", "id": "1013081451196289024" },
    { "texto": "NOOOOOO", "id": "1013078597173760001" },
    {
        "texto": "En fin yo iba a estudiar pero asi no se puede",
        "id": "1013077628830527491"
    },
    {
        "texto": "Paren todo yo pense que habia sido messi mas ciega imposible la flaca",
        "id": "1013077458848047106"
    },
    { "texto": "QUE GOLASO MESSI SOS DIOS", "id": "1013076239400259585" },
    { "texto": "GOOOOOOOOOOOOL PUTOOOOS", "id": "1013070046342668290" },
    { "texto": "NOS VIVEN CAGANDO QUE ES ESTO", "id": "1013062883733843969" },
    {
        "texto": "Que hago en twitter si tengo que estar estudiando deja de tentarme internet",
        "id": "1012843217543450625"
    },
    {
        "texto": "Bueno more rial ya entendimos que te estan haciendo transfusiones no necesitamos recordarlo cada 20 minutos",
        "id": "1012842269102297088"
    },
    {
        "texto": "Recien ahora vengo a descubrir el programa de moria en america. Me alegra las tardes esta mujer",
        "id": "1012073706036846592"
    },
    { "texto": "Que maravilla este mundial", "id": "1012002377019396104" },
    { "texto": "Como te cabio alemaaaaaaan", "id": "1012001893818818560" },
    { "texto": "Las ojeras por el piso", "id": "1011971545508581379" },
    {
        "texto": "En el aula magna estan viendo el partido y desde el aula escuchamos el grito. Nos dejaron salir? Obvio que no",
        "id": "1011675212117696514"
    },
    {
        "texto": "Tener que resumir con las manos heladas hace que mis apuntes parezcan de un nene de 5. Necesito una estufa portatil",
        "id": "1010910480293072897"
    },
    { "texto": "Atajalo negro", "id": "1010200932196474880" },
    { "texto": "Sabella volve", "id": "1009886804344999936" },
    {
        "texto": "JAJAJJAJAJAJAJAJAJAJAJAKQ QUEMENLO A CABALLERO",
        "id": "1009885877340901377"
    },
    { "texto": "Ah nononono esto es el colmo", "id": "1009883166788734977" },
    { "texto": "Yo no te la po creer", "id": "1009876225660157952" },
    {
        "texto": "Acabo de pedirle a netflix publicamente que suba una pelicula porque soy una gordafan? Si acabo de hacerlo",
        "id": "1009817333567836160"
    },
    {
        "texto": "Mas tengo que estudiar mas ganas de salir y ver peliculas me dan lpm por que eres asi",
        "id": "1009607501812248576"
    },
    {
        "texto": "Me sone la nariz al punto que llegue a ver colores toy 10 puntos chicos",
        "id": "1009283772943040513"
    },
    {
        "texto": "Que nivel de retraso manejas para entrar en una casa a robar UN PERRO? La gente cada dia mas enferma",
        "id": "1009230265380753408"
    },
    {
        "texto": "Esto de cursar una vez por semana y que mi turno SIEMPRE cae en los paros me estaria haciendo reconsiderar hasta mis decisiones de vida",
        "id": "1008884513496358912"
    },
    {
        "texto": "Estoy viendo age of ultron y hace tanto que no escuchaba la voz de clint que ya no lo reconozco volve clint te extra\u00f1o",
        "id": "1008871950624743430"
    },
    {
        "texto": "QUE PELICULON LA PUTA MADRE PIXAR TE AMO",
        "id": "1008493195783823360"
    },
    {
        "texto": "Estoy en la sala de los increibles y de 100 personas que deben entrar, hay 8 ni\u00f1os. Ese es el espiritu gente",
        "id": "1008460682801680392"
    },
    {
        "texto": "Tengo que irme al gimnasio y no puedo dejar de ver the dark knight que peliculon MAMA",
        "id": "1007726781690990593"
    },
    {
        "texto": "Robbie Williams te amo amo tus temas amo tu traje amo amo #WorldCupRussia2018",
        "id": "1007271492709691392"
    },
    {
        "texto": "VAMOS CARAJO \ud83d\udc9a\ud83d\udc9a\ud83d\udc9a\ud83d\udc9a",
        "id": "1007250668053200898"
    },
    {
        "texto": "Me preguntaron si era posta lo de la encuesta JAJAJAJAJAJA DONDE ME METO AHORA",
        "id": "1006925556108144640"
    },
    {
        "texto": "Alicia Silverstone volvio a hacer a Cher de clueless en lip sync battle ya puedo morir feliz",
        "id": "1006925343725408256"
    },
    {
        "texto": "La re puta que los pario a contestar encuestas de mierda que ponen en el medio de la pantalla que no quiero contestar lpm que verg\u00fcenzaaaaaa",
        "id": "1006923616716509185"
    },
    {
        "texto": "Las entradas de halsey mas baratas 1500 TAMOS EN EL GRAN REX QUE PASO HERMANO",
        "id": "1005244882238296070"
    },
    {
        "texto": "Mtv hits pasando temasos viejos estoy que bailo en la mesa",
        "id": "1005181143392636929"
    },
    {
        "texto": "El agusti con buzo de egresados amarillo??????? Que clase de brujeria hicieron para que los dejaran ese color?? \ud83d\ude0d\ud83d\ude0d",
        "id": "1005107163633737729"
    },
    {
        "texto": "Camperon bufanda y crocs con medias la facha en persona soy",
        "id": "1004831170427834370"
    },
    {
        "texto": "Limpiaron la pared de las manos de los egresados en la facultad, estoy por llorar",
        "id": "1004749031212544000"
    },
    {
        "texto": "Yo vengo del gimnasio super emocionada sin panza re energetica y me clavo una milanesa con fritas si hay algo mas fit que eso ya nose",
        "id": "1004389715435507712"
    },
    {
        "texto": "Fui a farmacity por esmaltes y sali con alcohol en gel, un chapstick y dos paquetes de saladix pizza hablame de compulsiva",
        "id": "1004124193775144960"
    },
    {
        "texto": "El tren y la puta que los pario que tarda 10 minutos en cada estacion MOVETE FORROOOOOOO",
        "id": "1004031937156038657"
    },
    {
        "texto": "Ya no puedo poner mi calendario del celu con diferentes colores, la emocion de hacer cosas se perdio para siempre",
        "id": "1003301003385503745"
    },
    {
        "texto": "Se me rompieron los auriculares y fue tipo *NOOOO* *llora* *mini velorio* *los tira* *agarra los de la madre* *all good*",
        "id": "1002928025674108928"
    },
    {
        "texto": "Me duelen los dedos del frio no saben lo que costo escribir esto",
        "id": "1002204376348454912"
    },
    {
        "texto": "La re puta que los pario a los truenos quien carajo me duerme ahora",
        "id": "1001663950143066112"
    },
    {
        "texto": "No paro de llorar con high school musical 3 como superar yahoo respuestas",
        "id": "1001262191998316549"
    },
    {
        "texto": "Me excedo un caramelo de mi ingesta necesaria de azucar y tengo una pila en el culo no me calman ni de una pi\u00f1a",
        "id": "1000228823366094848"
    },
    {
        "texto": "Me corte la lengua con un chupetin NI A LA GENTE QUE SE HACE PIERCINGS LE SANGRA TANTO que deforme soy bro",
        "id": "999102446734659584"
    },
    {
        "texto": "Desde ayer estoy llorando porque yo tambien quiero ser meghan markle pero no soy actriz ni yanki ni meghan markle jaja gudbai",
        "id": "998390565229285378"
    },
    {
        "texto": "Que tantos problemas tiene que tener una persona para robar (atenti eh) APUNTES DE ANATOMIA????????????",
        "id": "997571386657988608"
    },
    {
        "texto": "Entre el sudor excesivo del subte y el frio de afuera me agarra una hipotermia",
        "id": "996511539137048576"
    },
    {
        "texto": "Me encanta coleccionar muestras de perfumes tengo cartonsitos en todas mis mochilas billetera cartuchera ah pero comprar esos perfumes jaja saludos",
        "id": "996212040162267136"
    },
    {
        "texto": "Como superar rdj haciendo acento ingles para sherlock holmes yahoo respuestas",
        "id": "996196561314045952"
    },
    {
        "texto": "\"Encarga los libros ya encargalos todos\"\n*encargo los libros*\n\"Ay pero todos juntos no para es muy caro asi\" \nPero la puta madre algun dia dejara la indecision esta mujer???",
        "id": "994652003971330053"
    },
    {
        "texto": "Anoche para pasar la depresion post cine nos pasabamos memes con mi amiga y mientras nos reiamos ibamos llorando porque superarlo cuando no?",
        "id": "994650492482531328"
    },
    {
        "texto": "Quiero todos los vestidos de versace de la met gala de ayer QUE ARTE",
        "id": "994050292479119360"
    },
    {
        "texto": "El tren acaba de anunciar que estamos en retiro (estoy en urquiza) listo chicos en cualquier momento se rompe todo",
        "id": "993884844458422273"
    },
    {
        "texto": "Me cague mojando para ir a la facultad parcial del orto mira lo que hago por vos",
        "id": "993884593123143690"
    },
    {
        "texto": "La siesta que me acabo de clavar en la biblioteca esa comodidad no te la robo",
        "id": "993541852774137856"
    },
    {
        "texto": "Ya como 7 personas me dijero que avengers es heavy YA ENTENDI NO ME TRAUMEN MAS PLS QUE NO LLEGO A VERLA SI SIGO ASI",
        "id": "992946870065475584"
    },
    {
        "texto": "Llorando como una condenada viendo bajo la misma estrella QUE PELICULA DE MIERDA PERO QUE PELICULON LA PUTA MADRE",
        "id": "992599317427949569"
    },
    {
        "texto": "Los programas de trivia tipo pasapalabra me los contesto 87% bien en mi casa, seguro si voy a participar le pifio a todo",
        "id": "992581259632300032"
    },
    {
        "texto": "Se me rompio un guante hoy y se filtro formol. 4 HORAS HACE QUE MI MANO HUELE A CADAVER CONSERVADO ME TENGO QUE LAVAR CON LAVANDINA O QUE",
        "id": "992541454689013761"
    },
    {
        "texto": "A esta hora me agarran nervios ganas de llorar de dormir y putear a alguien pero si me duermo me siento que no llego a estudiar necesito calmarme ya",
        "id": "992221631736139776"
    },
    {
        "texto": "Me desmayo con lo que acabo de leer",
        "id": "992221233960968194"
    },
    {
        "texto": "Tengo terrible sue\u00f1o, el dia esta para dormir 4hs de siesta y yo (sigo) teniendo que estudiar. A veces me cuestiono mi eleccion de carrera",
        "id": "991740033756483585"
    },
    {
        "texto": "Estoy tan acostumbrada a las peliculas de +2hs que una pelicula de disney de 80 minutos es como ver una serie aprox",
        "id": "991489681459236864"
    },
    {
        "texto": "Exactamente a esta hora el martes que viene voy a estar viendo la intro de infinity war ya llorando seguro porque no supero el estres que me causa",
        "id": "991441921787727873"
    },
    {
        "texto": "Soy la unica que se la paso estudiando????? Denme el titulo por responsabilidad right now",
        "id": "991414001790803968"
    },
    {
        "texto": "Lpm ya estoy viendo muchas fotos sospechosas de iw y me niego a dejar las redes sociales estoy corriendo un gran riesgo?",
        "id": "990396480577040384"
    },
    {
        "texto": "Estoy viendo una pelicula con Mark Ruffalo haciendo  de gay JAJAJAJAJAJAJAJAJAJAJAJA ESTOY ESTALLADA",
        "id": "990045003274743809"
    },
    {
        "texto": "La era de hielo deberia hacer otra pelicula donde se reencuentran con el nene y ahi vamos todos al cine a llorar",
        "id": "990033920807833600"
    },
    {
        "texto": "Se comprometio el youtuber que me gusta y estoy mas feliz que si fuera un amigo aprox \ud83d\ude2d\ud83d\ude2d",
        "id": "989883472255881216"
    },
    {
        "texto": "La mermelada de naranja es la oveja negra de las mermeladas en serio como es que sigue existiendo",
        "id": "989856474762444800"
    },
    {
        "texto": "Hace un re calor y el tren no prende el aire todo al revez hacen",
        "id": "988916744554274818"
    },
    {
        "texto": "Instagram te come los datos la bateria y el alma estupida y sensual aplicacion",
        "id": "988806169971052545"
    },
    {
        "texto": "DEJEN DE HABLAR Y PONGAN A ROBERT DOWNEY JR LOCO #InfinityWar",
        "id": "988605781728813056"
    },
    {
        "texto": "En serio tenes que preguntar en un grupo masivo de gente si hay seminarios o tp el lunes y martes FERIADO????? Que gente idiota lpm",
        "id": "988435976027607040"
    },
    {
        "texto": "Que twitter nunca muera, Am\u00e9n.",
        "id": "988229083782840320"
    },
    {
        "texto": "Ustedes saludan al chofer del bondi cuando suben? Yo no puedo no hacerlo me siento un terrible humano",
        "id": "988145336492359680"
    },
    {
        "texto": "La gente que limpia con musica no se como hace porque yo me hago un recital o bailo en la mesa",
        "id": "987745429289951232"
    },
    {
        "texto": "BOLUDO SE MURIO AVICII ES JODA ESTO?????",
        "id": "987387371724394501"
    },
    {
        "texto": "343 vas a aparecer o no hijo de tu gran puta primer aviso segundo aviso vigesimo cuarto aviso forro",
        "id": "987079102363586560"
    },
    {
        "texto": "Ojala todos tengan una amistad en la que ven algo que les gusta y 4 dias despues su amigo se los regala \ud83d\udc95",
        "id": "986737282605633536"
    },
    {
        "texto": "Las ganas de cursar y estudiar son cada vez mas inversamente proporcionales a la cantidad de cosas que tengo para estudiar",
        "id": "986243902733737984"
    },
    {
        "texto": "No soy fan de beyonce pero podria estar 3hs viendo sus videos en vivo",
        "id": "985868406430863361"
    },
    {
        "texto": "Todo san martin esta haciendo asado hoy???????? Inviten \ud83d\ude2d\ud83d\ude2d",
        "id": "985563762051764224"
    },
    {
        "texto": "Mi version de resaca es levantarme sintiendo que peso 120kg congestionada y sin voz (haya salido hasta las 6 o no), buen domingo",
        "id": "985555880988028933"
    },
    {
        "texto": "Amo las peliculas de ciencia ficcion o fantasia chabon no hay mejor genero que el que te saca un rato del mundo real",
        "id": "983898018024960001"
    },
    {
        "texto": "Me encanta cuando mi hermana se enoja y violenta porque *apoya objetos bruscamente* *camina golpeando los talones* *da portazos* *se tira en la cama con agresividad*",
        "id": "983891943703875586"
    },
    {
        "texto": "Odio los paros pero que lindo es dormir man",
        "id": "983697174486712320"
    },
    {
        "texto": "Bueno me acabo de enterar que peter dinklage va a estar en infinity war la pelicula se hizo un 150% mejor",
        "id": "983499573791547392"
    },
    {
        "texto": "Las planchas son el ejercicio de la muerte. No puedo mover brazos/panza estoy llorando",
        "id": "982626982784618497"
    },
    {
        "texto": "Amigo acaba de mandar audio al grupo de wpp que gente se quedo encerrada en el acensor de la facultad y estan tocando la chicharra y nadie les da bola JAJAJAJAJA estoy muriendo",
        "id": "982319380372639747"
    },
    {
        "texto": "Infinity war esta a las 22.30 y yo no tengo 2x1 para el 4D POR QUE TANTA DESGRACIA POR QUE XQ",
        "id": "982049261511696384"
    },
    {
        "texto": "Acabo de ver a una abuela color caribe con corrector de ojeras BLANCO estalle",
        "id": "981921068653965312"
    },
    {
        "texto": "Quiero ir a ver infinity war y que todo el cine este empapelado con esos posters porque son ARTE",
        "id": "981702177122025472"
    },
    {
        "texto": "No puedo hacer tarea con musica porque o me cuelgo cantando o me pongo a perrear alguien mandenme secretos para concentrarse",
        "id": "981579679462281216"
    },
    {
        "texto": "El viernes se estrena legion de nuevo se me alegro la semana",
        "id": "981533639824564224"
    },
    {
        "texto": "Ya curse la clase de hoy ahora me falta seminario de biologia celular cuando termina esta tortura se\u00f1or (2da clase)",
        "id": "981318048459214848"
    },
    {
        "texto": "No llego a las 19 a mi casa para merendar y ya muero de hambre, necesito alimento urgente",
        "id": "981292783372730369"
    },
    {
        "texto": "Estoy en una previa en pedo tirada en un puf, soy la joda personificada",
        "id": "980672377448214529"
    },
    {
        "texto": "Estoy muy harta del adn y el ciclo de krebs y los genes y las proteinas HACE 4 A\u00d1OS VENGO ESTUDIANDO LO MISMO SAQUEN ESTA MATERIA DE UNA VEZ",
        "id": "980224508534624256"
    },
    {
        "texto": "Resumiendo acorto ciertas palabras con simbolos de fisica y quimica hablame de ser nerd",
        "id": "980222628484079616"
    },
    {
        "texto": "Me compro una taza, mi hermana me la usa, me compro una botella de agua con el piquito ese raro, mi hermana me la usa. Culo veo culo quiero la piba la puta madre",
        "id": "979853264500985856"
    },
    {
        "texto": "Deberia estar resumiendo para la facu pero esta harry potter y esta la cama y esta el aire se me complica ser responsable",
        "id": "979834703112032256"
    },
    {
        "texto": "Me duro 2 minutos el paquete pedorro este necesito un balde de 3kg",
        "id": "979536683761881088"
    },
    {
        "texto": "Las mogul amarilla no deberian existir",
        "id": "979535149321936896"
    },
    {
        "texto": "Boludo hoy vi the winter soldier de nuevo y mencionan en una parte a dr strange estas peliculas estan conectadas en niveles extremos ya",
        "id": "978074272097820672"
    },
    {
        "texto": "Mi vieja me arreglo un jean que parecia irreparable. Hace magia esta mujer",
        "id": "978003423898603521"
    },
    {
        "texto": "One direction anda de tour cada uno por su parte pero cantan canciones de 1D colaboren con el presupuesto y juntense de nuevo hijos de puta",
        "id": "977730909859434496"
    },
    {
        "texto": "Quiero llenarme las orejas de aritos pero una vez me hice uno Y ME DESMAYE VOLVIENDO EN EL TREN(casi)",
        "id": "976926994410758151"
    },
    {
        "texto": "Short y campera/buzo solo queda bien en la playa, me veo mas ridicula que usando crocs con medias",
        "id": "976561261432500227"
    },
    {
        "texto": "600 pesos una bufanda KEEEE dejame mejor me abrigo con un trapo",
        "id": "976118026490777602"
    },
    {
        "texto": "No quiero empezar a cursar porque no tengo ganas de hacer mas amigos de los que tengo hablame de ser social",
        "id": "976107402708824064"
    },
    {
        "texto": "Ma\u00f1ana empiezo a cursar y el unico jean que me queda bien es rojo vivo bien ahi",
        "id": "975830712518627330"
    },
    {
        "texto": "Necesito ver el set de damas gratis en el lolla con todos los chetos no entendiendo que esta pasando",
        "id": "975185819400069120"
    },
    {
        "texto": "Mi familia me tratan de asquerosa y fria porque no les doy abrazos/besos/les digo cosas tiernas constantemente. TE ABRAZO Y DIGO TE QUIERO CUANDO SE ME CANTE LA CONCHA DE TU HERMANA",
        "id": "974814594937049088"
    },
    {
        "texto": "Necesito tener un mini bunker donde poner kilos de chocolate y cosas dulces asi cuando me antojo no lloro porque no hay nada",
        "id": "974473568930140160"
    },
    {
        "texto": "Te puedo ver cualquier tipo de cirugia pero no me muestres u\u00f1as muertas/encarnadas o cualquier parasito porque te vomito hasta aire",
        "id": "974427834855886855"
    },
    {
        "texto": "Hoy hacia 46 a\u00f1os denzel crocker perdio a sus padrinos magicos un minuto de silencio",
        "id": "974291846217289734"
    },
    {
        "texto": "No me acordaba de los creditos de la bella y la bestia (live action) hasta eso es un arte que pelicula mas perfecta",
        "id": "973687875333214208"
    },
    {
        "texto": "HARRY STYLES CANTA CANCIONES QUE NO ESTAN EN EL ALBUM EN LOS RECITALES POR QUE EL MUNDO ES TAN CRUEL POR QUE NO VOY POR QUE JESUS",
        "id": "973574212416831489"
    },
    {
        "texto": "C\u00f3mo que daddy yankee estuvo en geba y yo recien me entero C\u00d3MO ME PERDI ESO",
        "id": "973290220341878784"
    },
    {
        "texto": "La temperatura de mi casa esta para dormir la siesta con una manta   y yo vuelvo a ser feliz",
        "id": "972893090435477505"
    },
    { "texto": "Me persigue la desgracia", "id": "972266483542904833" },
    {
        "texto": "Acaban de subir el programa de una materia en el fb de la facultad y EL PRIMER PARCIAL CAE EL MISMO DIA QUE EL FINAL DE ANATOMIA ME PEGO UN TIRO O ME PEGO DOS",
        "id": "972266087558639617"
    },
    {
        "texto": "Dos dias de actividad fisica y no puedo moverme maldigo el dia que deje del ir al gimnasio",
        "id": "971776393150435328"
    },
    {
        "texto": "Cada vez entiendo menos la necesidad de hacer joda y previa y caer en pedo al colegio para cosas boludas como EMPEZAR LAS CLASES, PRESENTAR UN BUZO, CHICOS QUE LES PASA",
        "id": "970679176197009409"
    },
    {
        "texto": "Nooooooo por que hacen esto lpm no se puede confundir warren de nuevo XQXQ",
        "id": "970520940470730755"
    },
    { "texto": "GANO FRANCES VAMOS CARAJOOOOO", "id": "970517781077774336" },
    {
        "texto": "Tiene que ganar timothee tiene que ganar timothee tiene que ganar timothee",
        "id": "970514903831384066"
    },
    {
        "texto": "Mas le vale que no gane su pelicula porque esto es una estafa sino",
        "id": "970512985344102400"
    },
    {
        "texto": "Si para mejor actor no gana thimothee chalamet o gary oldman rompo algo",
        "id": "970503011121418242"
    },
    { "texto": "Que gane Sam Rockwell #Oscars", "id": "970468440086589440" },
    {
        "texto": "Me retracto wtf es esta pelicula Del Toro que flashaste",
        "id": "970361799609585665"
    },
    {
        "texto": "Cuando hay muchos hashtags arabes en trending topics me pongo nerviosa porque: estaran hablando de un programa de tv? Estaran comentando sobre alguien? Estaran planeando un ataque secreto? Nunca sabremos",
        "id": "970005585767882752"
    },
    {
        "texto": "Quiero empezar las clases porque el  nivel de paja y ganas de dormir paso de perezoso a koala y ya no es aceptable",
        "id": "969712502203437057"
    },
    {
        "texto": "Esas youtuber/instagrammer fit que van al gim y esta re vacio me explican que hacen van a las 5am lo cierran para uds tienen uno en su casa porque a mi no me estaria pasando eso",
        "id": "969264572396986369"
    },
    {
        "texto": "No se les puede decir nada a mis viejos que ya empiezan a criticar y darte sus opiniones tirando abajo lo que vos pensabas. No les hablo mas un carajo la puta madre",
        "id": "968654999776579584"
    },
    {
        "texto": "Me dije que iba a verme todas las peliculas nominadas al oscar, quedan 5 dias y 7 peliculas vamos bien ilu",
        "id": "968640011271917568"
    },
    {
        "texto": "Chicos el uniforme del agusti esta mas caro que ir a adidas aprox la pollera sale 1000pe la remera de gim 500 JAJAJAJAJAJAA KE",
        "id": "968158694751002624"
    },
    {
        "texto": "El nene que vino con esto al pelotero vuelve descalzo \ud83d\ude08",
        "id": "967509506560352256"
    },
    {
        "texto": "Ah paren porque en la escena porscreditos me emocione tanto que el grito que pegue me lo escucharon los de la sala de enfrente aprox esa si que no me la esperaba",
        "id": "965755980557496320"
    },
    {
        "texto": "Terrible vacio despues de ver 50 sombras, estoy que lloro aprox",
        "id": "965701117882585088"
    },
    {
        "texto": "No me puedo tomar 100% seria la pelicula si me pasan musica nigga y de repente musica de tribu jajajajajajajaja no pare de reirme",
        "id": "965652440673595393"
    },
    {
        "texto": "Me encanta agarrar mi billetera y que este gorda. Pero despues abro y veo billetes de 2 y 5 pesos y se me va el amor",
        "id": "964285203706535936"
    },
    {
        "texto": "Volvio mi familia a la casa y les juro que jamas me senti tan feliz",
        "id": "964274007171387392"
    },
    {
        "texto": "Puta que los pario con los spoilers de 50 sombras ya lei el libro y se todo pero DEJEN DE SPOILEAR LA QUE LOS PARIO A TODOS",
        "id": "964267191205089281"
    },
    {
        "texto": "Estoy hecha un desastre (literal no les jodo) de los nervios final de mierda anatomia de mierda estres de mierda todo mierda AYUDA",
        "id": "963588914702422017"
    },
    {
        "texto": "Ma\u00f1ana rindo y estoy tranquila pero entrando en panico al punto de necesitar una dosis de lorazepam (tampoco tanto exagerada) mas una tremenda paja que solo quiero ver disney pero con miedo de olvidarme donde esta el higado basicamente exploto chau",
        "id": "963553588814467072"
    },
    {
        "texto": "Lpm es que la estoy viendo y me confirmo que es buenisima chabon pero QUE PASO CON ESE FINAL",
        "id": "963221986787889153"
    },
    {
        "texto": "Split es una de esas peliculas que la vas viendo y cada vez te gusta mas. Hasta que llega el final y arruina todo",
        "id": "963220127968874496"
    },
    {
        "texto": "Es la 3er vez que veo dr strange y me sigue volando la cabeza (y no la estoy viendo en 3D)",
        "id": "962367073816076289"
    },
    {
        "texto": "Nunca mas me vuelvo a la casa sola porque tengo que rendir, que para el orto la estoy pasando chabon",
        "id": "961737280301027329"
    },
    {
        "texto": "Yo me emociono con una pagina de zapatos 2x1 y al entrar el mas barato es 2500 DEJEN DE JUGAR  CON MIS SIENTIMIENTOS",
        "id": "960656760800464896"
    },
    {
        "texto": "Me agarran fallos en los que no tuiteo por 3 dias pero rt y fav mil cosas (si fav no supero mas que no este la estrellita)",
        "id": "960325872958963712"
    },
    {
        "texto": "Necesito que los boliches tengan una noche tematica de reggeaton viejo asi voy a las 00 y salgo a las 7 am sin haberme pegado el embole de mi vida",
        "id": "957460432377339904"
    },
    {
        "texto": "Yo tomo mucha agua y como ensaladas pero mi piel sigue igual de fea qu\u00e9 es esta clase de estafa exijo una explicacion",
        "id": "957048144189116416"
    },
    {
        "texto": "PARA QUE CARAJO ME ENGANCHO CON ESTA SERIE DE MIERDA QUE SE ME MUEREN TODOS EN UN SOLO EPISODIO PORQUE EL PELOTUDO NO SE QUISO CASAR CON LA HIJA DEL VIEJO FORRO Y LA OTRA QUE TIENE 3 DRAGONES Y TODAVIA NO LOS USA Y LA PUTA QUE LOS PARIO A TODOS",
        "id": "957020598177271810"
    },
    {
        "texto": "Necesito ver the death cure necesito ver a dylan o'brien en la pantalla gigante en primer plano LO NECESITO",
        "id": "956713677364883456"
    },
    {
        "texto": "Me invitaron a comer helado y dije que no porque me siento mal miren a que nivel de hecha mierda llegue para rechazar esa propuesta",
        "id": "956354490801762306"
    },
    {
        "texto": "En vez de remis hay que pedir taxi NO HAY UN PUTO TAXI EN 20 CUADRAS A LA REDONDA",
        "id": "954901152423923712"
    },
    {
        "texto": "En este lugar no hay uber y los bondis no usan la misma sube que nosotros DONDE ESTOY QUIERO VOLVER A MI CASA",
        "id": "954900800119234560"
    },
    {
        "texto": "El asiento tiene para cargar el celular ES EL MICRO DEL FUTURO",
        "id": "954507386076659712"
    },
    {
        "texto": "Ma\u00f1ana me voy y mis viejos (como siempre) me histeriquean porque me llevo una valija en vez de dos bolsos QUE PROBLEMA TENES CON LA VALIJA LA CONCHA DE TU HERMANA",
        "id": "954152424268271621"
    },
    {
        "texto": "Todos con lentes super geniales y fashion y yo todavia con los que te hacian la re facha en 2011 XQ SOY POBRE SE\u00d1OR",
        "id": "954056959229153280"
    },
    {
        "texto": "Lo rechazo chicos nunca me rei tanto pobre viejo  \ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "953744011197632512"
    },
    {
        "texto": "Somos todos conscientes que la maestra flavia esta en el programa de declaraciones de amor? Estoy estallando \ud83d\ude02",
        "id": "953739354291220480"
    },
    {
        "texto": "Armar la valija es tipo\n- 9 remeras (para combinar y repuestos)\n- 6 shorts (idem remeras)\n- 3 pares de zapatillas y dos de ojotas (porque no quiero discriminar ninguno\u00bf\u00bf??) \n- 4 mallas (\u00bf\u00bf\u00bf\u00bf????)\n*(Aclaracion: me voy 5 dias)",
        "id": "953455217932210176"
    },
    {
        "texto": "Acabo de darme cuenta que toda mi vida me dio vueltas la opcion de ser medica me gustaba sufrir desde chica claramente",
        "id": "952404723415515136"
    },
    {
        "texto": "Como me rompe las pelotas que no pasen las cosas en su idioma original y encima la aplicacion que lo permite AHORA LO SACA VOY A ROMPER ALGO",
        "id": "951635252937744386"
    },
    {
        "texto": "Yo me quiero tirar a tomar sol pero la falta de pileta lo hace imposible asi no se puede loco",
        "id": "951564535676264449"
    },
    {
        "texto": "Necesito ir a escuchar a adele en vivo y cantarle a los gritos todo",
        "id": "951479304441024512"
    },
    {
        "texto": "Fui al parque de la costa y literal me subi a todos los juegos menos uno porque estaba en mantenimiento. Mas dias asi porfa\ud83d\ude0d\ud83d\ude0d",
        "id": "950897293082939392"
    },
    {
        "texto": "James franco gano un golden globe y se llevo al escenario al hermano y al tipo que interpreto lo quiero",
        "id": "950187828268490752"
    },
    {
        "texto": "Un pibe de mi facultad subio una foto en primerisimo plano y no paro de verla estoy muerta",
        "id": "949466663220629504"
    },
    {
        "texto": "Sony esta pasando la temporada 12 de greys anatomy pero que calidad de 1er dia del a\u00f1o",
        "id": "947974675992338432"
    },
    {
        "texto": "Lpm tengo al clon de alicia vikander en frente mio pero con pecas estoy muerta",
        "id": "947624877649006592"
    },
    {
        "texto": "Los a\u00f1os nuevos me provocan mil emociones siempre siento voy a explotar en cualquier momento",
        "id": "947541464816455686"
    },
    {
        "texto": "Vieron esos screens de chat de las paginas de memes y chistes? Bueno mi amiga se volvio uno estoy llorando  \ud83d\ude2d\ud83d\ude02\ud83d\ude02",
        "id": "946194768152989696"
    },
    {
        "texto": "No hice gimnasia en aprox 10 meses y estoy proyectando empezar crossfit el a\u00f1o que viene yo soy o un extremo o el otro vieron",
        "id": "945816768278298625"
    },
    {
        "texto": "Entras al hashtag de la noche shopping y ves un monton de gente quejandose del gobierno jajajajjajaajjajaja que tiene que ver hermano dios mio",
        "id": "944621007716999168"
    },
    {
        "texto": "ACABO DE VER EN LA TELE UNA ESCENA ELIMINADA DE HARRY POTTER Y LA PIEDRA FILOSOFAL QUE NUNCA HABIA VISTO WTF COMO",
        "id": "942046790588788737"
    },
    {
        "texto": "El nivel de estres que manejo se refleja en que quise escribir intestino delgado y puse intestino intestino. Lo corregi y lo volvi a escribir IGUAL",
        "id": "941697429451264001"
    },
    {
        "texto": "Quien se olvido que tenia que estar a esta hora en la facultad para repaso de final? \ud83d\ude4b\ud83d\ude4b\ud83d\ude4b\ud83d\ude4b\ud83d\ude4b\ud83d\ude46\ud83d\ude46\ud83d\ude46\ud83d\ude4b\ud83d\ude46",
        "id": "941294387543277569"
    },
    {
        "texto": "Que mala idea mala MALISIMA buscar un vestido de elie saab para el 15 de mi hermana. Indecisa hasta el 2030",
        "id": "941141346647191552"
    },
    {
        "texto": "Fui a comprar una taza de $160 a falabella y me volvi con 3 porque estaban en descuento ese impulso compulsivo no te lo robo",
        "id": "940666485139279872"
    },
    { "texto": "Que nochon el agusti, nunca falla", "id": "938421536175919106" },
    {
        "texto": "UN MES DESPUES Y VOY A VER THOR ESTOY MAS EMOCIONADA QUE UNA NENA DE 5",
        "id": "934935121416867840"
    },
    {
        "texto": "Tengo 8 cositos de 2x1 que te da hoyts y no puedo usar ninguno DESDE JULIO. Necesito ir al cine ya jesus",
        "id": "934791137595969536"
    },
    {
        "texto": "Necesito que llegue el viernes. Tengo parcial y no se nada pero lo que importa es la fiesta de disfraces despues, te amo anato",
        "id": "932708816654884865"
    },
    {
        "texto": "Tengo una ferrari en frente de mis ojooooooos me vuelvo loca",
        "id": "931970274383351808"
    },
    {
        "texto": "Le dije a mi vieja que no embalara la licuadora porque ahora la uso mas seguido y la embalo eN LA CAJA DE ABAJO DE TODO CONTRA UNA ESQUINA yo le tengo que dar un correctivo o que",
        "id": "931264584241074177"
    },
    {
        "texto": "Sumale una hernia en el ciatico porque ya no hago nada y me esta doliendo tengo 74 ahora",
        "id": "930425299476590593"
    },
    {
        "texto": "El dia que vuelva al gimnasio voy a hacer un abdominal y voy a esguinzarme hasta los musculos del pie",
        "id": "930424953933058048"
    },
    {
        "texto": "En el episodio nuevo de greys anatomy hacen referencia a todos los personajes que no estan mas y HACIA MUCHO QUE NO LLORABA DE ESTA FORMA MALDITA SHONDA RHIMES",
        "id": "930190567241322497"
    },
    {
        "texto": "No me saque una foto ni con deadpools ni con spidermans y sigo llorando por eso",
        "id": "929749436468785153"
    },
    {
        "texto": "Jamas vi tantos chabones con ambo fuera de la facultad todos juntos nanana estaba en mi salsa chicos",
        "id": "929741424190459904"
    },
    {
        "texto": "Que calor que hace hermano me derrito",
        "id": "929002982619975681"
    },
    {
        "texto": "El unicenter tiene 4D MAMAAAAAAAAAAAA",
        "id": "928659170794070017"
    },
    {
        "texto": "Es asombroso como la capacidad del cerebro aumenta a medida que sos mas grande. Ayer mi hermana entro en crisis nerviosa porque tenia que estudiar 30 hojas para una integradora. Yo estoy igual pero con 800 \ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "928614139051769856"
    },
    {
        "texto": "Estaba considerando ir a donar sangre y vi una foto de la canula que usan y me bajo la presion a 4 de solo verla",
        "id": "928303784362696704"
    },
    {
        "texto": "El audio de la cirujana cheta JAJAJAJAJAJAJAJAJAJAJ \"son unos grasaaas, yo no desprecio a la gente michelle te juro que no desprecio a la gente\" JAJAJAJAJAJAJAAJAJAJAJAJAJA",
        "id": "928302865382363136"
    },
    {
        "texto": "Estoy apunto de terminar friends y para solucionar ese vacio clasico voy a re-ver gossip girl y stranger things porque no las superare nunca",
        "id": "927634339864727552"
    },
    {
        "texto": "Estoy viendo videos de los desfiles que hacen en disney y no saben lo que estoy llorando el dia que vaya me desmayo ahi de la emocion",
        "id": "926589719877767168"
    },
    {
        "texto": "Yo no me creo lo histerica y lo mal que me trata mi vieja cuando se enoja por cosas ej DEJAR UN PARAGUAS ABIERTO estamos en una novela o que",
        "id": "926470124927930368"
    },
    {
        "texto": "Siempre q veo q alguien mete la pata en x situacion mi cerebro busca el meme que dice \"OMAI WAMU SHINDEIRU\" y estallo en risa sola, no paro",
        "id": "925545641677344768"
    },
    {
        "texto": "(No solo para tw) PUEDEN DEJAR DE SUBIR SPOILERS DE STRANGER THINGS YA ENTENDIMOS QUE HAY HYPE PERO NO TODOS TERMINAMOS SI ???????????",
        "id": "925165482726084608"
    },
    {
        "texto": "Igual ya la voy a ver el sabado pero no me contengo de la emocion jesus",
        "id": "924669881668308993"
    },
    {
        "texto": "Estoy a un meme mas en ig de thor ragnarok de ir a verla sola al cine me tengo que calmar",
        "id": "924669600888967171"
    },
    {
        "texto": "Ya me canse de pensar que ropa usar para la facultad QUIERO USAR AMBOS JESUS",
        "id": "924033803869392896"
    },
    {
        "texto": "Mi vieja se ecribio la contrase\u00f1a del wifi de casa y no sabe leer su propia letra ahora jajajajajajaja que hago con esta mujer lpm",
        "id": "923639478006288385"
    },
    {
        "texto": "Arroba shonda rhimes ya que trajiste a la hermana de hunt a la vida traete a lexie o derek o mark cualquiera esta bien por mi",
        "id": "921856273766928385"
    },
    {
        "texto": "Bien vestida para salir tods fashion y mochila de gatos hipsters. Muy a la moda",
        "id": "921548747754147840"
    },
    {
        "texto": "Tuve que subir y bajar escaleras corriendo con una mochila de 3 kg para alcanzar el tren. Me falta 1/4 de pulmon",
        "id": "921395452565651456"
    },
    {
        "texto": "Estoy con un ataque de poner musica al mango y cantar a los gritos tengo que calmarme urgente",
        "id": "921155397653860352"
    },
    {
        "texto": "Estoy viendo el documental de ping\u00fcinos mas divertido que haya visto",
        "id": "920668604638654466"
    },
    {
        "texto": "Antes de empezar la carrera flashaba ir a johns hopkins. Ya empece y sigo flashando residencia alla. Espectativas siempre al \ud83d\udd1d",
        "id": "920464393233666048"
    },
    {
        "texto": "El efecto de snapchat de fidget spinner JAJAJAJAJAJAJAJAJAJ",
        "id": "919657763248267264"
    },
    {
        "texto": "Fui a un bar con mi ayudante expectativas del 1er a\u00f1o de la carrera cumplidas",
        "id": "919034617805631489"
    },
    {
        "texto": "Mi amiga se ti\u00f1o el pelo con papel crepe y quedo con media cabeza rosa JAJAJAJAJAJAJAJAJAJAJAJA NO PARO",
        "id": "918662227040899072"
    },
    {
        "texto": "Me desperte preocupadisima y sintiendome mal por un sue\u00f1o que no me acuerdo nada lpm que sentimiento mas horrible",
        "id": "917373240636530690"
    },
    {
        "texto": "Me compre un puntero laser para la facultad y estoy como una nena rompiendole los huevos a todos 20 a\u00f1os de pura madurez",
        "id": "917086021497643008"
    },
    {
        "texto": "Odio ODIO pasar por las historias de ig y pifiarle y contestar una encuesta pueden ponerlas en lugares menos accesibles grax",
        "id": "916702552967864320"
    },
    {
        "texto": "La sociedad de internet llego al nivel de en vez de comentar una pelicula de terror le hacen memes. Los amo mal",
        "id": "916043696977481730"
    },
    {
        "texto": "Hace 5 dias que quiero ver grey anatomy pero el internet choto y los servidores putos no me dejan voy a explotar de ansiedad QUIERO CIRUGIAS",
        "id": "915319670118473728"
    },
    {
        "texto": "La cantidad que tenia ganas de ver este a\u00f1o encima, me endeudaba pero valia la pena, toy llorando casi",
        "id": "914858223169089536"
    },
    {
        "texto": "La puta madre viajar las pelotas  yo me gasto toda la guita posible en recitales no hay cosa mas hermosa y emocionante chabon",
        "id": "914857761749520384"
    },
    {
        "texto": "Todavia sigo sorda de ayer esto no pasaba cuando salia en 2015 are",
        "id": "914537935621562368"
    },
    {
        "texto": "Mi hermana esta shockeada/emocionada con un episodio de flash pero no sabe que barry siempre caga todo viajando en el tiempo. Paaabre",
        "id": "913572072399474688"
    },
    {
        "texto": "La puta madre los memes de la gaviota o son buenisimos o yo estoy boludisima por un ibuprofeno y me rio igual JAJAJAJAJA basta no.",
        "id": "912853376123199489"
    },
    {
        "texto": "A todo esto hoy me compre maquillaje fue un buen martes lluvia quien te quiere",
        "id": "912809421054541824"
    },
    {
        "texto": "Mi vieja y mi tia viajando por primera vez en el tren nuevo son como dos campesinas jajajajajajaj",
        "id": "912728782900998145"
    },
    {
        "texto": "Termine teen wolf y me quedo el vacio tan grande como cuando termino harry potter aprox, lloro",
        "id": "912418090402635777"
    },
    {
        "texto": "Amo la amistad que tengo nivel:  *llamada de wp a las 23hs*\n-ilucha venis a casa?\n+se, miramos pelis?\n-dale trae pochoclos\n*cortamos*",
        "id": "911411927418638337"
    },
    {
        "texto": "Ayer me colgue con la computadora y a la 1am me di cuenta que me perdi eL PROGRAMA DE LOS CANIGGIA GUDBAI",
        "id": "910143974052175873"
    },
    {
        "texto": "Estaba buscando desesperadamente un t\u00e9 vic y cuando lo encontre juro que escuche un coro angelical de fondo",
        "id": "909597705034506241"
    },
    {
        "texto": "Siempre que voy al pelotero me choreo caramelos de naranja. No comida ni nada de eso. Caramelos. De naranja.",
        "id": "909139867770253312"
    },
    {
        "texto": "Creo que lo unico que no voy a superar de bariloche es salir al boliche en zapatillas y volver sin olor a cigarrillo. Nada llega a ese nivel",
        "id": "908317951249534976"
    },
    {
        "texto": "Mi vieja me empieza a hablar, se tilda con el celular y despues me dice 'para' y se queda asi 30'. 52 a\u00f1os tiene",
        "id": "907394867579555843"
    },
    {
        "texto": "A veces me pongo triste xq la pobreza vieron, y la solucion es mirar gossip girl pero despues me pongo mas triste, logica 10/10",
        "id": "907394280498585602"
    },
    {
        "texto": "POR QUE SIEMPRE QUE RINDO Y NO TENGO NADA QUE HACER ME SIENTO COMO UN POTUS INUTIL LPM QUIERO DISFRUTAR EL MOMENTO DE PAZ UN POCO",
        "id": "906591474376114176"
    },
    {
        "texto": "A una amiga le iba a tomar un jefe de catedra y salto nuestro ayudante y le dijo YO LE TOMO nananana un monumento le hago",
        "id": "906266592945819649"
    },
    {
        "texto": "Sumale que me tengo que quedar estudiando juajua buena noche",
        "id": "904177501655760896"
    },
    {
        "texto": "Siempre me siento mal faltando a algun cumplea\u00f1os soy lo mas sensible que hay",
        "id": "904177379861549056"
    },
    {
        "texto": "Paren con los trailers truchos de high school musical me hacen doler el cora porque no va a haber una nueva carajo",
        "id": "900732839343390720"
    },
    {
        "texto": "Como hacen para quedarse libres a mitad de a\u00f1o yo me sentia terrible cuando faltaba dos veces por estar enferma (en todo el a\u00f1o)",
        "id": "900495216687411201"
    },
    {
        "texto": "Update: me dijeron feliz dia todavia hay esperanzas",
        "id": "899287181172277249"
    },
    {
        "texto": "No recibi regalo eso significa que mis viejos ya me consideran adulta me voy al rincon a llorar gudbai",
        "id": "899271450129031169"
    },
    {
        "texto": "Irme a ba\u00f1ar implica estar 20 minutos con la toalla y mirando boludeces en el celular diganme que no soy la unica pls",
        "id": "898951541234814976"
    },
    {
        "texto": "Se acerca el parcial y yo voy cavando el hoyito para enterrarme antes que me agarre un pico de estres por no estudiar con tiempo",
        "id": "898721394564882432"
    },
    {
        "texto": "NO PUEDO VER VIDEOS DE MUSICA PORQUE NO ESTAN DISPONIBLES EN EL PAIS YOUTUBE QUE TE PASO",
        "id": "898244072590254081"
    },
    {
        "texto": "El dia que no haya quilombos para comprar por internet me pido la tienda entera de blu boutique todo GRATIS estan dando NANANA",
        "id": "898194827858378752"
    },
    {
        "texto": "Estoy viendo un programa de chimpances y es lo mas interesante que me paso en lo que va de la semana (y probablemente siga asi)",
        "id": "897474958040985606"
    },
    {
        "texto": "Podria haber pedido zapatillas ropa plata lo que sea pero pedi una cafetera express. Y ME LA DIERON.",
        "id": "896797560878313472"
    },
    {
        "texto": "La mujer de la mesa me dijo feliz cumple ya esta bff",
        "id": "896775836673683456"
    },
    {
        "texto": "Estoy tan dormida que nose ni lo que escribo vamos bien",
        "id": "896775498277289984"
    },
    {
        "texto": "Llego a votar y esta entrando la ultima piba de la fila entrando que calidad que buena organizacion",
        "id": "896774577539481604"
    },
    {
        "texto": "Yo que considere ir al lolla en 2018 yata me voy a maiame con esa guita",
        "id": "895268388150312962"
    },
    {
        "texto": "Quien me manda a estudiar medicina que cada dolor minimo flasho diagnositcos terminales calmate un poco ileana",
        "id": "894565605365383173"
    },
    {
        "texto": "Soy greenpeace saque un pajarito que habia adentro del pelotero y cuando lo queria soltar no se iba amor puro fue",
        "id": "893938677038141440"
    },
    {
        "texto": "Que maldad profunda es que te den mg a un tweet y no dejen que veas quien es",
        "id": "893619656455598080"
    },
    {
        "texto": "Quiero llorar pero al mismo tiempo estoy feliz, ay facultad querida que estres me das (lareputaqueterepario)",
        "id": "893580245697253377"
    },
    {
        "texto": "Me di cuenta que no soy la favorita cuando mi vieja se quejo que queria gastar 1000 en una entrada y ahora GASTO 3000 CON MI HERMANA CHAU",
        "id": "893224181357314049"
    },
    {
        "texto": "Altos hackers esas cuentas de te digo quien sos tu vida y esos man que miedo",
        "id": "892462387298791424"
    },
    {
        "texto": "Que mal arranque el dia, no me pude dormir por sentir miedo a quien sabe que y encima mi vieja gritando bueeeen lunes para todos",
        "id": "892049688572178434"
    },
    {
        "texto": "La puta madre lo que esta pasando en Venezuela me hace querer llorar, siglo xxi y todavia siguen con esas formas de pensar \ud83d\ude22\ud83d\ude20",
        "id": "891733657987297282"
    },
    {
        "texto": "Esas nenas de 8 que se maquillan perfecto WTF PINTATE EL OJO HASTA LA CEJA CON AZUL Y VERDE Y PONETE LABIAL ROJO QUE ES ESTO DE SALTAR FASES",
        "id": "891119495129042945"
    },
    {
        "texto": "Cantando feliz cumplea\u00f1os en aleman nos amo fuerte familia",
        "id": "890781906425565184"
    },
    {
        "texto": "Me encanta que mi viejo siga flashando que me voy a ir a vivir a europa JAJAJAJA a los 30 recien salgo de la facu espera sentado vieji",
        "id": "890593912523542529"
    },
    {
        "texto": "Para el 15 de mi hermana el a\u00f1o que viene quiero un vestido que sale mas caro que el suyo siempre apuntando a lo top la piba",
        "id": "890404399729827841"
    },
    {
        "texto": "QUIERO UN PERRO PARA DARLE MIMOS TODO EL TIEMPO Y SACARLE MIL FOTOS Y MALCRIARLO MUCHO ES TANTO PEDIR MAMA",
        "id": "890403449787035649"
    },
    {
        "texto": "Mi vieja compro granos de cafe ba\u00f1ados en chocolate nunca presencie tal regalo de dios en mis manos les juro",
        "id": "889251709201022977"
    },
    {
        "texto": "LA PUTA MADRE ESTOY HACIENDO MARATON DE LOS JONAS BROTHERS JAJAJAJAJAJAJAJAJA NO LOS SUPERO MAS",
        "id": "888970014526758912"
    },
    {
        "texto": "Lo mas frustrante fue que NO PUDE IR A VERLOS CUANDO VINIERON CARAJO NO LO SUPERO NUNCA MAS",
        "id": "888968199517208576"
    },
    {
        "texto": "Real mis amigas de la facu me ven como la que se recibe mas rapido y yo estoy tipo JAJAJAJAJA SIGUE SO\u00d1ANDO BRO",
        "id": "888054471586193408"
    },
    {
        "texto": "Mi vieja \"te traje arandanos ileeee\" *1.3 segundos y estaba en la cocina* ERAN PASAS \ud83d\ude20\ud83d\ude20\ud83d\ude20",
        "id": "888050847975964672"
    },
    {
        "texto": "Necesito vivir en una casa con los pisos calefaccionados para andar en medias y no cagarme de frio lareputaquelospario",
        "id": "887002904271433730"
    },
    {
        "texto": "Primeras vacaciones que no puedo estar sin hacer nada que le paso al mundo ah cierto fui yo que elegi la carrera JAJA",
        "id": "886973753099505664"
    },
    {
        "texto": "Con el cine cada vez mas caro digo \"ya esta veo dos pelis por a\u00f1o y quiebro\"  y termino yendo a ver como 20 no cambio mas",
        "id": "886653318814203904"
    },
    {
        "texto": "Acabo de ver wonder woman y COMO NO LA FUI A VER EN 3D LPM TERRIBLE PELICULA",
        "id": "886387454797905921"
    },
    {
        "texto": "Llegamos a la epoca del a\u00f1o que vamos a anato a ver si casamos una con el cadaver, y chusmear de bardos con el ayudante, obvio.",
        "id": "885976977840234496"
    },
    {
        "texto": "Termine el colegio hace dos a\u00f1os pero casi lloro porque SE VA EUSA CHICOS NO \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",
        "id": "885848914531897344"
    },
    {
        "texto": "En un mes cumplo 20 nose si festejar o llorar",
        "id": "885494192910331906"
    },
    {
        "texto": "Le digo a todos que mis vacaciones terminan el 1 de julio (en realidad agosto) no las tengo registradas jaJA",
        "id": "885278749108948994"
    },
    {
        "texto": "Vuelven los personajes de las primeras temporadas mi felicidad esta nivel 9000",
        "id": "884537488936763397"
    },
    {
        "texto": "\"Hoy no es jueves hoy es previernes\" *se sirve un vaso de whisky* mi viejo el se\u00f1or de la joda",
        "id": "883140933704929281"
    },
    {
        "texto": "Me saque un 1 en un parcial y les juro que soy re feliz nose que paso aca",
        "id": "882363934782705668"
    },
    {
        "texto": "No puedo vivir en palermo asi salgo del subte y llegue a mi casa???? Por que tan pobre xq xq",
        "id": "882351469843894272"
    },
    {
        "texto": "Ma\u00f1ana se me va Prison Break y estoy por la 4x12 fue lo mejor del amooor lo que he vivido contigoooo",
        "id": "880914698782351361"
    },
    {
        "texto": "Un jean que no use por un a\u00f1o porque me apretaba ahora me entra se me alegro julio y ni empezo",
        "id": "880776684005470208"
    },
    {
        "texto": "Yo tambien me quiero tirar en una pileta de rocklets como en la propaganda arcor toma nota",
        "id": "880596482415525888"
    },
    {
        "texto": "Necesito irme a Africa una semana para jugar con elefantes nom\u00e1s",
        "id": "880257735660638208"
    },
    {
        "texto": "Que episodio maa wtf pll ayer pero dios que bien actua troian la aplaudo de pie que buen final",
        "id": "880050294599675905"
    },
    {
        "texto": "Me colgue 2hs mirando videos de excision de lipomas, en estas cosas gasto mi tiempo libre y lo gracioso es que me encanta, si muy normal",
        "id": "879858773514485761"
    },
    {
        "texto": "Recien el otro dia vi Moonlight y Hacksaw Ridge y ME EXPLICAN POR QUE EL OSCAR A MEJOR PELICULA LO GANO MOONLIGHT LPM NO",
        "id": "879156277322153987"
    },
    {
        "texto": "Hay 2x1 en automac por un cuarto de libra y mi vieja 'vamos a comer pollo al verdeo' ah no",
        "id": "878409506262327297"
    },
    {
        "texto": "Todo el dia normal hasta que llega esta hora exacta y vuelvo al martes, no doy mas",
        "id": "878013555173359616"
    },
    {
        "texto": "Not\u00e9 que madure abruptamente cuando no consegui entradas y no me mori de la depresion, ah pero si llego a tener exploto en llanto olvidate",
        "id": "876803905082064896"
    },
    {
        "texto": "La puta que los pario a la pagina que colpaso las entradas y la capacidad para 20 gatos locos del estadio graxxtantotkm",
        "id": "876801679269789697"
    },
    {
        "texto": "La re puta con las entradas de harry que son caras jesus",
        "id": "876613562982072320"
    },
    {
        "texto": "Dormi 11 horas por primera vez en tres semanas y nunca fui mas feliz",
        "id": "876123646569402368"
    },
    {
        "texto": "Tengo las ojeras por la nariz aprox necesito dormir 17 horas seguidas pls",
        "id": "875163236349472768"
    },
    {
        "texto": "'Atencion, metrovias informa que la linea D akhdehdjoansojahdajeb' gracias por la info",
        "id": "874737307118600194"
    },
    {
        "texto": "Quiero saber mi nota urgentementemente abranme la puerta del aula ya pls",
        "id": "874668916009832448"
    },
    {
        "texto": "El aire acondicionado del tren que me congela las piernas lpm es invierno practicamente hermano APAGALO",
        "id": "874656306086510593"
    },
    {
        "texto": "Mi vieja 'si perdes algo volte\u00e1 un vaso y cuando aparezca lo volves a girar'. Lo voy a hacer con mis ganas de estudiar y una docena de vasos",
        "id": "874279844275777536"
    },
    {
        "texto": "Chicos no paro es volver al 2013 cuando anunciaron el primer tour aca y me agarra la nostalgia y lloro mas, que feliz que me puso \ud83d\ude02\ud83d\ude2d\ud83d\ude2d",
        "id": "872816528256839680"
    },
    {
        "texto": "AH NONO LA FELICIDAD QUE ME AGARRO AL PUNTO DE LLORAR ESTOY GRITANDO",
        "id": "872815006525599744"
    },
    {
        "texto": "Estuve 20 minutos sin hacer nada de la facultad y no sabia que hacer a cambio a que punto me hicieron llegar \ud83d\ude2d",
        "id": "871875895845322754"
    },
    {
        "texto": "Como tengo frio me duele todo y me pongo a llorar, SPM i feel u",
        "id": "870798629673598976"
    },
    {
        "texto": "Odio tener que volver en bondi porque tardo 40 minutos mas y lo unico que quiero los viernes es estar en casa en la cama \ud83d\ude22\ud83d\ude22\ud83d\ude22",
        "id": "870754455460904960"
    },
    {
        "texto": "Agregamos al ayudante de anato al grupo de whatsapp ya esta la proxima organizamos previa este nivel de confianza no te lo robo",
        "id": "870748998973489153"
    },
    {
        "texto": "Esta sign of the times en la radio pero estoy en un consultorio y no da pararme en la silla a cantar a los gritos quemal",
        "id": "870314233740898304"
    },
    {
        "texto": "Voy a comprar aritos y salgo con las ganas de haber comprado 3 anillos una cadenita y 2 pulseras siempre lo mismo los brillos me cegan are",
        "id": "869698371459665921"
    },
    {
        "texto": "Y ahora hasta fin de a\u00f1o no vuelve Y NOSE QUE PASO CON TODOS LPMLPMLPM PANICO",
        "id": "869347330943852544"
    },
    {
        "texto": "Acabo de ver el final de arrow y POR DIOS QUE MANERA DE LLORAR ME QUIEREN DAR UN INFARTO O QUE",
        "id": "869347142070145025"
    },
    {
        "texto": "La puta estoy entrando en presion preparcial y me quiero poner a llorar como mejor solucion pero el maquillaje y AHUWJD",
        "id": "869209224831807488"
    },
    {
        "texto": "Microinfarto cuando el tren paro en la estacion anterior a la mia y yo pense que tenia que bajar pero no baje",
        "id": "868131735007092737"
    },
    {
        "texto": "Mis neuronas fallan en hacer sinapsis y necesito estudiar shitshit",
        "id": "867918024803835904"
    },
    {
        "texto": "Miro shows de casas y estoy como 'ese piso pusieron?' 'Tremenda mansion y te parece chica??' 'COMO VAS A ROMPER EL MARMOL????' Me indignan\ud83d\ude02",
        "id": "867915000408678400"
    },
    {
        "texto": "En serio como hizo emma watson para no reirse con Dan vestido en esa cosa gris yo no paro un segundo \ud83d\ude02\ud83d\ude02",
        "id": "867444560833769472"
    },
    {
        "texto": "\"Pasame tu documento que no me lo acuerdo\" \"vos naciste en el 97 o 98?\" Es mi vieja o que?",
        "id": "866437719790153728"
    },
    {
        "texto": "Los jueves y viernes a la noche estoy re pila nose que onda pero es bueno porque duro mas estudiando y no bueno porque me duermo a las 3am",
        "id": "865368538789404673"
    },
    {
        "texto": "Me cambiaron arrow a los jueves por lo tanto la puedo ver los viernes recien lloro fuerte",
        "id": "865186580738301952"
    },
    {
        "texto": "Quien tenia mas ganas de romper los huevos el autor que pone cosas relacionadas en tomos diferentes o los que hacen el programa de estudio??",
        "id": "864989827556667393"
    },
    {
        "texto": "Mi hermana tiene 14 y se re produce para ir al colegio yo ni en sexto me ponia algo un poco de base y gracias \ud83d\ude02",
        "id": "864859150311882753"
    },
    {
        "texto": "La gente abajo esperando recibir diploma y yo contemplando desde la escalera viendo que esa voy a ser yo en el 2045 \ud83d\udc4d\ud83d\ude02",
        "id": "864557583612473344"
    },
    {
        "texto": "Alguien le pone mg a muchos de mis tuits Y NO ME DEJA VER QUIEN ES xq haces esto desconocido xq",
        "id": "864146532307742720"
    },
    {
        "texto": "Mi guardapolvo vuelve cada vez con mas olor a formol en cualquier momento hasta el pelo me va a llegar",
        "id": "863480381189877760"
    },
    {
        "texto": "Invitable que en spotify empieza november rain y el volumen al mango",
        "id": "863227933254668292"
    },
    {
        "texto": "Me desperte MEDIA HORA MAS TARDE y me siento culpable ah no yo me la doy contra una pared bai",
        "id": "862649212634361856"
    },
    {
        "texto": "Que sentimiento mas lindo que busques una base de maquillaje y te quede perfecta. Voy a llor\u00e1",
        "id": "862048472391970816"
    },
    {
        "texto": "Hace 12 grados nunca ne levante tan feliz",
        "id": "861909174892072968"
    },
    {
        "texto": "Hay una beba en el pelotero y creo que la super ojee de mirarla pero es que es demasiado linda quiero una hija asi",
        "id": "860983389297442817"
    },
    {
        "texto": "La publicidad de youtube de luis vuitton es un 10/10 por la musica pero esa cartera JAJAJAJAJAJA yisus",
        "id": "859532588712677376"
    },
    {
        "texto": "Cual es la tematica de la met gala este a\u00f1o porque mama que feos vestidos que hay por favor",
        "id": "859212847649366016"
    },
    {
        "texto": "Real que estoy indignada porque me cansa ir al unicenter para el cine pero es el mas barato uni t amo no me defraudes nunk",
        "id": "858827631009173507"
    },
    {
        "texto": "El precio de las entradas de hoyts cambia dependiendo del shopping AH NAAAAAA",
        "id": "858826581103583233"
    },
    {
        "texto": "Literal que en una esquina de mi cocina vi 12 mosquitos DOCE. Me bajo el raid en 10 minutos asi no se puede",
        "id": "858798201276698626"
    },
    {
        "texto": "Los viernes vuelvo a casa con el cerebro quemado y queriendo dormir 20 horas",
        "id": "858078171668860928"
    },
    {
        "texto": "Ya paso septimo dia con el cirque du soleil paren de pasar la propaganda por favorrrrrr",
        "id": "857286505869561856"
    },
    {
        "texto": "Como me mori de frio hoy mama la proxima sale gorro y bufanda",
        "id": "857009078073253890"
    },
    {
        "texto": "Que cosa mas rara que esta mi mama cerca y se me van todos los pensamientos que me molestan o me desconcentran de algo, increible",
        "id": "856614430125281281"
    },
    {
        "texto": "Siempre que estoy mal o de mal humor me miro videos de marley y se me pasa les juro",
        "id": "856196661630164992"
    },
    {
        "texto": "Mi vecina pasa de escuchar madonna a calvin harris, despues soda stereo a ed sheeran, pero decidite mujer",
        "id": "856166778715746304"
    },
    {
        "texto": "A falta de arrow esta semana me veo las tortugas ninja porque stephen amell vieron",
        "id": "855958853535584258"
    },
    {
        "texto": "Necesito llegar a mi casa tirarme en la cama y clavarme medio litro de cafe con leche",
        "id": "855536650289655808"
    },
    {
        "texto": "Con las chicas de la facu stalkeamos a nuestro ayudante e hicimos un grupo de whatsapp con la foto de \u00e9l ya nos amo",
        "id": "855529408093982720"
    },
    {
        "texto": "Mi mama hizo hamburguesas y le puso queso solo a la suya #traicion #indignada",
        "id": "855077805901705216"
    },
    {
        "texto": "Estan dando Unfriended en hbo que bien tengo que estudiar que mal",
        "id": "854863657301409792"
    },
    {
        "texto": "Hoy veo pll mi miercoles subio 100000 puntos",
        "id": "854797973351432195"
    },
    {
        "texto": "Jajajajajajaja los tuits de prison break me matan necesito llegar a la 5ta ya \ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "854540785034854401"
    },
    {
        "texto": "Me duele un ojo zarpado de usar el microscopio porque tanta suerte se\u00f1or xq xq",
        "id": "854406564123463681"
    },
    {
        "texto": "Necesito ir a coachella pls se\u00f1or dejame ir",
        "id": "853677386650484736"
    },
    {
        "texto": "Me siento estafada cuando a los don satur de azucar negra vienen sin azucar tipo quien es el responsable exijo dos paquetes en compensacion",
        "id": "853618327478054913"
    },
    {
        "texto": "Estoy hace un mes dudando si hacerme un piercing o no, dios mio que indecisa soy imaginense como me va a ir en la vida \ud83d\ude02",
        "id": "852959012001898496"
    },
    {
        "texto": "Estoy abrigada como un esquimal con la estufa y yo al lado (no exagero). Lo mal que la voy a pasar en invierno mama mejor me exilio a egipto",
        "id": "852192000837390336"
    },
    {
        "texto": "Estoy triste porque ya no hace frio como ayer y yo queria ponerme sueter y bufanda mundo injusto",
        "id": "851781693023408128"
    },
    {
        "texto": "No podes querer subirte al tren que ya viene hasta las bolas con cochesito y una  tele 42 pulgadas flaco, nooooo",
        "id": "850466106720612353"
    },
    {
        "texto": "Tantos tuits de 13 reasons why me van a hacer caer en el agujero negro de netflix y NO TENGO TIEMPO CHICOS QUE HAGO LLORO",
        "id": "850108390898577409"
    },
    {
        "texto": "Que mal que me me hace la falta de cafe a la ma\u00f1ana son las 14 y ya muero de sue\u00f1o xq se\u00f1or xq",
        "id": "850030560768667649"
    },
    {
        "texto": "El libro de anatomia que tengo que estudiar para junio tiene 700 pags. Me quedan 3 tomos mas iguales para el resto del a\u00f1o. \ud83d\ude05\ud83d\ude05\ud83d\ude02\ud83d\ude2d\ud83d\ude2d\ud83d\udd2b",
        "id": "849417846610423808"
    },
    { "texto": "Martes termina porfavar", "id": "849396648216285184" },
    {
        "texto": "Paro, clase publica,7 horas esperando un subte que me pudiera subir QUIEROLLEGARAMICASALAREPUTAJSIWQJ",
        "id": "849396245915422725"
    },
    {
        "texto": "Casi 4 horas resumiendo tejidos conjuntivos modelados y no modelados y macrofagos y elastina y fibroblastos y BASTAPOFAVO",
        "id": "848267794106003456"
    },
    {
        "texto": "Que estres me esta metiendo prison break por que siempre me engacho con este tipo de series se\u00f1or",
        "id": "847223796926791680"
    },
    {
        "texto": "Odio el transporte publico, salgo a las 12 llego en 45 minutos, salgo 12.15 llego 1 hora y media despues la pucha",
        "id": "846763108416831488"
    },
    {
        "texto": "Me olvide mis anteojos lo que equivale a faltar me voy o no me voy gran pregunta",
        "id": "846761922968080388"
    },
    { "texto": "Dan Stevens te amo tanto chabon", "id": "845404675859984385" },
    {
        "texto": "10 puntos la bella y la bestia \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f",
        "id": "845403932751024128"
    },
    {
        "texto": "Hay un nene gritando en burger king y estoy a nada de darle con una bandeja en  la frente",
        "id": "845339006883827712"
    },
    {
        "texto": "Zac efron en la propaganda de hugo boss \ud83d\udc4c\ud83d\udc4c\ud83d\udc4c\ud83d\udc4c",
        "id": "844953458079862784"
    },
    {
        "texto": "Me vivo quemando chicos no puedo ser mas boluda \ud83d\ude2d",
        "id": "844932419111325696"
    },
    {
        "texto": "Mi vieja esta haciendo sushi y no les puedo explicar la baranda asquerosa a algas que hay me quiero ir de mi casa ashuda",
        "id": "844695433121292288"
    },
    {
        "texto": "Primer clase y hay paro vamo medicina ((((((no))))))",
        "id": "844252076108648448"
    },
    {
        "texto": "Chicos chris hemsworth tiene pelo corto en thor ragnarok BAI",
        "id": "843825177305796608"
    },
    {
        "texto": "Mi viejo tiene 53 a\u00f1os y se va a trabajar usando escuchen pantalon verde loro (cuando no usa rojo y zapatos rosas) lo amo fuerte",
        "id": "843807375274446848"
    },
    {
        "texto": "Malisima idea usar campera blanca para hacer cualquier cosa que implique manos. Grises estan las mangas lloro",
        "id": "843557939680083968"
    },
    {
        "texto": "Me toco cursar a la tarde me pego un tiro o me pego un tiro",
        "id": "842460554073645058"
    },
    {
        "texto": "Me fui a sacar sangre y me agarro un microinfarto cuando la unica pared a la que podia mirar para calmarme era espejada. ESPEJADA.",
        "id": "842390840437792768"
    },
    {
        "texto": "Una semana y hbo y fox siguen transmitiendo gratis el dia que se termine me va a quedar un vacio en el cora",
        "id": "842001549878562817"
    },
    {
        "texto": "Tengo mucho sue\u00f1o pero un re buen humor porque hbo y fox+ estan gratis en la tele vamo vierne",
        "id": "840400736483708928"
    },
    {
        "texto": "Hoy vi un cadaver por 1era vez y le conte a mis viejos como una nena que le dieron muchos caramelos nose si reirme o asustarme de mi actitud",
        "id": "840400156080144384"
    },
    {
        "texto": "KE QUE FUE ESE FINAL NO ME LA DEJEN AHI NO ENTIENDO NADA",
        "id": "840017855575912448"
    },
    {
        "texto": "Por dios que genial que se esta poniendo legion que buENA SERIE",
        "id": "840014000423333888"
    },
    {
        "texto": "Me estoy derritiendo ayudenme tramitame un aire portatil porfa",
        "id": "839932575124697089"
    },
    {
        "texto": "Mi hermana quedandose sin se\u00f1al en los momentos mas oportunos que persona eficiente",
        "id": "839572180723716096"
    },
    {
        "texto": "El 22 ya me deberia haber dado dos vacunas. Como ya no voy con mi mama a darmelas aca estoy en casa (sin darme ninguna). No cambio mas",
        "id": "839464454156914688"
    },
    {
        "texto": "En serio que no puedo esperar a estar en 4\u00b0 5\u00b0 de la facultad y empezar a ir a hospitales y usar un ambo y tener mi estetoscopio les juro \ud83d\ude0d\ud83d\ude0d",
        "id": "837735556935221252"
    },
    {
        "texto": "Que onda que hace frio tamos todos locos o que",
        "id": "837681423070932992"
    },
    {
        "texto": "Detesto levantarme y que no haya comida (si no compro yo nadie compra que familia pajera) lloro",
        "id": "837678828549963776"
    },
    {
        "texto": "Yo boludeo que cuando viaje me interno en un sephora pero literal que hasta no quedar en bolas de plata no salgo me doy risa y miedo",
        "id": "836675463183482880"
    },
    {
        "texto": "Esto es como miss universo que incomodo jajajajajajajajaja",
        "id": "836082013597798400"
    },
    { "texto": "Vamos emmaaaaaa", "id": "836077928249241600" },
    {
        "texto": "Que se puso dakota la gran pregunta de la noche",
        "id": "836051676737982467"
    },
    {
        "texto": "No chicos chris evans me tiene \ud83d\ude0d\ud83d\ude0d",
        "id": "836039981596610561"
    },
    {
        "texto": "Sigo en shock con el oscar al escuadron suicida wtf jajajajajajajaja",
        "id": "836033948908146688"
    },
    {
        "texto": "Tengo una ampolla gigante en el dedo por hacer panqueques yo no te la puedo creer",
        "id": "835961924328251392"
    },
    {
        "texto": "Batman en la tele que peliculon space te amo",
        "id": "835617412015849472"
    },
    {
        "texto": "Con este calor me quieren hacer salir por que la crueldad",
        "id": "835602434345091073"
    },
    {
        "texto": "Como me cebe con legion no entiendo un choto todavia pero quiero verla ya de nuevo jueves apurando dale",
        "id": "835141471804272643"
    },
    {
        "texto": "Estoy viendo un programa de chocolate en gourmet mientras almuerzo ensalada nose como sentirme al respecto",
        "id": "834804731042287616"
    },
    {
        "texto": "Ya termine de ver greys anatomy en netflix y tengo que empezar a verla en internet tengo un gran vacio en el cora",
        "id": "834572392836001794"
    },
    {
        "texto": "Me acabo de bajar 7 dias premiun de spotify en que agujero negro me he metido mama saquenme rapido",
        "id": "833342491541770240"
    },
    {
        "texto": "Quiero el pelo rojo oscuro es una necesidad fuerte",
        "id": "832961037141958656"
    },
    {
        "texto": "Que le pasa al actor de magneto que esta haciendo tantas peliculas juntas bajale un cambio man",
        "id": "832714074433560576"
    },
    {
        "texto": "Quiero ver piratas del caribe 5 yyyyyyayayayaya",
        "id": "832650339450970112"
    },
    {
        "texto": "Iba feiz en el bondi a llevar unos papeles hasta que crei que me habia olvidado la libreta me dio un microinfarto ahi mismo",
        "id": "832218315800080384"
    },
    {
        "texto": "Que placer que me da volver a mi casa a mi cama mi cuarto mis sillas mi cafetera no salgo en una semana",
        "id": "832016047456804864"
    },
    {
        "texto": "Yo iba bien hasta que vi esa historia en instagram nonono me cai de la silla les juro",
        "id": "831683633446584322"
    },
    {
        "texto": "Adele rompio el grammy que gano para darle la mitad a beyonce ah no pero que mujer del bien",
        "id": "831248578832117761"
    },
    {
        "texto": "Que cosa que no me canso nunca de ver arrow que buena serie porfavar",
        "id": "831170981821554688"
    },
    {
        "texto": "Como odio pero odio con todo mi ser la cancion de lucas graham",
        "id": "830957670295339008"
    },
    {
        "texto": "Grey's anatomy va por el camino de la ley y el orden ya me veo que termina con mas de 20 temporadas \ud83d\ude02",
        "id": "830180949224726530"
    },
    {
        "texto": "JAJAJAJAJA como no estan enumerados los asientos me perdi y tuve que llamarla a julieta JAJAJAJAJAJAJAJAJAJAJA NO PARO",
        "id": "829882204406820865"
    },
    {
        "texto": "Ademas de que la entrada no es de hoyts y no la puedo guardar con el resto de la coleccion porque no combina voy a llor\u00e1 mama",
        "id": "829879210621673472"
    },
    {
        "texto": "Estoy en un cine que es igual al salon de actos del colegio papi dani sali ya fue la joda",
        "id": "829878944849608704"
    },
    {
        "texto": "Los cuatro comiendo ensalada que saludables que somos por favar",
        "id": "828422759579521029"
    },
    {
        "texto": "Nos metimos al casino a cenar mas adultas no podemos ser \ud83d\udc81",
        "id": "828051659460853760"
    },
    {
        "texto": "Que paz me da estar en la playa\ud83d\ude0d",
        "id": "827621204970336256"
    },
    {
        "texto": "La cuenta de teen wolf me esta spoileando todo que hago en twitter a esta hora soy boluda o boluda",
        "id": "826613215589187586"
    },
    {
        "texto": "En otras cosas, dormi 4 horas y estoy mas despierta que con 11 estos son los efectos secundarios de los ibuprofenos de ayer yo lo se",
        "id": "825692955402973184"
    },
    {
        "texto": "Todos shockeados por las cosas que esta haciendo trump. El lo dijo gente, y aun asi lo votaron, que le van a hacer",
        "id": "825692455148351489"
    },
    {
        "texto": "Del dolor de ovarios me tome un ibuprofeno 600 y un 400 en el lapso de 40 minutos. No estoy drogada de pedo \ud83d\ude02",
        "id": "825482572469764096"
    },
    {
        "texto": "LOS RECUERDOS DE LYDIA AY MAMA LO QUE VA A SER EL EPISODIO QUE VIENE",
        "id": "824328995122593792"
    },
    { "texto": "Todomoda tiene tienda online WHAT", "id": "824063818745737216" },
    {
        "texto": "14 nominaciones al oscar para la la land tendria que ir viendola no",
        "id": "823908106786590720"
    },
    { "texto": "El calor que tengo porfavorrrrr", "id": "823206529390280704" },
    {
        "texto": "Diez dias y me voy a la playa con los amigos \ud83d\ude4c\ud83d\ude06\ud83d\ude06",
        "id": "822831608004808705"
    },
    {
        "texto": "Que humor del culo me agarra de repente sin razon logica, me detesto",
        "id": "822609083794653184"
    },
    {
        "texto": "Ma\u00f1ana dia 5 de la dieta y me tocan proteinas lo que significa carnes lo que significa MLANESAS AL FIN \ud83d\ude0d\ud83d\ude2d",
        "id": "822233106056966144"
    },
    {
        "texto": "Michislav con razon 6 a\u00f1os sin mencionarlo nombre mas deforme eligieron \ud83d\ude02",
        "id": "821797594255020033"
    },
    {
        "texto": "La parte del examen que le erraba a un monton tuve 100% JAJAJAJAJAJA NO PARO",
        "id": "821098753474101248"
    },
    {
        "texto": "APROBE EL CAE DE INGLES MI FELICIDAD EN LA NUBE ESTA",
        "id": "821070336464744451"
    },
    {
        "texto": "Mira que yo le doy me gusta a boludeces en instagram pero mi hermana se pasa mal",
        "id": "820446668936151040"
    },
    {
        "texto": "No me puedo ni poner un pantalon sin que se me rompa una u\u00f1a voy a llorar \ud83d\ude23",
        "id": "820302177218359296"
    },
    { "texto": "Que viernes mas paja por favorrr", "id": "819955649408802816" },
    {
        "texto": "La musica fuerte del gimnasio me va a dejar sorda bajenle man",
        "id": "819184605941141505"
    },
    {
        "texto": "En el cuarto todo el dia con el aire, quien te conoce calor \ud83d\udc81",
        "id": "817839664199561216"
    },
    {
        "texto": "Los mosquitos en esta casa se multiplican como los videos del chuchillo caliente a 1000 grados PAREN PLS",
        "id": "817194810406825985"
    },
    {
        "texto": "El trailer de arrow re spoileo a laurel nanana me mue  \ud83d\ude02",
        "id": "816324470336081925"
    },
    {
        "texto": "Queda un mes para irme de vacaciones con mis amigos y no podria estar mas feliz",
        "id": "816306753281331202"
    },
    { "texto": "Dale dos mil diecisieteeeeee", "id": "815393756945989632" },
    {
        "texto": "Veo gente en ambos y ya quiero ponerme uno ni empezo primer a\u00f1o de facultad la flaca emocion",
        "id": "814523645846552576"
    },
    {
        "texto": "Voy al gimnasio con short y soy la mina mas feliz",
        "id": "814132859443224576"
    },
    {
        "texto": "Mi hermana compro una bolsa de mogul y las dejo en mi cama el demonio se hace querer de vez en cuando \ud83d\ude0d\ud83d\udc95",
        "id": "813932684217085952"
    },
    {
        "texto": "Me causa que todos pensamos 'que bueno termina este a\u00f1o de mierda que el que viene sea mejor' y a fin de ese a\u00f1o repetimos la frase \ud83d\ude02",
        "id": "813473321945853952"
    },
    {
        "texto": "Me levanto para enterarme que ayer fue el ultimo dia de grabacion de dylan voy a llora \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",
        "id": "812671886282948608"
    },
    {
        "texto": "Tengo mi regalo de navidad desde la semana pasada y me duele resistir usarlo",
        "id": "812299917494517760"
    },
    {
        "texto": "Me estoy stalkeando en facebook y mama que hacia poniendo esas fotos a la luz",
        "id": "811683659090632704"
    },
    {
        "texto": "Una se\u00f1ora se sento al lado de un desconocido en el bondi y hace 20 minutos que no paran de hablar. BFFs",
        "id": "811229558674489345"
    },
    {
        "texto": "Ah no lo que es el perfume sauvage de dior me drogo aca",
        "id": "810624420960202753"
    },
    {
        "texto": "Falabella en tiempos de descuentos es mi amor incondicional",
        "id": "810563515740200960"
    },
    {
        "texto": "Yo ahora hago licuados y los tomo en mi frasquito hipster de mermelada perdon pero no puedo evitarlo",
        "id": "810193719832018945"
    },
    {
        "texto": "Como se te puede ir la vida en un minuto asi de la nada? Es inentendible",
        "id": "809838318670188544"
    },
    {
        "texto": "Ya mire tres veces la escena y sigo llorando JAJAJAJAJAA CHICOS NO PUEDO PARAR LA FELICIDAD QUR TENGO",
        "id": "809233697073483777"
    },
    {
        "texto": "Se acordaron de el SE ACORDARONDE STILES ESTOY LLORABDO NO PARO",
        "id": "809232705170919424"
    },
    {
        "texto": "Mi emocion aumenta por 20000 todos los martes de por si imaginate ahora que vuelve dylan obrien a teen wolf no duermo bai",
        "id": "808839346719748096"
    },
    {
        "texto": "4 horas para firmar una libreta chota me quiero ir a mi casa a a a a. A",
        "id": "808693950664077312"
    },
    {
        "texto": "Me cortaron la luz y sigo intentando hacer cosas que requieren electricidad no la supero",
        "id": "808337858788524032"
    },
    {
        "texto": "Ma\u00f1ana rindo ingles y aca estoy, coniendo empanadas, que tul",
        "id": "807412311464050690"
    },
    {
        "texto": "Me siento isaura limpiando la casa pero yo la paso re bomba. Sumale que puedo cagar a pedos a todos si ensucian algo, es genial eu",
        "id": "806947035031175170"
    },
    {
        "texto": "Pero yafu sale maraton de peliculas yo la paso bomba",
        "id": "806354025717366784"
    },
    {
        "texto": "Mi ebriedad no me permite reaccionar a la situacion actual pero internamente lloro en un rincon",
        "id": "806353901092012032"
    },
    {
        "texto": "Como amo capital, y a esta hora? \ud83d\ude0d\ud83d\ude0d",
        "id": "805922340873834497"
    },
    {
        "texto": "Odio cuando mi vieja me pone en la estresante situacion de elegir hacer algo con una amiga o ella. Y encima se ofende. Nanana",
        "id": "805602940752982017"
    },
    {
        "texto": "Leyendo harry potter y el legado maldito y quiero darle muchos golpes al hijo de harry PERO QUE BUEN LIBRO HERMANO",
        "id": "805584540391579648"
    },
    {
        "texto": "Para que tengo una hermana y una mama que cuando les mando wpp no lo ven dios santito",
        "id": "804848953707687936"
    },
    {
        "texto": "Todavia no termine ni el cbc y ya quiero empezar la facultad que me pasa",
        "id": "803975904653352961"
    },
    {
        "texto": "Estoy haciendo la cena mientras como frutillas. La coherencia no me va",
        "id": "803763323909132289"
    },
    {
        "texto": "Tengo que empezar a estudiar para el 13 y mis ganas son de - 10000",
        "id": "803603891023704064"
    },
    {
        "texto": "Igual aunque haya sido un gran KE toda la pelicula es MUY buena, marvel te quiero",
        "id": "802625632333139968"
    },
    {
        "texto": "Ver Dr Strange fue equivalente a drogarme chicos wtf",
        "id": "802625214412509184"
    },
    {
        "texto": "Es increible lo bien que me hace sentir ponerme maquillaje y a la noche sacarmelo, amoamo",
        "id": "802311679824556032"
    },
    {
        "texto": "La semana que viene hacen 4 episodios en un crossover de dc QUE ME MUERO BOLO",
        "id": "801965819232141312"
    },
    {
        "texto": "Muero de calor y es noviembre asi en enero no salgo ni a la vereda yo",
        "id": "801936460819693568"
    },
    {
        "texto": "No podia ver series normales la piba tenia que gustarle la ficcion estresante y el drama que lloras, vivo en pura tension vamo yo",
        "id": "801590158374084608"
    },
    {
        "texto": "Me agarra un bajon y me imagino abrazando a mi perro y se me pasa, hasta que caigo que no tengo perro y me deprimo mas asi es mi vida chicos",
        "id": "801231434660724737"
    },
    {
        "texto": "No me calmo en serio es muy buena JK te amo",
        "id": "800133308965228544"
    },
    { "texto": "Peliculon chicos PELICULON", "id": "800132885122531329" },
    {
        "texto": "Acabo de ver elejor libro que existe, lleno de posters y cositas que le salian de la pagina y tapa dura con imanes para cerrar y UGH MAMA",
        "id": "800073068005556224"
    },
    { "texto": "Estres post parcial: hambre para 5", "id": "800000750931693568" },
    {
        "texto": "Perdi mi hoja de formulas de fisica estoy de luto",
        "id": "799743697080422401"
    },
    {
        "texto": "Expliquenme por que se me ocurrio ver el episodio  por que POR QUE",
        "id": "798958258492874752"
    },
    {
        "texto": "Shit me acabo de hacer spoiler me acabo de haCER SPOILER MALDITO INSTAGRAM",
        "id": "798926592785448960"
    },
    {
        "texto": "Se puede hacer videollamada en wpp y julieta y yo como dos boludas dando vueltas hablando nos quiero",
        "id": "798697863903645696"
    },
    {
        "texto": "Cocino y me quemo toda . Ven? Yo voy a vivir de pizza hamurguesas y fideos. Y capaz alguna ensalada. Capaz.",
        "id": "798678555156746241"
    },
    {
        "texto": "La felicidad de promocionar no se explica chicos, que paz",
        "id": "798478435265941505"
    },
    {
        "texto": "El nivel de sue\u00f1o a esta hora es alto muy alto",
        "id": "798474279826362368"
    },
    {
        "texto": "Para ingles seguro hagamos una actividad puro high school musical y la idea no podia estar mas bien",
        "id": "798309267514261509"
    },
    {
        "texto": "Entre ma\u00f1ana y el jueves nose que me emociona mas, que buena semana mama",
        "id": "798193875340972033"
    },
    {
        "texto": "El martes vuelve teen wolf fuckfuckfuck no estoy preparada",
        "id": "796833822381850628"
    },
    {
        "texto": "Me siento mal por faltar a la facultad desde cuando",
        "id": "794925882108416000"
    },
    {
        "texto": "Explicame por que llueve y hay sol al mismo tiempo clima decidite",
        "id": "793803307353534464"
    },
    {
        "texto": "A los 11 caramelos que me comi sumale dos tazas de cafe, no me duermo hasta las 4 hoy",
        "id": "793598137977954360"
    },
    {
        "texto": "La profe de ingles nos dio caramelos porque estabamos aburridos, somos un buen curso ahora",
        "id": "793596820710629376"
    },
    {
        "texto": "Lluvia del asco que me mojo toda, lo mismo daba usar paraguas",
        "id": "793454330884030464"
    },
    {
        "texto": "Me levante tarde y sali con menos maquillaje de lo usual y mama como pude andar con esta cara",
        "id": "792397515547152385"
    },
    {
        "texto": "Veo a tom felton en flash y lo unico que veo es un draco malfoy deteriorado y sin te\u00f1irse hace a\u00f1os sorry",
        "id": "791662295076208641"
    },
    {
        "texto": "El cast de pretty little liars filmo hoy el ultimo episodio de toda la serie se me esta escapando la lagrima",
        "id": "791456940597575680"
    },
    { "texto": "Pero que sue\u00f1o que tengo mama", "id": "790909365670776836" },
    {
        "texto": "Dai me acaba de decir un acertijo del libro nuevo de harry potter y lo adivine. Fanatismo level 9000",
        "id": "790652732906635264"
    },
    {
        "texto": "Quiero volver a soul pero me preocupa que sea como antes y se llene de viejos y sea perturbador tonces sale netflix igual que siempre obvio",
        "id": "790004324244066305"
    },
    {
        "texto": "Osea porque gabriella siempre se va y lo deja ahi a troy FLACA KE",
        "id": "789262847536730112"
    },
    {
        "texto": "Les juro que hsm 2 es una de las mil peliculas que no voy a superar munca, voy a tener hijos y los voy a torturar viendola nose",
        "id": "789262365057507329"
    },
    {
        "texto": "Muy ricas las medialunas de la facultad pero poco mas y las inundan en caramelo relajense",
        "id": "788356463156748288"
    },
    {
        "texto": "Me estrese viendo la segunda temporada de flash en internet y netflix me los sube todos ahora, me cago en vos netflix mentira te amo",
        "id": "787460179075932160"
    },
    {
        "texto": "En tres horas mira como cambio el clima y el sol que hay lo re amo",
        "id": "787354910308331521"
    },
    {
        "texto": "Lo peor, no salgo hace 2 meses y justo hoy se les pinta rayarse, ganas de repartir bollos",
        "id": "787085486842052608"
    },
    {
        "texto": "Mis viejos rompieron el record de cuantas veces logran ponerme humor del culo en una semana.",
        "id": "787085211792179200"
    },
    {
        "texto": "La chica del chino de mi casa tiene un nene de 3 a\u00f1os. Es el chinito mas lindo que habia visto es muy chu",
        "id": "786939089853550593"
    },
    {
        "texto": "APARECIO EVAB PETERS APARECIO EVAN PETERSSSSSA",
        "id": "786733946553896960"
    },
    {
        "texto": "Entro a twitter para ver que jk rowling confirma 5 peliculas mas de animales fantasticos, me acaba de hacer feliz los proximos 3 a\u00f1os real",
        "id": "786694042658758656"
    },
    {
        "texto": "Nos metimos al hipodromo de palermo y hay carrera. Somos del campo JAJAJAJAJJAAJ",
        "id": "785531063481278464"
    },
    {
        "texto": "Mi viejo mandando audios por whatsapp les juro que es lo mas gracioso que existe no paro \ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "784897308257320960"
    },
    {
        "texto": "La falta de sue\u00f1o me afecta seriamente no importa cuando leas esto",
        "id": "784423331869167616"
    },
    {
        "texto": "Encima estan dando ya la 3er temporada y es puro dylan obrien y EXIJO QUE LA PASEN A OTRO HORARIO",
        "id": "784423140541825025"
    },
    {
        "texto": "Esto de salir de cursar a la 1 y no llegar a ver la serie no me copa nono",
        "id": "784422933129207808"
    },
    {
        "texto": "No puedo salir de mi casa con esta lluvia, dejenme quedarme plischu",
        "id": "784361409211666432"
    },
    {
        "texto": "Amo las locuras del emperador, que pelicula maa genial",
        "id": "783475309433778180"
    },
    {
        "texto": "Leyendo algo nada que ver descubri que el miercoles vuelve Arrow se me alegro la semana y el mes masomenos",
        "id": "782986741099683840"
    },
    {
        "texto": "Me maquille con delineador y hasta labial y saben que hice? Me tire a ver netfix. Muy glam lo mio",
        "id": "782277340323807232"
    },
    {
        "texto": "Que cosa mas loca que bypass es uno de los mas basicos en bariloche y todos se enamoran mil (yo incluida no lo supero ayuda)",
        "id": "781955368469561344"
    },
    {
        "texto": "Felix cambiandose los nombres de usuario cada dos dias me pone nerviosa ya nose ni quien es quien",
        "id": "781183157513101312"
    },
    {
        "texto": "Quiero ir al lollapalooza ahora solo para ver a oliver heldens que vida injusta",
        "id": "781151232408883200"
    },
    {
        "texto": "I got a pocket got a pocket full of sunshine i got a pocket got a pockt full of all my love uohhhh. Y asi desde las 6.30 estamos",
        "id": "780915116124569600"
    },
    {
        "texto": "El chofer del bondi esta al mango con jesse y joy nose si quererlo o querer pegarle",
        "id": "780877389748441088"
    },
    {
        "texto": "No paro de ver los 4 fantasticos porque chris evans chicos chris evans un bebe era",
        "id": "780564090980798465"
    },
    {
        "texto": "Harry subio fotos a instagram ESTA VIVO LLORO",
        "id": "780440059896074240"
    },
    {
        "texto": "Ayer se me cayo mi compu por primera vez en 4 a\u00f1os y llore como 20 minutos pidiendole perdon estoy muy afectada ya sip",
        "id": "780207352398086146"
    },
    {
        "texto": "No entiendo porque hay que gente que dice linda hermosa a fotos de pibas haciendo caras o que no se ven en la foto NO ENTIENDO QUE LE VES???",
        "id": "780187272742313984"
    },
    { "texto": "Parciales terminen ya quiero salir", "id": "780141486742638592" },
    {
        "texto": "El 2\u00b0 parcial es transcripcion traduccion mitosis meiosis y mutaciones me hacen feliz como los quiero \ud83d\ude0d\ud83d\ude0d",
        "id": "779339727170396160"
    },
    {
        "texto": "Y TERMINO EL EPISOFIO NOMAS Y NO APARECIO EVAN PETERS",
        "id": "779133047530745856"
    },
    {
        "texto": "Segundo episodio ahs DONDE ESTA EVAN PETERS ARROBA RYAN MURPHY",
        "id": "779126811301179392"
    },
    {
        "texto": "El colectivo con el aire a 10\u00b0 mas o menos. Flasho verano ya",
        "id": "779023109743579136"
    },
    { "texto": "Wtf no chanel 5 que onda", "id": "778771567580966912" },
    {
        "texto": "Estan dando la primer temporada de teen wolf en sony los feels man",
        "id": "778622606236876800"
    },
    {
        "texto": "Chicos RIP brangelina este es un dia triste",
        "id": "778614421035814912"
    },
    {
        "texto": "A veces quiero volver a tener 13 y juntarnos a dormir en una casa 8 personas y matarnos de risa toda la noche, que genial seria",
        "id": "778346391462612992"
    },
    {
        "texto": "Me sente al lado de la estufa en el aula y me parece perfecto",
        "id": "778214852099764224"
    },
    {
        "texto": "Ma\u00f1ana ahs espero que no me decepcione como la quinta plischu",
        "id": "776226671124942848"
    },
    {
        "texto": "Quiero tener carteras de prada y gucci tramitame un par de millones pls",
        "id": "776105656688447488"
    },
    {
        "texto": "Venir a fisica sin el profe Hernan perdio todo su sentido, indignada",
        "id": "776047472691015680"
    },
    { "texto": "Martes 13 es hoy para mi buen dia", "id": "776027907550568448" },
    {
        "texto": "Ma\u00f1ana el trailer de 50 sombras mas oscuras BAI",
        "id": "775422443322310656"
    },
    {
        "texto": "Leo sus tuits de bypass y basta paren que lo extra\u00f1o es mi amor",
        "id": "774643257095626752"
    },
    {
        "texto": "Me da el sol en la cara y estornudo JAJAJAJAJAJAJ estallo",
        "id": "774642561055096832"
    },
    {
        "texto": "Con dias asi vengo a la facultad de otro humor \ud83d\ude0d\ud83d\ude0d",
        "id": "774591858429333504"
    },
    {
        "texto": "Shit 10 episodios y baibai pretty little liars seguro A es alguien que mostraron 5 minutos en la 1er temporada porque siempre asi",
        "id": "774345172138196992"
    },
    {
        "texto": "Faltan tres semanas para el parcial y ya estan dando tema del segundo hablen de emocion",
        "id": "773507041784688640"
    },
    {
        "texto": "Voy a salir volando con este viento",
        "id": "773268637344030720"
    },
    {
        "texto": "Que tuit de nerd asco acabo de tirar pero es la posta yo ya no se",
        "id": "773141622695534592"
    },
    {
        "texto": "Me costo venir a la facultad pero todo sea por las enzimas sisi",
        "id": "773141306952585216"
    },
    {
        "texto": "Muela conchuda que no me deja vivir en paz te odio",
        "id": "772083999929954305"
    },
    {
        "texto": "Cuestion ma\u00f1ana empiezo greys anatomy ja",
        "id": "771906876560769024"
    },
    {
        "texto": "Super dramatica pero posta que terminar una serie es lo peor porque te queda ese sentimiento de vacio que no sabes que hacer",
        "id": "771906565473439746"
    },
    {
        "texto": "Acabo de terminar gossip y estoy shockeada aunque mas lo pienso mas me doy cuenta que era obvio que va a ser de mi vida ahora nose",
        "id": "771906443259834368"
    },
    { "texto": "Humor de viernes a -9000", "id": "771656266644987904" },
    {
        "texto": "El profesor falto y yO ME VINE HASTA ACA A CAGARME DE FRIO LA RE QUE LOS PARIO A TODOS",
        "id": "771655407961935873"
    },
    {
        "texto": "Hay una piba que literal cada 3 palabras del profe hace un comentario, aunque sea un 'ah si'. Que clase de problemas tenes flaca para",
        "id": "771003727427895296"
    },
    {
        "texto": "Estuve como dos horas dando vueltas en la cama pensando que eran como las 2. Son las 11.",
        "id": "769898528659349504"
    },
    {
        "texto": "Salgo y veo el Sol que parece rojo fluo ahno",
        "id": "769279147831066628"
    },
    {
        "texto": "Mama que calor que hace por poco salia con short a la facultad",
        "id": "769212318144196608"
    },
    {
        "texto": "Como no me decidia entre dos esmaltes me pinte una mano de cada color, asi estoy re bien",
        "id": "768943950963113988"
    },
    {
        "texto": "Vi la foto de la flaca que se encontro a chace crawford y me vuelvo loca chicos",
        "id": "768621711545733120"
    },
    {
        "texto": "Noooo chicos que genial el trailer de Dr Strange necesito noviembre para ir a verla ya",
        "id": "768612433292324866"
    },
    {
        "texto": "Este Marley que se fue a Londres a ver la nueva obra de Harry Potter y yo aca, comiendo una frutilla. Quetul",
        "id": "768590780524929024"
    },
    {
        "texto": "Ya me veo que hay paro en drago y me voy hasta alla al pedo pero no mis profes les suda todo y van igual los quie",
        "id": "768408408483569664"
    },
    {
        "texto": "Que cosa que puedo estar todo el dia escuchando Oliver Heldens, lo amo",
        "id": "767728907785207808"
    },
    {
        "texto": "Mi hermana esta indignadisima que me hayan dicho feliz dia y dado regalos, seguis sin ser la ni\u00f1a de la familia chiqui \ud83d\udc81\ud83c\udffb\ud83d\ude0e\ud83d\ude0e",
        "id": "767506011389304832"
    },
    {
        "texto": "Tomo cafe cuando me levanto, entre clases, despues de almorzar y en la merienda. En cualquier momento me muero de un pico de cafeina",
        "id": "766603479318224896"
    },
    {
        "texto": "Grite VAMAAAAAAAOO tan fuerte que mi vieja salto de la cama asustada ups",
        "id": "766095081942216704"
    },
    {
        "texto": "Noooo Conte no te me vengas a torcer un pie ahora dios mio que me mue",
        "id": "766084714742575105"
    },
    {
        "texto": "Desde aquella vez que twittie que me encanta el modo nocturo de twitter no lo cambie mas. Ya ni me acuerdo como es en el modo normal",
        "id": "766014483085025280"
    },
    {
        "texto": "Que siga asi el clima el resto del a\u00f1o porfiii",
        "id": "765998414391812096"
    },
    {
        "texto": "Sigo sin creer lo que tengo como profesor de fisica. Es como un amigo mas ajajajajajajajaja",
        "id": "765942473122258945"
    },
    {
        "texto": "Chabon Zac Efron se fue hasta Rio nomas para ver a las gimnastas chau me vuelvo a hacer gimnasia artistica (segui so\u00f1ando)",
        "id": "765714403513753600"
    },
    {
        "texto": "Un paneo de soc y estado nomas para confirmar que menos mal que tuvimoa Beron el a\u00f1o pasado.",
        "id": "765504579836534784"
    },
    {
        "texto": "Me quiero comprar 38371 pares de converse que injusta vida",
        "id": "765237836434014208"
    },
    {
        "texto": "Ma\u00f1ana vuelvo a la facultad y lo peor que arranco 7 am nose si llorar o llorar",
        "id": "765227149640990720"
    },
    { "texto": "VAMOS. DELPO CARAJO", "id": "764557150467293185" },
    {
        "texto": "Maldito partido me esta poniendo nerviosa",
        "id": "764551903061614592"
    },
    {
        "texto": "Toda la familia leyendo en wikipedia que el chocolate es mas beneficioso que perjudicial nos amo que gordos",
        "id": "764498821154037760"
    },
    {
        "texto": "Me tenia que tocar de nuevo sabado larrrepu, los odio",
        "id": "763741430254886912"
    },
    {
        "texto": "No paro de reirme con jackass que problemas tienen  \ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "763543045337907200"
    },
    {
        "texto": "Necesito 7 kg de cofler en frente mio ya",
        "id": "763538331879804928"
    },
    {
        "texto": "Estuve a punto de ver un video de gossip de cosas que todavia no vi, y lo cerre. Ile 1 spoiler 0",
        "id": "763461995647668229"
    },
    {
        "texto": "Me estoy debatiendo seriamente comprarme el libro de harry potter ahora o esperar hasta octubre para comprarme el espa\u00f1ol, QUEHACERQUEHACER",
        "id": "763171174574596096"
    },
    {
        "texto": "Se me rompio la cadenita y me senti como el papa de timmy turner cuando se le rompe el trofeo fue horrible",
        "id": "763163698177400832"
    },
    {
        "texto": "Muero de hambre necesito ingerir alimento urgentisimo",
        "id": "762795786946146304"
    },
    {
        "texto": "Ayer miramos pocahontas ebrias, la estan dando ahora en disney y me rio fuerte de nuestros comentarios anoche \ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "762504413302755328"
    },
    {
        "texto": "Y ahora ganan en voley y basket, ah pero esta on fire argentina vamos",
        "id": "762486384435224578"
    },
    {
        "texto": "Que bien del potro lo aplaudo chicos",
        "id": "762467603218468868"
    },
    {
        "texto": "Salimos al jumbo para acompa\u00f1ar a nico y terminamos comprando de todo para juntarnos nosotras a la noche, nos amo",
        "id": "762055202593734656"
    },
    {
        "texto": "Vine a ezeiza a dejar a mi amiga y les juro que no veo la hora de viajar",
        "id": "761177193556897793"
    },
    {
        "texto": "Instagram la cagaste con la actualizacion quetepaso",
        "id": "760844233964154880"
    },
    {
        "texto": "La pizza de verdura claramente la invento alguien que necesitaba bajar de peso pero su amor a la pizza era mas fuerte no hay otra",
        "id": "760276328306335744"
    },
    {
        "texto": "Lo mejor es que falta poco para septiembre se viene scream queens american horror story y teen wolf es LA fiesta septiembre",
        "id": "760116524984176640"
    },
    { "texto": "Estamos en agosto connnnchh", "id": "760116202152886274" },
    {
        "texto": "Acabo de descubrir el modo nocturno del twitter y creo que me impacte",
        "id": "758074839731150848"
    },
    {
        "texto": "Mi viejo googleando como hacer pollo con salsa blanca y champignon lo quie",
        "id": "757717213273096192"
    },
    {
        "texto": "JAJAJJAJJA chicos mi hermana les grita por las 200 personas que hay en el predio lloro",
        "id": "757320435730092032"
    },
    {
        "texto": "Mas que me estoy muriendo de frio diez puntos todo",
        "id": "757307522785181700"
    },
    {
        "texto": "Estoy en tecnolopolis al lado de la sala de juegos donde veo a uno jugando el uncharted 4 y me cuesta resistirme entrar",
        "id": "757307293226635264"
    },
    {
        "texto": "Nose como superarla y ni la fecha de estreno dijeron todavia vamos bien",
        "id": "756286349154611200"
    },
    {
        "texto": "Me niego a verla y aceptar que termina y no basta no",
        "id": "756285471832113152"
    },
    {
        "texto": "WHAT THE FUCK EL TRAILER NONOONONONO",
        "id": "756285307146960896"
    },
    {
        "texto": "Esta temporada va a ser la ultima bai me voy a llora",
        "id": "756272529195622400"
    },
    {
        "texto": "Me acabo de comprar un esmalte identico al que ya tengo solo porque tenia brillitos. Hablame de vicios",
        "id": "755479721253691392"
    },
    {
        "texto": "Me explican como me vengo a quemar medio dedo CON UNA TOSTADORA????",
        "id": "755058099313147904"
    },
    {
        "texto": "Jamas me estresaron tanto dos personajes en una serie como chuck y blair, ahora entiendo a la gente que la veia",
        "id": "754910952592646144"
    },
    {
        "texto": "Con este frio ni te salgo de la cama ni que me paguen",
        "id": "754712711129395201"
    },
    {
        "texto": "DYLAN VOLVIO AL SET DE TEEN WOLF MI VIERNES MEJORO 187329292 VECES",
        "id": "753975985503174656"
    },
    {
        "texto": "Quiero que salga girls talk boys y todavia no son ni las doce ni tengo spotify para escucharla conclusion dependo de twitter PUTAMADRE",
        "id": "753744712532623360"
    },
    {
        "texto": "Yo igual llego siempre tarde a leer los tuits de la gente porque puta diferencia horaria",
        "id": "753398982349643776"
    },
    { "texto": "Chicos se saco calvin vamos carajo", "id": "753398860370894848" },
    {
        "texto": "Igual fue demasiado chu la quiero ver mil veces asi de masoquista que soy",
        "id": "753371344457310208"
    },
    {
        "texto": "Estupida pelicula y sam claflin y ed sheeran por hacerme llorar desde la mitad, me indigne",
        "id": "753371114513043456"
    },
    {
        "texto": "La que me faltaba era engancharme con gossip girl chau perdi mi vida nv en septiembre",
        "id": "752978501775585280"
    },
    {
        "texto": "Quien se levanta 6.30 para ir a la facultad y enterarse que le firman libretas a las 11 am??? \ud83d\ude4b\ud83c\udffb\ud83d\ude2c\ud83d\udd2b",
        "id": "752456895848382464"
    },
    {
        "texto": "No se me pueden haber ido de esa forma las ganas de salir mama, que me paso",
        "id": "751961719010910208"
    },
    {
        "texto": "Cuando tenga hijos los voy a traer al cine con cinta en la boca para que no hablen, callenlosssss",
        "id": "751879168988631040"
    },
    {
        "texto": "Me dieron dos 2x1 para cine premiun o 3d en hoyts y me siento ricky chicos",
        "id": "751876627508891648"
    },
    {
        "texto": "Me compre un dr lemon para mi sola porque falta de salidas y amigos que se copen vieron",
        "id": "751184866956435456"
    },
    {
        "texto": "Este chico no hace nada bien no me sirve solo su apellido para stalkearlo, 5 puntos menos gryffindor",
        "id": "751068815178563584"
    },
    {
        "texto": "Viene esta parte y ya empiezo a llorar no la supero nunca ma",
        "id": "750490991988203520"
    },
    { "texto": "Hsm te amo forever", "id": "750466440914989057" },
    {
        "texto": "RIGHT NOW I CAN HARDLY BREATH, OH YOU CAN DO IT.JUST KNOW THAT I BELIEVE",
        "id": "750466400997736449"
    },
    {
        "texto": "Voy a estar forever enamorada de justin timberlake es de otro mundo este hombre",
        "id": "750362254856622081"
    },
    {
        "texto": "Google puso una animacion por el satelite que llego a Jupiter ajajajajajaajajaj mas amor",
        "id": "750345447089270785"
    },
    {
        "texto": "Que sue\u00f1o mas re mil frustrado estudiar astronomia chau",
        "id": "749987151408992257"
    },
    {
        "texto": "Si las carreras fueran cortas no me alcanzaria con estudiar medicina, me iria a a veterinaria astronomia y biologa y nose si me faltan otras",
        "id": "749986856910094337"
    },
    {
        "texto": "A ver si aprenden ahora, porque parece que hasta que paso les chupaba un huevo",
        "id": "749951856533598208"
    },
    {
        "texto": "Llegamos a encontrar a este pibe y nos recibimos de stalker asi de una",
        "id": "749948346211663872"
    },
    {
        "texto": "Extra\u00f1aba mil estar sin hacer nada o pensar en que hay algo que hacer, pero me siento inutil JAJAJAJAJAJAJA vida que hiciste conmigo \ud83d\ude2d\ud83d\ude02\ud83d\ude2d",
        "id": "749704445970243584"
    },
    {
        "texto": "No me entra la felicidad, quimica adentroooo",
        "id": "749260848812687360"
    },
    {
        "texto": "Ipc y matematica adentro, vamos que promocionas ilu \ud83d\udcaa\ud83c\udffb\ud83d\udcaa\ud83c\udffb",
        "id": "748524532277870592"
    },
    {
        "texto": "Necesito que llegue el sabado y terminar de rendir mi cansancio mental es excesivo",
        "id": "748172103329976321"
    },
    {
        "texto": "Por que youtube les esta sacando subscriptores a las cuentas wtf jajajajajajajaj",
        "id": "747802737803464704"
    },
    {
        "texto": "Nunca voy a entender como hace la.gente que tiene nextel para entenderse cuando habla",
        "id": "747792942224576512"
    },
    {
        "texto": "la puta madre boludo, 2 veces lo mismo",
        "id": "747262017908649985"
    },
    {
        "texto": "Mi vecina se compro un perrito y esta afuera lloriqueando que quiere entrar y lloro yo con el de lo amor que es \ud83d\ude2d\ud83d\ude2d",
        "id": "746847082686873600"
    },
    {
        "texto": "Explicame para que pones megusta a un tweet y pones que no le salga al otro quien sos, SA LA MEEEE",
        "id": "746836987131334657"
    },
    {
        "texto": "Zac Efron y su mechon rubio se pueden ir calmando un rato",
        "id": "746525301283373057"
    },
    {
        "texto": "Me resumi toda una fotocopia de 9 puntos re colorida re chu para acordarme que iban solo 2. BIEN ILU BIEN",
        "id": "746491983271706624"
    },
    {
        "texto": "Voy a tener 82 y voy a estar como mi vecina con las u\u00f1as largas pintadas de verde olvidense",
        "id": "746401220261253120"
    },
    {
        "texto": "No puedo estar un dia sin pintarme las u\u00f1as, es una adiccion que no termina nunca",
        "id": "746400800910483456"
    },
    {
        "texto": "La chica de claro conto que fue un cliente a quejarse que le vino 36000 en la factura (gana 30000\u20ac por mes, no jodo) ME EXPLICA QUE HACE????",
        "id": "746023793651499008"
    },
    {
        "texto": "Voy a empezar a verme orange is the new black solo por moria que les digo chicos",
        "id": "745924917913325568"
    },
    {
        "texto": "Ahora que pasaron varios a\u00f1os veo cualquier peli de disney y me lloro todo ejemplo los hechiceros de waverly place ahora",
        "id": "745754553644163072"
    },
    {
        "texto": "Arranque el dia sintiendome para el culo, vama",
        "id": "745599734962921472"
    },
    {
        "texto": "Tengo que hacer mil cosas y no puedo dejar de ver esta pelicula chicos shit shit shit",
        "id": "745377545231736832"
    },
    {
        "texto": "Con todos los actores que hay en Los miserables expliquenme como no la habia visto todavia, COMO",
        "id": "745371237648564224"
    },
    {
        "texto": "Los miercoles van volver a ser buenos miercoles \ud83d\ude46\ud83c\udffb\ud83c\udf89\ud83d\udc4f\ud83c\udffb\ud83d\udc4f\ud83c\udffb",
        "id": "745335824418541568"
    },
    {
        "texto": "PARENME TODO QUE ES 21 DE JUNIO Y VUELVE PRETTY LITTLE LIARS",
        "id": "745334974157590528"
    },
    {
        "texto": "Como me rei con buenos vecinos, buen lunessss",
        "id": "745013465195089920"
    },
    {
        "texto": "Yo estaria en el video ese del chimpance y el perro, abrazando al chimpance al perro, no se cual de los dos me causa mas amor",
        "id": "744733270831677441"
    },
    {
        "texto": "No estaria mal tener 1000 dolares para ropa deportiva ahora, no me niego la verdad ehhh",
        "id": "744203725007380481"
    },
    {
        "texto": "Mi mama compro un polvito que deja las u\u00f1as como metal y creo que le desaparece antes que lo empiece a usar jojo",
        "id": "743958118464380928"
    },
    {
        "texto": "\"-xq tomas de otro mate que egoista\n+porque sino ustedes se olvidan de mi y no me comparten\n-es verdad mala nuestra perdon\" \nIle 1 viejos 0",
        "id": "743917457589542912"
    },
    {
        "texto": "LAS ganas de volver a ver las primeras dos temporadas de ahs",
        "id": "743618887489552384"
    },
    {
        "texto": "Ya me veo que el finde con dory se llenan los cines de gente entre 16 y 23 a\u00f1os, maduraremos nunca",
        "id": "743120189894582273"
    },
    {
        "texto": "\"Pasenme una foto donde se pueda piner una cara con la boca abierta\" que",
        "id": "742894265743839233"
    },
    {
        "texto": "Puede volver teen wolf de una vez la re puta",
        "id": "742521454248464384"
    },
    {
        "texto": "Yo le pongo toda la buena onda la re energia pero la dieta no se deja hacer, no me quiere claramente no estamos hechas la una para la otra",
        "id": "742476629461639169"
    },
    {
        "texto": "Los tweets entre dylan y cole sprouse son todo lo que esta bien",
        "id": "741847174233915392"
    },
    {
        "texto": "Lo digo todo el tiempo peroQUE FFFFFRIO MAMA",
        "id": "741656510498017280"
    },
    {
        "texto": "Que mundo de mierda, dispararle a una persona y encima en un lugar lleno de miles de personas, no tienen dos dedos de frente",
        "id": "741591379021824001"
    },
    {
        "texto": "Kourtney Kardashian tiene 37, 3 hijos y esta super diosa, que pare",
        "id": "741451605623607296"
    },
    {
        "texto": "Cuatro horas y media haciendo tarea sin parar. Dale donde esta quiero mi premio dale",
        "id": "741383313177317376"
    },
    {
        "texto": "El pelo de natalie portman en la pelicula Leon porrrrfu",
        "id": "741089220161339393"
    },
    {
        "texto": "Me encanta como en el grupo de wpp con mis amigos alguien toca un tema de discusion y lo discutimos dos dias seguidos no nos calmamos mas",
        "id": "740997790906646528"
    },
    {
        "texto": "Dai me comparte sus milanesas pero ojo, pedacitos mordidos \ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "740925898300530689"
    },
    {
        "texto": "Sensacion termica 2,4 cada vez menos ganas de salir de mi casa me dannnn",
        "id": "740507436029775872"
    },
    {
        "texto": "Que falta me hacia un poco de sol, asi deberia ser todo el tiempo \ud83d\ude0d",
        "id": "740201978467389440"
    },
    { "texto": "Que frio mama", "id": "739789396296241154" },
    {
        "texto": "Vi un nene corriendo por el jumbo con su bolsa de mc donalds y creo que nunca vi a alguien tan feliz",
        "id": "738877222430355462"
    },
    {
        "texto": "Dai me pide que le pase fotos de mi en primaria y las vi y fue soltar un JAJAJAJAJAJAJAJJAAAJAJAJAJAJAJAJAJA NOPARO",
        "id": "738544644221468673"
    },
    {
        "texto": "Uso alicia keys para descargar mis emociones, les juro que DIS GURL IS ON FIYYAAAHHHHHHH, funciona.",
        "id": "738536197287448577"
    },
    {
        "texto": "Pobre taylor no le dura un novio que mala leche man",
        "id": "738347319930851328"
    },
    {
        "texto": "Dejen de hacer memes de bob esponja no me dejan estar un rato seria \ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "738172647754735616"
    },
    {
        "texto": "Gracias al que se le ocurrio arreglar sombras de ojos con alcohol porque sino ya me hubiera tirado del balcon unas 6 veces \ud83d\ude4f\ud83c\udffb\ud83d\ude4f\ud83c\udffb",
        "id": "737426066252386304"
    },
    {
        "texto": "Matematica 10, en SEIS a\u00f1os de secundaria ni a un nueve llegue, que nerd agusti te amo montones",
        "id": "737310145672294400"
    },
    {
        "texto": "JAJAJAAJAJAJJAJAJAJA LA FOTO QUE SUBIO LOUIS NO PARO JAJAJAJAJJAJAJAJAJAJA",
        "id": "737093958376017922"
    },
    {
        "texto": "Siempre que me quiero hacer un arito me cago toda y no me lo hago, el dia que me tatue nose me baja la presion a 4.7",
        "id": "736613298527948800"
    },
    {
        "texto": "Acabo de ver en la facultad el arbol mas lindo me lo quiero llevar a mi casa",
        "id": "736588900530016256"
    },
    {
        "texto": "Estupido y sensual instagram intentando spoilearme todo",
        "id": "736217120086884352"
    },
    {
        "texto": "Una amiga de mi hermana se le super enojo porque no la tiene en su estado de whatsapp JAJAJAJAJAJAJJAJAJAJAJAJA NO PARO",
        "id": "736004471365509120"
    },
    {
        "texto": "Bue dale me obsesione la ultima semana con marvel me vi todas las peliculas para enterarme que Steve Rogers es de hydra bien, BIEN EH, BIEN",
        "id": "735883581176827904"
    },
    {
        "texto": "Daiana me come milanesas de soja al lado y largan todo el olor d i u uu uu",
        "id": "735851287347105792"
    },
    {
        "texto": "Puse mal la cafetera y el cafe se hizo afuera de la jarra basicamente. Nota mental, dejar de ver peliculas hasta las 2 30",
        "id": "735767436343943170"
    },
    {
        "texto": "Yo nose si es mala suerte o que pero miro una pelicula en internet y al dia siguiente la dan en la tele, o peor a las horas de verla, lloro",
        "id": "735597500510416896"
    },
    {
        "texto": "Hacia cuanto no me quedaba en la cama hasta esta hora. Feriado te amo",
        "id": "735489355578408962"
    },
    {
        "texto": "No habia caramelos en el gimnasio  se pudrio todo aca",
        "id": "734888285823242240"
    },
    {
        "texto": "Na pidio que 15 fans se hicieran admin para cosas relacionadas con el fandom y el album como no amarlo 9739839 veces mas (siempre se puede)",
        "id": "734864554749001728"
    },
    {
        "texto": "Siestita te habia esperado \ud83d\ude1a\ud83d\ude1a",
        "id": "734799669969190912"
    },
    {
        "texto": "No me calmo con nick jonas en los billboards lo amo mil",
        "id": "734793371064143874"
    },
    {
        "texto": "El examen de matematica fue misteriosamente facil, o me saco un re diez o 0,25 no hay intermedio",
        "id": "734757423844626432"
    },
    {
        "texto": "Lo bueno de venir a las 7 a cursar es el amanecer desde la ventana, amor",
        "id": "734689787974672384"
    },
    {
        "texto": "Escucho justin timberlake en algun lado y salto a cantar re fan tengo una cosa con este hombre que nose",
        "id": "733838091325050881"
    },
    {
        "texto": "Chicos mis ojeras hoy son peor que un panda chau",
        "id": "733706099484983296"
    },
    {
        "texto": "Y nat ultimo siempre triunfando los amo  \ud83d\ude02\ud83d\ude02",
        "id": "733701330091552768"
    },
    {
        "texto": "El agusti siempre rompiendola con los buzos, que lindos sonnnn",
        "id": "733700697695387648"
    },
    {
        "texto": "Mi mama me rompio un esmalte, me mancho toda la pared y las zapatillas amarillas, AMARILLAS. CON ESMALTE ROJO!!!!!!!",
        "id": "733686075319848965"
    },
    {
        "texto": "Hablando por mensaje de instagram cuando tenemos wpp sisi muy normales",
        "id": "733354520680497152"
    },
    { "texto": "7,50 en ipc vama la piba", "id": "733245869907152896" },
    {
        "texto": "Que cosa que siempre le pasan las cosas malas al que no lo merece, cuando va a cambiar este mundo",
        "id": "733065535974473728"
    },
    {
        "texto": "Esa presion despues de rendir de dudar si hiciste algo bien, lloremos",
        "id": "732960302363508736"
    },
    {
        "texto": "Que ganas de estudiar astronomia e irme al espacio que tengo por favor",
        "id": "732581284069953536"
    },
    {
        "texto": "Ah no el malhumor que tengo ahora man, mejor me vuelvo a dormir antes que explote o algo nose",
        "id": "732293187973320704"
    },
    {
        "texto": "No me dejaron dormir ni cuarenta y cinco minuTOS DE SIESTA QUE CORNUDOS QUE SON LOS ODIO",
        "id": "732292047508508672"
    },
    {
        "texto": "Yo queria venir leyendo en el bondi pero viene con las luces apagadas, no quieren cooperar conmigo",
        "id": "732135430129393664"
    },
    {
        "texto": "Lo unico que me levanta a esta hora es house y el verme a mi asi en unos a\u00f1os, buen lunes hoy se rindeee",
        "id": "732126387469975553"
    },
    {
        "texto": "El fin de semana estudiando, hoy lo mismo y asi seguire toda la semana que nerd pls",
        "id": "731896544232931329"
    },
    {
        "texto": "En las vacaciones de invierno me interno las dos semanas haciendo maraton american horror story porque la piba no lo superaba",
        "id": "730929535869435906"
    },
    {
        "texto": "Asi como ayer evan peters en el trailer de x men, yo veo a tate langdon o a kit walker no puedo otro",
        "id": "730928813165711365"
    },
    {
        "texto": "En esta pelicula esta Hugh Laurie haciendo algo relacionado con lo militar y yo solo veo a House en un pais de Africa nose",
        "id": "730928273547505665"
    },
    {
        "texto": "Ah no parame todo que es este instagram yo anoche tenia solo el icono nuevo que le hicieron",
        "id": "730730381125750784"
    },
    {
        "texto": "Yo quiero una play o una xbox para jugar y mis papas por ser mujer nunca compraron ni algo parecido lloro quiero ser un nene",
        "id": "730585416919842816"
    },
    {
        "texto": "Fui a ver Civil War y les juro que sali cuestionando mi amor por Tony sobre Steve, vida cruel",
        "id": "730506439962333184"
    },
    {
        "texto": "Me puse a ver la serie de los jonas porque gordafan no lo supera nunca",
        "id": "730207487157219328"
    },
    { "texto": "NECESITO IR AL CINEEEEEE", "id": "729784362850525184" },
    {
        "texto": "A veces quiero alisarme el pelo de lo chiruso que lo tengo pero despues pienso lo mucho que se da\u00f1a y chau idea pelo yo te amo tal como sos",
        "id": "729713688605798400"
    },
    {
        "texto": "Nadie le dijo a la piba que esta adelante mio que cortarse el pelo asi parece que tuviera extensiones MUY mal puestas? No seguro que no",
        "id": "729694784915447808"
    },
    {
        "texto": "Pidieron sushi y el olor ya me molesta ughhh",
        "id": "729112136799113218"
    },
    {
        "texto": "\"*en quimica, hidrocarburos*\n-la cosita no se llamaba formula del hueso?\n+la zigzag? \n-si esa\n+formula de esqueleto dai\"\nMe tente fuerte \ud83d\ude02\ud83d\ude02",
        "id": "728965194748203010"
    },
    {
        "texto": "Vengo a la facultad a enterarme que van a hacer paro los dos dias que tenemos parcial que ganas de romper las bolas que tienen la puta madre",
        "id": "728925082437980160"
    },
    {
        "texto": "Y Harry Styles alfin se corto el pelo un dia historico chicos #RIPHarrysHair \ud83d\udc4f\ud83c\udffb\ud83d\ude02\ud83d\udc4f\ud83c\udffb\ud83d\udc4f\ud83c\udffb\ud83d\ude2d",
        "id": "728663885738328064"
    },
    {
        "texto": "Colton Haynes anuncio que es gay qu\u00e9 esta pasando con los chicos lindos ultimamente \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",
        "id": "728597067245981697"
    },
    {
        "texto": "Tengo que estudiar ipc pero un programa de patos  es mas interesante en este momento saben",
        "id": "728248541567713281"
    },
    {
        "texto": "Mi vieja encontro una chica que le trae maquillajes de afuera y creo que ya va a dejar de quejarse que pretendo dejarla pobre",
        "id": "728240897977135105"
    },
    {
        "texto": "Estaria necesitando ir a ver civil war porque esto de los super heroes me esta obaesionando un toquesin nomas",
        "id": "728219118147653632"
    },
    {
        "texto": "Hoy faltaban caramelos en el gim y me senti no recompensada por mi esfuerzo, todo mal",
        "id": "728005838678396929"
    },
    {
        "texto": "Es que digo que quiero unas converse y me saltan en la mente 58 colores diferentes no puedo elegir asi yo",
        "id": "727972192017887232"
    },
    {
        "texto": "Ma\u00f1ana feliz que no me tengo que levantar a las 5 porque cierra la sede pero me tengo que levantar a las 8 30 para estudiar vama la piba",
        "id": "727907803059335170"
    },
    {
        "texto": "Chabon los jonas en camp rock que viejos estamos todos",
        "id": "727638337612357633"
    },
    {
        "texto": "Los vestidos del met gala ayer dios que se calmen porfa",
        "id": "727515915949080576"
    },
    {
        "texto": "La mina se refirio a hurlingam pronunciando 'jerlingam' JAJAJAJAJAJAJAJ NO PARO",
        "id": "727308959783227392"
    },
    {
        "texto": "Estoy viendo el lucky ladies este y les juro que no me creo que exista gente con tan poca neurona en la cabeza",
        "id": "727307280237080582"
    },
    {
        "texto": "Las ganas de estar en matematica son inversamente proporcionales a las que tengo de estar en mi cama, pero buen lunes",
        "id": "727121127219298304"
    },
    {
        "texto": "No paro de reirme con los memes de la caida de zac efron JAJAJAJAJAJAJAJA \ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02",
        "id": "726536869794734082"
    },
    {
        "texto": "'-te puedo usar la compu?\n+no andate a dormir ma\u00f1ana tenes colegio\n- es viernes'\nLa que madruga los sabados soy yo lloro lloren lloremos",
        "id": "726240418992676864"
    },
    {
        "texto": "Combatiendo el frio con un cuartito de cremolatti porque al revez siempre",
        "id": "725732434600452096"
    },
    {
        "texto": "Me salto la fangirl pero bueno la emocion es fuerte",
        "id": "725717177744130049"
    },
    {
        "texto": "Estan pasando arrow en warner y colapso aca",
        "id": "725716948319911936"
    },
    {
        "texto": "Algunos egresados se van mal al pasto con las cosas que estan haciendo, en dos a\u00f1os nose rompen ventanas pintan autos que se yo",
        "id": "725663985262071809"
    },
    {
        "texto": "Ma\u00f1ana salgo de casa 6 am y va a hacer 5 grados yafu me llevo mantita en el bondi",
        "id": "725402509364346880"
    },
    {
        "texto": "Necesitaria remil ya terminar ipc y sacarmela de encima, no la banco mas",
        "id": "725401995906011136"
    },
    {
        "texto": "Que me pasa que un lunes a las 11 de la noche me agarra un momento de hiperactividad extrema mejor me calmo",
        "id": "724779470880706560"
    },
    {
        "texto": "Mentira 4 y 50 estoy arriba re pila porque gorda nerd siempre",
        "id": "724368981818261504"
    },
    {
        "texto": "Ma\u00f1ana tu vieja me levanta a las 5 para ir a cursar",
        "id": "724368785906475008"
    },
    {
        "texto": "Tomo como 3 tazas de cafe por dia un dia de estos me agarra un ataque o algo seguro",
        "id": "723625825564762116"
    },
    {
        "texto": "Me contengo de almorzar medio kilo de helado yo sola porque el sabado hay joda y voy a comer torta jaj",
        "id": "723192486060003328"
    },
    {
        "texto": "Me llamaron de \"tarjeta naranja\", me trataron de se\u00f1ora, les menti que era menor y me siguio diciendo se\u00f1ora \ud83d\ude02\ud83d\ude02",
        "id": "723191402415435776"
    },
    {
        "texto": "*La profe* \"Seguro haya paro toda la semana, pero nosotras igual venimos\" el exito de las pibas",
        "id": "723139543000571904"
    },
    {
        "texto": "Vimos un mosquito de dengue enorme chicos ENORME, panico panico",
        "id": "722768909502443521"
    },
    {
        "texto": "Mi celular vive en modo vibrar ya ni me acuerdo cual es el tono de llamada o si tengo uno ja",
        "id": "722616881438396416"
    },
    {
        "texto": "Me compre un libro y me volvio ese sentimiento de felicidad extrema, como lo extra\u00f1aba \u2764\u2764\ud83d\ude0d",
        "id": "722419416193966080"
    },
    {
        "texto": "QUE FUE ESE TUIT DE IAN BOHEN QUE ACABO DE VER AY QUE ME MUE",
        "id": "722264468244316161"
    },
    {
        "texto": "Comi un poco de chocolate y como que estoy hiperactiva mmmierda",
        "id": "722229229404975104"
    },
    {
        "texto": "Dos semanas sin arrow y estoy que me muero, VUELVAN HIJOS DE PUTA",
        "id": "722210935738396673"
    },
    {
        "texto": "Salgo del gimnasio comiendo un caramelo porque obvio premio por mi esfuerzo del dia",
        "id": "722207310500773888"
    },
    {
        "texto": "Posta que trabajar en google si es como la muestran en the internship es EL sue\u00f1o",
        "id": "721876066797764608"
    },
    {
        "texto": "Es que es verlo a dylan o'brien en donde sea  y \ud83d\ude0d\ud83d\ude0d\ud83d\ude0d",
        "id": "721875227634962432"
    },
    {
        "texto": "'Estas reee linda msquillada pero estas muy blanca' bueno chicos todo no se puede en esta vida",
        "id": "721500424751198208"
    },
    {
        "texto": "Mira como conozco a mi familia que con escuchar la puerta de la calle abrirse supe que era mi viejo, increible",
        "id": "720966505639362560"
    },
    {
        "texto": "Una piba de un colegio se gano una beca por un viaje a la nasa, chau me deprimi",
        "id": "720686718702247936"
    },
    {
        "texto": "Habia una chica que tenia crocs con medias, CROCS CON MEDIAS, chau",
        "id": "720624326857400320"
    },
    {
        "texto": "Llego y esta mi vieja escuchando atentos, MUSICA CLASICA, mientras se pinta las u\u00f1as. Que esta pasando en esta casa",
        "id": "720288663087759360"
    },
    {
        "texto": "Basta de politica hablemos de que despues de 4 a\u00f1os de quimica entendi el tema de moles y masa molar \ud83d\ude02",
        "id": "720283494006464512"
    },
    {
        "texto": "Se puso heavy la cosa cuando me di cuenta que tengo 40 ejercicios de 3 materias para el jueves JAJJJJJJJ",
        "id": "719932393415712768"
    },
    {
        "texto": "Warner me pasa propagandas de arrow pero no me pasa arrow warner pasame arrow basura",
        "id": "719325473755541504"
    },
    {
        "texto": "Stephen Amell en los movie awards es todo lo que esta bien basta",
        "id": "718989435967291392"
    },
    {
        "texto": "Despues de dos semanas cai que el episodio 20 de pretty little liars era el final de temporada, vama ilu",
        "id": "718839959667531777"
    },
    {
        "texto": "Un dia voy a tener una fiesta de disfraces y voy a llevar ese disfraz que ves en instagram de t-rex porque si.",
        "id": "718605555309416450"
    },
    {
        "texto": "Casi 40 ejercicios de quimica para ma\u00f1ana tamo todo loco",
        "id": "718448398987313154"
    },
    {
        "texto": "Chicos el chocolate literal que me cambio el humor estaba super enojada con la nada y ahora no, de no creer",
        "id": "718250700392808448"
    },
    {
        "texto": "Almorzando dos y media de la tarde gracias facultad GRACIAS",
        "id": "718128879278415873"
    },
    {
        "texto": "Ya empezamos con quedarme dormida sabiendo que tengo tarea, 2da clase eh, siempre triunfando",
        "id": "717823789078298624"
    },
    {
        "texto": "Llegue recien y creo que me como una heladera no daba mass s s",
        "id": "717048131410653186"
    },
    {
        "texto": "Los bancos ya me estresan, necesito una mesa como en el colegio pls",
        "id": "716925946599759873"
    },
    {
        "texto": "Ma\u00f1ana 5 am arriba pero saben que? El martes vuelvo a dormir VAMOLAPIBA",
        "id": "716763796350636032"
    },
    {
        "texto": "Intensas ganas repentinas de ver a 5SOS en vivo.",
        "id": "716123352365199360"
    },
    {
        "texto": "Cuando llueve con estos truenos como ahora mi cama es como un bunker olvidate",
        "id": "715947140481171458"
    },
    {
        "texto": "Si me ti\u00f1iera el pelo de los mil colores que quiero \n1) me quedo pelada\n2) me quedo pobre \nMenos mal que soy pobre ya \ud83d\udc4d\ud83c\udffb\ud83d\udc4d\ud83c\udffb\n\ud83d\udc4d\ud83c\udffb",
        "id": "715684198191919106"
    },
    {
        "texto": "Cuando trabaje me voy a gastar un sueldo en adidas superstar y voy a usarlas hasta con el pijama porque amor puro",
        "id": "715665194865836033"
    },
    {
        "texto": "Hoy los de good morning america dijeron que era el 5SOS day y pienso que esta perfecto.",
        "id": "715312191692521472"
    },
    {
        "texto": "Encontre helado en el freezer ya easta se me hizo el dia",
        "id": "715221652456542208"
    },
    {
        "texto": "A mi viejo le pego el viejaso porque pone el noticiero y su argumento para no cambiarlo es 'es que es interesante'",
        "id": "715140024426172416"
    },
    {
        "texto": "Yo como poco y sigo subiendo de peso alguna macumba o magia negra tengo nose",
        "id": "714570342493196288"
    },
    {
        "texto": "Me queda una semana de vacaciones todavia y no me aguanto mas, necesito empezar esto de ser un cactus no me va",
        "id": "714240428376256512"
    },
    {
        "texto": "Hago mates y tengo que dar vueltas por toda la casa repartiendo porque tienen mucha paja de moverse mejor familia 10/10",
        "id": "713844754992275456"
    },
    {
        "texto": "COMO NO ME AVIVE DE VER LA PALETA DE TOO FACED DIOS, HUELE A CHOCOLATE Y NO SE LA PEDI ME VOY A AUTOGOLPEAR",
        "id": "713088346193588224"
    },
    {
        "texto": "Escribi muy mal el tuit anterior la emocion me pudo sorry",
        "id": "713086883979534339"
    },
    {
        "texto": "Acabo de entrar a un lugar que vendia cosas de urbam decay, kat von d y too faced y casi muero les.juro",
        "id": "713085716922834945"
    },
    {
        "texto": "El vlog del ultra que subio JAJAJAJAJAJAJAJAAJAJAAGAJAJAJAJJSJAJA NO PARO",
        "id": "712765004672589825"
    },
    {
        "texto": "Mi amiga se agrego a Macri en snapchat pero por suerte es normal. Uh no paren",
        "id": "712410601356730369"
    },
    {
        "texto": "Van tres dias seguidos que duermo microsiestas de media hora 40 minutos, que me pasa",
        "id": "712382174868201472"
    },
    {
        "texto": "Deci que universal no me pasa toda la tarde house y chicago med porque me pierden literal",
        "id": "712304416163024900"
    },
    {
        "texto": "Diez a\u00f1os de twitter que seria de mi ahora sin esta aplicacion",
        "id": "711937573820755968"
    },
    {
        "texto": "Cinecanal me pasa maze runner y yo estoy \ud83d\ude2c\ud83d\ude2c\ud83d\ude4c\ud83c\udffb\ud83d\ude4c\ud83c\udffb\ud83d\ude0d",
        "id": "711731304858066946"
    },
    {
        "texto": "Ayer me quede hasta las 4 am viendo formula 1 con mi viejo la.mejor hija del mundo",
        "id": "711589020871073792"
    },
    {
        "texto": "Habia estado demasiado buena la semana levantandome de buen humor, tenia que llegar el sabado",
        "id": "711241078196850688"
    },
    {
        "texto": "Puede empezar a hacer frio de una vez???",
        "id": "710138105391681536"
    },
    {
        "texto": "Porque estoy aburrida me puse a cocinar bizcochuelo que tul",
        "id": "709569709428117504"
    },
    {
        "texto": "Yo no te la puedo creer se me esta enrulando el pelo, me estan haciendo rulos ENTIENDEN RULOS ME RAPO ACA",
        "id": "709556087826030592"
    },
    {
        "texto": "Viendo Ridiculos mi mama lo unico que hace es decir 'pobresitooo' y cosas parecidas. No podes reirte como el resto de la gente mujerrr",
        "id": "709183299202240513"
    },
    {
        "texto": "Serie de mierda me tiene mas estresada que cuando tenia prueba de Beron",
        "id": "708813279284633600"
    },
    {
        "texto": "Noooo chicos no puede estar un libro como este 400 pesos tamo todo locos aca o que pasa",
        "id": "708770374750769153"
    },
    {
        "texto": "Es increible que con solo ver la imagen de harry potter me digo los dialogos en la cabeza. Creo que mi amor por esta saga va a ser eterno",
        "id": "708698771291574273"
    },
    {
        "texto": "Mis ganas de tener un perro se estan acumulando al punto que cuando me vaya a vivir sola voy a terminar con 14 perros",
        "id": "708325912228577280"
    },
    {
        "texto": "Nose si estoy preparada psicologicamente para este episodio",
        "id": "707416606884945921"
    },
    {
        "texto": "Media hora para la final de temporada de teen wolf, que me agarra un ataque no quiero.que termine e e e",
        "id": "707379230372470784"
    },
    {
        "texto": "Lloro mares cada vez que tengo que tirar un esmalte, sufro",
        "id": "706866928539844608"
    },
    {
        "texto": "Vengo de estar en musculosa en la calle a entrar a mi casa y ponerme buzo asi como quieren que no me enferme",
        "id": "706656329574834176"
    },
    {
        "texto": "No salimos desde diciembre man que nos paso",
        "id": "706322845639577600"
    },
    {
        "texto": "No puedo con los memes de  Squirtle basta \ud83d\ude02\ud83d\ude02",
        "id": "706313009778593793"
    },
    {
        "texto": "Van a estrenar maze runner este mes en la tele y yo ya la vi 12 veces pero no importa porque gordafan re emocion",
        "id": "706238982091358208"
    },
    {
        "texto": "Soy exagerada al punto que aunque tenga apenas un dolor tomo ibuprofeno 600/plus/forte/etc ya veo porque soy tan boluda vieron yo sabia",
        "id": "705911765847171072"
    },
    { "texto": "Deadpool round dos s s s", "id": "705483402087157760" },
    {
        "texto": "Pretenden que porque mi hermana empezo el colegio yo me tengo que levantar con ella a las 9 JAJAJAJAJAJAJAJAJAJA PERATE QUE ME RIO UN TOQUE",
        "id": "705039514331439104"
    },
    {
        "texto": "Corte cebolla usando antiparras porque minita siempre.",
        "id": "704806472132268032"
    },
    {
        "texto": "Tambien me pregunto por que escribi tan mal ese tuit yisus",
        "id": "704695552735313921"
    },
    {
        "texto": "Me hago 2 preguntas\n1) por que mi hermana etiqueto a au curso en una foto de ella\n2) POR QUE ABREVIO SECUNDARIA.COMO 'CQ' ????????????",
        "id": "704694791200755712"
    },
    {
        "texto": "Me levante con el pelo en un estado que no se sabe si es ondulado por una trenza o rulos remal planchados. Buen martes",
        "id": "704641981792784384"
    },
    {
        "texto": "Yo voy a estar lista para ser adulta el dia despues de haber ido a ver a justin bieber en vivo es fija",
        "id": "704357187838218241"
    },
    {
        "texto": "Me voy a ir a dormir de re buen humor les juro",
        "id": "704171087098208256"
    },
    {
        "texto": "Vamos leo que lo tenias mas que merecido, por todos los trabajos increibles",
        "id": "704168653479137280"
    },
    { "texto": "VAMOOOOOOOOOOOOOOOOOOOOO", "id": "704168082680500226" },
    { "texto": "Llego el momento chicos", "id": "704167285477482496" },
    {
        "texto": "O gana brie larson o cate blanchett no se piensa mucho",
        "id": "704165882180849664"
    },
    {
        "texto": "Termina esto y sale maraton fuerte de arrow olvidate",
        "id": "704159222934716417"
    },
    { "texto": "Dios mio gaga, como te admiro", "id": "704159012619722753" },
    {
        "texto": "Chicoa que empiecen ya yisus quiero ver a eddieeeeee",
        "id": "704102990194597888"
    },
    {
        "texto": "Todos en la familia rezando para que Leo gane hoy. Somos fans",
        "id": "704017230057619456"
    },
    {
        "texto": "Deadpool \ud83d\ude46\ud83c\udffb\ud83d\ude46\ud83c\udffb\ud83d\ude46\ud83c\udffb",
        "id": "703677661969817606"
    },
    {
        "texto": "Increible lo adictivas que son las pastillitas de clight, me bajo 5 paquetes en 10 minutos",
        "id": "703383096343846913"
    },
    {
        "texto": "Amo lo lindo que me quedo el pelo despues de cortarmelo, lo amo mallllll",
        "id": "703011335743926273"
    },
    {
        "texto": "Accidentalmente entre en #TeenWolf ABORTEN ALERTA POR SPOILERS REPITO ABORTEN",
        "id": "702345276397395969"
    },
    {
        "texto": "Se llega a saber quien es el bicho gigante ese y les juro que nose como voy a hacer para superarlo",
        "id": "702328325591719937"
    },
    {
        "texto": "Esta cuenta me pone las escenas estas y nose si reirme o llorar o enojarme juajua",
        "id": "702325828894515200"
    },
    { "texto": "Que hago viendo spider man que", "id": "702179587074166784" },
    {
        "texto": "Es muy tragico cuando un actor que te gusta tiene pocas peliculas lloro quiero verlo mas delen",
        "id": "701928412689145856"
    },
    {
        "texto": "Literal una semana sin cortar o despintarme las u\u00f1as aplaudan este logro chicos",
        "id": "701926481669308418"
    },
    {
        "texto": "'Aaah yo vi toda la cosa, primero hicieron ustedes wow, y luego nosotros WOOOOW, y entonces ustedes ooooh'",
        "id": "701224757430247424"
    },
    {
        "texto": "No paro de reirme con los videos que sube Marley \ud83d\ude02\ud83d\ude02",
        "id": "701130990341726208"
    },
    {
        "texto": "Mi vieja mi hermana y yo viendo Never Say Never nos amo",
        "id": "700727482337648641"
    },
    {
        "texto": "El 'limpiemos la casa' viene con el 'pero pongo musica al mango' incluido. Es fija",
        "id": "700442860236177408"
    },
    {
        "texto": "\"+ILEEEE  ILEILEILEEEEEEE\n- DIOS MIO QUE PASO\n+ Nada que me aburro\" \nAh na la requete mato aca",
        "id": "700093847339192321"
    },
    {
        "texto": "Arroba seriesbang me pones los episodios subtitulados dale que si mil grax besi",
        "id": "700091172719562752"
    },
    {
        "texto": "Se me actualizo el whatsapp y no estoy pudiendo contenerme de plaguear con los nuevos emojissss",
        "id": "700054050352603136"
    },
    {
        "texto": "Le dijeron a una amiga de mi hermana que se iban a brasil y antes de subirse al avion le dijeron que a Disney. Para cuando me pasa a mi?????",
        "id": "699372667401588736"
    },
    {
        "texto": "Oficialmente te digo CHAUCHAU AGUSTIIII",
        "id": "699271007899623425"
    },
    {
        "texto": "Amo este dia porque me pasan todas las peliculas de amor que me vi un millon de veces pero las sigo viendo porque fan",
        "id": "698908547053187072"
    },
    {
        "texto": "Que les gusta de dormir con lluvia nonono me agarra panico insonorizame la pieza y la casa entera porfi",
        "id": "698366674085486592"
    },
    {
        "texto": "Todo el viaje mirando el sol ya veo blanco les juro, lo que me cuesta escribir esto",
        "id": "697912705911517185"
    }
]
