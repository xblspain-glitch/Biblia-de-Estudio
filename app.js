const DATA='./';
const APP_VERSION='1.64.72';
// Los 2.077 títulos RVR1960 están incrustados en el código principal para evitar fallos de caché o carga externa.
const BUILTIN_TITLES_EMBEDDED={"genesis":{"1":[{"versiculo":1,"titulo":"La creación"}],"2":[{"versiculo":4,"titulo":"El hombre en el huerto de Edén"}],"3":[{"versiculo":1,"titulo":"Desobediencia del hombre"}],"4":[{"versiculo":1,"titulo":"Caín y Abel"}],"5":[{"versiculo":1,"titulo":"Los descendientes de Adán"}],"6":[{"versiculo":1,"titulo":"La maldad de los hombres"},{"versiculo":9,"titulo":"Noé construye el arca"}],"7":[{"versiculo":1,"titulo":"El diluvio"}],"9":[{"versiculo":1,"titulo":"Pacto de Dios con Noé"},{"versiculo":18,"titulo":"Embriaguez de Noé"}],"10":[{"versiculo":1,"titulo":"Los descendientes de los hijos de Noé"}],"11":[{"versiculo":1,"titulo":"La torre de Babel"},{"versiculo":10,"titulo":"Los descendientes de Sem"},{"versiculo":27,"titulo":"Los descendientes de Taré"}],"12":[{"versiculo":1,"titulo":"Dios llama a Abram"},{"versiculo":10,"titulo":"Abram en Egipto"}],"13":[{"versiculo":1,"titulo":"Abram y Lot se separan"}],"14":[{"versiculo":1,"titulo":"Abram liberta a Lot"},{"versiculo":17,"titulo":"Melquisedec bendice a Abram"}],"15":[{"versiculo":1,"titulo":"Dios promete a Abram un hijo"}],"16":[{"versiculo":1,"titulo":"Agar e Ismael"}],"17":[{"versiculo":1,"titulo":"La circuncisión, señal del pacto"}],"18":[{"versiculo":1,"titulo":"Promesa del nacimiento de Isaac"},{"versiculo":16,"titulo":"Abraham intercede por Sodoma"}],"19":[{"versiculo":1,"titulo":"Destrucción de Sodoma y Gomorra"}],"20":[{"versiculo":1,"titulo":"Abraham y Abimelec"}],"21":[{"versiculo":1,"titulo":"Nacimiento de Isaac"},{"versiculo":8,"titulo":"Agar e Ismael son echados de la casa de Abraham"},{"versiculo":22,"titulo":"Pacto entre Abraham y Abimelec"}],"22":[{"versiculo":1,"titulo":"Dios ordena a Abraham que sacrifique a Isaac"}],"23":[{"versiculo":1,"titulo":"Muerte y sepultura de Sara"}],"24":[{"versiculo":1,"titulo":"Abraham busca esposa para Isaac"}],"25":[{"versiculo":1,"titulo":"Los descendientes de Abraham y Cetura"},{"versiculo":7,"titulo":"Muerte y sepultura de Abraham"},{"versiculo":12,"titulo":"Los descendientes de Ismael"},{"versiculo":19,"titulo":"Nacimiento de Jacob y Esaú"},{"versiculo":27,"titulo":"Esaú vende su primogenitura"}],"26":[{"versiculo":1,"titulo":"Isaac en Gerar"}],"27":[{"versiculo":1,"titulo":"Jacob obtiene la bendición de Isaac"},{"versiculo":41,"titulo":"Jacob huye de Esaú"}],"28":[{"versiculo":10,"titulo":"Dios se aparece a Jacob en Bet-el"}],"29":[{"versiculo":1,"titulo":"Jacob sirve a Labán por Raquel y Lea"},{"versiculo":31,"titulo":"Los hijos de Jacob"}],"30":[{"versiculo":25,"titulo":"Tretas de Jacob y de Labán"}],"31":[{"versiculo":17,"titulo":"Jacob huye de Labán"}],"32":[{"versiculo":1,"titulo":"Jacob se prepara para el encuentro con Esaú"},{"versiculo":22,"titulo":"Jacob lucha con el ángel en Peniel"}],"33":[{"versiculo":1,"titulo":"Reconciliación entre Jacob y Esaú"}],"34":[{"versiculo":1,"titulo":"La deshonra de Dina vengada"}],"35":[{"versiculo":1,"titulo":"Dios bendice a Jacob en Bet-el"},{"versiculo":16,"titulo":"Muerte de Raquel"},{"versiculo":22,"titulo":"Los hijos de Jacob"},{"versiculo":27,"titulo":"Muerte de Isaac"}],"36":[{"versiculo":1,"titulo":"Los descendientes de Esaú"}],"37":[{"versiculo":1,"titulo":"José es vendido por sus hermanos"}],"38":[{"versiculo":1,"titulo":"Judá y Tamar"}],"39":[{"versiculo":1,"titulo":"José y la esposa de Potifar"}],"40":[{"versiculo":1,"titulo":"José interpreta dos sueños"}],"41":[{"versiculo":1,"titulo":"José interpreta el sueño de Faraón"},{"versiculo":37,"titulo":"José, gobernador de Egipto"}],"42":[{"versiculo":1,"titulo":"Los hermanos de José vienen por alimentos"}],"43":[{"versiculo":1,"titulo":"Los hermanos de José regresan con Benjamín"}],"44":[{"versiculo":1,"titulo":"La copa de José"},{"versiculo":18,"titulo":"Judá intercede por Benjamín"}],"45":[{"versiculo":1,"titulo":"José se da a conocer a sus hermanos"}],"46":[{"versiculo":1,"titulo":"Jacob y su familia en Egipto"}],"48":[{"versiculo":1,"titulo":"Jacob bendice a Efraín y a Manasés"}],"49":[{"versiculo":1,"titulo":"Profecía de Jacob acerca de sus hijos"},{"versiculo":28,"titulo":"Muerte y sepelio de Jacob"}],"50":[{"versiculo":15,"titulo":"Muerte de José"}]},"exodo":{"1":[{"versiculo":1,"titulo":"Aflicción de los israelitas en Egipto"}],"2":[{"versiculo":1,"titulo":"Nacimiento de Moisés"},{"versiculo":11,"titulo":"Moisés huye de Egipto"}],"3":[{"versiculo":1,"titulo":"Llamamiento de Moisés"}],"4":[{"versiculo":18,"titulo":"Moisés vuelve a Egipto"}],"5":[{"versiculo":1,"titulo":"Moisés y Aarón ante Faraón"},{"versiculo":22,"titulo":"Jehová comisiona a Moisés y a Aarón"}],"7":[{"versiculo":8,"titulo":"La vara de Aarón"},{"versiculo":14,"titulo":"La plaga de sangre"}],"8":[{"versiculo":1,"titulo":"La plaga de ranas"},{"versiculo":16,"titulo":"La plaga de piojos"},{"versiculo":20,"titulo":"La plaga de moscas"}],"9":[{"versiculo":1,"titulo":"La plaga en el ganado"},{"versiculo":8,"titulo":"La plaga de úlceras"},{"versiculo":13,"titulo":"La plaga de granizo"}],"10":[{"versiculo":1,"titulo":"La plaga de langostas"},{"versiculo":21,"titulo":"La plaga de tinieblas"}],"11":[{"versiculo":1,"titulo":"Anunciada la muerte de los primogénitos"}],"12":[{"versiculo":1,"titulo":"La pascua"},{"versiculo":29,"titulo":"Muerte de los primogénitos"},{"versiculo":37,"titulo":"Los israelitas salen de Egipto"}],"13":[{"versiculo":1,"titulo":"Consagración de los primogénitos"},{"versiculo":17,"titulo":"La columna de nube y de fuego"}],"14":[{"versiculo":1,"titulo":"Los israelitas cruzan el Mar Rojo"}],"15":[{"versiculo":1,"titulo":"Cántico de Moisés y de María"},{"versiculo":22,"titulo":"El agua amarga de Mara"}],"16":[{"versiculo":1,"titulo":"Dios da el maná"}],"17":[{"versiculo":1,"titulo":"Agua de la roca"},{"versiculo":8,"titulo":"Guerra con Amalec"}],"18":[{"versiculo":1,"titulo":"Jetro visita a Moisés"},{"versiculo":13,"titulo":"Nombramiento de jueces"}],"19":[{"versiculo":1,"titulo":"Israel en Sinaí"}],"20":[{"versiculo":1,"titulo":"Los Diez Mandamientos"},{"versiculo":18,"titulo":"El terror del pueblo"}],"21":[{"versiculo":1,"titulo":"Leyes sobre los esclavos"},{"versiculo":12,"titulo":"Leyes sobre actos de violencia"},{"versiculo":26,"titulo":"Leyes sobre responsabilidades de amos y dueños"}],"22":[{"versiculo":1,"titulo":"Leyes sobre la restitución"},{"versiculo":16,"titulo":"Leyes humanitarias"}],"23":[{"versiculo":14,"titulo":"Las tres fiestas anuales"},{"versiculo":20,"titulo":"El Ángel de Jehová enviado para guiar a Israel"}],"24":[{"versiculo":1,"titulo":"Moisés y los ancianos en el monte Sinaí"}],"25":[{"versiculo":1,"titulo":"La ofrenda para el tabernáculo"},{"versiculo":10,"titulo":"El arca del testimonio"},{"versiculo":23,"titulo":"La mesa para el pan de la proposición"},{"versiculo":31,"titulo":"El candelero de oro"}],"26":[{"versiculo":1,"titulo":"El tabernáculo"}],"27":[{"versiculo":1,"titulo":"El altar de bronce"},{"versiculo":9,"titulo":"El atrio del tabernáculo"},{"versiculo":20,"titulo":"Aceite para las lámparas"}],"28":[{"versiculo":1,"titulo":"Las vestiduras de los sacerdotes"}],"29":[{"versiculo":1,"titulo":"Consagración de Aarón y de sus hijos"},{"versiculo":38,"titulo":"Las ofrendas diarias"}],"30":[{"versiculo":1,"titulo":"El altar del incienso"},{"versiculo":11,"titulo":"El dinero del rescate"},{"versiculo":17,"titulo":"La fuente de bronce"},{"versiculo":22,"titulo":"El aceite de la unción, y el incienso"}],"31":[{"versiculo":1,"titulo":"Llamamiento de Bezaleel y de Aholiab"},{"versiculo":12,"titulo":"El día de reposo como señal"},{"versiculo":18,"titulo":"El becerro de oro"}],"33":[{"versiculo":1,"titulo":"La presencia de Dios prometida"}],"34":[{"versiculo":1,"titulo":"El pacto renovado"},{"versiculo":11,"titulo":"Advertencia contra la idolatría de Canaán"},{"versiculo":18,"titulo":"Fiestas anuales"},{"versiculo":27,"titulo":"Moisés y las tablas de la ley"}],"35":[{"versiculo":1,"titulo":"Reglamento del día de reposo"},{"versiculo":4,"titulo":"La ofrenda para el tabernáculo"},{"versiculo":10,"titulo":"La obra del tabernáculo"},{"versiculo":20,"titulo":"El pueblo trae la ofrenda"},{"versiculo":30,"titulo":"Llamamiento de Bezaleel y de Aholiab"}],"36":[{"versiculo":2,"titulo":"Moisés suspende la ofrenda del pueblo"},{"versiculo":8,"titulo":"Construcción del tabernáculo"}],"37":[{"versiculo":1,"titulo":"Mobiliario del tabernáculo"}],"38":[{"versiculo":9,"titulo":"El atrio del tabernáculo"},{"versiculo":21,"titulo":"Dirección de la obra"},{"versiculo":24,"titulo":"Metales usados en el santuario"}],"39":[{"versiculo":1,"titulo":"Hechura de las vestiduras de los sacerdotes"},{"versiculo":32,"titulo":"La obra del tabernáculo terminada"}],"40":[{"versiculo":1,"titulo":"Moisés erige el tabernáculo"},{"versiculo":34,"titulo":"La nube sobre el tabernáculo"}]},"levitico":{"1":[{"versiculo":1,"titulo":"Los holocaustos"}],"2":[{"versiculo":1,"titulo":"Las ofrendas"}],"3":[{"versiculo":1,"titulo":"Ofrendas de paz"}],"4":[{"versiculo":1,"titulo":"Ofrendas por el pecado"}],"5":[{"versiculo":14,"titulo":"Ofrendas expiatorias"}],"6":[{"versiculo":8,"titulo":"Leyes de los sacrificios"}],"8":[{"versiculo":1,"titulo":"Consagración de Aarón y de sus hijos"}],"9":[{"versiculo":1,"titulo":"Los sacrificios de Aarón"}],"10":[{"versiculo":1,"titulo":"El pecado de Nadab y Abiú"}],"11":[{"versiculo":1,"titulo":"Animales limpios e inmundos"}],"12":[{"versiculo":1,"titulo":"La purificación de la mujer después del parto"}],"13":[{"versiculo":1,"titulo":"Leyes acerca de la lepra"}],"15":[{"versiculo":1,"titulo":"Impurezas físicas"}],"16":[{"versiculo":1,"titulo":"El día de la expiación"}],"17":[{"versiculo":1,"titulo":"El santuario único"},{"versiculo":10,"titulo":"Prohibición de comer la sangre"}],"18":[{"versiculo":1,"titulo":"Actos de inmoralidad prohibidos"}],"19":[{"versiculo":1,"titulo":"Leyes de santidad y de justicia"}],"20":[{"versiculo":1,"titulo":"Penas por actos de inmoralidad"}],"21":[{"versiculo":1,"titulo":"Santidad de los sacerdotes"}],"22":[{"versiculo":1,"titulo":"Santidad de las ofrendas"}],"23":[{"versiculo":1,"titulo":"Las fiestas solemnes"}],"24":[{"versiculo":1,"titulo":"Aceite para las lámparas"},{"versiculo":5,"titulo":"El pan de la proposición"},{"versiculo":10,"titulo":"Castigo del blasfemo"}],"25":[{"versiculo":1,"titulo":"El año de reposo de la tierra y el año del jubileo"}],"26":[{"versiculo":1,"titulo":"Bendiciones de la obediencia"},{"versiculo":14,"titulo":"Consecuencias de la desobediencia"}],"27":[{"versiculo":1,"titulo":"Cosas consagradas a Dios"}]},"numeros":{"1":[{"versiculo":1,"titulo":"Censo de Israel en Sinaí"},{"versiculo":47,"titulo":"Nombramiento de los levitas"}],"2":[{"versiculo":1,"titulo":"Campamentos y jefes de las tribus"}],"3":[{"versiculo":1,"titulo":"Censo y deberes de los levitas"},{"versiculo":40,"titulo":"Rescate de los primogénitos"}],"4":[{"versiculo":1,"titulo":"Tareas de los levitas"}],"5":[{"versiculo":1,"titulo":"Todo inmundo es echado fuera del campamento"},{"versiculo":5,"titulo":"Ley sobre la restitución"},{"versiculo":11,"titulo":"Ley sobre los celos"}],"6":[{"versiculo":1,"titulo":"El voto de los nazareos"},{"versiculo":22,"titulo":"La bendición sacerdotal"}],"7":[{"versiculo":1,"titulo":"Ofrendas para la dedicación del altar"}],"8":[{"versiculo":1,"titulo":"Aarón enciende las lámparas"},{"versiculo":5,"titulo":"Consagración de los levitas"}],"9":[{"versiculo":1,"titulo":"Celebración de la pascua"},{"versiculo":15,"titulo":"La nube sobre el tabernáculo"}],"10":[{"versiculo":1,"titulo":"Las trompetas de plata"},{"versiculo":11,"titulo":"Los israelitas salen de Sinaí"}],"11":[{"versiculo":1,"titulo":"Jehová envía codornices"}],"12":[{"versiculo":1,"titulo":"María y Aarón murmuran contra Moisés"}],"13":[{"versiculo":1,"titulo":"Misión de los doce espías"}],"14":[{"versiculo":1,"titulo":"Los israelitas se rebelan contra Jehová"},{"versiculo":20,"titulo":"Jehová castiga a Israel"},{"versiculo":36,"titulo":"Muerte de los diez espías malvados"},{"versiculo":39,"titulo":"La derrota en Horma"}],"15":[{"versiculo":1,"titulo":"Leyes sobre las ofrendas"},{"versiculo":32,"titulo":"Lapidación de un violador del día de reposo"},{"versiculo":37,"titulo":"Franjas en los vestidos"}],"16":[{"versiculo":1,"titulo":"La rebelión de Coré"}],"17":[{"versiculo":1,"titulo":"La vara de Aarón florece"}],"18":[{"versiculo":1,"titulo":"Sostenimiento de sacerdotes y levitas"}],"19":[{"versiculo":1,"titulo":"La purificación de los inmundos"}],"20":[{"versiculo":1,"titulo":"Agua de la roca"},{"versiculo":14,"titulo":"Edom rehúsa dar paso a Israel"},{"versiculo":22,"titulo":"Aarón muere en el monte Hor"}],"21":[{"versiculo":1,"titulo":"El rey de Arad ataca a Israel"},{"versiculo":4,"titulo":"La serpiente de bronce"},{"versiculo":10,"titulo":"Los israelitas rodean la tierra de Moab"},{"versiculo":21,"titulo":"Israel derrota a Sehón"},{"versiculo":31,"titulo":"Israel derrota a Og de Basán"}],"22":[{"versiculo":1,"titulo":"Balac manda llamar a Balaam"},{"versiculo":21,"titulo":"El ángel y el asna de Balaam"},{"versiculo":41,"titulo":"Balaam bendice a Israel"}],"24":[{"versiculo":10,"titulo":"Profecía de Balaam"}],"25":[{"versiculo":1,"titulo":"Israel acude a Baal-peor"}],"26":[{"versiculo":1,"titulo":"Censo del pueblo en Moab"},{"versiculo":52,"titulo":"Orden para la repartición de la tierra"},{"versiculo":57,"titulo":"Censo de la tribu de Leví"},{"versiculo":63,"titulo":"Caleb y Josué sobreviven"}],"27":[{"versiculo":1,"titulo":"Petición de las hijas de Zelofehad"},{"versiculo":12,"titulo":"Josué es designado como sucesor de Moisés"}],"28":[{"versiculo":1,"titulo":"Las ofrendas diarias"},{"versiculo":9,"titulo":"Ofrendas mensuales y del día de reposo"},{"versiculo":16,"titulo":"Ofrendas de las fiestas solemnes"}],"30":[{"versiculo":1,"titulo":"Ley de los votos"}],"31":[{"versiculo":1,"titulo":"Venganza de Israel contra Madián"},{"versiculo":21,"titulo":"Repartición del botín"}],"32":[{"versiculo":1,"titulo":"Rubén y Gad se establecen al oriente del Jordán"}],"33":[{"versiculo":1,"titulo":"Jornadas de Israel desde Egipto hasta el Jordán"},{"versiculo":50,"titulo":"Límites y repartición de Canaán"}],"35":[{"versiculo":1,"titulo":"Herencia de los levitas"},{"versiculo":9,"titulo":"Ciudades de refugio"},{"versiculo":29,"titulo":"Ley sobre los testigos y sobre el rescate"}],"36":[{"versiculo":1,"titulo":"Ley del casamiento de las herederas"}]},"deuteronomio":{"1":[{"versiculo":1,"titulo":"Moisés recuerda a Israel las promesas de Jehová en Horeb"},{"versiculo":9,"titulo":"Nombramiento de jueces"},{"versiculo":19,"titulo":"Misión de los doce espías"},{"versiculo":34,"titulo":"Dios castiga a Israel"},{"versiculo":41,"titulo":"La derrota en Horma"}],"2":[{"versiculo":1,"titulo":"Los años en el desierto"},{"versiculo":26,"titulo":"Israel derrota a Sehón"}],"3":[{"versiculo":1,"titulo":"Israel derrota a Og rey de Basán"},{"versiculo":12,"titulo":"Rubén, Gad y la media tribu de Manasés se establecen al oriente del Jordán"},{"versiculo":23,"titulo":"No se le permite a Moisés entrar a Canaán"}],"4":[{"versiculo":1,"titulo":"Moisés exhorta a la obediencia"},{"versiculo":9,"titulo":"La experiencia de Israel en Horeb"},{"versiculo":15,"titulo":"Advertencia contra la idolatría"},{"versiculo":41,"titulo":"Las ciudades de refugio al oriente del Jordán"},{"versiculo":44,"titulo":"Moisés recapitula la promulgación de la ley"}],"5":[{"versiculo":1,"titulo":"Los Diez Mandamientos"},{"versiculo":22,"titulo":"El terror del pueblo"}],"6":[{"versiculo":1,"titulo":"El gran mandamiento"},{"versiculo":10,"titulo":"Exhortaciones a la obediencia"}],"7":[{"versiculo":1,"titulo":"Advertencias contra la idolatría de Canaán"},{"versiculo":6,"titulo":"Un pueblo santo para Jehová"},{"versiculo":12,"titulo":"Bendiciones de la obediencia"}],"8":[{"versiculo":1,"titulo":"La buena tierra que han de poseer"},{"versiculo":11,"titulo":"Amonestación de no olvidar a Dios"}],"9":[{"versiculo":1,"titulo":"Dios destruirá a las naciones de Canaán"},{"versiculo":6,"titulo":"La rebelión de Israel en Horeb"}],"10":[{"versiculo":1,"titulo":"El pacto renovado"},{"versiculo":12,"titulo":"Lo que Dios exige"}],"11":[{"versiculo":1,"titulo":"La grandeza de Jehová"},{"versiculo":8,"titulo":"Bendiciones de la tierra prometida"}],"12":[{"versiculo":1,"titulo":"El santuario único"},{"versiculo":29,"titulo":"Advertencias contra la idolatría"}],"14":[{"versiculo":3,"titulo":"Animales limpios e inmundos"},{"versiculo":22,"titulo":"La ley del diezmo"}],"15":[{"versiculo":1,"titulo":"El año de remisión"},{"versiculo":7,"titulo":"Préstamos a los pobres"},{"versiculo":12,"titulo":"Leyes sobre los esclavos"},{"versiculo":19,"titulo":"Consagración de los primogénitos machos"}],"16":[{"versiculo":1,"titulo":"Fiestas anuales"},{"versiculo":18,"titulo":"Administración de la justicia"}],"17":[{"versiculo":14,"titulo":"Instrucciones acerca de un rey"}],"18":[{"versiculo":1,"titulo":"Las porciones de los levitas"},{"versiculo":9,"titulo":"Amonestación contra costumbres paganas"},{"versiculo":15,"titulo":"Dios promete un profeta como Moisés"}],"19":[{"versiculo":1,"titulo":"Las ciudades de refugio"},{"versiculo":15,"titulo":"Leyes sobre el testimonio"}],"20":[{"versiculo":1,"titulo":"Leyes sobre la guerra"}],"21":[{"versiculo":1,"titulo":"Expiación de un asesinato cuyo autor se desconoce"},{"versiculo":10,"titulo":"Diversas leyes"}],"22":[{"versiculo":13,"titulo":"Leyes sobre la castidad"}],"23":[{"versiculo":1,"titulo":"Los excluidos de la congregación"},{"versiculo":9,"titulo":"Leyes sanitarias"},{"versiculo":15,"titulo":"Leyes humanitarias"}],"25":[{"versiculo":17,"titulo":"Orden de exterminar a Amalec"}],"26":[{"versiculo":1,"titulo":"Primicias y diezmos"}],"27":[{"versiculo":1,"titulo":"Orden de escribir la ley en piedras sobre el monte Ebal"},{"versiculo":11,"titulo":"Las maldiciones en el monte Ebal"}],"28":[{"versiculo":1,"titulo":"Bendiciones de la obediencia"},{"versiculo":15,"titulo":"Consecuencias de la desobediencia"}],"29":[{"versiculo":1,"titulo":"Pacto de Jehová con Israel en Moab"}],"30":[{"versiculo":1,"titulo":"Condiciones para la restauración y la bendición"}],"31":[{"versiculo":1,"titulo":"Josué es instalado como sucesor de Moisés"},{"versiculo":24,"titulo":"Orden de guardar la ley junto al arca"},{"versiculo":30,"titulo":"Cántico de Moisés"}],"32":[{"versiculo":48,"titulo":"Se le permite a Moisés contemplar la tierra de Canaán"}],"33":[{"versiculo":1,"titulo":"Moisés bendice a las doce tribus de Israel"}],"34":[{"versiculo":1,"titulo":"Muerte y sepultura de Moisés"}]},"josue":{"1":[{"versiculo":1,"titulo":"Preparativos para la conquista"}],"2":[{"versiculo":1,"titulo":"Josué envía espías a Jericó"}],"3":[{"versiculo":1,"titulo":"El paso del Jordán"}],"4":[{"versiculo":1,"titulo":"Las doce piedras tomadas del Jordán"}],"5":[{"versiculo":1,"titulo":"La circuncisión y la pascua en Gilgal"},{"versiculo":13,"titulo":"Josué y el varón con la espada desenvainada"}],"6":[{"versiculo":1,"titulo":"La toma de Jericó"}],"7":[{"versiculo":1,"titulo":"El pecado de Acán"}],"8":[{"versiculo":1,"titulo":"Toma y destrucción de Hai"},{"versiculo":30,"titulo":"Lectura de la ley en el monte Ebal"}],"9":[{"versiculo":1,"titulo":"Astucia de los gabaonitas"}],"10":[{"versiculo":1,"titulo":"Derrota de los amorreos"}],"11":[{"versiculo":1,"titulo":"Derrota de la alianza de Jabín"},{"versiculo":16,"titulo":"Josué se apodera de toda la tierra"}],"12":[{"versiculo":1,"titulo":"Reyes derrotados por Moisés"},{"versiculo":7,"titulo":"Reyes derrotados por Josué"}],"13":[{"versiculo":1,"titulo":"Tierra aún sin conquistar"},{"versiculo":14,"titulo":"El territorio que distribuyó Moisés"}],"14":[{"versiculo":1,"titulo":"Canaán repartida por suerte"},{"versiculo":6,"titulo":"Caleb recibe Hebrón"}],"15":[{"versiculo":1,"titulo":"El territorio de Judá"},{"versiculo":13,"titulo":"Caleb conquista Hebrón y Debir"},{"versiculo":20,"titulo":"Las ciudades de Judá"}],"16":[{"versiculo":1,"titulo":"Territorio de Efraín y de Manasés"}],"18":[{"versiculo":1,"titulo":"Territorios de las demás tribus"}],"20":[{"versiculo":1,"titulo":"Josué señala ciudades de refugio"}],"21":[{"versiculo":1,"titulo":"Ciudades de los levitas"},{"versiculo":43,"titulo":"Israel ocupa la tierra"}],"22":[{"versiculo":1,"titulo":"El altar junto al Jordán"}],"23":[{"versiculo":1,"titulo":"Exhortación de Josué al pueblo"}],"24":[{"versiculo":1,"titulo":"Discurso de despedida de Josué"},{"versiculo":29,"titulo":"Muerte de Josué"},{"versiculo":32,"titulo":"Sepultura de los huesos de José en Siquem"},{"versiculo":33,"titulo":"Muerte de Eleazar"}]},"jueces":{"1":[{"versiculo":1,"titulo":"Judá y Simeón capturan a Adoni-bezec"},{"versiculo":8,"titulo":"Judá conquista Jerusalén y Hebrón"},{"versiculo":11,"titulo":"Otoniel conquista Debir y recibe a Acsa"},{"versiculo":16,"titulo":"Extensión de las conquistas de Judá y de Benjamín"},{"versiculo":22,"titulo":"José conquista Bet-el"},{"versiculo":27,"titulo":"Extensión de las conquistas de Manasés y de Efraín"},{"versiculo":30,"titulo":"Extensión de las conquistas de las demás tribus"}],"2":[{"versiculo":1,"titulo":"El ángel de Jehová en Boquim"},{"versiculo":6,"titulo":"Muerte de Josué"},{"versiculo":11,"titulo":"Apostasía de Israel, y la obra de los jueces"}],"3":[{"versiculo":1,"titulo":"Naciones que fueron dejadas para probar a Israel"},{"versiculo":7,"titulo":"Otoniel liberta a Israel de Cusan-risataim"},{"versiculo":12,"titulo":"Aod liberta a Israel de Moab"},{"versiculo":31,"titulo":"Samgar liberta a Israel de los filisteos"}],"4":[{"versiculo":1,"titulo":"Débora y Barac derrotan a Sísara"}],"5":[{"versiculo":1,"titulo":"Cántico de Débora y de Barac"}],"6":[{"versiculo":1,"titulo":"Llamamiento de Gedeón"}],"7":[{"versiculo":1,"titulo":"Gedeón derrota a los madianitas"}],"8":[{"versiculo":1,"titulo":"Gedeón captura a los reyes de Madián"}],"9":[{"versiculo":1,"titulo":"Reinado de Abimelec"}],"10":[{"versiculo":1,"titulo":"Tola y Jair juzgan a Israel"},{"versiculo":6,"titulo":"Jefté liberta a Israel de los amonitas"}],"12":[{"versiculo":8,"titulo":"Ibzán, Elón y Abdón, jueces de Israel"}],"13":[{"versiculo":1,"titulo":"Nacimiento de Sansón"}],"14":[{"versiculo":1,"titulo":"Sansón y la mujer filistea de Timnat"}],"15":[{"versiculo":9,"titulo":"Sansón derrota a los filisteos en Lehi"}],"16":[{"versiculo":1,"titulo":"Sansón en Gaza"},{"versiculo":4,"titulo":"Sansón y Dalila"},{"versiculo":23,"titulo":"Muerte de Sansón"}],"17":[{"versiculo":1,"titulo":"Las imágenes y el sacerdote de Micaía"}],"18":[{"versiculo":1,"titulo":"Micaía y los hombres de Dan"}],"19":[{"versiculo":1,"titulo":"El levita y su concubina"}],"20":[{"versiculo":1,"titulo":"La guerra contra Benjamín"}],"21":[{"versiculo":1,"titulo":"Mujeres para los benjamitas"}]},"rut":{"1":[{"versiculo":1,"titulo":"Rut y Noemí"}],"2":[{"versiculo":1,"titulo":"Rut recoge espigas en el campo de Booz"}],"3":[{"versiculo":1,"titulo":"Rut y Booz en la era"}],"4":[{"versiculo":1,"titulo":"Booz se casa con Rut"}]},"1_samuel":{"1":[{"versiculo":1,"titulo":"Nacimiento de Samuel"}],"2":[{"versiculo":1,"titulo":"Cántico de Ana"},{"versiculo":12,"titulo":"El pecado de los hijos de Elí"}],"3":[{"versiculo":1,"titulo":"Jehová llama a Samuel"}],"4":[{"versiculo":1,"titulo":"Los filisteos capturan el arca"}],"5":[{"versiculo":1,"titulo":"El arca en tierra de los filisteos"}],"6":[{"versiculo":1,"titulo":"Los filisteos devuelven el arca"}],"7":[{"versiculo":3,"titulo":"Samuel, juez de Israel"}],"8":[{"versiculo":1,"titulo":"Israel pide rey"}],"9":[{"versiculo":1,"titulo":"Saúl es elegido rey"}],"11":[{"versiculo":1,"titulo":"Saúl derrota a los amonitas"}],"12":[{"versiculo":1,"titulo":"Discurso de Samuel al pueblo"}],"13":[{"versiculo":1,"titulo":"Guerra contra los filisteos"}],"15":[{"versiculo":1,"titulo":"Saúl desobedece y es desechado"}],"16":[{"versiculo":1,"titulo":"Samuel unge a David"},{"versiculo":14,"titulo":"David toca para Saúl"}],"17":[{"versiculo":1,"titulo":"David mata a Goliat"}],"18":[{"versiculo":1,"titulo":"Pacto de Jonatán y David"},{"versiculo":6,"titulo":"Saúl tiene celos de David"}],"19":[{"versiculo":1,"titulo":"Saúl procura matar a David"}],"20":[{"versiculo":1,"titulo":"Amistad de David y Jonatán"}],"21":[{"versiculo":1,"titulo":"David huye de Saúl"}],"22":[{"versiculo":6,"titulo":"Saúl mata a los sacerdotes de Nob"}],"23":[{"versiculo":1,"titulo":"David en el desierto"}],"24":[{"versiculo":1,"titulo":"David perdona la vida a Saúl en En-gadi"}],"25":[{"versiculo":1,"titulo":"David y Abigail"}],"26":[{"versiculo":1,"titulo":"David perdona la vida a Saúl en Zif"}],"27":[{"versiculo":1,"titulo":"David entre los filisteos"}],"28":[{"versiculo":3,"titulo":"Saúl y la adivina de Endor"}],"29":[{"versiculo":1,"titulo":"Los filisteos desconfían de David"}],"30":[{"versiculo":1,"titulo":"David derrota a los amalecitas"}],"31":[{"versiculo":1,"titulo":"Muerte de Saúl y de sus hijos"}]},"2_samuel":{"1":[{"versiculo":1,"titulo":"David oye de la muerte de Saúl"},{"versiculo":17,"titulo":"David endecha a Saúl y a Jonatán"}],"2":[{"versiculo":1,"titulo":"David es proclamado rey de Judá"},{"versiculo":8,"titulo":"Guerra entre David y la casa de Saúl"}],"3":[{"versiculo":2,"titulo":"Hijos de David nacidos en Hebrón"},{"versiculo":6,"titulo":"Abner pacta con David en Hebrón"},{"versiculo":22,"titulo":"Joab mata a Abner"}],"4":[{"versiculo":1,"titulo":"Is-boset es asesinado"}],"5":[{"versiculo":1,"titulo":"David es proclamado rey de Israel"},{"versiculo":6,"titulo":"David toma la fortaleza de Sion"},{"versiculo":11,"titulo":"Hiram envía embajadores a David"},{"versiculo":13,"titulo":"Hijos de David nacidos en Jerusalén"},{"versiculo":17,"titulo":"David derrota a los filisteos"}],"6":[{"versiculo":1,"titulo":"David intenta llevar el arca a Jerusalén"},{"versiculo":12,"titulo":"David trae el arca a Jerusalén"}],"7":[{"versiculo":1,"titulo":"Pacto de Dios con David"}],"8":[{"versiculo":1,"titulo":"David extiende sus dominios"},{"versiculo":15,"titulo":"Oficiales de David"}],"9":[{"versiculo":1,"titulo":"Bondad de David hacia Mefi-boset"}],"10":[{"versiculo":1,"titulo":"Derrotas de amonitas y sirios"}],"11":[{"versiculo":1,"titulo":"David y Betsabé"}],"12":[{"versiculo":1,"titulo":"Natán amonesta a David"},{"versiculo":26,"titulo":"David captura Rabá"}],"13":[{"versiculo":1,"titulo":"Amnón y Tamar"},{"versiculo":20,"titulo":"Venganza y huida de Absalón"}],"14":[{"versiculo":1,"titulo":"Joab procura el regreso de Absalón"}],"15":[{"versiculo":1,"titulo":"Absalón se subleva contra David"}],"17":[{"versiculo":1,"titulo":"Consejos de Ahitofel y de Husai"}],"18":[{"versiculo":1,"titulo":"Muerte de Absalón"}],"19":[{"versiculo":1,"titulo":"David vuelve a Jerusalén"}],"20":[{"versiculo":1,"titulo":"Sublevación de Seba"},{"versiculo":23,"titulo":"Oficiales de David"}],"21":[{"versiculo":1,"titulo":"Venganza de los gabaonitas"},{"versiculo":15,"titulo":"Abisai libra a David del gigante"},{"versiculo":18,"titulo":"Los hombres de David matan a los gigantes"}],"22":[{"versiculo":1,"titulo":"Cántico de liberación de David"}],"23":[{"versiculo":1,"titulo":"Últimas palabras de David"},{"versiculo":8,"titulo":"Los valientes de David"}],"24":[{"versiculo":1,"titulo":"David censa al pueblo"}]},"1_reyes":{"1":[{"versiculo":1,"titulo":"Abisag sirve a David"},{"versiculo":5,"titulo":"Adonías usurpa el trono"},{"versiculo":28,"titulo":"David proclama rey a Salomón"}],"2":[{"versiculo":1,"titulo":"Mandato de David a Salomón"},{"versiculo":10,"titulo":"Muerte de David"},{"versiculo":13,"titulo":"Salomón afirma su reino"}],"3":[{"versiculo":1,"titulo":"Salomón se casa con la hija de Faraón"},{"versiculo":3,"titulo":"Salomón pide sabiduría"},{"versiculo":16,"titulo":"Sabiduría y prosperidad de Salomón"}],"5":[{"versiculo":1,"titulo":"Pacto de Salomón con Hiram"}],"6":[{"versiculo":1,"titulo":"Salomón edifica el templo"}],"7":[{"versiculo":1,"titulo":"Otros edificios de Salomón"},{"versiculo":13,"titulo":"Salomón emplea a Hiram, de Tiro"},{"versiculo":23,"titulo":"Mobiliario del templo"}],"8":[{"versiculo":1,"titulo":"Salomón traslada el arca al templo"},{"versiculo":12,"titulo":"Dedicación del templo"}],"9":[{"versiculo":1,"titulo":"Pacto de Dios con Salomón"},{"versiculo":10,"titulo":"Otras actividades de Salomón"}],"10":[{"versiculo":1,"titulo":"La reina de Sabá visita a Salomón"},{"versiculo":14,"titulo":"Riquezas y fama de Salomón"},{"versiculo":26,"titulo":"Salomón comercia en caballos y en carros"}],"11":[{"versiculo":1,"titulo":"Apostasía y dificultades de Salomón"},{"versiculo":41,"titulo":"Muerte de Salomón"}],"12":[{"versiculo":1,"titulo":"Rebelión de Israel"},{"versiculo":25,"titulo":"El pecado de Jeroboam"}],"13":[{"versiculo":1,"titulo":"Un profeta de Judá amonesta a Jeroboam"}],"14":[{"versiculo":1,"titulo":"Profecía de Ahías contra Jeroboam"},{"versiculo":21,"titulo":"Reinado de Roboam"}],"15":[{"versiculo":1,"titulo":"Reinado de Abiam"},{"versiculo":9,"titulo":"Reinado de Asa"},{"versiculo":16,"titulo":"Alianza de Asa con Ben-adad"},{"versiculo":23,"titulo":"Muerte de Asa"},{"versiculo":25,"titulo":"Reinado de Nadab"},{"versiculo":33,"titulo":"Reinado de Baasa"}],"16":[{"versiculo":8,"titulo":"Reinados de Ela y de Zimri"},{"versiculo":21,"titulo":"Reinado de Omri"},{"versiculo":29,"titulo":"Reinado de Acab"}],"17":[{"versiculo":1,"titulo":"Elías predice la sequía"},{"versiculo":8,"titulo":"Elías y la viuda de Sarepta"}],"18":[{"versiculo":1,"titulo":"Elías regresa a ver a Acab"},{"versiculo":20,"titulo":"Elías y los profetas de Baal"},{"versiculo":41,"titulo":"Elías ora por lluvia"}],"19":[{"versiculo":1,"titulo":"Elías huye a Horeb"},{"versiculo":19,"titulo":"Llamamiento de Eliseo"}],"20":[{"versiculo":1,"titulo":"Acab derrota a los sirios"}],"21":[{"versiculo":1,"titulo":"Acab y la viña de Nabot"}],"22":[{"versiculo":1,"titulo":"Micaías profetiza la derrota de Acab"},{"versiculo":41,"titulo":"Reinado de Josafat"},{"versiculo":51,"titulo":"Reinado de Ocozías de Israel"}]},"2_reyes":{"1":[{"versiculo":1,"titulo":"Muerte de Ocozías"}],"2":[{"versiculo":1,"titulo":"Eliseo sucede a Elías"}],"3":[{"versiculo":1,"titulo":"Reinado de Joram de Israel"},{"versiculo":4,"titulo":"Eliseo predice la victoria sobre Moab"}],"4":[{"versiculo":1,"titulo":"El aceite de la viuda"},{"versiculo":8,"titulo":"Eliseo y la sunamita"},{"versiculo":38,"titulo":"Milagros en beneficio de los profetas"}],"5":[{"versiculo":1,"titulo":"Eliseo y Naamán"}],"6":[{"versiculo":1,"titulo":"Eliseo hace flotar el hacha"},{"versiculo":8,"titulo":"Eliseo y los sirios"},{"versiculo":24,"titulo":"Eliseo y el sitio de Samaria"}],"8":[{"versiculo":1,"titulo":"Los bienes de la sunamita devueltos"},{"versiculo":7,"titulo":"Hazael reina en Siria"},{"versiculo":16,"titulo":"Reinado de Joram de Judá"},{"versiculo":25,"titulo":"Reinado de Ocozías de Judá"}],"9":[{"versiculo":1,"titulo":"Jehú es ungido rey de Israel"},{"versiculo":14,"titulo":"Jehú mata a Joram"},{"versiculo":27,"titulo":"Jehú mata a Ocozías"},{"versiculo":30,"titulo":"Muerte de Jezabel"}],"10":[{"versiculo":1,"titulo":"Jehú extermina la casa de Acab"},{"versiculo":18,"titulo":"Jehú extermina el culto de Baal"}],"11":[{"versiculo":1,"titulo":"Atalía usurpa el trono"}],"12":[{"versiculo":1,"titulo":"Reinado de Joás de Judá"}],"13":[{"versiculo":1,"titulo":"Reinado de Joacaz"},{"versiculo":10,"titulo":"Reinado de Joás de Israel"},{"versiculo":14,"titulo":"Profecía final y muerte de Eliseo"}],"14":[{"versiculo":1,"titulo":"Reinado de Amasías"},{"versiculo":23,"titulo":"Reinado de Jeroboam II"}],"15":[{"versiculo":1,"titulo":"Reinado de Azarías"},{"versiculo":8,"titulo":"Reinado de Zacarías"},{"versiculo":13,"titulo":"Reinado de Salum"},{"versiculo":17,"titulo":"Reinado de Manahem"},{"versiculo":23,"titulo":"Reinado de Pekaía"},{"versiculo":27,"titulo":"Reinado de Peka"},{"versiculo":32,"titulo":"Reinado de Jotam"}],"16":[{"versiculo":1,"titulo":"Reinado de Acaz"}],"17":[{"versiculo":1,"titulo":"Caída de Samaria y cautiverio de Israel"},{"versiculo":24,"titulo":"Asiria puebla de nuevo a Samaria"}],"18":[{"versiculo":1,"titulo":"Reinado de Ezequías"},{"versiculo":9,"titulo":"Caída de Samaria"},{"versiculo":13,"titulo":"Senaquerib invade a Judá"}],"19":[{"versiculo":1,"titulo":"Judá es librado de Senaquerib"}],"20":[{"versiculo":1,"titulo":"Enfermedad de Ezequías"},{"versiculo":12,"titulo":"Ezequías recibe a los enviados de Babilonia"},{"versiculo":20,"titulo":"Muerte de Ezequías"}],"21":[{"versiculo":1,"titulo":"Reinado de Manasés"},{"versiculo":19,"titulo":"Reinado de Amón"}],"22":[{"versiculo":1,"titulo":"Reinado de Josías"},{"versiculo":3,"titulo":"Hallazgo del libro de la ley"}],"23":[{"versiculo":4,"titulo":"Reformas de Josías"},{"versiculo":21,"titulo":"Josías celebra la pascua"},{"versiculo":24,"titulo":"Persiste la ira de Jehová contra Judá"},{"versiculo":28,"titulo":"Muerte de Josías"},{"versiculo":31,"titulo":"Reinado y destronamiento de Joacaz"},{"versiculo":36,"titulo":"Reinado de Joacim"}],"24":[{"versiculo":8,"titulo":"Joaquín y los nobles son llevados cautivos a Babilonia"},{"versiculo":18,"titulo":"Reinado de Sedequías"}],"25":[{"versiculo":1,"titulo":"Caída de Jerusalén"},{"versiculo":8,"titulo":"Cautividad de Judá"},{"versiculo":22,"titulo":"El remanente huye a Egipto"},{"versiculo":27,"titulo":"Joaquín es libertado y recibe honores en Babilonia"}]},"1_cronicas":{"1":[{"versiculo":1,"titulo":"Descendientes de Adán"},{"versiculo":5,"titulo":"Descendientes de los hijos de Noé"},{"versiculo":24,"titulo":"Descendientes de Sem"},{"versiculo":28,"titulo":"Descendientes de Ismael y de Cetura"},{"versiculo":34,"titulo":"Descendientes de Esaú"}],"2":[{"versiculo":1,"titulo":"Los hijos de Israel"},{"versiculo":3,"titulo":"Descendientes de Judá"}],"3":[{"versiculo":1,"titulo":"Los hijos de David"},{"versiculo":10,"titulo":"Descendientes de Salomón"}],"4":[{"versiculo":1,"titulo":"Descendientes de Judá"},{"versiculo":24,"titulo":"Descendientes de Simeón"}],"5":[{"versiculo":1,"titulo":"Descendientes de Rubén"},{"versiculo":11,"titulo":"Descendientes de Gad"},{"versiculo":18,"titulo":"Historia de las dos tribus y media"}],"6":[{"versiculo":1,"titulo":"Descendientes de Leví"},{"versiculo":31,"titulo":"Cantores del templo nombrados por David"},{"versiculo":49,"titulo":"Descendientes de Aarón"},{"versiculo":54,"titulo":"Las ciudades de los levitas"}],"7":[{"versiculo":1,"titulo":"Descendientes de Isacar"},{"versiculo":6,"titulo":"Descendientes de Benjamín"},{"versiculo":13,"titulo":"Descendientes de Neftalí"},{"versiculo":14,"titulo":"Descendientes de Manasés"},{"versiculo":20,"titulo":"Descendientes de Efraín"},{"versiculo":30,"titulo":"Descendientes de Aser"}],"8":[{"versiculo":1,"titulo":"Descendientes de Benjamín"}],"9":[{"versiculo":1,"titulo":"Los que regresaron de Babilonia"},{"versiculo":35,"titulo":"Genealogía de Saúl"}],"10":[{"versiculo":1,"titulo":"Muerte de Saúl y de sus hijos"}],"11":[{"versiculo":1,"titulo":"David es proclamado rey de Israel"},{"versiculo":4,"titulo":"David toma la fortaleza de Sion"},{"versiculo":10,"titulo":"Los valientes de David"}],"12":[{"versiculo":1,"titulo":"El ejército de David"}],"13":[{"versiculo":1,"titulo":"David propone trasladar el arca a Jerusalén"},{"versiculo":5,"titulo":"David intenta traer el arca"}],"14":[{"versiculo":1,"titulo":"Hiram envía embajadores a David"},{"versiculo":3,"titulo":"Hijos de David nacidos en Jerusalén"},{"versiculo":8,"titulo":"David derrota a los filisteos"}],"15":[{"versiculo":1,"titulo":"David trae el arca a Jerusalén"}],"16":[{"versiculo":7,"titulo":"Salmo de acción de gracias de David"},{"versiculo":37,"titulo":"Los levitas encargados del arca"}],"17":[{"versiculo":1,"titulo":"Pacto de Dios con David"}],"18":[{"versiculo":1,"titulo":"David extiende sus dominios"},{"versiculo":14,"titulo":"Oficiales de David"}],"19":[{"versiculo":1,"titulo":"Derrotas de amonitas y sirios"}],"20":[{"versiculo":1,"titulo":"David captura a Rabá"},{"versiculo":4,"titulo":"Los hombres de David matan a los gigantes"}],"21":[{"versiculo":1,"titulo":"David censa al pueblo"},{"versiculo":28,"titulo":"El lugar para el templo"}],"22":[{"versiculo":2,"titulo":"Preparativos para el templo"}],"23":[{"versiculo":1,"titulo":"Distribución y deberes de los levitas"}],"25":[{"versiculo":1,"titulo":"Distribución de músicos y cantores"}],"26":[{"versiculo":1,"titulo":"Porteros y oficiales"}],"27":[{"versiculo":1,"titulo":"Otros oficiales de David"}],"28":[{"versiculo":1,"titulo":"Salomón sucede a David"}],"29":[{"versiculo":26,"titulo":"Muerte de David"}]},"2_cronicas":{"1":[{"versiculo":1,"titulo":"Salomón pide sabiduría"},{"versiculo":14,"titulo":"Salomón comercia en caballos y en carros"}],"2":[{"versiculo":1,"titulo":"Pacto de Salomón con Hiram"}],"3":[{"versiculo":1,"titulo":"Salomón edifica el templo"},{"versiculo":15,"titulo":"Las dos columnas"}],"4":[{"versiculo":1,"titulo":"Mobiliario del templo"}],"5":[{"versiculo":2,"titulo":"Salomón traslada el arca al templo"}],"6":[{"versiculo":1,"titulo":"Dedicación del templo"}],"7":[{"versiculo":11,"titulo":"Pacto de Dios con Salomón"}],"8":[{"versiculo":1,"titulo":"Otras actividades de Salomón"}],"9":[{"versiculo":1,"titulo":"La reina de Sabá visita a Salomón"},{"versiculo":13,"titulo":"Riquezas y fama de Salomón"},{"versiculo":29,"titulo":"Muerte de Salomón"}],"10":[{"versiculo":1,"titulo":"Rebelión de Israel"}],"11":[{"versiculo":5,"titulo":"Prosperidad de Roboam"}],"12":[{"versiculo":1,"titulo":"Sisac invade Judá"}],"13":[{"versiculo":1,"titulo":"Reinado de Abías"}],"14":[{"versiculo":1,"titulo":"Reinado de Asa"}],"15":[{"versiculo":1,"titulo":"Reformas religiosas de Asa"}],"16":[{"versiculo":1,"titulo":"Alianza de Asa con Ben-adad"},{"versiculo":11,"titulo":"Muerte de Asa"}],"17":[{"versiculo":1,"titulo":"Reinado de Josafat"}],"18":[{"versiculo":1,"titulo":"Micaías profetiza la derrota de Acab"}],"19":[{"versiculo":1,"titulo":"El profeta Jehú amonesta a Josafat"},{"versiculo":4,"titulo":"Josafat nombra jueces"}],"20":[{"versiculo":1,"titulo":"Victoria sobre Moab y Amón"},{"versiculo":31,"titulo":"Resumen del reinado de Josafat"}],"21":[{"versiculo":1,"titulo":"Reinado de Joram de Judá"}],"22":[{"versiculo":1,"titulo":"Reinado de Ocozías de Judá"},{"versiculo":7,"titulo":"Jehú mata a Ocozías"},{"versiculo":10,"titulo":"Atalía usurpa el trono"}],"24":[{"versiculo":1,"titulo":"Reinado de Joás de Judá"}],"25":[{"versiculo":1,"titulo":"Reinado de Amasías"}],"26":[{"versiculo":1,"titulo":"Reinado de Uzías"}],"27":[{"versiculo":1,"titulo":"Reinado de Jotam"}],"28":[{"versiculo":1,"titulo":"Reinado de Acaz"}],"29":[{"versiculo":1,"titulo":"Reinado de Ezequías"},{"versiculo":3,"titulo":"Ezequías restablece el culto del templo"}],"30":[{"versiculo":1,"titulo":"Ezequías celebra la pascua"}],"31":[{"versiculo":2,"titulo":"Ezequías reorganiza el servicio de los sacerdotes y levitas"}],"32":[{"versiculo":1,"titulo":"Senaquerib invade a Judá"},{"versiculo":20,"titulo":"Jehová libra a Ezequías"},{"versiculo":24,"titulo":"Enfermedad de Ezequías"},{"versiculo":27,"titulo":"Ezequías recibe a los enviados de Babilonia"},{"versiculo":32,"titulo":"Muerte de Ezequías"}],"33":[{"versiculo":1,"titulo":"Reinado de Manasés"},{"versiculo":21,"titulo":"Reinado de Amón"}],"34":[{"versiculo":1,"titulo":"Reinado de Josías"},{"versiculo":3,"titulo":"Reformas de Josías"},{"versiculo":8,"titulo":"Hallazgo del libro de la ley"}],"35":[{"versiculo":1,"titulo":"Josías celebra la pascua"},{"versiculo":20,"titulo":"Muerte de Josías"}],"36":[{"versiculo":1,"titulo":"Reinado y destronamiento de Joacaz"},{"versiculo":5,"titulo":"Reinado de Joacim"},{"versiculo":9,"titulo":"Joaquín es llevado cautivo a Babilonia"},{"versiculo":11,"titulo":"Reinado de Sedequías"},{"versiculo":17,"titulo":"Cautividad de Judá"},{"versiculo":22,"titulo":"El decreto de Ciro"}]},"esdras":{"1":[{"versiculo":1,"titulo":"El decreto de Ciro"},{"versiculo":5,"titulo":"El regreso a Jerusalén"}],"2":[{"versiculo":1,"titulo":"Los que volvieron con Zorobabel"}],"3":[{"versiculo":1,"titulo":"Restauración del altar y del culto"},{"versiculo":8,"titulo":"Colocación de los cimientos del templo"}],"4":[{"versiculo":1,"titulo":"Los adversarios detienen la obra"}],"5":[{"versiculo":1,"titulo":"Reedificación del templo"}],"7":[{"versiculo":1,"titulo":"Esdras y sus compañeros llegan a Jerusalén"}],"9":[{"versiculo":1,"titulo":"Oración de confesión de Esdras"}],"10":[{"versiculo":1,"titulo":"Expulsión de las mujeres extranjeras"}]},"nehemias":{"1":[{"versiculo":1,"titulo":"Oración de Nehemías sobre Jerusalén"}],"2":[{"versiculo":1,"titulo":"Artajerjes envía a Nehemías a Jerusalén"},{"versiculo":11,"titulo":"Nehemías anima al pueblo a reedificar los muros"}],"3":[{"versiculo":1,"titulo":"Reparto del trabajo de reedificación"}],"4":[{"versiculo":1,"titulo":"Precauciones contra los enemigos"}],"5":[{"versiculo":1,"titulo":"Abolición de la usura"}],"6":[{"versiculo":1,"titulo":"Maquinaciones de los adversarios"}],"7":[{"versiculo":1,"titulo":"Nehemías designa dirigentes"},{"versiculo":5,"titulo":"Los que volvieron con Zorobabel"},{"versiculo":73,"titulo":"Esdras lee la ley al pueblo"}],"9":[{"versiculo":1,"titulo":"Esdras confiesa los pecados de Israel"},{"versiculo":38,"titulo":"Pacto del pueblo, de guardar la ley"}],"11":[{"versiculo":1,"titulo":"Los habitantes de Jerusalén"},{"versiculo":25,"titulo":"Lugares habitados fuera de Jerusalén"}],"12":[{"versiculo":1,"titulo":"Sacerdotes y levitas"},{"versiculo":27,"titulo":"Dedicación del muro"},{"versiculo":44,"titulo":"Porciones para sacerdotes y levitas"}],"13":[{"versiculo":1,"titulo":"Reformas de Nehemías"}]},"ester":{"1":[{"versiculo":1,"titulo":"La reina Vasti desafía a Asuero"}],"2":[{"versiculo":1,"titulo":"Ester es proclamada reina"},{"versiculo":19,"titulo":"Mardoqueo denuncia una conspiración contra el rey"}],"3":[{"versiculo":1,"titulo":"Amán trama la destrucción de los judíos"}],"4":[{"versiculo":1,"titulo":"Ester promete interceder por su pueblo"}],"5":[{"versiculo":1,"titulo":"Ester invita al rey y a Amán a un banquete"}],"6":[{"versiculo":1,"titulo":"Amán se ve obligado a honrar a Mardoqueo"}],"7":[{"versiculo":1,"titulo":"Amán es ahorcado"}],"8":[{"versiculo":1,"titulo":"Decreto de Asuero a favor de los judíos"}],"9":[{"versiculo":1,"titulo":"Los judíos destruyen a sus enemigos"},{"versiculo":16,"titulo":"La fiesta de Purim"}],"10":[{"versiculo":1,"titulo":"Grandeza de Mardoqueo"}]},"job":{"1":[{"versiculo":1,"titulo":"Las calamidades de Job"}],"3":[{"versiculo":1,"titulo":"Job maldice el día en que nació"}],"4":[{"versiculo":1,"titulo":"Elifaz reprende a Job"}],"6":[{"versiculo":1,"titulo":"Job reprocha la actitud de sus amigos"}],"7":[{"versiculo":1,"titulo":"Job argumenta contra Dios"}],"8":[{"versiculo":1,"titulo":"Bildad proclama la justicia de Dios"}],"9":[{"versiculo":1,"titulo":"Incapacidad de Job para responder a Dios"}],"10":[{"versiculo":1,"titulo":"Job lamenta su condición"}],"11":[{"versiculo":1,"titulo":"Zofar acusa de maldad a Job"}],"12":[{"versiculo":1,"titulo":"Job proclama el poder y la sabiduría de Dios"}],"13":[{"versiculo":1,"titulo":"Job defiende su integridad"}],"14":[{"versiculo":1,"titulo":"Job discurre sobre la brevedad de la vida"}],"15":[{"versiculo":1,"titulo":"Elifaz reprende a Job"}],"16":[{"versiculo":1,"titulo":"Job se queja contra Dios"}],"18":[{"versiculo":1,"titulo":"Bildad describe la suerte de los malos"}],"19":[{"versiculo":1,"titulo":"Job confía en que Dios lo justificará"}],"20":[{"versiculo":1,"titulo":"Zofar describe las calamidades de los malos"}],"21":[{"versiculo":1,"titulo":"Job afirma que los malos prosperan"}],"22":[{"versiculo":1,"titulo":"Elifaz acusa a Job de gran maldad"}],"23":[{"versiculo":1,"titulo":"Job desea abogar su causa delante de Dios"}],"24":[{"versiculo":1,"titulo":"Job se queja de que Dios es indiferente ante la maldad"}],"25":[{"versiculo":1,"titulo":"Bildad niega que el hombre pueda ser justificado delante de Dios"}],"26":[{"versiculo":1,"titulo":"Job proclama la soberanía de Dios"}],"27":[{"versiculo":1,"titulo":"Job describe el castigo de los malos"}],"28":[{"versiculo":1,"titulo":"El hombre en busca de la sabiduría"}],"29":[{"versiculo":1,"titulo":"Job recuerda su felicidad anterior"}],"30":[{"versiculo":1,"titulo":"Job lamenta su desdicha actual"}],"31":[{"versiculo":1,"titulo":"Job afirma su integridad"}],"32":[{"versiculo":1,"titulo":"Eliú justifica su derecho de contestar a Job"}],"33":[{"versiculo":1,"titulo":"Eliú censura a Job"}],"34":[{"versiculo":1,"titulo":"Eliú justifica a Dios"}],"36":[{"versiculo":1,"titulo":"Eliú exalta la grandeza de Dios"}],"38":[{"versiculo":1,"titulo":"Jehová convence a Job de su ignorancia"}],"40":[{"versiculo":6,"titulo":"Manifestaciones del poder de Dios"}],"42":[{"versiculo":1,"titulo":"Confesión y justificación de Job"},{"versiculo":10,"titulo":"Restauración de la prosperidad de Job"}]},"salmos":{"1":[{"versiculo":1,"titulo":"LIBRO I"},{"versiculo":1,"titulo":"El justo y los pecadores"}],"2":[{"versiculo":1,"titulo":"El reino del ungido de Jehová"}],"3":[{"versiculo":1,"titulo":"Oración matutina de confianza en Dios"}],"4":[{"versiculo":1,"titulo":"Oración vespertina de confianza en Dios"}],"5":[{"versiculo":1,"titulo":"Plegaria pidiendo protección"}],"6":[{"versiculo":1,"titulo":"Oración pidiendo misericordia en tiempo de prueba"}],"7":[{"versiculo":1,"titulo":"Plegaria pidiendo vindicación"}],"8":[{"versiculo":1,"titulo":"La gloria de Dios y la honra del hombre"}],"9":[{"versiculo":1,"titulo":"Acción de gracias por la justicia de Dios"}],"10":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de los malvados"}],"11":[{"versiculo":1,"titulo":"El refugio del justo"}],"12":[{"versiculo":1,"titulo":"Oración pidiendo ayuda contra los malos"}],"13":[{"versiculo":1,"titulo":"Plegaria pidiendo ayuda en la aflicción"}],"14":[{"versiculo":1,"titulo":"Necedad y corrupción del hombre"}],"15":[{"versiculo":1,"titulo":"Los que habitarán en el monte santo de Dios"}],"16":[{"versiculo":1,"titulo":"Una herencia escogida"}],"17":[{"versiculo":1,"titulo":"Plegaria pidiendo protección contra los opresores"}],"18":[{"versiculo":1,"titulo":"Acción de gracias por la victoria"}],"19":[{"versiculo":1,"titulo":"Las obras y la palabra de Dios"}],"20":[{"versiculo":1,"titulo":"Oración pidiendo la victoria"}],"21":[{"versiculo":1,"titulo":"Alabanza por haber sido librado del enemigo"}],"22":[{"versiculo":1,"titulo":"Un grito de angustia y un canto de alabanza"}],"23":[{"versiculo":1,"titulo":"Jehová es mi pastor"}],"24":[{"versiculo":1,"titulo":"El rey de gloria"}],"25":[{"versiculo":1,"titulo":"David implora dirección, perdón y protección"}],"26":[{"versiculo":1,"titulo":"Declaración de integridad"}],"27":[{"versiculo":1,"titulo":"Jehová es mi luz y mi salvación"}],"28":[{"versiculo":1,"titulo":"Plegaria pidiendo ayuda, y alabanza por la respuesta"}],"29":[{"versiculo":1,"titulo":"Poder y gloria de Jehová"}],"30":[{"versiculo":1,"titulo":"Acción de gracias por haber sido librado de la muerte"}],"31":[{"versiculo":1,"titulo":"Declaración de confianza"}],"32":[{"versiculo":1,"titulo":"La dicha del perdón"}],"33":[{"versiculo":1,"titulo":"Alabanzas al Creador y Preservador"}],"34":[{"versiculo":1,"titulo":"La protección divina"}],"35":[{"versiculo":1,"titulo":"Plegaria pidiendo ser librado de los enemigos"}],"36":[{"versiculo":1,"titulo":"La misericordia de Dios"}],"37":[{"versiculo":1,"titulo":"El camino de los malos"}],"38":[{"versiculo":1,"titulo":"Oración de un penitente"}],"39":[{"versiculo":1,"titulo":"El carácter transitorio de la vida"}],"40":[{"versiculo":1,"titulo":"Alabanza por la liberación divina"}],"41":[{"versiculo":1,"titulo":"Oración pidiendo salud"}],"42":[{"versiculo":1,"titulo":"LIBRO II"},{"versiculo":1,"titulo":"Mi alma tiene sed de Dios"}],"43":[{"versiculo":1,"titulo":"Plegaria pidiendo vindicación y liberación"}],"44":[{"versiculo":1,"titulo":"Liberaciones pasadas y pruebas presentes"}],"45":[{"versiculo":1,"titulo":"Cántico de las bodas del rey"}],"46":[{"versiculo":1,"titulo":"Dios es nuestro amparo y fortaleza"}],"47":[{"versiculo":1,"titulo":"Dios, el Rey de toda la tierra"}],"48":[{"versiculo":1,"titulo":"Hermosura y gloria de Sion"}],"49":[{"versiculo":1,"titulo":"La insensatez de confiar en las riquezas"}],"50":[{"versiculo":1,"titulo":"Dios juzgará al mundo"}],"51":[{"versiculo":1,"titulo":"Arrepentimiento, y plegaria pidiendo purificación"}],"52":[{"versiculo":1,"titulo":"Futilidad de la jactancia del malo"}],"53":[{"versiculo":1,"titulo":"Insensatez y maldad de los hombres"}],"54":[{"versiculo":1,"titulo":"Plegaria pidiendo protección contra los enemigos"}],"55":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de enemigos traicioneros"}],"56":[{"versiculo":1,"titulo":"Oración de confianza"}],"57":[{"versiculo":1,"titulo":"Plegaria pidiendo ser librado de los perseguidores"}],"58":[{"versiculo":1,"titulo":"Plegaria pidiendo el castigo de los malos"}],"59":[{"versiculo":1,"titulo":"Oración pidiendo ser librado de los enemigos"}],"60":[{"versiculo":1,"titulo":"Plegaria pidiendo ayuda contra el enemigo"}],"61":[{"versiculo":1,"titulo":"Confianza en la protección de Dios"}],"62":[{"versiculo":1,"titulo":"Dios, el único refugio"}],"63":[{"versiculo":1,"titulo":"Dios, satisfacción del alma"}],"64":[{"versiculo":1,"titulo":"Plegaria pidiendo protección contra enemigos ocultos"}],"65":[{"versiculo":1,"titulo":"La generosidad de Dios en la naturaleza"}],"66":[{"versiculo":1,"titulo":"Alabanza por los hechos poderosos de Dios"}],"67":[{"versiculo":1,"titulo":"Exhortación a las naciones, para que alaben a Dios"}],"68":[{"versiculo":1,"titulo":"El Dios del Sinaí y del santuario"}],"69":[{"versiculo":1,"titulo":"Un grito de angustia"}],"70":[{"versiculo":1,"titulo":"Súplica por la liberación"}],"71":[{"versiculo":1,"titulo":"Oración de un anciano"}],"72":[{"versiculo":1,"titulo":"El reino de un rey justo"}],"73":[{"versiculo":1,"titulo":"LIBRO III"},{"versiculo":1,"titulo":"El destino de los malos"}],"74":[{"versiculo":1,"titulo":"Apelación a Dios en contra del enemigo"}],"75":[{"versiculo":1,"titulo":"Dios abate al malo y exalta al justo"}],"76":[{"versiculo":1,"titulo":"El Dios de la victoria y del juicio"}],"77":[{"versiculo":1,"titulo":"Meditación sobre los hechos poderosos de Dios"}],"78":[{"versiculo":1,"titulo":"Fidelidad de Dios hacia su pueblo infiel"}],"79":[{"versiculo":1,"titulo":"Lamento por la destrucción de Jerusalén"}],"80":[{"versiculo":1,"titulo":"Súplica por la restauración"}],"81":[{"versiculo":1,"titulo":"Bondad de Dios y perversidad de Israel"}],"82":[{"versiculo":1,"titulo":"Amonestación contra los juicios injustos"}],"83":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de los enemigos de Israel"}],"84":[{"versiculo":1,"titulo":"Anhelo por la casa de Dios"}],"85":[{"versiculo":1,"titulo":"Súplica por la misericordia de Dios sobre Israel"}],"86":[{"versiculo":1,"titulo":"Oración pidiendo la continuada misericordia de Dios"}],"87":[{"versiculo":1,"titulo":"El privilegio de morar en Sion"}],"88":[{"versiculo":1,"titulo":"Súplica por la liberación de la muerte"}],"89":[{"versiculo":1,"titulo":"Pacto de Dios con David"}],"90":[{"versiculo":1,"titulo":"LIBRO IV"},{"versiculo":1,"titulo":"La eternidad de Dios y la transitoriedad del hombre"}],"91":[{"versiculo":1,"titulo":"Morando bajo la sombra del Omnipotente"}],"92":[{"versiculo":1,"titulo":"Alabanza por la bondad de Dios"}],"93":[{"versiculo":1,"titulo":"La majestad de Jehová"}],"94":[{"versiculo":1,"titulo":"Oración clamando por venganza"}],"95":[{"versiculo":1,"titulo":"Cántico de alabanza y de adoración"}],"96":[{"versiculo":1,"titulo":"Cántico de alabanza"}],"97":[{"versiculo":1,"titulo":"El dominio y el poder de Jehová"}],"98":[{"versiculo":1,"titulo":"Alabanza por la justicia de Dios"}],"99":[{"versiculo":1,"titulo":"Fidelidad de Jehová para con Israel"}],"100":[{"versiculo":1,"titulo":"Exhortación a la gratitud"}],"101":[{"versiculo":1,"titulo":"Promesa de vivir rectamente"}],"102":[{"versiculo":1,"titulo":"Oración de un afligido"}],"103":[{"versiculo":1,"titulo":"Alabanza por las bendiciones de Dios"}],"104":[{"versiculo":1,"titulo":"Dios cuida de su creación"}],"105":[{"versiculo":1,"titulo":"Maravillas de Jehová a favor de Israel"}],"106":[{"versiculo":1,"titulo":"La rebeldía de Israel"}],"107":[{"versiculo":1,"titulo":"LIBRO V"},{"versiculo":1,"titulo":"Dios libra de la aflicción"}],"108":[{"versiculo":1,"titulo":"Petición de ayuda contra el enemigo"}],"109":[{"versiculo":1,"titulo":"Clamor de venganza"}],"110":[{"versiculo":1,"titulo":"Jehová da dominio al rey"}],"111":[{"versiculo":1,"titulo":"Dios cuida de su pueblo"}],"112":[{"versiculo":1,"titulo":"Prosperidad del que teme a Jehová"}],"113":[{"versiculo":1,"titulo":"Dios levanta al pobre"}],"114":[{"versiculo":1,"titulo":"Las maravillas del éxodo"}],"115":[{"versiculo":1,"titulo":"Dios y los ídolos"}],"116":[{"versiculo":1,"titulo":"Acción de gracias por haber sido librado de la muerte"}],"117":[{"versiculo":1,"titulo":"Alabanza por la misericordia de Jehová"}],"118":[{"versiculo":1,"titulo":"Acción de gracias por la salvación recibida de Jehová"}],"119":[{"versiculo":1,"titulo":"Excelencias de la ley de Dios"}],"120":[{"versiculo":1,"titulo":"Plegaria ante el peligro de la lengua engañosa"}],"121":[{"versiculo":1,"titulo":"Jehová es tu guardador"}],"122":[{"versiculo":1,"titulo":"Oración por la paz de Jerusalén"}],"123":[{"versiculo":1,"titulo":"Plegaria pidiendo misericordia"}],"124":[{"versiculo":1,"titulo":"Alabanza por haber sido librado de los enemigos"}],"125":[{"versiculo":1,"titulo":"Dios protege a su pueblo"}],"126":[{"versiculo":1,"titulo":"Oración por la restauración"}],"127":[{"versiculo":1,"titulo":"La prosperidad viene de Jehová"}],"128":[{"versiculo":1,"titulo":"La bienaventuranza del que teme a Jehová"}],"129":[{"versiculo":1,"titulo":"Plegaria pidiendo la destrucción de los enemigos de Sion"}],"130":[{"versiculo":1,"titulo":"Esperanza en que Jehová dará redención"}],"131":[{"versiculo":1,"titulo":"Confiando en Dios como un niño"}],"132":[{"versiculo":1,"titulo":"Plegaria por bendición sobre el santuario"}],"133":[{"versiculo":1,"titulo":"La bienaventuranza del amor fraternal"}],"134":[{"versiculo":1,"titulo":"Exhortación a los guardas del templo"}],"135":[{"versiculo":1,"titulo":"La grandeza del Señor y la vanidad de los ídolos"}],"136":[{"versiculo":1,"titulo":"Alabanza por la misericordia eterna de Jehová"}],"137":[{"versiculo":1,"titulo":"Lamento de los cautivos en Babilonia"}],"138":[{"versiculo":1,"titulo":"Acción de gracias por el favor de Jehová"}],"139":[{"versiculo":1,"titulo":"Omnipresencia y omnisciencia de Dios"}],"140":[{"versiculo":1,"titulo":"Súplica de protección contra los perseguidores"}],"141":[{"versiculo":1,"titulo":"Oración a fin de ser guardado del mal"}],"142":[{"versiculo":1,"titulo":"Petición de ayuda en medio de la prueba"}],"143":[{"versiculo":1,"titulo":"Súplica de liberación y dirección"}],"144":[{"versiculo":1,"titulo":"Oración pidiendo socorro y prosperidad"}],"145":[{"versiculo":1,"titulo":"Alabanza por la bondad y el poder de Dios"}],"146":[{"versiculo":1,"titulo":"Alabanza por la justicia de Dios"}],"147":[{"versiculo":1,"titulo":"Alabanza por el favor de Dios hacia Jerusalén"}],"148":[{"versiculo":1,"titulo":"Exhortación a la creación, para que alabe a Jehová"}],"149":[{"versiculo":1,"titulo":"Exhortación a Israel, para que alabe a Jehová"}],"150":[{"versiculo":1,"titulo":"Exhortación a alabar a Dios con instrumentos de música"}]},"proverbios":{"1":[{"versiculo":1,"titulo":"Motivo de los proverbios"},{"versiculo":8,"titulo":"Amonestaciones de la sabiduría"}],"2":[{"versiculo":1,"titulo":"Excelencias de la sabiduría"}],"3":[{"versiculo":1,"titulo":"Exhortación a la obediencia"}],"4":[{"versiculo":1,"titulo":"Beneficios de la sabiduría"}],"5":[{"versiculo":1,"titulo":"Amonestación contra la impureza"}],"6":[{"versiculo":1,"titulo":"Amonestación contra la pereza y la falsedad"},{"versiculo":20,"titulo":"Amonestación contra el adulterio"}],"7":[{"versiculo":1,"titulo":"Las artimañas de la ramera"}],"8":[{"versiculo":1,"titulo":"Excelencia y eternidad de la sabiduría"}],"9":[{"versiculo":1,"titulo":"La sabiduría y la mujer insensata"}],"10":[{"versiculo":1,"titulo":"Contraste entre el justo y el malvado"}],"16":[{"versiculo":1,"titulo":"Proverbios sobre la vida y la conducta"}],"22":[{"versiculo":17,"titulo":"Preceptos y amonestaciones"}],"25":[{"versiculo":1,"titulo":"Comparaciones y lecciones morales"}],"28":[{"versiculo":1,"titulo":"Proverbios antitéticos"}],"30":[{"versiculo":1,"titulo":"Las palabras de Agur"}],"31":[{"versiculo":1,"titulo":"Exhortación a un rey"},{"versiculo":10,"titulo":"Elogio de la mujer virtuosa"}]},"eclesiastes":{"1":[{"versiculo":1,"titulo":"Todo es vanidad"},{"versiculo":12,"titulo":"La experiencia del Predicador"}],"3":[{"versiculo":1,"titulo":"Todo tiene su tiempo"},{"versiculo":16,"titulo":"Injusticias de la vida"}],"5":[{"versiculo":1,"titulo":"La insensatez de hacer votos a la ligera"},{"versiculo":8,"titulo":"La vanidad de la vida"}],"7":[{"versiculo":1,"titulo":"Contraste entre la sabiduría y la insensatez"}],"8":[{"versiculo":10,"titulo":"Desigualdades de la vida"}],"10":[{"versiculo":1,"titulo":"Excelencia de la sabiduría"}],"11":[{"versiculo":9,"titulo":"Consejos para la juventud"}],"12":[{"versiculo":9,"titulo":"Resumen del deber del hombre"}]},"cantares":{"1":[{"versiculo":1,"titulo":"La esposa y las hijas de Jerusalén"},{"versiculo":9,"titulo":"La esposa y el esposo"}],"3":[{"versiculo":1,"titulo":"El ensueño de la esposa"},{"versiculo":6,"titulo":"El cortejo de bodas"}],"4":[{"versiculo":1,"titulo":"El esposo alaba a la esposa"}],"5":[{"versiculo":2,"titulo":"El tormento de la separación"},{"versiculo":9,"titulo":"La esposa alaba al esposo"}],"6":[{"versiculo":1,"titulo":"Mutuo encanto del esposo y de la esposa"}],"8":[{"versiculo":5,"titulo":"El poder del amor"}]},"isaias":{"1":[{"versiculo":1,"titulo":"Una nación pecadora"},{"versiculo":10,"titulo":"Llamamiento al arrepentimiento verdadero"},{"versiculo":21,"titulo":"Juicio y redención de Jerusalén"}],"2":[{"versiculo":1,"titulo":"Reinado universal de Jehová"},{"versiculo":5,"titulo":"Juicio de Jehová contra los soberbios"}],"3":[{"versiculo":1,"titulo":"Juicio de Jehová contra Judá y Jerusalén"},{"versiculo":16,"titulo":"Juicio contra las hijas de Sion"}],"4":[{"versiculo":2,"titulo":"Futuro glorioso de Jerusalén"}],"5":[{"versiculo":1,"titulo":"Parábola de la viña"},{"versiculo":8,"titulo":"Ayes sobre los malvados"}],"6":[{"versiculo":1,"titulo":"Visión y llamamiento de Isaías"}],"7":[{"versiculo":1,"titulo":"Mensaje de Isaías a Acaz"}],"8":[{"versiculo":1,"titulo":"Sea Jehová vuestro temor"}],"9":[{"versiculo":1,"titulo":"Nacimiento y reinado del Mesías"},{"versiculo":8,"titulo":"La ira de Jehová contra Israel"}],"10":[{"versiculo":5,"titulo":"Asiria, instrumento de Dios"}],"11":[{"versiculo":1,"titulo":"Reinado justo del Mesías"}],"12":[{"versiculo":1,"titulo":"Cántico de acción de gracias"}],"13":[{"versiculo":1,"titulo":"Profecía sobre Babilonia"}],"14":[{"versiculo":1,"titulo":"Escarnio contra el rey de Babilonia"},{"versiculo":24,"titulo":"Asiria será destruida"},{"versiculo":28,"titulo":"Profecía sobre Filistea"}],"15":[{"versiculo":1,"titulo":"Profecía sobre Moab"}],"17":[{"versiculo":1,"titulo":"Profecía sobre Damasco"},{"versiculo":4,"titulo":"Juicio sobre Israel"}],"18":[{"versiculo":1,"titulo":"Profecía sobre Etiopía"}],"19":[{"versiculo":1,"titulo":"Profecía sobre Egipto"}],"20":[{"versiculo":1,"titulo":"Predicción de la conquista de Egipto y de Etiopía por Asiria"}],"21":[{"versiculo":1,"titulo":"Profecía sobre el desierto del mar"},{"versiculo":11,"titulo":"Profecía sobre Duma"},{"versiculo":13,"titulo":"Profecía sobre Arabia"}],"22":[{"versiculo":1,"titulo":"Profecía sobre el valle de la visión"},{"versiculo":15,"titulo":"Sebna será sustituido por Eliaquim"}],"23":[{"versiculo":1,"titulo":"Profecía sobre Tiro"}],"24":[{"versiculo":1,"titulo":"El juicio de Jehová sobre la tierra"}],"25":[{"versiculo":1,"titulo":"Cántico de alabanza por el favor de Jehová"}],"26":[{"versiculo":1,"titulo":"Cántico de confianza en la protección de Jehová"}],"27":[{"versiculo":1,"titulo":"Liberación y regreso de Israel"}],"28":[{"versiculo":1,"titulo":"Condenación de Efraín"},{"versiculo":14,"titulo":"Amonestación a Jerusalén"}],"29":[{"versiculo":1,"titulo":"Ariel y sus enemigos"},{"versiculo":9,"titulo":"Ceguera e hipocresía de Israel"},{"versiculo":17,"titulo":"Redención de Israel"}],"30":[{"versiculo":1,"titulo":"La futilidad de confiar en Egipto"},{"versiculo":18,"titulo":"Promesa de la gracia de Dios a Israel"},{"versiculo":27,"titulo":"El juicio de Jehová sobre Asiria"}],"31":[{"versiculo":1,"titulo":"Los egipcios son hombres y no dioses"}],"32":[{"versiculo":1,"titulo":"El Rey justo"},{"versiculo":9,"titulo":"Advertencia a las mujeres de Jerusalén"}],"33":[{"versiculo":1,"titulo":"Jehová traerá salvación"}],"34":[{"versiculo":1,"titulo":"La ira de Jehová contra las naciones"}],"35":[{"versiculo":1,"titulo":"Futuro glorioso de Sion"}],"36":[{"versiculo":1,"titulo":"La invasión de Senaquerib"}],"37":[{"versiculo":1,"titulo":"Judá es librado de Senaquerib"}],"38":[{"versiculo":1,"titulo":"Enfermedad de Ezequías"}],"39":[{"versiculo":1,"titulo":"Ezequías recibe a los enviados de Babilonia"}],"40":[{"versiculo":1,"titulo":"Jehová consuela a Sion"},{"versiculo":12,"titulo":"El incomparable Dios de Israel"}],"41":[{"versiculo":1,"titulo":"Seguridad de Dios para Israel"},{"versiculo":21,"titulo":"Dios reta a los falsos dioses"}],"42":[{"versiculo":1,"titulo":"El Siervo de Jehová"},{"versiculo":10,"titulo":"Alabanza por la liberación poderosa de Jehová"},{"versiculo":18,"titulo":"Israel no aprende de la disciplina"}],"43":[{"versiculo":1,"titulo":"Jehová es el único Redentor"}],"44":[{"versiculo":1,"titulo":"Jehová es el único Dios"},{"versiculo":9,"titulo":"La insensatez de la idolatría"},{"versiculo":21,"titulo":"Jehová es el Redentor de Israel"}],"45":[{"versiculo":1,"titulo":"Encargo de Dios para Ciro"},{"versiculo":8,"titulo":"Jehová el Creador"},{"versiculo":20,"titulo":"Jehová y los ídolos de Babilonia"}],"47":[{"versiculo":1,"titulo":"Juicio sobre Babilonia"}],"48":[{"versiculo":1,"titulo":"Dios reprende la infidelidad de Israel"}],"49":[{"versiculo":1,"titulo":"Israel, siervo de Jehová"},{"versiculo":8,"titulo":"Dios promete restaurar a Sion"}],"50":[{"versiculo":1,"titulo":"Jehová ayuda a quienes confían en él"}],"51":[{"versiculo":1,"titulo":"Palabras de consuelo para Sion"}],"52":[{"versiculo":1,"titulo":"Dios librará del cautiverio a Sion"},{"versiculo":13,"titulo":"Sufrimientos del Siervo de Jehová"}],"54":[{"versiculo":1,"titulo":"El amor eterno de Jehová hacia Israel"}],"55":[{"versiculo":1,"titulo":"Misericordia gratuita para todos"}],"56":[{"versiculo":1,"titulo":"Recompensa de los que guardan el pacto de Dios"}],"57":[{"versiculo":1,"titulo":"Condenación de la idolatría de Israel"}],"58":[{"versiculo":1,"titulo":"El verdadero ayuno"},{"versiculo":13,"titulo":"La observancia del día de reposo"}],"59":[{"versiculo":1,"titulo":"Confesión del pecado de Israel"}],"60":[{"versiculo":1,"titulo":"La futura gloria de Sion"}],"61":[{"versiculo":1,"titulo":"Buenas nuevas de salvación para Sion"}],"63":[{"versiculo":1,"titulo":"El día de la venganza de Jehová"},{"versiculo":7,"titulo":"Bondad de Jehová hacia Israel"},{"versiculo":15,"titulo":"Plegaria pidiendo misericordia y ayuda"}],"65":[{"versiculo":1,"titulo":"Castigo de los rebeldes"},{"versiculo":17,"titulo":"Cielos nuevos y tierra nueva"}],"66":[{"versiculo":1,"titulo":"Los juicios de Jehová y la futura prosperidad de Sion"}]},"jeremias":{"1":[{"versiculo":1,"titulo":"Llamamiento y misión de Jeremías"}],"2":[{"versiculo":1,"titulo":"Jehová y la apostasía de Israel"}],"3":[{"versiculo":6,"titulo":"Jehová exhorta a Israel y a Judá al arrepentimiento"}],"4":[{"versiculo":5,"titulo":"Judá es amenazada de invasión"}],"5":[{"versiculo":1,"titulo":"Impiedad de Jerusalén y de Judá"}],"6":[{"versiculo":1,"titulo":"El juicio contra Jerusalén y Judá"}],"7":[{"versiculo":1,"titulo":"Mejorad vuestros caminos y vuestras obras"},{"versiculo":21,"titulo":"Castigo de la rebelión de Judá"}],"8":[{"versiculo":18,"titulo":"Lamento sobre Judá y Jerusalén"}],"9":[{"versiculo":12,"titulo":"Amenaza de ruina y exilio"},{"versiculo":23,"titulo":"El conocimiento de Dios es la gloria del hombre"}],"10":[{"versiculo":1,"titulo":"Los falsos dioses y el Dios verdadero"},{"versiculo":17,"titulo":"Asolamiento de Judá"}],"11":[{"versiculo":1,"titulo":"El pacto violado"},{"versiculo":18,"titulo":"Complot contra Jeremías"}],"12":[{"versiculo":1,"titulo":"Queja de Jeremías y respuesta de Dios"}],"13":[{"versiculo":1,"titulo":"La señal del cinto podrido"},{"versiculo":12,"titulo":"La señal de las tinajas llenas"},{"versiculo":15,"titulo":"Judá será llevada en cautiverio"}],"14":[{"versiculo":1,"titulo":"Mensaje con motivo de la sequía"}],"15":[{"versiculo":1,"titulo":"La implacable ira de Dios contra Judá"},{"versiculo":15,"titulo":"Jehová reanima a Jeremías"}],"16":[{"versiculo":1,"titulo":"Juicio de Jehová contra Judá"}],"17":[{"versiculo":1,"titulo":"El pecado escrito en el corazón de Judá"},{"versiculo":19,"titulo":"Observancia del día de reposo"}],"18":[{"versiculo":1,"titulo":"La señal del alfarero y el barro"},{"versiculo":18,"titulo":"Conspiración del pueblo y oración de Jeremías"}],"19":[{"versiculo":1,"titulo":"La señal de la vasija rota"}],"20":[{"versiculo":1,"titulo":"Profecía contra Pasur"},{"versiculo":7,"titulo":"Lamento de Jeremías"}],"21":[{"versiculo":1,"titulo":"Jerusalén será destruida"}],"22":[{"versiculo":1,"titulo":"Profecías contra los reyes de Judá"}],"23":[{"versiculo":1,"titulo":"Regreso del remanente"},{"versiculo":9,"titulo":"Denunciación de los falsos profetas"}],"24":[{"versiculo":1,"titulo":"La señal de los higos buenos y malos"}],"25":[{"versiculo":1,"titulo":"Setenta años de desolación"},{"versiculo":15,"titulo":"La copa de ira para las naciones"}],"26":[{"versiculo":1,"titulo":"Jeremías es amenazado de muerte"}],"27":[{"versiculo":1,"titulo":"La señal de los yugos"}],"28":[{"versiculo":1,"titulo":"Falsa profecía de Hananías"}],"29":[{"versiculo":1,"titulo":"Carta de Jeremías a los cautivos"}],"30":[{"versiculo":1,"titulo":"Dios promete que los cautivos volverán"}],"31":[{"versiculo":27,"titulo":"El nuevo pacto"}],"32":[{"versiculo":1,"titulo":"Jeremías compra la heredad de Hanameel"}],"33":[{"versiculo":1,"titulo":"Restauración de la prosperidad de Jerusalén"}],"34":[{"versiculo":1,"titulo":"Jeremías amonesta a Sedequías"},{"versiculo":8,"titulo":"Violación del pacto de libertar a los siervos hebreos"}],"35":[{"versiculo":1,"titulo":"Obediencia de los recabitas"}],"36":[{"versiculo":1,"titulo":"El rey quema el rollo"}],"37":[{"versiculo":1,"titulo":"Encarcelamiento de Jeremías"}],"38":[{"versiculo":1,"titulo":"Jeremías en la cisterna"},{"versiculo":14,"titulo":"Sedequías consulta secretamente a Jeremías"}],"39":[{"versiculo":1,"titulo":"Caída de Jerusalén"},{"versiculo":11,"titulo":"Nabucodonosor cuida de Jeremías"},{"versiculo":15,"titulo":"Dios promete librar a Ebed-melec"}],"40":[{"versiculo":1,"titulo":"Jeremías y el remanente con Gedalías"},{"versiculo":13,"titulo":"Conspiración de Ismael contra Gedalías"}],"42":[{"versiculo":1,"titulo":"Mensaje a Johanán"}],"43":[{"versiculo":1,"titulo":"La emigración a Egipto"}],"44":[{"versiculo":1,"titulo":"Jeremías profetiza a los judíos en Egipto"}],"45":[{"versiculo":1,"titulo":"Mensaje a Baruc"}],"46":[{"versiculo":1,"titulo":"Profecías acerca de Egipto"}],"47":[{"versiculo":1,"titulo":"Profecía sobre los filisteos"}],"48":[{"versiculo":1,"titulo":"Profecía sobre Moab"}],"49":[{"versiculo":1,"titulo":"Profecía sobre los amonitas"},{"versiculo":7,"titulo":"Profecía sobre Edom"},{"versiculo":23,"titulo":"Profecía sobre Damasco"},{"versiculo":28,"titulo":"Profecía sobre Cedar y Hazor"},{"versiculo":34,"titulo":"Profecía sobre Elam"}],"50":[{"versiculo":1,"titulo":"Profecía sobre Babilonia"}],"51":[{"versiculo":1,"titulo":"Juicios de Jehová contra Babilonia"}],"52":[{"versiculo":1,"titulo":"Reinado de Sedequías"},{"versiculo":4,"titulo":"Caída de Jerusalén"},{"versiculo":12,"titulo":"Cautividad de Judá"},{"versiculo":31,"titulo":"Joaquín es libertado y recibe honores en Babilonia"}]},"lamentaciones":{"1":[{"versiculo":1,"titulo":"Tristezas de Sion la cautiva"}],"2":[{"versiculo":1,"titulo":"Las tristezas de Sion vienen de Jehová"}],"3":[{"versiculo":1,"titulo":"Esperanza de liberación por la misericordia de Dios"}],"4":[{"versiculo":1,"titulo":"El castigo de Sion consumado"}],"5":[{"versiculo":1,"titulo":"Oración del pueblo afligido"}]},"ezequiel":{"1":[{"versiculo":1,"titulo":"La visión de la gloria divina"}],"2":[{"versiculo":1,"titulo":"Llamamiento de Ezequiel"}],"3":[{"versiculo":16,"titulo":"El atalaya de Israel"},{"versiculo":22,"titulo":"El profeta mudo"}],"4":[{"versiculo":1,"titulo":"Predicción del sitio de Jerusalén"}],"6":[{"versiculo":1,"titulo":"Profecía contra los montes de Israel"}],"7":[{"versiculo":1,"titulo":"El fin viene"}],"8":[{"versiculo":1,"titulo":"Visión de las abominaciones en Jerusalén"}],"9":[{"versiculo":1,"titulo":"Visión de la muerte de los culpables"}],"10":[{"versiculo":1,"titulo":"La gloria de Dios abandona el templo"}],"11":[{"versiculo":1,"titulo":"Reprensión de los príncipes malvados"},{"versiculo":14,"titulo":"Promesa de restauración y renovación"}],"12":[{"versiculo":1,"titulo":"Salida de Ezequiel en señal de la cautividad"}],"13":[{"versiculo":1,"titulo":"Condenación de los falsos profetas"}],"14":[{"versiculo":1,"titulo":"Juicio contra los idólatras que consultan al profeta"},{"versiculo":12,"titulo":"Justicia del castigo de Jerusalén"}],"15":[{"versiculo":1,"titulo":"Jerusalén es como una vid inútil"}],"16":[{"versiculo":1,"titulo":"Infidelidad de Jerusalén"}],"17":[{"versiculo":1,"titulo":"Parábola de las águilas y la vid"}],"18":[{"versiculo":1,"titulo":"El alma que pecare morirá"},{"versiculo":21,"titulo":"El camino de Dios es justo"}],"19":[{"versiculo":1,"titulo":"Lamentación sobre los príncipes de Israel"}],"20":[{"versiculo":1,"titulo":"Modo de proceder de Dios con Israel"},{"versiculo":45,"titulo":"Profecía contra el Neguev"}],"21":[{"versiculo":1,"titulo":"La espada afilada de Jehová"},{"versiculo":28,"titulo":"Juicio contra los amonitas"}],"22":[{"versiculo":1,"titulo":"Los pecados de Jerusalén"}],"23":[{"versiculo":1,"titulo":"Las dos hermanas"}],"24":[{"versiculo":1,"titulo":"Parábola de la olla hirviente"},{"versiculo":15,"titulo":"Muerte de la esposa de Ezequiel"}],"25":[{"versiculo":1,"titulo":"Profecía contra Amón"},{"versiculo":8,"titulo":"Profecía contra Moab"},{"versiculo":12,"titulo":"Profecía contra Edom"},{"versiculo":15,"titulo":"Profecía contra los filisteos"}],"26":[{"versiculo":1,"titulo":"Profecía contra Tiro"}],"28":[{"versiculo":20,"titulo":"Profecía contra Sidón"}],"29":[{"versiculo":1,"titulo":"Profecías contra Egipto"}],"33":[{"versiculo":1,"titulo":"El deber del atalaya"},{"versiculo":10,"titulo":"El camino de Dios es justo"},{"versiculo":21,"titulo":"Nuevas de la caída de Jerusalén"}],"34":[{"versiculo":1,"titulo":"Profecía contra los pastores de Israel"}],"35":[{"versiculo":1,"titulo":"Profecía contra el monte de Seir"}],"36":[{"versiculo":1,"titulo":"Restauración futura de Israel"}],"37":[{"versiculo":1,"titulo":"El valle de los huesos secos"},{"versiculo":15,"titulo":"La reunión de Judá e Israel"}],"38":[{"versiculo":1,"titulo":"Profecía contra Gog"}],"40":[{"versiculo":1,"titulo":"La visión del templo"}],"43":[{"versiculo":1,"titulo":"La gloria de Jehová llena el templo"},{"versiculo":6,"titulo":"Leyes del templo"}],"47":[{"versiculo":1,"titulo":"Las aguas salutíferas"},{"versiculo":13,"titulo":"Límites y repartición de la tierra"}]},"daniel":{"1":[{"versiculo":1,"titulo":"Daniel y sus compañeros en Babilonia"}],"2":[{"versiculo":1,"titulo":"Daniel interpreta el sueño de Nabucodonosor"}],"3":[{"versiculo":1,"titulo":"Rescatados del horno de fuego"}],"4":[{"versiculo":1,"titulo":"La locura de Nabucodonosor"}],"5":[{"versiculo":1,"titulo":"La escritura en la pared"}],"6":[{"versiculo":1,"titulo":"Daniel en el foso de los leones"}],"7":[{"versiculo":1,"titulo":"Visión de las cuatro bestias"}],"8":[{"versiculo":1,"titulo":"Visión del carnero y del macho cabrío"}],"9":[{"versiculo":1,"titulo":"Oración de Daniel por su pueblo"},{"versiculo":20,"titulo":"Profecía de las setenta semanas"}],"10":[{"versiculo":1,"titulo":"Visión de Daniel junto al río"}],"11":[{"versiculo":2,"titulo":"Los reyes del norte y del sur"}],"12":[{"versiculo":1,"titulo":"El tiempo del fin"}]},"oseas":{"1":[{"versiculo":1,"titulo":"La esposa infiel de Oseas, y sus hijos"}],"2":[{"versiculo":1,"titulo":"El amor de Jehová hacia su pueblo infiel"}],"3":[{"versiculo":1,"titulo":"Oseas y la adúltera"}],"4":[{"versiculo":1,"titulo":"Controversia de Jehová con Israel"}],"5":[{"versiculo":1,"titulo":"Castigo de la apostasía de Israel"},{"versiculo":15,"titulo":"Insinceridad del arrepentimiento de Israel"}],"7":[{"versiculo":1,"titulo":"Iniquidad y rebelión de Israel"}],"8":[{"versiculo":1,"titulo":"Reprensión de la idolatría de Israel"}],"9":[{"versiculo":1,"titulo":"Castigo de la persistente infidelidad de Israel"}],"11":[{"versiculo":1,"titulo":"Dios se compadece de su pueblo obstinado"}],"12":[{"versiculo":1,"titulo":"Efraín reprendido por su falsedad y opresión"}],"13":[{"versiculo":1,"titulo":"Destrucción total de Efraín predicha"}],"14":[{"versiculo":1,"titulo":"Súplica a Israel para que vuelva a Jehová"}]},"joel":{"1":[{"versiculo":1,"titulo":"Devastación de la tierra por la langosta"}],"2":[{"versiculo":12,"titulo":"La misericordia de Jehová"},{"versiculo":28,"titulo":"Derramamiento del Espíritu de Dios"}],"3":[{"versiculo":1,"titulo":"Juicio de Jehová sobre las naciones"},{"versiculo":16,"titulo":"Liberación de Judá"}]},"amos":{"1":[{"versiculo":1,"titulo":"Juicios contra las naciones vecinas"}],"2":[{"versiculo":6,"titulo":"Juicio contra Israel"}],"3":[{"versiculo":1,"titulo":"El rugido del león"},{"versiculo":9,"titulo":"Destrucción de Samaria"}],"4":[{"versiculo":4,"titulo":"Aunque castigado, Israel no aprende"}],"5":[{"versiculo":1,"titulo":"Llamamiento al arrepentimiento"}],"6":[{"versiculo":1,"titulo":"Destrucción de Israel"}],"7":[{"versiculo":1,"titulo":"Tres visiones de destrucción"},{"versiculo":10,"titulo":"Amós y Amasías"}],"8":[{"versiculo":1,"titulo":"El canastillo de fruta de verano"},{"versiculo":4,"titulo":"El juicio sobre Israel se acerca"}],"9":[{"versiculo":1,"titulo":"Los juicios de Jehová son ineludibles"},{"versiculo":11,"titulo":"Restauración futura de Israel"}]},"abdias":{"1":[{"versiculo":1,"titulo":"La humillación de Edom"},{"versiculo":15,"titulo":"La exaltación de Israel"}]},"jonas":{"1":[{"versiculo":1,"titulo":"Jonás huye de Jehová"}],"2":[{"versiculo":1,"titulo":"Oración de Jonás"}],"3":[{"versiculo":1,"titulo":"Nínive se arrepiente"}],"4":[{"versiculo":1,"titulo":"El enojo de Jonás"}]},"miqueas":{"1":[{"versiculo":1,"titulo":"Lamento sobre Samaria y Jerusalén"}],"2":[{"versiculo":1,"titulo":"¡Ay de los que oprimen a los pobres!"}],"3":[{"versiculo":1,"titulo":"Acusación contra los dirigentes de Israel"}],"4":[{"versiculo":1,"titulo":"Reinado universal de Jehová"},{"versiculo":6,"titulo":"Israel será redimido del cautiverio"}],"5":[{"versiculo":1,"titulo":"El reinado del libertador desde Belén"}],"6":[{"versiculo":1,"titulo":"Controversia de Jehová contra Israel"},{"versiculo":6,"titulo":"Lo que pide Jehová"}],"7":[{"versiculo":1,"titulo":"Corrupción moral de Israel"},{"versiculo":8,"titulo":"Jehová trae luz y libertad"},{"versiculo":14,"titulo":"Compasión de Jehová por Israel"}]},"nahum":{"1":[{"versiculo":1,"titulo":"La ira vengadora de Dios"},{"versiculo":15,"titulo":"Anuncio de la caída de Nínive"}],"2":[{"versiculo":13,"titulo":"Destrucción total de Nínive"}]},"habacuc":{"1":[{"versiculo":1,"titulo":"Habacuc se queja de injusticia"},{"versiculo":5,"titulo":"Los caldeos castigarán a Judá"},{"versiculo":12,"titulo":"Protesta de Habacuc"}],"2":[{"versiculo":1,"titulo":"Jehová responde a Habacuc"},{"versiculo":6,"titulo":"Ayes contra los injustos"}],"3":[{"versiculo":1,"titulo":"Oración de Habacuc"}]},"sofonias":{"1":[{"versiculo":1,"titulo":"El día de la ira de Jehová"}],"2":[{"versiculo":1,"titulo":"Juicios contra las naciones vecinas"}],"3":[{"versiculo":1,"titulo":"El pecado de Jerusalén, y su redención"}]},"hageo":{"1":[{"versiculo":1,"titulo":"Exhortación a edificar el templo"}],"2":[{"versiculo":1,"titulo":"La gloria del nuevo templo"},{"versiculo":10,"titulo":"La infidelidad del pueblo es reprendida"},{"versiculo":20,"titulo":"Promesa de Jehová a Zorobabel"}]},"zacarias":{"1":[{"versiculo":1,"titulo":"Llamamiento a volver a Jehová"},{"versiculo":7,"titulo":"La visión de los caballos"},{"versiculo":18,"titulo":"Visión de los cuernos y los carpinteros"}],"2":[{"versiculo":1,"titulo":"Llamamiento a los cautivos"}],"3":[{"versiculo":1,"titulo":"Visión del sumo sacerdote Josué"}],"4":[{"versiculo":1,"titulo":"El candelabro de oro y los olivos"}],"5":[{"versiculo":1,"titulo":"El rollo volante"},{"versiculo":5,"titulo":"La mujer en el efa"}],"6":[{"versiculo":1,"titulo":"Los cuatro carros"},{"versiculo":9,"titulo":"Coronación simbólica de Josué"}],"7":[{"versiculo":1,"titulo":"El ayuno que Dios reprueba"},{"versiculo":8,"titulo":"La desobediencia, causa del cautiverio"}],"8":[{"versiculo":1,"titulo":"Promesa de la restauración de Jerusalén"}],"9":[{"versiculo":1,"titulo":"Castigo de las naciones vecinas"},{"versiculo":9,"titulo":"El futuro rey de Sion"}],"10":[{"versiculo":1,"titulo":"Jehová redimirá a su pueblo"}],"11":[{"versiculo":4,"titulo":"Los pastores inútiles"}],"12":[{"versiculo":1,"titulo":"Liberación futura de Jerusalén"}],"13":[{"versiculo":7,"titulo":"El pastor de Jehová es herido"}],"14":[{"versiculo":1,"titulo":"Jerusalén y las naciones"}]},"malaquias":{"1":[{"versiculo":1,"titulo":"Amor de Jehová por Jacob"},{"versiculo":6,"titulo":"Jehová reprende a los sacerdotes"}],"2":[{"versiculo":1,"titulo":"Reprensión de la infidelidad de Israel"},{"versiculo":17,"titulo":"El día del juicio se acerca"}],"3":[{"versiculo":6,"titulo":"El pago de los diezmos"},{"versiculo":13,"titulo":"Diferencia entre el justo y el malo"}],"4":[{"versiculo":1,"titulo":"El advenimiento del día de Jehová"}]},"mateo":{"1":[{"versiculo":1,"titulo":"Genealogía de Jesucristo"},{"versiculo":18,"titulo":"Nacimiento de Jesucristo"}],"2":[{"versiculo":1,"titulo":"La visita de los magos"},{"versiculo":13,"titulo":"Matanza de los niños"}],"3":[{"versiculo":1,"titulo":"Predicación de Juan el Bautista"},{"versiculo":13,"titulo":"El bautismo de Jesús"}],"4":[{"versiculo":1,"titulo":"Tentación de Jesús"},{"versiculo":12,"titulo":"Jesús principia su ministerio"}],"5":[{"versiculo":1,"titulo":"El Sermón del monte: Las bienaventuranzas"},{"versiculo":13,"titulo":"La sal de la tierra"},{"versiculo":14,"titulo":"La luz del mundo"},{"versiculo":17,"titulo":"Jesús y la ley"},{"versiculo":21,"titulo":"Jesús y la ira"},{"versiculo":27,"titulo":"Jesús y el adulterio"},{"versiculo":31,"titulo":"Jesús y el divorcio"},{"versiculo":33,"titulo":"Jesús y los juramentos"},{"versiculo":38,"titulo":"El amor hacia los enemigos"}],"6":[{"versiculo":1,"titulo":"Jesús y la limosna"},{"versiculo":5,"titulo":"Jesús y la oración"},{"versiculo":16,"titulo":"Jesús y el ayuno"},{"versiculo":19,"titulo":"Tesoros en el cielo"},{"versiculo":22,"titulo":"La lámpara del cuerpo"},{"versiculo":24,"titulo":"Dios y las riquezas"},{"versiculo":25,"titulo":"El afán y la ansiedad"}],"7":[{"versiculo":1,"titulo":"El juzgar a los demás"},{"versiculo":7,"titulo":"La oración, y la regla de oro"},{"versiculo":13,"titulo":"La puerta estrecha"},{"versiculo":15,"titulo":"Por sus frutos los conoceréis"},{"versiculo":21,"titulo":"Nunca os conocí"},{"versiculo":24,"titulo":"Los dos cimientos"}],"8":[{"versiculo":1,"titulo":"Jesús sana a un leproso"},{"versiculo":5,"titulo":"Jesús sana al siervo de un centurión"},{"versiculo":14,"titulo":"Jesús sana a la suegra de Pedro"},{"versiculo":18,"titulo":"Los que querían seguir a Jesús"},{"versiculo":23,"titulo":"Jesús calma la tempestad"},{"versiculo":28,"titulo":"Los endemoniados gadarenos"}],"9":[{"versiculo":1,"titulo":"Jesús sana a un paralítico"},{"versiculo":9,"titulo":"Llamamiento de Mateo"},{"versiculo":14,"titulo":"La pregunta sobre el ayuno"},{"versiculo":18,"titulo":"La hija de Jairo, y la mujer que tocó el manto de Jesús"},{"versiculo":27,"titulo":"Dos ciegos reciben la vista"},{"versiculo":32,"titulo":"Un mudo habla"},{"versiculo":35,"titulo":"La mies es mucha"}],"10":[{"versiculo":1,"titulo":"Elección de los doce apóstoles"},{"versiculo":5,"titulo":"Misión de los doce"},{"versiculo":16,"titulo":"Persecuciones venideras"},{"versiculo":26,"titulo":"A quién se debe temer"},{"versiculo":34,"titulo":"Jesús, causa de división"},{"versiculo":40,"titulo":"Recompensas"}],"11":[{"versiculo":1,"titulo":"Los mensajeros de Juan el Bautista"},{"versiculo":20,"titulo":"Ayes sobre las ciudades impenitentes"},{"versiculo":25,"titulo":"Venid a mí y descansad"}],"12":[{"versiculo":1,"titulo":"Los discípulos recogen espigas en el día de reposo"},{"versiculo":9,"titulo":"El hombre de la mano seca"},{"versiculo":15,"titulo":"El siervo escogido"},{"versiculo":22,"titulo":"La blasfemia contra el Espíritu Santo"},{"versiculo":38,"titulo":"La generación perversa demanda señal"},{"versiculo":43,"titulo":"El espíritu inmundo que vuelve"},{"versiculo":46,"titulo":"La madre y los hermanos de Jesús"}],"13":[{"versiculo":1,"titulo":"Parábola del sembrador"},{"versiculo":10,"titulo":"Propósito de las parábolas"},{"versiculo":18,"titulo":"Jesús explica la parábola del sembrador"},{"versiculo":24,"titulo":"Parábola del trigo y la cizaña"},{"versiculo":31,"titulo":"Parábola de la semilla de mostaza"},{"versiculo":33,"titulo":"Parábola de la levadura"},{"versiculo":34,"titulo":"El uso que Jesús hace de las parábolas"},{"versiculo":36,"titulo":"Jesús explica la parábola de la cizaña"},{"versiculo":44,"titulo":"El tesoro escondido"},{"versiculo":45,"titulo":"La perla de gran precio"},{"versiculo":47,"titulo":"La red"},{"versiculo":51,"titulo":"Tesoros nuevos y viejos"},{"versiculo":53,"titulo":"Jesús en Nazaret"}],"14":[{"versiculo":1,"titulo":"Muerte de Juan el Bautista"},{"versiculo":13,"titulo":"Alimentación de los cinco mil"},{"versiculo":22,"titulo":"Jesús anda sobre el mar"},{"versiculo":34,"titulo":"Jesús sana a los enfermos en Genesaret"}],"15":[{"versiculo":1,"titulo":"Lo que contamina al hombre"},{"versiculo":21,"titulo":"La fe de la mujer cananea"},{"versiculo":29,"titulo":"Jesús sana a muchos"},{"versiculo":32,"titulo":"Alimentación de los cuatro mil"}],"16":[{"versiculo":1,"titulo":"La demanda de una señal"},{"versiculo":5,"titulo":"La levadura de los fariseos"},{"versiculo":13,"titulo":"La confesión de Pedro"},{"versiculo":21,"titulo":"Jesús anuncia su muerte"}],"17":[{"versiculo":1,"titulo":"La transfiguración"},{"versiculo":14,"titulo":"Jesús sana a un muchacho lunático"},{"versiculo":22,"titulo":"Jesús anuncia otra vez su muerte"},{"versiculo":24,"titulo":"Pago del impuesto del templo"}],"18":[{"versiculo":1,"titulo":"¿Quién es el mayor?"},{"versiculo":6,"titulo":"Ocasiones de caer"},{"versiculo":10,"titulo":"Parábola de la oveja perdida"},{"versiculo":15,"titulo":"Cómo se debe perdonar al hermano"},{"versiculo":23,"titulo":"Los dos deudores"}],"19":[{"versiculo":1,"titulo":"Jesús enseña sobre el divorcio"},{"versiculo":13,"titulo":"Jesús bendice a los niños"},{"versiculo":16,"titulo":"El joven rico"}],"20":[{"versiculo":1,"titulo":"Los obreros de la viña"},{"versiculo":17,"titulo":"Nuevamente Jesús anuncia su muerte"},{"versiculo":20,"titulo":"Petición de Santiago y de Juan"},{"versiculo":29,"titulo":"Dos ciegos reciben la vista"}],"21":[{"versiculo":1,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":12,"titulo":"Purificación del templo"},{"versiculo":18,"titulo":"Maldición de la higuera estéril"},{"versiculo":23,"titulo":"La autoridad de Jesús"},{"versiculo":28,"titulo":"Parábola de los dos hijos"},{"versiculo":33,"titulo":"Los labradores malvados"}],"22":[{"versiculo":1,"titulo":"Parábola de la fiesta de bodas"},{"versiculo":15,"titulo":"La cuestión del tributo"},{"versiculo":23,"titulo":"La pregunta sobre la resurrección"},{"versiculo":34,"titulo":"El gran mandamiento"},{"versiculo":41,"titulo":"¿De quién es hijo el Cristo?"}],"23":[{"versiculo":1,"titulo":"Jesús acusa a escribas y fariseos"},{"versiculo":37,"titulo":"Lamento de Jesús sobre Jerusalén"}],"24":[{"versiculo":1,"titulo":"Jesús predice la destrucción del templo"},{"versiculo":3,"titulo":"Señales antes del fin"},{"versiculo":29,"titulo":"La venida del Hijo del Hombre"}],"25":[{"versiculo":1,"titulo":"Parábola de las diez vírgenes"},{"versiculo":14,"titulo":"Parábola de los talentos"},{"versiculo":31,"titulo":"El juicio de las naciones"}],"26":[{"versiculo":1,"titulo":"El complot para prender a Jesús"},{"versiculo":6,"titulo":"Jesús es ungido en Betania"},{"versiculo":14,"titulo":"Judas ofrece entregar a Jesús"},{"versiculo":17,"titulo":"Institución de la Cena del Señor"},{"versiculo":30,"titulo":"Jesús anuncia la negación de Pedro"},{"versiculo":36,"titulo":"Jesús ora en Getsemaní"},{"versiculo":47,"titulo":"Arresto de Jesús"},{"versiculo":57,"titulo":"Jesús ante el concilio"},{"versiculo":69,"titulo":"Pedro niega a Jesús"}],"27":[{"versiculo":1,"titulo":"Jesús ante Pilato"},{"versiculo":3,"titulo":"Muerte de Judas"},{"versiculo":11,"titulo":"Pilato interroga a Jesús"},{"versiculo":15,"titulo":"Jesús sentenciado a muerte"},{"versiculo":32,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":57,"titulo":"Jesús es sepultado"},{"versiculo":62,"titulo":"La guardia ante la tumba"}],"28":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":11,"titulo":"El informe de la guardia"},{"versiculo":16,"titulo":"La gran comisión"}]},"marcos":{"1":[{"versiculo":1,"titulo":"Predicación de Juan el Bautista"},{"versiculo":9,"titulo":"El bautismo de Jesús"},{"versiculo":12,"titulo":"Tentación de Jesús"},{"versiculo":14,"titulo":"Jesús principia su ministerio"},{"versiculo":16,"titulo":"Jesús llama a cuatro pescadores"},{"versiculo":21,"titulo":"Un hombre que tenía un espíritu inmundo"},{"versiculo":29,"titulo":"Jesús sana a la suegra de Pedro"},{"versiculo":32,"titulo":"Muchos sanados al ponerse el sol"},{"versiculo":35,"titulo":"Jesús recorre Galilea predicando"},{"versiculo":40,"titulo":"Jesús sana a un leproso"}],"2":[{"versiculo":1,"titulo":"Jesús sana a un paralítico"},{"versiculo":13,"titulo":"Llamamiento de Leví"},{"versiculo":18,"titulo":"La pregunta sobre el ayuno"},{"versiculo":23,"titulo":"Los discípulos recogen espigas en el día de reposo"}],"3":[{"versiculo":1,"titulo":"El hombre de la mano seca"},{"versiculo":7,"titulo":"La multitud a la orilla del mar"},{"versiculo":13,"titulo":"Elección de los doce apóstoles"},{"versiculo":20,"titulo":"La blasfemia contra el Espíritu Santo"},{"versiculo":31,"titulo":"La madre y los hermanos de Jesús"}],"4":[{"versiculo":1,"titulo":"Parábola del sembrador"},{"versiculo":21,"titulo":"Nada oculto que no haya de ser manifestado"},{"versiculo":26,"titulo":"Parábola del crecimiento de la semilla"},{"versiculo":30,"titulo":"Parábola de la semilla de mostaza"},{"versiculo":33,"titulo":"El uso que Jesús hace de las parábolas"},{"versiculo":35,"titulo":"Jesús calma la tempestad"}],"5":[{"versiculo":1,"titulo":"El endemoniado gadareno"},{"versiculo":21,"titulo":"La hija de Jairo, y la mujer que tocó el manto de Jesús"}],"6":[{"versiculo":1,"titulo":"Jesús en Nazaret"},{"versiculo":7,"titulo":"Misión de los doce discípulos"},{"versiculo":14,"titulo":"Muerte de Juan el Bautista"},{"versiculo":30,"titulo":"Alimentación de los cinco mil"},{"versiculo":45,"titulo":"Jesús anda sobre el mar"},{"versiculo":53,"titulo":"Jesús sana a los enfermos en Genesaret"}],"7":[{"versiculo":1,"titulo":"Lo que contamina al hombre"},{"versiculo":24,"titulo":"La fe de la mujer sirofenicia"},{"versiculo":31,"titulo":"Jesús sana a un sordomudo"}],"8":[{"versiculo":1,"titulo":"Alimentación de los cuatro mil"},{"versiculo":11,"titulo":"La demanda de una señal"},{"versiculo":14,"titulo":"La levadura de los fariseos"},{"versiculo":22,"titulo":"Un ciego sanado en Betsaida"},{"versiculo":27,"titulo":"La confesión de Pedro"},{"versiculo":31,"titulo":"Jesús anuncia su muerte"}],"9":[{"versiculo":2,"titulo":"La transfiguración"},{"versiculo":14,"titulo":"Jesús sana a un muchacho endemoniado"},{"versiculo":30,"titulo":"Jesús anuncia otra vez su muerte"},{"versiculo":33,"titulo":"¿Quién es el mayor?"},{"versiculo":38,"titulo":"El que no es contra nosotros, por nosotros es"},{"versiculo":42,"titulo":"Ocasiones de caer"}],"10":[{"versiculo":1,"titulo":"Jesús enseña sobre el divorcio"},{"versiculo":13,"titulo":"Jesús bendice a los niños"},{"versiculo":17,"titulo":"El joven rico"},{"versiculo":32,"titulo":"Nuevamente Jesús anuncia su muerte"},{"versiculo":35,"titulo":"Petición de Santiago y de Juan"},{"versiculo":46,"titulo":"El ciego Bartimeo recibe la vista"}],"11":[{"versiculo":1,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":12,"titulo":"Maldición de la higuera estéril"},{"versiculo":15,"titulo":"Purificación del templo"},{"versiculo":20,"titulo":"La higuera maldecida se seca"},{"versiculo":27,"titulo":"La autoridad de Jesús"}],"12":[{"versiculo":1,"titulo":"Los labradores malvados"},{"versiculo":13,"titulo":"La cuestión del tributo"},{"versiculo":18,"titulo":"La pregunta sobre la resurrección"},{"versiculo":28,"titulo":"El gran mandamiento"},{"versiculo":35,"titulo":"¿De quién es hijo el Cristo?"},{"versiculo":38,"titulo":"Jesús acusa a los escribas"},{"versiculo":41,"titulo":"La ofrenda de la viuda"}],"13":[{"versiculo":1,"titulo":"Jesús predice la destrucción del templo"},{"versiculo":3,"titulo":"Señales antes del fin"},{"versiculo":24,"titulo":"La venida del Hijo del Hombre"}],"14":[{"versiculo":1,"titulo":"El complot para prender a Jesús"},{"versiculo":3,"titulo":"Jesús es ungido en Betania"},{"versiculo":10,"titulo":"Judas ofrece entregar a Jesús"},{"versiculo":12,"titulo":"Institución de la Cena del Señor"},{"versiculo":26,"titulo":"Jesús anuncia la negación de Pedro"},{"versiculo":32,"titulo":"Jesús ora en Getsemaní"},{"versiculo":43,"titulo":"Arresto de Jesús"},{"versiculo":51,"titulo":"El joven que huyó"},{"versiculo":53,"titulo":"Jesús ante el concilio"},{"versiculo":66,"titulo":"Pedro niega a Jesús"}],"15":[{"versiculo":1,"titulo":"Jesús ante Pilato"},{"versiculo":6,"titulo":"Jesús sentenciado a muerte"},{"versiculo":21,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":42,"titulo":"Jesús es sepultado"}],"16":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":9,"titulo":"Jesús se aparece a María Magdalena"},{"versiculo":12,"titulo":"Jesús se aparece a dos de sus discípulos"},{"versiculo":14,"titulo":"Jesús comisiona a los apóstoles"},{"versiculo":19,"titulo":"La ascensión"}]},"lucas":{"1":[{"versiculo":1,"titulo":"Dedicatoria a Teófilo"},{"versiculo":5,"titulo":"Anuncio del nacimiento de Juan"},{"versiculo":26,"titulo":"Anuncio del nacimiento de Jesús"},{"versiculo":39,"titulo":"María visita a Elisabet"},{"versiculo":57,"titulo":"Nacimiento de Juan el Bautista"},{"versiculo":67,"titulo":"Profecía de Zacarías"}],"2":[{"versiculo":1,"titulo":"Nacimiento de Jesús"},{"versiculo":8,"titulo":"Los ángeles y los pastores"},{"versiculo":21,"titulo":"Presentación de Jesús en el templo"},{"versiculo":39,"titulo":"El regreso a Nazaret"},{"versiculo":41,"titulo":"El niño Jesús en el templo"}],"3":[{"versiculo":1,"titulo":"Predicación de Juan el Bautista"},{"versiculo":21,"titulo":"El bautismo de Jesús"},{"versiculo":23,"titulo":"Genealogía de Jesús"}],"4":[{"versiculo":1,"titulo":"Tentación de Jesús"},{"versiculo":14,"titulo":"Jesús principia su ministerio"},{"versiculo":16,"titulo":"Jesús en Nazaret"},{"versiculo":31,"titulo":"Un hombre que tenía un espíritu inmundo"},{"versiculo":38,"titulo":"Jesús sana a la suegra de Pedro"},{"versiculo":40,"titulo":"Muchos sanados al ponerse el sol"},{"versiculo":42,"titulo":"Jesús recorre Galilea predicando"}],"5":[{"versiculo":1,"titulo":"La pesca milagrosa"},{"versiculo":12,"titulo":"Jesús sana a un leproso"},{"versiculo":17,"titulo":"Jesús sana a un paralítico"},{"versiculo":27,"titulo":"Llamamiento de Leví"},{"versiculo":33,"titulo":"La pregunta sobre el ayuno"}],"6":[{"versiculo":1,"titulo":"Los discípulos recogen espigas en el día de reposo"},{"versiculo":6,"titulo":"El hombre de la mano seca"},{"versiculo":12,"titulo":"Elección de los doce apóstoles"},{"versiculo":17,"titulo":"Jesús atiende a una multitud"},{"versiculo":20,"titulo":"Bienaventuranzas y ayes"},{"versiculo":27,"titulo":"El amor hacia los enemigos, y la regla de oro"},{"versiculo":37,"titulo":"El juzgar a los demás"},{"versiculo":43,"titulo":"Por sus frutos los conoceréis"},{"versiculo":46,"titulo":"Los dos cimientos"}],"7":[{"versiculo":1,"titulo":"Jesús sana al siervo de un centurión"},{"versiculo":11,"titulo":"Jesús resucita al hijo de la viuda de Naín"},{"versiculo":18,"titulo":"Los mensajeros de Juan el Bautista"},{"versiculo":36,"titulo":"Jesús en el hogar de Simón el fariseo"}],"8":[{"versiculo":1,"titulo":"Mujeres que sirven a Jesús"},{"versiculo":4,"titulo":"Parábola del sembrador"},{"versiculo":16,"titulo":"Nada oculto que no haya de ser manifestado"},{"versiculo":19,"titulo":"La madre y los hermanos de Jesús"},{"versiculo":22,"titulo":"Jesús calma la tempestad"},{"versiculo":26,"titulo":"El endemoniado gadareno"},{"versiculo":40,"titulo":"La hija de Jairo, y la mujer que tocó el manto de Jesús"}],"9":[{"versiculo":1,"titulo":"Misión de los doce discípulos"},{"versiculo":7,"titulo":"Muerte de Juan el Bautista"},{"versiculo":10,"titulo":"Alimentación de los cinco mil"},{"versiculo":18,"titulo":"La confesión de Pedro"},{"versiculo":21,"titulo":"Jesús anuncia su muerte"},{"versiculo":28,"titulo":"La transfiguración"},{"versiculo":37,"titulo":"Jesús sana a un muchacho endemoniado"},{"versiculo":43,"titulo":"Jesús anuncia otra vez su muerte"},{"versiculo":46,"titulo":"¿Quién es el mayor?"},{"versiculo":49,"titulo":"El que no es contra nosotros, por nosotros es"},{"versiculo":51,"titulo":"Jesús reprende a Jacobo y a Juan"},{"versiculo":57,"titulo":"Los que querían seguir a Jesús"}],"10":[{"versiculo":1,"titulo":"Misión de los setenta"},{"versiculo":13,"titulo":"Ayes sobre las ciudades impenitentes"},{"versiculo":17,"titulo":"Regreso de los setenta"},{"versiculo":21,"titulo":"Jesús se regocija"},{"versiculo":25,"titulo":"El buen samaritano"},{"versiculo":38,"titulo":"Jesús visita a Marta y a María"}],"11":[{"versiculo":1,"titulo":"Jesús y la oración"},{"versiculo":14,"titulo":"Una casa dividida contra sí misma"},{"versiculo":24,"titulo":"El espíritu inmundo que vuelve"},{"versiculo":27,"titulo":"Los que en verdad son bienaventurados"},{"versiculo":29,"titulo":"La generación perversa demanda señal"},{"versiculo":33,"titulo":"La lámpara del cuerpo"},{"versiculo":37,"titulo":"Jesús acusa a fariseos y a intérpretes de la ley"}],"12":[{"versiculo":1,"titulo":"La levadura de los fariseos"},{"versiculo":4,"titulo":"A quién se debe temer"},{"versiculo":8,"titulo":"El que me confesare delante de los hombres"},{"versiculo":13,"titulo":"El rico insensato"},{"versiculo":22,"titulo":"El afán y la ansiedad"},{"versiculo":32,"titulo":"Tesoro en el cielo"},{"versiculo":35,"titulo":"El siervo vigilante"},{"versiculo":41,"titulo":"El siervo infiel"},{"versiculo":49,"titulo":"Jesús, causa de división"},{"versiculo":54,"titulo":"¿Cómo no reconocéis este tiempo?"},{"versiculo":57,"titulo":"Arréglate con tu adversario"}],"13":[{"versiculo":1,"titulo":"Arrepentíos o pereceréis"},{"versiculo":6,"titulo":"Parábola de la higuera estéril"},{"versiculo":10,"titulo":"Jesús sana a una mujer en el día de reposo"},{"versiculo":18,"titulo":"Parábola de la semilla de mostaza"},{"versiculo":20,"titulo":"Parábola de la levadura"},{"versiculo":22,"titulo":"La puerta estrecha"},{"versiculo":31,"titulo":"Lamento de Jesús sobre Jerusalén"}],"14":[{"versiculo":1,"titulo":"Jesús sana a un hidrópico"},{"versiculo":7,"titulo":"Los convidados a las bodas"},{"versiculo":15,"titulo":"Parábola de la gran cena"},{"versiculo":25,"titulo":"Lo que cuesta seguir a Cristo"},{"versiculo":34,"titulo":"Cuando la sal pierde su sabor"}],"15":[{"versiculo":1,"titulo":"Parábola de la oveja perdida"},{"versiculo":8,"titulo":"Parábola de la moneda perdida"},{"versiculo":11,"titulo":"Parábola del hijo pródigo"}],"16":[{"versiculo":1,"titulo":"Parábola del mayordomo infiel"},{"versiculo":16,"titulo":"La ley y el reino de Dios"},{"versiculo":18,"titulo":"Jesús enseña sobre el divorcio"},{"versiculo":19,"titulo":"El rico y Lázaro"}],"17":[{"versiculo":1,"titulo":"Ocasiones de caer"},{"versiculo":5,"titulo":"Auméntanos la fe"},{"versiculo":7,"titulo":"El deber del siervo"},{"versiculo":11,"titulo":"Diez leprosos son limpiados"},{"versiculo":20,"titulo":"La venida del Reino"}],"18":[{"versiculo":1,"titulo":"Parábola de la viuda y el juez injusto"},{"versiculo":9,"titulo":"Parábola del fariseo y el publicano"},{"versiculo":15,"titulo":"Jesús bendice a los niños"},{"versiculo":18,"titulo":"El joven rico"},{"versiculo":31,"titulo":"Nuevamente Jesús anuncia su muerte"},{"versiculo":35,"titulo":"Un ciego de Jericó recibe la vista"}],"19":[{"versiculo":1,"titulo":"Jesús y Zaqueo"},{"versiculo":11,"titulo":"Parábola de las diez minas"},{"versiculo":28,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":45,"titulo":"Purificación del templo"}],"20":[{"versiculo":1,"titulo":"La autoridad de Jesús"},{"versiculo":9,"titulo":"Los labradores malvados"},{"versiculo":19,"titulo":"La cuestión del tributo"},{"versiculo":27,"titulo":"La pregunta sobre la resurrección"},{"versiculo":41,"titulo":"¿De quién es hijo el Cristo?"},{"versiculo":45,"titulo":"Jesús acusa a los escribas"}],"21":[{"versiculo":1,"titulo":"La ofrenda de la viuda"},{"versiculo":5,"titulo":"Jesús predice la destrucción del templo"},{"versiculo":7,"titulo":"Señales antes del fin"},{"versiculo":25,"titulo":"La venida del Hijo del Hombre"}],"22":[{"versiculo":1,"titulo":"El complot para matar a Jesús"},{"versiculo":7,"titulo":"Institución de la Cena del Señor"},{"versiculo":24,"titulo":"La grandeza en el servicio"},{"versiculo":31,"titulo":"Jesús anuncia la negación de Pedro"},{"versiculo":35,"titulo":"Bolsa, alforja y espada"},{"versiculo":39,"titulo":"Jesús ora en Getsemaní"},{"versiculo":47,"titulo":"Arresto de Jesús"},{"versiculo":54,"titulo":"Pedro niega a Jesús"},{"versiculo":63,"titulo":"Jesús escarnecido y azotado"},{"versiculo":66,"titulo":"Jesús ante el concilio"}],"23":[{"versiculo":1,"titulo":"Jesús ante Pilato"},{"versiculo":6,"titulo":"Jesús ante Herodes"},{"versiculo":13,"titulo":"Jesús sentenciado a muerte"},{"versiculo":26,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":50,"titulo":"Jesús es sepultado"}],"24":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":13,"titulo":"En el camino a Emaús"},{"versiculo":36,"titulo":"Jesús se aparece a los discípulos"},{"versiculo":50,"titulo":"La ascensión"}]},"juan":{"1":[{"versiculo":1,"titulo":"El Verbo hecho carne"},{"versiculo":19,"titulo":"Testimonio de Juan el Bautista"},{"versiculo":29,"titulo":"El Cordero de Dios"},{"versiculo":35,"titulo":"Los primeros discípulos"},{"versiculo":43,"titulo":"Jesús llama a Felipe y a Natanael"}],"2":[{"versiculo":1,"titulo":"Las bodas de Caná"},{"versiculo":13,"titulo":"Jesús purifica el templo"},{"versiculo":23,"titulo":"Jesús conoce a todos los hombres"}],"3":[{"versiculo":1,"titulo":"Jesús y Nicodemo"},{"versiculo":16,"titulo":"De tal manera amó Dios al mundo"},{"versiculo":22,"titulo":"El amigo del esposo"},{"versiculo":31,"titulo":"El que viene de arriba"}],"4":[{"versiculo":1,"titulo":"Jesús y la mujer samaritana"},{"versiculo":43,"titulo":"Jesús sana al hijo de un noble"}],"5":[{"versiculo":1,"titulo":"El paralítico de Betesda"},{"versiculo":19,"titulo":"La autoridad del Hijo"},{"versiculo":30,"titulo":"Testigos de Cristo"}],"6":[{"versiculo":1,"titulo":"Alimentación de los cinco mil"},{"versiculo":16,"titulo":"Jesús anda sobre el mar"},{"versiculo":22,"titulo":"La gente busca a Jesús"},{"versiculo":25,"titulo":"Jesús, el pan de vida"},{"versiculo":60,"titulo":"Palabras de vida eterna"}],"7":[{"versiculo":1,"titulo":"Incredulidad de los hermanos de Jesús"},{"versiculo":10,"titulo":"Jesús en la fiesta de los tabernáculos"},{"versiculo":25,"titulo":"¿Es este el Cristo?"},{"versiculo":32,"titulo":"Los fariseos envían alguaciles para prender a Jesús"},{"versiculo":37,"titulo":"Ríos de agua viva"},{"versiculo":40,"titulo":"División entre la gente"},{"versiculo":45,"titulo":"¡Nunca ha hablado hombre así!"},{"versiculo":53,"titulo":"La mujer adúltera"}],"8":[{"versiculo":12,"titulo":"Jesús, la luz del mundo"},{"versiculo":21,"titulo":"A donde yo voy, vosotros no podéis venir"},{"versiculo":31,"titulo":"La verdad os hará libres"},{"versiculo":39,"titulo":"Sois de vuestro padre el diablo"},{"versiculo":48,"titulo":"La preexistencia de Cristo"}],"9":[{"versiculo":1,"titulo":"Jesús sana a un ciego de nacimiento"},{"versiculo":13,"titulo":"Los fariseos interrogan al ciego sanado"},{"versiculo":35,"titulo":"Ceguera espiritual"}],"10":[{"versiculo":1,"titulo":"Parábola del redil"},{"versiculo":7,"titulo":"Jesús, el buen pastor"},{"versiculo":22,"titulo":"Los judíos rechazan a Jesús"}],"11":[{"versiculo":1,"titulo":"Muerte de Lázaro"},{"versiculo":17,"titulo":"Jesús, la resurrección y la vida"},{"versiculo":28,"titulo":"Jesús llora ante la tumba de Lázaro"},{"versiculo":38,"titulo":"Resurrección de Lázaro"},{"versiculo":45,"titulo":"El complot para matar a Jesús"}],"12":[{"versiculo":1,"titulo":"Jesús es ungido en Betania"},{"versiculo":9,"titulo":"El complot contra Lázaro"},{"versiculo":12,"titulo":"La entrada triunfal en Jerusalén"},{"versiculo":20,"titulo":"Unos griegos buscan a Jesús"},{"versiculo":27,"titulo":"Jesús anuncia su muerte"},{"versiculo":36,"titulo":"Incredulidad de los judíos"},{"versiculo":44,"titulo":"Las palabras de Jesús juzgarán a los hombres"}],"13":[{"versiculo":1,"titulo":"Jesús lava los pies de sus discípulos"},{"versiculo":21,"titulo":"Jesús anuncia la traición de Judas"},{"versiculo":31,"titulo":"El nuevo mandamiento"},{"versiculo":36,"titulo":"Jesús anuncia la negación de Pedro"}],"14":[{"versiculo":1,"titulo":"Jesús, el camino al Padre"},{"versiculo":15,"titulo":"La promesa del Espíritu Santo"}],"15":[{"versiculo":1,"titulo":"Jesús, la vid verdadera"},{"versiculo":18,"titulo":"El mundo os aborrecerá"}],"16":[{"versiculo":4,"titulo":"La obra del Espíritu Santo"},{"versiculo":16,"titulo":"La tristeza se convertirá en gozo"},{"versiculo":25,"titulo":"Yo he vencido al mundo"}],"17":[{"versiculo":1,"titulo":"Jesús ora por sus discípulos"}],"18":[{"versiculo":1,"titulo":"Arresto de Jesús"},{"versiculo":12,"titulo":"Jesús ante el sumo sacerdote"},{"versiculo":15,"titulo":"Pedro en el patio de Anás"},{"versiculo":19,"titulo":"Anás interroga a Jesús"},{"versiculo":25,"titulo":"Pedro niega a Jesús"},{"versiculo":28,"titulo":"Jesús ante Pilato"}],"19":[{"versiculo":17,"titulo":"Crucifixión y muerte de Jesús"},{"versiculo":31,"titulo":"El costado de Jesús traspasado"},{"versiculo":38,"titulo":"Jesús es sepultado"}],"20":[{"versiculo":1,"titulo":"La resurrección"},{"versiculo":11,"titulo":"Jesús se aparece a María Magdalena"},{"versiculo":19,"titulo":"Jesús se aparece a los discípulos"},{"versiculo":24,"titulo":"Incredulidad de Tomás"},{"versiculo":30,"titulo":"El propósito del libro"}],"21":[{"versiculo":1,"titulo":"Jesús se aparece a siete de sus discípulos"},{"versiculo":15,"titulo":"Apacienta mis ovejas"},{"versiculo":20,"titulo":"El discípulo amado"}]},"hechos":{"1":[{"versiculo":1,"titulo":"La promesa del Espíritu Santo"},{"versiculo":6,"titulo":"La ascensión"},{"versiculo":12,"titulo":"Elección del sucesor de Judas"}],"2":[{"versiculo":1,"titulo":"La venida del Espíritu Santo"},{"versiculo":14,"titulo":"Primer discurso de Pedro"},{"versiculo":43,"titulo":"La vida de los primeros cristianos"}],"3":[{"versiculo":1,"titulo":"Curación de un cojo"},{"versiculo":11,"titulo":"Discurso de Pedro en el pórtico de Salomón"}],"4":[{"versiculo":1,"titulo":"Pedro y Juan ante el concilio"},{"versiculo":23,"titulo":"Los creyentes piden confianza y valor"},{"versiculo":32,"titulo":"Todas las cosas en común"}],"5":[{"versiculo":1,"titulo":"Ananías y Safira"},{"versiculo":12,"titulo":"Muchas señales y maravillas"},{"versiculo":17,"titulo":"Pedro y Juan son perseguidos"}],"6":[{"versiculo":1,"titulo":"Elección de siete diáconos"},{"versiculo":8,"titulo":"Arresto de Esteban"}],"7":[{"versiculo":1,"titulo":"Defensa y muerte de Esteban"}],"8":[{"versiculo":1,"titulo":"Saulo persigue a la iglesia"},{"versiculo":4,"titulo":"Predicación del evangelio en Samaria"},{"versiculo":26,"titulo":"Felipe y el etíope"}],"9":[{"versiculo":1,"titulo":"Conversión de Saulo"},{"versiculo":20,"titulo":"Saulo predica en Damasco"},{"versiculo":23,"titulo":"Saulo escapa de los judíos"},{"versiculo":26,"titulo":"Saulo en Jerusalén"},{"versiculo":32,"titulo":"Curación de Eneas"},{"versiculo":36,"titulo":"Dorcas es resucitada"}],"10":[{"versiculo":1,"titulo":"Pedro y Cornelio"}],"11":[{"versiculo":1,"titulo":"Informe de Pedro a la iglesia de Jerusalén"},{"versiculo":19,"titulo":"La iglesia en Antioquía"}],"12":[{"versiculo":1,"titulo":"Jacobo, muerto; Pedro, encarcelado"},{"versiculo":6,"titulo":"Pedro es librado de la cárcel"},{"versiculo":20,"titulo":"Muerte de Herodes"}],"13":[{"versiculo":1,"titulo":"Bernabé y Saulo comienzan su primer viaje misionero"},{"versiculo":4,"titulo":"Los apóstoles predican en Chipre"},{"versiculo":13,"titulo":"Pablo y Bernabé en Antioquía de Pisidia"}],"14":[{"versiculo":1,"titulo":"Pablo y Bernabé en Iconio"},{"versiculo":8,"titulo":"Pablo es apedreado en Listra"},{"versiculo":24,"titulo":"El regreso a Antioquía de Siria"}],"15":[{"versiculo":1,"titulo":"El concilio en Jerusalén"},{"versiculo":36,"titulo":"Pablo se separa de Bernabé, y comienza su segundo viaje misionero"}],"16":[{"versiculo":1,"titulo":"Timoteo acompaña a Pablo y a Silas"},{"versiculo":6,"titulo":"La visión del varón macedonio"},{"versiculo":11,"titulo":"Encarcelados en Filipos"}],"17":[{"versiculo":1,"titulo":"El alboroto en Tesalónica"},{"versiculo":10,"titulo":"Pablo y Silas en Berea"},{"versiculo":16,"titulo":"Pablo en Atenas"}],"18":[{"versiculo":1,"titulo":"Pablo en Corinto"},{"versiculo":22,"titulo":"Pablo regresa a Antioquía y comienza su tercer viaje misionero"},{"versiculo":24,"titulo":"Apolos predica en Éfeso"}],"19":[{"versiculo":1,"titulo":"Pablo en Éfeso"},{"versiculo":23,"titulo":"El alboroto en Éfeso"}],"20":[{"versiculo":1,"titulo":"Viaje de Pablo a Macedonia y Grecia"},{"versiculo":7,"titulo":"Visita de despedida de Pablo en Troas"},{"versiculo":13,"titulo":"Viaje de Troas a Mileto"},{"versiculo":17,"titulo":"Discurso de despedida de Pablo en Mileto"}],"21":[{"versiculo":1,"titulo":"Viaje de Pablo a Jerusalén"},{"versiculo":17,"titulo":"Arresto de Pablo en el templo"},{"versiculo":37,"titulo":"Defensa de Pablo ante el pueblo"}],"22":[{"versiculo":6,"titulo":"Pablo relata su conversión"},{"versiculo":17,"titulo":"Pablo es enviado a los gentiles"},{"versiculo":22,"titulo":"Pablo en manos del tribuno"},{"versiculo":30,"titulo":"Pablo ante el concilio"}],"23":[{"versiculo":12,"titulo":"Complot contra Pablo"},{"versiculo":23,"titulo":"Pablo es enviado a Félix el gobernador"}],"24":[{"versiculo":1,"titulo":"Defensa de Pablo ante Félix"}],"25":[{"versiculo":1,"titulo":"Pablo apela a César"},{"versiculo":13,"titulo":"Pablo ante Agripa y Berenice"}],"26":[{"versiculo":1,"titulo":"Defensa de Pablo ante Agripa"},{"versiculo":4,"titulo":"Vida anterior de Pablo"},{"versiculo":9,"titulo":"Pablo el perseguidor"},{"versiculo":12,"titulo":"Pablo relata su conversión"},{"versiculo":19,"titulo":"Pablo obedece a la visión"},{"versiculo":24,"titulo":"Pablo insta a Agripa a que crea"}],"27":[{"versiculo":1,"titulo":"Pablo es enviado a Roma"},{"versiculo":13,"titulo":"La tempestad en el mar"},{"versiculo":39,"titulo":"El naufragio"}],"28":[{"versiculo":1,"titulo":"Pablo en la isla de Malta"},{"versiculo":11,"titulo":"Pablo llega a Roma"},{"versiculo":17,"titulo":"Pablo predica en Roma"}]},"romanos":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":8,"titulo":"Deseo de Pablo de visitar Roma"},{"versiculo":16,"titulo":"El poder del evangelio"},{"versiculo":18,"titulo":"La culpabilidad del hombre"}],"2":[{"versiculo":1,"titulo":"El justo juicio de Dios"},{"versiculo":17,"titulo":"Los judíos y la ley"}],"3":[{"versiculo":9,"titulo":"No hay justo"},{"versiculo":21,"titulo":"La justicia es por medio de la fe"}],"4":[{"versiculo":1,"titulo":"El ejemplo de Abraham"},{"versiculo":13,"titulo":"La promesa realizada mediante la fe"}],"5":[{"versiculo":1,"titulo":"Resultados de la justificación"},{"versiculo":12,"titulo":"Adán y Cristo"}],"6":[{"versiculo":1,"titulo":"Muertos al pecado"},{"versiculo":15,"titulo":"Siervos de la justicia"}],"7":[{"versiculo":1,"titulo":"Analogía tomada del matrimonio"},{"versiculo":7,"titulo":"El pecado que mora en mí"}],"8":[{"versiculo":1,"titulo":"Viviendo en el Espíritu"},{"versiculo":28,"titulo":"Más que vencedores"}],"9":[{"versiculo":1,"titulo":"La elección de Israel"},{"versiculo":30,"titulo":"La justicia que es por fe"}],"11":[{"versiculo":1,"titulo":"El remanente de Israel"},{"versiculo":11,"titulo":"La salvación de los gentiles"},{"versiculo":25,"titulo":"La restauración de Israel"}],"12":[{"versiculo":1,"titulo":"Deberes cristianos"}],"14":[{"versiculo":1,"titulo":"Los débiles en la fe"}],"15":[{"versiculo":7,"titulo":"El evangelio a los gentiles"},{"versiculo":22,"titulo":"Pablo se propone ir a Roma"}],"16":[{"versiculo":1,"titulo":"Saludos personales"},{"versiculo":25,"titulo":"Doxología final"}]},"1_corintios":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":4,"titulo":"Acción de gracias por dones espirituales"},{"versiculo":10,"titulo":"¿Está dividido Cristo?"},{"versiculo":18,"titulo":"Cristo, poder y sabiduría de Dios"}],"2":[{"versiculo":1,"titulo":"Proclamando a Cristo crucificado"},{"versiculo":6,"titulo":"La revelación por el Espíritu de Dios"}],"3":[{"versiculo":1,"titulo":"Colaboradores de Dios"}],"4":[{"versiculo":1,"titulo":"El ministerio de los apóstoles"}],"5":[{"versiculo":1,"titulo":"Un caso de inmoralidad juzgado"}],"6":[{"versiculo":1,"titulo":"Litigios delante de los incrédulos"},{"versiculo":12,"titulo":"Glorificad a Dios en vuestro cuerpo"}],"7":[{"versiculo":1,"titulo":"Problemas del matrimonio"}],"8":[{"versiculo":1,"titulo":"Lo sacrificado a los ídolos"}],"9":[{"versiculo":1,"titulo":"Los derechos de un apóstol"}],"10":[{"versiculo":1,"titulo":"Amonestaciones contra la idolatría"},{"versiculo":23,"titulo":"Haced todo para la gloria de Dios"}],"11":[{"versiculo":2,"titulo":"Atavío de las mujeres"},{"versiculo":17,"titulo":"Abusos en la Cena del Señor"},{"versiculo":23,"titulo":"Institución de la Cena del Señor"},{"versiculo":27,"titulo":"Tomando la Cena indignamente"}],"12":[{"versiculo":1,"titulo":"Dones espirituales"}],"13":[{"versiculo":1,"titulo":"La preeminencia del amor"}],"14":[{"versiculo":1,"titulo":"El hablar en lenguas"}],"15":[{"versiculo":1,"titulo":"La resurrección de los muertos"}],"16":[{"versiculo":1,"titulo":"La ofrenda para los santos"},{"versiculo":5,"titulo":"Planes de Pablo"},{"versiculo":13,"titulo":"Salutaciones finales"}]},"2_corintios":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Aflicciones de Pablo"},{"versiculo":12,"titulo":"Por qué Pablo pospuso su visita a Corinto"}],"2":[{"versiculo":5,"titulo":"Pablo perdona al ofensor"},{"versiculo":12,"titulo":"Ansiedad de Pablo en Troas"},{"versiculo":14,"titulo":"Triunfantes en Cristo"}],"3":[{"versiculo":1,"titulo":"Ministros del nuevo pacto"}],"4":[{"versiculo":7,"titulo":"Viviendo por la fe"}],"5":[{"versiculo":11,"titulo":"El ministerio de la reconciliación"}],"6":[{"versiculo":14,"titulo":"Somos templo del Dios viviente"}],"7":[{"versiculo":2,"titulo":"Regocijo de Pablo al arrepentirse los corintios"}],"8":[{"versiculo":1,"titulo":"La ofrenda para los santos"}],"10":[{"versiculo":1,"titulo":"Pablo defiende su ministerio"}],"11":[{"versiculo":16,"titulo":"Sufrimientos de Pablo como apóstol"}],"12":[{"versiculo":1,"titulo":"El aguijón en la carne"},{"versiculo":14,"titulo":"Pablo anuncia su tercera visita"}],"13":[{"versiculo":11,"titulo":"Saludos y doxología final"}]},"galatas":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":6,"titulo":"No hay otro evangelio"},{"versiculo":11,"titulo":"El ministerio de Pablo"}],"2":[{"versiculo":11,"titulo":"Pablo reprende a Pedro en Antioquía"}],"3":[{"versiculo":1,"titulo":"El Espíritu se recibe por la fe"},{"versiculo":6,"titulo":"El pacto de Dios con Abraham"},{"versiculo":19,"titulo":"El propósito de la ley"}],"4":[{"versiculo":8,"titulo":"Exhortación contra el volver a la esclavitud"},{"versiculo":21,"titulo":"Alegoría de Sara y Agar"}],"5":[{"versiculo":1,"titulo":"Estad firmes en la libertad"},{"versiculo":16,"titulo":"Las obras de la carne y el fruto del Espíritu"}],"6":[{"versiculo":11,"titulo":"Pablo se gloría en la cruz de Cristo"},{"versiculo":18,"titulo":"Bendición final"}]},"efesios":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Bendiciones espirituales en Cristo"},{"versiculo":15,"titulo":"El espíritu de sabiduría y de revelación"}],"2":[{"versiculo":1,"titulo":"Salvos por gracia"},{"versiculo":11,"titulo":"Reconciliación por medio de la cruz"}],"3":[{"versiculo":1,"titulo":"Ministerio de Pablo a los gentiles"},{"versiculo":14,"titulo":"El amor que excede a todo conocimiento"}],"4":[{"versiculo":1,"titulo":"La unidad del Espíritu"},{"versiculo":17,"titulo":"La nueva vida en Cristo"}],"5":[{"versiculo":1,"titulo":"Andad como hijos de luz"},{"versiculo":21,"titulo":"Someteos los unos a los otros"}],"6":[{"versiculo":10,"titulo":"La armadura de Dios"},{"versiculo":21,"titulo":"Salutaciones finales"}]},"filipenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Oración de Pablo por los creyentes"},{"versiculo":12,"titulo":"Para mí el vivir es Cristo"}],"2":[{"versiculo":1,"titulo":"Humillación y exaltación de Cristo"},{"versiculo":12,"titulo":"Luminares en el mundo"},{"versiculo":19,"titulo":"Timoteo y Epafrodito"}],"3":[{"versiculo":1,"titulo":"Prosigo al blanco"}],"4":[{"versiculo":1,"titulo":"Regocijaos en el Señor siempre"},{"versiculo":8,"titulo":"En esto pensad"},{"versiculo":10,"titulo":"Dádivas de los filipenses"},{"versiculo":21,"titulo":"Salutaciones finales"}]},"colosenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Pablo pide que Dios les conceda sabiduría espiritual"},{"versiculo":15,"titulo":"Reconciliación por medio de la muerte de Cristo"},{"versiculo":24,"titulo":"Ministerio de Pablo a los gentiles"}],"2":[{"versiculo":8,"titulo":"Plenitud de vida en Cristo"}],"3":[{"versiculo":5,"titulo":"La vida antigua y la nueva"},{"versiculo":18,"titulo":"Deberes sociales de la nueva vida"}],"4":[{"versiculo":7,"titulo":"Salutaciones finales"}]},"1_tesalonicenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":2,"titulo":"Ejemplo de los tesalonicenses"}],"2":[{"versiculo":1,"titulo":"Ministerio de Pablo en Tesalónica"},{"versiculo":17,"titulo":"Ausencia de Pablo de la iglesia"}],"4":[{"versiculo":1,"titulo":"La vida que agrada a Dios"},{"versiculo":13,"titulo":"La venida del Señor"}],"5":[{"versiculo":12,"titulo":"Pablo exhorta a los hermanos"},{"versiculo":25,"titulo":"Salutaciones y bendición final"}]},"2_tesalonicenses":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Dios juzgará a los pecadores en la venida de Cristo"}],"2":[{"versiculo":1,"titulo":"Manifestación del hombre de pecado"},{"versiculo":13,"titulo":"Escogidos para salvación"}],"3":[{"versiculo":1,"titulo":"Que la palabra de Dios sea glorificada"},{"versiculo":6,"titulo":"El deber de trabajar"},{"versiculo":16,"titulo":"Bendición final"}]},"1_timoteo":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Advertencia contra falsas doctrinas"},{"versiculo":12,"titulo":"El ministerio de Pablo"}],"2":[{"versiculo":1,"titulo":"Instrucciones sobre la oración"}],"3":[{"versiculo":1,"titulo":"Requisitos de los obispos"},{"versiculo":8,"titulo":"Requisitos de los diáconos"},{"versiculo":14,"titulo":"El misterio de la piedad"}],"4":[{"versiculo":1,"titulo":"Predicción de la apostasía"},{"versiculo":6,"titulo":"Un buen ministro de Jesucristo"}],"5":[{"versiculo":1,"titulo":"Deberes hacia los demás"}],"6":[{"versiculo":3,"titulo":"Piedad y contentamiento"},{"versiculo":11,"titulo":"La buena batalla de la fe"},{"versiculo":20,"titulo":"Encargo final de Pablo a Timoteo"}]},"2_timoteo":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Testificando de Cristo"}],"2":[{"versiculo":1,"titulo":"Un buen soldado de Jesucristo"},{"versiculo":14,"titulo":"Un obrero aprobado"}],"3":[{"versiculo":1,"titulo":"Carácter de los hombres en los postreros días"}],"4":[{"versiculo":1,"titulo":"Predica la palabra"},{"versiculo":9,"titulo":"Instrucciones personales"},{"versiculo":19,"titulo":"Saludos y bendición final"}]},"tito":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":5,"titulo":"Requisitos de ancianos y obispos"}],"2":[{"versiculo":1,"titulo":"Enseñanza de la sana doctrina"}],"3":[{"versiculo":1,"titulo":"Justificados por gracia"},{"versiculo":12,"titulo":"Instrucciones personales"},{"versiculo":15,"titulo":"Salutaciones y bendición final"}]},"filemon":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":4,"titulo":"El amor y la fe de Filemón"},{"versiculo":8,"titulo":"Pablo intercede por Onésimo"},{"versiculo":23,"titulo":"Salutaciones y bendición final"}]},"hebreos":{"1":[{"versiculo":1,"titulo":"Dios ha hablado por su Hijo"},{"versiculo":5,"titulo":"El Hijo, superior a los ángeles"}],"2":[{"versiculo":1,"titulo":"Una salvación tan grande"},{"versiculo":5,"titulo":"El autor de la salvación"}],"3":[{"versiculo":1,"titulo":"Jesús es superior a Moisés"},{"versiculo":7,"titulo":"El reposo del pueblo de Dios"}],"4":[{"versiculo":14,"titulo":"Jesús el gran sumo sacerdote"}],"5":[{"versiculo":11,"titulo":"Advertencia contra la apostasía"}],"7":[{"versiculo":1,"titulo":"El sacerdocio de Melquisedec"}],"8":[{"versiculo":1,"titulo":"El mediador de un nuevo pacto"}],"9":[{"versiculo":23,"titulo":"El sacrificio de Cristo quita el pecado"}],"10":[{"versiculo":26,"titulo":"Advertencia al que peca deliberadamente"}],"11":[{"versiculo":1,"titulo":"La fe"}],"12":[{"versiculo":1,"titulo":"Puestos los ojos en Jesús"},{"versiculo":12,"titulo":"Los que rechazan la gracia de Dios"}],"13":[{"versiculo":1,"titulo":"Deberes cristianos"},{"versiculo":20,"titulo":"Bendición y salutaciones finales"}]},"santiago":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":2,"titulo":"La sabiduría que viene de Dios"},{"versiculo":12,"titulo":"Soportando las pruebas"},{"versiculo":19,"titulo":"Hacedores de la palabra"}],"2":[{"versiculo":1,"titulo":"Amonestación contra la parcialidad"},{"versiculo":14,"titulo":"La fe sin obras es muerta"}],"3":[{"versiculo":1,"titulo":"La lengua"},{"versiculo":13,"titulo":"La sabiduría de lo alto"}],"4":[{"versiculo":1,"titulo":"La amistad con el mundo"},{"versiculo":11,"titulo":"Juzgando al hermano"},{"versiculo":13,"titulo":"No os gloriéis del día de mañana"}],"5":[{"versiculo":1,"titulo":"Contra los ricos opresores"},{"versiculo":7,"titulo":"Sed pacientes y orad"}]},"1_pedro":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Una esperanza viva"},{"versiculo":13,"titulo":"Llamamiento a una vida santa"}],"2":[{"versiculo":4,"titulo":"La piedra viva"},{"versiculo":9,"titulo":"El pueblo de Dios"},{"versiculo":11,"titulo":"Vivid como siervos de Dios"}],"3":[{"versiculo":1,"titulo":"Deberes conyugales"},{"versiculo":8,"titulo":"Una buena conciencia"}],"4":[{"versiculo":1,"titulo":"Buenos administradores de la gracia de Dios"},{"versiculo":12,"titulo":"Padeciendo como cristianos"}],"5":[{"versiculo":1,"titulo":"Apacentad la grey de Dios"},{"versiculo":12,"titulo":"Salutaciones finales"}]},"2_pedro":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Partícipes de la naturaleza divina"},{"versiculo":16,"titulo":"Testigos presenciales de la gloria de Cristo"}],"2":[{"versiculo":1,"titulo":"Falsos profetas y falsos maestros"}],"3":[{"versiculo":1,"titulo":"El día del Señor vendrá"}]},"1_juan":{"1":[{"versiculo":1,"titulo":"La palabra de vida"},{"versiculo":5,"titulo":"Dios es luz"}],"2":[{"versiculo":1,"titulo":"Cristo, nuestro abogado"},{"versiculo":7,"titulo":"El nuevo mandamiento"},{"versiculo":18,"titulo":"El anticristo"}],"3":[{"versiculo":1,"titulo":"Hijos de Dios"}],"4":[{"versiculo":1,"titulo":"El Espíritu de Dios y el espíritu del anticristo"},{"versiculo":7,"titulo":"Dios es amor"}],"5":[{"versiculo":1,"titulo":"La fe que vence al mundo"},{"versiculo":6,"titulo":"El testimonio del Espíritu"},{"versiculo":13,"titulo":"El conocimiento de la vida eterna"}]},"2_juan":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":4,"titulo":"Permaneced en la doctrina de Cristo"},{"versiculo":12,"titulo":"Espero ir a vosotros"}]},"3_juan":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":5,"titulo":"Elogio de la hospitalidad de Gayo"},{"versiculo":9,"titulo":"La oposición de Diótrefes"},{"versiculo":11,"titulo":"Buen testimonio acerca de Demetrio"},{"versiculo":13,"titulo":"Salutaciones finales"}]},"judas":{"1":[{"versiculo":1,"titulo":"Salutación"},{"versiculo":3,"titulo":"Falsas doctrinas y falsos maestros"},{"versiculo":17,"titulo":"Amonestaciones y exhortaciones"},{"versiculo":24,"titulo":"Doxología"}]},"apocalipsis":{"1":[{"versiculo":1,"titulo":"La revelación de Jesucristo"},{"versiculo":4,"titulo":"Salutaciones a las siete iglesias"},{"versiculo":9,"titulo":"Una visión del Hijo del Hombre"}],"2":[{"versiculo":1,"titulo":"Mensajes a las siete iglesias: El mensaje a Éfeso"},{"versiculo":8,"titulo":"El mensaje a Esmirna"},{"versiculo":12,"titulo":"El mensaje a Pérgamo"},{"versiculo":18,"titulo":"El mensaje a Tiatira"}],"3":[{"versiculo":1,"titulo":"El mensaje a Sardis"},{"versiculo":7,"titulo":"El mensaje a Filadelfia"},{"versiculo":14,"titulo":"El mensaje a Laodicea"}],"4":[{"versiculo":1,"titulo":"La adoración celestial"}],"5":[{"versiculo":1,"titulo":"El rollo y el Cordero"}],"6":[{"versiculo":1,"titulo":"Los sellos"}],"7":[{"versiculo":1,"titulo":"Los 144 mil sellados"},{"versiculo":9,"titulo":"La multitud vestida de ropas blancas"}],"8":[{"versiculo":1,"titulo":"El séptimo sello"},{"versiculo":6,"titulo":"Las trompetas"}],"10":[{"versiculo":1,"titulo":"El ángel con el librito"}],"11":[{"versiculo":1,"titulo":"Los dos testigos"},{"versiculo":15,"titulo":"La séptima trompeta"}],"12":[{"versiculo":1,"titulo":"La mujer y el dragón"}],"13":[{"versiculo":1,"titulo":"Las dos bestias"}],"14":[{"versiculo":1,"titulo":"El cántico de los 144 mil"},{"versiculo":6,"titulo":"El mensaje de los tres ángeles"},{"versiculo":14,"titulo":"La tierra es segada"}],"15":[{"versiculo":1,"titulo":"Los ángeles con las siete postreras plagas"}],"16":[{"versiculo":1,"titulo":"Las copas de ira"}],"17":[{"versiculo":1,"titulo":"Condenación de la gran ramera"}],"18":[{"versiculo":1,"titulo":"La caída de Babilonia"}],"19":[{"versiculo":1,"titulo":"Alabanzas en el cielo"},{"versiculo":9,"titulo":"La cena de las bodas del Cordero"},{"versiculo":11,"titulo":"El jinete del caballo blanco"}],"20":[{"versiculo":1,"titulo":"Los mil años"},{"versiculo":11,"titulo":"El juicio ante el gran trono blanco"}],"21":[{"versiculo":1,"titulo":"Cielo nuevo y tierra nueva"},{"versiculo":9,"titulo":"La nueva Jerusalén"}],"22":[{"versiculo":6,"titulo":"La venida de Cristo está cerca"}]}};
const BUILTIN_DICTIONARY_ENTRIES=[{"id":"builtin-abba","termino":"Abba","explicacion":"Palabra aramea afectuosa para dirigirse al padre; Jesús la usó al hablar con Dios Padre.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-abismo","termino":"Abismo","explicacion":"Lugar profundo asociado al encierro de poderes malignos o al mundo de los muertos.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-abominacion","termino":"Abominación","explicacion":"Algo profundamente detestable delante de Dios por su maldad o impureza.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-adarga","termino":"Adarga","explicacion":"Escudo de cuero, generalmente ovalado.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-adopcion","termino":"Adopción","explicacion":"Acto por el que Dios recibe a los creyentes como hijos suyos por medio de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-adorar","termino":"Adorar","explicacion":"Rendir a Dios reverencia, amor y entrega como único Señor.","categoria":"Oración y culto","builtin":true},{"id":"builtin-advenedizo","termino":"Advenedizo","explicacion":"Persona recién llegada o extranjera; en algunas traducciones también puede significar recién convertido.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-afrenta","termino":"Afrenta","explicacion":"Ofensa que causa vergüenza o humillación.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-aguijon","termino":"Aguijón","explicacion":"Punta que hiere o instrumento para conducir animales; figuradamente, aquello que causa dolor o impulsa.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-alabar","termino":"Alabar","explicacion":"Reconocer y proclamar la grandeza, bondad y obras de Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-aleluya","termino":"Aleluya","explicacion":"Expresión hebrea que significa «alabad a Jah».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-alfoli","termino":"Alfolí","explicacion":"Granero o depósito donde se guardaban alimentos y diezmos.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-aljaba","termino":"Aljaba","explicacion":"Estuche para llevar flechas.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-altar","termino":"Altar","explicacion":"Lugar elevado o estructura donde se presentaban sacrificios y ofrendas a Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-altivez","termino":"Altivez","explicacion":"Actitud orgullosa y arrogante de quien se considera superior.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-amonestar","termino":"Amonestar","explicacion":"Advertir o corregir con seriedad y amor para evitar el mal.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-amen","termino":"Amén","explicacion":"Palabra que expresa certeza y acuerdo: «así es» o «así sea».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-anatema","termino":"Anatema","explicacion":"Persona o cosa puesta bajo condenación o apartada para destrucción; también expresa una maldición solemne.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-anciano","termino":"Anciano","explicacion":"Responsable maduro de una comunidad; también puede referirse a una persona de edad avanzada.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-anticristo","termino":"Anticristo","explicacion":"Persona o poder que se opone a Cristo o pretende ocupar su lugar.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-antitipo","termino":"Antitipo","explicacion":"Realidad definitiva anunciada o representada previamente por un tipo.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-apocalipsis","termino":"Apocalipsis","explicacion":"Revelación de realidades ocultas; también nombre del último libro del Nuevo Testamento.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-aposento","termino":"Aposento","explicacion":"Habitación o sala de una casa.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-aposento-alto","termino":"Aposento alto","explicacion":"Habitación en la planta superior de una casa, usada para reuniones y oración.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-apostasia","termino":"Apostasía","explicacion":"Abandono consciente de la fe que antes se profesaba.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-apocrifo","termino":"Apócrifo","explicacion":"Libro religioso cuya autoridad canónica no es reconocida de igual modo por todas las tradiciones.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-apostol","termino":"Apóstol","explicacion":"Enviado con autoridad; especialmente los discípulos escogidos por Cristo para dar testimonio de Él.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-araba","termino":"Arabá","explicacion":"Depresión geográfica que incluye el valle del Jordán y se extiende hacia el sur.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-arca-del-pacto","termino":"Arca del pacto","explicacion":"Cofre sagrado que representaba la presencia y el pacto de Dios con Israel.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-arcangel","termino":"Arcángel","explicacion":"Ángel de rango principal o con una misión destacada.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-armadura-de-dios","termino":"Armadura de Dios","explicacion":"Conjunto de imágenes espirituales en Efesios 6 para permanecer firmes contra el mal.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-armagedon","termino":"Armagedón","explicacion":"Lugar simbólico o escenario de la confrontación final contra Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-arras","termino":"Arras","explicacion":"Garantía o anticipo de algo futuro; el Espíritu Santo es presentado como arras de nuestra herencia.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-arrebatamiento","termino":"Arrebatamiento","explicacion":"Reunión de los creyentes con Cristo descrita en 1 Tesalonicenses 4.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-arrepentimiento","termino":"Arrepentimiento","explicacion":"Cambio sincero de mente y corazón que lleva a abandonar el pecado y volver a Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-atalaya","termino":"Atalaya","explicacion":"Torre o lugar elevado de vigilancia; también imagen del profeta que advierte al pueblo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-avaricia","termino":"Avaricia","explicacion":"Deseo excesivo de acumular riquezas o bienes.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-aventar","termino":"Aventar","explicacion":"Lanzar el grano al aire para que el viento separe la paja.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-ayo","termino":"Ayo","explicacion":"Tutor o encargado de guiar a un menor; Pablo usa la imagen para explicar la función temporal de la Ley.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-ayuno","termino":"Ayuno","explicacion":"Abstención voluntaria de alimento durante un tiempo para buscar a Dios con oración y humildad.","categoria":"Oración y culto","builtin":true},{"id":"builtin-baluarte","termino":"Baluarte","explicacion":"Defensa o fortificación; figuradamente, protección segura.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-bato","termino":"Bato","explicacion":"Medida hebrea de capacidad para líquidos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-bautismo","termino":"Bautismo","explicacion":"Acto de inmersión o lavado que expresa arrepentimiento, unión con Cristo e incorporación a la comunidad creyente.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-beelzebu","termino":"Beelzebú","explicacion":"Nombre aplicado al príncipe de los demonios.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-belial","termino":"Belial","explicacion":"Expresión que significa maldad o inutilidad; en textos posteriores se personifica como poder maligno.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-bendecir","termino":"Bendecir","explicacion":"Hablar bien, agradecer y pedir el favor de Dios; cuando Dios bendice, concede su bien.","categoria":"Oración y culto","builtin":true},{"id":"builtin-benignidad","termino":"Benignidad","explicacion":"Bondad amable y disposición favorable hacia los demás.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-bestia","termino":"Bestia","explicacion":"Símbolo apocalíptico de poderes políticos y espirituales opuestos a Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-blanca","termino":"Blanca","explicacion":"Moneda de cobre de valor extremadamente pequeño.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-blasfemia","termino":"Blasfemia","explicacion":"Palabra o acción que insulta, desprecia o atribuye maldad a Dios y a lo santo.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-broquel","termino":"Broquel","explicacion":"Escudo pequeño usado para defensa.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-buen-pastor","termino":"Buen Pastor","explicacion":"Título de Cristo como quien guía, protege y entrega su vida por sus ovejas.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-balsamo","termino":"Bálsamo","explicacion":"Sustancia aromática y medicinal; símbolo de sanidad y consuelo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-calcanar","termino":"Calcañar","explicacion":"Talón del pie.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-calumnia","termino":"Calumnia","explicacion":"Acusación falsa que perjudica la reputación de una persona.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-calvario","termino":"Calvario","explicacion":"Nombre latino tradicional para Gólgota.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-calzado-del-evangelio","termino":"Calzado del evangelio","explicacion":"Imagen de estar preparado para anunciar y vivir el evangelio de la paz.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-camino","termino":"Camino","explicacion":"Título de Cristo como la vía hacia el Padre, unido a la verdad y la vida.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-candelero","termino":"Candelero","explicacion":"Soporte para lámparas; en Apocalipsis puede simbolizar una iglesia.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-canon","termino":"Canon","explicacion":"Conjunto de libros reconocidos como Sagrada Escritura por una comunidad de fe.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-caridad","termino":"Caridad","explicacion":"En traducciones antiguas, amor generoso y entregado, especialmente hacia el prójimo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-carismas","termino":"Carismas","explicacion":"Palabra griega para dones de gracia concedidos por Dios.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-cana-cascada","termino":"Caña cascada","explicacion":"Imagen de una persona débil o herida que Cristo no termina de quebrar, sino que trata con misericordia.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-cedazo","termino":"Cedazo","explicacion":"Utensilio parecido a un tamiz para separar materiales; «zarandear» expresa probar o sacudir intensamente.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-ceniza","termino":"Ceniza","explicacion":"Símbolo de duelo, fragilidad, humillación y arrepentimiento.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-centurion","termino":"Centurión","explicacion":"Oficial romano que normalmente mandaba alrededor de cien soldados.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-cerviz","termino":"Cerviz","explicacion":"Parte posterior del cuello; «dura cerviz» significa obstinación y resistencia a obedecer.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-cenir","termino":"Ceñir","explicacion":"Ajustar una túnica con cinturón para prepararse a caminar, trabajar o luchar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-cilicio","termino":"Cilicio","explicacion":"Tela áspera usada como señal de duelo, humillación o arrepentimiento.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-circuncision","termino":"Circuncisión","explicacion":"Señal física del pacto con Abraham; en el Nuevo Testamento también se usa como imagen de una transformación interior.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-cizana","termino":"Cizaña","explicacion":"Planta parecida al trigo cuando es joven; en la parábola representa a los que pertenecen al maligno.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-clamar","termino":"Clamar","explicacion":"Pedir ayuda a Dios con intensidad y urgencia.","categoria":"Oración y culto","builtin":true},{"id":"builtin-codicia","termino":"Codicia","explicacion":"Deseo desordenado de poseer lo que pertenece a otro o de tener cada vez más.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-codo","termino":"Codo","explicacion":"Medida de longitud basada en la distancia del codo a la punta de los dedos, aproximadamente medio metro.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-cohorte","termino":"Cohorte","explicacion":"Unidad militar romana compuesta por varios cientos de soldados.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-comunion","termino":"Comunión","explicacion":"Participación y unión espiritual con Dios y con los demás creyentes.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-concupiscencia","termino":"Concupiscencia","explicacion":"Deseo intenso y desordenado que inclina a la persona hacia el pecado.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-consejo","termino":"Consejo","explicacion":"Orientación sabia para tomar decisiones correctas.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-consolador","termino":"Consolador","explicacion":"Título aplicado al Espíritu Santo como ayudador, defensor y presencia de Cristo con los creyentes.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-consolar","termino":"Consolar","explicacion":"Dar alivio, ánimo y esperanza a quien sufre.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-contienda","termino":"Contienda","explicacion":"Discusión, rivalidad o conflicto persistente entre personas.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-conversion","termino":"Conversión","explicacion":"Cambio de dirección por el que una persona se vuelve del pecado hacia Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-copa-de-ira","termino":"Copa de ira","explicacion":"Imagen de la plenitud del juicio de Dios contra el mal.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-coraza","termino":"Coraza","explicacion":"Armadura que protege el pecho; imagen de justicia o fe y amor.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-corban","termino":"Corbán","explicacion":"Ofrenda dedicada a Dios; Jesús denunció su uso como excusa para no ayudar a los padres.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-cordero-de-dios","termino":"Cordero de Dios","explicacion":"Título de Cristo como sacrificio perfecto que quita el pecado del mundo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-cordura","termino":"Cordura","explicacion":"Buen juicio y sensatez para pensar y actuar correctamente.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-coro","termino":"Coro","explicacion":"Gran medida hebrea de capacidad.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-corona-de-vida","termino":"Corona de vida","explicacion":"Recompensa prometida a quienes permanecen fieles en la prueba.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-corona-incorruptible","termino":"Corona incorruptible","explicacion":"Imagen de la recompensa eterna que no se marchita.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-cristo","termino":"Cristo","explicacion":"Título griego que significa «Ungido» y corresponde a Mesías.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-crucifixion","termino":"Crucifixión","explicacion":"Método romano de ejecución mediante fijación a una cruz, usado contra Jesús.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-cuadrante","termino":"Cuadrante","explicacion":"Moneda romana de muy poco valor.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-cuerpo-de-cristo","termino":"Cuerpo de Cristo","explicacion":"Imagen de la Iglesia como comunidad unida a Cristo y formada por muchos miembros.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-decreto","termino":"Decreto","explicacion":"Decisión o mandato establecido con autoridad.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-decalogo","termino":"Decálogo","explicacion":"Los Diez Mandamientos dados por Dios a Moisés.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-decapolis","termino":"Decápolis","explicacion":"Conjunto de diez ciudades de cultura grecorromana al este y sureste de Galilea.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-dedicacion-fiesta-de-la","termino":"Dedicación, Fiesta de la","explicacion":"Fiesta judía que recuerda la nueva consagración del templo; también llamada Janucá.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-deidad","termino":"Deidad","explicacion":"Naturaleza o condición divina.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-demonio","termino":"Demonio","explicacion":"Ser espiritual maligno que se opone a Dios y busca dañar o engañar.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-denario","termino":"Denario","explicacion":"Moneda romana equivalente aproximadamente al jornal de un trabajador por un día.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-desposada","termino":"Desposada","explicacion":"Mujer comprometida formalmente en matrimonio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-desposorio","termino":"Desposorio","explicacion":"Compromiso matrimonial con fuerza legal antes de la convivencia.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-deuterocanonico","termino":"Deuterocanónico","explicacion":"Libro del Antiguo Testamento recibido como canónico por algunas Iglesias y colocado aparte o no incluido por otras.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-devocion","termino":"Devoción","explicacion":"Entrega constante y afectuosa a Dios.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-diablo","termino":"Diablo","explicacion":"Calumniador o acusador; título del principal enemigo espiritual.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-diezmo","termino":"Diezmo","explicacion":"Décima parte de los bienes o cosechas entregada para el culto y sostenimiento de los levitas.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-discernimiento","termino":"Discernimiento","explicacion":"Capacidad de distinguir entre lo verdadero y lo falso, lo bueno y lo malo.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-discipulo","termino":"Discípulo","explicacion":"Aprendiz y seguidor de un maestro; en el Nuevo Testamento, seguidor de Cristo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-disension","termino":"Disensión","explicacion":"Desacuerdo que produce división o enfrentamiento.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-disolucion","termino":"Disolución","explicacion":"Vida desordenada, entregada a excesos y sin dominio propio.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-divinidad","termino":"Divinidad","explicacion":"Naturaleza propia de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-diacono","termino":"Diácono","explicacion":"Servidor designado para ayudar en las necesidades prácticas y espirituales de la comunidad.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-diaspora","termino":"Diáspora","explicacion":"Dispersión de los judíos fuera de la tierra de Israel.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-dones-espirituales","termino":"Dones espirituales","explicacion":"Capacidades concedidas por el Espíritu Santo para servir y edificar a la Iglesia.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-doxologia","termino":"Doxología","explicacion":"Fórmula breve de alabanza que glorifica a Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-dracma","termino":"Dracma","explicacion":"Moneda griega de valor parecido al denario.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-dragon","termino":"Dragón","explicacion":"Símbolo de Satanás en Apocalipsis.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-dia-del-senor","termino":"Día del Señor","explicacion":"Tiempo de intervención decisiva de Dios en juicio y salvación.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-echar-suertes","termino":"Echar suertes","explicacion":"Método antiguo para tomar una decisión o asignar responsabilidades, confiando el resultado a Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-edificar","termino":"Edificar","explicacion":"Fortalecer espiritualmente a una persona o comunidad.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-efa","termino":"Efa","explicacion":"Medida hebrea de capacidad para productos secos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-efod","termino":"Efod","explicacion":"Vestidura especial del sumo sacerdote, asociada a su servicio y a la consulta de Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-ekklesia","termino":"Ekklesía","explicacion":"Palabra griega traducida «iglesia» o «asamblea».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-eleccion","termino":"Elección","explicacion":"Decisión soberana de Dios de llamar y escoger para sus propósitos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-emmanuel","termino":"Emmanuel","explicacion":"Nombre profético que significa «Dios con nosotros».","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-encarnacion","termino":"Encarnación","explicacion":"Misterio por el que el Hijo eterno de Dios tomó verdadera naturaleza humana en Cristo Jesús.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-endurecimiento","termino":"Endurecimiento","explicacion":"Resistencia interior persistente a escuchar, creer u obedecer a Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-envidia","termino":"Envidia","explicacion":"Tristeza o resentimiento por el bien ajeno y deseo de poseerlo.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-epistola","termino":"Epístola","explicacion":"Carta escrita, especialmente las cartas del Nuevo Testamento.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-era","termino":"Era","explicacion":"Superficie donde se trillaba y aventaba el grano.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-escabel","termino":"Escabel","explicacion":"Banquillo para apoyar los pies; imagen de dominio y autoridad.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-escarnecedor","termino":"Escarnecedor","explicacion":"Persona que se burla con desprecio de Dios, de la verdad o de quienes procuran hacer el bien.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-escatologia","termino":"Escatología","explicacion":"Estudio de las últimas cosas: muerte, resurrección, juicio y destino final.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-esclavo","termino":"Esclavo","explicacion":"Persona propiedad de otra según las sociedades antiguas; la Biblia también usa la imagen para hablar de esclavitud al pecado o servicio a Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-escriba","termino":"Escriba","explicacion":"Experto en copiar, estudiar e interpretar la Ley.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-escudo-de-la-fe","termino":"Escudo de la fe","explicacion":"Imagen de la confianza en Dios que apaga los ataques espirituales.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-espada-de-dos-filos","termino":"Espada de dos filos","explicacion":"Espada cortante por ambos lados; imagen de la palabra de Dios que penetra y discierne.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-esperanza","termino":"Esperanza","explicacion":"Confianza segura en el cumplimiento futuro de las promesas de Dios.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-esposa-del-cordero","termino":"Esposa del Cordero","explicacion":"Imagen de la Iglesia unida a Cristo con fidelidad y amor.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-estadio","termino":"Estadio","explicacion":"Medida antigua de distancia de unos ciento ochenta metros, con variaciones según la época.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-estatuto","termino":"Estatuto","explicacion":"Norma establecida para orientar la vida y el culto del pueblo.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-estirpe","termino":"Estirpe","explicacion":"Linaje o descendencia familiar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-eucaristia","termino":"Eucaristía","explicacion":"Nombre cristiano de la Cena del Señor, centrada en el pan y el vino en memoria y comunión con Cristo.","categoria":"Oración y culto","builtin":true},{"id":"builtin-eunuco","termino":"Eunuco","explicacion":"Hombre castrado o alto funcionario de palacio; el término puede usarse en ambos sentidos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-evangelio","termino":"Evangelio","explicacion":"Buena noticia de la salvación y del Reino de Dios por medio de Cristo Jesús.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-evangelista","termino":"Evangelista","explicacion":"Persona que anuncia el evangelio; también título tradicional de los autores de los cuatro Evangelios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-exhortar","termino":"Exhortar","explicacion":"Animar, aconsejar o llamar con firmeza a hacer lo correcto.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-expiacion","termino":"Expiación","explicacion":"Acción por la que se quita o cubre la culpa del pecado para restaurar la comunión con Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-expiacion-dia-de-la","termino":"Expiación, Día de la","explicacion":"Día anual en que el sumo sacerdote realizaba ritos por los pecados del pueblo.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-falso-profeta","termino":"Falso profeta","explicacion":"Figura que engaña y apoya al poder contrario a Dios en Apocalipsis.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-fariseo","termino":"Fariseo","explicacion":"Miembro de un grupo judío muy dedicado a la Ley y a las tradiciones, criticado por Jesús cuando caía en hipocresía.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-fatuo","termino":"Fatuo","explicacion":"Necio, presumido o falto de juicio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-fe","termino":"Fe","explicacion":"Confianza firme en Dios, en su palabra y en Cristo Jesús.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-fidelidad","termino":"Fidelidad","explicacion":"Lealtad constante y cumplimiento de la palabra dada.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-filacteria","termino":"Filacteria","explicacion":"Pequeña caja con textos de la Ley llevada por algunos judíos en la frente o el brazo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-flagelacion","termino":"Flagelación","explicacion":"Castigo mediante azotes, a menudo severo y previo a una ejecución.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-flecos","termino":"Flecos","explicacion":"Cordones en los bordes de los vestidos israelitas para recordar los mandamientos de Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-flujo","termino":"Flujo","explicacion":"Descarga corporal que en la Ley podía producir impureza ritual.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-forastero","termino":"Forastero","explicacion":"Persona que reside temporalmente en tierra ajena.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-fornicacion","termino":"Fornicación","explicacion":"Relaciones sexuales fuera del matrimonio; en sentido figurado, también puede expresar infidelidad espiritual a Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-fruto-del-espiritu","termino":"Fruto del Espíritu","explicacion":"Cualidades producidas por el Espíritu Santo: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-gehena","termino":"Gehena","explicacion":"Imagen del castigo final, derivada del valle de Hinom junto a Jerusalén.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-genealogia","termino":"Genealogía","explicacion":"Lista ordenada de antepasados y descendientes.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-gentil","termino":"Gentil","explicacion":"Persona no judía, perteneciente a las demás naciones.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-getsemani","termino":"Getsemaní","explicacion":"Huerto cerca del monte de los Olivos donde Jesús oró antes de ser arrestado.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-gloria","termino":"Gloria","explicacion":"Manifestación del honor, majestad, belleza y presencia de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-glorificacion","termino":"Glorificación","explicacion":"Transformación final de los creyentes para compartir la vida incorruptible de Cristo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-glorificar","termino":"Glorificar","explicacion":"Reconocer, mostrar y proclamar la grandeza y el honor de Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-gomer","termino":"Gomer","explicacion":"Medida pequeña de capacidad, equivalente a la décima parte de un efa.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-gozo","termino":"Gozo","explicacion":"Alegría profunda que nace de Dios y no depende solamente de las circunstancias.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-gracia","termino":"Gracia","explicacion":"Favor inmerecido de Dios que perdona, salva, fortalece y transforma.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-golgota","termino":"Gólgota","explicacion":"Lugar de la crucifixión de Jesús; significa «lugar de la Calavera».","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-hades","termino":"Hades","explicacion":"Término griego para el lugar o estado de los muertos, usado de forma semejante a Sheol.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-hebreo","termino":"Hebreo","explicacion":"Nombre antiguo de Abraham y sus descendientes; puede destacar su origen étnico o lingüístico.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-herencia","termino":"Herencia","explicacion":"Bien recibido por pertenencia familiar; espiritualmente, promesas y vida eterna dadas a los hijos de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-herodiano","termino":"Herodiano","explicacion":"Partidario político de la dinastía de Herodes.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-hijo-de-dios","termino":"Hijo de Dios","explicacion":"Título que expresa la relación única y naturaleza divina de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-hijo-del-hombre","termino":"Hijo del Hombre","explicacion":"Título usado por Jesús que expresa su humanidad, autoridad mesiánica y gloria futura.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-hin","termino":"Hin","explicacion":"Medida hebrea para líquidos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-hipocresia","termino":"Hipocresía","explicacion":"Aparentar una virtud o fe que no corresponde con la conducta interior.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-hisopo","termino":"Hisopo","explicacion":"Planta usada para rociar líquidos en ceremonias de purificación.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-holgar","termino":"Holgar","explicacion":"Descansar o dejar de trabajar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-hollar","termino":"Hollar","explicacion":"Pisar, aplastar o tratar con desprecio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-holocausto","termino":"Holocausto","explicacion":"Sacrificio en el que la víctima era quemada completamente sobre el altar.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-homer","termino":"Homer","explicacion":"Gran medida hebrea para productos secos, distinta de gomer.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-hora-novena","termino":"Hora novena","explicacion":"Aproximadamente las tres de la tarde.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-hora-sexta","termino":"Hora sexta","explicacion":"Aproximadamente el mediodía, contando desde las seis de la mañana.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-hosanna","termino":"Hosanna","explicacion":"Expresión hebrea que significa «sálvanos ahora» y llegó a usarse como aclamación de alabanza.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-huestes","termino":"Huestes","explicacion":"Ejércitos o grandes multitudes; «Jah de los ejércitos» expresa el dominio de Dios sobre las huestes celestiales.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-humildad","termino":"Humildad","explicacion":"Reconocer la dependencia de Dios y valorar a los demás sin exaltarse.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-huerfano","termino":"Huérfano","explicacion":"Niño que ha perdido a sus padres o carece de protección familiar.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-idolatria","termino":"Idolatría","explicacion":"Dar a una criatura, objeto, poder o deseo el lugar y la adoración que corresponden solamente a Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-iglesia","termino":"Iglesia","explicacion":"Asamblea o comunidad de quienes pertenecen a Cristo; no se limita a un edificio.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-ignominia","termino":"Ignominia","explicacion":"Deshonra pública muy grave.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-impiedad","termino":"Impiedad","explicacion":"Falta de reverencia hacia Dios y manera de vivir contraria a Él.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-implorar","termino":"Implorar","explicacion":"Rogar con gran humildad y necesidad.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-imposicion-de-manos","termino":"Imposición de manos","explicacion":"Gesto de bendición, oración, sanidad, envío o reconocimiento de un ministerio.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-incienso","termino":"Incienso","explicacion":"Sustancia aromática quemada en el culto; simboliza también las oraciones que suben a Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-incircuncision","termino":"Incircuncisión","explicacion":"Estado de no estar circuncidado; a menudo designa a los gentiles.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-infierno","termino":"Infierno","explicacion":"Término general usado para el castigo y separación definitiva de Dios; distintas palabras bíblicas pueden traducirse así.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-iniquidad","termino":"Iniquidad","explicacion":"Maldad, injusticia o conducta torcida que se opone a la voluntad de Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-inmundicia","termino":"Inmundicia","explicacion":"Estado de impureza ritual o moral.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-insensato","termino":"Insensato","explicacion":"Persona que actúa sin sabiduría y no considera las consecuencias espirituales de sus actos.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-inspiracion","termino":"Inspiración","explicacion":"Obra de Dios por la que las Escrituras fueron comunicadas mediante autores humanos.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-integridad","termino":"Integridad","explicacion":"Coherencia entre lo que se cree, se dice y se hace.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-inteligencia","termino":"Inteligencia","explicacion":"Facultad de comprender; bíblicamente incluye entender el camino de Dios.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-interceder","termino":"Interceder","explicacion":"Orar o actuar a favor de otra persona ante Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-intercesor","termino":"Intercesor","explicacion":"Quien ruega a favor de otra persona.","categoria":"Oración y culto","builtin":true},{"id":"builtin-israel","termino":"Israel","explicacion":"Nombre dado a Jacob y, después, al pueblo descendiente de él.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-israelita","termino":"Israelita","explicacion":"Miembro del pueblo de Israel.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-jactancia","termino":"Jactancia","explicacion":"Orgullo expresado al presumir de logros o cualidades.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-jubileo","termino":"Jubileo","explicacion":"Año especial celebrado cada cincuenta años, con liberación de esclavos, devolución de tierras y descanso de la tierra.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-judio","termino":"Judío","explicacion":"Persona perteneciente al pueblo de Judá o, de modo general, al pueblo de Israel.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-juicio-final","termino":"Juicio final","explicacion":"Juicio definitivo de Dios sobre toda la humanidad.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-justificacion","termino":"Justificación","explicacion":"Acto por el que Dios declara justo al creyente por la fe en Cristo, no por méritos propios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-koinonia","termino":"Koinonía","explicacion":"Palabra griega que significa comunión, participación y vida compartida.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-lagar","termino":"Lagar","explicacion":"Lugar donde se pisaban o prensaban uvas para obtener vino; también imagen de juicio.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-lago-de-fuego","termino":"Lago de fuego","explicacion":"Imagen apocalíptica del castigo final del mal, la muerte y quienes rechazan a Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-lascivia","termino":"Lascivia","explicacion":"Conducta o deseo sexual desenfrenado y sin respeto por la pureza.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-lavamiento-de-pies","termino":"Lavamiento de pies","explicacion":"Acto de hospitalidad y humildad que Jesús usó como ejemplo de servicio.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-legion","termino":"Legión","explicacion":"Gran unidad del ejército romano; en un relato se usa para indicar una multitud de demonios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-lepra","termino":"Lepra","explicacion":"Nombre bíblico amplio para diversas enfermedades de la piel y, a veces, contaminaciones en objetos o casas.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-lepta","termino":"Lepta","explicacion":"Moneda griega mínima, equivalente a la «blanca» de la viuda.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-levadura","termino":"Levadura","explicacion":"Sustancia que fermenta la masa; simbólicamente puede representar influencia, corrupción o expansión del Reino según el contexto.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-levita","termino":"Levita","explicacion":"Miembro de la tribu de Leví encargado de diversas tareas del culto y del templo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-ley","termino":"Ley","explicacion":"Enseñanza y mandamientos dados por Dios, especialmente por medio de Moisés.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-libacion","termino":"Libación","explicacion":"Ofrenda líquida, normalmente de vino, derramada delante de Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-libertinaje","termino":"Libertinaje","explicacion":"Uso de la libertad como excusa para vivir sin límites morales.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-libro-de-la-vida","termino":"Libro de la vida","explicacion":"Imagen del registro divino de quienes pertenecen a Dios y reciben vida eterna.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-lisonja","termino":"Lisonja","explicacion":"Alabanza exagerada o falsa usada para agradar o manipular.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-log","termino":"Log","explicacion":"Pequeña medida hebrea para líquidos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-logos","termino":"Logos","explicacion":"Palabra griega traducida «Verbo» o «Palabra», aplicada a Cristo en Juan 1.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-lomos","termino":"Lomos","explicacion":"Parte baja de la espalda o cintura; «ceñir los lomos» significa prepararse para actuar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-longanimidad","termino":"Longanimidad","explicacion":"Paciencia perseverante ante ofensas, dificultades o espera prolongada.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-lugar-santisimo","termino":"Lugar Santísimo","explicacion":"Parte más sagrada del tabernáculo y del templo, donde estaba el arca del pacto.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-luna-nueva","termino":"Luna nueva","explicacion":"Comienzo de un mes lunar, señalado con celebraciones y ofrendas especiales.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-luz-del-mundo","termino":"Luz del mundo","explicacion":"Título de Cristo como revelación, verdad y guía que vence las tinieblas.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-maldicion","termino":"Maldición","explicacion":"Declaración de juicio o desgracia; se opone a la bendición.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-mamon","termino":"Mamón","explicacion":"Palabra aramea para riqueza o dinero personificado como un señor rival de Dios.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-mandamiento","termino":"Mandamiento","explicacion":"Orden expresa dada por Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-mansedumbre","termino":"Mansedumbre","explicacion":"Fuerza bajo control, expresada con humildad y suavidad.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-maranata","termino":"Maranata","explicacion":"Expresión aramea que significa «Señor nuestro, ven» o «nuestro Señor viene».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-martirio","termino":"Martirio","explicacion":"Muerte sufrida por dar testimonio fiel de la fe.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-mayordomo","termino":"Mayordomo","explicacion":"Administrador responsable de los bienes de otra persona.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-mediador","termino":"Mediador","explicacion":"Persona que interviene para reconciliar dos partes; Cristo es mediador entre Dios y los seres humanos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-menora","termino":"Menorá","explicacion":"Candelabro de siete brazos usado en el tabernáculo y el templo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-mesias","termino":"Mesías","explicacion":"El Ungido prometido por Dios; en griego, Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-mies","termino":"Mies","explicacion":"Cereal maduro listo para cosechar; Jesús lo usa como imagen de personas preparadas para recibir el evangelio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-milenio","termino":"Milenio","explicacion":"Periodo de mil años mencionado en Apocalipsis 20 relacionado con el reinado de Cristo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-mina","termino":"Mina","explicacion":"Unidad de dinero y peso menor que un talento.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-mirra","termino":"Mirra","explicacion":"Resina aromática usada como perfume, medicina y preparación funeraria.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-misericordia","termino":"Misericordia","explicacion":"Compasión activa de Dios hacia quien sufre o necesita perdón.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-mitra","termino":"Mitra","explicacion":"Tocado usado por el sumo sacerdote.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-moriah","termino":"Moriah","explicacion":"Región asociada al sacrificio de Isaac y al lugar del templo de Jerusalén.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-muerte-segunda","termino":"Muerte segunda","explicacion":"Condenación definitiva descrita en Apocalipsis como el lago de fuego.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-murmuracion","termino":"Murmuración","explicacion":"Hablar a escondidas contra alguien, quejarse o difamar de manera dañina.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-nardo","termino":"Nardo","explicacion":"Perfume muy costoso obtenido de una planta aromática.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-nazareo","termino":"Nazareo","explicacion":"Persona consagrada a Dios mediante un voto especial que incluía abstenerse de vino, no cortarse el cabello y evitar contacto con muertos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-necedad","termino":"Necedad","explicacion":"Falta de sabiduría moral; en la Biblia suele describir a quien desprecia a Dios y la corrección.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-neguev","termino":"Neguev","explicacion":"Región árida al sur de la tierra de Israel.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-nueva-jerusalen","termino":"Nueva Jerusalén","explicacion":"Ciudad santa de la nueva creación donde Dios habita con su pueblo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-nuevo-cielo-y-nueva-tierra","termino":"Nuevo cielo y nueva tierra","explicacion":"Creación renovada donde habita la justicia y Dios vive con su pueblo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-obediencia","termino":"Obediencia","explicacion":"Respuesta voluntaria de hacer lo que Dios manda.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-obispo","termino":"Obispo","explicacion":"Supervisor o cuidador espiritual de una iglesia.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-oblacion","termino":"Oblación","explicacion":"Ofrenda, especialmente de harina, aceite o alimentos.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-odre","termino":"Odre","explicacion":"Recipiente de piel usado para guardar líquidos, especialmente vino.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-odre-viejo","termino":"Odre viejo","explicacion":"Imagen de estructuras incapaces de contener la novedad del evangelio.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-ofrenda","termino":"Ofrenda","explicacion":"Don presentado a Dios como acto de adoración, gratitud o expiación.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-omnipotencia","termino":"Omnipotencia","explicacion":"Poder ilimitado de Dios para realizar todo lo conforme a su naturaleza y voluntad.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-omnipresencia","termino":"Omnipresencia","explicacion":"Presencia de Dios en todo lugar sin estar limitado por el espacio.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-omnisciencia","termino":"Omnisciencia","explicacion":"Conocimiento perfecto y completo de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-oprobio","termino":"Oprobio","explicacion":"Deshonra, vergüenza o desprecio público.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-ordenanza","termino":"Ordenanza","explicacion":"Regla o práctica mandada para ser observada.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-oraculo","termino":"Oráculo","explicacion":"Mensaje solemne pronunciado con autoridad divina, a menudo profético.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-pacto","termino":"Pacto","explicacion":"Compromiso solemne establecido por Dios con personas o con su pueblo.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-pan-de-vida","termino":"Pan de vida","explicacion":"Título de Cristo como alimento espiritual que da vida eterna.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-paraiso","termino":"Paraíso","explicacion":"Lugar de bendición y comunión con Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-pariente-redentor","termino":"Pariente redentor","explicacion":"Familiar cercano responsable de rescatar propiedades, proteger la familia o casarse con una viuda sin descendencia.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-parusia","termino":"Parusía","explicacion":"Palabra griega para la venida o presencia de Cristo, especialmente su regreso glorioso.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-parabola","termino":"Parábola","explicacion":"Relato o comparación que comunica una enseñanza espiritual mediante situaciones conocidas.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-paraclito","termino":"Paráclito","explicacion":"Palabra griega que significa ayudador, defensor o consolador, aplicada al Espíritu Santo y también a Cristo.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-pascua","termino":"Pascua","explicacion":"Fiesta que recuerda la liberación de Israel de Egipto; para los cristianos se relaciona con la muerte y resurrección de Cristo.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-pavesa","termino":"Pavesa","explicacion":"Partícula ligera que queda de algo quemado.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-paz","termino":"Paz","explicacion":"Bienestar y reconciliación que proceden de Dios; no es solo ausencia de conflicto.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-pectoral","termino":"Pectoral","explicacion":"Pieza del vestido sacerdotal con doce piedras que representaban a las tribus de Israel.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-pentateuco","termino":"Pentateuco","explicacion":"Los cinco primeros libros de la Biblia.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-pentecostes","termino":"Pentecostés","explicacion":"Fiesta celebrada cincuenta días después de la Pascua; en Hechos marca el derramamiento del Espíritu Santo sobre la Iglesia.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-perdon","termino":"Perdón","explicacion":"Cancelación de una culpa u ofensa, acompañada de la decisión de no reclamarla.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-peregrino","termino":"Peregrino","explicacion":"Persona que viaja o vive como extranjero; espiritualmente expresa que la patria definitiva está con Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-persecucion","termino":"Persecución","explicacion":"Hostigamiento o sufrimiento causado por la fe o por hacer lo correcto.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-pesebre","termino":"Pesebre","explicacion":"Comedero de animales donde fue acostado Jesús al nacer.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-piedad","termino":"Piedad","explicacion":"Reverencia hacia Dios que se refleja en una vida obediente y compasiva.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-piedra-angular","termino":"Piedra angular","explicacion":"Piedra principal que sostiene y alinea una construcción; imagen aplicada a Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-posesion-demoniaca","termino":"Posesión demoníaca","explicacion":"Dominio extraordinario de un espíritu maligno sobre una persona, descrito en algunos relatos bíblicos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-potestades","termino":"Potestades","explicacion":"Poderes o autoridades; según el contexto pueden ser humanas o espirituales.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-prebenda","termino":"Prebenda","explicacion":"Beneficio o sustento asignado a un cargo religioso; término de uso posterior, no habitual en el texto bíblico.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-precepto","termino":"Precepto","explicacion":"Instrucción concreta que enseña cómo actuar.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-predestinacion","termino":"Predestinación","explicacion":"Determinación previa de Dios respecto a su plan y al destino de quienes están en Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-pretoriano","termino":"Pretoriano","explicacion":"Relacionado con la guardia o residencia del gobernador o emperador romano.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-pretorio","termino":"Pretorio","explicacion":"Residencia oficial o cuartel del gobernador romano.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-prevaricacion","termino":"Prevaricación","explicacion":"Acción de apartarse deliberadamente de lo recto y actuar con infidelidad o injusticia.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-primicias","termino":"Primicias","explicacion":"Primeros frutos de una cosecha ofrecidos a Dios como reconocimiento de que todo procede de Él.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-primicias-de-los-muertos","termino":"Primicias de los muertos","explicacion":"Título de Cristo resucitado que garantiza la futura resurrección de los creyentes.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-primogenito","termino":"Primogénito","explicacion":"Primer hijo nacido; también título de dignidad, herencia y supremacía.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-principados","termino":"Principados","explicacion":"Autoridades o poderes de alto rango, a veces espirituales.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-proconsul","termino":"Procónsul","explicacion":"Gobernador romano de una provincia senatorial.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-profecia","termino":"Profecía","explicacion":"Mensaje inspirado por Dios que puede exhortar, revelar o anunciar acontecimientos.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-profeta","termino":"Profeta","explicacion":"Persona llamada por Dios para comunicar su mensaje.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-propiciacion","termino":"Propiciación","explicacion":"Sacrificio que satisface la justicia divina y abre el camino a la reconciliación con Dios; en el Nuevo Testamento se aplica a la obra de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-propiciatorio","termino":"Propiciatorio","explicacion":"Cubierta de oro del arca del pacto donde se rociaba sangre en el Día de la Expiación.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-proselito","termino":"Prosélito","explicacion":"Persona de origen gentil que se convertía al judaísmo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-proverbio","termino":"Proverbio","explicacion":"Dicho breve que expresa una verdad práctica o moral.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-providencia","termino":"Providencia","explicacion":"Cuidado y gobierno continuo de Dios sobre su creación y la historia.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-prudencia","termino":"Prudencia","explicacion":"Capacidad de actuar con sabiduría, previsión y buen juicio.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-prueba","termino":"Prueba","explicacion":"Situación que revela, fortalece o examina la fe y el carácter.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-publicano","termino":"Publicano","explicacion":"Recaudador de impuestos para Roma, generalmente despreciado por los judíos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-puerta","termino":"Puerta","explicacion":"Imagen de Cristo como único acceso a la salvación y al rebaño de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-purificacion","termino":"Purificación","explicacion":"Proceso ritual o espiritual de limpieza de impureza o pecado.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-purim","termino":"Purim","explicacion":"Fiesta judía que recuerda la liberación narrada en el libro de Ester.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-pabilo","termino":"Pábilo","explicacion":"Mecha de una lámpara o vela.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-pampano","termino":"Pámpano","explicacion":"Rama tierna de la vid; imagen del discípulo unido a Cristo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-portico","termino":"Pórtico","explicacion":"Galería cubierta sostenida por columnas.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-querubin","termino":"Querubín","explicacion":"Ser celestial asociado a la presencia, santidad y trono de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-raboni","termino":"Raboni","explicacion":"Forma solemne y afectuosa de «maestro mío».","categoria":"Personas y grupos","builtin":true},{"id":"builtin-rabi","termino":"Rabí","explicacion":"Título hebreo que significa «maestro».","categoria":"Personas y grupos","builtin":true},{"id":"builtin-rasgar-vestidos","termino":"Rasgar vestidos","explicacion":"Gesto antiguo de duelo, horror o indignación.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-reconciliacion","termino":"Reconciliación","explicacion":"Restauración de la relación entre Dios y el ser humano, y también entre personas enemistadas.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-redarguir","termino":"Redargüir","explicacion":"Convencer a alguien de su error mediante una corrección clara.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-redencion","termino":"Redención","explicacion":"Liberación obtenida mediante el pago de un precio; Cristo nos libera del pecado por su sacrificio.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-redentor","termino":"Redentor","explicacion":"Persona que rescata pagando un precio; Cristo es el Redentor definitivo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-regeneracion","termino":"Regeneración","explicacion":"Nueva vida espiritual producida por el Espíritu Santo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reino-de-dios","termino":"Reino de Dios","explicacion":"Gobierno soberano y salvador de Dios, presente en Cristo y consumado en el futuro.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reino-de-los-cielos","termino":"Reino de los cielos","explicacion":"Expresión usada especialmente en Mateo con sentido semejante a Reino de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-remanente","termino":"Remanente","explicacion":"Grupo que permanece fiel a Dios después de juicio, crisis o apostasía general.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reprender","termino":"Reprender","explicacion":"Señalar y corregir una falta de manera directa.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-reprobado","termino":"Reprobado","explicacion":"Desaprobado por no superar una prueba moral o espiritual.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-resurreccion","termino":"Resurrección","explicacion":"Acción de volver corporalmente a la vida; Cristo resucitó y los muertos resucitarán.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-revelacion","termino":"Revelación","explicacion":"Acción por la que Dios da a conocer quién es y cuál es su voluntad.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-roca","termino":"Roca","explicacion":"Símbolo de firmeza, refugio y fidelidad; se aplica a Dios y a Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reprobo","termino":"Réprobo","explicacion":"Persona rechazada o desaprobada por su conducta persistente.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-sabbath","termino":"Sabbath","explicacion":"Forma hebrea de «sábado», relacionada con cesar o descansar.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-sabiduria","termino":"Sabiduría","explicacion":"Capacidad dada por Dios para comprender y aplicar correctamente la verdad.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-sacerdote","termino":"Sacerdote","explicacion":"Persona consagrada para servir en el culto, presentar sacrificios y enseñar la Ley.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-sacrificio","termino":"Sacrificio","explicacion":"Ofrenda presentada a Dios; en el Nuevo Testamento, Cristo es el sacrificio perfecto por el pecado.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-saduceo","termino":"Saduceo","explicacion":"Miembro de una élite sacerdotal judía que no aceptaba la resurrección ni ciertas doctrinas sostenidas por los fariseos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-saeta","termino":"Saeta","explicacion":"Flecha; figuradamente puede representar ataques, palabras hirientes o juicio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-salmo","termino":"Salmo","explicacion":"Canto o poema de oración, alabanza, lamento o sabiduría.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-salvacion","termino":"Salvación","explicacion":"Rescate del pecado, de la condenación y de la muerte, concedido por Dios en Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-samaritano","termino":"Samaritano","explicacion":"Habitante de Samaria; judíos y samaritanos mantenían una fuerte separación religiosa y social.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-sanedrin","termino":"Sanedrín","explicacion":"Consejo supremo judío de autoridad religiosa y judicial en tiempos del Nuevo Testamento.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-santa-cena","termino":"Santa Cena","explicacion":"Comida instituida por Jesús con pan y vino para recordar y participar de su sacrificio.","categoria":"Oración y culto","builtin":true},{"id":"builtin-santidad","termino":"Santidad","explicacion":"Condición de estar apartado para Dios y vivir conforme a su pureza.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-santificacion","termino":"Santificación","explicacion":"Proceso por el que Dios aparta y transforma al creyente para vivir en santidad.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-santuario","termino":"Santuario","explicacion":"Lugar santo dedicado a la presencia y al culto de Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-sarmiento","termino":"Sarmiento","explicacion":"Rama de la vid.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-satanas","termino":"Satanás","explicacion":"Adversario y acusador, enemigo espiritual de Dios y de su pueblo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-sefela","termino":"Sefela","explicacion":"Región de colinas bajas entre la costa y las montañas de Judá.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-segunda-venida","termino":"Segunda venida","explicacion":"Regreso futuro y visible de Cristo en gloria.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-selah","termino":"Selah","explicacion":"Término de los Salmos cuyo significado exacto es incierto; probablemente indica una pausa musical o de reflexión.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-sello","termino":"Sello","explicacion":"Marca de autenticidad, propiedad o protección; en Apocalipsis también forma parte de los juicios revelados.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-sello-del-espiritu","termino":"Sello del Espíritu","explicacion":"Marca espiritual de pertenencia y garantía de la obra salvadora de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-seno-de-abraham","termino":"Seno de Abraham","explicacion":"Imagen usada por Jesús para describir el descanso de los justos después de la muerte.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-serafin","termino":"Serafín","explicacion":"Ser celestial descrito en Isaías 6 que proclama la santidad de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-shekina","termino":"Shekiná","explicacion":"Término judío posterior usado para hablar de la presencia gloriosa de Dios entre su pueblo.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-sheol","termino":"Sheol","explicacion":"Término hebreo para el lugar o estado de los muertos.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-siclo","termino":"Siclo","explicacion":"Unidad hebrea de peso y moneda.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-siervo","termino":"Siervo","explicacion":"Persona al servicio de otra; también título de humildad y entrega a Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-siervo-sufriente","termino":"Siervo sufriente","explicacion":"Figura profética de Isaías que sufre por los pecados de otros y se cumple plenamente en Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-simiente","termino":"Simiente","explicacion":"Semilla o descendencia; puede referirse proféticamente a la descendencia prometida.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-simple","termino":"Simple","explicacion":"En Proverbios, persona inexperta y fácilmente influenciable, todavía abierta a aprender.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-sinagoga","termino":"Sinagoga","explicacion":"Lugar de reunión judío para oración, lectura y enseñanza de las Escrituras.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-sinopticos","termino":"Sinópticos","explicacion":"Mateo, Marcos y Lucas, llamados así porque presentan una visión paralela de la vida de Jesús.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-sion","termino":"Sion","explicacion":"Colina de Jerusalén y, por extensión, símbolo de la ciudad santa y del pueblo de Dios.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-soberania","termino":"Soberanía","explicacion":"Autoridad suprema de Dios sobre todo lo creado.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-soberbia","termino":"Soberbia","explicacion":"Orgullo que lleva a una persona a exaltarse a sí misma y a despreciar a Dios o a los demás.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-solaz","termino":"Solaz","explicacion":"Descanso, alivio o consuelo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-sueno","termino":"Sueño","explicacion":"Medio por el que Dios comunicó mensajes en algunos relatos bíblicos.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-sumo-sacerdote","termino":"Sumo sacerdote","explicacion":"Principal sacerdote de Israel, único autorizado para entrar una vez al año en el Lugar Santísimo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-suplicar","termino":"Suplicar","explicacion":"Pedir algo con humildad, insistencia y profundo deseo.","categoria":"Oración y culto","builtin":true},{"id":"builtin-sabado","termino":"Sábado","explicacion":"Séptimo día, apartado por Dios para descanso y culto.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-tabernaculo","termino":"Tabernáculo","explicacion":"Santuario portátil usado por Israel en el desierto como lugar de la presencia y el culto a Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-tabernaculos","termino":"Tabernáculos","explicacion":"Fiesta judía que recuerda la vida de Israel en tiendas durante el desierto y celebra la provisión de Dios.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-talento","termino":"Talento","explicacion":"Gran unidad de peso y dinero; su valor era muy elevado.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-talit","termino":"Talit","explicacion":"Manto judío de oración con flecos; el término no aparece como tal en todas las traducciones.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-talon","termino":"Talón","explicacion":"Parte posterior del pie; en Génesis 3 aparece en la imagen profética de la lucha contra la serpiente.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-templanza","termino":"Templanza","explicacion":"Dominio propio sobre deseos, impulsos y acciones.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-templo","termino":"Templo","explicacion":"Edificio consagrado al culto de Dios en Jerusalén; también se usa espiritualmente para el cuerpo o la comunidad creyente.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-tentacion","termino":"Tentación","explicacion":"Atracción o prueba que busca llevar al pecado; Dios puede permitir pruebas, pero no induce a hacer el mal.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-testamento","termino":"Testamento","explicacion":"En sentido bíblico puede significar pacto; también designa las dos grandes partes de la Biblia.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-testigo","termino":"Testigo","explicacion":"Persona que declara lo que ha visto o conocido; «mártir» procede de la palabra griega para testigo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-tetrarca","termino":"Tetrarca","explicacion":"Gobernante de una parte de un territorio.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-tetrarquia","termino":"Tetrarquía","explicacion":"Territorio gobernado por un tetrarca, originalmente una cuarta parte de un reino.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-tipo","termino":"Tipo","explicacion":"Persona, objeto o acontecimiento que anticipa simbólicamente una realidad futura.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-tipologia","termino":"Tipología","explicacion":"Lectura que reconoce en personas, objetos o acontecimientos antiguos figuras que anticipan realidades posteriores, especialmente a Cristo.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-tizon","termino":"Tizón","explicacion":"Trozo de madera parcialmente quemado; «tizón arrebatado del incendio» describe a alguien rescatado.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-tora","termino":"Torá","explicacion":"Palabra hebrea que significa instrucción o ley; se usa especialmente para los cinco libros de Moisés.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-transgresion","termino":"Transgresión","explicacion":"Desobediencia consciente de un mandato o límite establecido por Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-tribulacion","termino":"Tribulación","explicacion":"Tiempo de aflicción, prueba o persecución; en profecía puede referirse a una etapa de sufrimiento intenso.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-tribuno","termino":"Tribuno","explicacion":"Oficial romano de alto rango, normalmente al mando de una cohorte.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-trillar","termino":"Trillar","explicacion":"Separar el grano de la paja golpeándolo o pasándolo bajo instrumentos.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-trinidad","termino":"Trinidad","explicacion":"Un solo Dios que existe eternamente como Padre, Hijo y Espíritu Santo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-trompeta","termino":"Trompeta","explicacion":"Instrumento usado para convocar y anunciar; en Apocalipsis introduce una serie de juicios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-trompetas-fiesta-de","termino":"Trompetas, Fiesta de","explicacion":"Celebración marcada por el sonido de trompetas al inicio del séptimo mes.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-tutor","termino":"Tutor","explicacion":"Persona encargada del cuidado y formación de un menor o heredero.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-talamo","termino":"Tálamo","explicacion":"Habitación matrimonial o lecho nupcial.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-tartaro","termino":"Tártaro","explicacion":"Término usado en 2 Pedro para el lugar de custodia de ángeles que pecaron.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-uncion","termino":"Unción","explicacion":"Consagración y capacitación de Dios; puede referirse al aceite o a la obra del Espíritu Santo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-ungir","termino":"Ungir","explicacion":"Aplicar aceite como señal de consagración, elección o sanidad.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-unguento","termino":"Ungüento","explicacion":"Preparación aromática o medicinal aplicada sobre el cuerpo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-urim-y-tumim","termino":"Urim y Tumim","explicacion":"Objetos sacerdotales usados para consultar la voluntad de Dios; su forma exacta es desconocida.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-vanagloria","termino":"Vanagloria","explicacion":"Orgullo por los propios logros acompañado del deseo de recibir admiración.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-velo","termino":"Velo","explicacion":"Cortina que separaba el Lugar Santo del Lugar Santísimo; su rasgadura al morir Cristo simbolizó acceso a Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-verbo","termino":"Verbo","explicacion":"Título de Cristo en Juan 1: la Palabra eterna de Dios hecha carne.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-vid-verdadera","termino":"Vid verdadera","explicacion":"Imagen de Cristo como fuente de vida y fruto para sus discípulos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-vida-eterna","termino":"Vida eterna","explicacion":"Vida plena y sin fin en comunión con Dios, recibida por medio de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-vidente","termino":"Vidente","explicacion":"Antiguo nombre dado a quien recibía revelaciones proféticas de Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-vigilia","termino":"Vigilia","explicacion":"Una de las divisiones de la noche; también tiempo dedicado a permanecer despierto en oración.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-vision","termino":"Visión","explicacion":"Revelación recibida mediante imágenes mostradas por Dios.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-vituperio","termino":"Vituperio","explicacion":"Insulto, reproche o deshonra grave.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-viuda","termino":"Viuda","explicacion":"Mujer cuyo esposo ha muerto; en la Biblia representa con frecuencia a quienes necesitan protección.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-voto","termino":"Voto","explicacion":"Promesa solemne hecha a Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-yelmo","termino":"Yelmo","explicacion":"Casco de protección; en Efesios simboliza la salvación.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-yugo","termino":"Yugo","explicacion":"Pieza para unir animales de trabajo; simbólicamente expresa carga, servidumbre, enseñanza o unión.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-zarandear","termino":"Zarandear","explicacion":"Mover violentamente como el grano en un cedazo; figuradamente, someter a una prueba fuerte.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-zelote","termino":"Zelote","explicacion":"Miembro o simpatizante de un movimiento judío contrario al dominio romano.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-zurron","termino":"Zurrón","explicacion":"Bolsa de cuero usada por pastores o viajeros.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-agape","termino":"Ágape","explicacion":"Palabra griega usada para el amor sacrificado, fiel y orientado al bien del otro.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-aloe","termino":"Áloe","explicacion":"Sustancia aromática usada, entre otras cosas, en preparaciones funerarias.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-angel","termino":"Ángel","explicacion":"Mensajero espiritual de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-azimos","termino":"Ázimos","explicacion":"Panes sin levadura y fiesta asociada a la Pascua.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-obolo","termino":"Óbolo","explicacion":"Moneda griega pequeña.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-osculo-santo","termino":"Ósculo santo","explicacion":"Beso usado como saludo fraternal entre creyentes.","categoria":"Objetos y costumbres","builtin":true}];
const freshUrl=file=>`${DATA}${file}?v=${APP_VERSION}`;
const storedReadingPoints=JSON.parse(localStorage.getItem('readingPoints')||'[]');
const state={books:[],bookIndex:0,chapter:1,verses:[],titles:{},selected:new Set(),highlights:JSON.parse(localStorage.getItem('highlights')||'{}'),favorites:JSON.parse(localStorage.getItem('favorites')||'{}'),explanations:JSON.parse(localStorage.getItem('explanations')||'{}'),readingPoints:Array.isArray(storedReadingPoints)?storedReadingPoints.map((p,i)=>({...p,id:String(p.id||`${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`)})):[],importedTitles:JSON.parse(localStorage.getItem('importedTitles')||'{}'),externalBible:null,baseTitles:{},dictionaryBase:[],dictionaryCustom:JSON.parse(localStorage.getItem('dictionaryCustom')||'[]'),dictionaryEdits:JSON.parse(localStorage.getItem('dictionaryEdits')||'{}'),dictionaryDeleted:JSON.parse(localStorage.getItem('dictionaryDeleted')||'[]'),activeReadingPoint:JSON.parse(localStorage.getItem('activeReadingPoint')||'null'),lastReadingPoint:JSON.parse(localStorage.getItem('lastReadingPoint')||'null')};
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
function updateSearchDialogViewport(){
  const dialog=$('#searchDialog');
  if(!dialog?.open||!dialog.classList.contains('search-live-layout'))return;
  const vv=window.visualViewport;
  const visibleHeight=vv?.height||window.innerHeight;
  const visibleTop=vv?.offsetTop||0;
  dialog.style.setProperty('--search-vv-height',`${visibleHeight}px`);
  dialog.style.setProperty('--search-vv-top',`${visibleTop}px`);
  const inputFocused=document.activeElement===$('#searchInput');
  const keyboardVisible=visibleHeight < window.innerHeight*0.82;
  dialog.classList.toggle('keyboard-visible',inputFocused||keyboardVisible);
}
function resetSearchDialogLayout(){
  const dialog=$('#searchDialog');
  dialog?.classList.remove('search-live-layout','keyboard-visible');
  dialog?.style.removeProperty('--search-vv-height');
  dialog?.style.removeProperty('--search-vv-top');
}
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

