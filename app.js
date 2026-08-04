const DATA='./';
const APP_VERSION='3.1.24';
const CACHE_PREFIX='biblia-estudio-';
// Los 2.077 títulos RVR1960 están incrustados en el código principal para evitar fallos de caché o carga externa.
const BUILTIN_TITLES_EMBEDDED={"genesis":{"1":[{"versiculo":1,"titulo":"La creación"}],"2":[{"versiculo":4,"titulo":"El hombre en el huerto de Edén"}],"3":[{"versiculo":1,"titulo":"Desobediencia del hombre"}],"4":[{"versiculo":1,"titulo":"Caín y Abel"}],"5":[{"versiculo":1,"titulo":"Los descendientes de Adán"}],"6":[{"versiculo":1,"titulo":"La maldad de los hombres"},{"versiculo":9,"titulo":"Noé construye el arca"}],"7":[{"versiculo":1,"titulo":"El diluvio"}],"9":[{"versiculo":1,"titulo":"Pacto de Dios con Noé"},{"versiculo":18,"titulo":"Embriaguez de Noé"}],"10":[{"versiculo":1,"titulo":"Los descendientes de los hijos de Noé"}],"11":[{"versiculo":1,"titulo":"La torre de Babel"},{"versiculo":10,"titulo":"Los descendientes de Sem"},{"versiculo":27,"titulo":"Los descendientes de Taré"}],"12":[{"versiculo":1,"titulo":"Dios llama a Abram"},{"versiculo":10,"titulo":"Abram en Egipto"}],"13":[{"versiculo":1,"titulo":"Abram y Lot se separan"}],"14":[{"versiculo":1,"titulo":"Abram liberta a Lot"},{"versiculo":17,"titulo":"Melquisedec bendice a Abram"}],"15":[{"versiculo":1,"titulo":"Dios promete a Abram un hijo"}],"16":[{"versiculo":1,"titulo":"Agar e Ismael"}],"17":[{"versiculo":1,"titulo":"La circuncisión, señal del pacto"}],"18":[{"versiculo":1,"titulo":"Promesa del nacimiento de Isaac"},{"versiculo":16,"titulo":"Abraham intercede por Sodoma"}],"19":[{"versiculo":1,"titulo":"Destrucción de Sodoma y Gomorra"}],"20":[{"versiculo":1,"titulo":"Abraham y Abimelec"}],"21":[{"versiculo":1,"titulo":"Nacimiento de Isaac"},{"versiculo":8,"titulo":"Agar e Ismael son echados de la casa de Abraham"},{"versiculo":22,"titulo":"Pacto entre Abraham y Abimelec"}],"22":[{"versiculo":1,"titulo":"Dios ordena a Abraham que sacrifique a Isaac"}],"23":[{"versiculo":1,"titulo":"Muerte y sepultura de Sara"}],"24":[{"versiculo":1,"titulo":"Abraham busca esposa para Isaac"}],"25":[{"versiculo":1,"titulo":"Los descendientes de Abraham y Cetura"},{"versiculo":7,"titulo":"Muerte y sepultura de Abraham"},{"versiculo":12,"titulo":"Los descendientes de Ismael"},{"versiculo":19,"titulo":"Nacimiento de Jacob y Esaú"},{"versiculo":27,"titulo":"Esaú vende su primogenitura"}],"26":[{"versiculo":1,"titulo":"Isaac en Gerar"}],"27":[{"versiculo":1,"titulo":"Jacob obtiene la bendición de Isaac"},{"versiculo":41,"titulo":"Jacob huye de Esaú"}],"28":[{"versiculo":10,"titulo":"Dios se aparece a Jacob en Bet-el"}],"29":[{"versiculo":1,"titulo":"Jacob sirve a Labán por Raquel y Lea"},{"versiculo":31,"titulo":"Los hijos de Jacob"}],"30":[{"versiculo":25,"titulo":"Tretas de Jacob y de Labán"}],"31":[{"versiculo":17,"titulo":"Jacob huye de Labán"}],"32":[{"versiculo":1,"titulo":"Jacob se prepara para el encuentro con Esaú"},{"versiculo":22,"titulo":"Jacob lucha con el ángel en Peniel"}],"33":[{"versiculo":1,"titulo":"Reconciliación entre Jacob y Esaú"}],"34":[{"versiculo":1,"titulo":"La deshonra de Dina vengada"}],"35":[{"versiculo":1,"titulo":"Dios bendice a Jacob en Bet-el"},{"versiculo":16,"titulo":"Muerte de Raquel"},{"versiculo":22,"titulo":"Los hijos de Jacob"},{"versiculo":27,"titulo":"Muerte de Isaac"}],"36":[{"versiculo":1,"titulo":"Los descendientes de Esaú"}],"37":[{"versiculo":1,"titulo":"José es vendido por sus hermanos"}],"38":[{"versiculo":1,"titulo":"Judá y Tamar"}],"39":[{"versiculo":1,"titulo":"José y la esposa de Potifar"}],"40":[{"versiculo":1,"titulo":"José interpreta dos sueños"}],"41":[{"versiculo":1,"titulo":"José interpreta el sueño de Faraón"},{"versiculo":37,"titulo":"José, gobernador de Egipto"}],"42":[{"versiculo":1,"titulo":"Los hermanos de José vienen por alimentos"}],"43":[{"versiculo":1,"titulo":"Los hermanos de José regresan con Benjamín"}],"44":[{"versiculo":1,"titulo":"La copa de José"},{"versiculo":18,"titulo":"Judá intercede por Benjamín"}],"45":[{"versiculo":1,"titulo":"José se da a conocer a sus hermanos"}],"46":[{"versiculo":1,"titulo":"Jacob y su familia en Egipto"}],"48":[{"versiculo":1,"titulo":"Jacob bendice a Efraín y a Manasés"}],"49":[{"versiculo":1,"titulo":"Profecía de Jacob acerca de sus hijos"},{"versiculo":28,"titulo":"Muerte y sepelio de Jacob"}],"50":[{"versiculo":15,"titulo":"Muerte de José"}]},"exodo":{"1":[{"versiculo":1,"titulo":"Aflicción de los israelitas en Egipto"}],"2":[{"versiculo":1,"titulo":"Nacimiento de Moisés"},{"versiculo":11,"titulo":"Moisés huye de Egipto"}],"3":[{"versiculo":1,"titulo":"Llamamiento de Moisés"}],"4":[{"versiculo":18,"titulo":"Moisés vuelve a Egipto"}],"5":[{"versiculo":1,"titulo":"Moisés y Aarón ante Faraón"},{"versiculo":22,"titulo":"Jehová comisiona a Moisés y a Aarón"}],"7":[{"versiculo":8,"titulo":"La vara de Aarón"},{"versiculo":14,"titulo":"La plaga de sangre"}],"8":[{"versiculo":1,"titulo":"La plaga de ranas"},{"versiculo":16,"titulo":"La plaga de piojos"},{"versiculo":20,"titulo":"La plaga de moscas"}],"9":[{"versiculo":1,"titulo":"La plaga en el ganado"},{"versiculo":8,"titulo":"La plaga de úlceras"},{"versiculo":13,"titulo":"La plaga de granizo"}],"10":[{"versiculo":1,"titulo":"La plaga de langostas"},{"versiculo":21,"titulo":"La plaga de tinieblas"}],"11":[{"versiculo":1,"titulo":"Anunciada la muerte de los primogénitos"}],"12":[{"versiculo":1,"titulo":"La pascua"},{"versiculo":29,"titulo":"Muerte de los primogénitos"},{"versiculo":37,"titulo":"Los israelitas salen de Egipto"}],"13":[{"versiculo":1,"titulo":"Consagración de los primogénitos"},{"versiculo":17,"titulo":"La columna de nube y de fuego"}],"14":[{"versiculo":1,"titulo":"Los israelitas cruzan el Mar Rojo"}],"15":[{"versiculo":1,"titulo":"Cántico de Moisés y de María"},{"versiculo":22,"titulo":"El agua amarga de Mara"}],"16":[{"versiculo":1,"titulo":"Dios da el maná"}],"17":[{"versiculo":1,"titulo":"Agua de la roca"},{"versiculo":8,"titulo":"Guerra con Amalec"}],"18":[{"versiculo":1,"titulo":"Jetro visita a Moisés"},{"versiculo":13,"titulo":"Nombramiento de jueces"}],"19":[{"versiculo":1,"titulo":"Israel en Sinaí"}],"20":[{"versiculo":1,"titulo":"Los Diez Mandamientos"},{"versiculo":18,"titulo":"El terror del pueblo"}],"21":[{"versiculo":1,"titulo":"Leyes sobre los esclavos"},{"versiculo":12,"titulo":"Leyes sobre actos de violencia"},{"versiculo":26,"titulo":"Leyes sobre responsabilidades de amos y dueños"}],"22":[{"versiculo":1,"titulo":"Leyes sobre la restitución"},{"versiculo":16,"titulo":"Leyes humanitarias"}],"23":[{"versiculo":14,"titulo":"Las tres fiestas anuales"},{"versiculo":20,"titulo":"El Ángel de Jehová enviado para guiar a Israel"}],"24":[{"versiculo":1,"titulo":"Moisés y los ancianos en el monte Sinaí"}],"25":[{"versiculo":1,"titulo":"La ofrenda para el tabernáculo"},{"versiculo":10,"titulo":"El arca del testimonio"},{"versiculo":23,"titulo":"La mesa para el pan de la proposición"},{"versiculo":31,"titulo":"El candelero de oro"}],"26":[{"versiculo":1,"titulo":"El tabernáculo"}],"27":[{"versiculo":1,"titulo":"El altar de bronce"},{"versiculo":9,"titulo":"El atrio del tabernáculo"},{"versiculo":20,"titulo":"Aceite para las lámparas"}],"28":[{"versiculo":1,"titulo":"Las vestiduras de los sacerdotes"}],"29":[{"versiculo":1,"titulo":"Consagración de Aarón y de sus hijos"},{"versiculo":38,"titulo":"Las ofrendas diarias"}],"30":[{"versiculo":1,"titulo":"El altar del incienso"},{"versiculo":11,"titulo":"El dinero del rescate"},{"versiculo":17,"titulo":"La fuente de bronce"},{"versiculo":22,"titulo":"El aceite de la unción, y el incienso"}],"31":[{"versiculo":1,"titulo":"Llamamiento de Bezaleel y de Aholiab"},{"versiculo":12,"titulo":"El día de reposo como señal"},{"versiculo":18,"titulo":"El becerro de oro"}],"33":[{"versiculo":1,"titulo":"La presencia de Dios prometida"}],"34":[{"versiculo":1,"titulo":"El pacto renovado"},{"versiculo":11,"titulo":"Advertencia contra la idolatría de Canaán"},{"versiculo":18,"titulo":"Fiestas anuales"},{"versiculo":27,"titulo":"Moisés y las tablas de la ley"}],"35":[{"versiculo":1,"titulo":"Reglamento del día de reposo"},{"versiculo":4,"titulo":"La ofrenda para el tabernáculo"},{"versiculo":10,"titulo":"La obra del tabernáculo"},{"versiculo":20,"titulo":"El pueblo trae la ofrenda"},{"versiculo":30,"titulo":"Llamamiento de Bezaleel y de Aholiab"}],"36":[{"versiculo":2,"titulo":"Moisés suspende la ofrenda del pueblo"},{"versiculo":8,"titulo":"Construcción del tabernáculo"}],"37":[{"versiculo":1,"titulo":"Mobiliario del tabernáculo"}],"38":[{"versiculo":9,"titulo":"El atrio del tabernáculo"},{"versiculo":21,"titulo":"Dirección de la obra"},{"versiculo":24,"titulo":"Metales usados en el santuario"}],"39":[{"versiculo":1,"titulo":"Hechura de las vestiduras de los sacerdotes"},{"versiculo":32,"titulo":"La obra del tabernáculo terminada"}],"40":[{"versiculo":1,"titulo":"Moisés erige el tabernáculo"},{"versiculo":34,"titulo":"La nube sobre el tabernáculo"}]},"levitico":{"1":[{"versiculo":1,"titulo":"Los holocaustos"}],"2":[{"versiculo":1,"titulo":"Las ofrendas"}],"3":[{"versiculo":1,"titulo":"Ofrendas de paz"}],"4":[{"versiculo":1,"titulo":"Ofrendas por el pecado"}],"5":[{"versiculo":14,"titulo":"Ofrendas expiatorias"}],"6":[{"versiculo":8,"titulo":"Leyes de los sacrificios"}],"8":[{"versiculo":1,"titulo":"Consagración de Aarón y de sus hijos"}],"9":[{"versiculo":1,"titulo":"Los sacrificios de Aarón"}],"10":[{"versiculo":1,"titulo":"El pecado de Nadab y Abiú"}],"11":[{"versiculo":1,"titulo":"Animales limpios e inmundos"}],"12":[{"versiculo":1,"titulo":"La purificación de la mujer después del parto"}],"13":[{"versiculo":1,"titulo":"Leyes acerca de la lepra"}],"15":[{"versiculo":1,"titulo":"Impurezas físicas"}],"16":[{"versiculo":1,"titulo":"El día de la expiación"}],"17":[{"versiculo":1,"titulo":"El santuario único"},{"versiculo":10,"titulo":"Prohibición de comer la sangre"}],"18":[{"versiculo":1,"titulo":"Actos de inmoralidad prohibidos"}],"19":[{"versiculo":1,"titulo":"Leyes de santidad y de justicia"}],"20":[{"versiculo":1,"titulo":"Penas por actos de inmoralidad"}],"21":[{"versiculo":1,"titulo":"Santidad de los sacerdotes"}],"22":[{"versiculo":1,"titulo":"Santidad de las ofrendas"}],"23":[{"versiculo":1,"titulo":"Las fiestas solemnes"}],"24":[{"versiculo":1,"titulo":"Aceite para las lámparas"},{"versiculo":5,"titulo":"El pan de la proposición"},{"versiculo":10,"titulo":"Castigo del blasfemo"}],"25":[{"versiculo":1,"titulo":"El año de reposo de la tierra y el año del jubileo"}],"26":[{"versiculo":1,"titulo":"Bendiciones de la obediencia"},{"versiculo":14,"titulo":"Consecuencias de la desobediencia"}],"27":[{"versiculo":1,"titulo":"Cosas consagradas a Dios"}]},"numeros":{"1":[{"versiculo":1,"titulo":"Censo de Israel en Sinaí"},{"versiculo":47,"titulo":"Nombramiento de los levitas"}],"2":[{"versiculo":1,"titulo":"Campamentos y jefes de las tribus"}],"3":[{"versiculo":1,"titulo":"Censo y deberes de los levitas"},{"versiculo":40,"titulo":"Rescate de los primogénitos"}],"4":[{"versiculo":1,"titulo":"Tareas de los levitas"}],"5":[{"versiculo":1,"titulo":"Todo inmundo es echado fuera del campamento"},{"versiculo":5,"titulo":"Ley sobre la restitución"},{"versiculo":11,"titulo":"Ley sobre los celos"}],"6":[{"versiculo":1,"titulo":"El voto de los nazareos"},{"versiculo":22,"titulo":"La bendición sacerdotal"}],"7":[{"versiculo":1,"titulo":"Ofrendas para la dedicación del altar"}],"8":[{"versiculo":1,"titulo":"Aarón enciende las lámparas"},{"versiculo":5,"titulo":"Consagración de los levitas"}],"9":[{"versiculo":1,"titulo":"Celebración de la pascua"},{"versiculo":15,"titulo":"La nube sobre el tabernáculo"}],"10":[{"versiculo":1,"titulo":"Las trompetas de plata"},{"versiculo":11,"titulo":"Los israelitas salen de Sinaí"}],"11":[{"versiculo":1,"titulo":"Jehová envía codornices"}],"12":[{"versiculo":1,"titulo":"María y Aarón murmuran contra Moisés"}],"13":[{"versiculo":1,"titulo":"Misión de los doce espías"}],"14":[{"versiculo":1,"titulo":"Los israelitas se rebelan contra Jehová"},{"versiculo":20,"titulo":"Jehová castiga a Israel"},{"versiculo":36,"titulo":"Muerte de los diez espías malvados"},{"versiculo":39,"titulo":"La derrota en Horma"}],"15":[{"versiculo":1,"titulo":"Leyes sobre las ofrendas"},{"versiculo":32,"titulo":"Lapidación de un violador del día de reposo"},{"versiculo":37,"titulo":"Franjas en los vestidos"}],"16":[{"versiculo":1,"titulo":"La rebelión de Coré"}],"17":[{"versiculo":1,"titulo":"La vara de Aarón florece"}],"18":[{"versiculo":1,"titulo":"Sostenimiento de sacerdotes y levitas"}],"19":[{"versiculo":1,"titulo":"La purificación de los inmundos"}],"20":[{"versiculo":1,"titulo":"Agua de la roca"},{"versiculo":14,"titulo":"Edom rehúsa dar paso a Israel"},{"versiculo":22,"titulo":"Aarón muere en el monte Hor"}],"21":[{"versiculo":1,"titulo":"El rey de Arad ataca a Israel"},{"versiculo":4,"titulo":"La serpiente de bronce"},{"versiculo":10,"titulo":"Los israelitas rodean la tierra de Moab"},{"versiculo":21,"titulo":"Israel derrota a Sehón"},{"versiculo":31,"titulo":"Israel derrota a Og de Basán"}],"22":[{"versiculo":1,"titulo":"Balac manda llamar a Balaam"},{"versiculo":21,"titulo":"El ángel y el asna de Balaam"},{"versiculo":41,"titulo":"Balaam bendice a Israel"}],"24":[{"versiculo":10,"titulo":"Profecía de Balaam"}],"25":[{"versiculo":1,"titulo":"Israel acude a Baal-peor"}],"26":[{"versiculo":1,"titulo":"Censo del pueblo en Moab"},{"versiculo":52,"titulo":"Orden para la repartición de la tierra"},{"versiculo":57,"titulo":"Censo de la tribu de Leví"},{"versiculo":63,"titulo":"Caleb y Josué sobreviven"}],"27":[{"versiculo":1,"titulo":"Petición de las hijas de Zelofehad"},{"versiculo":12,"titulo":"Josué es designado como sucesor de Moisés"}],"28":[{"versiculo":1,"titulo":"Las ofrendas diarias"},{"versiculo":9,"titulo":"Ofrendas mensuales y del día de reposo"},{"versiculo":16,"titulo":"Ofrendas de las fiestas solemnes"}],"30":[{"versiculo":1,"titulo":"Ley de los votos"}],"31":[{"versiculo":1,"titulo":"Venganza de Israel contra Madián"},{"versiculo":21,"titulo":"Repartición del botín"}],"32":[{"versiculo":1,"titulo":"Rubén y Gad se establecen al oriente del Jordán"}],"33":[{"versiculo":1,"titulo":"Jornadas de Israel desde Egipto hasta el Jordán"},{"versiculo":50,"titulo":"Límites y repartición de Canaán"}],"35":[{"versiculo":1,"titulo":"Herencia de los levitas"},{"versiculo":9,"titulo":"Ciudades de refugio"},{"versiculo":29,"titulo":"Ley sobre los testigos y sobre el rescate"}],"36":[{"versiculo":1,"titulo":"Ley del casamiento de las herederas"}]},"deuteronomio":{"1":[{"versiculo":1,"titulo":"Moisés recuerda a Israel las promesas de Jehová en Horeb"},{"versiculo":9,"titulo":"Nombramiento de jueces"},{"versiculo":19,"titulo":"Misión de los doce espías"},{"versiculo":34,"titulo":"Dios castiga a Israel"},{"versiculo":41,"titulo":"La derrota en Horma"}],"2":[{"versiculo":1,"titulo":"Los años en el desierto"},{"versiculo":26,"titulo":"Israel derrota a Sehón"}],"3":[{"versiculo":1,"titulo":"Israel derrota a Og rey de Basán"},{"versiculo":12,"titulo":"Rubén, Gad y la media tribu de Manasés se establecen al oriente del Jordán"},{"versiculo":23,"titulo":"No se le permite a Moisés entrar a Canaán"}],"4":[{"versiculo":1,"titulo":"Moisés exhorta a la obediencia"},{"versiculo":9,"titulo":"La experiencia de Israel en Horeb"},{"versiculo":15,"titulo":"Advertencia contra la idolatría"},{"versiculo":41,"titulo":"Las ciudades de refugio al oriente del Jordán"},{"versiculo":44,"titulo":"Moisés recapitula la promulgación de la ley"}],"5":[{"versiculo":1,"titulo":"Los Diez Mandamientos"},{"versiculo":22,"titulo":"El terror del pueblo"}],"6":[{"versiculo":1,"titulo":"El gran mandamiento"},{"versiculo":10,"titulo":"Exhortaciones a la obediencia"}],"7":[{"versiculo":1,"titulo":"Advertencias contra la idolatría de Canaán"},{"versiculo":6,"titulo":"Un pueblo santo para Jehová"},{"versiculo":12,"titulo":"Bendiciones de la obediencia"}],"8":[{"versiculo":1,"titulo":"La buena tierra que han de poseer"},{"versiculo":11,"titulo":"Amonestación de no olvidar a Dios"}],"9":[{"versiculo":1,"titulo":"Dios destruirá a las naciones de Canaán"},{"versiculo":6,"titulo":"La rebelión de Israel en Horeb"}],"10":[{"versiculo":1,"titulo":"El pacto renovado"},{"versiculo":12,"titulo":"Lo que Dios exige"}],"11":[{"versiculo":1,"titulo":"La grandeza de Jehová"},{"versiculo":8,"titulo":"Bendiciones de la tierra prometida"}],"12":[{"versiculo":1,"titulo":"El santuario único"},{"versiculo":29,"titulo":"Advertencias contra la idolatría"}],"14":[{"versiculo":3,"titulo":"Animales limpios e inmundos"},{"versiculo":22,"titulo":"La ley del diezmo"}],"15":[{"versiculo":1,"titulo":"El año de remisión"},{"versiculo":7,"titulo":"Préstamos a los pobres"},{"versiculo":12,"titulo":"Leyes sobre los esclavos"},{"versiculo":19,"titulo":"Consagración de los primogénitos machos"}],"16":[{"versiculo":1,"titulo":"Fiestas anuales"},{"versiculo":18,"titulo":"Administración de la justicia"}],"17":[{"versiculo":14,"titulo":"Instrucciones acerca de un rey"}],"18":[{"versiculo":1,"titulo":"Las porciones de los levitas"},{"versiculo":9,"titulo":"Amonestación contra costumbres paganas"},{"versiculo":15,"titulo":"Dios promete un profeta como Moisés"}],"19":[{"versiculo":1,"titulo":"Las ciudades de refugio"},{"versiculo":15,"titulo":"Leyes sobre el testimonio"}],"20":[{"versiculo":1,"titulo":"Leyes sobre la guerra"}],"21":[{"versiculo":1,"titulo":"Expiación de un asesinato cuyo autor se desconoce"},{"versiculo":10,"titulo":"Diversas leyes"}],"22":[{"versiculo":13,"titulo":"Leyes sobre la castidad"}],"23":[{"versiculo":1,"titulo":"Los excluidos de la congregación"},{"versiculo":9,"titulo":"Leyes sanitarias"},{"versiculo":15,"titulo":"Leyes humanitarias"}],"25":[{"versiculo":17,"titulo":"Orden de exterminar a Amalec"}],"26":[{"versiculo":1,"titulo":"Primicias y diezmos"}],"27":[{"versiculo":1,"titulo":"Orden de escribir la ley en piedras sobre el monte Ebal"},{"versiculo":11,"titulo":"Las maldiciones en el monte Ebal"}],"28":[{"versiculo":1,"titulo":"Bendiciones de la obediencia"},{"versiculo":15,"titulo":"Consecuencias de la desobediencia"}],"29":[{"versiculo":1,"titulo":"Pacto de Jehová con Israel en Moab"}],"30":[{"versiculo":1,"titulo":"Condiciones para la restauración y la bendición"}],"31":[{"versiculo":1,"titulo":"Josué es instalado como sucesor de Moisés"},{"versiculo":24,"titulo":"Orden de guardar la ley junto al arca"},{"versiculo":30,"titulo":"Cántico de Moisés"}],"32":[{"versiculo":48,"titulo":"Se le permite a Moisés contemplar la tierra de Canaán"}],"33":[{"versiculo":1,"titulo":"Moisés bendice a las doce tribus de Israel"}],"34":[{"versiculo":1,"titulo":"Muerte y sepultura de Moisés"}]},"josue":{"1":[{"versiculo":1,"titulo":"Preparativos para la conquista"}],"2":[{"versiculo":1,"titulo":"Josué envía espías a Jericó"}],"3":[{"versiculo":1,"titulo":"El paso del Jordán"}],"4":[{"versiculo":1,"titulo":"Las doce piedras tomadas del Jordán"}],"5":[{"versiculo":1,"titulo":"La circuncisión y la pascua en Gilgal"},{"versiculo":13,"titulo":"Josué y el varón con la espada desenvainada"}],"6":[{"versiculo":1,"titulo":"La toma de Jericó"}],"7":[{"versiculo":1,"titulo":"El pecado de Acán"}],"8":[{"versiculo":1,"titulo":"Toma y destrucción de Hai"},{"versiculo":30,"titulo":"Lectura de la ley en el monte Ebal"}],"9":[{"versiculo":1,"titulo":"Astucia de los gabaonitas"}],"10":[{"versiculo":1,"titulo":"Derrota de los amorreos"}],"11":[{"versiculo":1,"titulo":"Derrota de la alianza de Jabín"},{"versiculo":16,"titulo":"Josué se apodera de toda la tierra"}],"12":[{"versiculo":1,"titulo":"Reyes derrotados por Moisés"},{"versiculo":7,"titulo":"Reyes derrotados por Josué"}],"13":[{"versiculo":1,"titulo":"Tierra aún sin conquistar"},{"versiculo":14,"titulo":"El territorio que distribuyó Moisés"}],"14":[{"versiculo":1,"titulo":"Canaán repartida por suerte"},{"versiculo":6,"titulo":"Caleb recibe Hebrón"}],"15":[{"versiculo":1,"titulo":"El territorio de Judá"},{"versiculo":13,"titulo":"Caleb conquista Hebrón y Debir"},{"versiculo":20,"titulo":"Las ciudades de Judá"}],"16":[{"versiculo":1,"titulo":"Territorio de Efraín y de Manasés"}],"18":[{"versiculo":1,"titulo":"Territorios de las demás tribus"}],"20":[{"versiculo":1,"titulo":"Josué señala ciudades de refugio"}],"21":[{"versiculo":1,"titulo":"Ciudades de los levitas"},{"versiculo":43,"titulo":"Israel ocupa la tierra"}],"22":[{"versiculo":1,"titulo":"El altar junto al Jordán"}],"23":[{"versiculo":1,"titulo":"Exhortación de Josué al pueblo"}],"24":[{"versiculo":1,"titulo":"Discurso de despedida de Josué"},{"versiculo":29,"titulo":"Muerte de Josué"},{"versiculo":32,"titulo":"Sepultura de los huesos de José en Siquem"},{"versiculo":33,"titulo":"Muerte de Eleazar"}]},"jueces":{"1":[{"versiculo":1,"titulo":"Judá y Simeón capturan a Adoni-bezec"},{"versiculo":8,"titulo":"Judá conquista Jerusalén y Hebrón"},{"versiculo":11,"titulo":"Otoniel conquista Debir y recibe a Acsa"},{"versiculo":16,"titulo":"Extensión de las conquistas de Judá y de Benjamín"},{"versiculo":22,"titulo":"José conquista Bet-el"},{"versiculo":27,"titulo":"Extensión de las conquistas de Manasés y de Efraín"},{"versiculo":30,"titulo":"Extensión de las conquistas de las demás tribus"}],"2":[{"versiculo":1,"titulo":"El ángel de Jehová en Boquim"},{"versiculo":6,"titulo":"Muerte de Josué"},{"versiculo":11,"titulo":"Apostasía de Israel, y la obra de los jueces"}],"3":[{"versiculo":1,"titulo":"Naciones que fueron dejadas para probar a Israel"},{"versiculo":7,"titulo":"Otoniel liberta a Israel de Cusan-risataim"},{"versiculo":12,"titulo":"Aod liberta a Israel de Moab"},{"versiculo":31,"titulo":"Samgar liberta a Israel de los filisteos"}],"4":[{"versiculo":1,"titulo":"Débora y Barac derrotan a Sísara"}],"5":[{"versiculo":1,"titulo":"Cántico de Débora y de Barac"}],"6":[{"versiculo":1,"titulo":"Llamamiento de Gedeón"}],"7":[{"versiculo":1,"titulo":"Gedeón derrota a los madianitas"}],"8":[{"versiculo":1,"titulo":"Gedeón captura a los reyes de Madián"}],"9":[{"versiculo":1,"titulo":"Reinado de Abimelec"}],"10":[{"versiculo":1,"titulo":"Tola y Jair juzgan a Israel"},{"versiculo":6,"titulo":"Jefté liberta a Israel de los amonitas"}],"12":[{"versiculo":8,"titulo":"Ibzán, Elón y Abdón, jueces de Israel"}],"13":[{"versiculo":1,"titulo":"Nacimiento de Sansón"}],"14":[{"versiculo":1,"titulo":"Sansón y la mujer filistea de Timnat"}],"15":[{"versiculo":9,"titulo":"Sansón derrota a los filisteos en Lehi"}],"16":[{"versiculo":1,"titulo":"Sansón en Gaza"},{"versiculo":4,"titulo":"Sansón y Dalila"},{"versiculo":23,"titulo":"Muerte de Sansón"}],"17":[{"versiculo":1,"titulo":"Las imágenes y el sacerdote de Micaía"}],"18":[{"versiculo":1,"titulo":"Micaía y los hombres de Dan"}],"19":[{"versiculo":1,"titulo":"El levita y su concubina"}],"20":[{"versiculo":1,"titulo":"La guerra contra Benjamín"}],"21":[{"versiculo":1,"titulo":"Mujeres para los benjamitas"}]},"rut":{"1":[{"versiculo":1,"titulo":"Rut y Noemí"}],"2":[{"versiculo":1,"titulo":"Rut recoge espigas en el campo de Booz"}],"3":[{"versiculo":1,"titulo":"Rut y Booz en la era"}],"4":[{"versiculo":1,"titulo":"Booz se casa con Rut"}]},"1_samuel":{"1":[{"versiculo":1,"titulo":"Nacimiento de Samuel"}],"2":[{"versiculo":1,"titulo":"Cántico de Ana"},{"versiculo":12,"titulo":"El pecado de los hijos de Elí"}],"3":[{"versiculo":1,"titulo":"Jehová llama a Samuel"}],"4":[{"versiculo":1,"titulo":"Los filisteos capturan el arca"}],"5":[{"versiculo":1,"titulo":"El arca en tierra de los filisteos"}],"6":[{"versiculo":1,"titulo":"Los filisteos devuelven el arca"}],"7":[{"versiculo":3,"titulo":"Samuel, juez de Israel"}],"8":[{"versiculo":1,"titulo":"Israel pide rey"}],"9":[{"versiculo":1,"titulo":"Saúl es elegido rey"}],"11":[{"versiculo":1,"titulo":"Saúl derrota a los amonitas"}],"12":[{"versiculo":1,"titulo":"Discurso de Samuel al pueblo"}],"13":[{"versiculo":1,"titulo":"Guerra contra los filisteos"}],"15":[{"versiculo":1,"titulo":"Saúl desobedece y es desechado"}],"16":[{"versiculo":1,"titulo":"Samuel unge a David"},{"versiculo":14,"titulo":"David toca para Saúl"}],"17":[{"versiculo":1,"titulo":"David mata a Goliat"}],"18":[{"versiculo":1,"titulo":"Pacto de Jonatán y David"},{"versiculo":6,"titulo":"Saúl tiene celos de David"}],"19":[{"versiculo":1,"titulo":"Saúl procura matar a David"}],"20":[{"versiculo":1,"titulo":"Amistad de David y Jonatán"}],"21":[{"versiculo":1,"titulo":"David huye de Saúl"}],"22":[{"versiculo":6,"titulo":"Saúl mata a los sacerdotes de Nob"}],"23":[{"versiculo":1,"titulo":"David en el desierto"}],"24":[{"versiculo":1,"titulo":"David perdona la vida a Saúl en En-gadi"}],"25":[{"versiculo":1,"titulo":"David y Abigail"}],"26":[{"versiculo":1,"titulo":"David perdona la vida a Saúl en Zif"}],"27":[{"versiculo":1,"titulo":"David entre los filisteos"}],"28":[{"versiculo":3,"titulo":"Saúl y la adivina de Endor"}],"29":[{"versiculo":1,"titulo":"Los filisteos desconfían de David"}],"30":[{"versiculo":1,"titulo":"David derrota a los amalecitas"}],"31":[{"versiculo":1,"titulo":"Muerte de Saúl y de sus hijos"}]},"2_samuel":{"1":[{"versiculo":1,"titulo":"David oye de la muerte de Saúl"},{"versiculo":17,"titulo":"David endecha a Saúl y a Jonatán"}],"2":[{"versiculo":1,"titulo":"David es proclamado rey de Judá"},{"versiculo":8,"titulo":"Guerra entre David y la casa de Saúl"}],"3":[{"versiculo":2,"titulo":"Hijos de David nacidos en Hebrón"},{"versiculo":6,"titulo":"Abner pacta con David en Hebrón"},{"versiculo":22,"titulo":"Joab mata a Abner"}],"4":[{"versiculo":1,"titulo":"Is-boset es asesinado"}],"5":[{"versiculo":1,"titulo":"David es proclamado rey de Israel"},{"versiculo":6,"titulo":"David toma la fortaleza de Sion"},{"versiculo":11,"titulo":"Hiram envía embajadores a David"},{"versiculo":13,"titulo":"Hijos de David nacidos en Jerusalén"},{"versiculo":17,"titulo":"David derrota a los filisteos"}],"6":[{"versiculo":1,"titulo":"David intenta llevar el arca a Jerusalén"},{"versiculo":12,"titulo":"David trae el arca a Jerusalén"}],"7":[{"versiculo":1,"titulo":"Pacto de Dios con David"}],"8":[{"versiculo":1,"titulo":"David extiende sus dominios"},{"versiculo":15,"titulo":"Oficiales de David"}],"9":[{"versiculo":1,"titulo":"Bondad de David hacia Mefi-boset"}],"10":[{"versiculo":1,"titulo":"Derrotas de amonitas y sirios"}],"11":[{"versiculo":1,"titulo":"David y Betsabé"}],"12":[{"versiculo":1,"titulo":"Natán amonesta a David"},{"versiculo":26,"titulo":"David captura Rabá"}],"13":[{"versiculo":1,"titulo":"Amnón y Tamar"},{"versiculo":20,"titulo":"Venganza y huida de Absalón"}],"14":[{"versiculo":1,"titulo":"Joab procura el regreso de Absalón"}],"15":[{"versiculo":1,"titulo":"Absalón se subleva contra David"}],"17":[{"versiculo":1,"titulo":"Consejos de Ahitofel y de Husai"}],"18":[{"versiculo":1,"titulo":"Muerte de Absalón"}],"19":[{"versiculo":1,"titulo":"David vuelve a Jerusalén"}],"20":[{"versiculo":1,"titulo":"Sublevación de Seba"},{"versiculo":23,"titulo":"Oficiales de David"}],"21":[{"versiculo":1,"titulo":"Venganza de los gabaonitas"},{"versiculo":15,"titulo":"Abisai libra a David del gigante"},{"versiculo":18,"titulo":"Los hombres de David matan a los gigantes"}],"22":[{"versiculo":1,"titulo":"Cántico de liberación de David"}],"23":[{"versiculo":1,"titulo":"Últimas palabras de David"},{"versiculo":8,"titulo":"Los valientes de David"}],"24":[{"versiculo":1,"titulo":"David censa al pueblo"}]},"1_reyes":{"1":[{"versiculo":1,"titulo":"Abisag sirve a David"},{"versiculo":5,"titulo":"Adonías usurpa el trono"},{"versiculo":28,"titulo":"David proclama rey a Salomón"}],"2":[{"versiculo":1,"titulo":"Mandato de David a Salomón"},{"versiculo":10,"titulo":"Muerte de David"},{"versiculo":13,"titulo":"Salomón afirma su reino"}],"3":[{"versiculo":1,"titulo":"Salomón se casa con la hija de Faraón"},{"versiculo":3,"titulo":"Salomón pide sabiduría"},{"versiculo":16,"titulo":"Sabiduría y prosperidad de Salomón"}],"5":[{"versiculo":1,"titulo":"Pacto de Salomón con Hiram"}],"6":[{"versiculo":1,"titulo":"Salomón edifica el templo"}],"7":[{"versiculo":1,"titulo":"Otros edificios de Salomón"},{"versiculo":13,"titulo":"Salomón emplea a Hiram, de Tiro"},{"versiculo":23,"titulo":"Mobiliario del templo"}],"8":[{"versiculo":1,"titulo":"Salomón traslada el arca al templo"},{"versiculo":12,"titulo":"Dedicación del templo"}],"9":[{"versiculo":1,"titulo":"Pacto de Dios con Salomón"},{"versiculo":10,"titulo":"Otras actividades de Salomón"}],"10":[{"versiculo":1,"titulo":"La reina de Sabá visita a Salomón"},{"versiculo":14,"titulo":"Riquezas y fama de Salomón"},{"versiculo":26,"titulo":"Salomón comercia en caballos y en carros"}],"11":[{"versiculo":1,"titulo":"Apostasía y dificultades de Salomón"},{"versiculo":41,"titulo":"Muerte de Salomón"}],"12":[{"versiculo":1,"titulo":"Rebelión de Israel"},{"versiculo":25,"titulo":"El pecado de Jeroboam"}],"13":[{"versiculo":1,"titulo":"Un profeta de Judá amonesta a Jeroboam"}],"14":[{"versiculo":1,"titulo":"Profecía de Ahías contra Jeroboam"},{"versiculo":21,"titulo":"Reinado de Roboam"}],"15":[{"versiculo":1,"titulo":"Reinado de Abiam"},{"versiculo":9,"titulo":"Reinado de Asa"},{"versiculo":16,"titulo":"Alianza de Asa con Ben-adad"},{"versiculo":23,"titulo":"Muerte de Asa"},{"versiculo":25,"titulo":"Reinado de Nadab"},{"versiculo":33,"titulo":"Reinado de Baasa"}],"16":[{"versiculo":8,"titulo":"Reinados de Ela y de Zimri"},{"versiculo":21,"titulo":"Reinado de Omri"},{"versiculo":29,"titulo":"Reinado de Acab"}],"17":[{"versiculo":1,"titulo":"Elías predice la sequía"},{"versiculo":8,"titulo":"Elías y la viuda de Sarepta"}],"18":[{"versiculo":1,"titulo":"Elías regresa a ver a Acab"},{"versiculo":20,"titulo":"Elías y los profetas de Baal"},{"versiculo":41,"titulo":"Elías ora por lluvia"}],"19":[{"versiculo":1,"titulo":"Elías huye a Horeb"},{"versiculo":19,"titulo":"Llamamiento de Eliseo"}],"20":[{"versiculo":1,"titulo":"Acab derrota a los sirios"}],"21":[{"versiculo":1,"titulo":"Acab y la viña de Nabot"}],"22":[{"versiculo":1,"titulo":"Micaías profetiza la derrota de Acab"},{"versiculo":41,"titulo":"Reinado de Josafat"},{"versiculo":51,"titulo":"Reinado de Ocozías de Israel"}]},"2_reyes":{"1":[{"versiculo":1,"titulo":"Muerte de Ocozías"}],"2":[{"versiculo":1,"titulo":"Eliseo sucede a Elías"}],"3":[{"versiculo":1,"titulo":"Reinado de Joram de Israel"},{"versiculo":4,"titulo":"Eliseo predice la victoria sobre Moab"}],"4":[{"versiculo":1,"titulo":"El aceite de la viuda"},{"versiculo":8,"titulo":"Eliseo y la sunamita"},{"versiculo":38,"titulo":"Milagros en beneficio de los profetas"}],"5":[{"versiculo":1,"titulo":"Eliseo y Naamán"}],"6":[{"versiculo":1,"titulo":"Eliseo hace flotar el hacha"},{"versiculo":8,"titulo":"Eliseo y los sirios"},{"versiculo":24,"titulo":"Eliseo y el sitio de Samaria"}],"8":[{"versiculo":1,"titulo":"Los bienes de la sunamita devueltos"},{"versiculo":7,"titulo":"Hazael reina en Siria"},{"versiculo":16,"titulo":"Reinado de Joram de Judá"},{"versiculo":25,"titulo":"Reinado de Ocozías de Judá"}],"9":[{"versiculo":1,"titulo":"Jehú es ungido rey de Israel"},{"versiculo":14,"titulo":"Jehú mata a Joram"},{"versiculo":27,"titulo":"Jehú mata a Ocozías"},{"versiculo":30,"titulo":"Muerte de Jezabel"}],"10":[{"versiculo":1,"titulo":"Jehú extermina la casa de Acab"},{"versiculo":18,"titulo":"Jehú extermina el culto de Baal"}],"11":[{"versiculo":1,"titulo":"Atalía usurpa el trono"}],"12":[{"versiculo":1,"titulo":"Reinado de Joás de Judá"}],"13":[{"versiculo":1,"titulo":"Reinado de Joacaz"},{"versiculo":10,"titulo":"Reinado de Joás de Israel"},{"versiculo":14,"titulo":"Profecía final y muerte de Eliseo"}],"14":[{"versiculo":1,"titulo":"Reinado de Amasías"},{"versiculo":23,"titulo":"Reinado de Jeroboam II"}],"15":[{"versiculo":1,"titulo":"Reinado de Azarías"},{"versiculo":8,"titulo":"Reinado de Zacarías"},{"versiculo":13,"titulo":"Reinado de Salum"},{"versiculo":17,"titulo":"Reinado de Manahem"},{"versiculo":23,"titulo":"Reinado de Pekaía"},{"versiculo":27,"titulo":"Reinado de Peka"},{"versiculo":32,"titulo":"Reinado de Jotam"}],"16":[{"versiculo":1,"titulo":"Reinado de Acaz"}],"17":[{"versiculo":1,"titulo":"Caída de Samaria y cautiverio de Israel"},{"versiculo":24,"titulo":"Asiria puebla de nuevo a Samaria"}],"18":[{"versiculo":1,"titulo":"Reinado de Ezequías"},{"versiculo":9,"titulo":"Caída de Samaria"},{"versiculo":13,"titulo":"Senaquerib invade a Judá"}],"19":[{"versiculo":1,"titulo":"Judá es librado de Senaquerib"}],"20":[{"versiculo":1,"titulo":"Enfermedad de Ezequías"},{"versiculo":12,"titulo":"Ezequías recibe a los enviados de Babilonia"},{"versiculo":20,"titulo":"Muerte de Ezequías"}],"21":[{"versiculo":1,"titulo":"Reinado de Manasés"},{"versiculo":19,"titulo":"Reinado de Amón"}],"22":[{"versiculo":1,"titulo":"Reinado de Josías"},{"versiculo":3,"titulo":"Hallazgo del libro de la ley"}],"23":[{"versiculo":4,"titulo":"Reformas de Josías"},{"versiculo":21,"titulo":"Josías celebra la pascua"},{"versiculo":24,"titulo":"Persiste la ira de Jehová contra Judá"},{"versiculo":28,"titulo":"Muerte de Josías"},{"versiculo":31,"titulo":"Reinado y destronamiento de Joacaz"},{"versiculo":36,"titulo":"Reinado de Joacim"}],"24":[{"versiculo":8,"titulo":"Joaquín y los nobles son llevados cautivos a Babilonia"},{"versiculo":18,"titulo":"Reinado de Sedequías"}],"25":[{"versiculo":1,"titulo":"Caída de Jerusalén"},{"versiculo":8,"titulo":"Cautividad de Judá"},{"versiculo":22,"titulo":"El remanente huye a Egipto"},{"versiculo":27,"titulo":"Joaquín es libertado y recibe honores en Babilonia"}]},"1_cronicas":{"1":[{"versiculo":1,"titulo":"Descendientes de Adán"},{"versiculo":5,"titulo":"Descendientes de los hijos de Noé"},{"versiculo":24,"titulo":"Descendientes de Sem"},{"versiculo":28,"titulo":"Descendientes de Ismael y de Cetura"},{"versiculo":34,"titulo":"Descendientes de Esaú"}],"2":[{"versiculo":1,"titulo":"Los hijos de Israel"},{"versiculo":3,"titulo":"Descendientes de Judá"}],"3":[{"versiculo":1,"titulo":"Los hijos de David"},{"versiculo":10,"titulo":"Descendientes de Salomón"}],"4":[{"versiculo":1,"titulo":"Descendientes de Judá"},{"versiculo":24,"titulo":"Descendientes de Simeón"}],"5":[{"versiculo":1,"titulo":"Descendientes de Rubén"},{"versiculo":11,"titulo":"Descendientes de Gad"},{"versiculo":18,"titulo":"Historia de las dos tribus y media"}],"6":[{"versiculo":1,"titulo":"Descendientes de Leví"},{"versiculo":31,"titulo":"Cantores del templo nombrados por David"},{"versiculo":49,"titulo":"Descendientes de Aarón"},{"versiculo":54,"titulo":"Las ciudades de los levitas"}],"7":[{"versiculo":1,"titulo":"Descendientes de Isacar"},{"versiculo":6,"titulo":"Descendientes de Benjamín"},{"versiculo":13,"titulo":"Descendientes de Neftalí"},{"versiculo":14,"titulo":"Descendientes de Manasés"},{"versiculo":20,"titulo":"Descendientes de Efraín"},{"versiculo":30,"titulo":"Descendientes de Aser"}],"8":[{"versiculo":1,"titulo":"Descendientes de Benjamín"}],"9":[{"versiculo":1,"titulo":"Los que regresaron de Babilonia"},{"versiculo":35,"titulo":"Genealogía de Saúl"}],"10":[{"versiculo":1,"titulo":"Muerte de Saúl y de sus hijos"}],"11":[{"versiculo":1,"titulo":"David es proclamado rey de Israel"},{"versiculo":4,"titulo":"David toma la fortaleza de Sion"},{"versiculo":10,"titulo":"Los valientes de David"}],"12":[{"versiculo":1,"titulo":"El ejército de David"}],"13":[{"versiculo":1,"titulo":"David propone trasladar el arca a Jerusalén"},{"versiculo":5,"titulo":"David intenta traer el arca"}],"14":[{"versiculo":1,"titulo":"Hiram envía embajadores a David"},{"versiculo":3,"titulo":"Hijos de David nacidos en Jerusalén"},{"versiculo":8,"titulo":"David derrota a los filisteos"}],"15":[{"versiculo":1,"titulo":"David trae el arca a Jerusalén"}],"16":[{"versiculo":7,"titulo":"Salmo de acción de gracias de David"},{"versiculo":37,"titulo":"Los levitas encargados del arca"}],"17":[{"versiculo":1,"titulo":"Pacto de Dios con David"}],"18":[{"versiculo":1,"titulo":"David extiende sus dominios"},{"versiculo":14,"titulo":"Oficiales de David"}],"19":[{"versiculo":1,"titulo":"Derrotas de amonitas y sirios"}],"20":[{"versiculo":1,"titulo":"David captura a Rabá"},{"versiculo":4,"titulo":"Los hombres de David matan a los gigantes"}],"21":[{"versiculo":1,"titulo":"David censa al pueblo"},{"versiculo":28,"titulo":"El lugar para el templo"}],"22":[{"versiculo":2,"titulo":"Preparativos para el templo"}],"23":[{"versiculo":1,"titulo":"Distribución y deberes de los levitas"}],"25":[{"versiculo":1,"titulo":"Distribución de músicos y cantores"}],"26":[{"versiculo":1,"titulo":"Porteros y oficiales"}],"27":[{"versiculo":1,"titulo":"Otros oficiales de David"}],"28":[{"versiculo":1,"titulo":"Salomón sucede a David"}],"29":[{"versiculo":26,"titulo":"Muerte de David"}]},"2_cronicas":{"1":[{"versiculo":1,"titulo":"Salomón pide sabiduría"},{"versiculo":14,"titulo":"Salomón comercia en caballos y en carros"}],"2":[{"versiculo":1,"titulo":"Pacto de Salomón con Hiram"}],"3":[{"versiculo":1,"titulo":"Salomón edifica el templo"},{"versiculo":15,"titulo":"Las dos columnas"}],"4":[{"versiculo":1,"titulo":"Mobiliario del templo"}],"5":[{"versiculo":2,"titulo":"Salomón traslada el arca al templo"}],"6":[{"versiculo":1,"titulo":"Dedicación del templo"}],"7":[{"versiculo":11,"titulo":"Pacto de Dios con Salomón"}],"8":[{"versiculo":1,"titulo":"Otras actividades de Salomón"}],"9":[{"versiculo":1,"titulo":"La reina de Sabá visita a Salomón"},{"versiculo":13,"titulo":"Riquezas y fama de Salomón"},{"versiculo":29,"titulo":"Muerte de Salomón"}],"10":[{"versiculo":1,"titulo":"Rebelión de Israel"}],"11":[{"versiculo":5,"titulo":"Prosperidad de Roboam"}],"12":[{"versiculo":1,"titulo":"Sisac invade Judá"}],"13":[{"versiculo":1,"titulo":"Reinado de Abías"}],"14":[{"versiculo":1,"titulo":"Reinado de Asa"}],"15":[{"versiculo":1,"titulo":"Reformas religiosas de Asa"}],"16":[{"versiculo":1,"titulo":"Alianza de Asa con Ben-adad"},{"versiculo":11,"titulo":"Muerte de Asa"}],"17":[{"versiculo":1,"titulo":"Reinado de Josafat"}],"18":[{"versiculo":1,"titulo":"Micaías profetiza la derrota de Acab"}],"19":[{"versiculo":1,"titulo":"El profeta Jehú amonesta a Josafat"},{"versiculo":4,"titulo":"Josafat nombra jueces"}],"20":[{"versiculo":1,"titulo":"Victoria sobre Moab y Amón"},{"versiculo":31,"titulo":"Resumen del reinado de Josafat"}],"21":[{"versiculo":1,"titulo":"Reinado de Joram de Judá"}],"22":[{"versiculo":1,"titulo":"Reinado de Ocozías de Judá"},{"versiculo":7,"titulo":"Jehú mata a Ocozías"},{"versiculo":10,"titulo":"Atalía usurpa el trono"}],"24":[{"versiculo":1,"titulo":"Reinado de Joás de Judá"}],"25":[{"versiculo":1,"titulo":"Reinado de Amasías"}],"26":[{"versiculo":1,"titulo":"Reinado de Uzías"}],"27":[{"versiculo":1,"titulo":"Reinado de Jotam"}],"28":[{"versiculo":1,"titulo":"Reinado de Acaz"}],"29":[{"versiculo":1,"titulo":"Reinado de Ezequías"},{"versiculo":3,"titulo":"Ezequías restablece el culto del templo"}],"30":[{"versiculo":1,"titulo":"Ezequías celebra la pascua"}],"31":[{"versiculo":2,"titulo":"Ezequías reorganiza el servicio de los sacerdotes y levitas"}],"32":[{"versiculo":1,"titulo":"Senaquerib invade a Judá"},{"versiculo":20,"titulo":"Jehová libra a Ezequías"},{"versiculo":24,"titulo":"Enfermedad de Ezequías"},{"versiculo":27,"titulo":"Ezequías recibe a los enviados de Babilonia"},{"versiculo":32,"titulo":"Muerte de Ezequías"}],"33":[{"versiculo":1,"titulo":"Reinado de Manasés"},{"versiculo":21,"titulo":"Reinado de Amón"}],"34":[{"versiculo":1,"titulo":"Reinado de Josías"},{"versiculo":3,"titulo":"Reformas de Josías"},{"versiculo":8,"titulo":"Hallazgo del libro de la ley"}],"35":[{"versiculo":1,"titulo":"Josías celebra la pascua"},{"versiculo":20,"titulo":"Muerte de Josías"}],"36":[{"versiculo":1,"titulo":"Reinado y destronamiento de Joacaz"},{"versiculo":5,"titulo":"Reinado de Joacim"},{"versiculo":9,"titulo":"Joaquín es llevado cautivo a Babilonia"},{"versiculo":11,"titulo":"Reinado de Sedequías"},{"versiculo":17,"titulo":"Cautividad de Judá"},{"versiculo":22,"titulo":"El decreto de Ciro"}]},"esdras":{"1":[{"versiculo":1,"titulo":"El decreto de Ciro"},{"versiculo":5,"titulo":"El regreso a Jerusalén"}],"2":[{"versiculo":1,"titulo":"Los que volvieron con Zorobabel"}],"3":[{"versiculo":1,"titulo":"Restauración del altar y del culto"},{"versiculo":8,"titulo":"Colocación de los cimientos del templo"}],"4":[{"versiculo":1,"titulo":"Los adversarios detienen la obra"}],"5":[{"versiculo":1,"titulo":"Reedificación del templo"}],"7":[{"versiculo":1,"titulo":"Esdras y sus compañeros llegan a Jerusalén"}],"9":[{"versiculo":1,"titulo":"Oración de confesión de Esdras"}],"10":[{"versiculo":1,"titulo":"Expulsión de las mujeres extranjeras"}]},"nehemias":{"1":[{"versiculo":1,"titulo":"Oración de Nehemías sobre Jerusalén"}],"2":[{"versiculo":1,"titulo":"Artajerjes envía a Nehemías a Jerusalén"},{"versiculo":11,"titulo":"Nehemías anima al pueblo a reedificar los muros"}],"3":[{"versiculo":1,"titulo":"Reparto del trabajo de reedificación"}],"4":[{"versiculo":1,"titulo":"Precauciones contra los enemigos"}],"5":[{"versiculo":1,"titulo":"Abolición de la usura"}],"6":[{"versiculo":1,"titulo":"Maquinaciones de los adversarios"}],"7":[{"versiculo":1,"titulo":"Nehemías designa dirigentes"},{"versiculo":5,"titulo":"Los que volvieron con Zorobabel"},{"versiculo":73,"titulo":"Esdras lee la ley al pueblo"}],"9":[{"versiculo":1,"titulo":"Esdras confiesa los pecados de Israel"},{"versiculo":38,"titulo":"Pacto del pueblo, de guardar la ley"}],"11":[{"versiculo":1,"titulo":"Los habitantes de Jerusalén"},{"versiculo":25,"titulo":"Lugares habitados fuera de Jerusalén"}],"12":[{"versiculo":1,"titulo":"Sacerdotes y levitas"},{"versiculo":27,"titulo":"Dedicación del muro"},{"versiculo":44,"titulo":"Porciones para sacerdotes y levitas"}],"13":[{"versiculo":1,"titulo":"Reformas de Nehemías"}]},"ester":{"1":[{"versiculo":1,"titulo":"La reina Vasti desafía a Asuero"}],"2":[{"versiculo":1,"titulo":"Ester es proclamada reina"},{"versiculo":19,"titulo":"Mardoqueo denuncia una conspiración contra el rey"}],"3":[{"versiculo":1,"titulo":"Amán trama la destrucción de los judíos"}],"4":[{"versiculo":1,"titulo":"Ester promete interceder por su pueblo"}],"5":[{"versiculo":1,"titulo":"Ester invita al rey y a Amán a un banquete"}],"6":[{"versiculo":1,"titulo":"Amán se ve obligado a honrar a Mardoqueo"}],"7":[{"versiculo":1,"titulo":"Amán es ahorcado"}],"8":[{"versiculo":1,"titulo":"Decreto de Asuero a favor de los judíos"}],"9":[{"versiculo":1,"titulo":"Los judíos destruyen a sus enemigos"},{"versiculo":16,"titulo":"La fiesta de Purim"}],"10":[{"versiculo":1,"titulo":"Grandeza de Mardoqueo"}]},"job":{"1":[{"versiculo":1,"titulo":"Las calamidades de Job"}],"3":[{"versiculo":1,"titulo":"Job maldice el día en que nació"}],"4":[{"versiculo":1,"titulo":"Elifaz reprende a Job"}],"6":[{"versiculo":1,"titulo":"Job reprocha la actitud de sus amigos"}],"7":[{"versiculo":1,"titulo":"Job argumenta contra Dios"}],"8":[{"versiculo":1,"titulo":"Bildad proclama la justicia de Dios"}],"9":[{"versiculo":1,"titulo":"Incapacidad de Job para responder a Dios"}],"10":[{"versiculo":1,"titulo":"Job lamenta su condición"}],"11":[{"versiculo":1,"titulo":"Zofar acusa de maldad a Job"}],"12":[{"versiculo":1,"titulo":"Job proclama el poder y la sabiduría de Dios"}],"13":[{"versiculo":1,"titulo":"Job defiende su integridad"}],"14":[{"versiculo":1,"titulo":"Job discurre sobre la brevedad de la vida"}],"15":[{"versiculo":1,"titulo":"Elifaz reprende a Job"}],"16":[{"versiculo":1,"titulo":"Job se queja contra Dios"}],"18":[{"versiculo":1,"titulo":"Bildad describe la suerte de los malos"}],"19":[{"versiculo":1,"titulo":"Job confía en que Dios lo justificará"}],"20":[{"versiculo":1,"titulo":"Zofar describe las calamidades de los malos"}],"21":[{"versiculo":1,"titulo":"Job afirma que los malos prosperan"}],"22":[{"versiculo":1,"titulo":"Elifaz acusa a Job de gran maldad"}],"23":[{"versiculo":1,"titulo":"Job desea abogar su causa delante de Dios"}],"24":[{"versiculo":1,"titulo":"Job se queja de que Dios es indiferente ante la maldad"}],"25":[{"versiculo":1,"titulo":"Bildad niega que el hombre pueda ser justificado delante de Dios"}],"26":[{"versiculo":1,"titulo":"Job proclama la soberanía de Dios"}],"27":[{"versiculo":1,"titulo":"Job describe el castigo de los malos"}],"28":[{"versiculo":1,"titulo":"El hombre en busca de la sabiduría"}],"29":[{"versiculo":1,"titulo":"Job recuerda su felicidad anterior"}],"30":[{"versiculo":1,"titulo":"Job lamenta su desdicha actual"}],"31":[{"versiculo":1,"titulo":"Job afirma su integridad"}],"32":[{"versiculo":1,"titulo":"Eliú justifica su derecho de contestar a Job"}],"33":[{"versiculo":1,"titulo":"Eliú censura a Job"}],"34":[{"versiculo":1,"titulo":"Eliú justifica a Dios"}],"36":[{"versiculo":1,"titulo":"Eliú exalta la grandeza de Dios"}],"38":[{"versiculo":1,"titulo":"Jehová convence a Job de su ignorancia"}],"40":[{"versiculo":6,"titulo":"Manifestaciones del poder de Dios"}],"42":[{"versiculo":1,"titulo":"Confesión y justificación de Job"},{"versiculo":10,"titulo":"Restauración de la prosperidad de Job"}]},"salmos":{"1":[{"versiculo":1,"titulo":"LIBRO I"},{"versiculo":1,"titulo":"El justo y los pecadores"}],"2":[{"versiculo":1,"titulo":"El reino del ungido de Jehová"}],"3":[{"versiculo":1,"titulo":"Oración matutina de confianza en Dios"}],"4":[{"versiculo":1,"titulo":"Oración vespertina de confianza en Dios"}],"5":[{"versiculo":1,"titulo":"Plegaria pidiendo protección"}],"6":[{"versiculo":1,"titulo":"Oración pidiendo misericordia en tiempo de prueba"}],"7":[{"versiculo":1,"titulo":"Plegaria pidiendo vindicación"}],"8":[{"versiculo":1,"titulo":"La gloria de Dios y la honra del hombre"}],"9":[{"versiculo":1,"titulo":"Acción de gracias por la justicia de Dios"}],"10":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de los malvados"}],"11":[{"versiculo":1,"titulo":"El refugio del justo"}],"12":[{"versiculo":1,"titulo":"Oración pidiendo ayuda contra los malos"}],"13":[{"versiculo":1,"titulo":"Plegaria pidiendo ayuda en la aflicción"}],"14":[{"versiculo":1,"titulo":"Necedad y corrupción del hombre"}],"15":[{"versiculo":1,"titulo":"Los que habitarán en el monte santo de Dios"}],"16":[{"versiculo":1,"titulo":"Una herencia escogida"}],"17":[{"versiculo":1,"titulo":"Plegaria pidiendo protección contra los opresores"}],"18":[{"versiculo":1,"titulo":"Acción de gracias por la victoria"}],"19":[{"versiculo":1,"titulo":"Las obras y la palabra de Dios"}],"20":[{"versiculo":1,"titulo":"Oración pidiendo la victoria"}],"21":[{"versiculo":1,"titulo":"Alabanza por haber sido librado del enemigo"}],"22":[{"versiculo":1,"titulo":"Un grito de angustia y un canto de alabanza"}],"23":[{"versiculo":1,"titulo":"Jehová es mi pastor"}],"24":[{"versiculo":1,"titulo":"El rey de gloria"}],"25":[{"versiculo":1,"titulo":"David implora dirección, perdón y protección"}],"26":[{"versiculo":1,"titulo":"Declaración de integridad"}],"27":[{"versiculo":1,"titulo":"Jehová es mi luz y mi salvación"}],"28":[{"versiculo":1,"titulo":"Plegaria pidiendo ayuda, y alabanza por la respuesta"}],"29":[{"versiculo":1,"titulo":"Poder y gloria de Jehová"}],"30":[{"versiculo":1,"titulo":"Acción de gracias por haber sido librado de la muerte"}],"31":[{"versiculo":1,"titulo":"Declaración de confianza"}],"32":[{"versiculo":1,"titulo":"La dicha del perdón"}],"33":[{"versiculo":1,"titulo":"Alabanzas al Creador y Preservador"}],"34":[{"versiculo":1,"titulo":"La protección divina"}],"35":[{"versiculo":1,"titulo":"Plegaria pidiendo ser librado de los enemigos"}],"36":[{"versiculo":1,"titulo":"La misericordia de Dios"}],"37":[{"versiculo":1,"titulo":"El camino de los malos"}],"38":[{"versiculo":1,"titulo":"Oración de un penitente"}],"39":[{"versiculo":1,"titulo":"El carácter transitorio de la vida"}],"40":[{"versiculo":1,"titulo":"Alabanza por la liberación divina"}],"41":[{"versiculo":1,"titulo":"Oración pidiendo salud"}],"42":[{"versiculo":1,"titulo":"LIBRO II"},{"versiculo":1,"titulo":"Mi alma tiene sed de Dios"}],"43":[{"versiculo":1,"titulo":"Plegaria pidiendo vindicación y liberación"}],"44":[{"versiculo":1,"titulo":"Liberaciones pasadas y pruebas presentes"}],"45":[{"versiculo":1,"titulo":"Cántico de las bodas del rey"}],"46":[{"versiculo":1,"titulo":"Dios es nuestro amparo y fortaleza"}],"47":[{"versiculo":1,"titulo":"Dios, el Rey de toda la tierra"}],"48":[{"versiculo":1,"titulo":"Hermosura y gloria de Sion"}],"49":[{"versiculo":1,"titulo":"La insensatez de confiar en las riquezas"}],"50":[{"versiculo":1,"titulo":"Dios juzgará al mundo"}],"51":[{"versiculo":1,"titulo":"Arrepentimiento, y plegaria pidiendo purificación"}],"52":[{"versiculo":1,"titulo":"Futilidad de la jactancia del malo"}],"53":[{"versiculo":1,"titulo":"Insensatez y maldad de los hombres"}],"54":[{"versiculo":1,"titulo":"Plegaria pidiendo protección contra los enemigos"}],"55":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de enemigos traicioneros"}],"56":[{"versiculo":1,"titulo":"Oración de confianza"}],"57":[{"versiculo":1,"titulo":"Plegaria pidiendo ser librado de los perseguidores"}],"58":[{"versiculo":1,"titulo":"Plegaria pidiendo el castigo de los malos"}],"59":[{"versiculo":1,"titulo":"Oración pidiendo ser librado de los enemigos"}],"60":[{"versiculo":1,"titulo":"Plegaria pidiendo ayuda contra el enemigo"}],"61":[{"versiculo":1,"titulo":"Confianza en la protección de Dios"}],"62":[{"versiculo":1,"titulo":"Dios, el único refugio"}],"63":[{"versiculo":1,"titulo":"Dios, satisfacción del alma"}],"64":[{"versiculo":1,"titulo":"Plegaria pidiendo protección contra enemigos ocultos"}],"65":[{"versiculo":1,"titulo":"La generosidad de Dios en la naturaleza"}],"66":[{"versiculo":1,"titulo":"Alabanza por los hechos poderosos de Dios"}],"67":[{"versiculo":1,"titulo":"Exhortación a las naciones, para que alaben a Dios"}],"68":[{"versiculo":1,"titulo":"El Dios del Sinaí y del santuario"}],"69":[{"versiculo":1,"titulo":"Un grito de angustia"}],"70":[{"versiculo":1,"titulo":"Súplica por la liberación"}],"71":[{"versiculo":1,"titulo":"Oración de un anciano"}],"72":[{"versiculo":1,"titulo":"El reino de un rey justo"}],"73":[{"versiculo":1,"titulo":"LIBRO III"},{"versiculo":1,"titulo":"El destino de los malos"}],"74":[{"versiculo":1,"titulo":"Apelación a Dios en contra del enemigo"}],"75":[{"versiculo":1,"titulo":"Dios abate al malo y exalta al justo"}],"76":[{"versiculo":1,"titulo":"El Dios de la victoria y del juicio"}],"77":[{"versiculo":1,"titulo":"Meditación sobre los hechos poderosos de Dios"}],"78":[{"versiculo":1,"titulo":"Fidelidad de Dios hacia su pueblo infiel"}],"79":[{"versiculo":1,"titulo":"Lamento por la destrucción de Jerusalén"}],"80":[{"versiculo":1,"titulo":"Súplica por la restauración"}],"81":[{"versiculo":1,"titulo":"Bondad de Dios y perversidad de Israel"}],"82":[{"versiculo":1,"titulo":"Amonestación contra los juicios injustos"}],"83":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de los enemigos de Israel"}],"84":[{"versiculo":1,"titulo":"Anhelo por la casa de Dios"}],"85":[{"versiculo":1,"titulo":"Súplica por la misericordia de Dios sobre Israel"}],"86":[{"versiculo":1,"titulo":"Oración pidiendo la continuada misericordia de Dios"}],"87":[{"versiculo":1,"titulo":"El privilegio de morar en Sion"}],"88":[{"versiculo":1,"titulo":"Súplica por la liberación de la muerte"}],"89":[{"versiculo":1,"titulo":"Pacto de Dios con David"}],"90":[{"versiculo":1,"titulo":"LIBRO IV"},{"versiculo":1,"titulo":"La eternidad de Dios y la transitoriedad del hombre"}],"91":[{"versiculo":1,"titulo":"Morando bajo la sombra del Omnipotente"}],"92":[{"versiculo":1,"titulo":"Alabanza por la bondad de Dios"}],"93":[{"versiculo":1,"titulo":"La majestad de Jehová"}],"94":[{"versiculo":1,"titulo":"Oración clamando por venganza"}],"95":[{"versiculo":1,"titulo":"Cántico de alabanza y de adoración"}],"96":[{"versiculo":1,"titulo":"Cántico de alabanza"}],"97":[{"versiculo":1,"titulo":"El dominio y el poder de Jehová"}],"98":[{"versiculo":1,"titulo":"Alabanza por la justicia de Dios"}],"99":[{"versiculo":1,"titulo":"Fidelidad de Jehová para con Israel"}],"100":[{"versiculo":1,"titulo":"Exhortación a la gratitud"}],"101":[{"versiculo":1,"titulo":"Promesa de vivir rectamente"}],"102":[{"versiculo":1,"titulo":"Oración de un afligido"}],"103":[{"versiculo":1,"titulo":"Alabanza por las bendiciones de Dios"}],"104":[{"versiculo":1,"titulo":"Dios cuida de su creación"}],"105":[{"versiculo":1,"titulo":"Maravillas de Jehová a favor de Israel"}],"106":[{"versiculo":1,"titulo":"La rebeldía de Israel"}],"107":[{"versiculo":1,"titulo":"LIBRO V"},{"versiculo":1,"titulo":"Dios libra de la aflicción"}],"108":[{"versiculo":1,"titulo":"Petición de ayuda contra el enemigo"}],"109":[{"versiculo":1,"titulo":"Clamor de venganza"}],"110":[{"versiculo":1,"titulo":"Jehová da dominio al rey"}],"111":[{"versiculo":1,"titulo":"Dios cuida de su pueblo"}],"112":[{"versiculo":1,"titulo":"Prosperidad del que teme a Jehová"}],"113":[{"versiculo":1,"titulo":"Dios levanta al pobre"}],"114":[{"versiculo":1,"titulo":"Las maravillas del éxodo"}],"115":[{"versiculo":1,"titulo":"Dios y los ídolos"}],"116":[{"versiculo":1,"titulo":"Acción de gracias por haber sido librado de la muerte"}],"117":[{"versiculo":1,"titulo":"Alabanza por la misericordia de Jehová"}],"118":[{"versiculo":1,"titulo":"Acción de gracias por la salvación recibida de Jehová"}],"119":[{"versiculo":1,"titulo":"Excelencias de la ley de Dios"}],"120":[{"versiculo":1,"titulo":"Plegaria ante el peligro de la lengua engañosa"}],"121":[{"versiculo":1,"titulo":"Jehová es tu guardador"}],"122":[{"versiculo":1,"titulo":"Oración por la paz de Jerusalén"}],"123":[{"versiculo":1,"titulo":"Plegaria pidiendo misericordia"}],"124":[{"versiculo":1,"titulo":"Alabanza por haber sido librado de los enemigos"}],"125":[{"versiculo":1,"titulo":"Dios protege a su pueblo"}],"126":[{"versiculo":1,"titulo":"Oración por la restauración"}],"127":[{"versiculo":1,"titulo":"La prosperidad viene de Jehová"}],"128":[{"versiculo":1,"titulo":"La bienaventuranza del que teme a Jehová"}],"129":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de los enemigos de Sion"}],"130":[{"versiculo":1,"titulo":"Esperanza en que Jehová dará redención"}],"131":[{"versiculo":1,"titulo":"Confiando en Dios como un niño"}],"132":[{"versiculo":1,"titulo":"Plegaria por bendición sobre el santuario"}],"133":[{"versiculo":1,"titulo":"La bienaventuranza del amor fraternal"}],"134":[{"versiculo":1,"titulo":"Exhortación a los guardas del templo"}],"135":[{"versiculo":1,"titulo":"La grandeza del Señor y la vanidad de los ídolos"}],"136":[{"versiculo":1,"titulo":"Alabanza por la misericordia eterna de Jehová"}],"137":[{"versiculo":1,"titulo":"Lamento de los cautivos en Babilonia"}],"138":[{"versiculo":1,"titulo":"Acción de gracias por el favor de Jehová"}],"139":[{"versiculo":1,"titulo":"Omnipresencia y omnisciencia de Dios"}],"140":[{"versiculo":1,"titulo":"Súplica de protección contra los perseguidores"}],"141":[{"versiculo":1,"titulo":"Oración a fin de ser guardado del mal"}],"142":[{"versiculo":1,"titulo":"Petición de ayuda en medio de la prueba"}],"143":[{"versiculo":1,"titulo":"Súplica de liberación y dirección"}],"144":[{"versiculo":1,"titulo":"Oración pidiendo socorro y prosperidad"}],"145":[{"versiculo":1,"titulo":"Alabanza por la bondad y el poder de Dios"}],"146":[{"versiculo":1,"titulo":"Alabanza por la justicia de Dios"}],"147":[{"versiculo":1,"titulo":"Alabanza por el favor de Dios hacia Jerusalén"}],"148":[{"versiculo":1,"titulo":"Exhortación a la creación, para que alabe a Jehová"}],"149":[{"versiculo":1,"titulo":"Exhortación a Israel, para que alabe a Jehová"}],"150":[{"versiculo":1,"titulo":"Exhortación a alabar a Dios con instrumentos de música"}]},"proverbios":{"1":[{"versiculo":1,"titulo":"Motivo de los proverbios"},{"versiculo":8,"titulo":"Amonestaciones de la sabiduría"}],"2":[{"versiculo":1,"titulo":"Excelencias de la sabiduría"}],"3":[{"versiculo":1,"titulo":"Exhortación a la obediencia"}],"4":[{"versiculo":1,"titulo":"Beneficios de la sabiduría"}],"5":[{"versiculo":1,"titulo":"Amonestación contra la impureza"}],"6":[{"versiculo":1,"titulo":"Amonestación contra la pereza y la falsedad"},{"versiculo":20,"titulo":"Amonestación contra el adulterio"}],"7":[{"versiculo":1,"titulo":"Las artimañas de la ramera"}],"8":[{"versiculo":1,"titulo":"Excelencia y eternidad de la sabiduría"}],"9":[{"versiculo":1,"titulo":"La sabiduría y la mujer insensata"}],"10":[{"versiculo":1,"titulo":"Contraste entre el justo y el malvado"}],"16":[{"versiculo":1,"titulo":"Proverbios sobre la vida y la conducta"}],"22":[{"versiculo":17,"titulo":"Preceptos y amonestaciones"}],"25":[{"versiculo":1,"titulo":"Comparaciones y lecciones morales"}],"28":[{"versiculo":1,"titulo":"Proverbios antitéticos"}],"30":[{"versiculo":1,"titulo":"Las palabras de Agur"}],"31":[{"versiculo":1,"titulo":"Exhortación a un rey"},{"versiculo":10,"titulo":"Elogio de la mujer virtuosa"}]},"eclesiastes":{"1":[{"versiculo":1,"titulo":"Todo es vanidad"},{"versiculo":12,"titulo":"La experiencia del Predicador"}],"3":[{"versiculo":1,"titulo":"Todo tiene su tiempo"},{"versiculo":16,"titulo":"Injusticias de la vida"}],"5":[{"versiculo":1,"titulo":"La insensatez de hacer votos a la ligera"},{"versiculo":8,"titulo":"La vanidad de la vida"}],"7":[{"versiculo":1,"titulo":"Contraste entre la sabiduría y la insensatez"}],"8":[{"versiculo":10,"titulo":"Desigualdades de la vida"}],"10":[{"versiculo":1,"titulo":"Excelencia de la sabiduría"}],"11":[{"versiculo":9,"titulo":"Consejos para la juventud"}],"12":[{"versiculo":9,"titulo":"Resumen del deber del hombre"}]},"cantares":{"1":[{"versiculo":1,"titulo":"La esposa y las hijas de Jerusalén"},{"versiculo":9,"titulo":"La esposa y el esposo"}],"3":[{"versiculo":1,"titulo":"El ensueño de la esposa"},{"versiculo":6,"titulo":"El cortejo de bodas"}],"4":[{"versiculo":1,"titulo":"El esposo alaba a la esposa"}],"5":[{"versiculo":2,"titulo":"El tormento de la separación"},{"versiculo":9,"titulo":"La esposa alaba al esposo"}],"6":[{"versiculo":1,"titulo":"Mutuo encanto del esposo y de la esposa"}],"8":[{"versiculo":5,"titulo":"El poder del amor"}]},"isaias":{"1":[{"versiculo":1,"titulo":"Una nación pecadora"},{"versiculo":10,"titulo":"Llamamiento al arrepentimiento verdadero"},{"versiculo":21,"titulo":"Juicio y redención de Jerusalén"}],"2":[{"versiculo":1,"titulo":"Reinado universal de Jehová"},{"versiculo":5,"titulo":"Juicio de Jehová contra los soberbios"}],"3":[{"versiculo":1,"titulo":"Juicio de Jehová contra Judá y Jerusalén"},{"versiculo":16,"titulo":"Juicio contra las hijas de Sion"}],"4":[{"versiculo":2,"titulo":"Futuro glorioso de Jerusalén"}],"5":[{"versiculo":1,"titulo":"Parábola de la viña"},{"versiculo":8,"titulo":"Ayes sobre los malvados"}],"6":[{"versiculo":1,"titulo":"Visión y llamamiento de Isaías"}],"7":[{"versiculo":1,"titulo":"Mensaje de Isaías a Acaz"}],"8":[{"versiculo":1,"titulo":"Sea Jehová vuestro temor"}],"9":[{"versiculo":1,"titulo":"Nacimiento y reinado del Mesías"},{"versiculo":8,"titulo":"La ira de Jehová contra Israel"}],"10":[{"versiculo":5,"titulo":"Asiria, instrumento de Dios"}],"11":[{"versiculo":1,"titulo":"Reinado justo del Mesías"}],"12":[{"versiculo":1,"titulo":"Cántico de acción de gracias"}],"13":[{"versiculo":1,"titulo":"Profecía sobre Babilonia"}],"14":[{"versiculo":1,"titulo":"Escarnio contra el rey de Babilonia"},{"versiculo":24,"titulo":"Asiria será destruida"},{"versiculo":28,"titulo":"Profecía sobre Filistea"}],"15":[{"versiculo":1,"titulo":"Profecía sobre Moab"}],"17":[{"versiculo":1,"titulo":"Profecía sobre Damasco"},{"versiculo":4,"titulo":"Juicio sobre Israel"}],"18":[{"versiculo":1,"titulo":"Profecía sobre Etiopía"}],"19":[{"versiculo":1,"titulo":"Profecía sobre Egipto"}],"20":[{"versiculo":1,"titulo":"Predicción de la conquista de Egipto y de Etiopía por Asiria"}],"21":[{"versiculo":1,"titulo":"Profecía sobre el desierto del mar"},{"versiculo":11,"titulo":"Profecía sobre Duma"},{"versiculo":13,"titulo":"Profecía sobre Arabia"}],"22":[{"versiculo":1,"titulo":"Profecía sobre el valle de la visión"},{"versiculo":15,"titulo":"Sebna será sustituido por Eliaquim"}],"23":[{"versiculo":1,"titulo":"Profecía sobre Tiro"}],"24":[{"versiculo":1,"titulo":"El juicio de Jehová sobre la tierra"}],"25":[{"versiculo":1,"titulo":"Cántico de alabanza por el favor de Jehová"}],"26":[{"versiculo":1,"titulo":"Cántico de confianza en la protección de Jehová"}],"27":[{"versiculo":1,"titulo":"Liberación y regreso de Israel"}],"28":[{"versiculo":1,"titulo":"Condenación de Efraín"},{"versiculo":14,"titulo":"Amonestación a Jerusalén"}],"29":[{"versiculo":1,"titulo":"Ariel y sus enemigos"},{"versiculo":9,"titulo":"Ceguera e hipocresía de Israel"},{"versiculo":17,"titulo":"Redención de Israel"}],"30":[{"versiculo":1,"titulo":"La futilidad de confiar en Egipto"},{"versiculo":18,"titulo":"Promesa de la gracia de Dios a Israel"},{"versiculo":27,"titulo":"El juicio de Jehová sobre Asiria"}],"31":[{"versiculo":1,"titulo":"Los egipcios son hombres y no dioses"}],"32":[{"versiculo":1,"titulo":"El Rey justo"},{"versiculo":9,"titulo":"Advertencia a las mujeres de Jerusalén"}],"33":[{"versiculo":1,"titulo":"Jehová traerá salvación"}],"34":[{"versiculo":1,"titulo":"La ira de Jehová contra las naciones"}],"35":[{"versiculo":1,"titulo":"Futuro glorioso de Sion"}],"36":[{"versiculo":1,"titulo":"La invasión de Senaquerib"}],"37":[{"versiculo":1,"titulo":"Judá es librado de Senaquerib"}],"38":[{"versiculo":1,"titulo":"Enfermedad de Ezequías"}],"39":[{"versiculo":1,"titulo":"Ezequías recibe a los enviados de Babilonia"}],"40":[{"versiculo":1,"titulo":"Jehová consuela a Sion"},{"versiculo":12,"titulo":"El incomparable Dios de Israel"}],"41":[{"versiculo":1,"titulo":"Seguridad de Dios para Israel"},{"versiculo":21,"titulo":"Dios reta a los falsos dioses"}],"42":[{"versiculo":1,"titulo":"El Siervo de Jehová"},{"versiculo":10,"titulo":"Alabanza por la liberación poderosa de Jehová"},{"versiculo":18,"titulo":"Israel no aprende de la disciplina"}],"43":[{"versiculo":1,"titulo":"Jehová es el único Redentor"}],"44":[{"versiculo":1,"titulo":"Jehová es el único Dios"},{"versiculo":9,"titulo":"La insensatez de la idolatría"},{"versiculo":21,"titulo":"Jehová es el Redentor de Israel"}],"45":[{"versiculo":1,"titulo":"Encargo de Dios para Ciro"},{"versiculo":8,"titulo":"Jehová el Creador"},{"versiculo":20,"titulo":"Jehová y los ídolos de Babilonia"}],"47":[{"versiculo":1,"titulo":"Juicio sobre Babilonia"}],"48":[{"versiculo":1,"titulo":"Dios reprende la infidelidad de Israel"}],"49":[{"versiculo":1,"titulo":"Israel, siervo de Jehová"},{"versiculo":8,"titulo":"Dios promete restaurar a Sion"}],"50":[{"versiculo":1,"titulo":"Jehová ayuda a quienes confían en él"}],"51":[{"versiculo":1,"titulo":"Palabras de consuelo para Sion"}],"52":[{"versiculo":1,"titulo":"Dios librará del cautiverio a Sion"},{"versiculo":13,"titulo":"Sufrimientos del Siervo de Jehová"}],"54":[{"versiculo":1,"titulo":"El amor eterno de Jehová hacia Israel"}],"55":[{"versiculo":1,"titulo":"Misericordia gratuita para todos"}],"56":[{"versiculo":1,"titulo":"Recompensa de los que guardan el pacto de Dios"}],"57":[{"versiculo":1,"titulo":"Condenación de la idolatría de Israel"}],"58":[{"versiculo":1,"titulo":"El verdadero ayuno"},{"versiculo":13,"titulo":"La observancia del día de reposo"}],"59":[{"versiculo":1,"titulo":"Confesión del pecado de Israel"}],"60":[{"versiculo":1,"titulo":"La futura gloria de Sion"}],"61":[{"versiculo":1,"titulo":"Buenas nuevas de salvación para Sion"}],"63":[{"versiculo":1,"titulo":"El día de la venganza de Jehová"},{"versiculo":7,"titulo":"Bondad de Jehová hacia Israel"},{"versiculo":15,"titulo":"Plegaria pidiendo misericordia y ayuda"}],"65":[{"versiculo":1,"titulo":"Castigo de los rebeldes"},{"versiculo":17,"titulo":"Cielos nuevos y tierra nueva"}],"66":[{"versiculo":1,"titulo":"Los juicios de Jehová y la futura prosperidad de Sion"}]},"jeremias":{"1":[{"versiculo":1,"titulo":"Llamamiento y misión de Jeremías"}],"2":[{"versiculo":1,"titulo":"Jehová y la apostasía de Israel"}],"3":[{"versiculo":6,"titulo":"Jehová exhorta a Israel y a Judá al arrepentimiento"}],"4":[{"versiculo":5,"titulo":"Judá es amenazada de invasión"}],"5":[{"versiculo":1,"titulo":"Impiedad de Jerusalén y de Judá"}],"6":[{"versiculo":1,"titulo":"El juicio contra Jerusalén y Judá"}],"7":[{"versiculo":1,"titulo":"Mejorad vuestros caminos y vuestras obras"},{"versiculo":21,"titulo":"Castigo de la rebelión de Judá"}],"8":[{"versiculo":18,"titulo":"Lamento sobre Judá y Jerusalén"}],"9":[{"versiculo":12,"titulo":"Amenaza de ruina y exilio"},{"versiculo":23,"titulo":"El conocimiento de Dios es la gloria del hombre"}],"10":[{"versiculo":1,"titulo":"Los falsos dioses y el Dios verdadero"},{"versiculo":17,"titulo":"Asolamiento de Judá"}],"11":[{"versiculo":1,"titulo":"El pacto violado"},{"versiculo":18,"titulo":"Complot contra Jeremías"}],"12":[{"versiculo":1,"titulo":"Queja de Jeremías y respuesta de Dios"}],"13":[{"versiculo":1,"titulo":"La señal del cinto podrido"},{"versiculo":12,"titulo":"La señal de las tinajas llenas"},{"versiculo":15,"titulo":"Judá será llevada en cautiverio"}],"14":[{"versiculo":1,"titulo":"Mensaje con motivo de la sequía"}],"15":[{"versiculo":1,"titulo":"La implacable ira de Dios contra Judá"},{"versiculo":15,"titulo":"Jehová reanima a Jeremías"}],"16":[{"versiculo":1,"titulo":"Juicio de Jehová contra Judá"}],"17":[{"versiculo":1,"titulo":"El pecado escrito en el corazón de Judá"},{"versiculo":19,"titulo":"Observancia del día de reposo"}],"18":[{"versiculo":1,"titulo":"La señal del alfarero y el barro"},{"versiculo":18,"titulo":"Conspiración del pueblo y oración de Jeremías"}],"19":[{"versiculo":1,"titulo":"La señal de la vasija rota"}],"20":[{"versiculo":1,"titulo":"Profecía contra Pasur"},{"versiculo":7,"titulo":"Lamento de Jeremías"}],"21":[{"versiculo":1,"titulo":"Jerusalén será destruida"}],"22":[{"versiculo":1,"titulo":"Profecías contra los reyes de Judá"}],"23":[{"versiculo":1,"titulo":"Regreso del remanente"},{"versiculo":9,"titulo":"Denunciación de los falsos profetas"}],"24":[{"versiculo":1,"titulo":"La señal de los higos buenos y malos"}],"25":[{"versiculo":1,"titulo":"Setenta años de desolación"},{"versiculo":15,"titulo":"La copa de ira para las naciones"}],"26":[{"versiculo":1,"titulo":"Jeremías es amenazado de muerte"}],"27":[{"versiculo":1,"titulo":"La señal de los yugos"}],"28":[{"versiculo":1,"titulo":"Falsa profecía de Hananías"}],"29":[{"versiculo":1,"titulo":"Carta de Jeremías a los cautivos"}],"30":[{"versiculo":1,"titulo":"Dios promete que los cautivos volverán"}],"31":[{"versiculo":27,"titulo":"El nuevo pacto"}],"32":[{"versiculo":1,"titulo":"Jeremías compra la heredad de Hanameel"}],"33":[{"versiculo":1,"titulo":"Restauración de la prosperidad de Jerusalén"}],"34":[{"versiculo":1,"titulo":"Jeremías amonesta a Sedequías"},{"versiculo":8,"titulo":"Violación del pacto de libertar a los siervos hebreos"}],"35":[{"versiculo":1,"titulo":"Obediencia de los recabitas"}],"36":[{"versiculo":1,"titulo":"El rey quema el rollo"}],"37":[{"versiculo":1,"titulo":"Encarcelamiento de Jeremías"}],"38":[{"versiculo":1,"titulo":"Jeremías en la cisterna"},{"versiculo":14,"titulo":"Sedequías consulta secretamente a Jeremías"}],"39":[{"versiculo":1,"titulo":"Caída de Jerusalén"},{"versiculo":11,"titulo":"Nabucodonosor cuida de Jeremías"},{"versiculo":15,"titulo":"Dios promete librar a Ebed-melec"}],"40":[{"versiculo":1,"titulo":"Jeremías y el remanente con Gedalías"},{"versiculo":13,"titulo":"Conspiración de Ismael contra Gedalías"}],"42":[{"versiculo":1,"titulo":"Mensaje a Johanán"}],"43":[{"versiculo":1,"titulo":"La emigración a Egipto"}],"44":[{"versiculo":1,"titulo":"Jeremías profetiza a los judíos en Egipto"}],"45":[{"versiculo":1,"titulo":"Mensaje a Baruc"}],"46":[{"versiculo":1,"titulo":"Profecías acerca de Egipto"}],"47":[{"versiculo":1,"titulo":"Profecía sobre los filisteos"}],"48":[{"versiculo":1,"titulo":"Profecía sobre Moab"}],"49":[{"versiculo":1,"titulo":"Profecía sobre los amonitas"},{"versiculo":7,"titulo":"Profecía sobre Edom"},{"versiculo":23,"titulo":"Profecía sobre Damasco"},{"versiculo":28,"titulo":"Profecía sobre Cedar y Hazor"},{"versiculo":34,"titulo":"Profecía sobre Elam"}],"50":[{"versiculo":1,"titulo":"Profecía sobre Babilonia"}],"51":[{"versiculo":1,"titulo":"Juicios de Jehová contra Babilonia"}],"52":[{"versiculo":1,"titulo":"Reinado de Sedequías"},{"versiculo":4,"titulo":"Caída de Jerusalén"},{"versiculo":12,"titulo":"Cautividad de Judá"},{"versiculo":31,"titulo":"Joaquín es libertado y recibe honores en Babilonia"}]},"lamentaciones":{"1":[{"versiculo":1,"titulo":"Tristezas de Sion la cautiva"}],"2":[{"versiculo":1,"titulo":"Las tristezas de Sion vienen de Jehová"}],"3":[{"versiculo":1,"titulo":"Esperanza de liberación por la misericordia de Dios"}],"4":[{"versiculo":1,"titulo":"El castigo de Sion consumado"}],"5":[{"versiculo":1,"titulo":"Oración del pueblo afligido"}]},"ezequiel":{"1":[{"versiculo":1,"titulo":"La visión de la gloria divina"}],"2":[{"versiculo":1,"titulo":"Llamamiento de Ezequiel"}],"3":[{"versiculo":16,"titulo":"El atalaya de Israel"},{"versiculo":22,"titulo":"El profeta mudo"}],"4":[{"versiculo":1,"titulo":"Predicción del sitio de Jerusalén"}],"6":[{"versiculo":1,"titulo":"Profecía contra los montes de Israel"}],"7":[{"versiculo":1,"titulo":"El fin viene"}],"8":[{"versiculo":1,"titulo":"Visión de las abominaciones en Jerusalén"}],"9":[{"versiculo":1,"titulo":"Visión de la muerte de los culpables"}],"10":[{"versiculo":1,"titulo":"La gloria de Dios abandona el templo"}],"11":[{"versiculo":1,"titulo":"Reprensión de los príncipes malvados"},{"versiculo":14,"titulo":"Promesa de restauración y renovación"}],"12":[{"versiculo":1,"titulo":"Salida de Ezequiel en señal de la cautividad"}],"13":[{"versiculo":1,"titulo":"Condenación de los falsos profetas"}],"14":[{"versiculo":1,"titulo":"Juicio contra los idólatras que consultan al profeta"},{"versiculo":12,"titulo":"Justicia del castigo de Jerusalén"}],"15":[{"versiculo":1,"titulo":"Jerusalén es como una vid inútil"}],"16":[{"versiculo":1,"titulo":"Infidelidad de Jerusalén"}],"17":[{"versiculo":1,"titulo":"Parábola de las águilas y la vid"}],"18":[{"versiculo":1,"titulo":"El alma que pecare morirá"},{"versiculo":21,"titulo":"El camino de Dios es justo"}],"19":[{"versiculo":1,"titulo":"Lamentación sobre los príncipes de Israel"}],"20":[{"versiculo":1,"titulo":"Modo de proceder de Dios con Israel"},{"versiculo":45,"titulo":"Profecía contra el Neguev"}],"21":[{"versiculo":1,"titulo":"La espada afilada de Jehová"},{"versiculo":28,"titulo":"Juicio contra los amonitas"}],"22":[{"versiculo":1,"titulo":"Los pecados de Jerusalén"}],"23":[{"versiculo":1,"titulo":"Las dos hermanas"}],"24":[{"versiculo":1,"titulo":"Parábola de la olla hirviente"},{"versiculo":15,"titulo":"Muerte de la esposa de Ezequiel"}],"25":[{"versiculo":1,"titulo":"Profecía contra Amón"},{"versiculo":8,"titulo":"Profecía contra Moab"},{"versiculo":12,"titulo":"Profecía contra Edom"},{"versiculo":15,"titulo":"Profecía contra los filisteos"}],"26":[{"versiculo":1,"titulo":"Profecía contra Tiro"}],"28":[{"versiculo":20,"titulo":"Profecía contra Sidón"}],"29":[{"versiculo":1,"titulo":"Profecías contra Egipto"}],"33":[{"versiculo":1,"titulo":"El deber del atalaya"},{"versiculo":10,"titulo":"El camino de Dios es justo"},{"versiculo":21,"titulo":"Nuevas de la caída de Jerusalén"}],"34":[{"versiculo":1,"titulo":"Profecía contra los pastores de Israel"}],"35":[{"versiculo":1,"titulo":"Profecía contra el monte de Seir"}],"36":[{"versiculo":1,"titulo":"Restauración futura de Israel"}],"37":[{"versiculo":1,"titulo":"El valle de los huesos secos"},{"versiculo":15,"titulo":"La reunión de Judá e Israel"}],"38":[{"versiculo":1,"titulo":"Profecía contra Gog"}],"40":[{"versiculo":1,"titulo":"La visión del templo"}],"43":[{"versiculo":1,"titulo":"La gloria de Jehová llena el templo"},{"versiculo":6,"titulo":"Leyes del templo"}],"47":[{"versiculo":1,"titulo":"Las aguas salutíferas"},{"versiculo":13,"titulo":"Límites y repartición de la tierra"}]},"daniel":{"1":[{"versiculo":1,"titulo":"Daniel y sus compañeros en Babilonia"}],"2":[{"versiculo":1,"titulo":"Daniel interpreta el sueño de Nabucodonosor"}],"3":[{"versiculo":1,"titulo":"Rescatados del horno de fuego"}],"4":[{"versiculo":1,"titulo":"La locura de Nabucodonosor"}],"5":[{"versiculo":1,"titulo":"La escritura en la pared"}],"6":[{"versiculo":1,"titulo":"Daniel en el foso de los leones"}],"7":[{"versiculo":1,"titulo":"Visión de las cuatro bestias"}],"8":[{"versiculo":1,"titulo":"Visión del carnero y del macho cabrío"}],"9":[{"versiculo":1,"titulo":"Oración de Daniel por su pueblo"},{"versiculo":20,"titulo":"Profecía de las setenta semanas"}],"10":[{"versiculo":1,"titulo":"Visión de Daniel junto al río"}],"11":[{"versiculo":2,"titulo":"Los reyes del norte y del sur"}],"12":[{"versiculo":1,"titulo":"El tiempo del fin"}]},"oseas":{"1":[{"versiculo":1,"titulo":"La esposa infiel de Oseas, y sus hijos"}],"2":[{"versiculo":1,"titulo":"El amor de Jehová hacia su pueblo infiel"}],"3":[{"versiculo":1,"titulo":"Oseas y la adúltera"}],"4":[{"versiculo":1,"titulo":"Controversia de Jehová con Israel"}],"5":[{"versiculo":1,"titulo":"Castigo de la apostasía de Israel"},{"versiculo":15,"titulo":"Insinceridad del arrepentimiento de Israel"}],"7":[{"versiculo":1,"titulo":"Iniquidad y rebelión de Israel"}],"8":[{"versiculo":1,"titulo":"Reprensión de la idolatría de Israel"}],"9":[{"versiculo":1,"titulo":"Castigo de la persistente infidelidad de Israel"}],"11":[{"versiculo":1,"titulo":"Dios se compadece de su pueblo obstinado"}],"12":[{"versiculo":1,"titulo":"Efraín reprendido por su falsedad y opresión"}],"13":[{"versiculo":1,"titulo":"Destrucción total de Efraín predicha"}],"14":[{"versiculo":1,"titulo":"Súplica a Israel para que vuelva a Jehová"}]},"joel":{"1":[{"versiculo":1,"titulo":"Devastación de la tierra por la langosta"}],"2":[{"versiculo":12,"titulo":"La misericordia de Jehová"},{"versiculo":28,"titulo":"Derramamiento del Espíritu de Dios"}],"3":[{"versiculo":1,"titulo":"Juicio de Jehová sobre las naciones"},{"versiculo":16,"titulo":"Liberación de Judá"}]},"amos":{"1":[{"versiculo":1,"titulo":"Juicios contra las naciones vecinas"}],"2":[{"versiculo":6,"titulo":"Juicio contra Israel"}],"3":[{"versiculo":1,"titulo":"El rugido del león"},{"versiculo":9,"titulo":"Destrucción de Samaria"}],"4":[{"versiculo":4,"titulo":"Aunque castigado, Israel no aprende"}],"5":[{"versiculo":1,"titulo":"Llamamiento al arrepentimiento"}],"6":[{"versiculo":1,"titulo":"Destrucción de Israel"}],"7":[{"versiculo":1,"titulo":"Tres visiones de destrucción"},{"versiculo":10,"titulo":"Amós y Amasías"}],"8":[{"versiculo":1,"titulo":"El canastillo de fruta de verano"},{"versiculo":4,"titulo":"El juicio sobre Israel se acerca"}],"9":[{"versiculo":1,"titulo":"Los juicios de Jehová son ineludibles"},{"versiculo":11,"titulo":"Restauración futura de Israel"}]},"abdias":{"1":[{"versiculo":1,"titulo":"La humillación de Edom"},{"versiculo":15,"titulo":"La exaltación de Israel"}]},"jonas":{"1":[{"versiculo":1,"titulo":"Jonás huye de Jehová"}],"2":[{"versiculo":1,"titulo":"Oración de Jonás"}],"3":[{"versiculo":1,"titulo":"Nínive se arrepiente"}],"4":[{"versiculo":1,"titulo":"El enojo de Jonás"}]},"miqueas":{"1":[{"versiculo":1,"titulo":"Lamento sobre Samaria y Jerusalén"}],"2":[{"versiculo":1,"titulo":"¡Ay de los que oprimen a los pobres!"}],"3":[{"versiculo":1,"titulo":"Acusación contra los dirigentes de Israel"}],"4":[{"versiculo":1,"titulo":"Reinado universal de Jehová"},{"versiculo":6,"titulo":"Israel será redimido del cautiverio"}],"5":[{"versiculo":1,"titulo":"El reinado del libertador desde Belén"}],"6":[{"versiculo":1,"titulo":"Controversia de Jehová contra Israel"},{"versiculo":6,"titulo":"Lo que pide Jehová"}],"7":[{"versiculo":1,"titulo":"Corrupción moral de Israel"},{"versiculo":8,"titulo":"Jehová trae luz y libertad"},{"versiculo":14,"titulo":"Compasión de Jehová por Israel"}]},"nahum":{"1":[{"versiculo":1,"titulo":"La ira vengadora de Dios"},{"versiculo":15,"titulo":"Anuncio de la caída de Nínive"}],"2":[{"versiculo":13,"titulo":"Destrucción total de Nínive"}]},"habacuc":{"1":[{"versiculo":1,"titulo":"Habacuc se queja de injusticia"},{"versiculo":5,"titulo":"Los caldeos castigarán a Judá"},{"versiculo":12,"titulo":"Protesta de Habacuc"}],"2":[{"versiculo":1,"titulo":"Jehová responde a Habacuc"},{"versiculo":6,"titulo":"Ayes contra los injustos"}],"3":[{"versiculo":1,"titulo":"Oración de Habacuc"}]},"sofonias":{"1":[{"versiculo":1,"titulo":"El día de la ira de Jehová"}],"2":[{"versiculo":1,"titulo":"Juicios contra las naciones vecinas"}],"3":[{"versiculo":1,"titulo":"El pecado de Jerusalén, y su redención"}]},"hageo":{"1":[{"versiculo":1,"titulo":"Exhortación a edificar el templo"}],"2":[{"versiculo":1,"titulo":"La gloria del nuevo templo"},{"versiculo":10,"titulo":"La infidelidad del pueblo es reprendida"},{"versiculo":20,"titulo":"Promesa de Jehová a Zorobabel"}]},"zacarias":{"1":[{"versiculo":1,"titulo":"Llamamiento a volver a Jehová"},{"versiculo":7,"titulo":"La visión de los caballos"},{"versiculo":18,"titulo":"Visión de los cuernos y los carpinteros"}],"2":[{"versiculo":1,"titulo":"Llamamiento a los cautivos"}],"3":[{"versiculo":1,"titulo":"Visión del sumo sacerdote Josué"}],"4":[{"versiculo":1,"titulo":"El candelabro de oro y los olivos"}],"5":[{"versiculo":1,"titulo":"El rollo volante"},{"versiculo":5,"titulo":"La mujer en el efa"}],"6":[{"versiculo":1,"titulo":"Los cuatro carros"},{"versiculo":9,"titulo":"Coronación simbólica de Josué"}],"7":[{"versiculo":1,"titulo":"El ayuno que Dios reprueba"},{"versiculo":8,"titulo":"La desobediencia, causa del cautiverio"}],"8":[{"versiculo":1,"titulo":"Promesa de la restauración de Jerusalén"}],"9":[{"versiculo":1,"titulo":"Castigo de las naciones vecinas"},{"versiculo":9,"titulo":"El futuro rey de Sion"}],"10":[{"versiculo":1,"titulo":"Jehová redimirá a su pueblo"}],"11":[{"versiculo":4,"titulo":"Los pastores inútiles"}],"12":[{"versiculo":1,"titulo":"Liberación futura de Jerusalén"}],"13":[{"versiculo":7,"titulo":"El pastor de Jehová es herido"}],"14":[{"versiculo":1,"titulo":"Jerusalén y las naciones"}]},"malaquias":{"1":[{"versiculo":1,"titulo":"Amor de Jehová por Jacob"},{"versiculo":6,"titulo":"Jehová reprende a los sacerdotes"}],"2":[{"versiculo":1,"titulo":"Reprensión de la infidelidad de Israel"},{"versiculo":17,"titulo":"El día del juicio se acerca"}],"3":[{"versiculo":6,"titulo":"El pago de los diezmos"},{"versiculo":13,"titulo":"Diferencia entre el justo y el malo"}],"4":[{"versiculo":1,"titulo":"El advenimiento del día de Jehová"}]},"mateo":{"1":[{"versiculo":1,"titulo":"Genealogía de Jesucristo"},{"versiculo":18,"titulo":"Nacimiento de Jesucristo"}],"2":[{"versiculo":1,"titulo":"La visita de los magos"},{"versiculo":13,"titulo":"Matanza de los niños"}],"3":[{"versiculo":1,"titulo":"Predicación de Juan el Bautista"},{"versiculo":13,"titulo":"El bautismo de Jesús"}],"4":[{"versiculo":1,"titulo":"Tentación de Jesús"},{"versiculo":12,"titulo":"Jesús principia su ministerio"}],"5":[{"versiculo":1,"titulo":"El Sermón del monte: Las bienaventuranzas"},{"versiculo":13,"titulo":"La sal de la tierra"},{"versiculo":14,"titulo":"La luz del mundo"},{"versiculo":17,"titulo":"Jesús y la ley"},{"versiculo":21,"titulo":"Jesús y la ira"},{"versiculo":27,"titulo":"Jesús y el adulterio"},{"versiculo":31,"titulo":"Jesús y el divorcio"},{"versiculo":33,"titulo":"Jesús y los juramentos"},{"versiculo":38,"titulo":"El amor hacia los enemigos"}],"6":[{"versiculo":1,"titulo":"Jesús y la limosna"},{"versiculo":5,"titulo":"Jesús y la oración"},{"versiculo":16,"titulo":"Jesús y el ayuno"},{"versiculo":19,"titulo":"Tesoros en el cielo"},{"versiculo":22,"titulo":"La lámpara del cuerpo"},{"versiculo":24,"titulo":"Dios y las riquezas"},{"versiculo":25,"titulo":"El afán y la ansiedad"}],"7":[{"versiculo":1,"titulo":"El juzgar a los demás"},{"versiculo":7,"titulo":"La oración, y la regla de oro"},{"versiculo":13,"titulo":"La puerta estrecha"},{"versiculo":15,"titulo":"Por sus frutos los conoceréis"},{"versiculo":21,"titulo":"Nunca os conocí"},{"versiculo":24,"titulo":"Los dos cimientos"}],"8":[{"versiculo":1,"titulo":"Jesús sana a un leproso"},{"versiculo":5,"titulo":"Jesús sana al siervo de un centurión"},{"versiculo":14,"titulo":"Jesús sana a la suegra de Pedro"},{"versiculo":18,"titulo":"Los que querían seguir a Jesús"},{"versiculo":23,"titulo":"Jesús calma la tempestad"},{"versiculo":28,"titulo":"Los endemoniados gadarenos"}],"9":[{"versiculo":1,"titulo":"Jesús sana a un paralítico"},{"versiculo":9,"titulo":"Llamamiento de Mateo"},{"versiculo":14,"titulo":"La pregunta sobre el ayuno"},{"versiculo":18,"titulo":"La hija de Jairo, y la mujer que tocó el manto de Jesús"},{"versiculo":27,"titulo":"Dos ciegos reciben la vista"},{"versiculo":32,"titulo":"Un mudo habla"},{"versiculo":35,"titulo":"La mies es mucha"}],"10":[{"versiculo":1,"titulo":"Elección de los doce apóstoles"},{"versiculo":5,"titulo":"Misión de los doce"},{"versiculo":16,"titulo":"Persecuciones venideras"},{"versiculo":26,"titulo":"A quién se debe temer"},{"versiculo":34,"titulo":"Jesús, causa de división"},{"versiculo":40,"titulo":"Recompensas"}],"11":[{"versiculo":1,"titulo":"Los mensajeros de Juan el Bautista"},{"versiculo":20,"titulo":"Ayes sobre las ciudades impenitentes"},{"versiculo":25,"titulo":"Venid a mí y descansad"}],"12":[{"versiculo":1,"titulo":"Los discípulos recogen espigas en el día de reposo"},{"versiculo":9,"titulo":"El hombre de la mano seca"},{"versiculo":15,"titulo":"El siervo escogido"},{"versiculo":22,"titulo":"La blasfemia contra el Espíritu Santo"},{"versiculo":38,"titulo":"La generación perversa demanda señal"},{"versiculo":43,"titulo":"El espíritu inmundo que vuelve"},{"versiculo":46,"titulo":"La madre y los hermanos de Jesús"}],"13":[{"versiculo":1,"titulo":"Parábola del sembrador"},{"versiculo":10,"titulo":"Propósito de las parábolas"},{"versiculo":18,"titulo":"Jesús explica la parábola del sembrador"},{"versiculo":24,"titulo":"Parábola del trigo y la cizaña"},{"versiculo":31,"titulo":"Parábola de la semilla de mostaza"},{"versiculo":33,"titulo":"Parábola de la levadura"},{"versiculo":34,"titulo":"El uso que Jesús hace de las parábolas"},{"versiculo":36,"titulo":"Jesús explica la parábola de la cizaña"},{"versiculo":44,"titulo":"El tesoro escondido"},{"versiculo":45,"titulo":"La perla de gran precio"},{"versiculo":47,"titulo":"La red"},{"versiculo":51,"titulo":"Tesoros nuevos y viejos"},{"versiculo":53,"titulo":"Jesús en Nazaret"}],"14":[{"versiculo":1,"titulo":"Muerte de Juan el Bautista"},{"versiculo":13,"titulo":"Alimentación de los cinco mil"},{"versiculo":22,"titulo":"Jesús anda sobre el mar"},{"versiculo":34,"titulo":"Jesús sana a los enfermos en Genesaret"}],"15":[{"versiculo":1,"titulo":"Lo que contamina al hombre"},{"versiculo":21,"titulo":"La fe de la mujer cananea"},{"versiculo":29,"titulo":"Jesús sana a muchos"},{"versiculo":32,"titulo":"Alimentación de los cuatro mil"}],"16":[{"versiculo":1,"titulo":"La demanda de una señal"},{"versiculo":5,"titulo":"La levadura de los fariseos"},{"versiculo":13,"titulo":"La confesión de Pedro"},{"versiculo":21,"titulo":"Jesús anuncia su muerte"}],"17":[{"versiculo":1,"titulo":"La transfiguración"},{"versiculo":14,"titulo":"Jesús sana a un muchacho lunático"},{"versiculo":22,"titulo":"Jesús anuncia otra vez su muerte"},{"versiculo":24,"titulo":"Pago del impuesto del templo"}],"18":[{"versiculo":1,"titulo":"¿Quién es el mayor?"},{"versiculo":6,"titulo":"Ocasiones de caer"},{"versiculo":10,"titulo":"Parábola de la oveja perdida"},{"versiculo":15,"titulo":"Cómo se debe perdonar al hermano"},{"versiculo":23,"titulo":"Los dos deudores"}],"19":[{"versiculo":1,"titulo":"Jesús enseña sobre el divorcio"},{"versiculo":13,"titulo":"Jesús bendice a los niños"},{"versiculo":16,"titulo":"El joven rico"}],"20":[{"versiculo":1,"titulo":"Los obreros de la viña"},{"versiculo":17,"titulo":"Nuevamente Jesús anuncia su muerte"},{"versiculo":20,"titulo":"Petición de Santiago y de Juan"},{"versiculo":29,"titulo":"Dos ciegos reciben la vista"}],"21":[{"versiculo":1,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":12,"titulo":"Purificación del templo"},{"versiculo":18,"titulo":"Maldición de la higuera estéril"},{"versiculo":23,"titulo":"La autoridad de Jesús"},{"versiculo":28,"titulo":"Parábola de los dos hijos"},{"versiculo":33,"titulo":"Los labradores malvados"}],"22":[{"versiculo":1,"titulo":"Parábola de la fiesta de bodas"},{"versiculo":15,"titulo":"La cuestión del tributo"},{"versiculo":23,"titulo":"La pregunta sobre la resurrección"},{"versiculo":34,"titulo":"El gran mandamiento"},{"versiculo":41,"titulo":"¿De quién es hijo el Cristo?"}],"23":[{"versiculo":1,"titulo":"Jesús acusa a escribas y fariseos"},{"versiculo":37,"titulo":"Lamento de Jesús sobre Jerusalén"}],"24":[{"versiculo":1,"titulo":"Jesús predice la destrucción del templo"},{"versiculo":3,"titulo":"Señales antes del fin"},{"versiculo":29,"titulo":"La venida del Hijo del Hombre"}],"25":[{"versiculo":1,"titulo":"Parábola de las diez vírgenes"},{"versiculo":14,"titulo":"Parábola de los talentos"},{"versiculo":31,"titulo":"El juicio de las naciones"}],"26":[{"versiculo":1,"titulo":"El complot para prender a Jesús"},{"versiculo":6,"titulo":"Jesús es ungido en Betania"},{"versiculo":14,"titulo":"Judas ofrece entregar a Jesús"},{"versiculo":17,"titulo":"Institución de la Cena del Señor"},{"versiculo":30,"titulo":"Jesús anuncia la negación de Pedro"},{"versiculo":36,"titulo":"Jesús ora en Getsemaní"},{"versiculo":47,"titulo":"Arresto de Jesús"},{"versiculo":57,"titulo":"Jesús ante el concilio"},{"versiculo":69,"titulo":"Pedro niega a Jesús"}],"27":[{"versiculo":1,"titulo":"Jesús ante Pilato"},{"versiculo":3,"titulo":"Muerte de Judas"},{"versiculo":11,"titulo":"Pilato interroga a Jesús"},{"versiculo":15,"titulo":"Jesús sentenciado a muerte"},{"versiculo":32,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":57,"titulo":"Jesús es sepultado"},{"versiculo":62,"titulo":"La guardia ante la tumba"}],"28":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":11,"titulo":"El informe de la guardia"},{"versiculo":16,"titulo":"La gran comisión"}]},"marcos":{"1":[{"versiculo":1,"titulo":"Predicación de Juan el Bautista"},{"versiculo":9,"titulo":"El bautismo de Jesús"},{"versiculo":12,"titulo":"Tentación de Jesús"},{"versiculo":14,"titulo":"Jesús principia su ministerio"},{"versiculo":16,"titulo":"Jesús llama a cuatro pescadores"},{"versiculo":21,"titulo":"Un hombre que tenía un espíritu inmundo"},{"versiculo":29,"titulo":"Jesús sana a la suegra de Pedro"},{"versiculo":32,"titulo":"Muchos sanados al ponerse el sol"},{"versiculo":35,"titulo":"Jesús recorre Galilea predicando"},{"versiculo":40,"titulo":"Jesús sana a un leproso"}],"2":[{"versiculo":1,"titulo":"Jesús sana a un paralítico"},{"versiculo":13,"titulo":"Llamamiento de Leví"},{"versiculo":18,"titulo":"La pregunta sobre el ayuno"},{"versiculo":23,"titulo":"Los discípulos recogen espigas en el día de reposo"}],"3":[{"versiculo":1,"titulo":"El hombre de la mano seca"},{"versiculo":7,"titulo":"La multitud a la orilla del mar"},{"versiculo":13,"titulo":"Elección de los doce apóstoles"},{"versiculo":20,"titulo":"La blasfemia contra el Espíritu Santo"},{"versiculo":31,"titulo":"La madre y los hermanos de Jesús"}],"4":[{"versiculo":1,"titulo":"Parábola del sembrador"},{"versiculo":21,"titulo":"Nada oculto que no haya de ser manifestado"},{"versiculo":26,"titulo":"Parábola del crecimiento de la semilla"},{"versiculo":30,"titulo":"Parábola de la semilla de mostaza"},{"versiculo":33,"titulo":"El uso que Jesús hace de las parábolas"},{"versiculo":35,"titulo":"Jesús calma la tempestad"}],"5":[{"versiculo":1,"titulo":"El endemoniado gadareno"},{"versiculo":21,"titulo":"La hija de Jairo, y la mujer que tocó el manto de Jesús"}],"6":[{"versiculo":1,"titulo":"Jesús en Nazaret"},{"versiculo":7,"titulo":"Misión de los doce discípulos"},{"versiculo":14,"titulo":"Muerte de Juan el Bautista"},{"versiculo":30,"titulo":"Alimentación de los cinco mil"},{"versiculo":45,"titulo":"Jesús anda sobre el mar"},{"versiculo":53,"titulo":"Jesús sana a los enfermos en Genesaret"}],"7":[{"versiculo":1,"titulo":"Lo que contamina al hombre"},{"versiculo":24,"titulo":"La fe de la mujer sirofenicia"},{"versiculo":31,"titulo":"Jesús sana a un sordomudo"}],"8":[{"versiculo":1,"titulo":"Alimentación de los cuatro mil"},{"versiculo":11,"titulo":"La demanda de una señal"},{"versiculo":14,"titulo":"La levadura de los fariseos"},{"versiculo":22,"titulo":"Un ciego sanado en Betsaida"},{"versiculo":27,"titulo":"La confesión de Pedro"},{"versiculo":31,"titulo":"Jesús anuncia su muerte"}],"9":[{"versiculo":2,"titulo":"La transfiguración"},{"versiculo":14,"titulo":"Jesús sana a un muchacho endemoniado"},{"versiculo":30,"titulo":"Jesús anuncia otra vez su muerte"},{"versiculo":33,"titulo":"¿Quién es el mayor?"},{"versiculo":38,"titulo":"El que no es contra nosotros, por nosotros es"},{"versiculo":42,"titulo":"Ocasiones de caer"}],"10":[{"versiculo":1,"titulo":"Jesús enseña sobre el divorcio"},{"versiculo":13,"titulo":"Jesús bendice a los niños"},{"versiculo":17,"titulo":"El joven rico"},{"versiculo":32,"titulo":"Nuevamente Jesús anuncia su muerte"},{"versiculo":35,"titulo":"Petición de Santiago y de Juan"},{"versiculo":46,"titulo":"El ciego Bartimeo recibe la vista"}],"11":[{"versiculo":1,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":12,"titulo":"Maldición de la higuera estéril"},{"versiculo":15,"titulo":"Purificación del templo"},{"versiculo":20,"titulo":"La higuera maldecida se seca"},{"versiculo":27,"titulo":"La autoridad de Jesús"}],"12":[{"versiculo":1,"titulo":"Los labradores malvados"},{"versiculo":13,"titulo":"La cuestión del tributo"},{"versiculo":18,"titulo":"La pregunta sobre la resurrección"},{"versiculo":28,"titulo":"El gran mandamiento"},{"versiculo":35,"titulo":"¿De quién es hijo el Cristo?"},{"versiculo":38,"titulo":"Jesús acusa a los escribas"},{"versiculo":41,"titulo":"La ofrenda de la viuda"}],"13":[{"versiculo":1,"titulo":"Jesús predice la destrucción del templo"},{"versiculo":3,"titulo":"Señales antes del fin"},{"versiculo":24,"titulo":"La venida del Hijo del Hombre"}],"14":[{"versiculo":1,"titulo":"El complot para prender a Jesús"},{"versiculo":3,"titulo":"Jesús es ungido en Betania"},{"versiculo":10,"titulo":"Judas ofrece entregar a Jesús"},{"versiculo":12,"titulo":"Institución de la Cena del Señor"},{"versiculo":26,"titulo":"Jesús anuncia la negación de Pedro"},{"versiculo":32,"titulo":"Jesús ora en Getsemaní"},{"versiculo":43,"titulo":"Arresto de Jesús"},{"versiculo":51,"titulo":"El joven que huyó"},{"versiculo":53,"titulo":"Jesús ante el concilio"},{"versiculo":66,"titulo":"Pedro niega a Jesús"}],"15":[{"versiculo":1,"titulo":"Jesús ante Pilato"},{"versiculo":6,"titulo":"Jesús sentenciado a muerte"},{"versiculo":21,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":42,"titulo":"Jesús es sepultado"}],"16":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":9,"titulo":"Jesús se aparece a María Magdalena"},{"versiculo":12,"titulo":"Jesús se aparece a dos de sus discípulos"},{"versiculo":14,"titulo":"Jesús comisiona a los apóstoles"},{"versiculo":19,"titulo":"La ascensión"}]},"lucas":{"1":[{"versiculo":1,"titulo":"Dedicatoria a Teófilo"},{"versiculo":5,"titulo":"Anuncio del nacimiento de Juan"},{"versiculo":26,"titulo":"Anuncio del nacimiento de Jesús"},{"versiculo":39,"titulo":"María visita a Elisabet"},{"versiculo":57,"titulo":"Nacimiento de Juan el Bautista"},{"versiculo":67,"titulo":"Profecía de Zacarías"}],"2":[{"versiculo":1,"titulo":"Nacimiento de Jesús"},{"versiculo":8,"titulo":"Los ángeles y los pastores"},{"versiculo":21,"titulo":"Presentación de Jesús en el templo"},{"versiculo":39,"titulo":"El regreso a Nazaret"},{"versiculo":41,"titulo":"El niño Jesús en el templo"}],"3":[{"versiculo":1,"titulo":"Predicación de Juan el Bautista"},{"versiculo":21,"titulo":"El bautismo de Jesús"},{"versiculo":23,"titulo":"Genealogía de Jesús"}],"4":[{"versiculo":1,"titulo":"Tentación de Jesús"},{"versiculo":14,"titulo":"Jesús principia su ministerio"},{"versiculo":16,"titulo":"Jesús en Nazaret"},{"versiculo":31,"titulo":"Un hombre que tenía un espíritu inmundo"},{"versiculo":38,"titulo":"Jesús sana a la suegra de Pedro"},{"versiculo":40,"titulo":"Muchos sanados al ponerse el sol"},{"versiculo":42,"titulo":"Jesús recorre Galilea predicando"}],"5":[{"versiculo":1,"titulo":"La pesca milagrosa"},{"versiculo":12,"titulo":"Jesús sana a un leproso"},{"versiculo":17,"titulo":"Jesús sana a un paralítico"},{"versiculo":27,"titulo":"Llamamiento de Leví"},{"versiculo":33,"titulo":"La pregunta sobre el ayuno"}],"6":[{"versiculo":1,"titulo":"Los discípulos recogen espigas en el día de reposo"},{"versiculo":6,"titulo":"El hombre de la mano seca"},{"versiculo":12,"titulo":"Elección de los doce apóstoles"},{"versiculo":17,"titulo":"Jesús atiende a una multitud"},{"versiculo":20,"titulo":"Bienaventuranzas y ayes"},{"versiculo":27,"titulo":"El amor hacia los enemigos, y la regla de oro"},{"versiculo":37,"titulo":"El juzgar a los demás"},{"versiculo":43,"titulo":"Por sus frutos los conoceréis"},{"versiculo":46,"titulo":"Los dos cimientos"}],"7":[{"versiculo":1,"titulo":"Jesús sana al siervo de un centurión"},{"versiculo":11,"titulo":"Jesús resucita al hijo de la viuda de Naín"},{"versiculo":18,"titulo":"Los mensajeros de Juan el Bautista"},{"versiculo":36,"titulo":"Jesús en el hogar de Simón el fariseo"}],"8":[{"versiculo":1,"titulo":"Mujeres que sirven a Jesús"},{"versiculo":4,"titulo":"Parábola del sembrador"},{"versiculo":16,"titulo":"Nada oculto que no haya de ser manifestado"},{"versiculo":19,"titulo":"La madre y los hermanos de Jesús"},{"versiculo":22,"titulo":"Jesús calma la tempestad"},{"versiculo":26,"titulo":"El endemoniado gadareno"},{"versiculo":40,"titulo":"La hija de Jairo, y la mujer que tocó el manto de Jesús"}],"9":[{"versiculo":1,"titulo":"Misión de los doce discípulos"},{"versiculo":7,"titulo":"Muerte de Juan el Bautista"},{"versiculo":10,"titulo":"Alimentación de los cinco mil"},{"versiculo":18,"titulo":"La confesión de Pedro"},{"versiculo":21,"titulo":"Jesús anuncia su muerte"},{"versiculo":28,"titulo":"La transfiguración"},{"versiculo":37,"titulo":"Jesús sana a un muchacho endemoniado"},{"versiculo":43,"titulo":"Jesús anuncia otra vez su muerte"},{"versiculo":46,"titulo":"¿Quién es el mayor?"},{"versiculo":49,"titulo":"El que no es contra nosotros, por nosotros es"},{"versiculo":51,"titulo":"Jesús reprende a Jacobo y a Juan"},{"versiculo":57,"titulo":"Los que querían seguir a Jesús"}],"10":[{"versiculo":1,"titulo":"Misión de los setenta"},{"versiculo":13,"titulo":"Ayes sobre las ciudades impenitentes"},{"versiculo":17,"titulo":"Regreso de los setenta"},{"versiculo":21,"titulo":"Jesús se regocija"},{"versiculo":25,"titulo":"El buen samaritano"},{"versiculo":38,"titulo":"Jesús visita a Marta y a María"}],"11":[{"versiculo":1,"titulo":"Jesús y la oración"},{"versiculo":14,"titulo":"Una casa dividida contra sí misma"},{"versiculo":24,"titulo":"El espíritu inmundo que vuelve"},{"versiculo":27,"titulo":"Los que en verdad son bienaventurados"},{"versiculo":29,"titulo":"La generación perversa demanda señal"},{"versiculo":33,"titulo":"La lámpara del cuerpo"},{"versiculo":37,"titulo":"Jesús acusa a fariseos y a intérpretes de la ley"}],"12":[{"versiculo":1,"titulo":"La levadura de los fariseos"},{"versiculo":4,"titulo":"A quién se debe temer"},{"versiculo":8,"titulo":"El que me confesare delante de los hombres"},{"versiculo":13,"titulo":"El rico insensato"},{"versiculo":22,"titulo":"El afán y la ansiedad"},{"versiculo":32,"titulo":"Tesoro en el cielo"},{"versiculo":35,"titulo":"El siervo vigilante"},{"versiculo":41,"titulo":"El siervo infiel"},{"versiculo":49,"titulo":"Jesús, causa de división"},{"versiculo":54,"titulo":"¿Cómo no reconocéis este tiempo?"},{"versiculo":57,"titulo":"Arréglate con tu adversario"}],"13":[{"versiculo":1,"titulo":"Arrepentíos o pereceréis"},{"versiculo":6,"titulo":"Parábola de la higuera estéril"},{"versiculo":10,"titulo":"Jesús sana a una mujer en el día de reposo"},{"versiculo":18,"titulo":"Parábola de la semilla de mostaza"},{"versiculo":20,"titulo":"Parábola de la levadura"},{"versiculo":22,"titulo":"La puerta estrecha"},{"versiculo":31,"titulo":"Lamento de Jesús sobre Jerusalén"}],"14":[{"versiculo":1,"titulo":"Jesús sana a un hidrópico"},{"versiculo":7,"titulo":"Los convidados a las bodas"},{"versiculo":15,"titulo":"Parábola de la gran cena"},{"versiculo":25,"titulo":"Lo que cuesta seguir a Cristo"},{"versiculo":34,"titulo":"Cuando la sal pierde su sabor"}],"15":[{"versiculo":1,"titulo":"Parábola de la oveja perdida"},{"versiculo":8,"titulo":"Parábola de la moneda perdida"},{"versiculo":11,"titulo":"Parábola del hijo pródigo"}],"16":[{"versiculo":1,"titulo":"Parábola del mayordomo infiel"},{"versiculo":16,"titulo":"La ley y el reino de Dios"},{"versiculo":18,"titulo":"Jesús enseña sobre el divorcio"},{"versiculo":19,"titulo":"El rico y Lázaro"}],"17":[{"versiculo":1,"titulo":"Ocasiones de caer"},{"versiculo":5,"titulo":"Auméntanos la fe"},{"versiculo":7,"titulo":"El deber del siervo"},{"versiculo":11,"titulo":"Diez leprosos son limpiados"},{"versiculo":20,"titulo":"La venida del Reino"}],"18":[{"versiculo":1,"titulo":"Parábola de la viuda y el juez injusto"},{"versiculo":9,"titulo":"Parábola del fariseo y el publicano"},{"versiculo":15,"titulo":"Jesús bendice a los niños"},{"versiculo":18,"titulo":"El joven rico"},{"versiculo":31,"titulo":"Nuevamente Jesús anuncia su muerte"},{"versiculo":35,"titulo":"Un ciego de Jericó recibe la vista"}],"19":[{"versiculo":1,"titulo":"Jesús y Zaqueo"},{"versiculo":11,"titulo":"Parábola de las diez minas"},{"versiculo":28,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":45,"titulo":"Purificación del templo"}],"20":[{"versiculo":1,"titulo":"La autoridad de Jesús"},{"versiculo":9,"titulo":"Los labradores malvados"},{"versiculo":19,"titulo":"La cuestión del tributo"},{"versiculo":27,"titulo":"La pregunta sobre la resurrección"},{"versiculo":41,"titulo":"¿De quién es hijo el Cristo?"},{"versiculo":45,"titulo":"Jesús acusa a los escribas"}],"21":[{"versiculo":1,"titulo":"La ofrenda de la viuda"},{"versiculo":5,"titulo":"Jesús predice la destrucción del templo"},{"versiculo":7,"titulo":"Señales antes del fin"},{"versiculo":25,"titulo":"La venida del Hijo del Hombre"}],"22":[{"versiculo":1,"titulo":"El complot para matar a Jesús"},{"versiculo":7,"titulo":"Institución de la Cena del Señor"},{"versiculo":24,"titulo":"La grandeza en el servicio"},{"versiculo":31,"titulo":"Jesús anuncia la negación de Pedro"},{"versiculo":35,"titulo":"Bolsa, alforja y espada"},{"versiculo":39,"titulo":"Jesús ora en Getsemaní"},{"versiculo":47,"titulo":"Arresto de Jesús"},{"versiculo":54,"titulo":"Pedro niega a Jesús"},{"versiculo":63,"titulo":"Jesús escarnecido y azotado"},{"versiculo":66,"titulo":"Jesús ante el concilio"}],"23":[{"versiculo":1,"titulo":"Jesús ante Pilato"},{"versiculo":6,"titulo":"Jesús ante Herodes"},{"versiculo":13,"titulo":"Jesús sentenciado a muerte"},{"versiculo":26,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":50,"titulo":"Jesús es sepultado"}],"24":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":13,"titulo":"En el camino a Emaús"},{"versiculo":36,"titulo":"Jesús se aparece a los discípulos"},{"versiculo":50,"titulo":"La ascensión"}]},"juan":{"1":[{"versiculo":1,"titulo":"El Verbo hecho carne"},{"versiculo":19,"titulo":"Testimonio de Juan el Bautista"},{"versiculo":29,"titulo":"El Cordero de Dios"},{"versiculo":35,"titulo":"Los primeros discípulos"},{"versiculo":43,"titulo":"Jesús llama a Felipe y a Natanael"}],"2":[{"versiculo":1,"titulo":"Las bodas de Caná"},{"versiculo":13,"titulo":"Jesús purifica el templo"},{"versiculo":23,"titulo":"Jesús conoce a todos los hombres"}],"3":[{"versiculo":1,"titulo":"Jesús y Nicodemo"},{"versiculo":16,"titulo":"De tal manera amó Dios al mundo"},{"versiculo":22,"titulo":"El amigo del esposo"},{"versiculo":31,"titulo":"El que viene de arriba"}],"4":[{"versiculo":1,"titulo":"Jesús y la mujer samaritana"},{"versiculo":43,"titulo":"Jesús sana al hijo de un noble"}],"5":[{"versiculo":1,"titulo":"El paralítico de Betesda"},{"versiculo":19,"titulo":"La autoridad del Hijo"},{"versiculo":30,"titulo":"Testigos de Cristo"}],"6":[{"versiculo":1,"titulo":"Alimentación de los cinco mil"},{"versiculo":16,"titulo":"Jesús anda sobre el mar"},{"versiculo":22,"titulo":"La gente busca a Jesús"},{"versiculo":25,"titulo":"Jesús, el pan de vida"},{"versiculo":60,"titulo":"Palabras de vida eterna"}],"7":[{"versiculo":1,"titulo":"Incredulidad de los hermanos de Jesús"},{"versiculo":10,"titulo":"Jesús en la fiesta de los tabernáculos"},{"versiculo":25,"titulo":"¿Es este el Cristo?"},{"versiculo":32,"titulo":"Los fariseos envían alguaciles para prender a Jesús"},{"versiculo":37,"titulo":"Ríos de agua viva"},{"versiculo":40,"titulo":"División entre la gente"},{"versiculo":45,"titulo":"¡Nunca ha hablado hombre así!"},{"versiculo":53,"titulo":"La mujer adúltera"}],"8":[{"versiculo":12,"titulo":"Jesús, la luz del mundo"},{"versiculo":21,"titulo":"A donde yo voy, vosotros no podéis venir"},{"versiculo":31,"titulo":"La verdad os hará libres"},{"versiculo":39,"titulo":"Sois de vuestro padre el diablo"},{"versiculo":48,"titulo":"La preexistencia de Cristo"}],"9":[{"versiculo":1,"titulo":"Jesús sana a un ciego de nacimiento"},{"versiculo":13,"titulo":"Los fariseos interrogan al ciego sanado"},{"versiculo":35,"titulo":"Ceguera espiritual"}],"10":[{"versiculo":1,"titulo":"Parábola del redil"},{"versiculo":7,"titulo":"Jesús, el buen pastor"},{"versiculo":22,"titulo":"Los judíos rechazan a Jesús"}],"11":[{"versiculo":1,"titulo":"Muerte de Lázaro"},{"versiculo":17,"titulo":"Jesús, la resurrección y la vida"},{"versiculo":28,"titulo":"Jesús llora ante la tumba de Lázaro"},{"versiculo":38,"titulo":"Resurrección de Lázaro"},{"versiculo":45,"titulo":"El complot para matar a Jesús"}],"12":[{"versiculo":1,"titulo":"Jesús es ungido en Betania"},{"versiculo":9,"titulo":"El complot contra Lázaro"},{"versiculo":12,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":20,"titulo":"Unos griegos buscan a Jesús"},{"versiculo":27,"titulo":"Jesús anuncia su muerte"},{"versiculo":36,"titulo":"Incredulidad de los judíos"},{"versiculo":44,"titulo":"Las palabras de Jesús juzgarán a los hombres"}],"13":[{"versiculo":1,"titulo":"Jesús lava los pies de sus discípulos"},{"versiculo":21,"titulo":"Jesús anuncia la traición de Judas"},{"versiculo":31,"titulo":"El nuevo mandamiento"},{"versiculo":36,"titulo":"Jesús anuncia la negación de Pedro"}],"14":[{"versiculo":1,"titulo":"Jesús, el camino al Padre"},{"versiculo":15,"titulo":"La promesa del Espíritu Santo"}],"15":[{"versiculo":1,"titulo":"Jesús, la vid verdadera"},{"versiculo":18,"titulo":"El mundo os aborrecerá"}],"16":[{"versiculo":4,"titulo":"La obra del Espíritu Santo"},{"versiculo":16,"titulo":"La tristeza se convertirá en gozo"},{"versiculo":25,"titulo":"Yo he vencido al mundo"}],"17":[{"versiculo":1,"titulo":"Jesús ora por sus discípulos"}],"18":[{"versiculo":1,"titulo":"Arresto de Jesús"},{"versiculo":12,"titulo":"Jesús ante el sumo sacerdote"},{"versiculo":15,"titulo":"Pedro en el patio de Anás"},{"versiculo":19,"titulo":"Anás interroga a Jesús"},{"versiculo":25,"titulo":"Pedro niega a Jesús"},{"versiculo":28,"titulo":"Jesús ante Pilato"}],"19":[{"versiculo":17,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":31,"titulo":"El costado de Jesús traspasado"},{"versiculo":38,"titulo":"Jesús es sepultado"}],"20":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":11,"titulo":"Jesús se aparece a María Magdalena"},{"versiculo":19,"titulo":"Jesús se aparece a los discípulos"},{"versiculo":24,"titulo":"Incredulidad de Tomás"},{"versiculo":30,"titulo":"El propósito del libro"}],"21":[{"versiculo":1,"titulo":"Jesús se aparece a siete de sus discípulos"},{"versiculo":15,"titulo":"Apacienta mis ovejas"},{"versiculo":20,"titulo":"El discípulo amado"}]},"hechos":{"1":[{"versiculo":1,"titulo":"La promesa del Espíritu Santo"},{"versiculo":6,"titulo":"La ascensión"},{"versiculo":12,"titulo":"Elección del sucesor de Judas"}],"2":[{"versiculo":1,"titulo":"La venida del Espíritu Santo"},{"versiculo":14,"titulo":"Primer discurso de Pedro"},{"versiculo":43,"titulo":"La vida de los primeros cristianos"}],"3":[{"versiculo":1,"titulo":"Curación de un cojo"},{"versiculo":11,"titulo":"Discurso de Pedro en el pórtico de Salomón"}],"4":[{"versiculo":1,"titulo":"Pedro y Juan ante el concilio"},{"versiculo":23,"titulo":"Los creyentes piden confianza y valor"},{"versiculo":32,"titulo":"Todas las cosas en común"}],"5":[{"versiculo":1,"titulo":"Ananías y Safira"},{"versiculo":12,"titulo":"Muchas señales y maravillas"},{"versiculo":17,"titulo":"Pedro y Juan son perseguidos"}],"6":[{"versiculo":1,"titulo":"Elección de siete diáconos"},{"versiculo":8,"titulo":"Arresto de Esteban"}],"7":[{"versiculo":1,"titulo":"Defensa y muerte de Esteban"}],"8":[{"versiculo":1,"titulo":"Saulo persigue a la iglesia"},{"versiculo":4,"titulo":"Predicación del evangelio en Samaria"},{"versiculo":26,"titulo":"Felipe y el etíope"}],"9":[{"versiculo":1,"titulo":"Conversión de Saulo"},{"versiculo":20,"titulo":"Saulo predica en Damasco"},{"versiculo":23,"titulo":"Saulo escapa de los judíos"},{"versiculo":26,"titulo":"Saulo en Jerusalén"},{"versiculo":32,"titulo":"Curación de Eneas"},{"versiculo":36,"titulo":"Dorcas es resucitada"}],"10":[{"versiculo":1,"titulo":"Pedro y Cornelio"}],"11":[{"versiculo":1,"titulo":"Informe de Pedro a la iglesia de Jerusalén"},{"versiculo":19,"titulo":"La iglesia en Antioquía"}],"12":[{"versiculo":1,"titulo":"Jacobo, muerto; Pedro, encarcelado"},{"versiculo":6,"titulo":"Pedro es librado de la cárcel"},{"versiculo":20,"titulo":"Muerte de Herodes"}],"13":[{"versiculo":1,"titulo":"Bernabé y Saulo comienzan su primer viaje misionero"},{"versiculo":4,"titulo":"Los apóstoles predican en Chipre"},{"versiculo":13,"titulo":"Pablo y Bernabé en Antioquía de Pisidia"}],"14":[{"versiculo":1,"titulo":"Pablo y Bernabé en Iconio"},{"versiculo":8,"titulo":"Pablo es apedreado en Listra"},{"versiculo":24,"titulo":"El regreso a Antioquía de Siria"}],"15":[{"versiculo":1,"titulo":"El concilio en Jerusalén"},{"versiculo":36,"titulo":"Pablo se separa de Bernabé, y comienza su segundo viaje misionero"}],"16":[{"versiculo":1,"titulo":"Timoteo acompaña a Pablo y a Silas"},{"versiculo":6,"titulo":"La visión del varón macedonio"},{"versiculo":11,"titulo":"Encarcelados en Filipos"}],"17":[{"versiculo":1,"titulo":"El alboroto en Tesalónica"},{"versiculo":10,"titulo":"Pablo y Silas en Berea"},{"versiculo":16,"titulo":"Pablo en Atenas"}],"18":[{"versiculo":1,"titulo":"Pablo en Corinto"},{"versiculo":22,"titulo":"Pablo regresa a Antioquía y comienza su tercer viaje misionero"},{"versiculo":24,"titulo":"Apolos predica en Éfeso"}],"19":[{"versiculo":1,"titulo":"Pablo en Éfeso"},{"versiculo":23,"titulo":"El alboroto en Éfeso"}],"20":[{"versiculo":1,"titulo":"Viaje de Pablo a Macedonia y Grecia"},{"versiculo":7,"titulo":"Visita de despedida de Pablo en Troas"},{"versiculo":13,"titulo":"Viaje de Troas a Mileto"},{"versiculo":17,"titulo":"Discurso de despedida de Pablo en Mileto"}],"21":[{"versiculo":1,"titulo":"Viaje de Pablo a Jerusalén"},{"versiculo":17,"titulo":"Arresto de Pablo en el templo"},{"versiculo":37,"titulo":"Defensa de Pablo ante el pueblo"}],"22":[{"versiculo":6,"titulo":"Pablo relata su conversión"},{"versiculo":17,"titulo":"Pablo es enviado a los gentiles"},{"versiculo":22,"titulo":"Pablo en manos del tribuno"},{"versiculo":30,"titulo":"Pablo ante el concilio"}],"23":[{"versiculo":12,"titulo":"Complot contra Pablo"},{"versiculo":23,"titulo":"Pablo es enviado a Félix el gobernador"}],"24":[{"versiculo":1,"titulo":"Defensa de Pablo ante Félix"}],"25":[{"versiculo":1,"titulo":"Pablo apela a César"},{"versiculo":13,"titulo":"Pablo ante Agripa y Berenice"}],"26":[{"versiculo":1,"titulo":"Defensa de Pablo ante Agripa"},{"versiculo":4,"titulo":"Vida anterior de Pablo"},{"versiculo":9,"titulo":"Pablo el perseguidor"},{"versiculo":12,"titulo":"Pablo relata su conversión"},{"versiculo":19,"titulo":"Pablo obedece a la visión"},{"versiculo":24,"titulo":"Pablo insta a Agripa a que crea"}],"27":[{"versiculo":1,"titulo":"Pablo es enviado a Roma"},{"versiculo":13,"titulo":"La tempestad en el mar"},{"versiculo":39,"titulo":"El naufragio"}],"28":[{"versiculo":1,"titulo":"Pablo en la isla de Malta"},{"versiculo":11,"titulo":"Pablo llega a Roma"},{"versiculo":17,"titulo":"Pablo predica en Roma"}]},"romanos":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":8,"titulo":"Deseo de Pablo de visitar Roma"},{"versiculo":16,"titulo":"El poder del evangelio"},{"versiculo":18,"titulo":"La culpabilidad del hombre"}],"2":[{"versiculo":1,"titulo":"El justo juicio de Dios"},{"versiculo":17,"titulo":"Los judíos y la ley"}],"3":[{"versiculo":9,"titulo":"No hay justo"},{"versiculo":21,"titulo":"La justicia es por medio de la fe"}],"4":[{"versiculo":1,"titulo":"El ejemplo de Abraham"},{"versiculo":13,"titulo":"La promesa realizada mediante la fe"}],"5":[{"versiculo":1,"titulo":"Resultados de la justificación"},{"versiculo":12,"titulo":"Adán y Cristo"}],"6":[{"versiculo":1,"titulo":"Muertos al pecado"},{"versiculo":15,"titulo":"Siervos de la justicia"}],"7":[{"versiculo":1,"titulo":"Analogía tomada del matrimonio"},{"versiculo":7,"titulo":"El pecado que mora en mí"}],"8":[{"versiculo":1,"titulo":"Viviendo en el Espíritu"},{"versiculo":28,"titulo":"Más que vencedores"}],"9":[{"versiculo":1,"titulo":"La elección de Israel"},{"versiculo":30,"titulo":"La justicia que es por fe"}],"11":[{"versiculo":1,"titulo":"El remanente de Israel"},{"versiculo":11,"titulo":"La salvación de los gentiles"},{"versiculo":25,"titulo":"La restauración de Israel"}],"12":[{"versiculo":1,"titulo":"Deberes cristianos"}],"14":[{"versiculo":1,"titulo":"Los débiles en la fe"}],"15":[{"versiculo":7,"titulo":"El evangelio a los gentiles"},{"versiculo":22,"titulo":"Pablo se propone ir a Roma"}],"16":[{"versiculo":1,"titulo":"Saludos personales"},{"versiculo":25,"titulo":"Doxología final"}]},"1_corintios":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":4,"titulo":"Acción de gracias por dones espirituales"},{"versiculo":10,"titulo":"¿Está dividido Cristo?"},{"versiculo":18,"titulo":"Cristo, poder y sabiduría de Dios"}],"2":[{"versiculo":1,"titulo":"Proclamando a Cristo crucificado"},{"versiculo":6,"titulo":"La revelación por el Espíritu de Dios"}],"3":[{"versiculo":1,"titulo":"Colaboradores de Dios"}],"4":[{"versiculo":1,"titulo":"El ministerio de los apóstoles"}],"5":[{"versiculo":1,"titulo":"Un caso de inmoralidad juzgado"}],"6":[{"versiculo":1,"titulo":"Litigios delante de los incrédulos"},{"versiculo":12,"titulo":"Glorificad a Dios en vuestro cuerpo"}],"7":[{"versiculo":1,"titulo":"Problemas del matrimonio"}],"8":[{"versiculo":1,"titulo":"Lo sacrificado a los ídolos"}],"9":[{"versiculo":1,"titulo":"Los derechos de un apóstol"}],"10":[{"versiculo":1,"titulo":"Amonestaciones contra la idolatría"},{"versiculo":23,"titulo":"Haced todo para la gloria de Dios"}],"11":[{"versiculo":2,"titulo":"Atavío de las mujeres"},{"versiculo":17,"titulo":"Abusos en la Cena del Señor"},{"versiculo":23,"titulo":"Institución de la Cena del Señor"},{"versiculo":27,"titulo":"Tomando la Cena indignamente"}],"12":[{"versiculo":1,"titulo":"Dones espirituales"}],"13":[{"versiculo":1,"titulo":"La preeminencia del amor"}],"14":[{"versiculo":1,"titulo":"El hablar en lenguas"}],"15":[{"versiculo":1,"titulo":"La resurrección de los muertos"}],"16":[{"versiculo":1,"titulo":"La ofrenda para los santos"},{"versiculo":5,"titulo":"Planes de Pablo"},{"versiculo":13,"titulo":"Salutaciones finales"}]},"2_corintios":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Aflicciones de Pablo"},{"versiculo":12,"titulo":"Por qué Pablo pospuso su visita a Corinto"}],"2":[{"versiculo":5,"titulo":"Pablo perdona al ofensor"},{"versiculo":12,"titulo":"Ansiedad de Pablo en Troas"},{"versiculo":14,"titulo":"Triunfantes en Cristo"}],"3":[{"versiculo":1,"titulo":"Ministros del nuevo pacto"}],"4":[{"versiculo":7,"titulo":"Viviendo por la fe"}],"5":[{"versiculo":11,"titulo":"El ministerio de la reconciliación"}],"6":[{"versiculo":14,"titulo":"Somos templo del Dios viviente"}],"7":[{"versiculo":2,"titulo":"Regocijo de Pablo al arrepentirse los corintios"}],"8":[{"versiculo":1,"titulo":"La ofrenda para los santos"}],"10":[{"versiculo":1,"titulo":"Pablo defiende su ministerio"}],"11":[{"versiculo":16,"titulo":"Sufrimientos de Pablo como apóstol"}],"12":[{"versiculo":1,"titulo":"El aguijón en la carne"},{"versiculo":14,"titulo":"Pablo anuncia su tercera visita"}],"13":[{"versiculo":11,"titulo":"Saludos y doxología final"}]},"galatas":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":6,"titulo":"No hay otro evangelio"},{"versiculo":11,"titulo":"El ministerio de Pablo"}],"2":[{"versiculo":11,"titulo":"Pablo reprende a Pedro en Antioquía"}],"3":[{"versiculo":1,"titulo":"El Espíritu se recibe por la fe"},{"versiculo":6,"titulo":"El pacto de Dios con Abraham"},{"versiculo":19,"titulo":"El propósito de la ley"}],"4":[{"versiculo":8,"titulo":"Exhortación contra el volver a la esclavitud"},{"versiculo":21,"titulo":"Alegoría de Sara y Agar"}],"5":[{"versiculo":1,"titulo":"Estad firmes en la libertad"},{"versiculo":16,"titulo":"Las obras de la carne y el fruto del Espíritu"}],"6":[{"versiculo":11,"titulo":"Pablo se gloría en la cruz de Cristo"},{"versiculo":18,"titulo":"Bendición final"}]},"efesios":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Bendiciones espirituales en Cristo"},{"versiculo":15,"titulo":"El espíritu de sabiduría y de revelación"}],"2":[{"versiculo":1,"titulo":"Salvos por gracia"},{"versiculo":11,"titulo":"Reconciliación por medio de la cruz"}],"3":[{"versiculo":1,"titulo":"Ministerio de Pablo a los gentiles"},{"versiculo":14,"titulo":"El amor que excede a todo conocimiento"}],"4":[{"versiculo":1,"titulo":"La unidad del Espíritu"},{"versiculo":17,"titulo":"La nueva vida en Cristo"}],"5":[{"versiculo":1,"titulo":"Andad como hijos de luz"},{"versiculo":21,"titulo":"Someteos los unos a los otros"}],"6":[{"versiculo":10,"titulo":"La armadura de Dios"},{"versiculo":21,"titulo":"Salutaciones finales"}]},"filipenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Oración de Pablo por los creyentes"},{"versiculo":12,"titulo":"Para mí el vivir es Cristo"}],"2":[{"versiculo":1,"titulo":"Humillación y exaltación de Cristo"},{"versiculo":12,"titulo":"Luminares en el mundo"},{"versiculo":19,"titulo":"Timoteo y Epafrodito"}],"3":[{"versiculo":1,"titulo":"Prosigo al blanco"}],"4":[{"versiculo":1,"titulo":"Regocijaos en el Señor siempre"},{"versiculo":8,"titulo":"En esto pensad"},{"versiculo":10,"titulo":"Dádivas de los filipenses"},{"versiculo":21,"titulo":"Salutaciones finales"}]},"colosenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Pablo pide que Dios les conceda sabiduría espiritual"},{"versiculo":15,"titulo":"Reconciliación por medio de la muerte de Cristo"},{"versiculo":24,"titulo":"Ministerio de Pablo a los gentiles"}],"2":[{"versiculo":8,"titulo":"Plenitud de vida en Cristo"}],"3":[{"versiculo":5,"titulo":"La vida antigua y la nueva"},{"versiculo":18,"titulo":"Deberes sociales de la nueva vida"}],"4":[{"versiculo":7,"titulo":"Salutaciones finales"}]},"1_tesalonicenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":2,"titulo":"Ejemplo de los tesalonicenses"}],"2":[{"versiculo":1,"titulo":"Ministerio de Pablo en Tesalónica"},{"versiculo":17,"titulo":"Ausencia de Pablo de la iglesia"}],"4":[{"versiculo":1,"titulo":"La vida que agrada a Dios"},{"versiculo":13,"titulo":"La venida del Señor"}],"5":[{"versiculo":12,"titulo":"Pablo exhorta a los hermanos"},{"versiculo":25,"titulo":"Salutaciones y bendición final"}]},"2_tesalonicenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Dios juzgará a los pecadores en la venida de Cristo"}],"2":[{"versiculo":1,"titulo":"Manifestación del hombre de pecado"},{"versiculo":13,"titulo":"Escogidos para salvación"}],"3":[{"versiculo":1,"titulo":"Que la palabra de Dios sea glorificada"},{"versiculo":6,"titulo":"El deber de trabajar"},{"versiculo":16,"titulo":"Bendición final"}]},"1_timoteo":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Advertencia contra falsas doctrinas"},{"versiculo":12,"titulo":"El ministerio de Pablo"}],"2":[{"versiculo":1,"titulo":"Instrucciones sobre la oración"}],"3":[{"versiculo":1,"titulo":"Requisitos de los obispos"},{"versiculo":8,"titulo":"Requisitos de los diáconos"},{"versiculo":14,"titulo":"El misterio de la piedad"}],"4":[{"versiculo":1,"titulo":"Predicción de la apostasía"},{"versiculo":6,"titulo":"Un buen ministro de Jesucristo"}],"5":[{"versiculo":1,"titulo":"Deberes hacia los demás"}],"6":[{"versiculo":3,"titulo":"Piedad y contentamiento"},{"versiculo":11,"titulo":"La buena batalla de la fe"},{"versiculo":20,"titulo":"Encargo final de Pablo a Timoteo"}]},"2_timoteo":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Testificando de Cristo"}],"2":[{"versiculo":1,"titulo":"Un buen soldado de Jesucristo"},{"versiculo":14,"titulo":"Un obrero aprobado"}],"3":[{"versiculo":1,"titulo":"Carácter de los hombres en los postreros días"}],"4":[{"versiculo":1,"titulo":"Predica la palabra"},{"versiculo":9,"titulo":"Instrucciones personales"},{"versiculo":19,"titulo":"Saludos y bendición final"}]},"tito":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":5,"titulo":"Requisitos de ancianos y obispos"}],"2":[{"versiculo":1,"titulo":"Enseñanza de la sana doctrina"}],"3":[{"versiculo":1,"titulo":"Justificados por gracia"},{"versiculo":12,"titulo":"Instrucciones personales"},{"versiculo":15,"titulo":"Salutaciones y bendición final"}]},"filemon":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":4,"titulo":"El amor y la fe de Filemón"},{"versiculo":8,"titulo":"Pablo intercede por Onésimo"},{"versiculo":23,"titulo":"Salutaciones y bendición final"}]},"hebreos":{"1":[{"versiculo":1,"titulo":"Dios ha hablado por su Hijo"},{"versiculo":5,"titulo":"El Hijo, superior a los ángeles"}],"2":[{"versiculo":1,"titulo":"Una salvación tan grande"},{"versiculo":5,"titulo":"El autor de la salvación"}],"3":[{"versiculo":1,"titulo":"Jesús es superior a Moisés"},{"versiculo":7,"titulo":"El reposo del pueblo de Dios"}],"4":[{"versiculo":14,"titulo":"Jesús el gran sumo sacerdote"}],"5":[{"versiculo":11,"titulo":"Advertencia contra la apostasía"}],"7":[{"versiculo":1,"titulo":"El sacerdocio de Melquisedec"}],"8":[{"versiculo":1,"titulo":"El mediador de un nuevo pacto"}],"9":[{"versiculo":23,"titulo":"El sacrificio de Cristo quita el pecado"}],"10":[{"versiculo":26,"titulo":"Advertencia al que peca deliberadamente"}],"11":[{"versiculo":1,"titulo":"La fe"}],"12":[{"versiculo":1,"titulo":"Puestos los ojos en Jesús"},{"versiculo":12,"titulo":"Los que rechazan la gracia de Dios"}],"13":[{"versiculo":1,"titulo":"Deberes cristianos"},{"versiculo":20,"titulo":"Bendición y salutaciones finales"}]},"santiago":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":2,"titulo":"La sabiduría que viene de Dios"},{"versiculo":12,"titulo":"Soportando las pruebas"},{"versiculo":19,"titulo":"Hacedores de la palabra"}],"2":[{"versiculo":1,"titulo":"Amonestación contra la parcialidad"},{"versiculo":14,"titulo":"La fe sin obras es muerta"}],"3":[{"versiculo":1,"titulo":"La lengua"},{"versiculo":13,"titulo":"La sabiduría de lo alto"}],"4":[{"versiculo":1,"titulo":"La amistad con el mundo"},{"versiculo":11,"titulo":"Juzgando al hermano"},{"versiculo":13,"titulo":"No os gloriéis del día de mañana"}],"5":[{"versiculo":1,"titulo":"Contra los ricos opresores"},{"versiculo":7,"titulo":"Sed pacientes y orad"}]},"1_pedro":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Una esperanza viva"},{"versiculo":13,"titulo":"Llamamiento a una vida santa"}],"2":[{"versiculo":4,"titulo":"La piedra viva"},{"versiculo":9,"titulo":"El pueblo de Dios"},{"versiculo":11,"titulo":"Vivid como siervos de Dios"}],"3":[{"versiculo":1,"titulo":"Deberes conyugales"},{"versiculo":8,"titulo":"Una buena conciencia"}],"4":[{"versiculo":1,"titulo":"Buenos administradores de la gracia de Dios"},{"versiculo":12,"titulo":"Padeciendo como cristianos"}],"5":[{"versiculo":1,"titulo":"Apacentad la grey de Dios"},{"versiculo":12,"titulo":"Salutaciones finales"}]},"2_pedro":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Partícipes de la naturaleza divina"},{"versiculo":16,"titulo":"Testigos presenciales de la gloria de Cristo"}],"2":[{"versiculo":1,"titulo":"Falsos profetas y falsos maestros"}],"3":[{"versiculo":1,"titulo":"El día del Señor vendrá"}]},"1_juan":{"1":[{"versiculo":1,"titulo":"La palabra de vida"},{"versiculo":5,"titulo":"Dios es luz"}],"2":[{"versiculo":1,"titulo":"Cristo, nuestro abogado"},{"versiculo":7,"titulo":"El nuevo mandamiento"},{"versiculo":18,"titulo":"El anticristo"}],"3":[{"versiculo":1,"titulo":"Hijos de Dios"}],"4":[{"versiculo":1,"titulo":"El Espíritu de Dios y el espíritu del anticristo"},{"versiculo":7,"titulo":"Dios es amor"}],"5":[{"versiculo":1,"titulo":"La fe que vence al mundo"},{"versiculo":6,"titulo":"El testimonio del Espíritu"},{"versiculo":13,"titulo":"El conocimiento de la vida eterna"}]},"2_juan":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":4,"titulo":"Permaneced en la doctrina de Cristo"},{"versiculo":12,"titulo":"Espero ir a vosotros"}]},"3_juan":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":5,"titulo":"Elogio de la hospitalidad de Gayo"},{"versiculo":9,"titulo":"La oposición de Diótrefes"},{"versiculo":11,"titulo":"Buen testimonio acerca de Demetrio"},{"versiculo":13,"titulo":"Salutaciones finales"}]},"judas":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Falsas doctrinas y falsos maestros"},{"versiculo":17,"titulo":"Amonestaciones y exhortaciones"},{"versiculo":24,"titulo":"Doxología"}]},"apocalipsis":{"1":[{"versiculo":1,"titulo":"La revelación de Jesucristo"},{"versiculo":4,"titulo":"Salutaciones a las siete iglesias"},{"versiculo":9,"titulo":"Una visión del Hijo del Hombre"}],"2":[{"versiculo":1,"titulo":"Mensajes a las siete iglesias: El mensaje a Éfeso"},{"versiculo":8,"titulo":"El mensaje a Esmirna"},{"versiculo":12,"titulo":"El mensaje a Pérgamo"},{"versiculo":18,"titulo":"El mensaje a Tiatira"}],"3":[{"versiculo":1,"titulo":"El mensaje a Sardis"},{"versiculo":7,"titulo":"El mensaje a Filadelfia"},{"versiculo":14,"titulo":"El mensaje a Laodicea"}],"4":[{"versiculo":1,"titulo":"La adoración celestial"}],"5":[{"versiculo":1,"titulo":"El rollo y el Cordero"}],"6":[{"versiculo":1,"titulo":"Los sellos"}],"7":[{"versiculo":1,"titulo":"Los 144 mil sellados"},{"versiculo":9,"titulo":"La multitud vestida de ropas blancas"}],"8":[{"versiculo":1,"titulo":"El séptimo sello"},{"versiculo":6,"titulo":"Las trompetas"}],"10":[{"versiculo":1,"titulo":"El ángel con el librito"}],"11":[{"versiculo":1,"titulo":"Los dos testigos"},{"versiculo":15,"titulo":"La séptima trompeta"}],"12":[{"versiculo":1,"titulo":"La mujer y el dragón"}],"13":[{"versiculo":1,"titulo":"Las dos bestias"}],"14":[{"versiculo":1,"titulo":"El cántico de los 144 mil"},{"versiculo":6,"titulo":"El mensaje de los tres ángeles"},{"versiculo":14,"titulo":"La tierra es segada"}],"15":[{"versiculo":1,"titulo":"Los ángeles con las siete postreras plagas"}],"16":[{"versiculo":1,"titulo":"Las copas de ira"}],"17":[{"versiculo":1,"titulo":"Condenación de la gran ramera"}],"18":[{"versiculo":1,"titulo":"La caída de Babilonia"}],"19":[{"versiculo":1,"titulo":"Alabanzas en el cielo"},{"versiculo":9,"titulo":"La cena de las bodas del Cordero"},{"versiculo":11,"titulo":"El jinete del caballo blanco"}],"20":[{"versiculo":1,"titulo":"Los mil años"},{"versiculo":11,"titulo":"El juicio ante el gran trono blanco"}],"21":[{"versiculo":1,"titulo":"Cielo nuevo y tierra nueva"},{"versiculo":9,"titulo":"La nueva Jerusalén"}],"22":[{"versiculo":6,"titulo":"La venida de Cristo está cerca"}]}};
const BUILTIN_DICTIONARY_ENTRIES=Array.isArray(window.BIBLICAL_DICTIONARY_DATA)?window.BIBLICAL_DICTIONARY_DATA:[];
const freshUrl=file=>`${DATA}${file}?v=${APP_VERSION}`;
const storedReadingPoints=JSON.parse(localStorage.getItem('readingPoints')||'[]');
const state={books:[],bookIndex:0,chapter:1,verses:[],titles:{},selected:new Set(),highlights:JSON.parse(localStorage.getItem('highlights')||'{}'),favorites:JSON.parse(localStorage.getItem('favorites')||'{}'),explanations:JSON.parse(localStorage.getItem('explanations')||'{}'),readingPoints:Array.isArray(storedReadingPoints)?storedReadingPoints.map((p,i)=>({...p,id:String(p.id||`${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`)})):[],importedTitles:JSON.parse(localStorage.getItem('importedTitles')||'{}'),externalBible:null,baseTitles:{},dictionaryBase:[],dictionaryCustom:JSON.parse(localStorage.getItem('dictionaryCustom')||'[]'),dictionaryEdits:JSON.parse(localStorage.getItem('dictionaryEdits')||'{}'),dictionaryDeleted:JSON.parse(localStorage.getItem('dictionaryDeleted')||'[]'),activeReadingPoint:JSON.parse(localStorage.getItem('activeReadingPoint')||'null'),lastReadingPoint:JSON.parse(localStorage.getItem('lastReadingPoint')||'null')};
// Migración única V2.1.11: las entradas personales creadas antes de esta versión
// se activan una sola vez para que aparezcan con cápsula verde. Después, cada
// entrada conserva libremente la elección que el usuario haga en el editor.
const DICTIONARY_CUSTOM_CAPSULE_MIGRATION='dictionaryCustomCapsuleMigrationV2111';
if(localStorage.getItem(DICTIONARY_CUSTOM_CAPSULE_MIGRATION)!=='done'){
  if(Array.isArray(state.dictionaryCustom)&&state.dictionaryCustom.length){
    state.dictionaryCustom=state.dictionaryCustom.map(entry=>({...entry,resaltar:true,updatedAt:entry.updatedAt||Date.now()}));
    localStorage.setItem('dictionaryCustom',JSON.stringify(state.dictionaryCustom));
  }
  localStorage.setItem(DICTIONARY_CUSTOM_CAPSULE_MIGRATION,'done');
}

// La primera pulsación abre la explicación; después el botón permite quitarla.
let explanationArmedKey='';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reader=$('#reader'), selectionBar=$('#selectionBar');

function applyTheme(mode=localStorage.getItem('readerTheme')||'dark'){
  const light=mode==='light';
  document.body.classList.toggle('light-mode',light);
  document.body.classList.toggle('dark',!light);
  const btn=$('#themeToggleBtn');
  if(btn){btn.textContent=light?'🌙':'☀️';btn.setAttribute('aria-label',light?'Activar modo oscuro':'Activar modo blanco');btn.title=light?'Modo oscuro':'Modo blanco'}
  document.querySelector('meta[name=theme-color]')?.setAttribute('content',light?'#f7f3e9':'#0d0f12');
}
function toggleTheme(){
  const next=document.body.classList.contains('light-mode')?'dark':'light';
  localStorage.setItem('readerTheme',next);applyTheme(next);
}
applyTheme();

function showHome(){
  applyTimeHeader();
  updateHomeStatsSummary();
  // Sincroniza los guardados directamente desde el almacenamiento antes de pintar la portada.
  // Así Punto de libro aparece incluso en el primer arranque de una versión nueva.
  syncFavoritesFromStorage();
  $('#homeScreen').classList.remove('hidden');
  $('#readerScreen').classList.add('hidden');
  state.selected.clear();
  updateSelection();
  updateReadingPointUI();
  scrollTo(0,0);
}
function showReader(){
  $('#homeScreen').classList.add('hidden');
  $('#readerScreen').classList.remove('hidden');
  scrollTo(0,0);
}
function openBooksDrawer(){
  // Reconstruir siempre la pestaña Todos al abrir evita un panel vacío durante el primer arranque.
  prepareBooksDrawer();
  const drawer=$('#drawer');
  drawer.classList.remove('hidden','closing');
  drawer.classList.add('is-open');
  $('#drawerBackdrop').classList.remove('hidden');
}
function updateKeyboardAwareDialog({dialogSelector,inputSelector,layoutClass,variablePrefix}){
  const dialog=$(dialogSelector);
  if(!dialog?.open||!dialog.classList.contains(layoutClass))return;
  const viewport=window.visualViewport;
  const visibleHeight=viewport?.height||window.innerHeight;
  const visibleTop=viewport?.offsetTop||0;
  dialog.style.setProperty(`--${variablePrefix}-vv-height`,`${visibleHeight}px`);
  dialog.style.setProperty(`--${variablePrefix}-vv-top`,`${visibleTop}px`);
  const inputFocused=document.activeElement===$(inputSelector);
  const keyboardVisible=visibleHeight<window.innerHeight*0.82;
  dialog.classList.toggle('keyboard-visible',inputFocused||keyboardVisible);
}
function resetKeyboardAwareDialog({dialogSelector,layoutClass,variablePrefix}){
  const dialog=$(dialogSelector);
  dialog?.classList.remove(layoutClass,'keyboard-visible');
  dialog?.style.removeProperty(`--${variablePrefix}-vv-height`);
  dialog?.style.removeProperty(`--${variablePrefix}-vv-top`);
}
const SEARCH_DIALOG_LAYOUT={dialogSelector:'#searchDialog',inputSelector:'#searchInput',layoutClass:'search-live-layout',variablePrefix:'search'};
const DICTIONARY_DIALOG_LAYOUT={dialogSelector:'#dictionaryDialog',inputSelector:'#dictionarySearch',layoutClass:'dictionary-live-layout',variablePrefix:'dictionary'};
function bindKeyboardAwareDialog(config){
  const dialog=$(config.dialogSelector),input=$(config.inputSelector);
  if(!dialog||!input)return;
  const update=()=>updateKeyboardAwareDialog(config);
  input.addEventListener('focus',()=>requestAnimationFrame(update));
  input.addEventListener('blur',()=>setTimeout(update,80));
  dialog.addEventListener('close',()=>resetKeyboardAwareDialog(config));
  window.visualViewport?.addEventListener('resize',update);
  window.visualViewport?.addEventListener('scroll',update);
  window.addEventListener('orientationchange',()=>setTimeout(update,120));
}
function updateSearchDialogViewport(){updateKeyboardAwareDialog(SEARCH_DIALOG_LAYOUT)}
function resetSearchDialogLayout(){resetKeyboardAwareDialog(SEARCH_DIALOG_LAYOUT)}
function updateDictionaryDialogViewport(){updateKeyboardAwareDialog(DICTIONARY_DIALOG_LAYOUT)}
function openSearchDialog(){
  const dialog=$('#searchDialog');
  $('#searchDialog h2').textContent='Buscar en la Biblia';
  $('#searchDialog .search-row').style.display='flex';
  $('#searchResults').innerHTML='<p class="search-help">Busca palabras o una referencia, por ejemplo: Juan 3:16, 1 Corintios 6 o Romanos 8:28-30.</p>';
  $('#searchInput').value='';
  dialog.classList.add('search-live-layout');
  dialog.showModal();
  requestAnimationFrame(updateSearchDialogViewport);
}

function save(){
  const values={
    highlights:state.highlights,
    favorites:state.favorites,
    explanations:state.explanations,
    last:{bookIndex:state.bookIndex,chapter:state.chapter},
    readingPoints:state.readingPoints,
    importedTitles:state.importedTitles||{},
    dictionaryCustom:state.dictionaryCustom||[],
    dictionaryEdits:state.dictionaryEdits||{},
    dictionaryDeleted:state.dictionaryDeleted||[],
    activeReadingPoint:state.activeReadingPoint||null,
    lastReadingPoint:state.lastReadingPoint||null
  };
  for(const [storageKey,value] of Object.entries(values))localStorage.setItem(storageKey,JSON.stringify(value));
  updateReadingPointUI();
  updateHomeStatsSummary();
  updateDictionaryCounters();
}
function key(v){return `${state.books[state.bookIndex].key}:${state.chapter}:${v}`}
function rangeKey(nums=[...state.selected]){return `${state.books[state.bookIndex].key}:${state.chapter}:${nums.sort((a,b)=>a-b).join(',')}`}
function displayBook(book){const map={mateo:'San Mateo',marcos:'San Marcos',lucas:'San Lucas',juan:'San Juan'};return map[book.key]||book.shortTitle}
function formatNums(nums){nums=[...new Set(nums)].sort((a,b)=>a-b);if(!nums.length)return'';let out=[],start=nums[0],prev=nums[0];for(let i=1;i<=nums.length;i++){const n=nums[i];if(n===prev+1){prev=n;continue}out.push(start===prev?`${start}`:`${start}-${prev}`);start=prev=n}return out.join(', ')}
function currentReference(nums=[...state.selected],upper=false){const b=displayBook(state.books[state.bookIndex]);const r=`${b} ${state.chapter}:${formatNums(nums)}`;return upper?r.toUpperCase():r}
async function init(){
  restoreDailyVerseHomeCache();
  // Limpieza única de las cachés antiguas de esta aplicación. No afecta a localStorage.
  if('caches' in window){
    try{
      const cacheNames=await caches.keys();
      await Promise.all(cacheNames.filter(name=>name.startsWith(CACHE_PREFIX)&&name!==`${CACHE_PREFIX}v${APP_VERSION}`).map(name=>caches.delete(name)));
    }catch(error){console.warn('No se pudieron limpiar las cachés antiguas',error)}
  }
  state.books=await fetch(freshUrl('index.json'),{cache:'no-store'}).then(r=>r.json());
  // Prepara el Versículo del día antes de pintar la portada, para evitar que quede en 'Preparando…'.
  await ensureDailyVerse();
  // El diccionario se carga una sola vez desde dictionary-data.js. Así se evita
  // duplicar sus 433 entradas dentro de app.js y hacer otra petición al arrancar.
  state.dictionaryBase=BUILTIN_DICTIONARY_ENTRIES.map(entry=>({...entry}));
  updateDictionaryCounters();
  state.externalBible=await loadInstalledBible();
  const oldPoint=JSON.parse(localStorage.getItem('readingPoint')||'null');
  if(oldPoint&&!state.readingPoints.length){
    state.readingPoints=[{...oldPoint,id:oldPoint.updated||Date.now()}];
    localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));
    localStorage.removeItem('readingPoint');
  }
  state.baseTitles=JSON.parse(JSON.stringify(BUILTIN_TITLES_EMBEDDED));
  await ensureAutomaticTitles();
  state.titles=mergeTitles(mergeTitles(state.baseTitles,state.externalBible?.titles||{}),state.importedTitles||{});
  const last=JSON.parse(localStorage.getItem('last')||'null');
  if(last){state.bookIndex=Math.min(Number(last.bookIndex)||0,state.books.length-1);state.chapter=Math.max(1,Number(last.chapter)||1)}
  await loadChapter();
  // Relee los guardados justo antes de pintar la portada. Esto evita que el punto de libro
  // aparezca vacío durante el primer arranque tras instalar una versión nueva.
  try{state.favorites=JSON.parse(localStorage.getItem('favorites')||'{}')||{}}catch(error){state.favorites={}}
  // Migración única: la primera vez conserva como punto activo el último guardado existente.
  if(localStorage.getItem('activeReadingPoint')===null){
    const entries=Object.entries(state.favorites||{}).sort((a,b)=>(Number(b[1]?.savedAt)||0)-(Number(a[1]?.savedAt)||0));
    if(entries.length){
      const [k,v]=entries[0],parts=k.split(':');
      const migrated={bookKey:parts[0],chapter:Number(parts[1]),verse:Number(parts[2]),ref:v.ref,savedAt:Number(v.savedAt)||Date.now()};
      state.activeReadingPoint=migrated;state.lastReadingPoint=migrated;
    }
    localStorage.setItem('activeReadingPoint',JSON.stringify(state.activeReadingPoint||null));
    localStorage.setItem('lastReadingPoint',JSON.stringify(state.lastReadingPoint||null));
  }
  prepareBooksDrawer();
  updateReadingPointUI();
  showHome();
  updateReadingPointUI();
  await initializeDailyVerse().catch(error=>console.warn('Versículo del día no disponible',error));
  const refreshHomeState=()=>{prepareBooksDrawer();syncFavoritesFromStorage();updateReadingPointUI()};
  requestAnimationFrame(refreshHomeState);
  [150,600].forEach(delay=>setTimeout(refreshHomeState,delay));
  if('serviceWorker'in navigator){
  // La actualización del service worker se aplica sin recargar la pantalla.
  // Así el desplegable de Libros no vuelve solo a la portada mientras se usa.
  navigator.serviceWorker.register(`sw.js?v=${APP_VERSION}`,{updateViaCache:'none'}).then(async reg=>{
    await reg.update();
    if(reg.waiting)reg.waiting.postMessage({type:'SKIP_WAITING'});
  }).catch(()=>{});
}}
async function getBookChapters(book){if(state.externalBible?.books?.[book.key])return state.externalBible.books[book.key];return fetch(freshUrl(book.key+'.json'),{cache:'no-store'}).then(r=>r.json())}
async function loadChapter(){state.selected.clear();explanationArmedKey='';const b=state.books[state.bookIndex];const data=await getBookChapters(b);state.verses=(data[state.chapter-1]||[]).map(limpiarTextoBiblico);render();save();}
const GUIDE_IDS_BY_BOOK={"genesis":"mq189k74e19kqg","exodo":"mq18o6kz6j00l1","levitico":"mq18v33xs30y2a","numeros":"mq191gs6wfr7b0","deuteronomio":"mq19944izsypxx","josue":"mq19allbrruzzq","jueces":"mq19cja4i82uk0","rut":"mq19f4iyn19frs","1_samuel":"mq19hgzemminaq","2_samuel":"mq19k1n2cmwrtw","1_reyes":"mq19m2pj0vje93","2_reyes":"mq19rn9zjie94t","1_cronicas":"mq19tyrqcnpfyc","2_cronicas":"mq19xo7wkefakx","esdras":"mq19zowb7ouvw3","nehemias":"mq1a0picjtwdyi","ester":"mq1a26lacf0t0y","job":"mq1a5q5hqlzgul","salmos":"mq1adgfxp65wj2","proverbios":"mq1affanpikj1b","eclesiastes":"mq1agt5sk4n8qd","cantares":"mq1ai7gx0mxfvh","isaias":"mq1am8nws0d8p5","jeremias":"mq1ank6awoktb7","lamentaciones":"mq1aot6b6iuca0","ezequiel":"mq1as40zua0x8e","daniel":"mq1au3yltarg9p","oseas":"mq1avh2b4aslc6","joel":"mq1awwdclvwpqy","amos":"mq1ay3kqrq70cf","abdias":"mq1az78rdhd3iz","jonas":"mq1b0u86dcb1tp","miqueas":"mq1b2csjab29u4","nahum":"mq1b3oiqiw1lbg","habacuc":"mq1b4xtxg55bve","sofonias":"mq1bzxxwort7ks","hageo":"mq1c1awtu7tbtt","zacarias":"mq1c32iq0wn78q","malaquias":"mq1c54dc2gsr85","mateo":"mq1c8viydm77as","marcos":"mq1c967vtkw0hb","lucas":"mq1ccma6v2eop5","juan":"mq1ceah81ddbyq","hechos":"mq1che3kfjzpeo","romanos":"mq1ym5piynlofg","1_corintios":"mq1yni6umroyqm","2_corintios":"mq1yoqrfbq56dm","galatas":"mq1yqf7qlkowoj","efesios":"mq1yrs7qkq4dor","filipenses":"mq1ystvdnxn00p","colosenses":"mq1ytr94r0qqgn","1_tesalonicenses":"mq1yvex403cbwh","2_tesalonicenses":"mq1yws442t8gm9","1_timoteo":"mq1yy54b2osc2r","2_timoteo":"mq1z07jmjmz8x6","tito":"mq2fm2l7bln423","filemon":"mq2fo8hdjxlpue","hebreos":"mq2fq3dsb0acnk","santiago":"mq2fvfyhzr2dex","1_pedro":"mq2fxng3z9oohu","2_pedro":"mq2fyvoolenx0v","1_juan":"mq2g4wy5859q7b","2_juan":"mq2g70sqvxgj5d","3_juan":"mq2g7yu5ryhv1p","judas":"mq2g9r3ggh1k6j","apocalipsis":"mq2gdg7jusjcxw"};
function guideChapterCapsule(book){
  if(state.chapter!==1)return '';
  const id=GUIDE_IDS_BY_BOOK[book.key];
  if(!id)return '';
  return `<div class="guide-chapter-entry"><button type="button" class="guide-title-capsule" onclick="openBiblicalGuideFromReader('${escapeHtml(book.key)}')">Abrir guía de ${escapeHtml(displayBook(book))}</button></div>`;
}
async function openBiblicalGuideFromReader(bookKey){
  if(!GUIDE_IDS_BY_BOOK[bookKey])return;
  biblicalEntityReturnPosition=captureBiblicalEntityPosition();
  window.__biblicalEntityOpenedFromReader=true;
  try{sessionStorage.setItem('biblicalEntityOpenedFromReader','1')}catch(_){ }
  if(typeof window.openBiblicalGuideForBookFromReader!=='function'){toast('No se pudo abrir la guía');return}
  await window.openBiblicalGuideForBookFromReader(bookKey);
}
window.openBiblicalGuideFromReader=openBiblicalGuideFromReader;
const PARABLE_LINKS_BY_POSITION={"juan:15:1":{"id":"mrc9r5sndtw7xa","title":"JESÚS, LA VID VERDADERA"},"juan:10:1":{"id":"mr85cfg9j8u5cz","title":"LA PARÁBOLA DEL REDIL"},"mateo:7:24":{"id":"mr0zeojumyqtft","title":"LOS DOS CIMIENTOS"},"lucas:18:9":{"id":"mr0yol0zdz8k4o","title":"PARÁBOLA DEL FARISEO Y EL PUBLICANO"},"lucas:18:1":{"id":"mr0xqf8vixg4ej","title":"PARÁBOLA DE LA VIUDA Y EL JUEZ INJUSTO"},"lucas:17:7":{"id":"mr0x8wg5yzax8n","title":"EL DEBER DEL SIERVO"},"lucas:16:19":{"id":"mr0vnziybt2ji3","title":"EL RICO Y LÁZARO"},"lucas:16:1":{"id":"mr0vby4x43wfhq","title":"PARÁBOLA DEL MAYORDOMO INFIEL"},"lucas:15:11":{"id":"mqzjh8cgoauq13","title":"PARÁBOLA DEL HIJO PRÓDIGO"},"lucas:15:8":{"id":"mqzjawtmk8cvi7","title":"PARÁBOLA DE LA MONEDA PERDIDA"},"lucas:11:5":{"id":"mqzj0h2guhcnf2","title":"EL AMIGO IMPORTUNO"},"marcos:4:26":{"id":"mqzifvzjhqi1da","title":"PARÁBOLA DEL CRECIMIENTO DE LA SEMILLA"},"marcos:4:21":{"id":"mqzi8u8lpwqpjg","title":"NADA OCULTO QUE NO HAYA DE SER MANIFESTADO"},"mateo:24:32":{"id":"mqzhy9qmggyvdc","title":"LA HIGUERA"},"mateo:20:1":{"id":"mqzhrbjx41dcs6","title":"LOS OBREROS DE LA VIÑA"},"mateo:18:23":{"id":"mqzhk4xcck6oih","title":"LOS DOS DEUDORES"},"mateo:13:52":{"id":"mqzgz683nvg1xl","title":"TESOROS NUEVOS Y VIEJOS"},"mateo:13:47":{"id":"mqzgs3gj4agz1v","title":"LA RED"},"mateo:13:45":{"id":"mqzgnl9pxfy9i9","title":"LA PERLA DE GRAN PRECIO"},"mateo:13:44":{"id":"mqzgjorl5jj2oa","title":"EL TESORO ESCONDIDO"},"lucas:19:11":{"id":"mqzfkekjmu91yq","title":"PARÁBOLA DE LAS DÍEZ MINAS"},"mateo:25:14":{"id":"mqzfaikdmfenn7","title":"PARÁBOLA DE LOS TALENTOS"},"mateo:25:1":{"id":"mqzf34g47iamue","title":"PARÁBOLA DE LAS DIEZ VÍRGENES"},"lucas:14:15":{"id":"mqzev5zpi9dr0s","title":"PARÁBOLA DE LA GRAN CENA"},"mateo:22:1":{"id":"mqzeg3jjkgs1hc","title":"PARÁBOLA DE LA FIESTA DE BODAS"},"lucas:20:9":{"id":"mqzdxvlteu2x37","title":"LOS LABRADORES MALVADOS"},"mateo:21:28":{"id":"mqzdqtcnjx1qx8","title":"PARÁBOLA DE LOS DOS HIJOS"},"lucas:15:3":{"id":"mqzddzna6h3y1j","title":"PARÁBOLA DE LA OVEJA PERDIDA"},"mateo:13:24":{"id":"mqyvyfhq9l5m5k","title":"PARÁBOLA DEL TRIGO Y LA CIZAÑA"},"lucas:8:4":{"id":"mqyvpi8athfhic","title":"PARÁBOLA DEL SEMBRADOR"},"mateo:5:13":{"id":"mqypzwfv85o85t","title":"LA SAL DE LA TIERRA"},"lucas:13:20":{"id":"mqypnx0is61d9e","title":"PARÁBOLA DE LA LEVADURA"},"marcos:4:30":{"id":"mqy3wy85orqk9m","title":"PARÁBOLA DE LA SEMILLA DE MOSTAZA"},"lucas:10:25":{"id":"mqy3grm86k37k2","title":"EL BUEN SAMARITANO"}};
function normalizeParableHeading(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9ñ\s]/g,' ').replace(/\s+/g,' ').trim()}
function parableHeadingCapsule(link){return `<button type="button" class="parable-title-capsule" onclick="openBiblicalParableFromReader('${escapeHtml(link.id)}')">${escapeHtml(link.title)}</button>`}


/* ===== V3.1.8 · Progreso y estadísticas de lectura por capítulo ===== */
const CHAPTER_READING_PROGRESS_KEY_V316='biblia_chapter_reading_progress_v316';
let chapterReadingProgressV316={};
let chapterProgressFrameV316=0;

function loadChapterReadingProgressV316(){
  try{
    const parsed=JSON.parse(localStorage.getItem(CHAPTER_READING_PROGRESS_KEY_V316)||'{}');
    chapterReadingProgressV316=parsed&&typeof parsed==='object'?parsed:{};
  }catch(_){chapterReadingProgressV316={}}
}

function chapterReadingKeyV316(){
  const book=state.books[state.bookIndex];
  return book?`${book.key}:${state.chapter}`:'';
}

function saveChapterReadingProgressV316(){
  try{localStorage.setItem(CHAPTER_READING_PROGRESS_KEY_V316,JSON.stringify(chapterReadingProgressV316))}catch(_){ }
}

function setChapterRingV316(read,total,completed){
  const button=document.getElementById('chapterTitle');
  if(!button)return;
  const safeTotal=Math.max(1,Number(total)||1);
  const percent=completed?100:Math.max(0,Math.min(100,(Number(read)||0)/safeTotal*100));
  button.style.setProperty('--chapter-reading-progress',`${percent}%`);
  button.classList.toggle('chapter-reading-complete',Boolean(completed));
  button.dataset.readingProgress=String(Math.round(percent));
  button.setAttribute('aria-label',`Capítulo ${state.chapter}. Progreso de lectura ${Math.round(percent)} por ciento`);
  button.title=completed?`Capítulo ${state.chapter} terminado`:`Capítulo ${state.chapter}: ${Math.round(percent)} % leído`;
}

function currentVisibleVerseV316(){
  const verses=[...document.querySelectorAll('#reader .verse[data-v]')];
  if(!verses.length)return 0;
  const topLimit=Math.max(90,window.innerHeight*.48);
  let current=0;
  for(const verse of verses){
    const rect=verse.getBoundingClientRect();
    if(rect.top<=topLimit&&rect.bottom>70){
      current=Math.max(current,Number(verse.dataset.v)||0);
    }
  }
  return current;
}

function updateChapterReadingProgressV316(options={}){
  if(document.getElementById('readerScreen')?.classList.contains('hidden'))return;
  const key=chapterReadingKeyV316();
  if(!key)return;
  const total=state.verses.length;
  const previous=chapterReadingProgressV316[key]||{read:0,total,completed:false};
  const visible=options.initial?0:currentVisibleVerseV316();
  const read=Math.max(Number(previous.read)||0,visible);
  const lastVerse=document.querySelector(`#reader .verse[data-v="${total}"]`);
  const lastRect=lastVerse?.getBoundingClientRect();
  const reachedEnd=Boolean(lastRect&&lastRect.top<window.innerHeight*.84&&lastRect.bottom>70);
  const completed=Boolean(previous.completed||reachedEnd||(total>0&&read>=total));
  const now=Date.now();
  const justCompleted=!previous.completed&&completed;
  const previousCount=Math.max(0,Number(previous.readCount)||(previous.completed?1:0));
  const readCount=previousCount+(justCompleted?1:0);
  const firstCompletedAt=Number(previous.firstCompletedAt)||(previous.completed?Number(previous.updatedAt)||now:(justCompleted?now:0));
  const lastCompletedAt=justCompleted?now:(Number(previous.lastCompletedAt)||(previous.completed?Number(previous.updatedAt)||firstCompletedAt:0));
  const next={
    ...previous,
    read:completed?total:read,
    total,
    completed,
    readCount,
    firstCompletedAt,
    lastCompletedAt,
    updatedAt:now
  };
  chapterReadingProgressV316[key]=next;
  setChapterRingV316(next.read,total,next.completed);
  if(next.read!==previous.read||next.completed!==previous.completed||Number(previous.total)!==total||readCount!==Number(previous.readCount||0)){
    saveChapterReadingProgressV316();
  }
}

function scheduleChapterReadingProgressV316(){
  if(chapterProgressFrameV316)return;
  chapterProgressFrameV316=requestAnimationFrame(()=>{
    chapterProgressFrameV316=0;
    updateChapterReadingProgressV316();
  });
}

function initChapterReadingProgressV316(){
  const key=chapterReadingKeyV316();
  const total=state.verses.length;
  const saved=chapterReadingProgressV316[key]||{read:0,total,completed:false};
  setChapterRingV316(saved.completed?total:saved.read,total,saved.completed);
  setTimeout(()=>updateChapterReadingProgressV316({initial:true}),80);
}

function currentChapterProgressV317(){
  const key=chapterReadingKeyV316();
  const total=Math.max(0,Number(state.verses?.length)||0);
  const saved=chapterReadingProgressV316[key]||{read:0,total,completed:false};
  const read=saved.completed?total:Math.max(0,Math.min(total,Number(saved.read)||0));
  const completed=Boolean(saved.completed&&total>0);
  return {
    key,total,read,completed,
    readCount:Math.max(0,Number(saved.readCount)||(completed?1:0)),
    firstCompletedAt:Number(saved.firstCompletedAt)||(completed?Number(saved.updatedAt)||0:0),
    lastCompletedAt:Number(saved.lastCompletedAt)||(completed?Number(saved.updatedAt)||0:0)
  };
}

function formatChapterStudyDateV318(timestamp){
  const value=Number(timestamp)||0;
  if(!value)return '—';
  try{return new Intl.DateTimeFormat('es-ES',{day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date(value))}catch(_){return '—'}
}

function currentChapterStudyStatsV318(){
  const book=state.books[state.bookIndex];
  if(!book)return {saved:0,highlights:0,explanations:0,words:0};
  const prefix=`${book.key}:${state.chapter}:`;
  const saved=Object.keys(state.favorites||{}).filter(key=>key.startsWith(prefix)).length;
  const highlights=Object.keys(state.highlights||{}).filter(key=>key.startsWith(prefix)).length;
  const explanations=Object.keys(state.explanations||{}).filter(key=>key.startsWith(prefix)).length;
  const markedWords=new Set();
  document.querySelectorAll('#reader .dict-word.dict-known').forEach(node=>{
    const normalized=normalizeDictionaryText(cleanDictionaryWord(node.dataset.word||node.textContent||''));
    if(normalized)markedWords.add(normalized);
  });
  return {saved,highlights,explanations,words:markedWords.size};
}

function renderChapterProgressDialogV317(){
  const book=state.books[state.bookIndex];
  const progress=currentChapterProgressV317();
  const stats=currentChapterStudyStatsV318();
  const reference=document.getElementById('chapterProgressReference');
  const status=document.getElementById('chapterProgressState');
  const count=document.getElementById('chapterProgressCount');
  const reset=document.getElementById('resetChapterReadingProgress');
  if(reference)reference.textContent=`${displayBook(book)} ${state.chapter}`;
  if(status){
    status.textContent=progress.completed?'Capítulo terminado':'En lectura';
    status.classList.toggle('completed',progress.completed);
  }
  if(count)count.textContent=`${progress.read} de ${progress.total} versículos`;
  const values={
    chapterReadCount:String(progress.readCount),
    chapterFirstCompleted:formatChapterStudyDateV318(progress.firstCompletedAt),
    chapterLastCompleted:formatChapterStudyDateV318(progress.lastCompletedAt),
    chapterSavedVerses:String(stats.saved),
    chapterHighlights:String(stats.highlights),
    chapterExplanations:String(stats.explanations),
    chapterMarkedWords:String(stats.words)
  };
  Object.entries(values).forEach(([id,value])=>{const node=document.getElementById(id);if(node)node.textContent=value});
  if(reset)reset.disabled=progress.read===0&&!progress.completed;
}

function openChapterProgressDialogV317(){
  renderChapterProgressDialogV317();
  document.getElementById('chapterProgressDialog')?.showModal();
}

function resetChapterReadingProgressV317(){
  const key=chapterReadingKeyV316();
  if(!key)return;
  const total=Math.max(0,Number(state.verses?.length)||0);
  const previous=chapterReadingProgressV316[key]||{};
  chapterReadingProgressV316[key]={
    ...previous,
    read:0,
    total,
    completed:false,
    updatedAt:Date.now()
  };
  saveChapterReadingProgressV316();
  setChapterRingV316(0,total,false);
  renderChapterProgressDialogV317();
  toast('Lectura reiniciada');
}

function openChapterChooserV317(){
  const b=state.books[state.bookIndex];
  document.getElementById('chapterProgressDialog')?.close();
  $('#chapterDialogTitle').textContent=displayBook(b);
  $('#chaptersGrid').innerHTML='';
  for(let i=1;i<=b.chapters;i++){
    const x=document.createElement('button');
    x.textContent=i;
    x.onclick=async()=>{state.chapter=i;$('#chapterDialog').close();showReader();await loadChapter()};
    $('#chaptersGrid').append(x);
  }
  $('#chapterDialog').showModal();
}

function repairCorruptedHistoricalReadingProgressV3122(){
  try{
    const entries=Object.entries(chapterReadingProgressV316||{});
    if(!entries.length)return false;
    const completed=entries.filter(([,value])=>value&&value.completed===true).length;
    const historical=entries.filter(([,value])=>value&&value.importedHistorical===true).length;
    const looksCorrupted=entries.length>=1000&&completed===entries.length&&historical>=1000;
    if(!looksCorrupted)return false;
    chapterReadingProgressV316={};
    localStorage.setItem(CHAPTER_READING_PROGRESS_KEY_V316,'{}');
    localStorage.setItem('biblia_progress_repair_v3122',JSON.stringify({repairedAt:Date.now(),reason:'historical-sync-overwrite'}));
    return true;
  }catch(error){
    console.error('No se pudo reparar el progreso de lectura',error);
    return false;
  }
}

loadChapterReadingProgressV316();
const readingProgressRepairedV3122=repairCorruptedHistoricalReadingProgressV3122();
if(readingProgressRepairedV3122){
  setTimeout(()=>toast('Seguimiento de lectura restablecido correctamente'),900);
}
window.addEventListener('scroll',scheduleChapterReadingProgressV316,{passive:true});
window.addEventListener('resize',scheduleChapterReadingProgressV316,{passive:true});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)scheduleChapterReadingProgressV316()});

function render(){
  const b=state.books[state.bookIndex];
  $('#bookTitle').textContent=displayBook(b);$('#chapterTitle').textContent=state.chapter;$('#chapterIndicator').textContent=`${displayBook(b)} ${state.chapter}`;
  const integratedChapter=BUILTIN_TITLES_EMBEDDED?.[b.key]?.[String(state.chapter)]||[];
  const activeChapter=state.titles?.[b.key]?.[String(state.chapter)]||[];
  const chapterTitles=[...integratedChapter,...activeChapter].reduce((m,x)=>{const v=Number(x?.versiculo),t=String(x?.titulo||'').trim();if(v>0&&t){m[v]||=[];if(!m[v].includes(t))m[v].push(t)}return m},{});
  const latestPoint=latestSavedPoint();
  const latestPointKey=latestPoint?`${latestPoint.bookKey}:${latestPoint.chapter}:${latestPoint.verse}`:'';
  const groups=chapterExplanationGroups();
  const groupByVerse=new Map();
  for(const group of groups)for(const n of group.nums)groupByVerse.set(n,group);
  let body='';let openGroupKey='';
  for(let i=0;i<state.verses.length;i++){
    const n=i+1,t=state.verses[i],k=key(n),group=groupByVerse.get(n)||null;
    const parableLink=PARABLE_LINKS_BY_POSITION[`${b.key}:${state.chapter}:${n}`]||null;
    let parableRendered=false;
    const headings=(chapterTitles[n]||[]).map(x=>{
      const isParable=parableLink&&normalizeParableHeading(x)===normalizeParableHeading(parableLink.title);
      if(isParable)parableRendered=true;
      return isParable?`<div class="section-heading parable-section-heading">${parableHeadingCapsule(parableLink)}</div>`:`<div class="section-heading"><h3 class="section-title">${escapeHtml(x)}</h3></div>`;
    }).join('')+(parableLink&&!parableRendered?`<div class="section-heading parable-section-heading">${parableHeadingCapsule(parableLink)}</div>`:'');
    if(headings){if(openGroupKey){body+='</span>';openGroupKey=''}body+=headings}
    if(group?.key!==openGroupKey){if(openGroupKey)body+='</span>';if(group){body+=`<span class="explanation-group" data-exp-key="${escapeHtml(group.key)}">`;openGroupKey=group.key}}
    const h=state.highlights[k]?` highlight-${state.highlights[k]}`:'';
    const saved=k===latestPointKey?' saved-verse':'';
    const explained=group?' explained-verse':'';
    body+=`<span class="verse${h}${saved}${explained}" data-v="${n}"${group?` data-exp-key="${escapeHtml(group.key)}"`:''}><sup class="verse-number">${n}</sup>${formatBibleText(t)}</span> `;
    const nextGroup=groupByVerse.get(n+1)||null;
    if(openGroupKey&&nextGroup?.key!==openGroupKey){body+='</span>';openGroupKey=''}
  }
  if(openGroupKey)body+='</span>';
  reader.innerHTML=`<div class="reader-book-title">${escapeHtml(displayBook(b).toUpperCase())}</div><img class="chapter-divider" src="separador_etiope_transparente_final.png?v=${APP_VERSION}" alt="" aria-hidden="true"><div class="chapter-number">${state.chapter}</div>${guideChapterCapsule(b)}`+body;
  reader.classList.remove('chapter-enter');
  void reader.offsetWidth;
  reader.classList.add('chapter-enter');
  reader.addEventListener('animationend',()=>reader.classList.remove('chapter-enter'),{once:true});
  updateSelection();updateReadingPointUI();reader.scrollTop=0;initChapterReadingProgressV316()
}
function limpiarTextoBiblico(texto){return String(texto??'').replace(/\r\n?/g,'\n').replace(/\\n/g,'\n').replace(/\/n/gi,'\n').replace(/\u002Fn/gi,'\n').replace(/_+/g,'').replace(/\n{3,}/g,'\n\n').trim()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
let dictionaryHighlightFormsCache=null;
function invalidateDictionaryHighlights(){dictionaryHighlightFormsCache=null}
function getDictionaryHighlightForms(){
  if(dictionaryHighlightFormsCache)return dictionaryHighlightFormsCache;
  const forms=new Set();
  for(const entry of getDictionaryEntries()){
    if(entry?.resaltar!==true)continue;
    const term=cleanDictionaryWord(entry?.termino||'');
    // Las cápsulas se aplican a palabras completas. Las expresiones de varias palabras
    // siguen disponibles en el buscador, pero no se fragmentan en marcas engañosas.
    if(!term||/\s/.test(term))continue;
    dictionaryWordForms(term).forEach(form=>forms.add(form));
  }
  dictionaryHighlightFormsCache=forms;
  return forms;
}
function isDictionaryWord(value){
  const normalized=normalizeDictionaryText(cleanDictionaryWord(value));
  return !!normalized&&getDictionaryHighlightForms().has(normalized);
}
function formatBibleText(s){
  const safe=escapeHtml(limpiarTextoBiblico(s));
  // Cada palabra queda identificada sin alterar la puntuación ni el espaciado del texto.
  return safe.replace(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:['’’-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*)/g,(word)=>`<span class="dict-word${isDictionaryWord(word)?' dict-known':''}" data-word="${word}">${word}</span>`).replace(/\n/g,'<br>');
}
function explanationNumsFromKey(k){return String(k||'').split(':')[2]?.split(',').map(Number).filter(Number.isFinite).sort((a,b)=>a-b)||[]}
function isContinuousNums(nums){nums=[...new Set(nums)].sort((a,b)=>a-b);return nums.every((n,i)=>i===0||n===nums[i-1]+1)}
function findExplanationForVerse(n){const prefix=`${state.books[state.bookIndex].key}:${state.chapter}:`;for(const [k,v] of Object.entries(state.explanations)){if(k.startsWith(prefix)){const nums=explanationNumsFromKey(k);if(nums.includes(n))return{key:k,nums,...v}}}return null}
function findExplanationForSelection(nums=[...state.selected]){const unique=[...new Set(nums)].sort((a,b)=>a-b);if(!unique.length)return null;const matches=unique.map(findExplanationForVerse).filter(Boolean);if(!matches.length)return null;const first=matches[0];if(matches.every(x=>x.key===first.key)&&unique.every(n=>first.nums.includes(n)))return first;return null}
function chapterExplanationGroups(){const prefix=`${state.books[state.bookIndex].key}:${state.chapter}:`;return Object.entries(state.explanations).filter(([k])=>k.startsWith(prefix)).map(([key,value])=>({key,nums:explanationNumsFromKey(key),...value})).filter(x=>x.nums.length).sort((a,b)=>a.nums[0]-b.nums[0])}
function updateSelection(){
  $$('.verse').forEach(el=>el.classList.toggle('selected',state.selected.has(+el.dataset.v)));
  const highlightBtn=document.querySelector('.action[data-action="highlight"]');
  const readingPointBtn=document.querySelector('.action[data-action="reading-point"]');
  const favoriteBtn=document.querySelector('.action[data-action="favorite"]');
  const explainBtn=document.querySelector('.action[data-action="explain"]');
  const toggle=$('#actionsPanelToggle');
  const needsSelection=['highlight','favorite','explain','copy'];
  const hasSelection=state.selected.size>0;

  // El panel lateral y su pestaña permanecen siempre disponibles.
  selectionBar.classList.remove('hidden');
  if(toggle)toggle.setAttribute('aria-expanded',selectionBar.classList.contains('open')?'true':'false');
  $('#selectionReference').textContent=hasSelection?currentReference():'Selecciona uno o varios versículos';
  const countEl=$('#selectionCount');
  if(countEl){
    const count=state.selected.size;
    countEl.textContent=hasSelection?`${count} ${count===1?'versículo seleccionado':'versículos seleccionados'}`:'Toca un versículo para activar las acciones';
  }

  for(const actionName of needsSelection){
    const btn=document.querySelector(`.action[data-action="${actionName}"]`);
    if(btn){
      btn.disabled=!hasSelection;
      btn.setAttribute('aria-disabled',hasSelection?'false':'true');
    }
  }

  if(highlightBtn){
    const nums=[...state.selected];
    const removeMode=hasSelection&&nums.length>0&&nums.every(n=>Boolean(state.highlights[key(n)]));
    highlightBtn.dataset.mode=removeMode?'remove':'add';
    highlightBtn.textContent=removeMode?'QUITAR SUBRAYADO':'SUBRAYAR';
    highlightBtn.setAttribute('aria-label',removeMode?'Quitar subrayado':'Subrayar');
    highlightBtn.title=removeMode?'Quitar subrayado':'Subrayar';
  }

  if(hasSelection){
    const nums=[...state.selected];
    const activeKey=state.activeReadingPoint?`${state.activeReadingPoint.bookKey}:${state.activeReadingPoint.chapter}:${state.activeReadingPoint.verse}`:'';
    const removeMode=nums.length===1&&key(nums[0])===activeKey;
    if(favoriteBtn){
      favoriteBtn.dataset.mode=removeMode?'remove':'save';
      favoriteBtn.textContent=removeMode?'QUITAR PUNTO DE LIBRO':'GUARDAR PUNTO DE LIBRO';
      favoriteBtn.setAttribute('aria-label',removeMode?'Quitar punto de libro':'Guardar punto de libro');
      favoriteBtn.title=removeMode?'Quitar punto de libro':'Guardar punto de libro';
    }
  }else if(favoriteBtn){
    favoriteBtn.dataset.mode='save';
    favoriteBtn.textContent='GUARDAR PUNTO DE LIBRO';
    favoriteBtn.setAttribute('aria-label','Guardar punto de libro');
    favoriteBtn.title='Guardar punto de libro';
  }
  const selectedExplanation=hasSelection?findExplanationForSelection([...state.selected]):null;
  if(!selectedExplanation||selectedExplanation.key!==explanationArmedKey)explanationArmedKey='';
  if(explainBtn){
    const removeMode=Boolean(selectedExplanation&&explanationArmedKey===selectedExplanation.key);
    explainBtn.dataset.mode=removeMode?'remove':(selectedExplanation?'view':'open');
    explainBtn.textContent=removeMode?'QUITAR EXPLICACIÓN':'EXPLICACIÓN';
    explainBtn.setAttribute('aria-label',removeMode?'Quitar explicación del grupo':(selectedExplanation?'Leer explicación':'Añadir explicación'));
    explainBtn.title=removeMode?'Quitar explicación del grupo':(selectedExplanation?'Leer explicación':'Añadir explicación');
  }
}
const actionsPanelToggle=$('#actionsPanelToggle');
if(actionsPanelToggle)actionsPanelToggle.addEventListener('click',e=>{
  e.stopPropagation();
  const open=selectionBar.classList.toggle('open');
  actionsPanelToggle.setAttribute('aria-expanded',open?'true':'false');
});

(function activarGestosPanelAcciones(){
  const panel=selectionBar;
  const toggle=actionsPanelToggle;
  const EDGE=34;
  const THRESHOLD=68;
  let startX=0,startY=0,tracking=false,opening=false,horizontal=false;

  function reset(){
    panel.classList.remove('dragging');
    panel.style.transform='';
    tracking=opening=horizontal=false;
  }
  function finish(open){
    reset();
    panel.classList.toggle('open',open);
    toggle?.setAttribute('aria-expanded',open?'true':'false');
  }

  // Abrir desde el borde derecho deslizando hacia la izquierda.
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||panel.classList.contains('open'))return;
    if(document.querySelector('dialog[open]'))return;
    const t=e.touches[0];
    if(t.clientX<window.innerWidth-EDGE)return;
    startX=t.clientX;startY=t.clientY;tracking=true;opening=true;horizontal=false;
  },{passive:true});

  // Cerrar el panel abierto deslizando hacia la derecha.
  panel.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||!panel.classList.contains('open'))return;
    const t=e.touches[0];
    startX=t.clientX;startY=t.clientY;tracking=true;opening=false;horizontal=false;
  },{passive:true});

  window.addEventListener('touchmove',e=>{
    if(!tracking)return;
    const t=e.touches[0],dx=t.clientX-startX,dy=t.clientY-startY;
    if(!horizontal){
      if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>12){reset();return}
      if(Math.abs(dx)>10)horizontal=true;
    }
    if(!horizontal)return;
    if((opening&&dx>=0)||(!opening&&dx<=0))return;
    e.preventDefault();
    panel.classList.add('dragging');
    if(opening){
      const width=panel.offsetWidth||300;
      const remaining=Math.max(0,width+dx);
      panel.style.transform=`translateX(${remaining}px)`;
    }else{
      const x=Math.min(panel.offsetWidth||300,Math.max(0,dx));
      panel.style.transform=`translateX(${x}px)`;
    }
  },{passive:false});

  window.addEventListener('touchend',e=>{
    if(!tracking)return;
    const dx=(e.changedTouches[0]?.clientX??startX)-startX;
    if(opening)finish(horizontal&&dx<-THRESHOLD);
    else finish(!(horizontal&&dx>THRESHOLD));
  },{passive:true});
  window.addEventListener('touchcancel',reset,{passive:true});
})();


/* V2.8.7 · Reconocimiento inteligente de personajes y lugares al mantener pulsada una palabra. */
let biblicalEntityReturnPosition=null;
function normalizeBiblicalEntityText(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9ñáéíóúü\s-]/gi,' ').replace(/\s+/g,' ').trim()}
function captureBiblicalEntityPosition(){const se=document.scrollingElement||document.documentElement;return{readerTop:reader?.scrollTop||0,pageTop:se?.scrollTop||window.scrollY||0,pageLeft:se?.scrollLeft||window.scrollX||0}}
function restoreBiblicalEntityPosition(){const p=biblicalEntityReturnPosition;if(!p)return;const se=document.scrollingElement||document.documentElement;if(reader)reader.scrollTop=p.readerTop;if(se){se.scrollTop=p.pageTop;se.scrollLeft=p.pageLeft}requestAnimationFrame(()=>{if(reader)reader.scrollTop=p.readerTop;if(se)se.scrollTop=p.pageTop});setTimeout(()=>{if(reader)reader.scrollTop=p.readerTop;if(se)se.scrollTop=p.pageTop},120)}
const BIBLICAL_CHARACTER_ALIASES={
  'pedro':['simón pedro','simón','cefás','cefas'], 'pablo':['saulo','saulo de tarso'],
  'abraham':['abram'], 'sara':['sarai'], 'jacob':['israel'], 'josué':['oseas','hoshea'],
  'miriam':['maría hermana de moisés'], 'maría madre de jesús':['maría'], 'jesús':['cristo','jesucristo','mesías','mesias']
};
function entityAliasesForCharacter(p){const base=[p.nombre];const n=normalizeBiblicalEntityText(p.nombre);for(const [canonical,aliases] of Object.entries(BIBLICAL_CHARACTER_ALIASES)){if(n===normalizeBiblicalEntityText(canonical)||n.startsWith(normalizeBiblicalEntityText(canonical)+' '))base.push(...aliases)}return base}
function entityVersePlainText(wordElement){const verse=wordElement?.closest('.verse');return normalizeBiblicalEntityText(verse?.innerText||'')}
function entityCandidatesForWord(raw,wordElement){
  const needle=normalizeBiblicalEntityText(raw),verseText=entityVersePlainText(wordElement),out=[];
  if(!needle)return out;
  const chars=Array.isArray(window.BIBLICAL_CHARACTERS_V2242)?window.BIBLICAL_CHARACTERS_V2242:[];
  for(const p of chars){
    const names=entityAliasesForCharacter(p).map(normalizeBiblicalEntityText).filter(Boolean);
    let score=99;
    for(const n of names){if(n===needle)score=Math.min(score,0);else if(n.split(' ').includes(needle)&&verseText.includes(n))score=Math.min(score,1);else if(n.startsWith(needle+' ')&&verseText.includes(n))score=Math.min(score,2)}
    if(score<99)out.push({type:'character',id:p.id,name:p.nombre,score});
  }
  for(const p of biblicalPlacesData||[]){
    const n=normalizeBiblicalEntityText(p.name);let score=99;
    if(n===needle)score=0;else if(n.split(' ').includes(needle)&&verseText.includes(n))score=1;else if(n.startsWith(needle+' ')&&verseText.includes(n))score=2;
    if(score<99)out.push({type:'place',id:p.id,name:p.name,score});
  }
  const seen=new Set();return out.sort((a,b)=>a.score-b.score||a.name.localeCompare(b.name,'es')).filter(x=>{const k=x.type+':'+x.id;if(seen.has(k))return false;seen.add(k);return true}).slice(0,8);
}
async function openBiblicalParableFromReader(id){
  biblicalEntityReturnPosition=captureBiblicalEntityPosition();
  window.__biblicalEntityOpenedFromReader=true;
  try{sessionStorage.setItem('biblicalEntityOpenedFromReader','1')}catch(_){ }
  await openBiblicalParables();
  openBiblicalParable(id,true);
}
window.openBiblicalParableFromReader=openBiblicalParableFromReader;
function closeBiblicalEntityChooser(){document.getElementById('biblicalEntityChooser')?.remove()}
function showBiblicalEntityChooser(candidates,raw){
  closeBiblicalEntityChooser();
  const wrap=document.createElement('div');wrap.id='biblicalEntityChooser';wrap.className='biblical-entity-overlay';
  const rows=candidates.map((x,i)=>`<button type="button" data-entity-index="${i}" class="biblical-entity-choice"><span class="biblical-entity-icon">${x.type==='character'?'👤':'📍'}</span><span><strong>${escapeHtml(x.name)}</strong><small>${x.type==='character'?'Personaje bíblico':'Lugar bíblico'}</small></span><span class="biblical-entity-arrow">›</span></button>`).join('');
  wrap.innerHTML=`<div class="biblical-entity-dialog" role="dialog" aria-modal="true" aria-labelledby="biblicalEntityTitle"><div class="biblical-entity-head"><div><small>SELECCIÓN BÍBLICA</small><h2 id="biblicalEntityTitle">${escapeHtml(raw)}</h2></div><button type="button" class="biblical-entity-close" aria-label="Cerrar">✕</button></div><p class="biblical-entity-question">¿Quieres ir a su ficha?</p><div class="biblical-entity-list">${rows}</div><button type="button" class="biblical-entity-cancel">Seguir leyendo</button></div>`;
  document.body.appendChild(wrap);
  wrap.querySelector('.biblical-entity-close').addEventListener('click',closeBiblicalEntityChooser);
  wrap.querySelector('.biblical-entity-cancel').addEventListener('click',closeBiblicalEntityChooser);
  wrap.addEventListener('click',e=>{if(e.target===wrap)closeBiblicalEntityChooser()});
  wrap.querySelectorAll('[data-entity-index]').forEach(btn=>btn.addEventListener('click',()=>openRecognizedBiblicalEntity(candidates[Number(btn.dataset.entityIndex)])));
}
async function openRecognizedBiblicalEntity(entity){
  if(!entity)return;
  biblicalEntityReturnPosition=captureBiblicalEntityPosition();
  window.__biblicalEntityOpenedFromReader=true;
  try{sessionStorage.setItem('biblicalEntityOpenedFromReader','1')}catch(_){ }
  closeBiblicalEntityChooser();
  if(entity.type==='character'){
    try{await loadBiblicalCharactersV2252()}catch(_){toast('No se pudo abrir la ficha');return}
    await openBiblicalCharactersV2242();
    openBiblicalCharacterDetailV2242(entity.id,true);
  }else{
    await openBiblicalPlaces();
    openBiblicalPlaceDetail(entity.id);
  }
  ensureBiblicalEntityReturnButton();
  requestAnimationFrame(ensureBiblicalEntityReturnButton);
  setTimeout(ensureBiblicalEntityReturnButton,80);
  setTimeout(ensureBiblicalEntityReturnButton,250);
  setTimeout(ensureBiblicalEntityReturnButton,500);
}
async function recognizeBiblicalEntityOrDictionary(raw,wordElement){
  try{await Promise.allSettled([loadBiblicalCharactersV2252(),loadBiblicalPlaces()])}catch(_){ }
  const candidates=entityCandidatesForWord(raw,wordElement);
  if(candidates.length){showBiblicalEntityChooser(candidates,raw);return true}
  return false;
}

// V1.62 · Pulsación prolongada sobre una palabra para abrir el diccionario.
let wordPressTimer=null,wordPressTarget=null,wordPressStartX=0,wordPressStartY=0,wordPressSuppressUntil=0;
function cancelWordPress(){
  if(wordPressTimer){clearTimeout(wordPressTimer);wordPressTimer=null}
  wordPressTarget?.classList.remove('word-pressing');
  wordPressTarget=null;
}
reader.addEventListener('pointerdown',e=>{
  const word=e.target.closest('.dict-word');
  if(!word||e.pointerType==='mouse'&&e.button!==0)return;
  cancelWordPress();
  wordPressTarget=word;wordPressStartX=e.clientX;wordPressStartY=e.clientY;
  word.classList.add('word-pressing');
  wordPressTimer=setTimeout(()=>{
    const raw=word.dataset.word||word.textContent||'';
    const clean=raw.replace(/^[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/g,'');
    wordPressSuppressUntil=Date.now()+900;
    navigator.vibrate?.(35);
    cancelWordPress();
    if(clean){recognizeBiblicalEntityOrDictionary(clean,word).then(found=>{if(!found){const toastEl=$('#toast');if(toastEl){toastEl.classList.add('hidden');toastEl.textContent=''}clearTimeout(toastTimer);openDictionary(clean)}})}
  },650);
},{passive:true});
reader.addEventListener('pointermove',e=>{
  if(!wordPressTarget)return;
  if(Math.hypot(e.clientX-wordPressStartX,e.clientY-wordPressStartY)>12)cancelWordPress();
},{passive:true});
reader.addEventListener('pointerup',cancelWordPress,{passive:true});
reader.addEventListener('pointercancel',cancelWordPress,{passive:true});
reader.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')cancelWordPress()},{passive:true});
reader.addEventListener('contextmenu',e=>{if(e.target.closest('.dict-word'))e.preventDefault()});

reader.addEventListener('click',e=>{
  // Un toque normal, incluso sobre una palabra del diccionario, selecciona el versículo.
  // Solo el toque posterior a una pulsación larga se cancela para no seleccionar accidentalmente.
  if(Date.now()<wordPressSuppressUntil){e.preventDefault();e.stopPropagation();return}
  const marker=e.target.closest('.explain-marker');if(marker){openViewExplanation(marker.dataset.exp);return}
  const v=e.target.closest('.verse');if(!v)return;
  const n=+v.dataset.v;
  explanationArmedKey='';
  const wasSelected=state.selected.has(n);
  wasSelected?state.selected.delete(n):state.selected.add(n);
  updateSelection();
  if(!wasSelected){
    selectionBar.classList.add('open');
    actionsPanelToggle?.setAttribute('aria-expanded','true');
  }
});
// El versículo abierto desde el selector permanece marcado hasta tocar fuera de él.
document.addEventListener('click',e=>{const target=document.querySelector('.verse.reading-target');if(target&&!e.target.closest('.verse.reading-target'))target.classList.remove('reading-target')},true);
$$('.action').forEach(b=>b.addEventListener('click',()=>action(b.dataset.action)));
async function action(a){
  if(a==='clear'){state.selected.clear();explanationArmedKey='';updateSelection()}
  if(a==='reading-point')goToReadingPoint();
  if(a==='more')openMoreFunctions();
  if(a==='copy')copyVerses();
  if(a==='highlight'){
    const nums=[...state.selected].sort((a,b)=>a-b);
    const removeMode=nums.length>0&&nums.every(n=>Boolean(state.highlights[key(n)]));
    if(removeMode){
      for(const n of nums)delete state.highlights[key(n)];
      save();state.selected.clear();render();updateSelection();toast('Subrayado quitado');
    }else $('#highlightDialog').showModal();
  }
  if(a==='favorite'){
    const nums=[...state.selected].sort((a,b)=>a-b);
    const activeKey=state.activeReadingPoint?`${state.activeReadingPoint.bookKey}:${state.activeReadingPoint.chapter}:${state.activeReadingPoint.verse}`:'';
    const removeMode=nums.length===1&&key(nums[0])===activeKey;
    if(removeMode){
      const k=key(nums[0]);
      delete state.favorites[k];
      state.activeReadingPoint=null;
    }else if(nums.length){
      const now=Date.now();
      for(const n of nums){
        const k=key(n);
        if(!state.favorites[k])state.favorites[k]={text:limpiarTextoBiblico(state.verses[n-1]),ref:`${displayBook(state.books[state.bookIndex])} ${state.chapter}:${n}`,savedAt:now};
      }
      const n=nums[0],fav=state.favorites[key(n)];
      const point={bookKey:state.books[state.bookIndex].key,chapter:Number(state.chapter),verse:Number(n),ref:fav.ref,savedAt:Number(fav.savedAt)||now};
      state.activeReadingPoint=point;state.lastReadingPoint=point;
    }
    save();
    state.selected.clear();
    render();
    updateSelection();
    toast(removeMode?'Punto de libro quitado':'Punto de libro guardado');
  }
  if(a==='explain'){
    const nums=[...state.selected].sort((a,b)=>a-b);
    const existing=findExplanationForSelection(nums);
    if(existing){
      if(explanationArmedKey===existing.key){
        if(confirm(`¿Quitar la explicación de ${existing.ref}?`)){
          delete state.explanations[existing.key];explanationArmedKey='';save();state.selected.clear();render();updateSelection();toast('Explicación eliminada');
        }
      }else{
        openViewExplanation(existing.key);
        explanationArmedKey=existing.key;
        updateSelection();
      }
    }else{
      explanationArmedKey='';
      if(!isContinuousNums(nums)){toast('Selecciona versículos seguidos para crear una explicación');return}
      openEditExplanation(rangeKey(nums),currentReference(nums));
    }
  }
  if(a==='dictionary')openDictionary()
  if(a==='encyclopedia')openBiblicalEncyclopedia()
  if(a==='characters')openBiblicalCharactersV2242()
  if(a==='parables')openBiblicalParables()
  if(a==='guides')openBiblicalGuides()
  if(a==='stats')openStats()
}
async function copyVerses(){const nums=[...state.selected].sort((a,b)=>a-b);const body=nums.map(n=>`[${n}] ${limpiarTextoBiblico(state.verses[n-1])}`).join('\n');const text=`${currentReference(nums,true)} RVR1960\n${body}`;await navigator.clipboard.writeText(text);toast('Versículos copiados')}
$$('#highlightDialog [data-color]').forEach(b=>b.addEventListener('click',()=>{for(const n of state.selected){const k=key(n);b.dataset.color==='none'?delete state.highlights[k]:state.highlights[k]=b.dataset.color}save();state.selected.clear();$('#highlightDialog').close();render();updateSelection();toast('Subrayado actualizado')}));
function openEditExplanation(k,ref){const old=state.explanations[k];const text=$('#explanationText');$('#explanationDialog').dataset.key=k;$('#explanationRef').textContent=ref;text.value=old?.text||'';text.readOnly=Boolean(old);$('#editExplanationInline').style.display=old?'inline-block':'none';$('#deleteExplanation').style.display=old?'inline-block':'none';$('#explanationDialog').showModal()}
$('#saveExplanation').onclick=()=>{const k=$('#explanationDialog').dataset.key,text=$('#explanationText').value.trim();if(!text){toast('Escribe una explicación');return}state.explanations[k]={text,ref:$('#explanationRef').textContent,updated:Date.now()};save();$('#explanationDialog').close();state.selected.clear();render();toast('Explicación guardada')};
$('#editExplanationInline').onclick=()=>{const text=$('#explanationText');text.readOnly=false;text.focus();text.setSelectionRange(text.value.length,text.value.length);toast('Modo edición')};
$('#pasteExplanation').onclick=async()=>{try{const text=$('#explanationText');text.readOnly=false;text.value=await navigator.clipboard.readText();text.focus()}catch{toast('No se pudo pegar')}};
$('#deleteExplanation').onclick=()=>{if(confirm('¿Eliminar esta explicación?')){delete state.explanations[$('#explanationDialog').dataset.key];save();$('#explanationDialog').close();render();toast('Explicación eliminada')}};
function openViewExplanation(k){const x=state.explanations[k];if(!x)return;$('#viewExplanationDialog').dataset.key=k;$('#viewExplanationRef').textContent=x.ref;$('#viewExplanationText').textContent=x.text;$('#viewExplanationDialog').showModal()}
$('#editExplanation').onclick=()=>{const k=$('#viewExplanationDialog').dataset.key,x=state.explanations[k];$('#viewExplanationDialog').close();openEditExplanation(k,x.ref)};
$('#copyExplanation').onclick=async()=>{const k=$('#viewExplanationDialog').dataset.key,x=state.explanations[k];await navigator.clipboard.writeText(`${x.ref}\n${x.text}`);toast('Explicación copiada')};
function renderBooks(filter='all'){
  const list=$('#booksList');
  list.innerHTML='';
  const filtered=state.books.filter(b=>filter==='all'||b.testament===filter);
  filtered.forEach(b=>{
    const real=state.books.indexOf(b);
    const wrap=document.createElement('section');
    wrap.className='book-entry';

    const btn=document.createElement('button');
    btn.className='book-item';
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML=`<span>${escapeHtml(displayBook(b))}</span><small>${escapeHtml(b.category)} • ${b.chapters} capítulos</small><span class="book-chevron">⌄</span>`;

    const chaptersWrap=document.createElement('div');
    chaptersWrap.className='book-chapters-wrap hidden';
    const grid=document.createElement('div');
    grid.className='book-chapters';
    grid.setAttribute('aria-label',`Capítulos de ${displayBook(b)}`);
    chaptersWrap.append(grid);

    for(let chapter=1;chapter<=b.chapters;chapter++){
      const chapterBlock=document.createElement('div');
      chapterBlock.className='chapter-block';
      const chapterBtn=document.createElement('button');
      chapterBtn.type='button';
      chapterBtn.className='chapter-choice';
      chapterBtn.textContent=chapter;
      if(real===state.bookIndex&&chapter===state.chapter)chapterBtn.classList.add('current');

      const versesGrid=document.createElement('div');
      versesGrid.className='book-verses hidden';
      versesGrid.setAttribute('aria-label',`Versículos de ${displayBook(b)} ${chapter}`);

      chapterBtn.onclick=async event=>{
        event.stopPropagation();
        const opening=versesGrid.classList.contains('hidden');
        chaptersWrap.querySelectorAll('.book-verses').forEach(x=>x.classList.add('hidden'));
        chaptersWrap.querySelectorAll('.chapter-choice').forEach(x=>x.classList.remove('open'));
        if(!opening)return;
        chapterBtn.classList.add('open');
        if(!versesGrid.dataset.loaded){
          versesGrid.innerHTML='<span class="loading-verses">Cargando…</span>';
          try{
            const data=await getBookChapters(b);
            const count=(data[chapter-1]||[]).length;
            versesGrid.innerHTML='';
            for(let verse=1;verse<=count;verse++){
              const verseBtn=document.createElement('button');
              verseBtn.type='button';
              verseBtn.textContent=verse;
              verseBtn.onclick=async ev=>{
                ev.stopPropagation();
                state.bookIndex=real;
                state.chapter=chapter;
                closeDrawer();
                showReader();
                await loadChapter();
                setTimeout(()=>{
                  const el=$(`.verse[data-v="${verse}"]`);
                  el?.scrollIntoView({block:'center',behavior:'smooth'});
                  document.querySelectorAll('.verse.reading-target').forEach(x=>x.classList.remove('reading-target'));
                  el?.classList.add('reading-target');
                },120);
              };
              versesGrid.append(verseBtn);
            }
            versesGrid.dataset.loaded='true';
          }catch{
            versesGrid.innerHTML='<span class="loading-verses">No se pudieron cargar los versículos.</span>';
          }
        }
        versesGrid.classList.remove('hidden');
        setTimeout(()=>chapterBlock.scrollIntoView({block:'nearest',behavior:'smooth'}),40);
      };

      chapterBlock.append(chapterBtn,versesGrid);
      grid.append(chapterBlock);
    }

    btn.onclick=()=>{
      const opening=chaptersWrap.classList.contains('hidden');

      // Cierra cualquier otro libro abierto con una transición breve y aislada.
      $$('.book-chapters-wrap').forEach(x=>{
        if(x===chaptersWrap||x.classList.contains('hidden'))return;
        const animation=x.animate(
          [{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-7px)'}],
          {duration:135,easing:'ease-in',fill:'both'}
        );
        animation.onfinish=()=>{x.classList.add('hidden');animation.cancel()};
      });
      $$('.book-item').forEach(x=>x.setAttribute('aria-expanded','false'));

      if(opening){
        chaptersWrap.classList.remove('hidden');
        btn.setAttribute('aria-expanded','true');
        const animation=chaptersWrap.animate(
          [{opacity:0,transform:'translateY(-8px)'},{opacity:1,transform:'translateY(0)'}],
          {duration:175,easing:'cubic-bezier(.2,.75,.25,1)',fill:'both'}
        );
        animation.onfinish=()=>animation.cancel();
        setTimeout(()=>wrap.scrollIntoView({block:'nearest',behavior:'smooth'}),45);
      }else{
        const animation=chaptersWrap.animate(
          [{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-7px)'}],
          {duration:135,easing:'ease-in',fill:'both'}
        );
        animation.onfinish=()=>{chaptersWrap.classList.add('hidden');animation.cancel()};
      }
    };

    wrap.append(btn,chaptersWrap);
    list.append(wrap);
  });
}
$('#homeBtn').onclick=showHome;$('#bookTitle').onclick=openBooksDrawer;function closeDrawer(){const drawer=$('#drawer');drawer.classList.remove('is-open');drawer.classList.add('closing');$('#drawerBackdrop').classList.add('hidden');setTimeout(()=>{drawer.classList.add('hidden');drawer.classList.remove('closing')},220)}$('#closeDrawer').onclick=closeDrawer;$('#drawerBackdrop').onclick=closeDrawer;
(function activarGestosPanelLibros(){
  const drawer=$('#drawer');
  const backdrop=$('#drawerBackdrop');
  const EDGE=30;
  const THRESHOLD=72;
  let startX=0,startY=0,trackingClose=false,trackingOpen=false,horizontal=false;

  function resetDrag(){
    drawer.classList.remove('dragging');
    drawer.style.transform='';
    backdrop.style.opacity='';
    trackingClose=trackingOpen=horizontal=false;
  }

  // Cerrar: arrastrar el panel abierto hacia la izquierda.
  drawer.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||drawer.classList.contains('hidden'))return;
    startX=e.touches[0].clientX;startY=e.touches[0].clientY;
    trackingClose=true;horizontal=false;
  },{passive:true});
  drawer.addEventListener('touchmove',e=>{
    if(!trackingClose)return;
    const dx=e.touches[0].clientX-startX,dy=e.touches[0].clientY-startY;
    if(!horizontal){
      if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>12){trackingClose=false;return}
      if(Math.abs(dx)>10)horizontal=true;
    }
    if(horizontal&&dx<0){
      e.preventDefault();
      drawer.classList.add('dragging');
      const x=Math.max(-drawer.offsetWidth,dx);
      drawer.style.transform=`translateX(${x}px)`;
      backdrop.style.opacity=String(Math.max(0,1-Math.abs(x)/drawer.offsetWidth));
    }
  },{passive:false});
  drawer.addEventListener('touchend',e=>{
    if(!trackingClose){resetDrag();return}
    const dx=(e.changedTouches[0]?.clientX??startX)-startX;
    const shouldClose=horizontal&&dx<-THRESHOLD;
    resetDrag();
    if(shouldClose){
      closeDrawer();
    }else{
      drawer.classList.remove('closing');
      drawer.classList.add('is-open');
      drawer.classList.remove('hidden');
      backdrop.classList.remove('hidden');
    }
  },{passive:true});
  drawer.addEventListener('touchcancel',resetDrag,{passive:true});

  // Abrir: comenzar en el borde izquierdo y deslizar hacia la derecha.
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||!drawer.classList.contains('hidden'))return;
    if(document.querySelector('dialog[open]'))return;
    const t=e.touches[0];
    if(t.clientX>EDGE)return;
    startX=t.clientX;startY=t.clientY;
    trackingOpen=true;horizontal=false;
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!trackingOpen)return;
    const dx=e.touches[0].clientX-startX,dy=e.touches[0].clientY-startY;
    if(!horizontal){
      if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>12){trackingOpen=false;return}
      if(dx>10){
        horizontal=true;
        drawer.classList.remove('hidden','closing');
        drawer.classList.add('dragging');
        backdrop.classList.remove('hidden');
      }
    }
    if(horizontal){
      e.preventDefault();
      const width=drawer.offsetWidth||window.innerWidth*.9;
      const progress=Math.max(0,Math.min(1,dx/width));
      drawer.style.transform=`translateX(${(-1+progress)*100}%)`;
      backdrop.style.opacity=String(progress);
    }
  },{passive:false});
  window.addEventListener('touchend',e=>{
    if(!trackingOpen)return;
    const dx=(e.changedTouches[0]?.clientX??startX)-startX;
    const shouldOpen=horizontal&&dx>THRESHOLD;
    resetDrag();
    if(shouldOpen){
      drawer.classList.remove('hidden','closing');
      drawer.classList.add('is-open');
      backdrop.classList.remove('hidden');
    }else{
      drawer.classList.remove('is-open');
      drawer.classList.add('hidden');
      backdrop.classList.add('hidden');
    }
  },{passive:true});
  window.addEventListener('touchcancel',()=>{
    if(!trackingOpen)return;
    resetDrag();
    drawer.classList.remove('is-open');
    drawer.classList.add('hidden');
    backdrop.classList.add('hidden');
  },{passive:true});
})();
$$('.drawer-tabs button').forEach(b=>b.onclick=()=>{$$('.drawer-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderBooks(b.dataset.testament)});
$('#chapterTitle').onclick=openChapterProgressDialogV317;
$('#resetChapterReadingProgress').onclick=resetChapterReadingProgressV317;
$('#openChapterChooserFromProgress').onclick=openChapterChooserV317;
$('#prevChapter').onclick=()=>moveChapter(-1);$('#nextChapter').onclick=()=>moveChapter(1);async function moveChapter(d){let b=state.books[state.bookIndex];let c=state.chapter+d;if(c<1&&state.bookIndex>0){state.bookIndex--;b=state.books[state.bookIndex];c=b.chapters}else if(c>b.chapters&&state.bookIndex<state.books.length-1){state.bookIndex++;c=1}else if(c<1||c>b.chapters)return;state.chapter=c;showReader();await loadChapter();scrollTo(0,0)}
$('#searchBtn').onclick=openSearchDialog;
$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});
$('#searchInput').addEventListener('input',()=>requestAnimationFrame(updateSearchDialogViewport));
$('#runSearch').onclick=runSearch;
bindKeyboardAwareDialog(SEARCH_DIALOG_LAYOUT);
function normalizeText(x){return String(x||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[ªº°]/g,'').replace(/[.,;!?¿¡()\[\]]/g,' ').replace(/\s+/g,' ').trim()}
function canonicalBookText(x){return normalizeText(x).replace(/^el libro (?:de |del |de los |de la )?/,'').replace(/^libro (?:de |del |de los |de la )?/,'').replace(/^el evangelio segun /,'').replace(/^evangelio segun /,'').replace(/^san /,'').replace(/^(primera|primer|1ro|1er) (?:carta |epistola )?(?:de |a los |a las )?/,'1 ').replace(/^(segunda|segundo|2do) (?:carta |epistola )?(?:de |a los |a las )?/,'2 ').replace(/^(tercera|tercer|3ro|3er) (?:carta |epistola )?(?:de |a los |a las )?/,'3 ').replace(/^i /,'1 ').replace(/^ii /,'2 ').replace(/^iii /,'3 ').replace(/\s+/g,' ').trim()}
function bookSearchNames(book){
  const names=new Set([book.key,book.shortTitle,book.title,book.abbr,displayBook(book)]);
  const base=canonicalBookText(book.shortTitle||displayBook(book));
  names.add(base);
  const aliases={
    genesis:['gen','gn'],exodo:['exo','ex'],levitico:['lev','lv'],numeros:['num','nm'],deuteronomio:['deut','dt'],
    josue:['jos'],jueces:['jue'],rut:['ruth'],salmos:['salmo','sal','sl'],proverbios:['proverbio','prov','pr'],
    eclesiastes:['ecl','qohelet'],cantares:['cantar','cantar de los cantares','cantar de salomon','cnt'],isaias:['isa'],
    jeremias:['jer'],lamentaciones:['lam'],ezequiel:['eze','ez'],daniel:['dan'],oseas:['os'],abdias:['abd'],
    miqueas:['miq'],nahum:['nah'],habacuc:['hab'],sofonias:['sof'],hageo:['hag'],zacarias:['zac'],malaquias:['mal'],
    mateo:['san mateo','evangelio de mateo','mt'],marcos:['san marcos','evangelio de marcos','mc'],
    lucas:['san lucas','evangelio de lucas','lc'],juan:['san juan','evangelio de juan','jn'],hechos:['hechos de los apostoles','hch'],
    romanos:['rom','ro'],galatas:['gal'],efesios:['efe','ef'],filipenses:['fil','flp'],colosenses:['col'],
    apocalipsis:['revelacion','apoc','ap']
  };
  (aliases[book.key]||[]).forEach(x=>names.add(x));
  if(/^([123])_/.test(book.key)){
    const n=book.key[0],rest=base.replace(/^[123] /,'');
    const word=n==='1'?'primera':n==='2'?'segunda':'tercera';
    const masc=n==='1'?'primero':n==='2'?'segundo':'tercero';
    [ `${n} ${rest}`,`${word} de ${rest}`,`${word} ${rest}`,`${masc} de ${rest}`,`${n}a ${rest}`,`${n} ${rest.replace(/^de /,'')}` ].forEach(x=>names.add(x));
  }
  return [...names].map(canonicalBookText).filter(Boolean);
}
function bookMatchScore(book,q){
  const wanted=canonicalBookText(q),names=bookSearchNames(book);let best=0;
  for(const name of names){
    if(name===wanted)best=Math.max(best,1000);
    else if(name.startsWith(wanted))best=Math.max(best,800-Math.max(0,name.length-wanted.length));
    else if(name.split(' ').some(part=>part===wanted))best=Math.max(best,650);
    else if(name.includes(wanted))best=Math.max(best,500-Math.max(0,name.length-wanted.length));
  }
  return best;
}
function findBookMatches(q){return state.books.map((book,bi)=>({book,bi,score:bookMatchScore(book,q)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.bi-b.bi)}
function parseReference(raw){
  // Admite Libro 3, Libro 3:16, Libro 3 16, Libro 3,16 y rangos como Libro 3 16-18.
  const q=normalizeText(raw);
  const m=q.match(/^(.+?)\s+(\d+)(?:(?:\s*:\s*|\s+)(\d+)(?:\s*-\s*(\d+))?)?$/);
  if(!m)return null;
  const matches=findBookMatches(m[1]);
  if(!matches.length)return null;
  const {book:b,bi}=matches[0],c=+m[2],v=m[3]?+m[3]:null,endv=m[4]?+m[4]:v;
  if(c<1||v!==null&&v<1||endv!==null&&endv<v)return null;
  return{bi,c,v,endv,ref:v?`${displayBook(b)} ${c}:${v}${endv>v?'-'+endv:''}`:`${displayBook(b)} ${c}`};
}
async function openSearchResult(r){state.bookIndex=r.bi;state.chapter=r.c||1;$('#searchDialog').close();showReader();await loadChapter();if(r.v)setTimeout(()=>{for(let n=r.v;n<=Math.min(r.endv||r.v,state.verses.length);n++)state.selected.add(n);updateSelection();$(`.verse[data-v="${r.v}"]`)?.scrollIntoView({block:'center'})},100)}
async function runSearch(){
  const raw=$('#searchInput').value.trim();if(raw.length<2)return toast('Escribe al menos 2 caracteres');
  const box=$('#searchResults'),direct=parseReference(raw);
  if(direct){
    const b=state.books[direct.bi];
    if(direct.c>b.chapters){box.innerHTML=`<p>No existe ${escapeHtml(displayBook(b))} ${direct.c}.</p>`;return}
    const chapters=await getBookChapters(b),verses=chapters[direct.c-1]||[];
    if(direct.v&&direct.v>verses.length){box.innerHTML=`<p>No existe ${escapeHtml(displayBook(b))} ${direct.c}:${direct.v}.</p>`;return}
    if(direct.endv&&direct.endv>verses.length){box.innerHTML=`<p>No existe ${escapeHtml(displayBook(b))} ${direct.c}:${direct.endv}.</p>`;return}
    box.innerHTML=`<div class="search-result reference-result"><strong>${escapeHtml(direct.ref)}</strong><span>${direct.v?'Abrir este versículo':'Abrir este capítulo'}</span></div>`;
    box.querySelector('.search-result').onclick=()=>openSearchResult(direct);return
  }
  const q=normalizeText(raw),bookMatches=findBookMatches(raw);box.innerHTML='<p>Buscando en toda la Biblia…</p>';
  const bookResults=bookMatches.slice(0,8).map(x=>({type:'book',bi:x.bi,c:1,ref:displayBook(x.book),chapters:x.book.chapters,score:x.score}));
  let verseResults=[];
  for(let bi=0;bi<state.books.length&&verseResults.length<100;bi++){
    const b=state.books[bi],chapters=await getBookChapters(b);
    for(let ci=0;ci<chapters.length&&verseResults.length<100;ci++)for(let vi=0;vi<chapters[ci].length&&verseResults.length<100;vi++){
      const text=limpiarTextoBiblico(chapters[ci][vi]);if(normalizeText(text).includes(q))verseResults.push({type:'verse',bi,c:ci+1,v:vi+1,endv:vi+1,t:text,ref:`${displayBook(b)} ${ci+1}:${vi+1}`});
    }
  }
  const results=[...bookResults,...verseResults];
  box.innerHTML=results.length?results.map((r,i)=>r.type==='book'?`<div class="search-result book-search-result" data-i="${i}"><strong>${escapeHtml(r.ref)}</strong><span>Abrir libro · ${r.chapters} capítulos</span></div>`:`<div class="search-result" data-i="${i}"><strong>${r.ref}</strong>${formatBibleText(r.t)}</div>`).join(''):'<p>Sin resultados.</p>';
  $$('.search-result').forEach(el=>el.onclick=()=>openSearchResult(results[+el.dataset.i]));
}
$('#settingsBtn').onclick=()=>$('#settingsDialog').showModal();const fontSizeInput=$('#fontSize'),fontSizeValue=$('#fontSizeValue');function applyFontSize(value){const min=Number(fontSizeInput.min),max=Number(fontSizeInput.max),size=Math.min(max,Math.max(min,Number(value)||24));fontSizeInput.value=size;fontSizeValue.textContent=size;document.documentElement.style.setProperty('--font-size',size+'px');localStorage.setItem('fontSize',size)}fontSizeInput.oninput=e=>applyFontSize(e.target.value);$('#fontSizeMinus').onclick=()=>applyFontSize(Number(fontSizeInput.value)-1);$('#fontSizePlus').onclick=()=>applyFontSize(Number(fontSizeInput.value)+1);applyFontSize(localStorage.getItem('fontSize')||fontSizeInput.value)
let wakeLock=null;$('#keepAwake').onchange=async e=>{try{if(e.target.checked&&'wakeLock'in navigator)wakeLock=await navigator.wakeLock.request('screen');else await wakeLock?.release()}catch{e.target.checked=false;toast('No disponible en este dispositivo')}};
$('#showFavorites').onclick=()=>showCollection('Versículos guardados',Object.entries(state.favorites).map(([k,v])=>({k,ref:v.ref,text:v.text})));$('#showExplanations').onclick=()=>showCollection('Mis explicaciones',Object.entries(state.explanations).sort((a,b)=>b[1].updated-a[1].updated).map(([k,v])=>({k,ref:v.ref,text:v.text,exp:true})));function showCollection(title,items){$('#settingsDialog').close();resetSearchDialogLayout();$('#searchDialog h2').textContent=title;$('#searchDialog .search-row').style.display='none';$('#searchResults').innerHTML=items.length?items.map((x,i)=>`<div class="list-card" data-i="${i}"><strong>${x.ref}</strong><p>${formatBibleText(x.text)}</p></div>`).join(''):'<p>Todavía no hay elementos.</p>';$('#searchDialog').showModal();$$('.list-card').forEach(el=>el.onclick=()=>{const x=items[+el.dataset.i];if(x.exp){$('#searchDialog').close();openViewExplanation(x.k)}else navigateKey(x.k)})}
async function navigateKey(k){const [bookKey,c,v]=k.split(':');state.bookIndex=state.books.findIndex(b=>b.key===bookKey);state.chapter=+c;$('#searchDialog').close();showReader();await loadChapter();setTimeout(()=>{state.selected.add(+v);updateSelection();$(`.verse[data-v="${v}"]`)?.scrollIntoView({block:'center'})},80)}
function currentVisibleVerse(){const verses=$$('.verse');let best=1,bestDistance=Infinity;for(const el of verses){const r=el.getBoundingClientRect();const d=Math.abs(r.top-100);if(r.bottom>72&&d<bestDistance){bestDistance=d;best=+el.dataset.v}}return best}
function addReadingPoint(showToast=true){
  const b=state.books[state.bookIndex];
  const selected=[...state.selected].sort((a,b)=>a-b);
  const v=selected[0]||currentVisibleVerse();
  const existing=state.readingPoints.find(p=>p.bookKey===b.key&&Number(p.chapter)===Number(state.chapter)&&Number(p.verse)===Number(v));
  if(existing){
    if(showToast)toast(`Esta marca ya existe: ${existing.ref}`);
    return existing;
  }
  const now=Date.now();
  const point={id:`${now}-${Math.random().toString(36).slice(2)}`,bookKey:b.key,chapter:Number(state.chapter),verse:Number(v),ref:`${displayBook(b)} ${state.chapter}:${v}`,updated:now};
  state.readingPoints.unshift(point);
  save();
  renderSavedDialog();
  if(showToast)toast(`Marca puesta: ${point.ref}`);
  return point;
}
function syncFavoritesFromStorage(){
  try{
    const stored=JSON.parse(localStorage.getItem('favorites')||'{}');
    if(stored&&typeof stored==='object'&&!Array.isArray(stored))state.favorites=stored;
  }catch(error){console.warn('No se pudieron releer los versículos guardados',error)}
}
function latestSavedPoint(){
  return state.activeReadingPoint&&state.activeReadingPoint.bookKey?state.activeReadingPoint:null;
}
function rememberedReadingPoint(){
  return latestSavedPoint()||(state.lastReadingPoint&&state.lastReadingPoint.bookKey?state.lastReadingPoint:null);
}
function updateReadingPointUI(){
  const latest=latestSavedPoint();
  const continueBtn=$('#continueReading');
  if(continueBtn){continueBtn.textContent=latest?`Ir a: ${latest.ref}`:'Todavía no hay un punto de libro guardado';continueBtn.disabled=!latest}
  const homeRef=$('#homeContinueRef'),homeContinue=$('#homeContinue');
  if(homeRef)homeRef.textContent=latest?latest.ref:'Todavía no hay un punto de libro guardado';
  if(homeContinue)homeContinue.disabled=!latest;
  const readingPointBtn=document.querySelector('.action[data-action="reading-point"]');
  if(readingPointBtn){
    readingPointBtn.disabled=!latest;
    readingPointBtn.setAttribute('aria-disabled',latest?'false':'true');
    readingPointBtn.title=latest?`Ir a ${latest.ref}`:'Todavía no hay un punto de libro guardado';
  }
}
async function goToReadingPoint(point=latestSavedPoint()){
  if(!point)return toast('Todavía no hay un punto de libro guardado');
  const bi=state.books.findIndex(b=>b.key===point.bookKey);if(bi<0)return;
  state.bookIndex=bi;state.chapter=point.chapter;
  $('#settingsDialog')?.close();$('#savedDialog')?.close();
  showReader();await loadChapter();
  setTimeout(()=>{const el=$(`.verse[data-v="${point.verse}"]`);el?.scrollIntoView({block:'center'});document.querySelectorAll('.verse.reading-target').forEach(x=>x.classList.remove('reading-target'));el?.classList.add('reading-target')},100)
}
function renderSavedDialog(){
  updateReadingPointUI();
  const active=latestSavedPoint();
  const remembered=rememberedReadingPoint();
  const marksBox=$('#readingMarksList');
  if(marksBox){
    if(remembered){
      const note=active?'Este es tu punto de libro actual.':'Ahora no tienes punto de libro. Este fue el último que guardaste.';
      marksBox.innerHTML=`<button class="reading-mark-card reading-mark-go" type="button"><strong>${escapeHtml(remembered.ref)}</strong><span>${note}</span></button>`;
      marksBox.querySelector('.reading-mark-go').onclick=()=>goToReadingPoint(remembered);
    }else marksBox.innerHTML='<p class="empty-saved">Todavía no has guardado ningún punto de libro.</p>';
  }
  const items=Object.entries(state.favorites).map(([k,v])=>({k,ref:v.ref,text:v.text}));
  const box=$('#savedVersesList');
  box.innerHTML=items.length?items.map((x,i)=>`<button class="saved-verse-card" data-i="${i}"><strong>${escapeHtml(x.ref)}</strong><span>${formatBibleText(x.text)}</span></button>`).join(''):'<p class="empty-saved">Todavía no hay versículos guardados.</p>';
  $$('.saved-verse-card').forEach(el=>el.onclick=()=>{const x=items[+el.dataset.i];$('#savedDialog').close();navigateKey(x.k)});
}


$('#readingMarksList').addEventListener('click',ev=>{
  const card=ev.target.closest('.reading-mark-card');
  if(!card)return;
  ev.preventDefault();
  ev.stopPropagation();
  const id=card.dataset.markId;
  const point=state.readingPoints.find(p=>String(p.id)===String(id));
  if(ev.target.closest('.reading-mark-delete')){
    state.readingPoints=state.readingPoints.filter(p=>String(p.id)!==String(id));
    save();
    renderSavedDialog();
    toast('Marca quitada');
    return;
  }
  if(ev.target.closest('.reading-mark-go')&&point)goToReadingPoint(point);
});


const HEADER_SCHEDULE=[
  {from:6,to:9,file:'cabecera-1.png',bar:'barra-amanecer.png',label:'amanecer'},
  {from:9,to:17,file:'cabecera-2.png',bar:'barra-dia.png',label:'día'},
  {from:17,to:20,file:'cabecera-3.png',bar:'barra-atardecer.png',label:'atardecer'},
  {from:20,to:30,file:'cabecera-4.png',bar:'barra-noche.png',label:'noche'}
];
function headerForHour(hour){
  if(hour>=6&&hour<9)return HEADER_SCHEDULE[0];
  if(hour>=9&&hour<17)return HEADER_SCHEDULE[1];
  if(hour>=17&&hour<20)return HEADER_SCHEDULE[2];
  return HEADER_SCHEDULE[3];
}
function applyTimeHeader(){
  const selected=headerForHour(new Date().getHours());
  const image=$('#timeHeaderImage');
  if(image){
    const next=`${selected.file}?v=${APP_VERSION}`;
    if(image.getAttribute('src')!==next)image.setAttribute('src',next);
    image.dataset.period=selected.label;
  }
  const chapterNav=$('.chapter-nav');
  if(chapterNav){
    const bar=`url("${selected.bar}?v=${APP_VERSION}")`;
    if(chapterNav.style.getPropertyValue('--chapter-nav-image')!==bar)chapterNav.style.setProperty('--chapter-nav-image',bar);
    chapterNav.dataset.period=selected.label;
  }
}
function formatSavedDate(value){
  const date=new Date(Number(value));
  if(!Number.isFinite(date.getTime()))return 'Hora no registrada';
  return new Intl.DateTimeFormat('es-ES',{weekday:'short',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(date);
}
function getSavedStats(){
  const entries=Object.entries(state.favorites||{}).map(([k,v])=>({k,...v,savedAt:Number(v?.savedAt)||0})).sort((a,b)=>b.savedAt-a.savedAt);
  const now=new Date(),todayStart=new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime();
  const mondayOffset=(now.getDay()+6)%7,weekStart=todayStart-mondayOffset*86400000,monthStart=new Date(now.getFullYear(),now.getMonth(),1).getTime();
  const dayKey=t=>{const d=new Date(t);return Number.isFinite(d.getTime())?`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`:''};
  const dated=entries.filter(x=>x.savedAt>0),today=dated.filter(x=>x.savedAt>=todayStart).length;
  const week=dated.filter(x=>x.savedAt>=weekStart).length,month=dated.filter(x=>x.savedAt>=monthStart).length;
  const byBook={},byHour={};
  dated.forEach(x=>{const ref=String(x.ref||'').trim();const book=ref.replace(/\s+\d+:\d+(?:[-–]\d+)?$/,'')||'Sin libro';byBook[book]=(byBook[book]||0)+1;const hr=new Date(x.savedAt).getHours();byHour[hr]=(byHour[hr]||0)+1});
  const topKey=obj=>Object.keys(obj).sort((a,b)=>obj[b]-obj[a])[0]||'';
  return{entries,dated,today,week,month,days:new Set(dated.map(x=>dayKey(x.savedAt))).size,last:dated[0]||entries[0]||null,topBook:topKey(byBook),topHour:topKey(byHour)};
}
function updateHomeStatsSummary(){
  const el=$('#homeStatsSummary');if(!el)return;const st=getSavedStats();
  el.textContent=`${st.entries.length} guardado${st.entries.length===1?'':'s'} · ${st.today} hoy`;
}
function renderStats(){
  const st=getSavedStats(),now=new Date(),point=latestSavedPoint();
  $('#statsNow').textContent=`Hoy es ${new Intl.DateTimeFormat('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now)} · ${new Intl.DateTimeFormat('es-ES',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(now)}`;
  $('#statsSavedTotal').textContent=st.entries.length.toLocaleString('es-ES');
  $('#statsReadingPointRef').textContent=point?.ref||'Sin guardar';
  $('#statsExplanations').textContent=Object.keys(state.explanations||{}).length.toLocaleString('es-ES');
  updateDictionaryCounters();
  $('#statsHighlights').textContent=Object.keys(state.highlights||{}).length.toLocaleString('es-ES');
  $('#statsTitlesTotal').textContent=countTitleLayer(BUILTIN_TITLES_EMBEDDED||{}).toLocaleString('es-ES');
  updateHomeStatsSummary();
}
let statsClockTimer=0;
function stopStatsClock(){
  if(statsClockTimer){clearInterval(statsClockTimer);statsClockTimer=0}
}
function startStatsClock(){
  stopStatsClock();
  renderStats();
  statsClockTimer=setInterval(()=>{
    if(document.hidden||!$('#statsDialog')?.open){stopStatsClock();return}
    renderStats();
  },1000);
}
function openStats(){
  $('#statsDialog').showModal();
  startStatsClock();
}

const statsListState={kind:'saved',page:1,pageSize:20,query:'',sort:'recent',items:[]};
const STATS_LIST_LABELS={saved:'Guardados',reading:'Puntos de libro',explanations:'Explicaciones',dictionary:'Diccionario',highlights:'Subrayados',titles:'Títulos integrados'};
function statsBookName(bookKey){const b=state.books.find(x=>x.key===bookKey);return b?displayBook(b):String(bookKey||'').replaceAll('_',' ')}
function statsKeyParts(k){const [bookKey,chapter,verse]=String(k||'').split(':');return{bookKey,chapter:Number(chapter)||1,verse:Number(verse)||1}}
function statsVerseText(k){const el=document.querySelector(`.verse[data-key="${CSS.escape(String(k))}"]`);return el?.textContent?.trim()||''}
function getStatsListItems(kind){
  if(kind==='saved')return Object.entries(state.favorites||{}).map(([key,x],i)=>({id:key,key,title:x.ref||key,text:x.text||'',date:Number(x.savedAt)||0,alpha:x.ref||key,index:i}));
  if(kind==='reading'){
    const all=[...(state.readingPoints||[])];
    if(state.activeReadingPoint?.bookKey&&!all.some(x=>String(x.id)===String(state.activeReadingPoint.id)))all.unshift(state.activeReadingPoint);
    if(state.lastReadingPoint?.bookKey&&!all.some(x=>String(x.id)===String(state.lastReadingPoint.id)))all.push(state.lastReadingPoint);
    return all.map((x,i)=>({id:String(x.id||i),point:x,title:x.ref||`${statsBookName(x.bookKey)} ${x.chapter}:${x.verse}`,text:x===state.activeReadingPoint?'Punto de libro actual':'Punto de libro guardado',date:Number(x.updated||x.savedAt)||0,alpha:x.ref||'',index:i}));
  }
  if(kind==='explanations')return Object.entries(state.explanations||{}).map(([key,x],i)=>({id:key,key,title:x.ref||key,text:x.text||'',date:Number(x.updated)||0,alpha:x.ref||key,index:i}));
  if(kind==='dictionary')return getDictionaryEntries().map((x,i)=>({id:x.id,title:x.termino||'Sin palabra',text:x.explicacion||'',tag:x.categoria||'Sin categoría',date:Number(x.updatedAt||x.createdAt)||0,alpha:x.termino||'',entry:x,index:i}));
  if(kind==='highlights')return Object.entries(state.highlights||{}).map(([key,color],i)=>{const p=statsKeyParts(key);const ref=`${statsBookName(p.bookKey)} ${p.chapter}:${p.verse}`;return{id:key,key,title:ref,text:state.favorites?.[key]?.text||statsVerseText(key)||'Abrir el versículo subrayado',tag:color,date:0,alpha:ref,index:i}});
  if(kind==='titles'){
    const out=[];Object.entries(BUILTIN_TITLES_EMBEDDED||{}).forEach(([bookKey,chapters])=>Object.entries(chapters||{}).forEach(([chapter,arr])=>(arr||[]).forEach((x,i)=>out.push({id:`${bookKey}:${chapter}:${x.versiculo}:${i}`,key:`${bookKey}:${chapter}:${x.versiculo}`,title:`${statsBookName(bookKey)} ${chapter}:${x.versiculo}`,text:x.titulo||'',date:0,alpha:`${statsBookName(bookKey)} ${String(chapter).padStart(3,'0')} ${String(x.versiculo).padStart(3,'0')} ${x.titulo||''}`,index:out.length}))));return out;
  }
  return[];
}
function statsNormalize(v){return normalizeText(String(v||''))}
function renderStatsList(){
  const s=statsListState,q=statsNormalize(s.query);let items=getStatsListItems(s.kind);
  if(q)items=items.filter(x=>statsNormalize(`${x.title} ${x.text} ${x.tag||''}`).includes(q));
  items.sort((a,b)=>s.sort==='az'?String(a.alpha||a.title).localeCompare(String(b.alpha||b.title),'es',{numeric:true,sensitivity:'base'}):(Number(b.date)-Number(a.date)||Number(b.index)-Number(a.index)||String(a.alpha||a.title).localeCompare(String(b.alpha||b.title),'es',{numeric:true,sensitivity:'base'})));
  s.items=items;const pages=Math.max(1,Math.ceil(items.length/s.pageSize));s.page=Math.min(Math.max(1,s.page),pages);const start=(s.page-1)*s.pageSize,visible=items.slice(start,start+s.pageSize);
  $('#statsListSummary').textContent=`${items.length.toLocaleString('es-ES')} elemento${items.length===1?'':'s'} · ${s.sort==='az'?'orden alfabético':'más recientes primero'}`;
  $('#statsPageInfo').textContent=`Página ${s.page} de ${pages}`;$('#statsPrevPage').disabled=s.page<=1;$('#statsNextPage').disabled=s.page>=pages;
  $('#statsListResults').innerHTML=visible.length?visible.map((x,i)=>`<button type="button" class="stats-list-item" data-list-index="${start+i}"><strong>${escapeHtml(x.title)}</strong>${x.date?`<time>${escapeHtml(formatSavedDate(x.date))}</time>`:(x.tag?`<span class="stats-item-tag">${escapeHtml(x.tag)}</span>`:'')}<p>${escapeHtml(x.text||'Abrir')}</p></button>`).join(''):'<div class="stats-empty">No hay elementos que mostrar.</div>';
}
function openStatsList(kind){
  statsListState.kind=kind;statsListState.page=1;statsListState.query='';statsListState.sort=kind==='dictionary'||kind==='titles'?'az':'recent';
  $('#statsListTitle').textContent=STATS_LIST_LABELS[kind]||'Listado';$('#statsListSearch').value='';$('#statsListSort').value=statsListState.sort;
  $('#statsDialog').close();renderStatsList();$('#statsListDialog').showModal();
}
async function activateStatsListItem(item){
  if(!item)return;const kind=statsListState.kind;$('#statsListDialog').close();
  if(kind==='reading')return goToReadingPoint(item.point);
  if(kind==='dictionary')return openDictionaryEditor(item.id);
  if(kind==='explanations')return openViewExplanation(item.key);
  if(kind==='saved'||kind==='highlights'||kind==='titles')return navigateKey(item.key);
}
$('#statsDialog')?.addEventListener('click',e=>{const tile=e.target.closest('[data-stats-list]');if(tile)openStatsList(tile.dataset.statsList)});
$('#closeStatsList')?.addEventListener('click',()=>$('#statsListDialog').close());
$('#statsListSearch')?.addEventListener('input',e=>{statsListState.query=e.target.value;statsListState.page=1;renderStatsList()});
$('#statsListSort')?.addEventListener('change',e=>{statsListState.sort=e.target.value;statsListState.page=1;renderStatsList()});
$('#statsPrevPage')?.addEventListener('click',()=>{statsListState.page--;renderStatsList();$('#statsListResults').scrollTop=0});
$('#statsNextPage')?.addEventListener('click',()=>{statsListState.page++;renderStatsList();$('#statsListResults').scrollTop=0});
$('#statsListResults')?.addEventListener('click',e=>{const row=e.target.closest('[data-list-index]');if(row)activateStatsListItem(statsListState.items[Number(row.dataset.listIndex)])});
// La cabecera depende de la hora, por lo que no necesita recalcularse cada segundo.
let timeHeaderTimer=0;
function scheduleTimeHeaderRefresh(){
  clearTimeout(timeHeaderTimer);
  applyTimeHeader();
  const now=new Date();
  const delay=(60-now.getSeconds())*1000-now.getMilliseconds()+50;
  timeHeaderTimer=setTimeout(scheduleTimeHeaderRefresh,Math.max(1000,delay));
}
scheduleTimeHeaderRefresh();
$('#statsDialog')?.addEventListener('close',stopStatsClock);


const DAILY_VERSE_EPOCH=Date.UTC(2026,0,1);
let currentDailyVerse=null;
let dailyVersePool=null;
function dailyDateKey(date=new Date()){
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function dailyDayNumber(date=new Date()){
  const today=Date.UTC(date.getFullYear(),date.getMonth(),date.getDate());
  return Math.floor((today-DAILY_VERSE_EPOCH)/86400000);
}
async function loadDailyVersePool(){
  if(dailyVersePool)return dailyVersePool;
  const response=await fetch(freshUrl('versiculos-del-dia.json'));
  if(!response.ok)throw new Error('No se pudo cargar la selección del Versículo del día');
  const data=await response.json();
  dailyVersePool=Array.isArray(data?.verses)?data.verses:[];
  if(!dailyVersePool.length)throw new Error('La selección del Versículo del día está vacía');
  return dailyVersePool;
}
function chooseIntelligentDailyVerse(pool,date=new Date()){
  const day=dailyDayNumber(date);
  const categories=[...new Set(pool.map(v=>v.category).filter(Boolean))];
  const categoryIndex=((day%categories.length)+categories.length)%categories.length;
  const category=categories[categoryIndex];
  const candidates=pool.filter(v=>v.category===category);
  const cycle=Math.floor(day/categories.length);
  const step=37;
  const itemIndex=((cycle*step+categoryIndex*11)%candidates.length+candidates.length)%candidates.length;
  return candidates[itemIndex];
}
async function getDailyVerse(date=new Date()){
  const pool=await loadDailyVersePool();
  const chosen=chooseIntelligentDailyVerse(pool,date);
  const bookIndex=state.books.findIndex(b=>b.key===chosen.bookKey);
  return{
    ...chosen,
    key:`${chosen.bookKey}:${chosen.chapter}:${chosen.verse}`,
    bookIndex,
    dateKey:dailyDateKey(date),
    sequence:Math.max(1,dailyDayNumber(date)+1)
  };
}
function dailyVersePreview(text,maxLength=62){
  const clean=String(text||'').replace(/\s+/g,' ').trim();
  if(clean.length<=maxLength)return clean;
  const cut=clean.slice(0,maxLength+1);
  const lastSpace=cut.lastIndexOf(' ');
  return `${cut.slice(0,lastSpace>35?lastSpace:maxLength).replace(/[\s,;:.!?-]+$/,'')}…`;
}
function cacheDailyVerse(v){
  try{localStorage.setItem('dailyVerseHomeCache',JSON.stringify(v))}catch(_){}
}
function restoreDailyVerseHomeCache(){
  try{
    const cached=JSON.parse(localStorage.getItem('dailyVerseHomeCache')||'null');
    if(cached?.dateKey===dailyDateKey()&&cached?.ref&&cached?.text){paintDailyVerse(cached);return true}
  }catch(_){}
  return false;
}
function updateDailyVerseReminder(v=currentDailyVerse){
  const card=$('#homeDailyVerse');
  if(!card)return;
  const previewPending=localStorage.getItem('dailyVerseReminderPreviewPending')===APP_VERSION;
  const unseen=Boolean(v?.dateKey)&&(localStorage.getItem('dailyVerseLastSeen')!==v.dateKey||previewPending);
  card.classList.toggle('daily-verse-unseen',unseen);
  card.setAttribute('aria-label',unseen?'Versículo del día, nuevo y pendiente de leer':'Versículo del día');
}
async function refreshDailyVerseReminder(){
  try{
    const today=dailyDateKey();
    if(currentDailyVerse?.dateKey!==today)await ensureDailyVerse();
    updateDailyVerseReminder();
  }catch(_){ }
}
function paintDailyVerse(v){
  currentDailyVerse=v;
  const homeRef=$('#homeDailyVerseRef');if(homeRef)homeRef.textContent=v.ref;
  const homePreview=$('#homeDailyVersePreview');if(homePreview)homePreview.textContent=`“${dailyVersePreview(v.text)}”`;
  cacheDailyVerse(v);
  updateDailyVerseReminder(v);
  $('#dailyVerseDate').textContent=new Intl.DateTimeFormat('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date());
  $('#dailyVerseCategory').textContent=v.category;
  const number=$('#dailyVerseNumber');if(number)number.textContent=`Versículo del día #${String(v.id||v.sequence).padStart(4,'0')}`;
  const reflection=$('#dailyVerseReflection');if(reflection)reflection.textContent=v.reflection||'Una palabra para meditar y llevar a la vida durante este día.';
  $('#dailyVerseText').textContent=v.text;
  $('#dailyVerseReference').textContent=v.ref;
  const saved=Boolean(state.favorites?.[v.key]);
  $('#saveDailyVerse').textContent=saved?'Guardado':'Guardar';
}
async function ensureDailyVerse(){
  const key=dailyDateKey();
  if(currentDailyVerse?.dateKey===key)return currentDailyVerse;
  const v=await getDailyVerse();paintDailyVerse(v);return v;
}
async function openDailyVerse(){
  const v=await ensureDailyVerse();paintDailyVerse(v);$('#dailyVerseDialog').showModal();localStorage.setItem('dailyVerseLastSeen',v.dateKey);localStorage.removeItem('dailyVerseReminderPreviewPending');updateDailyVerseReminder(v);
}
async function copyDailyVerse(){
  const v=await ensureDailyVerse();
  await navigator.clipboard.writeText(`${v.ref} RVR1960\n[${v.verse}] ${v.text}`);
  toast('Versículo copiado');
}
async function saveDailyVerse(){
  const v=await ensureDailyVerse();
  if(state.favorites[v.key]){
    delete state.favorites[v.key];
    const activeKey=state.activeReadingPoint?`${state.activeReadingPoint.bookKey}:${state.activeReadingPoint.chapter}:${state.activeReadingPoint.verse}`:'';
    if(activeKey===v.key)state.activeReadingPoint=null;
    toast('Quitado de guardados');
  }else{
    const savedAt=Date.now();state.favorites[v.key]={ref:v.ref,text:v.text,savedAt};
    const [bookKey,chapter,verse]=v.key.split(':');const point={bookKey,chapter:Number(chapter),verse:Number(verse),ref:v.ref,savedAt};
    state.activeReadingPoint=point;state.lastReadingPoint=point;toast('Versículo guardado');
  }
  save();paintDailyVerse(v);updateReadingPointUI();
}
async function openDailyChapter(){
  const v=await ensureDailyVerse();$('#dailyVerseDialog').close();state.bookIndex=v.bookIndex;state.chapter=v.chapter;showReader();await loadChapter();
  setTimeout(()=>{$(`.verse[data-v="${v.verse}"]`)?.scrollIntoView({block:'center',behavior:'smooth'})},100);
}
function dailyNotificationsEnabled(){return localStorage.getItem('dailyVerseNotifications')==='1'}
function syncDailyNotificationToggle(){
  const toggle=$('#dailyVerseNotifications');
  if(!toggle)return;
  // La preferencia pertenece al usuario y no debe perderse al cerrar o reabrir la app.
  toggle.checked=dailyNotificationsEnabled();
}
function enableDailyReminderPreviewOnce(){
  const previewKey='dailyVerseReminderPreviewVersion';
  if(localStorage.getItem(previewKey)===APP_VERSION)return;
  // Mantiene el marco visible en esta actualización hasta que el usuario pulse expresamente la tarjeta.
  localStorage.setItem('dailyVerseReminderPreviewPending',APP_VERSION);
  localStorage.setItem(previewKey,APP_VERSION);
}
async function maybeNotifyDailyVerse(v){
  if(!dailyNotificationsEnabled()||!('Notification'in window)||Notification.permission!=='granted')return;
  if(localStorage.getItem('dailyVerseLastNotification')===v.dateKey)return;
  try{
    const reg=await navigator.serviceWorker?.ready;
    if(reg)await reg.showNotification(`Versículo del día · ${v.ref}`,{body:v.text,icon:'icon-192.png',badge:'icon-192.png',tag:'daily-verse',renotify:false,data:{url:'./?dailyVerse=1'}});
    else new Notification(`Versículo del día · ${v.ref}`,{body:v.text,icon:'icon-192.png',tag:'daily-verse'});
    localStorage.setItem('dailyVerseLastNotification',v.dateKey);
  }catch(error){console.warn('No se pudo mostrar la notificación',error)}
}
async function initializeDailyVerse(){
  restoreDailyVerseHomeCache();
  enableDailyReminderPreviewOnce();
  const v=await ensureDailyVerse();
  syncDailyNotificationToggle();
  await maybeNotifyDailyVerse(v);
  const forced=new URLSearchParams(location.search).get('dailyVerse')==='1';
  if(forced){const clean=new URL(location.href);clean.searchParams.delete('dailyVerse');history.replaceState(null,'',clean.pathname+clean.search+clean.hash)}
  updateDailyVerseReminder(v);
  if(forced&&localStorage.getItem('dailyVerseReminderPreviewPending')!==APP_VERSION)setTimeout(()=>openDailyVerse(),450);
}
$('#homeDailyVerse')?.addEventListener('click',openDailyVerse);
$('#copyDailyVerse')?.addEventListener('click',copyDailyVerse);
$('#saveDailyVerse')?.addEventListener('click',saveDailyVerse);
$('#openDailyChapter')?.addEventListener('click',openDailyChapter);
setInterval(refreshDailyVerseReminder,60000);
$('#dailyVerseNotifications')?.addEventListener('change',async e=>{
  if(!e.target.checked){localStorage.setItem('dailyVerseNotifications','0');toast('Notificación desactivada');return}
  if(!('Notification'in window)){e.target.checked=false;toast('Las notificaciones no están disponibles');return}
  const permission=Notification.permission==='granted'?'granted':await Notification.requestPermission();
  if(permission!=='granted'){e.target.checked=false;localStorage.setItem('dailyVerseNotifications','0');toast('Permiso de notificaciones no concedido');return}
  localStorage.setItem('dailyVerseNotifications','1');toast('Notificación diaria activada');await maybeNotifyDailyVerse(await ensureDailyVerse());
});
// Mantiene el interruptor sincronizado al volver a la app, abrir Ajustes o restaurar la página.
window.addEventListener('pageshow',syncDailyNotificationToggle);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncDailyNotificationToggle()});
$('#settingsBtn')?.addEventListener('click',()=>requestAnimationFrame(syncDailyNotificationToggle));

function wireHomeActions(){
  $('#homeContinue')?.addEventListener('click',()=>goToReadingPoint());
  $('#homeEnter')?.addEventListener('click',async()=>{
  showReader();
  await loadChapter();
  setTimeout(showBiblicalFestivityNoticeV3111,350);
});
  $('#homeBooks')?.addEventListener('click',()=>{prepareBooksDrawer();openBooksDrawer()});
  $('#homeSearch')?.addEventListener('click',openSearchDialog);
  $('#homeSaved')?.addEventListener('click',()=>{renderSavedDialog();$('#savedDialog').showModal()});
}
wireHomeActions();
$('#themeToggleBtn')?.addEventListener('click',toggleTheme);
$('#addReadingPoint')?.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();toast('Guarda un versículo para usarlo como punto de libro')});
$('#continueReading').onclick=()=>goToReadingPoint();
$('#clearReadingPoint')?.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();toast('El punto de libro cambia al guardar otro versículo')});

function fixDoubleShiftedImportedTitles(){
  if(localStorage.getItem('titlesDoubleShiftFixedV126')==='1')return;
  // La V1.25 desplazó una segunda vez los títulos ya instalados.
  // Los devolvemos exactamente un capítulo, sin tocar los títulos manuales.
  if(localStorage.getItem('titlesChapterOffsetV125')==='1'){
    const corrected={};
    for(const [bookKey,chapters] of Object.entries(state.importedTitles||{})){
      for(const [chapter,items] of Object.entries(chapters||{})){
        const target=Number(chapter)-1;
        if(target<1)continue;
        corrected[bookKey]=corrected[bookKey]||{};
        corrected[bookKey][String(target)]=[...(corrected[bookKey][String(target)]||[]),...(items||[])];
      }
    }
    state.importedTitles=corrected;
    localStorage.setItem('importedTitles',JSON.stringify(corrected));
  }
  localStorage.setItem('titlesDoubleShiftFixedV126','1');
}

function mergeTitles(base,extra){
  const out=JSON.parse(JSON.stringify(base||{}));
  for(const [book,chapters] of Object.entries(extra||{})){
    out[book]=out[book]||{};
    for(const [chapter,items] of Object.entries(chapters||{})){
      const merged=[...(out[book][chapter]||[]),...(items||[])];
      const seen=new Set();
      out[book][chapter]=merged.filter(x=>{const id=`${x.versiculo}|${x.titulo}`;if(seen.has(id))return false;seen.add(id);return true}).sort((a,b)=>a.versiculo-b.versiculo);
    }
  }
  return out;
}



function normalizeDictionaryText(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim()}
function cleanDictionaryWord(value){return String(value||'').trim().replace(/^[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/g,'')}
function dictionaryWordForms(value){
  const original=cleanDictionaryWord(value), normalized=normalizeDictionaryText(original);
  if(!normalized)return new Set();
  const forms=new Set([normalized]);
  // Las variantes automáticas solo se aceptan cuando siguen siendo palabras completas
  // de al menos tres letras. Así «mies» nunca genera el falso positivo «mí».
  const addGenerated=form=>{if(form&&form.length>=3)forms.add(form)};
  const addWordForms=word=>{
    if(!word)return;
    forms.add(word);
    if(word.endsWith('ces')&&word.length>3)addGenerated(word.slice(0,-3)+'z');
    if(word.endsWith('es')&&word.length>3&&!word.endsWith('ies'))addGenerated(word.slice(0,-2));
    if(word.endsWith('s')&&!word.endsWith('es')&&word.length>2)addGenerated(word.slice(0,-1));
    if(word.endsWith('z'))addGenerated(word.slice(0,-1)+'ces');
    else if(/[aeiouáéó]$/.test(word))addGenerated(word+'s');
    else if(/[íú]$/.test(word)){addGenerated(word+'s');addGenerated(word+'es')}
    else addGenerated(word+'es');
  };
  addWordForms(normalized);
  const parts=normalized.split(/\s+/);
  if(parts.length>1){
    const last=parts.pop();
    const lastForms=new Set();
    const basePrefix=parts.join(' ')+' ';
    if(last.endsWith('ces')&&last.length>3)lastForms.add(last.slice(0,-3)+'z');
    if(last.endsWith('es')&&last.length>3&&!last.endsWith('ies')&&last.slice(0,-2).length>=3)lastForms.add(last.slice(0,-2));
    if(last.endsWith('s')&&!last.endsWith('es')&&last.length>3)lastForms.add(last.slice(0,-1));
    if(last.endsWith('z'))lastForms.add(last.slice(0,-1)+'ces');
    else if(/[aeiouáéó]$/.test(last))lastForms.add(last+'s');
    else if(/[íú]$/.test(last)){lastForms.add(last+'s');lastForms.add(last+'es')}
    else lastForms.add(last+'es');
    lastForms.forEach(x=>forms.add(basePrefix+x));
  }
  return forms;
}
function dictionaryMorphologyMatch(query,term){
  const q=normalizeDictionaryText(query), t=normalizeDictionaryText(term);
  if(!q||!t)return false;
  const qForms=dictionaryWordForms(query), tForms=dictionaryWordForms(term);
  return qForms.has(t)||tForms.has(q);
}
function syncDictionaryUserDataFromStorage(){
  // Relee las entradas personales antes de calcular contadores. Esto evita que
  // Estadísticas muestre únicamente el diccionario base después de instalar
  // una actualización o restaurar una copia de seguridad.
  try{
    const custom=JSON.parse(localStorage.getItem('dictionaryCustom')||'[]');
    const edits=JSON.parse(localStorage.getItem('dictionaryEdits')||'{}');
    const deleted=JSON.parse(localStorage.getItem('dictionaryDeleted')||'[]');
    if(Array.isArray(custom))state.dictionaryCustom=custom;
    if(edits&&typeof edits==='object'&&!Array.isArray(edits))state.dictionaryEdits=edits;
    if(Array.isArray(deleted))state.dictionaryDeleted=deleted;
  }catch(error){console.warn('No se pudo sincronizar el diccionario para el contador',error)}
}
function getDictionaryEntries({sync=false}={}){
  if(sync)syncDictionaryUserDataFromStorage();
  const deleted=new Set(state.dictionaryDeleted||[]), edits=state.dictionaryEdits||{};
  const base=(state.dictionaryBase||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,...(edits[x.id]||{}),builtin:true}));
  const custom=(state.dictionaryCustom||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,builtin:false}));
  return [...base,...custom].sort((a,b)=>String(a.termino).localeCompare(String(b.termino),'es',{sensitivity:'base'}));
}
function getDictionaryStats(){
  syncDictionaryUserDataFromStorage();
  const deleted=new Set(state.dictionaryDeleted||[]);
  const edits=state.dictionaryEdits||{};
  const original=(state.dictionaryBase||[])
    .filter(entry=>!deleted.has(entry.id))
    .map(entry=>({...entry,...(edits[entry.id]||{}),builtin:true}));
  const custom=(state.dictionaryCustom||[])
    .filter(entry=>!deleted.has(entry.id))
    .map(entry=>({...entry,builtin:false}));
  const entries=[...original,...custom];
  return{
    total:entries.length,
    original:original.length,
    custom:custom.length,
    capsules:entries.filter(entry=>entry.resaltar===true).length
  };
}
function updateDictionaryCounters(){
  const counts=getDictionaryStats();
  const formatted=counts.total.toLocaleString('es-ES');
  const stats=$('#statsDictionary');if(stats)stats.textContent=formatted;
  const original=$('#statsDictionaryOriginal');if(original)original.textContent=counts.original.toLocaleString('es-ES');
  const custom=$('#statsDictionaryCustom');if(custom)custom.textContent=counts.custom.toLocaleString('es-ES');
  const capsules=$('#statsDictionaryCapsules');if(capsules)capsules.textContent=counts.capsules.toLocaleString('es-ES');
  const settings=$('#openDictionarySettings');if(settings)settings.textContent=`Diccionario bíblico (${formatted})`;
  return counts.total;
}
function dictionarySearchScore(entry,query){
  const q=normalizeDictionaryText(query), term=normalizeDictionaryText(entry.termino), allText=normalizeDictionaryText(`${entry.termino} ${entry.explicacion} ${entry.categoria}`);
  if(term===q)return 0;
  if(dictionaryMorphologyMatch(query,entry.termino))return 1;
  if(term.startsWith(q))return 2;
  if(term.includes(q))return 3;
  if(allText.includes(q))return 4;
  return 99;
}
function renderDictionary(query=''){
  const q=normalizeDictionaryText(query), all=getDictionaryEntries({sync:true});
  const filtered=q
    ?all.map(x=>({entry:x,score:dictionarySearchScore(x,query)})).filter(x=>x.score<99).sort((a,b)=>a.score-b.score||String(a.entry.termino).localeCompare(String(b.entry.termino),'es',{sensitivity:'base'})).map(x=>x.entry)
    :all;
  const visible=q?filtered:filtered.slice(0,80);
  $('#dictionaryCount').textContent=q
    ?`${filtered.length.toLocaleString('es-ES')} coincidencia${filtered.length===1?'':'s'} de ${all.length.toLocaleString('es-ES')} entradas`
    :`${all.length.toLocaleString('es-ES')} entradas · escribe para filtrar`;
  $('#dictionaryResults').innerHTML=visible.length
    ?visible.map(x=>`<button class="dictionary-card" type="button" data-id="${escapeHtml(x.id)}"><strong>${escapeHtml(x.termino)}</strong><small>${escapeHtml(x.categoria||'Sin categoría')} · ${x.resaltar===true?'Cápsula verde':'Solo consulta'}</small><p class="dictionary-explanation" data-dictionary-explanation>${escapeHtml(x.explicacion)}</p></button>`).join('')+(q?'':'<p class="dictionary-live-help">Escribe en el buscador y las coincidencias aparecerán al instante.</p>')
    :`<div class="dictionary-empty"><p class="empty-saved">No se encontraron coincidencias para <strong>“${escapeHtml(cleanDictionaryWord(query))}”</strong>.</p><button id="addMissingDictionaryEntry" type="button" class="primary">Añadir palabra</button></div>`;
  const copyBtn=$('#copyDictionaryWord');if(copyBtn)copyBtn.disabled=!cleanDictionaryWord(query);
}
let dictionaryReadingPosition=null;
let dictionaryTransitionToEditor=false;
let dictionaryEditorReturnToList=false;
function captureDictionaryReadingPosition(){
  const scrollingElement=document.scrollingElement||document.documentElement;
  return {
    readerTop:reader?.scrollTop||0,
    pageLeft:scrollingElement?.scrollLeft||window.scrollX||0,
    pageTop:scrollingElement?.scrollTop||window.scrollY||0
  };
}
function restoreDictionaryReadingPosition(position=dictionaryReadingPosition){
  if(!position)return;
  if(reader)reader.scrollTop=position.readerTop;
  const scrollingElement=document.scrollingElement||document.documentElement;
  if(scrollingElement){
    scrollingElement.scrollLeft=position.pageLeft;
    scrollingElement.scrollTop=position.pageTop;
  }
}
function preserveDictionaryReadingPosition(){
  const position=dictionaryReadingPosition;
  restoreDictionaryReadingPosition(position);
  requestAnimationFrame(()=>{
    restoreDictionaryReadingPosition(position);
    requestAnimationFrame(()=>restoreDictionaryReadingPosition(position));
  });
  setTimeout(()=>restoreDictionaryReadingPosition(position),120);
}
function openDictionary(initialQuery=''){
  dictionaryReadingPosition=captureDictionaryReadingPosition();
  state.selected.clear();updateSelection();
  selectionBar?.classList.remove('open');
  actionsPanelToggle?.setAttribute('aria-expanded','false');
  const query=String(initialQuery||'').trim();
  const dialog=$('#dictionaryDialog');
  $('#dictionarySearch').value=query;
  renderDictionary(query);
  dialog.classList.add('dictionary-live-layout');
  dialog.showModal();
  preserveDictionaryReadingPosition();
  requestAnimationFrame(updateDictionaryDialogViewport);
  setTimeout(()=>{
    const input=$('#dictionarySearch');
    // Cuando el Diccionario se abre desde una palabra del capítulo, no forzamos
    // el foco ni la selección del campo: Chrome/Android puede cerrar el teclado,
    // recalcular el viewport y desplazar el <dialog> fuera de la pantalla.
    if(input&&!query){
      try{input.focus({preventScroll:true})}catch{input.focus()}
    }
    updateDictionaryDialogViewport();
    preserveDictionaryReadingPosition();
  },80);
}
function openDictionaryEditor(id='',prefill=''){
  const entry=getDictionaryEntries().find(x=>x.id===id);
  $('#dictionaryEntryId').value=entry?.id||'';
  $('#dictionaryTerm').value=entry?.termino||cleanDictionaryWord(prefill);
  $('#dictionaryCategory').value=entry?.categoria||'';
  $('#dictionaryExplanation').value=entry?.explicacion||'';
  // Las entradas existentes respetan su elección guardada; las nuevas nacen con cápsula activada.
  $('#dictionaryHighlightEnabled').checked=entry?entry.resaltar===true:true;
  $('#dictionaryEditTitle').textContent=entry?'Editar palabra':'Añadir palabra';
  $('#deleteDictionaryEntry').style.display=entry?'inline-block':'none';

  const listDialog=$('#dictionaryDialog');
  const editDialog=$('#dictionaryEditDialog');
  const showEditor=()=>{
    dictionaryTransitionToEditor=false;
    if(!editDialog.open)editDialog.showModal();
    requestAnimationFrame(()=>{
      const field=$('#dictionaryTerm');
      try{field?.focus({preventScroll:true})}catch{field?.focus()}
      preserveDictionaryReadingPosition();
    });
  };

  // Android/Chrome puede dejar únicamente el ::backdrop visible si se abre
  // un segundo <dialog modal> encima del Diccionario. Cerramos primero la
  // lista y abrimos el editor en el siguiente ciclo para que nunca haya dos
  // diálogos modales compitiendo en la capa superior.
  if(listDialog?.open){
    dictionaryEditorReturnToList=true;
    dictionaryTransitionToEditor=true;
    listDialog.close('open-editor');
    setTimeout(showEditor,0);
  }else{
    dictionaryEditorReturnToList=false;
    showEditor();
  }
}
$('#runDictionarySearch')?.addEventListener('click',()=>renderDictionary($('#dictionarySearch').value));
$('#dictionarySearch')?.addEventListener('input',e=>{renderDictionary(e.target.value);requestAnimationFrame(updateDictionaryDialogViewport)});
$('#dictionarySearch')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();renderDictionary(e.target.value)}});
$('#dictionaryResults')?.addEventListener('click',e=>{
  const card=e.target.closest('.dictionary-card');
  if(card){openDictionaryEditor(card.dataset.id);return}
  if(e.target.closest('#addMissingDictionaryEntry'))openDictionaryEditor('',cleanDictionaryWord($('#dictionarySearch').value));
});
bindKeyboardAwareDialog(DICTIONARY_DIALOG_LAYOUT);
$('#dictionaryDialog')?.addEventListener('close',event=>{
  preserveDictionaryReadingPosition();
  if(event.currentTarget?.returnValue==='open-editor'||dictionaryTransitionToEditor)return;
  setTimeout(()=>{restoreDictionaryReadingPosition();dictionaryReadingPosition=null},140);
});
$('#dictionaryEditDialog')?.addEventListener('close',()=>{
  preserveDictionaryReadingPosition();
  if(!dictionaryEditorReturnToList)return;
  dictionaryEditorReturnToList=false;
  const query=$('#dictionarySearch')?.value||'';
  requestAnimationFrame(()=>openDictionary(query));
});
$('#addDictionaryEntry')?.addEventListener('click',()=>openDictionaryEditor('',cleanDictionaryWord($('#dictionarySearch').value)));
$('#copyDictionaryWord')?.addEventListener('click',async()=>{
  const word=cleanDictionaryWord($('#dictionarySearch').value);
  if(!word){toast('Selecciona o escribe una palabra');return}
  const input=$('#dictionarySearch');
  // Cerramos el teclado antes de copiar y recalculamos el diálogo sin perder
  // la posición de lectura. Así el cambio del visualViewport no deja visible
  // únicamente el fondo oscuro.
  input?.blur();
  requestAnimationFrame(()=>{updateDictionaryDialogViewport();preserveDictionaryReadingPosition()});
  try{
    await navigator.clipboard.writeText(word);
    toast(`“${word}” copiada`);
  }catch(_){toast('No se pudo copiar la palabra')}
  setTimeout(()=>{updateDictionaryDialogViewport();preserveDictionaryReadingPosition()},120);
});
$('#openDictionarySettings')?.addEventListener('click',()=>{$('#settingsDialog').close();openDictionary()});
$('#saveDictionaryEntry')?.addEventListener('click',()=>{
  const id=$('#dictionaryEntryId').value, termino=$('#dictionaryTerm').value.trim(), categoria=$('#dictionaryCategory').value.trim(), explicacion=$('#dictionaryExplanation').value.trim(), resaltar=$('#dictionaryHighlightEnabled').checked;
  if(!termino||!explicacion){toast('Escribe la palabra y su explicación');return}
  if(id){
    const customIndex=(state.dictionaryCustom||[]).findIndex(x=>x.id===id);
    if(customIndex>=0)state.dictionaryCustom[customIndex]={...state.dictionaryCustom[customIndex],termino,categoria,explicacion,resaltar,updatedAt:Date.now()};
    else state.dictionaryEdits[id]={termino,categoria,explicacion,resaltar,updatedAt:Date.now()};
  }else{
    const newId=`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    state.dictionaryCustom.push({id:newId,termino,categoria,explicacion,resaltar,builtin:false,createdAt:Date.now(),updatedAt:Date.now()});
  }
  save();invalidateDictionaryHighlights();render();$('#dictionaryEditDialog').close();renderDictionary($('#dictionarySearch').value);toast(id?'Entrada actualizada':'Entrada añadida');
});
$('#deleteDictionaryEntry')?.addEventListener('click',()=>{
  const id=$('#dictionaryEntryId').value;if(!id||!confirm('¿Eliminar esta entrada del diccionario?'))return;
  const customIndex=(state.dictionaryCustom||[]).findIndex(x=>x.id===id);
  if(customIndex>=0)state.dictionaryCustom.splice(customIndex,1);else{if(!state.dictionaryDeleted.includes(id))state.dictionaryDeleted.push(id);delete state.dictionaryEdits[id]}
  save();invalidateDictionaryHighlights();render();$('#dictionaryEditDialog').close();renderDictionary($('#dictionarySearch').value);toast('Entrada eliminada');
});

const BACKUP_KEYS=[
  // Lectura y estudio
  'highlights','favorites','explanations','last','readingPoints','readingPoint','activeReadingPoint','lastReadingPoint',
  // Progreso, capítulos terminados, fechas y número de lecturas
  CHAPTER_READING_PROGRESS_KEY_V316,
  // Diccionario completo del usuario
  'dictionaryCustom','dictionaryEdits','dictionaryDeleted',
  // Módulos de estudio y sus papeleras
  'biblia_personajes_crud_v16433','biblia_parabolas_crud_v16433','biblia_guias_crud_v16435',
  'biblia_profecias_crud_v270','biblia_lugares_crud_v283','biblia_festividades_v310',
  // Títulos, auditorías y ajustes
  'importedTitles','fontSize','readerTheme','lastLocalBibleAudit','verifiedTitleLayerAudit',
  'titlesChapterOffsetV125','titlesDoubleShiftFixedV126',
  // Versículo del día y preferencias relacionadas
  'dailyVerseHomeCache','dailyVerseLastSeen','dailyVerseNotifications',
  'dailyVerseLastNotification','dailyVerseReminderPreviewPending'
];

const BACKUP_STORAGE_PREFIXES=[
  'biblia_',
  'dictionary',
  'dailyVerse',
  'titles',
  'verifiedTitle',
  'lastLocalBible'
];

function isBackupStorageKey(key){
  return BACKUP_KEYS.includes(key) ||
    BACKUP_STORAGE_PREFIXES.some(prefix=>String(key).startsWith(prefix));
}

function collectCompleteBackupStorage(){
  const data={};

  // Claves conocidas y obligatorias.
  for(const key of BACKUP_KEYS){
    const value=localStorage.getItem(key);
    if(value!==null)data[key]=value;
  }

  // Cualquier módulo presente o futuro de la aplicación.
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(!key||!isBackupStorageKey(key))continue;
    const value=localStorage.getItem(key);
    if(value!==null)data[key]=value;
  }

  return data;
}

function parseBackupStorageValue(key,fallback){
  try{
    const raw=localStorage.getItem(key);
    return raw===null?fallback:JSON.parse(raw);
  }catch(_){
    return fallback;
  }
}

function moduleBackupSummary(key,collectionName){
  const value=parseBackupStorageValue(key,null);
  return{
    total:Array.isArray(value?.[collectionName])?value[collectionName].length:0,
    custom:Array.isArray(value?.custom)?value.custom.length:0,
    edited:value?.edits&&typeof value.edits==='object'?Object.keys(value.edits).length:0,
    deleted:Array.isArray(value?.deleted)?value.deleted.length:0,
    trash:Array.isArray(value?.trash)?value.trash.length:0
  };
}

function buildCompleteBackup(){
  // Fuerza el guardado del estado principal y del progreso antes de recopilar la copia.
  save();
  saveChapterReadingProgressV316();

  const data=collectCompleteBackupStorage();
  const characters=parseBackupStorageValue('biblia_personajes_crud_v16433',null);
  const parables=parseBackupStorageValue('biblia_parabolas_crud_v16433',null);
  const guides=parseBackupStorageValue('biblia_guias_crud_v16435',null);
  const prophecies=moduleBackupSummary('biblia_profecias_crud_v270','prophecies');
  const places=moduleBackupSummary('biblia_lugares_crud_v283','places');
  const readingProgress=parseBackupStorageValue(CHAPTER_READING_PROGRESS_KEY_V316,{});
  const readingProgressEntries=readingProgress&&typeof readingProgress==='object'?Object.values(readingProgress):[];
  const readingCompleted=readingProgressEntries.filter(item=>item&&item.completed).length;
  const readingInProgress=readingProgressEntries.filter(item=>item&&!item.completed&&(Number(item.read)||0)>0).length;
  const readingTotalCompletions=readingProgressEntries.reduce((sum,item)=>sum+Math.max(0,Number(item?.readCount)||(item?.completed?1:0)),0);
  const fullBibleReadings=Math.max(0,Number(localStorage.getItem('biblia_full_bible_readings_v3119'))||0);

  return{
    app:'Mi Biblia de Estudio',
    schema:3,
    appVersion:APP_VERSION,
    createdAt:new Date().toISOString(),
    backupType:'complete-local-data',
    summary:{
      storageGroups:Object.keys(data).length,
      savedVerses:Object.keys(state.favorites||{}).length,
      highlights:Object.keys(state.highlights||{}).length,
      explanations:Object.keys(state.explanations||{}).length,
      readingPoints:(state.readingPoints||[]).length,
      readingChaptersTracked:readingProgressEntries.length,
      readingChaptersInProgress:readingInProgress,
      readingChaptersCompleted:readingCompleted,
      readingTotalCompletions,
      fullBibleReadings,
      titles:countTitleLayer(state.importedTitles||{}),
      dictionary:getDictionaryEntries().length,
      dictionaryCustom:(state.dictionaryCustom||[]).length,
      dictionaryEdited:Object.keys(state.dictionaryEdits||{}).length,
      dictionaryDeleted:(state.dictionaryDeleted||[]).length,

      characters:Array.isArray(characters?.characters)?characters.characters.length:0,
      charactersTrash:Array.isArray(characters?.trash)?characters.trash.length:0,

      parables:Array.isArray(parables?.parables)?parables.parables.length:0,
      parablesCustom:Array.isArray(parables?.custom)?parables.custom.length:0,
      parablesEdited:parables?.edits&&typeof parables.edits==='object'?Object.keys(parables.edits).length:0,
      parablesDeleted:Array.isArray(parables?.deleted)?parables.deleted.length:0,
      parablesTrash:Array.isArray(parables?.trash)?parables.trash.length:0,

      guides:Array.isArray(guides?.guides)?guides.guides.length:0,
      guidesCustom:Array.isArray(guides?.custom)?guides.custom.length:0,
      guidesEdited:guides?.edits&&typeof guides.edits==='object'?Object.keys(guides.edits).length:0,
      guidesDeleted:Array.isArray(guides?.deleted)?guides.deleted.length:0,
      guidesTrash:Array.isArray(guides?.trash)?guides.trash.length:0,

      propheciesCustom:prophecies.custom,
      propheciesEdited:prophecies.edited,
      propheciesDeleted:prophecies.deleted,
      propheciesTrash:prophecies.trash,

      placesCustom:places.custom,
      placesEdited:places.edited,
      placesDeleted:places.deleted,
      placesTrash:places.trash
    },
    localStorage:data
  };
}

function downloadJsonFile(name,value){
  const blob=new Blob([JSON.stringify(value,null,2)],{type:'application/json;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;
  a.download=name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

$('#exportBackup')?.addEventListener('click',()=>{
  const stamp=new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
  const backup=buildCompleteBackup();
  downloadJsonFile(`Biblia_de_Estudio_backup_${stamp}.json`,backup);
  toast(`Copia completa exportada: ${backup.summary.storageGroups} grupos`);
});

$('#importBackup')?.addEventListener('click',()=>$('#backupFileInput')?.click());

$('#backupFileInput')?.addEventListener('change',async e=>{
  const file=e.target.files?.[0];
  e.target.value='';
  if(!file)return;

  try{
    const backup=JSON.parse(await file.text());

    if(
      backup?.app!=='Mi Biblia de Estudio' ||
      !backup.localStorage ||
      typeof backup.localStorage!=='object' ||
      Array.isArray(backup.localStorage)
    ){
      throw new Error('El archivo no es una copia válida de esta aplicación');
    }

    const incomingEntries=Object.entries(backup.localStorage)
      .filter(([key,value])=>isBackupStorageKey(key)&&typeof value==='string');

    if(!incomingEntries.length){
      throw new Error('La copia no contiene datos compatibles para restaurar');
    }

    const message=
      `Se restaurarán ${incomingEntries.length} grupos de datos.\n\n`+
      `Incluye lectura, diccionario y los módulos Personajes, Parábolas, Guía, `+
      `Profecías y Lugares cuando estén presentes.\n\n`+
      `Los datos actuales serán reemplazados. ¿Continuar?`;

    if(!confirm(message))return;

    // Limpiar solo los datos pertenecientes a la aplicación.
    const currentKeys=[];
    for(let i=0;i<localStorage.length;i++){
      const key=localStorage.key(i);
      if(key&&isBackupStorageKey(key))currentKeys.push(key);
    }
    for(const key of currentKeys)localStorage.removeItem(key);

    // Restaurar todos los módulos incluidos, también los añadidos en futuras versiones.
    for(const [key,value] of incomingEntries){
      localStorage.setItem(key,value);
    }

    toast(`Copia completa restaurada: ${incomingEntries.length} grupos. Reiniciando…`);
    setTimeout(()=>location.reload(),850);

  }catch(error){
    console.error(error);
    toast(error.message||'No se pudo importar la copia');
  }
});

const TITLE_SOURCE_URLS=[
  'https://cdn.jsdelivr.net/gh/mrk214/bible-data-es-spa@main/data/es___spa___spa/RVR1960_vid_149.json',
  'https://raw.githubusercontent.com/mrk214/bible-data-es-spa/main/data/es___spa___spa/RVR1960_vid_149.json'
];
function titleLayerEntries(layer){
  const rows=[];
  for(const book of USFM_KEYS){
    for(const chapter of Object.keys(layer?.[book]||{}).map(Number).sort((a,b)=>a-b)){
      for(const item of (layer[book]?.[String(chapter)]||[]).slice().sort((a,b)=>a.versiculo-b.versiculo||a.titulo.localeCompare(b.titulo,'es'))){
        rows.push(`${book}|${chapter}|${item.versiculo}|${item.titulo}`);
      }
    }
  }
  return rows;
}
function countTitleLayer(layer){return titleLayerEntries(layer).length}
async function downloadStructuredTitleSource(){
  let lastError;
  for(const url of TITLE_SOURCE_URLS){
    try{const res=await fetch(url,{cache:'no-store'});if(!res.ok)throw new Error(`HTTP ${res.status}`);return await res.json()}catch(error){lastError=error}
  }
  throw lastError||new Error('No se pudo descargar la fuente de títulos');
}
function buildVerifiedTitleLayer(data){
  const result={},errors=[],warnings=[];let ignoredIntroductions=0;
  const books=Array.isArray(data?.books)?data.books:[];
  if(books.length<66)errors.push(`La fuente solo contiene ${books.length} libros`);
  books.slice(0,66).forEach((book,bookIndex)=>{
    const key=USFM_KEYS[bookIndex],meta=state.books.find(b=>b.key===key);if(!key||!meta)return;
    const chapters=Array.isArray(book?.chapters)?book.chapters:[];
    // La fuente contiene un bloque introductorio en la posición 0. El capítulo bíblico 1 está en la posición 1.
    chapters.forEach((chapter,sourceIndex)=>{
      if(sourceIndex===0){ignoredIntroductions++;return}
      const targetChapter=sourceIndex;
      if(targetChapter<1||targetChapter>meta.chapters){warnings.push(`${meta.shortTitle}: se ignoró el bloque ${sourceIndex}`);return}
      const items=Array.isArray(chapter?.items)?chapter.items:[];const found=[];
      for(let i=0;i<items.length;i++){
        const item=items[i]||{};
        if(!['section1','section2','heading1','heading2'].includes(item.type))continue;
        const titulo=(item.lines||[]).join(' ').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();if(!titulo)continue;
        let verse=Number((item.verse_numbers||[])[0]||0);
        if(!verse){for(let j=i+1;j<items.length;j++){const n=Number((items[j]?.verse_numbers||[])[0]||0);if(n){verse=n;break}}}
        if(!verse)verse=1;
        const max=EXPECTED_CHAPTER_VERSES[key]?.[targetChapter-1];
        if(!Number.isInteger(max)||verse<1||verse>max){errors.push(`${meta.shortTitle} ${targetChapter}:${verse}: título fuera de un versículo válido`);continue}
        found.push({versiculo:verse,titulo});
      }
      if(found.length){
        const seen=new Set();
        result[key]=result[key]||{};
        result[key][String(targetChapter)]=found.filter(x=>{const id=`${x.versiculo}|${x.titulo.toLowerCase()}`;if(seen.has(id))return false;seen.add(id);return true}).sort((a,b)=>a.versiculo-b.versiculo);
      }
    });
  });
  const count=countTitleLayer(result);
  if(!count)errors.push('No se encontró ningún título válido');
  return{result,count,errors,warnings,ignoredIntroductions};
}
async function ensureAutomaticTitles(){
  if(countTitleLayer(state.importedTitles||{})>0)return;

  // Desde la V1.57 los 2.077 títulos RVR1960 forman parte del paquete.
  // En un primer arranque se copian a la capa persistente para que también
  // queden incluidos en las copias de seguridad y sobrevivan a futuras versiones.
  const integratedCount=countTitleLayer(state.baseTitles||{});
  if(integratedCount>0){
    const integrated=JSON.parse(JSON.stringify(state.baseTitles));
    const hash=await sha256Hex(titleLayerEntries(integrated).join('\n'));
    state.importedTitles=integrated;
    localStorage.setItem('importedTitles',JSON.stringify(integrated));
    localStorage.setItem('verifiedTitleLayerAudit',JSON.stringify({installedAt:Date.now(),count:integratedCount,sha256:hash,ignoredIntroductions:0,warnings:[],automatic:true,integrated:true,appVersion:APP_VERSION}));
    return;
  }

  // Respaldo para paquetes antiguos o incompletos.
  try{
    const data=await downloadStructuredTitleSource();
    const audit=buildVerifiedTitleLayer(data);
    if(audit.errors.length)throw new Error(audit.errors[0]);
    const hash=await sha256Hex(titleLayerEntries(audit.result).join('\n'));
    state.importedTitles=audit.result;
    localStorage.setItem('importedTitles',JSON.stringify(audit.result));
    localStorage.setItem('verifiedTitleLayerAudit',JSON.stringify({installedAt:Date.now(),count:audit.count,sha256:hash,ignoredIntroductions:audit.ignoredIntroductions,warnings:audit.warnings,automatic:true}));
  }catch(error){
    console.warn('Los títulos automáticos no pudieron cargarse; se conservarán los ya guardados',error);
  }
}

function prepareBooksDrawer(){
  const tabs=$$('.drawer-tabs button');
  tabs.forEach(button=>button.classList.toggle('active',button.dataset.testament==='all'));
  renderBooks('all');
}

async function installVerifiedTitles(){
  const btn=$('#installTitles'),status=$('#titleLayerStatus'),seal=$('#titleSeal'),hashEl=$('#titleHash'),exportBtn=$('#exportTitles');
  btn.disabled=true;btn.textContent='Descargando y verificando títulos…';status.textContent='Leyendo la fuente estructurada y colocando cada encabezado en su capítulo y versículo…';seal.classList.add('hidden');hashEl.classList.add('hidden');
  try{
    const data=await downloadStructuredTitleSource();
    const audit=buildVerifiedTitleLayer(data);
    if(audit.errors.length)throw new Error(audit.errors[0]);
    const hash=await sha256Hex(titleLayerEntries(audit.result).join('\n'));
    state.importedTitles=audit.result;localStorage.setItem('importedTitles',JSON.stringify(audit.result));
    state.titles=mergeTitles(state.baseTitles,audit.result);save();render();
    const report={installedAt:Date.now(),count:audit.count,sha256:hash,ignoredIntroductions:audit.ignoredIntroductions,warnings:audit.warnings};
    localStorage.setItem('verifiedTitleLayerAudit',JSON.stringify(report));
    status.textContent=`${audit.count.toLocaleString('es-ES')} títulos instalados y verificados. Se ignoraron ${audit.ignoredIntroductions} introducciones. La Biblia de 31.104 versículos permanece intacta.`;
    seal.classList.remove('hidden');hashEl.textContent=`SHA-256 títulos: ${hash}`;hashEl.classList.remove('hidden');exportBtn.classList.remove('hidden');
    updateBibleCounters({...(state.lastLocalAudit?.stats||{}),titles:audit.count});toast('Títulos instalados correctamente');
  }catch(error){console.error(error);status.textContent=`No se instalaron los títulos: ${error.message}`;toast('No se pudieron instalar los títulos')}
  finally{btn.disabled=false;btn.textContent='Reinstalar títulos en su orden correcto'}
}
function restoreTitleLayerStatus(){
  const report=JSON.parse(localStorage.getItem('verifiedTitleLayerAudit')||'null');const count=countTitleLayer(state.importedTitles||{});
  if(!report||!count)return;
  const status=$('#titleLayerStatus'),seal=$('#titleSeal'),hashEl=$('#titleHash'),exportBtn=$('#exportTitles'),btn=$('#installTitles');
  status.textContent=`${count.toLocaleString('es-ES')} títulos instalados y disponibles sin conexión. La Biblia verificada permanece intacta.`;
  seal.classList.remove('hidden');hashEl.textContent=`SHA-256 títulos: ${report.sha256}`;hashEl.classList.remove('hidden');exportBtn.classList.remove('hidden');btn.textContent='Reinstalar títulos en su orden correcto';
}
$('#installTitles')?.addEventListener('click',installVerifiedTitles);
$('#exportTitles')?.addEventListener('click',()=>{
  const layer=state.importedTitles||{};if(!countTitleLayer(layer)){toast('Todavía no hay títulos instalados');return}
  const blob=new Blob([JSON.stringify(layer,null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='titulos_rvr1960.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
setTimeout(restoreTitleLayerStatus,1300);

const EXPECTED_CHAPTER_VERSES={"genesis":[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],"exodo":[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],"levitico":[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],"numeros":[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],"deuteronomio":[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],"josue":[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],"jueces":[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],"rut":[22,23,18,22],"1_samuel":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],"2_samuel":[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],"1_reyes":[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],"2_reyes":[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],"1_cronicas":[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],"2_cronicas":[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],"esdras":[11,70,13,24,17,22,28,36,15,44],"nehemias":[11,20,32,23,19,19,73,18,38,39,36,47,31],"ester":[22,23,15,17,14,14,10,17,32,3],"job":[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],"salmos":[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,10,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],"proverbios":[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],"eclesiastes":[18,26,22,16,20,12,29,17,18,20,10,14],"cantares":[17,17,11,16,16,13,13,14],"isaias":[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],"jeremias":[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],"lamentaciones":[22,22,66,22,22],"ezequiel":[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],"daniel":[21,49,30,37,31,28,28,27,27,21,45,13],"oseas":[11,23,5,19,15,11,16,14,17,15,12,14,16,9],"joel":[20,32,21],"amos":[15,16,15,13,27,14,17,14,15],"abdias":[21],"jonas":[17,10,10,11],"miqueas":[16,13,12,13,15,16,20],"nahum":[15,13,19],"habacuc":[17,20,19],"sofonias":[18,15,20],"hageo":[15,23],"zacarias":[21,13,10,14,11,15,14,23,17,12,17,14,9,21],"malaquias":[14,17,18,6],"mateo":[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],"marcos":[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],"lucas":[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],"juan":[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],"hechos":[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],"romanos":[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],"1_corintios":[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],"2_corintios":[24,17,18,18,21,18,16,24,15,18,33,21,14],"galatas":[24,21,29,31,26,18],"efesios":[23,22,21,32,33,24],"filipenses":[30,30,21,23],"colosenses":[29,23,25,18],"1_tesalonicenses":[10,20,13,18,28],"2_tesalonicenses":[12,17,18],"1_timoteo":[20,15,16,16,25,21],"2_timoteo":[18,26,17,22],"tito":[16,15,15],"filemon":[25],"hebreos":[14,18,19,16,14,20,28,13,28,39,40,29,25],"santiago":[27,26,18,17,20],"1_pedro":[25,25,22,19,14],"2_pedro":[21,22,18],"1_juan":[10,29,24,21,21],"2_juan":[13],"3_juan":[15],"judas":[25],"apocalipsis":[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]};
const USFM_KEYS=['genesis','exodo','levitico','numeros','deuteronomio','josue','jueces','rut','1_samuel','2_samuel','1_reyes','2_reyes','1_cronicas','2_cronicas','esdras','nehemias','ester','job','salmos','proverbios','eclesiastes','cantares','isaias','jeremias','lamentaciones','ezequiel','daniel','oseas','joel','amos','abdias','jonas','miqueas','nahum','habacuc','sofonias','hageo','zacarias','malaquias','mateo','marcos','lucas','juan','hechos','romanos','1_corintios','2_corintios','galatas','efesios','filipenses','colosenses','1_tesalonicenses','2_tesalonicenses','1_timoteo','2_timoteo','tito','filemon','hebreos','santiago','1_pedro','2_pedro','1_juan','2_juan','3_juan','judas','apocalipsis'];
function canonicalizeBibleForHash(parts){return parts.join('\n')}
async function sha256Hex(text){
  if(!crypto?.subtle)return 'No disponible en este navegador';
  const bytes=new TextEncoder().encode(text);
  const hash=await crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
function countInstalledTitles(){
  let total=0,duplicates=0,invalid=0;
  const seen=new Set();
  for(const [book,chapters] of Object.entries(state.titles||{})){
    const meta=state.books.find(b=>b.key===book);
    for(const [chapter,items] of Object.entries(chapters||{})){
      const c=Number(chapter);
      if(!meta||c<1||c>meta.chapters){invalid+=(items||[]).length;continue}
      for(const item of items||[]){
        const v=Number(item?.versiculo);const title=String(item?.titulo||'').trim();
        if(!title||v<1){invalid++;continue}
        const id=`${book}:${c}:${v}:${title.toLowerCase()}`;
        if(seen.has(id))duplicates++;else seen.add(id);
        total++;
      }
    }
  }
  return{total,duplicates,invalid};
}
function updateBibleCounters(stats={}){
  const values={auditBookCount:stats.books||0,auditChapterCount:stats.chapters||0,auditVerseCount:stats.verses||0,auditTitleCount:stats.titles||0};
  for(const [id,value] of Object.entries(values)){const el=$('#'+id);if(el)el.textContent=Number(value).toLocaleString('es-ES')}
}
function createAuditReportText(report){
  const lines=[
    'AUDITORÍA DE LA BIBLIA INSTALADA — RVR1960','',
    `Fecha: ${new Date(report.auditedAt).toLocaleString('es-ES')}`,
    `Libros: ${report.stats.books} / 66`,
    `Capítulos: ${report.stats.chapters} / 1.189`,
    `Versículos: ${report.stats.verses.toLocaleString('es-ES')} / 31.104`,
    `Títulos: ${report.stats.titles.toLocaleString('es-ES')}`,
    `Versículos vacíos: ${report.stats.emptyVerses}`,
    `Textos con /n o \\n defectuoso: ${report.stats.badBreaks}`,
    `Títulos duplicados: ${report.stats.duplicateTitles}`,
    `Títulos inválidos: ${report.stats.invalidTitles}`,
    `Errores: ${report.errors.length}`,
    `Advertencias: ${report.warnings.length}`,'',
    `Estado: ${report.verified?'BIBLIA VERIFICADA':'REVISIÓN NECESARIA'}`,'',
    'SHA-256:',report.sha256,'']
  if(report.errors.length)lines.push('ERRORES',...report.errors.map(x=>`- ${x}`),'')
  if(report.warnings.length)lines.push('ADVERTENCIAS',...report.warnings.map(x=>`- ${x}`),'')
  return lines.join('\n');
}
async function auditarBibliaInstalada(){
  const btn=$('#importTitles'),status=$('#titlesStatus'),seal=$('#auditSeal'),hashEl=$('#auditHash'),download=$('#downloadAuditReport');
  btn.disabled=true;btn.textContent='Auditando archivos locales…';
  status.textContent='Comprobando los 66 libros de la raíz, capítulo por capítulo y versículo por versículo…';
  seal.classList.add('hidden');hashEl.classList.add('hidden');download.classList.add('hidden');updateBibleCounters({});
  const report={version:APP_VERSION,auditedAt:Date.now(),stats:{books:0,chapters:0,verses:0,titles:0,emptyVerses:0,badBreaks:0,duplicateTitles:0,invalidTitles:0},errors:[],warnings:[],sha256:'',verified:false};
  const hashParts=[];
  try{
    for(let bi=0;bi<state.books.length;bi++){
      const meta=state.books[bi];
      let chapters;
      try{const res=await fetch(freshUrl(meta.key+'.json'),{cache:'no-store'});if(!res.ok)throw new Error(`HTTP ${res.status}`);chapters=await res.json()}catch(error){report.errors.push(`${meta.shortTitle}: no se pudo leer ${meta.key}.json (${error.message})`);continue}
      report.stats.books++;
      if(!Array.isArray(chapters)){report.errors.push(`${meta.shortTitle}: el archivo no contiene una lista de capítulos`);continue}
      if(chapters.length!==meta.chapters)report.errors.push(`${meta.shortTitle}: capítulos esperados ${meta.chapters}, encontrados ${chapters.length}`);
      const expected=EXPECTED_CHAPTER_VERSES[meta.key]||[];
      let bookVerses=0;
      chapters.forEach((verses,ci)=>{
        report.stats.chapters++;
        if(!Array.isArray(verses)){report.errors.push(`${meta.shortTitle} ${ci+1}: capítulo inválido`);return}
        const expectedCount=expected[ci];
        if(Number.isInteger(expectedCount)&&verses.length!==expectedCount)report.errors.push(`${meta.shortTitle} ${ci+1}: versículos esperados ${expectedCount}, encontrados ${verses.length}`);
        verses.forEach((raw,vi)=>{
          const original=String(raw??'');const cleaned=limpiarTextoBiblico(original);
          report.stats.verses++;bookVerses++;
          if(!cleaned) {report.stats.emptyVerses++;report.errors.push(`${meta.shortTitle} ${ci+1}:${vi+1} está vacío`)}
          if(/\\n|\/n/i.test(original)){report.stats.badBreaks++;report.warnings.push(`${meta.shortTitle} ${ci+1}:${vi+1} contiene un salto defectuoso que la app limpia al mostrarlo`)}
          hashParts.push(`${meta.key}|${ci+1}|${vi+1}|${cleaned}`);
        });
      });
      if(bookVerses!==meta.verses)report.errors.push(`${meta.shortTitle}: total esperado ${meta.verses}, encontrado ${bookVerses}`);
      status.textContent=`Auditando ${meta.shortTitle}… ${bi+1}/66`;
      updateBibleCounters({...report.stats,titles:0});
      await new Promise(resolve=>setTimeout(resolve,0));
    }
    const titleStats=countInstalledTitles();report.stats.titles=titleStats.total;report.stats.duplicateTitles=titleStats.duplicates;report.stats.invalidTitles=titleStats.invalid;
    if(titleStats.invalid)report.errors.push(`Hay ${titleStats.invalid} títulos con libro, capítulo, versículo o texto inválido`);
    if(titleStats.duplicates)report.warnings.push(`Hay ${titleStats.duplicates} títulos duplicados exactamente en la misma posición`);
    if(report.stats.books!==66)report.errors.push(`Libros leídos: ${report.stats.books}; esperados: 66`);
    if(report.stats.chapters!==1189)report.errors.push(`Capítulos encontrados: ${report.stats.chapters}; esperados: 1.189`);
    if(report.stats.verses!==31104)report.errors.push(`Versículos encontrados: ${report.stats.verses}; esperados: 31.104`);
    report.sha256=await sha256Hex(canonicalizeBibleForHash(hashParts));
    report.verified=report.errors.length===0;
    state.lastLocalAudit=report;localStorage.setItem('lastLocalBibleAudit',JSON.stringify(report));
    updateBibleCounters(report.stats);
    hashEl.textContent=`SHA-256: ${report.sha256}`;hashEl.classList.remove('hidden');download.classList.remove('hidden');
    if(report.verified){seal.classList.remove('hidden');status.textContent=`Auditoría superada: 66 libros, 1.189 capítulos y 31.104 versículos. ${report.stats.titles.toLocaleString('es-ES')} títulos detectados.${report.warnings.length?' Hay '+report.warnings.length+' advertencia(s) no estructurales.':''}`;toast('Biblia instalada verificada')}
    else{status.textContent=`Revisión necesaria: se encontraron ${report.errors.length} error(es) y ${report.warnings.length} advertencia(s). Descarga el informe para ver el detalle.`;toast('Auditoría terminada con incidencias')}
  }catch(error){console.error(error);status.textContent=`No se pudo completar la auditoría: ${error.message}`;toast('Error durante la auditoría')}
  finally{btn.disabled=false;btn.textContent='Volver a auditar Biblia instalada'}
}
$('#importTitles')?.addEventListener('click',auditarBibliaInstalada);
$('#downloadAuditReport')?.addEventListener('click',()=>{
  const report=state.lastLocalAudit||JSON.parse(localStorage.getItem('lastLocalBibleAudit')||'null');if(!report){toast('Primero realiza la auditoría');return}
  const blob=new Blob([createAuditReportText(report)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`INFORME_AUDITORIA_RVR1960_V${APP_VERSION}.txt`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)
});
function actualizarEstadoTitulos(){
  const report=JSON.parse(localStorage.getItem('lastLocalBibleAudit')||'null');if(!report)return;
  state.lastLocalAudit=report;updateBibleCounters(report.stats||{});
  const status=$('#titlesStatus'),seal=$('#auditSeal'),hashEl=$('#auditHash'),download=$('#downloadAuditReport'),btn=$('#importTitles');
  if(btn)btn.textContent='Volver a auditar Biblia instalada';
  if(status)status.textContent=report.verified?'Última auditoría superada. Puedes repetirla después de cualquier cambio en los libros.':`Última auditoría: ${report.errors?.length||0} error(es) y ${report.warnings?.length||0} advertencia(s).`;
  if(report.verified)seal?.classList.remove('hidden');
  if(report.sha256){hashEl.textContent=`SHA-256: ${report.sha256}`;hashEl.classList.remove('hidden')}
  download?.classList.remove('hidden');
}
setTimeout(actualizarEstadoTitulos,1200);
let toastTimer=0;
function toast(message){
  const element=$('#toast');
  element.textContent=message;
  element.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>element.classList.add('hidden'),1900);
}

// La actualización mediante gesto de arrastre se ha desactivado para evitar
// recargas accidentales al llegar al inicio de listas y pantallas de lectura.
function refreshAppStateAfterResume(){
  syncFavoritesFromStorage();
  updateReadingPointUI();
  if(state.books.length)prepareBooksDrawer();
}
window.addEventListener('pageshow',refreshAppStateAfterResume);
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){
    stopStatsClock();
    clearTimeout(timeHeaderTimer);
    return;
  }
  refreshAppStateAfterResume();
  scheduleTimeHeaderRefresh();
  if($('#statsDialog')?.open)startStatsClock();
  refreshDailyVerseReminder();
});
init().catch(e=>{reader.innerHTML='<p>No se pudo cargar la Biblia.</p>';console.error(e)});


navigator.serviceWorker?.addEventListener('message',event=>{
  if(event.data?.type==='OPEN_DAILY_VERSE')openDailyVerse();
});

/* V2.1.5 · Efecto visual del cambio de capítulo. */
document.addEventListener('DOMContentLoaded',()=>{
 const el=document.getElementById('chapterTitle');
 if(!el) return;
 const obs=new MutationObserver(()=>{
   el.classList.remove('pop');
   void el.offsetWidth;
   el.classList.add('pop');
 });
 obs.observe(el,{childList:true,characterData:true,subtree:true});
});


/* V2.2.2 · Enciclopedia Bíblica */
let biblicalEncyclopediaReturnScreen='reader';
let biblicalEncyclopediaReadingPosition=null;
function captureEncyclopediaReadingPosition(){
  const scrollingElement=document.scrollingElement||document.documentElement;
  return {readerTop:reader?.scrollTop||0,pageLeft:scrollingElement?.scrollLeft||window.scrollX||0,pageTop:scrollingElement?.scrollTop||window.scrollY||0};
}
function restoreEncyclopediaReadingPosition(position=biblicalEncyclopediaReadingPosition){
  if(!position)return;
  if(reader)reader.scrollTop=position.readerTop;
  const scrollingElement=document.scrollingElement||document.documentElement;
  if(scrollingElement){scrollingElement.scrollLeft=position.pageLeft;scrollingElement.scrollTop=position.pageTop;}
}
function preserveEncyclopediaReadingPosition(){
  const position=biblicalEncyclopediaReadingPosition;
  restoreEncyclopediaReadingPosition(position);
  requestAnimationFrame(()=>{restoreEncyclopediaReadingPosition(position);requestAnimationFrame(()=>restoreEncyclopediaReadingPosition(position));});
  setTimeout(()=>restoreEncyclopediaReadingPosition(position),120);
}
function openBiblicalEncyclopedia(){
  const home=document.getElementById('homeScreen');
  const reader=document.getElementById('readerScreen');
  biblicalEncyclopediaReturnScreen=(reader&&!reader.classList.contains('hidden'))?'reader':'home';
  if(biblicalEncyclopediaReturnScreen==='reader')biblicalEncyclopediaReadingPosition=captureEncyclopediaReadingPosition();
  if(home)home.classList.add('hidden');
  if(reader)reader.classList.add('hidden');
  document.getElementById('biblicalEncyclopediaScreen')?.classList.remove('hidden');
  if(biblicalEncyclopediaReturnScreen==='reader')preserveEncyclopediaReadingPosition();
  else window.scrollTo({top:0});
}
function closeBiblicalEncyclopedia(){
  document.getElementById('biblicalEncyclopediaScreen')?.classList.add('hidden');
  const home=document.getElementById('homeScreen');
  const reader=document.getElementById('readerScreen');
  if(biblicalEncyclopediaReturnScreen==='reader'&&reader){reader.classList.remove('hidden');preserveEncyclopediaReadingPosition();}
  else if(home){home.classList.remove('hidden');window.scrollTo({top:0});}
}
async function openEncyclopediaSection(section){
  document.getElementById('biblicalEncyclopediaScreen')?.classList.add('hidden');
  if(section==='characters')await openBiblicalCharactersV2242();
  if(section==='guides')await openBiblicalGuides();
  if(section==='parables')await openBiblicalParables();
  if(section==='prophecies')await openBiblicalProphecies();
  if(section==='places')await openBiblicalPlaces();
}
function returnFromEncyclopediaSection(section){
  if(section==='characters'){
    document.body.classList.remove('biblical-characters-fullscreen-v2243');
    document.getElementById('biblicalCharactersScreen')?.classList.add('hidden');
  }
  if(section==='guides')document.getElementById('biblicalGuidesScreen')?.classList.add('hidden');
  if(section==='parables')document.getElementById('biblicalParablesScreen')?.classList.add('hidden');
  if(section==='prophecies')document.getElementById('biblicalPropheciesScreen')?.classList.add('hidden');
  if(section==='places')document.getElementById('biblicalPlacesScreen')?.classList.add('hidden');
  document.getElementById('homeScreen')?.classList.add('hidden');
  document.getElementById('readerScreen')?.classList.add('hidden');
  document.getElementById('biblicalEncyclopediaScreen')?.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}


/* V2.7.1 · Profecías unificadas en un único archivo de datos */
const PROPHECIES_CRUD_KEY='biblia_profecias_crud_v270';
let biblicalPropheciesBase=[];
let biblicalPropheciesData=[];
let biblicalPropheciesLoaded=false;
let activeBiblicalProphecyId='';
function normalizeProphecyText(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}
function defaultPropheciesCrud(){return{custom:[],edits:{},deleted:[],trash:[]}}
function loadPropheciesCrud(){
  try{
    const parsed=JSON.parse(localStorage.getItem(PROPHECIES_CRUD_KEY)||'null');
    return{
      custom:Array.isArray(parsed?.custom)?parsed.custom:[],
      edits:parsed?.edits&&typeof parsed.edits==='object'&&!Array.isArray(parsed.edits)?parsed.edits:{},
      deleted:Array.isArray(parsed?.deleted)?parsed.deleted:[],
      trash:Array.isArray(parsed?.trash)?parsed.trash:[]
    };
  }catch(_){return defaultPropheciesCrud()}
}
function savePropheciesCrud(value){localStorage.setItem(PROPHECIES_CRUD_KEY,JSON.stringify(value));updateBiblicalPropheciesTrashCount()}
function prophecyCleanItem(item={}){
  const lines=value=>Array.isArray(value)?value.map(x=>String(x||'').trim()).filter(Boolean):String(value||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  return{
    id:String(item.id||`custom-prophecy-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),
    title:String(item.title||'').trim(),theme:String(item.theme||'Profecía mesiánica').trim(),
    prophecyRef:String(item.prophecyRef||'').trim(),prophecy:String(item.prophecy||'').trim(),prophecyHighlights:lines(item.prophecyHighlights),
    fulfillmentRef:String(item.fulfillmentRef||'').trim(),fulfillment:String(item.fulfillment||'').trim(),fulfillmentHighlights:lines(item.fulfillmentHighlights),
    explanation:String(item.explanation||'').trim(),importance:String(item.importance||'').trim(),
    createdAt:Number(item.createdAt)||Date.now(),updatedAt:Number(item.updatedAt)||Date.now()
  };
}
function rebuildBiblicalPropheciesData(){
  const crud=loadPropheciesCrud(),deleted=new Set(crud.deleted.map(String));
  const base=biblicalPropheciesBase.filter(x=>!deleted.has(String(x.id))).map(x=>prophecyCleanItem(crud.edits[x.id]?{...x,...crud.edits[x.id],id:x.id}:{...x,id:x.id}));
  const custom=crud.custom.map(prophecyCleanItem).filter(x=>!deleted.has(String(x.id)));
  biblicalPropheciesData=[...base,...custom];
  updateBiblicalPropheciesTrashCount();
  return biblicalPropheciesData;
}
async function loadBiblicalProphecies(){
  if(biblicalPropheciesLoaded)return rebuildBiblicalPropheciesData();
  try{
    const response=await fetch(freshUrl('biblical-prophecies.json'));
    if(!response.ok)throw new Error('No se pudo cargar Profecías');
    const raw=await response.json();
    biblicalPropheciesBase=Array.isArray(raw)?raw.map(prophecyCleanItem):[];
  }catch(error){console.error(error);biblicalPropheciesBase=[]}
  biblicalPropheciesLoaded=true;
  return rebuildBiblicalPropheciesData();
}
async function openBiblicalProphecies(){
  document.getElementById('homeScreen')?.classList.add('hidden');
  document.getElementById('readerScreen')?.classList.add('hidden');
  document.getElementById('biblicalEncyclopediaScreen')?.classList.add('hidden');
  document.getElementById('biblicalPropheciesScreen')?.classList.remove('hidden');
  document.getElementById('biblicalPropheciesHome')?.classList.remove('hidden');
  document.getElementById('biblicalProphecyDetail')?.classList.add('hidden');
  activeBiblicalProphecyId='';
  await loadBiblicalProphecies();renderBiblicalProphecies();window.scrollTo({top:0,behavior:'smooth'});
}
function renderBiblicalProphecies(){
  rebuildBiblicalPropheciesData();
  const list=document.getElementById('biblicalPropheciesList');if(!list)return;
  const query=normalizeProphecyText(document.getElementById('biblicalPropheciesSearch')?.value);
  const filtered=biblicalPropheciesData.filter(item=>normalizeProphecyText([item.title,item.prophecyRef,item.fulfillmentRef,item.prophecy,item.fulfillment,item.explanation,item.importance,item.theme].join(' ')).includes(query));
  const count=document.getElementById('biblicalPropheciesCount');if(count)count.textContent=`${filtered.length} ${filtered.length===1?'profecía':'profecías'}`;
  list.innerHTML=filtered.length?filtered.map(item=>`<button type="button" class="biblical-prophecy-card" onclick="openBiblicalProphecyDetail('${escapeHtml(item.id)}')"><span class="biblical-prophecy-theme">${escapeHtml(item.theme||'Profecía mesiánica')}</span><strong>${escapeHtml(item.title)}</strong><span class="biblical-prophecy-refs">${escapeHtml(item.prophecyRef)} · ${escapeHtml(item.fulfillmentRef)}</span></button>`).join(''):`<p class="biblical-prophecies-empty">No se han encontrado profecías con esa búsqueda.</p>`;
}
function highlightProphecyText(text,phrases){
  const source=String(text||''),wanted=(Array.isArray(phrases)?phrases:[]).filter(Boolean);if(!wanted.length)return escapeHtml(source);
  const lower=source.toLocaleLowerCase('es'),ranges=[];
  wanted.forEach(phrase=>{const target=String(phrase).toLocaleLowerCase('es');let start=0,index;while(target&&(index=lower.indexOf(target,start))!==-1){ranges.push([index,index+target.length]);start=index+target.length}});
  if(!ranges.length)return escapeHtml(source);ranges.sort((a,b)=>a[0]-b[0]||b[1]-a[1]);const merged=[];
  ranges.forEach(range=>{const last=merged[merged.length-1];if(last&&range[0]<=last[1])last[1]=Math.max(last[1],range[1]);else merged.push(range.slice())});
  let html='',cursor=0;merged.forEach(([s,e])=>{html+=escapeHtml(source.slice(cursor,s));html+='<mark class="prophecy-highlight">'+escapeHtml(source.slice(s,e))+'</mark>';cursor=e});return html+escapeHtml(source.slice(cursor));
}
function prophecyParagraphs(text){return String(text||'').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}
function openBiblicalProphecyDetail(id){
  const item=biblicalPropheciesData.find(entry=>entry.id===id);if(!item)return;activeBiblicalProphecyId=id;
  document.getElementById('biblicalPropheciesHome')?.classList.add('hidden');const detail=document.getElementById('biblicalProphecyDetail');if(!detail)return;
  detail.innerHTML=`<div class="biblical-prophecy-detail-head"><button class="btn soft" type="button" onclick="closeBiblicalProphecyDetail()">← Volver</button></div><div class="prophecy-detail-tools"><button type="button" onclick="openBiblicalProphecyEditor('${escapeHtml(item.id)}')">Editar</button><button type="button" class="danger" onclick="deleteBiblicalProphecy('${escapeHtml(item.id)}')">Eliminar</button></div><p class="biblical-prophecy-detail-theme">${escapeHtml(item.theme||'Profecía mesiánica')}</p><h1>${escapeHtml(item.title)}</h1><img class="biblical-prophecies-divider" src="separador_etiope_transparente_final.png?v=${APP_VERSION}" alt="" aria-hidden="true"><section class="biblical-prophecy-block prophecy-original"><h2>PROFECÍA</h2><h3>${escapeHtml(item.prophecyRef)}</h3><blockquote>${highlightProphecyText(item.prophecy,item.prophecyHighlights)}</blockquote></section><section class="biblical-prophecy-block prophecy-fulfilled"><h2>CUMPLIMIENTO</h2><h3>${escapeHtml(item.fulfillmentRef)}</h3><blockquote>${highlightProphecyText(item.fulfillment,item.fulfillmentHighlights)}</blockquote></section><section class="biblical-prophecy-explanation"><h2>EXPLICACIÓN</h2>${prophecyParagraphs(item.explanation)}</section><section class="biblical-prophecy-importance"><h2>IMPORTANCIA</h2><p>${escapeHtml(item.importance||'')}</p></section>`;
  detail.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});
}
function closeBiblicalProphecyDetail(){activeBiblicalProphecyId='';document.getElementById('biblicalProphecyDetail')?.classList.add('hidden');document.getElementById('biblicalPropheciesHome')?.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'})}
function prophecyEditorValue(id){return biblicalPropheciesData.find(x=>x.id===id)||null}
function openBiblicalProphecyEditor(id=''){
  const item=id?prophecyEditorValue(id):null,dialog=document.getElementById('biblicalProphecyEditDialog');if(!dialog)return;
  document.getElementById('prophecyEditId').value=item?.id||'';
  document.getElementById('prophecyEditTitle').value=item?.title||'';document.getElementById('prophecyEditTheme').value=item?.theme||'';
  document.getElementById('prophecyEditProphecyRef').value=item?.prophecyRef||'';document.getElementById('prophecyEditProphecy').value=item?.prophecy||'';
  document.getElementById('prophecyEditProphecyHighlights').value=(item?.prophecyHighlights||[]).join('\n');
  document.getElementById('prophecyEditFulfillmentRef').value=item?.fulfillmentRef||'';document.getElementById('prophecyEditFulfillment').value=item?.fulfillment||'';
  document.getElementById('prophecyEditFulfillmentHighlights').value=(item?.fulfillmentHighlights||[]).join('\n');
  document.getElementById('prophecyEditExplanation').value=item?.explanation||'';document.getElementById('prophecyEditImportance').value=item?.importance||'';
  document.getElementById('prophecyEditDialogTitle').textContent=item?'Editar profecía':'Añadir profecía';dialog.showModal();setTimeout(()=>document.getElementById('prophecyEditTitle')?.focus(),80);
}
function saveBiblicalProphecyEditor(){
  const id=document.getElementById('prophecyEditId').value.trim(),title=document.getElementById('prophecyEditTitle').value.trim();
  const prophecyRef=document.getElementById('prophecyEditProphecyRef').value.trim(),prophecy=document.getElementById('prophecyEditProphecy').value.trim();
  const fulfillmentRef=document.getElementById('prophecyEditFulfillmentRef').value.trim(),fulfillment=document.getElementById('prophecyEditFulfillment').value.trim();
  if(!title||!prophecyRef||!prophecy||!fulfillmentRef||!fulfillment){toast('Completa el título, la profecía y el cumplimiento');return}
  const previous=id?prophecyEditorValue(id):null,item=prophecyCleanItem({...(previous||{}),id:id||undefined,title,theme:document.getElementById('prophecyEditTheme').value.trim()||'Profecía mesiánica',prophecyRef,prophecy,prophecyHighlights:document.getElementById('prophecyEditProphecyHighlights').value,fulfillmentRef,fulfillment,fulfillmentHighlights:document.getElementById('prophecyEditFulfillmentHighlights').value,explanation:document.getElementById('prophecyEditExplanation').value.trim(),importance:document.getElementById('prophecyEditImportance').value.trim(),createdAt:previous?.createdAt||Date.now(),updatedAt:Date.now()});
  const crud=loadPropheciesCrud(),baseIds=new Set(biblicalPropheciesBase.map(x=>String(x.id)));
  if(id&&baseIds.has(id))crud.edits[id]=item;else if(id){const at=crud.custom.findIndex(x=>String(x.id)===id);if(at>=0)crud.custom[at]=item;else crud.custom.push(item)}else crud.custom.push(item);
  savePropheciesCrud(crud);rebuildBiblicalPropheciesData();renderBiblicalProphecies();document.getElementById('biblicalProphecyEditDialog')?.close();
  if(id&&activeBiblicalProphecyId===id)openBiblicalProphecyDetail(id);toast(id?'Profecía actualizada':'Profecía añadida');
}
function deleteBiblicalProphecy(id){
  const item=prophecyEditorValue(id);if(!item||!confirm(`¿Enviar “${item.title}” a la papelera?`))return;
  const crud=loadPropheciesCrud(),baseIds=new Set(biblicalPropheciesBase.map(x=>String(x.id))),isBuiltin=baseIds.has(String(id));
  crud.trash=crud.trash.filter(x=>String(x.id)!==String(id));crud.trash.unshift({...item,_origin:isBuiltin?'builtin':'custom',deletedAt:Date.now()});
  if(isBuiltin){if(!crud.deleted.includes(id))crud.deleted.push(id)}else crud.custom=crud.custom.filter(x=>String(x.id)!==String(id));
  savePropheciesCrud(crud);rebuildBiblicalPropheciesData();closeBiblicalProphecyDetail();renderBiblicalProphecies();toast('Profecía enviada a la papelera');
}
function updateBiblicalPropheciesTrashCount(){const n=loadPropheciesCrud().trash.length;const el=document.getElementById('biblicalPropheciesTrashCount');if(el)el.textContent=String(n)}
function openBiblicalPropheciesTrash(){renderBiblicalPropheciesTrash();document.getElementById('biblicalPropheciesTrashDialog')?.showModal()}
function renderBiblicalPropheciesTrash(){
  const box=document.getElementById('biblicalPropheciesTrashList');if(!box)return;const trash=loadPropheciesCrud().trash;
  box.innerHTML=trash.length?trash.map(x=>`<article class="prophecy-trash-item"><div><strong>${escapeHtml(x.title)}</strong><small>${escapeHtml(x.prophecyRef||'')} · ${escapeHtml(x.fulfillmentRef||'')}</small></div><div><button type="button" onclick="restoreBiblicalProphecy('${escapeHtml(x.id)}')">Restaurar</button><button type="button" class="danger" onclick="purgeBiblicalProphecy('${escapeHtml(x.id)}')">Eliminar</button></div></article>`).join(''):'<p class="biblical-prophecies-empty">La papelera está vacía.</p>';
  document.getElementById('emptyBiblicalPropheciesTrash').disabled=!trash.length;
}
function restoreBiblicalProphecy(id){
  const crud=loadPropheciesCrud(),at=crud.trash.findIndex(x=>String(x.id)===String(id));if(at<0)return;const item=crud.trash.splice(at,1)[0];
  if(item._origin==='builtin'){crud.deleted=crud.deleted.filter(x=>String(x)!==String(id));const restored={...item};delete restored._origin;delete restored.deletedAt;crud.edits[id]=restored}else{const restored={...item};delete restored._origin;delete restored.deletedAt;crud.custom=crud.custom.filter(x=>String(x.id)!==String(id));crud.custom.push(restored)}
  savePropheciesCrud(crud);rebuildBiblicalPropheciesData();renderBiblicalPropheciesTrash();renderBiblicalProphecies();toast('Profecía restaurada');
}
function purgeBiblicalProphecy(id){if(!confirm('¿Eliminar definitivamente esta profecía de la papelera?'))return;const crud=loadPropheciesCrud();crud.trash=crud.trash.filter(x=>String(x.id)!==String(id));savePropheciesCrud(crud);renderBiblicalPropheciesTrash();toast('Eliminada definitivamente')}
function emptyBiblicalPropheciesTrash(){if(!confirm('¿Vaciar definitivamente toda la papelera de Profecías?'))return;const crud=loadPropheciesCrud();crud.trash=[];savePropheciesCrud(crud);renderBiblicalPropheciesTrash();toast('Papelera vaciada')}



/* V2.8.6 · Lugares Bíblicos · arquitectura basada en Profecías */
const PLACES_CRUD_KEY='biblia_lugares_crud_v283';
let biblicalPlacesBase=[],biblicalPlacesData=[],biblicalPlacesLoaded=false,activeBiblicalPlaceId='';
const placeLines=value=>Array.isArray(value)?value.map(x=>String(x||'').trim()).filter(Boolean):String(value||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
function normalizePlaceText(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function defaultPlacesCrud(){return{custom:[],edits:{},deleted:[],trash:[]}}
function loadPlacesCrud(){try{const p=JSON.parse(localStorage.getItem(PLACES_CRUD_KEY)||'null');return{custom:Array.isArray(p?.custom)?p.custom:[],edits:p?.edits&&typeof p.edits==='object'&&!Array.isArray(p.edits)?p.edits:{},deleted:Array.isArray(p?.deleted)?p.deleted:[],trash:Array.isArray(p?.trash)?p.trash:[]}}catch(_){return defaultPlacesCrud()}}
function savePlacesCrud(v){localStorage.setItem(PLACES_CRUD_KEY,JSON.stringify(v));updateBiblicalPlacesTrashCount()}
function placeCleanItem(item={}){const lat=item.coordinates?.latitude??item.latitude??'',lng=item.coordinates?.longitude??item.longitude??'';return{id:String(item.id||`custom-place-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),name:String(item.name||'').trim(),category:String(item.category||'Lugar bíblico').trim(),currentRegion:String(item.currentRegion||item.region||'').trim(),firstAppearance:String(item.firstAppearance||'').trim(),shortDescription:String(item.shortDescription||item.description||'').trim(),biblicalImportance:String(item.biblicalImportance||item.importance||'').trim(),history:String(item.history||'').trim(),relatedPeople:placeLines(item.relatedPeople),jesusRelation:String(item.jesusRelation||'').trim(),mainVerses:placeLines(item.mainVerses),curiosities:placeLines(item.curiosities),coordinates:{latitude:lat===''?null:Number(lat),longitude:lng===''?null:Number(lng)},image:String(item.image||'').trim(),createdAt:Number(item.createdAt)||Date.now(),updatedAt:Number(item.updatedAt)||Date.now()}}
function rebuildBiblicalPlacesData(){const crud=loadPlacesCrud(),deleted=new Set(crud.deleted.map(String));const base=biblicalPlacesBase.filter(x=>!deleted.has(String(x.id))).map(x=>placeCleanItem(crud.edits[x.id]?{...x,...crud.edits[x.id],id:x.id}:x));const custom=crud.custom.map(placeCleanItem).filter(x=>!deleted.has(String(x.id)));biblicalPlacesData=[...base,...custom].sort((a,b)=>a.name.localeCompare(b.name,'es'));updateBiblicalPlacesTrashCount();return biblicalPlacesData}
async function loadBiblicalPlaces(){if(biblicalPlacesLoaded)return rebuildBiblicalPlacesData();try{const r=await fetch(freshUrl('biblical-places.json'));if(!r.ok)throw new Error('No se pudieron cargar Lugares Bíblicos');const raw=await r.json();biblicalPlacesBase=Array.isArray(raw)?raw.map(placeCleanItem):[]}catch(e){console.error(e);biblicalPlacesBase=[]}biblicalPlacesLoaded=true;return rebuildBiblicalPlacesData()}
async function openBiblicalPlaces(){document.getElementById('homeScreen')?.classList.add('hidden');document.getElementById('readerScreen')?.classList.add('hidden');document.getElementById('biblicalEncyclopediaScreen')?.classList.add('hidden');document.getElementById('biblicalPlacesScreen')?.classList.remove('hidden');document.getElementById('biblicalPlacesHome')?.classList.remove('hidden');document.getElementById('biblicalPlaceDetail')?.classList.add('hidden');activeBiblicalPlaceId='';await loadBiblicalPlaces();renderBiblicalPlaces();window.scrollTo({top:0,behavior:'smooth'})}
function biblicalPlaceSearchScore(place,q){
  if(!q)return 0;
  const name=normalizePlaceText(place.name).trim();
  const region=normalizePlaceText(place.currentRegion).trim();
  const category=normalizePlaceText(place.category).trim();
  const first=normalizePlaceText(place.firstAppearance).trim();
  const description=normalizePlaceText(place.shortDescription).trim();
  const importance=normalizePlaceText(place.biblicalImportance).trim();
  const history=normalizePlaceText(place.history).trim();
  const people=normalizePlaceText((place.relatedPeople||[]).join(' '));
  const verses=normalizePlaceText((place.mainVerses||[]).join(' '));
  const curiosities=normalizePlaceText((place.curiosities||[]).join(' '));

  if(name===q)return 0;
  if(name.startsWith(q))return 10;
  const words=name.split(/\s+/);
  if(words.some(word=>word.startsWith(q)))return 20;
  if(name.includes(q))return 30;
  if(region===q||category===q)return 40;
  if(region.startsWith(q)||category.startsWith(q))return 50;
  if(region.includes(q)||category.includes(q))return 60;
  if(first.includes(q))return 70;
  if(description.includes(q)||importance.includes(q))return 80;
  if(history.includes(q)||people.includes(q)||verses.includes(q)||curiosities.includes(q))return 90;
  return Infinity;
}

let biblicalPlacesListMode='all';

function setBiblicalPlacesListMode(mode){
  biblicalPlacesListMode=mode==='mapped'?'mapped':'all';
  renderBiblicalPlaces();
}
window.setBiblicalPlacesListMode=setBiblicalPlacesListMode;

function renderBiblicalPlaces(){
  rebuildBiblicalPlacesData();
  const list=document.getElementById('biblicalPlacesList');
  if(!list)return;

  const q=normalizePlaceText(document.getElementById('biblicalPlacesSearch')?.value).trim();
  const mappedCount=biblicalPlacesData.filter(biblicalMapHasCoords).length;

  document.getElementById('placesListAll')?.classList.toggle('active',biblicalPlacesListMode==='all');
  document.getElementById('placesListMapped')?.classList.toggle('active',biblicalPlacesListMode==='mapped');

  const allButton=document.getElementById('placesListAll');
  const mappedButton=document.getElementById('placesListMapped');
  if(allButton)allButton.textContent=`Todos (${biblicalPlacesData.length})`;
  if(mappedButton)mappedButton.textContent=`Con mapa (${mappedCount})`;

  const heading=document.getElementById('biblicalPlacesListTitle');
  if(heading)heading.textContent=biblicalPlacesListMode==='mapped'?'Lugares disponibles en el mapa':'Todos los lugares';

  const filtered=biblicalPlacesData
    .filter(place=>biblicalPlacesListMode!=='mapped'||biblicalMapHasCoords(place))
    .map((place,index)=>({place,index,score:biblicalPlaceSearchScore(place,q)}))
    .filter(item=>item.score!==Infinity)
    .sort((a,b)=>a.score-b.score||a.place.name.localeCompare(b.place.name,'es'))
    .map(item=>item.place);

  const count=document.getElementById('biblicalPlacesCount');
  if(count)count.textContent=`${filtered.length} ${filtered.length===1?'lugar':'lugares'}`;

  list.innerHTML=filtered.length
    ?filtered.map(x=>`<button type="button" class="biblical-prophecy-card biblical-place-card" data-place-id="${escapeHtml(x.id)}">
        <span class="biblical-prophecy-theme">${escapeHtml(x.category||'Lugar bíblico')}</span>
        <strong>${escapeHtml(x.name)}</strong>
        <span class="biblical-prophecy-refs">${escapeHtml(x.currentRegion||x.firstAppearance||'')}</span>
      </button>`).join('')
    :'<p class="biblical-prophecies-empty">No se han encontrado lugares con esa búsqueda.</p>';
}

function handleBiblicalPlaceCardOpen(event){
  const card=event.target.closest?.('.biblical-place-card');
  if(!card)return;
  event.preventDefault();
  const id=card.dataset.placeId;
  if(id)openBiblicalPlaceDetail(id);
}
document.addEventListener('click',handleBiblicalPlaceCardOpen,true);

function placeParagraphs(text){return String(text||'').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}
function placeList(items){return items?.length?`<ul>${items.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>`:'<p>Sin información añadida.</p>'}
function placeSection(title,content,cls='biblical-prophecy-explanation'){return `<section class="${cls}"><h2>${title}</h2>${content}</section>`}



function openBiblicalPlaceDetail(id){
  const x=biblicalPlacesData.find(e=>String(e.id)===String(id));
  if(!x)return;
  activeBiblicalPlaceId=x.id;
  document.getElementById('biblicalPlacesHome')?.classList.add('hidden');
  const d=document.getElementById('biblicalPlaceDetail');
  if(!d)return;

  const hasCoords=Number.isFinite(x.coordinates?.latitude)&&Number.isFinite(x.coordinates?.longitude);
  const optional=(title,value,cls='biblical-prophecy-explanation')=>
    String(value||'').trim()?placeSection(title,placeParagraphs(value),cls):'';
  const optionalList=(title,items)=>items?.length?placeSection(title,placeList(items)):'';

  d.innerHTML=`<div class="biblical-prophecy-detail-head biblical-place-detail-return">
      ${biblicalEntityReturnButton()}
    </div>
    <div class="prophecy-detail-tools">
      <button type="button" onclick="openBiblicalPlaceEditor('${escapeHtml(x.id)}')">Editar</button>
      <button type="button" class="danger" onclick="deleteBiblicalPlace('${escapeHtml(x.id)}')">Eliminar</button>
    </div>
    <p class="biblical-prophecy-detail-theme">${escapeHtml(x.category)}</p>
    <h1>${escapeHtml(x.name)}</h1>
    <img class="biblical-prophecies-divider" src="separador_etiope_transparente_final.png?v=${APP_VERSION}" alt="" aria-hidden="true">
    <p class="place-current-region">${escapeHtml(x.currentRegion)}</p>
    ${optional('RELACIÓN CON JESÚS',x.jesusRelation,'biblical-prophecy-importance')}
    ${placeSection('DESCRIPCIÓN BREVE',placeParagraphs(x.shortDescription))}
    ${optional('IMPORTANCIA BÍBLICA',x.biblicalImportance,'biblical-prophecy-importance')}
    ${placeSection('PRIMERA APARICIÓN',`<p>${escapeHtml(x.firstAppearance||'Sin especificar')}</p>`,'biblical-prophecy-block place-reference')}
    ${optional('HISTORIA',x.history)}
    ${optionalList('PERSONAJES RELACIONADOS',x.relatedPeople)}
    ${optionalList('VERSÍCULOS PRINCIPALES',x.mainVerses)}
    ${optionalList('CURIOSIDADES',x.curiosities)}
    ${placeMapLaunchersBlock(x)}
    <section class="biblical-prophecy-explanation place-map-block">
      <h2>COORDENADAS</h2>
      <p>${hasCoords?`${x.coordinates.latitude}, ${x.coordinates.longitude}`:'Coordenadas pendientes'}</p>
    </section>`;

  d.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}
window.openBiblicalPlaceDetail=openBiblicalPlaceDetail;

function placeMapLaunchersBlock(place){
  const hasCoords=Number.isFinite(place?.coordinates?.latitude)&&Number.isFinite(place?.coordinates?.longitude);
  if(!hasCoords)return "";
  const id=escapeHtml(place.id);
  const name=escapeHtml(place.name||"Lugar bíblico");
  return `<section class="place-geography-premium place-map-choice-section place-map-single-launcher">
    <h2>SITUACIÓN GEOGRÁFICA</h2>
    <p class="place-map-choice-intro">${name} dispone de ubicación en el mapa.</p>
    <button type="button" class="place-map-choice-card place-map-open-both" onclick="openBiblicalPlacesMap('${id}')">
      <span class="place-map-choice-title">Abrir mapas</span>
      <span class="place-map-choice-description">Mapa moderno arriba y mapa bíblico abajo, ambos centrados en ${name}.</span>
      <span class="place-map-choice-action">Entrar a los mapas</span>
    </button>
  </section>`;
}

let biblicalPlacesModernMap=null;
let biblicalPlacesBiblicalMap=null;
let biblicalPlacesModernClusters=null;
let biblicalPlacesBiblicalClusters=null;
let biblicalPlacesModernMarkers=new Map();
let biblicalPlacesBiblicalMarkers=new Map();
let biblicalPlacesBiblicalLabels=L?.layerGroup?.()||null;
let activeBiblicalMapPlaceId='';
let biblicalPlacesMapFromDetail=false;

function biblicalMapHasCoords(x){
  return Number.isFinite(x?.coordinates?.latitude)&&Number.isFinite(x?.coordinates?.longitude);
}

function populateBiblicalPlacesMapCategories(){
  const s=document.getElementById('placesMapCategory');
  if(!s)return;
  const current=s.value;
  const cats=[...new Set(
    biblicalPlacesData.filter(biblicalMapHasCoords).map(x=>x.category).filter(Boolean)
  )].sort((a,b)=>a.localeCompare(b,'es'));
  s.innerHTML='<option value="">Todas</option>'+
    cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('');
  s.value=cats.includes(current)?current:'';
}

function biblicalPremiumMarkerIcon(active=false){
  return L.divIcon({
    className:'biblical-leaflet-marker-shell',
    html:`<span class="biblical-leaflet-marker${active?' active':''}"><i></i></span>`,
    iconSize:[30,38],
    iconAnchor:[15,36],
    popupAnchor:[0,-34]
  });
}

function biblicalPremiumClusterIcon(cluster){
  const n=cluster.getChildCount();
  return L.divIcon({
    className:'biblical-cluster-shell',
    html:`<span class="biblical-cluster"><strong>${n}</strong></span>`,
    iconSize:[44,44]
  });
}

const BIBLICAL_MAJOR_NAMES=new Set([
  'Jerusalén','Belén','Nazaret','Capernaúm','Jericó','Betania','Caná','Betsaida',
  'Corazín','Damasco','Antioquía','Egipto','Sinaí','Mar de Galilea','Río Jordán',
  'Judea','Samaria','Galilea','Asia Menor','Roma','Corinto','Éfeso','Cesarea',
  'Cesarea de Filipo','Tiro','Sidón','Hebrón','Beerseba','Siquem','Bet-el',
  'Babilonia','Nínive'
]);

function createBiblicalPlacesLeafletMap(elementId,mode){
  const el=document.getElementById(elementId);
  if(!el)return null;
  const map=L.map(el,{
    zoomControl:true,
    minZoom:3,
    maxZoom:19,
    worldCopyJump:true,
    preferCanvas:true
  }).setView([31.8,35.15],8);

  const cfg=mode==='modern'
    ?{
      url:'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution:'© OpenStreetMap contributors © CARTO'
    }
    :{
      url:'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
      attribution:'© OpenStreetMap contributors © CARTO'
    };

  L.tileLayer(cfg.url,{
    subdomains:'abcd',
    maxZoom:20,
    attribution:cfg.attribution,
    detectRetina:false
  }).addTo(map);

  return map;
}

function ensureBiblicalLeafletMaps(){
  const loading=document.getElementById('placesMapLoading');
  if(typeof L==='undefined'){
    if(loading){
      loading.textContent='No se pudieron cargar los mapas. Comprueba la conexión a Internet.';
      loading.classList.remove('hidden');
    }
    return false;
  }

  if(!biblicalPlacesModernMap){
    biblicalPlacesModernMap=createBiblicalPlacesLeafletMap('placesLeafletMapModern','modern');
    if(!biblicalPlacesModernMap)return false;
    biblicalPlacesModernClusters=L.markerClusterGroup({
      showCoverageOnHover:false,
      spiderfyOnMaxZoom:true,
      removeOutsideVisibleBounds:true,
      chunkedLoading:true,
      maxClusterRadius:48,
      iconCreateFunction:biblicalPremiumClusterIcon
    });
    biblicalPlacesModernMap.addLayer(biblicalPlacesModernClusters);
    biblicalPlacesModernMap.on('click',()=>document.getElementById('placesMapCard')?.classList.add('hidden'));
  }

  if(!biblicalPlacesBiblicalMap){
    biblicalPlacesBiblicalMap=createBiblicalPlacesLeafletMap('placesLeafletMapBiblical','biblical');
    if(!biblicalPlacesBiblicalMap)return false;
    biblicalPlacesBiblicalClusters=L.markerClusterGroup({
      showCoverageOnHover:false,
      spiderfyOnMaxZoom:true,
      removeOutsideVisibleBounds:true,
      chunkedLoading:true,
      maxClusterRadius:48,
      iconCreateFunction:biblicalPremiumClusterIcon
    });
    biblicalPlacesBiblicalMap.addLayer(biblicalPlacesBiblicalClusters);
    biblicalPlacesBiblicalLabels=L.layerGroup().addTo(biblicalPlacesBiblicalMap);
    biblicalPlacesBiblicalMap.on('click',()=>document.getElementById('placesMapCard')?.classList.add('hidden'));
    biblicalPlacesBiblicalMap.on('zoomend',()=>{
      updateBiblicalMarkerLabels();
      renderBiblicalAtlasLabels();
    });
    biblicalPlacesBiblicalMap.on('moveend',renderBiblicalAtlasLabels);
  }

  loading?.classList.add('hidden');
  return true;
}


const BIBLICAL_ATLAS_LABELS=[
  // Grandes territorios: visibles desde muy lejos.
  {name:'ITALIA',lat:42.2,lon:12.6,minZoom:3,maxZoom:6,type:'territory'},
  {name:'GRECIA',lat:39.2,lon:22.2,minZoom:3,maxZoom:7,type:'territory'},
  {name:'ASIA MENOR',lat:39.2,lon:31.7,minZoom:3,maxZoom:7,type:'territory'},
  {name:'EGIPTO',lat:27.6,lon:30.5,minZoom:3,maxZoom:7,type:'territory'},
  {name:'SIRIA',lat:34.8,lon:38.2,minZoom:3,maxZoom:7,type:'territory'},
  {name:'MESOPOTAMIA',lat:34.0,lon:44.2,minZoom:3,maxZoom:7,type:'territory'},
  {name:'ARABIA',lat:27.4,lon:40.9,minZoom:3,maxZoom:7,type:'territory'},
  {name:'MACEDONIA',lat:41.0,lon:22.2,minZoom:4,maxZoom:8,type:'territory'},
  {name:'ACAYA',lat:38.1,lon:22.5,minZoom:5,maxZoom:14,type:'region'},
  {name:'FENICIA',lat:33.8,lon:35.4,minZoom:5,maxZoom:14,type:'region'},
  {name:'GALILEA',lat:32.8,lon:35.35,minZoom:6,maxZoom:14,type:'region'},
  {name:'SAMARIA',lat:32.2,lon:35.22,minZoom:6,maxZoom:14,type:'region'},
  {name:'JUDEA',lat:31.58,lon:35.16,minZoom:6,maxZoom:14,type:'region'},
  {name:'PEREA',lat:31.85,lon:35.65,minZoom:7,maxZoom:14,type:'region'},
  {name:'DECAPOLIS',lat:32.45,lon:35.82,minZoom:7,maxZoom:14,type:'region'},
  {name:'IDUMEA',lat:30.9,lon:35.05,minZoom:7,maxZoom:14,type:'region'},
  {name:'MOAB',lat:31.25,lon:35.72,minZoom:6,maxZoom:14,type:'region'},
  {name:'AMÓN',lat:31.95,lon:35.93,minZoom:6,maxZoom:14,type:'region'},
  {name:'EDOM',lat:30.35,lon:35.45,minZoom:6,maxZoom:14,type:'region'},

  // Ciudades de referencia y viajes apostólicos.
  {name:'ROMA',lat:41.9028,lon:12.4964,minZoom:4,maxZoom:20,type:'major-city'},
  {name:'CORINTO',lat:37.9386,lon:22.9322,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'ATENAS',lat:37.9838,lon:23.7275,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'TESALÓNICA',lat:40.6401,lon:22.9444,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'FILIPOS',lat:41.0133,lon:24.2861,minZoom:6,maxZoom:20,type:'major-city'},
  {name:'BEREA',lat:40.5244,lon:22.2024,minZoom:6,maxZoom:20,type:'major-city'},
  {name:'ÉFESO',lat:37.9390,lon:27.3410,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'ANTIOQUÍA',lat:36.2021,lon:36.1605,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'DAMASCO',lat:33.5138,lon:36.2765,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'TROAS',lat:39.7586,lon:26.1510,minZoom:6,maxZoom:20,type:'major-city'},
  {name:'MILETO',lat:37.5308,lon:27.2784,minZoom:6,maxZoom:20,type:'major-city'},
  {name:'PATMOS',lat:37.3094,lon:26.5478,minZoom:6,maxZoom:20,type:'major-city'},
  {name:'MALTA',lat:35.9375,lon:14.3754,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'JERUSALÉN',lat:31.778,lon:35.235,minZoom:5,maxZoom:20,type:'major-city'},
  {name:'BELÉN',lat:31.705,lon:35.202,minZoom:8,maxZoom:20,type:'major-city'},
  {name:'NAZARET',lat:32.6996,lon:35.3035,minZoom:7,maxZoom:20,type:'major-city'},
  {name:'CAPERNAÚM',lat:32.8803,lon:35.5750,minZoom:8,maxZoom:20,type:'major-city'},
  {name:'JERICÓ',lat:31.8611,lon:35.4617,minZoom:8,maxZoom:20,type:'major-city'},
  {name:'TIRO',lat:33.2705,lon:35.2038,minZoom:7,maxZoom:20,type:'major-city'},
  {name:'SIDÓN',lat:33.5606,lon:35.3759,minZoom:7,maxZoom:20,type:'major-city'},

  // Aguas principales.
  {name:'Mar Mediterráneo',lat:34.2,lon:29.3,minZoom:3,maxZoom:9,type:'water'},
  {name:'Mar de Galilea',lat:32.81,lon:35.59,minZoom:8,maxZoom:12,type:'water'},
  {name:'Mar Muerto',lat:31.50,lon:35.48,minZoom:7,maxZoom:11,type:'water'}
];

function biblicalAtlasLabelIcon(label){
  const className=`biblical-atlas-label biblical-atlas-${label.type}`;
  return L.divIcon({
    className:'biblical-atlas-label-shell',
    html:`<span class="${className}">${escapeHtml(label.name)}</span>`,
    iconSize:null,
    iconAnchor:[0,0]
  });
}

function renderBiblicalAtlasLabels(){
  if(!biblicalPlacesBiblicalMap||typeof L==='undefined')return;
  if(!biblicalPlacesBiblicalLabels){
    biblicalPlacesBiblicalLabels=L.layerGroup().addTo(biblicalPlacesBiblicalMap);
  }
  biblicalPlacesBiblicalLabels.clearLayers();

  const zoom=biblicalPlacesBiblicalMap.getZoom();
  const bounds=biblicalPlacesBiblicalMap.getBounds().pad(.12);

  BIBLICAL_ATLAS_LABELS.forEach(label=>{
    if(zoom<label.minZoom||zoom>label.maxZoom)return;
    const latlng=L.latLng(label.lat,label.lon);
    if(!bounds.contains(latlng))return;
    L.marker(latlng,{
      icon:biblicalAtlasLabelIcon(label),
      interactive:false,
      keyboard:false,
      zIndexOffset:label.type==='major-city'?700:300
    }).addTo(biblicalPlacesBiblicalLabels);
  });

  // Al acercarse, se añaden todos los nombres de lugares con coordenadas.
  if(zoom>=11){
    const occupied=new Set(
      BIBLICAL_ATLAS_LABELS
        .filter(label=>zoom>=label.minZoom&&zoom<=label.maxZoom)
        .map(label=>normalizePlaceText(label.name))
    );

    biblicalPlacesData
      .filter(biblicalMapHasCoords)
      .filter(place=>bounds.contains([place.coordinates.latitude,place.coordinates.longitude]))
      .forEach(place=>{
        const key=normalizePlaceText(place.name);
        if(occupied.has(key))return;
        occupied.add(key);
        L.marker([place.coordinates.latitude,place.coordinates.longitude],{
          icon:L.divIcon({
            className:'biblical-atlas-label-shell',
            html:`<span class="biblical-atlas-label biblical-atlas-local">${escapeHtml(place.name)}</span>`,
            iconSize:null,
            iconAnchor:[0,0]
          }),
          interactive:false,
          keyboard:false,
          zIndexOffset:200
        }).addTo(biblicalPlacesBiblicalLabels);
      });
  }
}

function updateBiblicalMarkerLabels(){
  if(!biblicalPlacesBiblicalMap)return;
  // Las etiquetas de orientación se gestionan en una capa independiente.
  // Los tooltips antiguos se eliminan para evitar nombres duplicados.
  biblicalPlacesBiblicalMarkers.forEach(marker=>{
    if(marker.getTooltip())marker.unbindTooltip();
  });
}

async function openBiblicalPlacesMap(focusId=''){
  document.getElementById('biblicalPlacesHome')?.classList.add('hidden');
  document.getElementById('biblicalPlaceDetail')?.classList.add('hidden');
  document.getElementById('biblicalPlacesMap')?.classList.remove('hidden');

  await loadBiblicalPlaces();
  populateBiblicalPlacesMapCategories();
  biblicalPlacesMapFromDetail=Boolean(focusId);

  if(!ensureBiblicalLeafletMaps())return;
  renderBiblicalPlacesMap();

  setTimeout(()=>{
    biblicalPlacesModernMap?.invalidateSize();
    biblicalPlacesBiblicalMap?.invalidateSize();
    if(focusId)focusBiblicalPlaceOnMap(focusId);
    else focusBiblicalMapRegion('holyland');
  },180);

  window.scrollTo({top:0,behavior:'smooth'});
}

function closeBiblicalPlacesMap(){
  document.getElementById('biblicalPlacesMap')?.classList.add('hidden');
  document.getElementById('placesMapCard')?.classList.add('hidden');
  activeBiblicalMapPlaceId='';

  if(biblicalPlacesMapFromDetail&&activeBiblicalPlaceId){
    document.getElementById('biblicalPlacesHome')?.classList.add('hidden');
    openBiblicalPlaceDetail(activeBiblicalPlaceId);
  }else{
    document.getElementById('biblicalPlacesHome')?.classList.remove('hidden');
  }

  biblicalPlacesMapFromDetail=false;
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderBiblicalPlacesMap(){
  if(!ensureBiblicalLeafletMaps())return;

  const q=normalizePlaceText(document.getElementById('placesMapSearch')?.value||'');
  const cat=document.getElementById('placesMapCategory')?.value||'';
  const all=biblicalPlacesData.filter(biblicalMapHasCoords);
  const filtered=all.filter(x=>
    (!cat||x.category===cat)&&
    (!q||normalizePlaceText([x.name,x.currentRegion,x.category,x.shortDescription].join(' ')).includes(q))
  );

  const count=document.getElementById('placesMapCount');
  if(count)count.textContent=`${filtered.length} lugares con mapa`;

  biblicalPlacesModernClusters.clearLayers();
  biblicalPlacesBiblicalClusters.clearLayers();
  biblicalPlacesModernMarkers.clear();
  biblicalPlacesBiblicalMarkers.clear();

  filtered.forEach(x=>{
    const coords=[x.coordinates.latitude,x.coordinates.longitude];

    const modernMarker=L.marker(coords,{
      icon:biblicalPremiumMarkerIcon(x.id===activeBiblicalMapPlaceId),
      title:x.name,
      riseOnHover:true
    });
    modernMarker.on('click',()=>selectBiblicalPlaceMapMarker(x.id));
    biblicalPlacesModernMarkers.set(x.id,modernMarker);
    biblicalPlacesModernClusters.addLayer(modernMarker);

    const biblicalMarker=L.marker(coords,{
      icon:biblicalPremiumMarkerIcon(x.id===activeBiblicalMapPlaceId),
      title:x.name,
      riseOnHover:true
    });
    biblicalMarker.on('click',()=>selectBiblicalPlaceMapMarker(x.id));
    biblicalPlacesBiblicalMarkers.set(x.id,biblicalMarker);
    biblicalPlacesBiblicalClusters.addLayer(biblicalMarker);
  });

  updateBiblicalMarkerLabels();
  renderBiblicalAtlasLabels();

  if(q&&filtered.length===1){
    focusBiblicalPlaceOnMap(filtered[0].id);
  }else if(q&&filtered.length>1){
    const bounds=L.latLngBounds(filtered.map(x=>[x.coordinates.latitude,x.coordinates.longitude]));
    biblicalPlacesModernMap.fitBounds(bounds.pad(.18),{maxZoom:12});
    biblicalPlacesBiblicalMap.fitBounds(bounds.pad(.18),{maxZoom:12});
  }
}

function selectBiblicalPlaceMapMarker(id){
  activeBiblicalMapPlaceId=id;

  biblicalPlacesModernMarkers.forEach((marker,key)=>
    marker.setIcon(biblicalPremiumMarkerIcon(key===id))
  );
  biblicalPlacesBiblicalMarkers.forEach((marker,key)=>
    marker.setIcon(biblicalPremiumMarkerIcon(key===id))
  );

  showBiblicalPlacesMapCard(id);
  updateBiblicalMarkerLabels();
}

function showBiblicalPlacesMapCard(id){
  const x=biblicalPlacesData.find(e=>e.id===id);
  const c=document.getElementById('placesMapCard');
  if(!x||!c)return;
  c.innerHTML=`<strong>${escapeHtml(x.name)}</strong>
    <span>${escapeHtml(x.category)} · ${escapeHtml(x.currentRegion)}</span>
    <p>${escapeHtml(x.shortDescription)}</p>
    <button type="button" onclick="openBiblicalPlaceFromMap('${escapeHtml(x.id)}')">Abrir ficha</button>`;
  c.classList.remove('hidden');
  c.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function focusBiblicalPlaceOnMap(id){
  const x=biblicalPlacesData.find(e=>e.id===id);
  if(!x||!biblicalMapHasCoords(x)||!ensureBiblicalLeafletMaps())return;

  activeBiblicalMapPlaceId=id;
  const coords=[x.coordinates.latitude,x.coordinates.longitude];

  biblicalPlacesModernMap.setView(coords,14,{animate:true});
  biblicalPlacesBiblicalMap.setView(coords,14,{animate:true});

  setTimeout(()=>{
    selectBiblicalPlaceMapMarker(id);
  },300);
}

function focusBiblicalMapRegion(region){
  if(!ensureBiblicalLeafletMaps())return;
  const regions={
    holyland:[[29.3,33.8],[33.6,36.7]],
    egypt:[[21.5,24],[32.2,36.3]],
    mesopotamia:[[29,36],[38.5,49]],
    asia:[[35.5,25],[42.5,43]],
    greece:[[34,7],[44.5,25]]
  };
  const bounds=regions[region]||regions.holyland;
  biblicalPlacesModernMap.fitBounds(bounds,{padding:[18,18],animate:true});
  biblicalPlacesBiblicalMap.fitBounds(bounds,{padding:[18,18],animate:true});
}

function zoomBiblicalPlacesMap(factor){
  if(!ensureBiblicalLeafletMaps())return;
  const delta=factor>1?1:-1;
  biblicalPlacesModernMap.setZoom(biblicalPlacesModernMap.getZoom()+delta);
  biblicalPlacesBiblicalMap.setZoom(biblicalPlacesBiblicalMap.getZoom()+delta);
}

function resetBiblicalPlacesMap(){
  focusBiblicalMapRegion('holyland');
}

function openBiblicalPlaceFromMap(id){
  activeBiblicalPlaceId=id;
  document.getElementById('biblicalPlacesMap')?.classList.add('hidden');
  openBiblicalPlaceDetail(id);
}

function showBiblicalPlaceOnMap(id){
  const x=biblicalPlacesData.find(e=>e.id===id);
  if(!x||!biblicalMapHasCoords(x))return;
  openBiblicalPlacesMap(id);
}

function openBiblicalPlaceEditor(id=''){const x=id?biblicalPlacesData.find(e=>e.id===id):null,d=document.getElementById('biblicalPlaceEditDialog');if(!d)return;const set=(n,v='')=>document.getElementById(n).value=v;set('placeEditId',x?.id);set('placeEditName',x?.name);set('placeEditCategory',x?.category);set('placeEditCurrentRegion',x?.currentRegion);set('placeEditFirstAppearance',x?.firstAppearance);set('placeEditShortDescription',x?.shortDescription);set('placeEditBiblicalImportance',x?.biblicalImportance);set('placeEditHistory',x?.history);set('placeEditRelatedPeople',(x?.relatedPeople||[]).join('\n'));set('placeEditJesusRelation',x?.jesusRelation);set('placeEditMainVerses',(x?.mainVerses||[]).join('\n'));set('placeEditCuriosities',(x?.curiosities||[]).join('\n'));set('placeEditLatitude',x?.coordinates?.latitude??'');set('placeEditLongitude',x?.coordinates?.longitude??'');document.getElementById('placeEditDialogTitle').textContent=x?'Editar lugar bíblico':'Añadir lugar bíblico';d.showModal();setTimeout(()=>document.getElementById('placeEditName')?.focus(),80)}
function saveBiblicalPlaceEditor(){const val=n=>document.getElementById(n).value.trim(),id=val('placeEditId'),name=val('placeEditName');if(!name||!val('placeEditCategory')||!val('placeEditShortDescription')){toast('Completa el nombre, la categoría y la descripción breve');return}const previous=id?biblicalPlacesData.find(e=>e.id===id):null,item=placeCleanItem({...(previous||{}),id:id||undefined,name,category:val('placeEditCategory'),currentRegion:val('placeEditCurrentRegion'),firstAppearance:val('placeEditFirstAppearance'),shortDescription:val('placeEditShortDescription'),biblicalImportance:val('placeEditBiblicalImportance'),history:val('placeEditHistory'),relatedPeople:val('placeEditRelatedPeople'),jesusRelation:val('placeEditJesusRelation'),mainVerses:val('placeEditMainVerses'),curiosities:val('placeEditCuriosities'),latitude:val('placeEditLatitude'),longitude:val('placeEditLongitude'),createdAt:previous?.createdAt||Date.now(),updatedAt:Date.now()});const crud=loadPlacesCrud(),baseIds=new Set(biblicalPlacesBase.map(x=>String(x.id)));if(id&&baseIds.has(id))crud.edits[id]=item;else if(id){const at=crud.custom.findIndex(x=>String(x.id)===id);if(at>=0)crud.custom[at]=item;else crud.custom.push(item)}else crud.custom.push(item);savePlacesCrud(crud);rebuildBiblicalPlacesData();renderBiblicalPlaces();document.getElementById('biblicalPlaceEditDialog')?.close();if(id&&activeBiblicalPlaceId===id)openBiblicalPlaceDetail(id);toast(id?'Lugar actualizado':'Lugar añadido')}
function deleteBiblicalPlace(id){const item=biblicalPlacesData.find(x=>x.id===id);if(!item||!confirm(`¿Enviar “${item.name}” a la papelera?`))return;const crud=loadPlacesCrud(),builtin=biblicalPlacesBase.some(x=>String(x.id)===String(id));crud.trash=crud.trash.filter(x=>String(x.id)!==String(id));crud.trash.unshift({...item,_origin:builtin?'builtin':'custom',deletedAt:Date.now()});if(builtin){if(!crud.deleted.includes(id))crud.deleted.push(id)}else crud.custom=crud.custom.filter(x=>String(x.id)!==String(id));savePlacesCrud(crud);rebuildBiblicalPlacesData();closeBiblicalPlaceDetail();renderBiblicalPlaces();toast('Lugar enviado a la papelera')}
function updateBiblicalPlacesTrashCount(){const e=document.getElementById('biblicalPlacesTrashCount');if(e)e.textContent=String(loadPlacesCrud().trash.length)}
function openBiblicalPlacesTrash(){renderBiblicalPlacesTrash();document.getElementById('biblicalPlacesTrashDialog')?.showModal()}
function renderBiblicalPlacesTrash(){const box=document.getElementById('biblicalPlacesTrashList'),trash=loadPlacesCrud().trash;if(!box)return;box.innerHTML=trash.length?trash.map(x=>`<article class="prophecy-trash-item"><div><strong>${escapeHtml(x.name)}</strong><small>${escapeHtml(x.category||'')} · ${escapeHtml(x.currentRegion||'')}</small></div><div><button type="button" onclick="restoreBiblicalPlace('${escapeHtml(x.id)}')">Restaurar</button><button type="button" class="danger" onclick="purgeBiblicalPlace('${escapeHtml(x.id)}')">Eliminar</button></div></article>`).join(''):'<p class="biblical-prophecies-empty">La papelera está vacía.</p>';document.getElementById('emptyBiblicalPlacesTrash').disabled=!trash.length}
function restoreBiblicalPlace(id){const crud=loadPlacesCrud(),at=crud.trash.findIndex(x=>String(x.id)===String(id));if(at<0)return;const item=crud.trash.splice(at,1)[0],restored={...item};delete restored._origin;delete restored.deletedAt;if(item._origin==='builtin'){crud.deleted=crud.deleted.filter(x=>String(x)!==String(id));crud.edits[id]=restored}else{crud.custom=crud.custom.filter(x=>String(x.id)!==String(id));crud.custom.push(restored)}savePlacesCrud(crud);rebuildBiblicalPlacesData();renderBiblicalPlacesTrash();renderBiblicalPlaces();toast('Lugar restaurado')}
function purgeBiblicalPlace(id){if(!confirm('¿Eliminar definitivamente este lugar?'))return;const crud=loadPlacesCrud();crud.trash=crud.trash.filter(x=>String(x.id)!==String(id));savePlacesCrud(crud);renderBiblicalPlacesTrash();toast('Eliminado definitivamente')}
function emptyBiblicalPlacesTrash(){if(!confirm('¿Vaciar definitivamente toda la papelera de Lugares Bíblicos?'))return;const crud=loadPlacesCrud();crud.trash=[];savePlacesCrud(crud);renderBiblicalPlacesTrash();toast('Papelera vaciada')}
function exportBiblicalPlaces(){rebuildBiblicalPlacesData();const blob=new Blob([JSON.stringify(biblicalPlacesData,null,2)],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='biblical-places.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(`${biblicalPlacesData.length} lugares exportados`)}
async function importBiblicalPlaces(event){const file=event.target.files?.[0];event.target.value='';if(!file)return;try{const raw=JSON.parse(await file.text());if(!Array.isArray(raw))throw new Error();const imported=raw.map(placeCleanItem).filter(x=>x.name);if(!confirm(`Se importarán ${imported.length} lugares y sustituirán la colección actual. ¿Continuar?`))return;savePlacesCrud({custom:imported,edits:{},deleted:biblicalPlacesBase.map(x=>x.id),trash:[]});rebuildBiblicalPlacesData();renderBiblicalPlaces();toast('Lugares importados correctamente')}catch(_){toast('El archivo JSON no es válido')}}
function openBiblicalPlacesStats(){rebuildBiblicalPlacesData();const countBy=key=>Object.entries(biblicalPlacesData.reduce((a,x)=>{const k=x[key]||'Sin especificar';a[k]=(a[k]||0)+1;return a},{})).sort((a,b)=>b[1]-a[1]);const categories=countBy('category'),regions=countBy('currentRegion'),withJesus=biblicalPlacesData.filter(x=>x.jesusRelation).length,withCoords=biblicalPlacesData.filter(x=>Number.isFinite(x.coordinates.latitude)&&Number.isFinite(x.coordinates.longitude)).length;document.getElementById('biblicalPlacesStatsContent').innerHTML=`<div class="places-stat-summary"><strong>${biblicalPlacesData.length}</strong><span>Lugares totales</span></div><div class="places-stat-grid"><article><strong>${categories.length}</strong><span>Categorías</span></article><article><strong>${regions.length}</strong><span>Regiones</span></article><article><strong>${withJesus}</strong><span>Relacionados con Jesús</span></article><article><strong>${withCoords}</strong><span>Con coordenadas</span></article></div><h3>Por categoría</h3>${categories.length?`<ul>${categories.map(([k,n])=>`<li><span>${escapeHtml(k)}</span><strong>${n}</strong></li>`).join('')}</ul>`:'<p>Aún no hay datos.</p>'}`;document.getElementById('biblicalPlacesStatsDialog')?.showModal()}


/* V2.8.8 · Volver directamente desde una ficha reconocida al punto exacto del capítulo. */
function returnBiblicalEntityToChapter(){
  if(!biblicalEntityReturnPosition)return;
  document.body.classList.remove('biblical-characters-fullscreen-v2243');
  document.getElementById('biblicalCharacterDetailV2242')?.classList.add('hidden');
  document.getElementById('biblicalCharactersHomeV2242')?.classList.remove('hidden');
  document.getElementById('biblicalCharactersScreen')?.classList.add('hidden');
  document.getElementById('biblicalPlaceDetail')?.classList.add('hidden');
  document.getElementById('biblicalPlacesHome')?.classList.remove('hidden');
  document.getElementById('biblicalPlacesScreen')?.classList.add('hidden');
  document.getElementById('biblicalParableDetail')?.classList.add('hidden');
  document.getElementById('biblicalParablesHome')?.classList.remove('hidden');
  document.getElementById('biblicalParablesScreen')?.classList.add('hidden');
  document.getElementById('biblicalGuideDetail')?.classList.add('hidden');
  document.getElementById('biblicalGuidesHome')?.classList.remove('hidden');
  document.getElementById('biblicalGuidesScreen')?.classList.add('hidden');
  document.querySelector('.app-shell')?.classList.remove('hidden');
  document.getElementById('biblicalEncyclopediaScreen')?.classList.add('hidden');
  document.getElementById('homeScreen')?.classList.add('hidden');
  document.getElementById('readerScreen')?.classList.remove('hidden');
  const saved=biblicalEntityReturnPosition;
  restoreBiblicalEntityPosition();
  requestAnimationFrame(()=>restoreBiblicalEntityPosition());
  setTimeout(()=>restoreBiblicalEntityPosition(),80);
  setTimeout(()=>{restoreBiblicalEntityPosition();biblicalEntityReturnPosition=null;window.__biblicalEntityOpenedFromReader=false;try{sessionStorage.removeItem('biblicalEntityOpenedFromReader')}catch(_){ }},220);
}
window.returnBiblicalEntityToChapter=returnBiblicalEntityToChapter;
function biblicalEntityReturnButton(){return biblicalEntityReturnPosition&&window.__biblicalEntityOpenedFromReader?'<button class="return-to-reader-btn" type="button" onclick="returnBiblicalEntityToChapter()">Volver al capítulo</button>':''}
window.biblicalEntityReturnButton=biblicalEntityReturnButton;
function ensureBiblicalEntityReturnButton(){
  if(!biblicalEntityReturnPosition||!window.__biblicalEntityOpenedFromReader)return;
  const targets=[
    document.querySelector('#biblicalCharacterDetailV2242 .biblical-detail-nav-v288'),
    document.querySelector('#biblicalPlaceDetail .biblical-prophecy-detail-head')
  ].filter(Boolean);
  for(const target of targets){
    if(target.querySelector('.return-to-reader-btn'))continue;
    const button=document.createElement('button');
    button.className='return-to-reader-btn';button.style.cssText='appearance:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;width:auto!important;min-width:0!important;min-height:42px!important;margin-left:auto!important;padding:9px 14px!important;border:1px solid #9a792f!important;border-radius:14px!important;background:linear-gradient(180deg,#2b2c31 0%,#18191d 100%)!important;color:#f5efe4!important;-webkit-text-fill-color:#f5efe4!important;font:800 15px/1.15 Lora,serif!important;text-shadow:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.07),0 4px 12px rgba(0,0,0,.25)!important;white-space:nowrap!important;cursor:pointer!important;';
    button.type='button';
    button.textContent='Volver al capítulo';
    button.addEventListener('click',returnBiblicalEntityToChapter);
    target.appendChild(button);
  }
}
window.ensureBiblicalEntityReturnButton=ensureBiblicalEntityReturnButton;

/* V2.8.7 · Restaurar el punto de lectura al cerrar una ficha reconocida. */
const closeBiblicalCharactersOriginalV287=window.closeBiblicalCharactersV2242;
window.closeBiblicalCharactersV2242=function(){closeBiblicalCharactersOriginalV287?.();if(biblicalEntityReturnPosition){document.getElementById('readerScreen')?.classList.remove('hidden');document.getElementById('homeScreen')?.classList.add('hidden');restoreBiblicalEntityPosition();biblicalEntityReturnPosition=null;window.__biblicalEntityOpenedFromReader=false}};
const closeBiblicalPlacesOriginalV287=window.closeBiblicalPlaces;
window.closeBiblicalPlaces=function(){closeBiblicalPlacesOriginalV287?.();if(biblicalEntityReturnPosition){document.getElementById('readerScreen')?.classList.remove('hidden');document.getElementById('homeScreen')?.classList.add('hidden');restoreBiblicalEntityPosition();biblicalEntityReturnPosition=null;window.__biblicalEntityOpenedFromReader=false}};


/* V3.1.2 · Más y Calendario de festividades */
let biblicalFestivitiesData=[];
let currentBiblicalFestivityId=null;
let biblicalCalendarDate=new Date();

let studyModuleReturnScreen='readerScreen';
let studyModuleReturnPositionV3112=null;

function captureMoreReturnPositionV3112(){
  const readerScreen=document.getElementById('readerScreen');
  const homeScreen=document.getElementById('homeScreen');
  const scrollingElement=document.scrollingElement||document.documentElement;

  if(readerScreen&&!readerScreen.classList.contains('hidden')){
    studyModuleReturnScreen='readerScreen';
    studyModuleReturnPositionV3112={
      readerTop:Math.max(0,reader?.scrollTop||0),
      pageTop:Math.max(0,scrollingElement?.scrollTop||window.scrollY||0),
      pageLeft:Math.max(0,scrollingElement?.scrollLeft||window.scrollX||0)
    };
  }else if(homeScreen&&!homeScreen.classList.contains('hidden')){
    studyModuleReturnScreen='homeScreen';
    studyModuleReturnPositionV3112={
      readerTop:0,
      pageTop:Math.max(0,scrollingElement?.scrollTop||window.scrollY||0),
      pageLeft:Math.max(0,scrollingElement?.scrollLeft||window.scrollX||0)
    };
  }
}

function showStudyModuleScreen(id){
  document.querySelectorAll('.study-module-screen').forEach(el=>el.classList.add('hidden'));
  document.getElementById(id)?.classList.remove('hidden');

  selectionBar?.classList.remove('open');
  actionsPanelToggle?.setAttribute('aria-expanded','false');
  document.body.classList.add('study-module-open');
  window.scrollTo({top:0,left:0,behavior:'auto'});
}

function restoreMoreReturnPositionV3112(){
  const position=studyModuleReturnPositionV3112;
  if(!position)return;

  const apply=()=>{
    const scrollingElement=document.scrollingElement||document.documentElement;
    if(reader)reader.scrollTop=position.readerTop;
    if(scrollingElement){
      scrollingElement.scrollTop=position.pageTop;
      scrollingElement.scrollLeft=position.pageLeft;
    }
  };

  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,80);
  setTimeout(()=>{
    apply();
    studyModuleReturnPositionV3112=null;
  },220);
}

function closeStudyModuleScreens(){
  document.querySelectorAll('.study-module-screen').forEach(el=>el.classList.add('hidden'));
  document.body.classList.remove('study-module-open');

  const target=document.getElementById(studyModuleReturnScreen)||document.getElementById('readerScreen');
  target?.classList.remove('hidden');
  restoreMoreReturnPositionV3112();
}


/* V3.1.14 · Mi camino en la Palabra */
function wordJourneyEscapeV3110(value){
  return String(value??'').replace(/[&<>"']/g,char=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[char]);
}

function wordJourneyFormatDateV3110(timestamp){
  const value=Number(timestamp)||0;
  if(!value)return '—';
  return new Intl.DateTimeFormat('es-ES',{
    day:'2-digit',month:'long',year:'numeric'
  }).format(new Date(value));
}

function wordJourneyMonthKeyV3110(timestamp){
  const date=new Date(Number(timestamp)||0);
  if(!Number.isFinite(date.getTime()))return '';
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
}

function wordJourneyMonthLabelV3110(key){
  const [year,month]=String(key).split('-').map(Number);
  if(!year||!month)return key;
  const text=new Intl.DateTimeFormat('es-ES',{
    month:'long',year:'numeric'
  }).format(new Date(year,month-1,1));
  return text.charAt(0).toUpperCase()+text.slice(1);
}

function wordJourneyMarkedWordsV3110(){
  let count=0;
  try{
    count+=(state.dictionaryCustom||[]).filter(item=>item&&item.resaltar===true).length;
    count+=Object.values(state.dictionaryEdits||{}).filter(item=>item&&item.resaltar===true).length;
  }catch(_){}
  return count;
}

function wordJourneyStatsV3110(){
  const progress=chapterReadingProgressV316&&typeof chapterReadingProgressV316==='object'
    ?chapterReadingProgressV316:{};
  const entries=Object.entries(progress);
  const completedEntries=entries.filter(([,item])=>item&&item.completed);
  const inProgressEntries=entries.filter(([,item])=>item&&!item.completed&&(Number(item.read)||0)>0);
  const totalCompletions=completedEntries.reduce(
    (sum,[,item])=>sum+Math.max(1,Number(item.readCount)||1),0
  );
  const rereads=Math.max(0,totalCompletions-completedEntries.length);

  const completedByBook={};
  for(const [key] of completedEntries){
    const separator=key.lastIndexOf(':');
    const bookKey=separator>=0?key.slice(0,separator):key;
    completedByBook[bookKey]=(completedByBook[bookKey]||0)+1;
  }

  const booksCompleted=(state.books||[]).filter(book=>{
    const chapters=Math.max(0,Number(book.chapters)||0);
    return chapters>0&&(completedByBook[book.key]||0)>=chapters;
  }).length;

  const months={};
  for(const [key,item] of completedEntries){
    const timestamp=Number(item.lastCompletedAt)||Number(item.firstCompletedAt)||Number(item.updatedAt)||0;
    /* Los libros sincronizados históricamente no tienen una fecha real.
       No deben aparecer como enero de 1970 en la cronología. */
    if(timestamp<=0)continue;
    const monthKey=wordJourneyMonthKeyV3110(timestamp);
    if(!monthKey)continue;
    if(!months[monthKey]){
      months[monthKey]={
        chapters:0,
        readings:0,
        books:new Set(),
        last:timestamp
      };
    }
    const separator=key.lastIndexOf(':');
    const bookKey=separator>=0?key.slice(0,separator):key;
    months[monthKey].chapters+=1;
    months[monthKey].readings+=Math.max(1,Number(item.readCount)||1);
    months[monthKey].books.add(bookKey);
    months[monthKey].last=Math.max(months[monthKey].last,timestamp);
  }

  return{
    completed:completedEntries.length,
    inProgress:inProgressEntries.length,
    rereads,
    booksCompleted,
    months
  };
}

function wordJourneyMetricV3110(value,label){
  return `<div class="word-journey-metric">
    <strong>${wordJourneyEscapeV3110(value)}</strong>
    <span>${wordJourneyEscapeV3110(label)}</span>
  </div>`;
}

function renderMyWordJourneyV3110(){
  const container=document.getElementById('myWordJourneyContent');
  if(!container)return;

  loadChapterReadingProgressV316();
  const stats=wordJourneyStatsV3110();
  const totalChapters=(state.books||[]).reduce((sum,book)=>sum+(Number(book.chapters)||0),0)||1189;
  const completedPercent=Math.max(0,Math.min(100,stats.completed/Math.max(1,totalChapters)*100));
  const savedVerses=Object.keys(state.favorites||{}).length;
  const highlights=Object.keys(state.highlights||{}).length;
  const explanations=Object.keys(state.explanations||{}).length;
  const markedWords=wordJourneyMarkedWordsV3110();

  const monthEntries=Object.entries(stats.months).sort(([a],[b])=>b.localeCompare(a));
  const monthsHtml=monthEntries.length?monthEntries.map(([key,month])=>{
    const bookNames=[...month.books].map(bookKey=>{
      const book=(state.books||[]).find(item=>item.key===bookKey);
      return book?displayBook(book):bookKey.replaceAll('_',' ');
    });
    const rereads=Math.max(0,month.readings-month.chapters);
    return `<article class="word-journey-month">
      <div class="word-journey-month-head">
        <h2>${wordJourneyEscapeV3110(wordJourneyMonthLabelV3110(key))}</h2>
        <span>${month.chapters} ${month.chapters===1?'capítulo terminado':'capítulos terminados'}</span>
      </div>
      <div class="word-journey-month-line"><span style="width:${Math.max(4,Math.min(100,month.chapters/Math.max(1,totalChapters)*1200))}%"></span></div>
      <p><strong>Libros recorridos:</strong> ${wordJourneyEscapeV3110(bookNames.join(', ')||'—')}</p>
      <div class="word-journey-month-stats">
        <span>Finalizaciones: <strong>${month.readings}</strong></span>
        <span>Relecturas: <strong>${rereads}</strong></span>
        <span>Última finalización: <strong>${wordJourneyEscapeV3110(wordJourneyFormatDateV3110(month.last))}</strong></span>
      </div>
    </article>`;
  }).join(''):`<div class="word-journey-empty">
    Aún no hay capítulos terminados. Cuando completes uno, aparecerá aquí automáticamente.
  </div>`;

  container.innerHTML=`
    <section class="word-journey-hero">
      <p>Has recorrido</p>
      <strong>${stats.completed} de ${totalChapters} capítulos</strong>
      <div class="word-journey-progress" aria-label="${Math.round(completedPercent)} por ciento completado">
        <span style="width:${completedPercent}%"></span>
      </div>
      <small>${Math.round(completedPercent)} % de la Biblia</small>
    </section>

    <section class="word-journey-section">
      <h2>Resumen general</h2>
      <div class="word-journey-metrics">
        ${wordJourneyMetricV3110(stats.booksCompleted,'Libros completados')}
        ${wordJourneyMetricV3110(stats.completed,'Capítulos completados')}
        ${wordJourneyMetricV3110(stats.inProgress,'Capítulos en curso')}
        ${wordJourneyMetricV3110(stats.rereads,'Relecturas')}
        ${wordJourneyMetricV3110(savedVerses,'Versículos guardados')}
        ${wordJourneyMetricV3110(highlights,'Subrayados')}
        ${wordJourneyMetricV3110(explanations,'Explicaciones')}
        ${wordJourneyMetricV3110(markedWords,'Palabras marcadas')}
      </div>
    </section>

    <section class="word-journey-section">
      <h2>Tu recorrido por meses</h2>
      <div class="word-journey-months">${monthsHtml}</div>
    </section>`;
}

function openMyWordJourneyV3110(){
  showStudyModuleScreen('myWordJourneyScreen');
  renderMyWordJourneyV3110();
}

function closeMyWordJourneyV3110(){
  document.getElementById('myWordJourneyScreen')?.classList.add('hidden');
  document.getElementById('moreFunctionsScreen')?.classList.remove('hidden');
  document.body.classList.add('study-module-open');
  window.scrollTo({top:0,behavior:'auto'});
}

window.openMyWordJourneyV3110=openMyWordJourneyV3110;
window.closeMyWordJourneyV3110=closeMyWordJourneyV3110;

function openMoreFunctions(){
  /* V3.1.14: el punto de lectura se captura exactamente al entrar en Más. */
  captureMoreReturnPositionV3112();
  showStudyModuleScreen('moreFunctionsScreen');
}
function closeMoreFunctions(){closeStudyModuleScreens()}
function openBiblicalCalendar(){
  showStudyModuleScreen('biblicalCalendarScreen');
  renderBiblicalCalendar(new Date());
  updateBiblicalCalendarAlert();
}
function closeBiblicalCalendar(){
  document.getElementById('biblicalCalendarScreen')?.classList.add('hidden');
  document.getElementById('moreFunctionsScreen')?.classList.remove('hidden');
  document.body.classList.add('study-module-open');
  window.scrollTo({top:0,behavior:'auto'});
}
function padBiblicalCalendar(n){return String(n).padStart(2,'0')}
function biblicalCalendarKey(d){return `${d.getFullYear()}-${padBiblicalCalendar(d.getMonth()+1)}-${padBiblicalCalendar(d.getDate())}`}
function addBiblicalCalendarDays(date,days){const d=new Date(date);d.setDate(d.getDate()+days);return d}
function sameBiblicalCalendarDay(a,b){return biblicalCalendarKey(a)===biblicalCalendarKey(b)}
function formatBiblicalCalendarDate(d){
  return new Intl.DateTimeFormat('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(d);
}
function westernEasterDate(y){
  const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25);
  const g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4;
  const l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451);
  const month=Math.floor((h+l-7*m+114)/31)-1,day=((h+l-7*m+114)%31)+1;
  return new Date(y,month,day);
}
function orthodoxEasterDate(y){
  const a=y%4,b=y%7,c=y%19,d=(19*c+15)%30,e=(2*a+4*b-d+34)%7;
  const month=Math.floor((d+e+114)/31)-1,day=((d+e+114)%31)+1;
  const julian=new Date(y,month,day);
  julian.setDate(julian.getDate()+13);
  return julian;
}
function addBiblicalCalendarEvent(map,date,trad,title,desc,id){
  const k=biblicalCalendarKey(date);
  (map[k]||(map[k]=[])).push({trad,title,desc,id});
}
function addBiblicalFixedEvent(map,y,month,day,trad,title,desc,id){
  addBiblicalCalendarEvent(map,new Date(y,month-1,day),trad,title,desc,id);
}
function buildBiblicalCalendarYear(y){
  const map={},west=westernEasterDate(y),east=orthodoxEasterDate(y);
  addBiblicalFixedEvent(map,y,1,6,'catolica','Epifanía','Manifestación de Cristo a las naciones.','epifania_teofania');
  addBiblicalFixedEvent(map,y,1,6,'protestante','Epifanía','Manifestación de Cristo a las naciones.','epifania_teofania');
  addBiblicalFixedEvent(map,y,1,7,'ortodoxa','Navidad ortodoxa','Celebración de la Natividad de Cristo.','navidad');
  addBiblicalFixedEvent(map,y,1,19,'etiope','Timkat','Celebración etíope de la Teofanía y del bautismo de Cristo.','epifania_teofania');
  addBiblicalFixedEvent(map,y,3,25,'catolica','Anunciación','El anuncio del ángel Gabriel a María.','anunciacion');
  addBiblicalFixedEvent(map,y,3,25,'ortodoxa','Anunciación','El anuncio del ángel Gabriel a María.','anunciacion');
  addBiblicalFixedEvent(map,y,6,24,'catolica','Natividad de San Juan Bautista','Nacimiento del precursor de Cristo.','juan_bautista_natividad');
  addBiblicalFixedEvent(map,y,6,29,'catolica','San Pedro y San Pablo','Memoria de los apóstoles Pedro y Pablo.','pedro_pablo');
  addBiblicalFixedEvent(map,y,8,6,'catolica','Transfiguración del Señor','Cristo manifiesta su gloria ante los discípulos.','transfiguracion');
  addBiblicalFixedEvent(map,y,8,15,'catolica','Asunción de María','Culminación de la vida terrenal de María.','asuncion_dormicion');
  addBiblicalFixedEvent(map,y,8,15,'ortodoxa','Dormición de María','Culminación de la vida terrenal de María.','asuncion_dormicion');
  addBiblicalFixedEvent(map,y,8,29,'catolica','Martirio de San Juan Bautista','Memoria del martirio del precursor.','martirio_juan_bautista');
  addBiblicalFixedEvent(map,y,9,14,'catolica','Exaltación de la Santa Cruz','Memoria de la cruz de Cristo.','exaltacion_cruz');
  addBiblicalFixedEvent(map,y,11,1,'catolica','Todos los Santos','Memoria de todos los santos.','todos_los_santos');
  addBiblicalFixedEvent(map,y,11,30,'catolica','San Andrés','Memoria del apóstol Andrés.','san_andres');
  addBiblicalFixedEvent(map,y,12,25,'catolica','Navidad','Nacimiento de Jesucristo.','navidad');
  addBiblicalFixedEvent(map,y,12,25,'protestante','Navidad','Nacimiento de Jesucristo.','navidad');
  addBiblicalFixedEvent(map,y,12,27,'catolica','San Juan Evangelista','Memoria del apóstol y evangelista Juan.','san_juan_evangelista');

  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,-46),'catolica','Miércoles de Ceniza','Comienzo de la Cuaresma occidental.','miercoles_ceniza');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,-7),'catolica','Domingo de Ramos','Entrada de Cristo en Jerusalén.','domingo_ramos');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,-7),'protestante','Domingo de Ramos','Entrada de Cristo en Jerusalén.','domingo_ramos');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,-2),'catolica','Viernes Santo','Pasión y muerte de Cristo.','viernes_santo');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,-2),'protestante','Viernes Santo','La cruz de Jesucristo.','viernes_santo');
  addBiblicalCalendarEvent(map,west,'catolica','Pascua de Resurrección','Cristo ha resucitado.','resurreccion');
  addBiblicalCalendarEvent(map,west,'protestante','Pascua de Resurrección','Cristo ha resucitado.','resurreccion');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,39),'catolica','Ascensión del Señor','Cristo asciende al Padre.','ascension');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,39),'protestante','Ascensión del Señor','Cristo asciende al Padre.','ascension');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,49),'catolica','Pentecostés','Venida del Espíritu Santo sobre la Iglesia.','pentecostes');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(west,49),'protestante','Pentecostés','Venida del Espíritu Santo.','pentecostes');

  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,-55),'etiope','Gran Ayuno','Preparación hacia Fasika.','gran_ayuno');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,-48),'ortodoxa','Gran Cuaresma','Preparación hacia la Santa Pascua.','gran_cuaresma');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,-7),'etiope','Domingo de Ramos','Entrada de Cristo en Jerusalén.','domingo_ramos');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,-7),'ortodoxa','Domingo de Ramos','Entrada de Cristo en Jerusalén.','domingo_ramos');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,-2),'etiope','Viernes Santo','Pasión y muerte de Cristo.','viernes_santo');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,-2),'ortodoxa','Viernes Santo','Pasión y muerte de Cristo.','viernes_santo');
  addBiblicalCalendarEvent(map,east,'etiope','Fasika','Pascua etíope de Resurrección.','fasika');
  addBiblicalCalendarEvent(map,east,'ortodoxa','Pascua ortodoxa','Cristo ha resucitado.','resurreccion');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,39),'etiope','Ascensión del Señor','Cristo asciende al Padre.','ascension');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,39),'ortodoxa','Ascensión del Señor','Cristo asciende al Padre.','ascension');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,49),'etiope','Pentecostés','Venida del Espíritu Santo sobre la Iglesia.','pentecostes');
  addBiblicalCalendarEvent(map,addBiblicalCalendarDays(east,49),'ortodoxa','Pentecostés','Venida del Espíritu Santo.','pentecostes');
  return map;
}
function getBiblicalCalendarEvents(date){
  const y=date.getFullYear();
  const all=Object.assign({},buildBiblicalCalendarYear(y-1),buildBiblicalCalendarYear(y),buildBiblicalCalendarYear(y+1));
  return all[biblicalCalendarKey(date)]||[];
}
const biblicalTraditions=[
  ['etiope','Ortodoxo etíope'],
  ['ortodoxa','Ortodoxo'],
  ['protestante','Protestante'],
  ['catolica','Católico']
];
function renderBiblicalCalendarTradition(events,key,label){
  const matches=events.filter(e=>e.trad===key);
  let html=`<section class="biblical-calendar-card"><h2>${escapeHtml(label)}</h2>`;
  if(!matches.length)html+='<p class="biblical-calendar-empty">Sin festividad especial.</p>';
  for(const event of matches){
    html+=`<button class="biblical-calendar-event" type="button" onclick="openBiblicalFestivityDetail('${event.id||''}')">
      <strong>${escapeHtml(event.title)}</strong>
      <span>${escapeHtml(event.desc||'')}</span>
    </button>`;
  }
  return html+'</section>';
}
function renderBiblicalCalendar(date){
  biblicalCalendarDate=new Date(date);
  const box=document.getElementById('biblicalCalendarContent');
  if(!box)return;
  const events=getBiblicalCalendarEvents(biblicalCalendarDate);
  const when=sameBiblicalCalendarDay(biblicalCalendarDate,new Date())?'Hoy':'Fecha';
  box.innerHTML=`<header class="biblical-calendar-hero">
      <h1>Calendario cristiano</h1>
      <p>${when} · ${escapeHtml(formatBiblicalCalendarDate(biblicalCalendarDate))}</p>
    </header>
    <div class="biblical-calendar-grid">${biblicalTraditions.map(([k,l])=>renderBiblicalCalendarTradition(events,k,l)).join('')}</div>
    <p class="biblical-calendar-note">Las fechas móviles se calculan según el cómputo occidental u oriental. Algunas iglesias pueden variar celebraciones locales.</p>`;
}
async function loadBiblicalFestivities(){
  if(biblicalFestivitiesData.length)return biblicalFestivitiesData;
  try{
    const response=await fetch(`biblical-festivities.json?v=${APP_VERSION}`,{cache:'no-store'});
    biblicalFestivitiesData=await response.json();
  }catch(error){
    console.error(error);
    biblicalFestivitiesData=[];
  }
  return biblicalFestivitiesData;
}
function emptyBiblicalFestivityStore(){
  return{schema:2,custom:[],edits:{},deleted:[]};
}

function biblicalFestivityStore(){
  try{
    const raw=JSON.parse(localStorage.getItem('biblia_festividades_v310')||'null');

    if(!raw||typeof raw!=='object')return emptyBiblicalFestivityStore();

    // Migración automática desde la estructura inicial:
    // {festividadId:{notes,passageTexts}}
    if(!Array.isArray(raw.custom)||!raw.edits||!Array.isArray(raw.deleted)){
      const migrated=emptyBiblicalFestivityStore();
      for(const [id,value] of Object.entries(raw)){
        if(!value||typeof value!=='object')continue;
        migrated.edits[id]={
          notes:value.notes||'',
          passageTexts:value.passageTexts||{}
        };
      }
      saveBiblicalFestivityStore(migrated);
      return migrated;
    }

    return{
      schema:2,
      custom:Array.isArray(raw.custom)?raw.custom:[],
      edits:raw.edits&&typeof raw.edits==='object'?raw.edits:{},
      deleted:Array.isArray(raw.deleted)?raw.deleted:[]
    };
  }catch(_){
    return emptyBiblicalFestivityStore();
  }
}

function saveBiblicalFestivityStore(store){
  localStorage.setItem('biblia_festividades_v310',JSON.stringify({
    schema:2,
    custom:Array.isArray(store?.custom)?store.custom:[],
    edits:store?.edits&&typeof store.edits==='object'?store.edits:{},
    deleted:Array.isArray(store?.deleted)?store.deleted:[]
  }));
}

function normalizeBiblicalFestivityPassages(item){
  if(Array.isArray(item?.passageItems)){
    return item.passageItems
      .map(p=>({
        id:String(p?.id||`passage_${Date.now()}_${Math.random().toString(36).slice(2,7)}`),
        reference:String(p?.reference||'').trim(),
        text:String(p?.text||'')
      }))
      .filter(p=>p.reference||p.text);
  }

  return (item?.passages||[]).map((reference,index)=>({
    id:`legacy_${index}_${String(reference).replace(/\W+/g,'_')}`,
    reference:String(reference||''),
    text:String(item?.passageTexts?.[reference]||'')
  }));
}

function mergedBiblicalFestivity(item){
  const store=biblicalFestivityStore();
  const edit=store.edits[item.id]||{};
  const merged={...item,...edit};

  // Compatibilidad con ediciones antiguas que solo guardaban passageTexts.
  if(!Array.isArray(merged.passageItems)){
    merged.passageItems=normalizeBiblicalFestivityPassages({
      ...merged,
      passageTexts:{...(item.passageTexts||{}),...(edit.passageTexts||{})}
    });
  }else{
    merged.passageItems=normalizeBiblicalFestivityPassages(merged);
  }

  return merged;
}

function getAllBiblicalFestivities(){
  const store=biblicalFestivityStore();
  const deleted=new Set(store.deleted);
  const base=biblicalFestivitiesData
    .filter(item=>!deleted.has(item.id))
    .map(mergedBiblicalFestivity);
  const custom=store.custom
    .filter(item=>item&&item.id&&!deleted.has(item.id))
    .map(item=>({...item,custom:true,passageItems:normalizeBiblicalFestivityPassages(item)}));

  return [...base,...custom].sort((a,b)=>
    String(a.title||'').localeCompare(String(b.title||''),'es',{sensitivity:'base'})
  );
}

function findBiblicalFestivity(id){
  return getAllBiblicalFestivities().find(item=>item.id===id)||null;
}

async function openBiblicalFestivityLibrary(){
  await loadBiblicalFestivities();
  const dialog=document.getElementById('biblicalFestivityDialog');
  backToBiblicalFestivityList();
  dialog?.showModal();
}

function closeBiblicalFestivityDialog(){
  document.getElementById('biblicalFestivityDialog')?.close();
}

function setBiblicalFestivityDialogView(view){
  document.getElementById('biblicalFestivityListView')?.classList.toggle('hidden',view!=='list');
  document.getElementById('biblicalFestivityDetailView')?.classList.toggle('hidden',view!=='detail');
  document.getElementById('biblicalFestivityEditorView')?.classList.toggle('hidden',view!=='editor');
}

function backToBiblicalFestivityList(){
  currentBiblicalFestivityId=null;
  setBiblicalFestivityDialogView('list');
  renderBiblicalFestivityLibrary();
}

async function renderBiblicalFestivityLibrary(){
  await loadBiblicalFestivities();
  const box=document.getElementById('biblicalFestivityList');
  if(!box)return;

  const q=normalizeText(document.getElementById('biblicalFestivitySearch')?.value||'');
  const rows=getAllBiblicalFestivities().filter(f=>
    !q||normalizeText(`${f.title} ${f.date} ${f.summary} ${f.meaning}`).includes(q)
  );

  box.innerHTML=rows.map(f=>`<button class="biblical-festivity-row" type="button" onclick="openBiblicalFestivityDetail('${f.id}')">
    <strong>${escapeHtml(f.title)}</strong>
    <span>${escapeHtml(f.date||'Sin fecha indicada')}${f.custom?' · Personalizada':''}</span>
  </button>`).join('')||'<p class="biblical-calendar-empty">No se encontraron festividades.</p>';
}

function renderBiblicalFestivityPassageCard(passage,index){
  return `<article class="biblical-festivity-passage-card">
    <div class="biblical-festivity-passage-head">
      <h3>${escapeHtml(passage.reference||`Pasaje ${index+1}`)}</h3>
      <div class="festivity-inline-actions">
        <button class="btn soft" type="button" onclick="editBiblicalFestivityPassage('${passage.id}')">Editar</button>
        <button class="btn danger" type="button" onclick="deleteBiblicalFestivityPassage('${passage.id}')">Eliminar</button>
      </div>
    </div>
    <p>${escapeHtml(passage.text||'Sin texto añadido.')}</p>
  </article>`;
}

async function openBiblicalFestivityDetail(id){
  await loadBiblicalFestivities();
  const f=findBiblicalFestivity(id);
  if(!f){
    backToBiblicalFestivityList();
    return;
  }

  currentBiblicalFestivityId=id;
  const dialog=document.getElementById('biblicalFestivityDialog');
  if(dialog&&!dialog.open)dialog.showModal();
  setBiblicalFestivityDialogView('detail');

  const box=document.getElementById('biblicalFestivityDetail');
  const passages=normalizeBiblicalFestivityPassages(f);

  box.innerHTML=`<header class="biblical-festivity-detail-head">
      <div>
        <h2>${escapeHtml(f.title)}</h2>
        <p>${escapeHtml(f.date||'Sin fecha indicada')}</p>
      </div>
      <div class="festivity-detail-actions">
        <button class="btn soft" type="button" onclick="openBiblicalFestivityEditor('${f.id}')">Editar</button>
        <button class="btn danger" type="button" onclick="deleteBiblicalFestivity('${f.id}')">Eliminar</button>
      </div>
    </header>

    <section class="biblical-festivity-section">
      <h3>Explicación</h3>
      <p>${escapeHtml(f.summary||'Sin explicación añadida.')}</p>
    </section>

    <section class="biblical-festivity-section">
      <h3>Significado</h3>
      <p>${escapeHtml(f.meaning||'Sin significado añadido.')}</p>
    </section>

    <section class="biblical-festivity-section">
      <h3>Notas</h3>
      <p>${escapeHtml(f.notes||'Sin notas añadidas.')}</p>
    </section>

    <section class="biblical-festivity-section">
      <div class="festivity-section-title-row">
        <h3>Pasajes bíblicos</h3>
        <button class="btn primary" type="button" onclick="addBiblicalFestivityPassage()">Añadir pasaje</button>
      </div>
      <div class="biblical-festivity-passage-list">
        ${passages.map(renderBiblicalFestivityPassageCard).join('')||'<p class="biblical-calendar-empty">No hay pasajes añadidos.</p>'}
      </div>
    </section>`;
}

function newBiblicalFestivityId(){
  return`festividad_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
}

function newBiblicalPassageId(){
  return`pasaje_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
}

function openBiblicalFestivityEditor(id=''){
  const existing=id?findBiblicalFestivity(id):null;
  currentBiblicalFestivityId=existing?.id||null;
  setBiblicalFestivityDialogView('editor');

  const f=existing||{
    id:newBiblicalFestivityId(),
    title:'',
    date:'',
    summary:'',
    meaning:'',
    notes:'',
    passageItems:[],
    custom:true
  };

  const box=document.getElementById('biblicalFestivityEditor');
  box.dataset.festivityId=f.id;
  box.dataset.isNew=existing?'0':'1';

  box.innerHTML=`<header class="biblical-festivity-editor-head">
      <h2>${existing?'Editar festividad':'Añadir festividad'}</h2>
      <p>Completa la plantilla. Podrás añadir los pasajes después de guardar.</p>
    </header>

    <label class="festivity-form-field">
      <span>Nombre de la festividad</span>
      <input id="festivityEditorTitle" type="text" value="${escapeHtml(f.title||'')}" placeholder="Ej.: Fiesta de la Presentación">
    </label>

    <label class="festivity-form-field">
      <span>Fecha o periodo</span>
      <input id="festivityEditorDate" type="text" value="${escapeHtml(f.date||'')}" placeholder="Ej.: 2 de febrero o Fecha móvil">
    </label>

    <label class="festivity-form-field">
      <span>Explicación</span>
      <textarea id="festivityEditorSummary" placeholder="Explica brevemente qué se celebra.">${escapeHtml(f.summary||'')}</textarea>
    </label>

    <label class="festivity-form-field">
      <span>Significado bíblico</span>
      <textarea id="festivityEditorMeaning" placeholder="Describe su significado espiritual y bíblico.">${escapeHtml(f.meaning||'')}</textarea>
    </label>

    <label class="festivity-form-field">
      <span>Notas</span>
      <textarea id="festivityEditorNotes" placeholder="Añade tus notas personales.">${escapeHtml(f.notes||'')}</textarea>
    </label>

    <div class="festivity-editor-footer">
      <button class="btn soft" type="button" onclick="cancelBiblicalFestivityEditor()">Cancelar</button>
      <button class="btn primary" type="button" onclick="saveBiblicalFestivityEditor()">Guardar festividad</button>
    </div>`;
}

function cancelBiblicalFestivityEditor(){
  if(currentBiblicalFestivityId&&findBiblicalFestivity(currentBiblicalFestivityId)){
    openBiblicalFestivityDetail(currentBiblicalFestivityId);
  }else{
    backToBiblicalFestivityList();
  }
}

function readBiblicalFestivityEditor(){
  const box=document.getElementById('biblicalFestivityEditor');
  return{
    id:box?.dataset.festivityId||newBiblicalFestivityId(),
    isNew:box?.dataset.isNew==='1',
    title:document.getElementById('festivityEditorTitle')?.value.trim()||'',
    date:document.getElementById('festivityEditorDate')?.value.trim()||'',
    summary:document.getElementById('festivityEditorSummary')?.value.trim()||'',
    meaning:document.getElementById('festivityEditorMeaning')?.value.trim()||'',
    notes:document.getElementById('festivityEditorNotes')?.value||''
  };
}

function saveBiblicalFestivityEditor(){
  const values=readBiblicalFestivityEditor();
  if(!values.title){
    toast('Escribe el nombre de la festividad');
    document.getElementById('festivityEditorTitle')?.focus();
    return;
  }

  const store=biblicalFestivityStore();
  const existing=findBiblicalFestivity(values.id);
  const passages=existing?normalizeBiblicalFestivityPassages(existing):[];

  if(values.isNew){
    store.custom.push({
      id:values.id,
      title:values.title,
      date:values.date,
      summary:values.summary,
      meaning:values.meaning,
      notes:values.notes,
      passageItems:passages,
      custom:true,
      createdAt:new Date().toISOString(),
      updatedAt:new Date().toISOString()
    });
  }else{
    const customIndex=store.custom.findIndex(item=>item.id===values.id);

    if(customIndex>=0){
      store.custom[customIndex]={
        ...store.custom[customIndex],
        ...values,
        passageItems:passages,
        custom:true,
        updatedAt:new Date().toISOString()
      };
      delete store.custom[customIndex].isNew;
    }else{
      store.edits[values.id]={
        ...(store.edits[values.id]||{}),
        title:values.title,
        date:values.date,
        summary:values.summary,
        meaning:values.meaning,
        notes:values.notes,
        passageItems:passages,
        updatedAt:new Date().toISOString()
      };
    }
  }

  saveBiblicalFestivityStore(store);
  currentBiblicalFestivityId=values.id;
  toast(values.isNew?'Festividad añadida':'Festividad actualizada');
  openBiblicalFestivityDetail(values.id);
}

function deleteBiblicalFestivity(id){
  const f=findBiblicalFestivity(id);
  if(!f)return;

  if(!confirm(`¿Eliminar la festividad "${f.title}"?`))return;

  const store=biblicalFestivityStore();
  const customIndex=store.custom.findIndex(item=>item.id===id);

  if(customIndex>=0){
    store.custom.splice(customIndex,1);
  }else{
    if(!store.deleted.includes(id))store.deleted.push(id);
    delete store.edits[id];
  }

  saveBiblicalFestivityStore(store);
  toast('Festividad eliminada');
  backToBiblicalFestivityList();
}

function saveFestivityPassages(id,passageItems){
  const store=biblicalFestivityStore();
  const customIndex=store.custom.findIndex(item=>item.id===id);

  if(customIndex>=0){
    store.custom[customIndex]={
      ...store.custom[customIndex],
      passageItems,
      updatedAt:new Date().toISOString()
    };
  }else{
    store.edits[id]={
      ...(store.edits[id]||{}),
      passageItems,
      updatedAt:new Date().toISOString()
    };
  }

  saveBiblicalFestivityStore(store);
}

function addBiblicalFestivityPassage(){
  if(!currentBiblicalFestivityId)return;
  openBiblicalPassageEditor('');
}

function editBiblicalFestivityPassage(passageId){
  openBiblicalPassageEditor(passageId);
}

function openBiblicalPassageEditor(passageId=''){
  const f=findBiblicalFestivity(currentBiblicalFestivityId);
  if(!f)return;

  const passages=normalizeBiblicalFestivityPassages(f);
  const existing=passages.find(p=>p.id===passageId);
  const reference=prompt(
    existing?'Editar referencia bíblica:':'Escribe la referencia bíblica:',
    existing?.reference||''
  );
  if(reference===null)return;

  const cleanReference=reference.trim();
  if(!cleanReference){
    toast('La referencia no puede estar vacía');
    return;
  }

  const text=prompt(
    'Escribe o edita el texto del pasaje:',
    existing?.text||''
  );
  if(text===null)return;

  if(existing){
    existing.reference=cleanReference;
    existing.text=text;
  }else{
    passages.push({
      id:newBiblicalPassageId(),
      reference:cleanReference,
      text
    });
  }

  saveFestivityPassages(currentBiblicalFestivityId,passages);
  toast(existing?'Pasaje actualizado':'Pasaje añadido');
  openBiblicalFestivityDetail(currentBiblicalFestivityId);
}

function deleteBiblicalFestivityPassage(passageId){
  const f=findBiblicalFestivity(currentBiblicalFestivityId);
  if(!f)return;

  const passages=normalizeBiblicalFestivityPassages(f);
  const passage=passages.find(p=>p.id===passageId);
  if(!passage)return;

  if(!confirm(`¿Eliminar el pasaje "${passage.reference}"?`))return;

  saveFestivityPassages(
    currentBiblicalFestivityId,
    passages.filter(p=>p.id!==passageId)
  );
  toast('Pasaje eliminado');
  openBiblicalFestivityDetail(currentBiblicalFestivityId);
}

function updateBiblicalCalendarAlert(){
  const hasEvents=getBiblicalCalendarEvents(new Date()).length>0;
  document.getElementById('moreFunctionsBtn')?.classList.toggle('has-module-alert',hasEvents);
  document.getElementById('calendarModuleBtn')?.classList.toggle('has-module-alert',hasEvents);
}

/* V3.1.14 · Aviso de festividad al abrir la aplicación. */
const BIBLICAL_FESTIVITY_NOTICE_KEY_V3111='biblia_festivity_notice_last_v3111';

function biblicalFestivityNoticeTraditionV3111(key){
  return ({
    etiope:'Ortodoxo etíope',
    ortodoxa:'Ortodoxo',
    protestante:'Protestante',
    catolica:'Católico'
  })[key]||key||'';
}

function uniqueBiblicalFestivityEventsV3111(events){
  const grouped=new Map();
  for(const event of events||[]){
    const key=`${event.id||''}|${event.title||''}`;
    if(!grouped.has(key))grouped.set(key,{...event,traditions:[]});
    const item=grouped.get(key);
    const tradition=biblicalFestivityNoticeTraditionV3111(event.trad);
    if(tradition&&!item.traditions.includes(tradition))item.traditions.push(tradition);
  }
  return [...grouped.values()];
}

function closeBiblicalFestivityNoticeV3111(){
  document.getElementById('biblicalFestivityNoticeV3111')?.remove();
  document.body.classList.remove('festivity-notice-open-v3111');
}

function openTodayBiblicalCalendarV3111(){
  closeBiblicalFestivityNoticeV3111();
  openBiblicalCalendar();
}

function showBiblicalFestivityNoticeV3111(){
  const today=new Date();
  const key=biblicalCalendarKey(today);
  const events=uniqueBiblicalFestivityEventsV3111(getBiblicalCalendarEvents(today));
  if(!events.length)return;

  try{
    if(localStorage.getItem(BIBLICAL_FESTIVITY_NOTICE_KEY_V3111)===key)return;
    localStorage.setItem(BIBLICAL_FESTIVITY_NOTICE_KEY_V3111,key);
  }catch(_){}

  document.getElementById('biblicalFestivityNoticeV3111')?.remove();
  const overlay=document.createElement('div');
  overlay.id='biblicalFestivityNoticeV3111';
  overlay.className='festivity-notice-overlay-v3111';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-labelledby','festivityNoticeTitleV3111');

  const list=events.map(event=>`<article class="festivity-notice-event-v3111">
    <strong>${escapeHtml(event.title||'Festividad cristiana')}</strong>
    ${event.desc?`<p>${escapeHtml(event.desc)}</p>`:''}
    ${event.traditions.length?`<span>${escapeHtml(event.traditions.join(' · '))}</span>`:''}
  </article>`).join('');

  overlay.innerHTML=`<div class="festivity-notice-card-v3111">
    <div class="festivity-notice-date-v3111">${escapeHtml(formatBiblicalCalendarDate(today))}</div>
    <h2 id="festivityNoticeTitleV3111">Hoy es una fecha especial</h2>
    <div class="festivity-notice-events-v3111">${list}</div>
    <div class="festivity-notice-actions-v3111">
      <button type="button" class="btn soft" onclick="closeBiblicalFestivityNoticeV3111()">Cerrar</button>
      <button type="button" class="btn primary" onclick="openTodayBiblicalCalendarV3111()">Ver calendario</button>
    </div>
  </div>`;

  overlay.addEventListener('click',event=>{
    if(event.target===overlay)closeBiblicalFestivityNoticeV3111();
  });
  document.body.appendChild(overlay);
  document.body.classList.add('festivity-notice-open-v3111');
}

window.closeBiblicalFestivityNoticeV3111=closeBiblicalFestivityNoticeV3111;
window.openTodayBiblicalCalendarV3111=openTodayBiblicalCalendarV3111;

loadBiblicalFestivities();
setTimeout(updateBiblicalCalendarAlert,500);
/* V3.1.14: el aviso de festividad se muestra después de pulsar Entrar. */
setInterval(updateBiblicalCalendarAlert,60000);
