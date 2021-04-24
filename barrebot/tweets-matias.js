const tweets = [
    {
        "texto": "Desde la pileta a todos nos gusta el verano, los invito a viajar en subte en hora pico a ver si piensan igual.",
        "id": "814885476498817024"
    },
    { "texto": "\u26aa\u2764\u26aa", "id": "808078371989180416" },
    {
        "texto": "La ultima media hora es siempre eterna",
        "id": "804472708432011265"
    },
    {
        "texto": "A ver quien me despierta hoy para ir a laburar...",
        "id": "801718073648627712"
    },
    {
        "texto": "Tengo parcial ma\u00f1ana y empece a estudiar recien, no importa cuando leas esto.",
        "id": "794374367065018368"
    },
    {
        "texto": "Volvi a la facu despues de una semana y me meti en una clase sin saber que materia era",
        "id": "790888430964183040"
    },
    {
        "texto": "UNA vez que voy a trabajar en tren, hay paro.",
        "id": "758731658480660483"
    },
    {
        "texto": "En un mundo paralelo se van a encontraaaaaaar",
        "id": "736772205732827136"
    },
    {
        "texto": "Hace cuanto que no disfrutaba un buen feriado",
        "id": "735540719411167232"
    },
    {
        "texto": "Que cosa del demonio es el \"tren rapido\", esta pensado solo para jodernos a los distraidos",
        "id": "732744063607275520"
    },
    { "texto": "Huevo y actitud.", "id": "731548521359376386" },
    {
        "texto": "Lo unico en lo que puedo pensar ahora es en la gloriosa siesta que me voy a clavar en el colectivo.",
        "id": "729711331989987329"
    },
    {
        "texto": "Como era eso de salir y tener vida social?",
        "id": "729129952092794880"
    },
    {
        "texto": "Hoy tengo ganas de ir a la facu solo porque inaguraron el metrobus",
        "id": "725668327604011008"
    },
    {
        "texto": "Creo que estoy hace 10 minutos facil abajo del tunel de avenida san martin",
        "id": "722031486417899522"
    },
    { "texto": "Lindo dia y con sorpresa incluida", "id": "720451778542727168" },
    {
        "texto": "Ayer falte a clase por quedarme dormido y hoy me entero que la profesora no fue, eso si que es triunfar \ud83d\ude0e",
        "id": "719927160782393344"
    },
    {
        "texto": "Segunda semana y ya me quedo dormido, vamos bien.",
        "id": "719488974910320640"
    },
    { "texto": "Que sabado tan domingo", "id": "718907663812280321" },
    {
        "texto": "Ma\u00f1ana empiezo el cbc y ya me estan diciendo que hay paro",
        "id": "716740706023432192"
    },
    { "texto": "Que larva asquerosa que soy", "id": "715248362996559874" },
    { "texto": "Nada como la comodidad de tu cama", "id": "713656383594479616" },
    { "texto": "Clave siesta de 6 horas", "id": "708840080740319233" },
    { "texto": "El 221 del amor", "id": "694655175089377280" },
    {
        "texto": "Que hermosa esta ciudad nunca me canso de decirlo",
        "id": "693926215707693056"
    },
    { "texto": "Saquenme de aca por favorrr", "id": "693600819443318784" },
    {
        "texto": "Es t\u00edpico que esperas un bondi y pasan TODOS menos ese.",
        "id": "689537138636017664"
    },
    {
        "texto": "Que horrible sentir culpa y no poder hacer nada",
        "id": "685968638193602560"
    },
    {
        "texto": "Nada mas molesto que un pibe caprichoso",
        "id": "684874660681494528"
    },
    {
        "texto": "Nunca arme un bolso tan r\u00e1pido en mi vida y dudo muchisimo volver a hacerlo",
        "id": "682448727324397571"
    },
    {
        "texto": "Solo por vos madrugo a esta hora en vacaciones.",
        "id": "678522180884439044"
    },
    { "texto": "Tremenda noche a pesar de todo,", "id": "674891660237611008" },
    {
        "texto": "Como le duele al bolsillo estar en sexto",
        "id": "674438316285157376"
    },
    {
        "texto": "Es lunes y no caigo que esta es mi ultima semana de clases",
        "id": "671267953648758784"
    },
    { "texto": "Noche para el olvido.", "id": "667791367121313792" },
    { "texto": "Que lindo dormir con esta lluvia", "id": "663917252840972288" },
    {
        "texto": "Yo no se por donde entra el agua pero cuando llueve mi zapato se inunda",
        "id": "659770522616651778"
    },
    {
        "texto": "Ultima vez que salgo a la fiesta de un colegio injunable",
        "id": "658534982844096512"
    },
    { "texto": "Se viene un dia de mierda", "id": "653251085595996160" },
    {
        "texto": "No entiendo que esperan que conteste cuando preguntan como te fue en bariloche",
        "id": "648180591922429953"
    },
    {
        "texto": "Como se hace para ir al colegio si sigo so\u00f1ando con bariloche y me despierto pensando que estoy alla?",
        "id": "647346540160417792"
    },
    { "texto": "Terrible la depresion post viaje", "id": "646726609144291329" },
    { "texto": "Nos re vimo en brc", "id": "642736513671938048" },
    { "texto": "Y yo te tenia fe...", "id": "638517260831846400" },
    {
        "texto": "Hermoso finde con amigos y familia, que mas puedo pedir?",
        "id": "638143951220903937"
    },
    {
        "texto": "Como vas a quedarte encerrado con un dia asi ???",
        "id": "637715820991393792"
    },
    {
        "texto": "San agustin siempre va a ser una coca, un alfajor y salir con amigos",
        "id": "637255630240264192"
    },
    {
        "texto": "Este dia hay que usarlo bien porque es el unico del a\u00f1o que el agusti no tiene clases y los demas colegios si",
        "id": "637211328294338560"
    },
    {
        "texto": "Que bronca la gente que se la pasa pidiendo perdon y repitiendo los mismos errores",
        "id": "635024531925671936"
    },
    { "texto": "Menta, nunca mas.", "id": "635024064571142144" },
    { "texto": "Como era eso de estudiar??", "id": "633404753742008321" },
    {
        "texto": "Yyy siiiii se\u00f1or  de la mano del mu\u00f1eco vamo a japon",
        "id": "629129468511186944"
    },
    {
        "texto": "Que vaaaas a hacer si vos no tenes los huevos de river plate",
        "id": "629129286600011777"
    },
    {
        "texto": "La pizza fria te salva de todo, en especial del hambre a la madrugada.",
        "id": "626654218854748160"
    },
    {
        "texto": "Van a ser las dos de la tarde y la cama no me quiere soltar",
        "id": "624980466098171904"
    },
    {
        "texto": "Que lindo desactivar la alarma del colegio por estas dos semanas",
        "id": "622991761607131136"
    },
    { "texto": "Jimu capa", "id": "622573982575935488" },
    { "texto": "Hola", "id": "622573868335656960" },
    { "texto": "Jimu potra capa la mejor de todas", "id": "622573836547047424" },
    { "texto": "Mora quedate porfavoor", "id": "621131159142051840" },
    {
        "texto": "Oreos ba\u00f1adas en chocolate \ud83d\ude0d",
        "id": "617779317515358208"
    },
    {
        "texto": "Mas alla de la copa lo importante ahora es cerrarle el culo a chile",
        "id": "616053942452142080"
    },
    {
        "texto": "-No me acuerdo como se llama la gente que cura todo haci\u00e9ndote masajes en los pies\n+Yo si, delincuentes.",
        "id": "613376420807622656"
    },
    {
        "texto": "SI hay algo que odio de naturales son los videos que nos manda a ver Eusa",
        "id": "611297461840269313"
    },
    { "texto": "Sobra gente que habla sin pensar.", "id": "610877460025069569" },
    { "texto": "Mi pobre celular no da para mas.", "id": "608805677851680769" },
    {
        "texto": "Que garcha tener que estudiar estudiar religion",
        "id": "605179065025347584"
    },
    {
        "texto": "Se me re pegaron y no puedo dejar de cantar las canciones de naturales",
        "id": "603248003084857345"
    },
    {
        "texto": "Osvlaldo se ira a patear a china con gigliotti?",
        "id": "602612572752375808"
    },
    {
        "texto": "Hay demasiada gente enferma en el mundo",
        "id": "600824828497629187"
    },
    {
        "texto": "Que ASCO da la actitud de los jugadores, como van a festejar esta locura?",
        "id": "599052217367273472"
    },
    {
        "texto": "Esto es boca, la verguenza de Argentina",
        "id": "599019984879235072"
    },
    {
        "texto": "Las cosas no pasan por algo, solo pasan.",
        "id": "598324728135299072"
    },
    {
        "texto": "No hay nada mejor que llegar a tu casa y acostarte en tu cama.",
        "id": "596916636508147712"
    },
    { "texto": "LA siesta.", "id": "595706231542648832" },
    {
        "texto": "Que lindo dia y yo encerrado en casa",
        "id": "592420846020464641"
    },
    {
        "texto": "Lo \u00fanico que entend\u00ed de gen\u00e9tica es que ma\u00f1ana me cojen.",
        "id": "587807066661773312"
    },
    { "texto": "Hoy hay que ganar!", "id": "585969244040536065" },
    {
        "texto": "Tengo que aprender a dejar de boludear a la gente cuando me hablan serio",
        "id": "583111048942784512"
    },
    {
        "texto": "Que orto que tienen estos mexicanos dios mio..",
        "id": "573636077979889665"
    },
    { "texto": "Que viejo de mierda ese remisero.", "id": "564317876350636032" },
    { "texto": "Yo quiero el #RelojCARPoficial", "id": "562822178975268865" },
    {
        "texto": "Amo esta ciudad y no la cambio por nada.",
        "id": "562156421849305089"
    },
    {
        "texto": "La despedida es muy fuerte aunque nos volvamos a ver todos en una semana.",
        "id": "562078261040386049"
    },
    {
        "texto": "Mi mama me habla por watsapp estando los 2 arriba del mismo colectivo..",
        "id": "558126895423033344"
    },
    { "texto": "Que fr\u00edoo \u2601\u2744", "id": "557323955145834498" },
    { "texto": "Desayunar pizza fria es lo mas", "id": "555711876383133696" },
    {
        "texto": "Me robaron la cama grande \ud83d\ude2d \ud83d\ude2d",
        "id": "555565242965835776"
    },
    {
        "texto": "Placeres de la vida y una cama de dos plazas para mi solo \ud83d\udc4c",
        "id": "554484508209455105"
    },
    {
        "texto": "Ya era mucho fumarme que quieran ver el desfile choto y ahora este idiota cantando!? es un insulto a cerati esto..",
        "id": "554435772598980611"
    },
    {
        "texto": "El domingo sigue siendo aburrido no importa donde estes ni lo que hagas",
        "id": "554411906069716994"
    },
    {
        "texto": "Esa edad cuando los chicos aprenden a hablar y repiten mil veces todo es hermosa.",
        "id": "554134868024905728"
    },
    {
        "texto": "Entro a ba\u00f1arme y me encuentro un escorpion muerto.",
        "id": "552978895138750464"
    },
    {
        "texto": "Tengo que empezar a usar protector solar, me arde todoo",
        "id": "552232891313561600"
    },
    { "texto": "Me fui a Mardel \ud83d\udc4b", "id": "551644070570106880" },
    {
        "texto": "A pedido del pueblo, me hice el twitter",
        "id": "551190394835599360"
    }
]