function save(){localStorage.setItem('highlights',JSON.stringify(state.highlights));localStorage.setItem('favorites',JSON.stringify(state.favorites));localStorage.setItem('explanations',JSON.stringify(state.explanations));localStorage.setItem('last',JSON.stringify({bookIndex:state.bookIndex,chapter:state.chapter}));localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));localStorage.setItem('importedTitles',JSON.stringify(state.importedTitles||{}));localStorage.setItem('dictionaryCustom',JSON.stringify(state.dictionaryCustom||[]));localStorage.setItem('dictionaryEdits',JSON.stringify(state.dictionaryEdits||{}));localStorage.setItem('dictionaryDeleted',JSON.stringify(state.dictionaryDeleted||[]));localStorage.setItem('activeReadingPoint',JSON.stringify(state.activeReadingPoint||null));localStorage.setItem('lastReadingPoint',JSON.stringify(state.lastReadingPoint||null));updateReadingPointUI();updateHomeStatsSummary();}
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
      await Promise.all(cacheNames.filter(name=>name.startsWith('biblia-estudio-')&&name!=='biblia-estudio-v1.64.72').map(name=>caches.delete(name)));
    }catch(error){console.warn('No se pudieron limpiar las cachés antiguas',error)}
  }
  state.books=await fetch(freshUrl('index.json'),{cache:'no-store'}).then(r=>r.json());
  // Prepara el Versículo del día antes de pintar la portada, para evitar que quede en 'Preparando…'.
  await ensureDailyVerse();
  // Las 433 entradas quedan incluidas en la propia aplicación para que el diccionario
  // funcione incluso si el navegador bloquea o conserva una copia antigua del JSON.
  state.dictionaryBase=BUILTIN_DICTIONARY_ENTRIES.map(entry=>({...entry}));
  try{
    const dictionaryResponse=await fetch(freshUrl('biblical-dictionary.json'),{cache:'no-store'});
    if(dictionaryResponse.ok){
      const dictionaryJson=await dictionaryResponse.json();
      if(Array.isArray(dictionaryJson.entries)&&dictionaryJson.entries.length===433)state.dictionaryBase=dictionaryJson.entries;
    }
  }catch(error){console.warn('Se usa el diccionario integrado',error)}
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
  requestAnimationFrame(()=>{prepareBooksDrawer();syncFavoritesFromStorage();updateReadingPointUI()});
  setTimeout(()=>{prepareBooksDrawer();syncFavoritesFromStorage();updateReadingPointUI()},150);
  setTimeout(()=>{prepareBooksDrawer();syncFavoritesFromStorage();updateReadingPointUI()},600);
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
    const headings=(chapterTitles[n]||[]).map(x=>`<div class="section-heading"><h3 class="section-title">${escapeHtml(x)}</h3></div>`).join('');
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
  reader.innerHTML=`<div class="reader-book-title">${escapeHtml(displayBook(b).toUpperCase())}</div><img class="chapter-divider" src="separador_etiope_transparente_final.png?v=${APP_VERSION}" alt="" aria-hidden="true"><div class="chapter-number">${state.chapter}</div>`+body;
  updateSelection();updateReadingPointUI();reader.scrollTop=0
}
function limpiarTextoBiblico(texto){return String(texto??'').replace(/\r\n?/g,'\n').replace(/\\n/g,'\n').replace(/\/n/gi,'\n').replace(/\u002Fn/gi,'\n').replace(/\n{3,}/g,'\n\n').trim()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function formatBibleText(s){
  const safe=escapeHtml(limpiarTextoBiblico(s));
  // Cada palabra queda identificada sin alterar la puntuación ni el espaciado del texto.
  return safe.replace(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:['’’-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*)/g,'<span class="dict-word" data-word="$1">$1</span>').replace(/\n/g,'<br>');
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
    if(clean){openDictionary(clean);toast(`Buscando “${clean}” en el diccionario`)}
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
  if(Date.now()<wordPressSuppressUntil){e.preventDefault();e.stopPropagation();return}
  const marker=e.target.closest('.explain-marker');if(marker){openViewExplanation(marker.dataset.exp);return}
  const v=e.target.closest('.verse');if(!v)return;
  const n=+v.dataset.v,exp=findExplanationForVerse(n);
  explanationArmedKey='';
  if(exp){
    state.selected.clear();for(const verse of exp.nums)state.selected.add(verse);
    updateSelection();selectionBar.classList.add('open');actionsPanelToggle?.setAttribute('aria-expanded','true');
    return;
  }
  const wasSelected=state.selected.has(n);wasSelected?state.selected.delete(n):state.selected.add(n);updateSelection();
  if(!wasSelected){selectionBar.classList.add('open');actionsPanelToggle?.setAttribute('aria-expanded','true')}
});
// El versículo abierto desde el selector permanece marcado hasta tocar fuera de él.
document.addEventListener('click',e=>{const target=document.querySelector('.verse.reading-target');if(target&&!e.target.closest('.verse.reading-target'))target.classList.remove('reading-target')},true);
$$('.action').forEach(b=>b.addEventListener('click',()=>action(b.dataset.action)));
async function action(a){
  if(a==='clear'){state.selected.clear();explanationArmedKey='';updateSelection()}
  if(a==='reading-point')goToReadingPoint();
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
    btn.innerHTML=`<span>${escapeHtml(displayBook(b))}</span><small>${b.chapters} capítulos · ${escapeHtml(b.category)}</small><span class="book-chevron">⌄</span>`;

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
      $$('.book-chapters-wrap').forEach(x=>x.classList.add('hidden'));
      $$('.book-item').forEach(x=>x.setAttribute('aria-expanded','false'));
      if(opening){
        chaptersWrap.classList.remove('hidden');
        btn.setAttribute('aria-expanded','true');
        setTimeout(()=>wrap.scrollIntoView({block:'nearest',behavior:'smooth'}),30);
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
$('#chapterTitle').onclick=()=>{const b=state.books[state.bookIndex];$('#chapterDialogTitle').textContent=displayBook(b);$('#chaptersGrid').innerHTML='';for(let i=1;i<=b.chapters;i++){const x=document.createElement('button');x.textContent=i;x.onclick=async()=>{state.chapter=i;$('#chapterDialog').close();showReader();await loadChapter()};$('#chaptersGrid').append(x)}$('#chapterDialog').showModal()};
$('#prevChapter').onclick=()=>moveChapter(-1);$('#nextChapter').onclick=()=>moveChapter(1);async function moveChapter(d){let b=state.books[state.bookIndex];let c=state.chapter+d;if(c<1&&state.bookIndex>0){state.bookIndex--;b=state.books[state.bookIndex];c=b.chapters}else if(c>b.chapters&&state.bookIndex<state.books.length-1){state.bookIndex++;c=1}else if(c<1||c>b.chapters)return;state.chapter=c;showReader();await loadChapter();scrollTo(0,0)}
$('#searchBtn').onclick=openSearchDialog;$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});$('#runSearch').onclick=runSearch;
$('#searchInput').addEventListener('focus',()=>requestAnimationFrame(updateSearchDialogViewport));
$('#searchInput').addEventListener('input',()=>requestAnimationFrame(updateSearchDialogViewport));
$('#searchInput').addEventListener('blur',()=>setTimeout(updateSearchDialogViewport,80));
$('#searchDialog').addEventListener('close',resetSearchDialogLayout);
window.visualViewport?.addEventListener('resize',updateSearchDialogViewport);
window.visualViewport?.addEventListener('scroll',updateSearchDialogViewport);
window.addEventListener('orientationchange',()=>setTimeout(updateSearchDialogViewport,120));
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
  $('#statsDictionary').textContent=getDictionaryEntries().length.toLocaleString('es-ES');
  $('#statsHighlights').textContent=Object.keys(state.highlights||{}).length.toLocaleString('es-ES');
  $('#statsTitlesTotal').textContent=countTitleLayer(BUILTIN_TITLES_EMBEDDED||{}).toLocaleString('es-ES');
  updateHomeStatsSummary();
}
function openStats(){renderStats();$('#statsDialog').showModal()}

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
setInterval(()=>{applyTimeHeader();if($('#statsDialog')?.open)renderStats()},1000);


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
  const unseen=Boolean(v?.dateKey)&&localStorage.getItem('dailyVerseLastSeen')!==v.dateKey;
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
  const v=await ensureDailyVerse();paintDailyVerse(v);$('#dailyVerseDialog').showModal();localStorage.setItem('dailyVerseLastSeen',v.dateKey);updateDailyVerseReminder(v);
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
  const v=await ensureDailyVerse();
  const toggle=$('#dailyVerseNotifications');if(toggle)toggle.checked=dailyNotificationsEnabled();
  await maybeNotifyDailyVerse(v);
  const forced=new URLSearchParams(location.search).get('dailyVerse')==='1';
  updateDailyVerseReminder(v);
  if(forced)setTimeout(()=>openDailyVerse(),450);
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

function wireHomeActions(){
  $('#homeContinue')?.addEventListener('click',()=>goToReadingPoint());
  $('#homeEnter')?.addEventListener('click',async()=>{showReader();await loadChapter();});
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
  const addWordForms=word=>{
    if(!word)return;
    forms.add(word);
    if(word.endsWith('ces')&&word.length>3)forms.add(word.slice(0,-3)+'z');
    if(word.endsWith('es')&&word.length>3)forms.add(word.slice(0,-2));
    if(word.endsWith('s')&&!word.endsWith('es')&&word.length>2)forms.add(word.slice(0,-1));
    if(word.endsWith('z'))forms.add(word.slice(0,-1)+'ces');
    else if(/[aeiouáéó]$/.test(word))forms.add(word+'s');
    else if(/[íú]$/.test(word)){forms.add(word+'s');forms.add(word+'es')}
    else forms.add(word+'es');
  };
  addWordForms(normalized);
  const parts=normalized.split(/\s+/);
  if(parts.length>1){
    const last=parts.pop();
    const lastForms=new Set();
    const basePrefix=parts.join(' ')+' ';
    if(last.endsWith('ces')&&last.length>3)lastForms.add(last.slice(0,-3)+'z');
    if(last.endsWith('es')&&last.length>3)lastForms.add(last.slice(0,-2));
    if(last.endsWith('s')&&!last.endsWith('es')&&last.length>2)lastForms.add(last.slice(0,-1));
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
function getDictionaryEntries(){
  const deleted=new Set(state.dictionaryDeleted||[]), edits=state.dictionaryEdits||{};
  const base=(state.dictionaryBase||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,...(edits[x.id]||{}),builtin:true}));
  const custom=(state.dictionaryCustom||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,builtin:false}));
  return [...base,...custom].sort((a,b)=>String(a.termino).localeCompare(String(b.termino),'es',{sensitivity:'base'}));
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
  const q=normalizeDictionaryText(query), all=getDictionaryEntries();
  const filtered=q
    ?all.map(x=>({entry:x,score:dictionarySearchScore(x,query)})).filter(x=>x.score<99).sort((a,b)=>a.score-b.score||String(a.entry.termino).localeCompare(String(b.entry.termino),'es',{sensitivity:'base'})).map(x=>x.entry)
    :all;
  const visible=q?filtered:filtered.slice(0,80);
  $('#dictionaryCount').textContent=q
    ?`${filtered.length.toLocaleString('es-ES')} coincidencia${filtered.length===1?'':'s'} de ${all.length.toLocaleString('es-ES')} entradas`
    :`${all.length.toLocaleString('es-ES')} entradas · escribe para filtrar`;
  $('#dictionaryResults').innerHTML=visible.length
    ?visible.map(x=>`<button class="dictionary-card" type="button" data-id="${escapeHtml(x.id)}"><strong>${escapeHtml(x.termino)}</strong><small>${escapeHtml(x.categoria||'Sin categoría')}</small><p>${escapeHtml(x.explicacion)}</p></button>`).join('')+(q?'':'<p class="dictionary-live-help">Escribe en el buscador y las coincidencias aparecerán al instante.</p>')
    :`<div class="dictionary-empty"><p class="empty-saved">No se encontraron coincidencias para <strong>“${escapeHtml(cleanDictionaryWord(query))}”</strong>.</p><button id="addMissingDictionaryEntry" type="button" class="primary">Añadir palabra</button></div>`;
  $$('.dictionary-card').forEach(card=>card.addEventListener('click',()=>openDictionaryEditor(card.dataset.id)));
  $('#addMissingDictionaryEntry')?.addEventListener('click',()=>openDictionaryEditor('',cleanDictionaryWord($('#dictionarySearch').value)));
  const copyBtn=$('#copyDictionaryWord');if(copyBtn)copyBtn.disabled=!cleanDictionaryWord(query);
}
function openDictionary(initialQuery=''){
  state.selected.clear();updateSelection();
  const query=String(initialQuery||'').trim();
  $('#dictionarySearch').value=query;
  renderDictionary(query);
  $('#dictionaryDialog').showModal();
  setTimeout(()=>{const input=$('#dictionarySearch');input?.focus();if(query)input?.select()},80);
}
function openDictionaryEditor(id='',prefill=''){
  const entry=getDictionaryEntries().find(x=>x.id===id);
  $('#dictionaryEntryId').value=entry?.id||'';
  $('#dictionaryTerm').value=entry?.termino||cleanDictionaryWord(prefill);
  $('#dictionaryCategory').value=entry?.categoria||'';
  $('#dictionaryExplanation').value=entry?.explicacion||'';
  $('#dictionaryEditTitle').textContent=entry?'Editar palabra':'Añadir palabra';
  $('#deleteDictionaryEntry').style.display=entry?'inline-block':'none';
  $('#dictionaryEditDialog').showModal();
}
$('#runDictionarySearch')?.addEventListener('click',()=>renderDictionary($('#dictionarySearch').value));
$('#dictionarySearch')?.addEventListener('input',e=>renderDictionary(e.target.value));
$('#dictionarySearch')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();renderDictionary(e.target.value)}});
$('#addDictionaryEntry')?.addEventListener('click',()=>openDictionaryEditor('',cleanDictionaryWord($('#dictionarySearch').value)));
$('#copyDictionaryWord')?.addEventListener('click',async()=>{
  const word=cleanDictionaryWord($('#dictionarySearch').value);
  if(!word){toast('Selecciona o escribe una palabra');return}
  try{await navigator.clipboard.writeText(word);toast(`“${word}” copiada`)}catch(_){toast('No se pudo copiar la palabra')}
});
$('#openDictionarySettings')?.addEventListener('click',()=>{$('#settingsDialog').close();openDictionary()});
$('#saveDictionaryEntry')?.addEventListener('click',()=>{
  const id=$('#dictionaryEntryId').value, termino=$('#dictionaryTerm').value.trim(), categoria=$('#dictionaryCategory').value.trim(), explicacion=$('#dictionaryExplanation').value.trim();
  if(!termino||!explicacion){toast('Escribe la palabra y su explicación');return}
  if(id){
    const customIndex=(state.dictionaryCustom||[]).findIndex(x=>x.id===id);
    if(customIndex>=0)state.dictionaryCustom[customIndex]={...state.dictionaryCustom[customIndex],termino,categoria,explicacion,updatedAt:Date.now()};
    else state.dictionaryEdits[id]={termino,categoria,explicacion,updatedAt:Date.now()};
  }else{
    const newId=`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    state.dictionaryCustom.push({id:newId,termino,categoria,explicacion,builtin:false,createdAt:Date.now(),updatedAt:Date.now()});
  }
  save();$('#dictionaryEditDialog').close();renderDictionary($('#dictionarySearch').value);toast(id?'Entrada actualizada':'Entrada añadida');
});
$('#deleteDictionaryEntry')?.addEventListener('click',()=>{
  const id=$('#dictionaryEntryId').value;if(!id||!confirm('¿Eliminar esta entrada del diccionario?'))return;
  const customIndex=(state.dictionaryCustom||[]).findIndex(x=>x.id===id);
  if(customIndex>=0)state.dictionaryCustom.splice(customIndex,1);else{if(!state.dictionaryDeleted.includes(id))state.dictionaryDeleted.push(id);delete state.dictionaryEdits[id]}
  save();$('#dictionaryEditDialog').close();renderDictionary($('#dictionarySearch').value);toast('Entrada eliminada');
});

const BACKUP_KEYS=[
  // Lectura y estudio
  'highlights','favorites','explanations','last','readingPoints','readingPoint','activeReadingPoint','lastReadingPoint',
  // Diccionario completo del usuario
  'dictionaryCustom','dictionaryEdits','dictionaryDeleted',
  // Módulos de estudio y sus papeleras
  'biblia_personajes_crud_v16433','biblia_parabolas_crud_v16433','biblia_guias_crud_v16435',
  // Títulos, auditorías y ajustes
  'importedTitles','fontSize','readerTheme','lastLocalBibleAudit','verifiedTitleLayerAudit','titlesChapterOffsetV125','titlesDoubleShiftFixedV126',
  // Versículo del día y preferencias relacionadas
  'dailyVerseHomeCache','dailyVerseLastSeen','dailyVerseNotifications','dailyVerseLastNotification'
];
function parseBackupStorageValue(key,fallback){
  try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}catch(_){return fallback}
}
function buildCompleteBackup(){
  // Fuerza el guardado del estado principal antes de recopilar la copia.
  save();
  const data={};
  for(const key of BACKUP_KEYS){const value=localStorage.getItem(key);if(value!==null)data[key]=value}
  const characters=parseBackupStorageValue('biblia_personajes_crud_v16433',null);
  const parables=parseBackupStorageValue('biblia_parabolas_crud_v16433',null);
  const guides=parseBackupStorageValue('biblia_guias_crud_v16435',null);
  return{
    app:'Mi Biblia de Estudio',schema:2,appVersion:APP_VERSION,createdAt:new Date().toISOString(),
    summary:{
      savedVerses:Object.keys(state.favorites||{}).length,
      highlights:Object.keys(state.highlights||{}).length,
      explanations:Object.keys(state.explanations||{}).length,
      readingPoints:(state.readingPoints||[]).length,
      titles:countTitleLayer(state.importedTitles||{}),
      dictionary:getDictionaryEntries().length,
      dictionaryCustom:(state.dictionaryCustom||[]).length,
      dictionaryEdited:Object.keys(state.dictionaryEdits||{}).length,
      dictionaryDeleted:(state.dictionaryDeleted||[]).length,
      characters:Array.isArray(characters?.characters)?characters.characters.length:0,
      charactersTrash:Array.isArray(characters?.trash)?characters.trash.length:0,
      parables:Array.isArray(parables?.parables)?parables.parables.length:0,
      parablesTrash:Array.isArray(parables?.trash)?parables.trash.length:0,
      guides:Array.isArray(guides?.guides)?guides.guides.length:0,
      guidesTrash:Array.isArray(guides?.trash)?guides.trash.length:0
    },
    localStorage:data
  };
}
function downloadJsonFile(name,value){
  const blob=new Blob([JSON.stringify(value,null,2)],{type:'application/json;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)
}
$('#exportBackup')?.addEventListener('click',()=>{
  const stamp=new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
  downloadJsonFile(`Biblia_de_Estudio_backup_${stamp}.json`,buildCompleteBackup());
  toast('Copia de seguridad exportada');
});
$('#importBackup')?.addEventListener('click',()=>$('#backupFileInput')?.click());
$('#backupFileInput')?.addEventListener('change',async e=>{
  const file=e.target.files?.[0];e.target.value='';if(!file)return;
  try{
    const backup=JSON.parse(await file.text());
    if(backup?.app!=='Mi Biblia de Estudio'||!backup.localStorage||typeof backup.localStorage!=='object')throw new Error('El archivo no es una copia válida de esta aplicación');
    const count=Object.keys(backup.localStorage).length;
    if(!confirm(`Se restaurarán ${count} grupos de datos y se reemplazarán los datos actuales. ¿Continuar?`))return;
    for(const key of BACKUP_KEYS)localStorage.removeItem(key);
    for(const [key,value] of Object.entries(backup.localStorage)){
      if(BACKUP_KEYS.includes(key)&&typeof value==='string')localStorage.setItem(key,value);
    }
    toast('Copia restaurada. Reiniciando…');
    setTimeout(()=>location.reload(),700);
  }catch(error){console.error(error);toast(error.message||'No se pudo importar la copia')}
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
$$('dialog form[method=dialog]').forEach(f=>f.addEventListener('submit',()=>{}));function toast(t){const x=$('#toast');x.textContent=t;x.classList.remove('hidden');clearTimeout(window._tt);window._tt=setTimeout(()=>x.classList.add('hidden'),1900)}

// La actualización mediante gesto de arrastre se ha desactivado para evitar
// recargas accidentales al llegar al inicio de listas y pantallas de lectura.
window.addEventListener('pageshow',()=>{syncFavoritesFromStorage();updateReadingPointUI();if(state.books.length)prepareBooksDrawer()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){syncFavoritesFromStorage();updateReadingPointUI();if(state.books.length)prepareBooksDrawer()}});
init().catch(e=>{reader.innerHTML='<p>No se pudo cargar la Biblia.</p>';console.error(e)});


navigator.serviceWorker?.addEventListener('message',event=>{
  if(event.data?.type==='OPEN_DAILY_VERSE')openDailyVerse();
});

