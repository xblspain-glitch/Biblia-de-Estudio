const DATA='./';
const APP_VERSION='1.54.0';
const BUILTIN_DICTIONARY_ENTRIES=[{"id":"builtin-abba","termino":"Abba","explicacion":"Palabra aramea afectuosa para dirigirse al padre; Jesús la usó al hablar con Dios Padre.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-abismo","termino":"Abismo","explicacion":"Lugar profundo asociado al encierro de poderes malignos o al mundo de los muertos.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-abominacion","termino":"Abominación","explicacion":"Algo profundamente detestable delante de Dios por su maldad o impureza.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-adarga","termino":"Adarga","explicacion":"Escudo de cuero, generalmente ovalado.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-adopcion","termino":"Adopción","explicacion":"Acto por el que Dios recibe a los creyentes como hijos suyos por medio de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-adorar","termino":"Adorar","explicacion":"Rendir a Dios reverencia, amor y entrega como único Señor.","categoria":"Oración y culto","builtin":true},{"id":"builtin-advenedizo","termino":"Advenedizo","explicacion":"Persona recién llegada o extranjera; en algunas traducciones también puede significar recién convertido.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-afrenta","termino":"Afrenta","explicacion":"Ofensa que causa vergüenza o humillación.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-aguijon","termino":"Aguijón","explicacion":"Punta que hiere o instrumento para conducir animales; figuradamente, aquello que causa dolor o impulsa.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-alabar","termino":"Alabar","explicacion":"Reconocer y proclamar la grandeza, bondad y obras de Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-aleluya","termino":"Aleluya","explicacion":"Expresión hebrea que significa «alabad a Jah».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-alfoli","termino":"Alfolí","explicacion":"Granero o depósito donde se guardaban alimentos y diezmos.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-aljaba","termino":"Aljaba","explicacion":"Estuche para llevar flechas.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-altar","termino":"Altar","explicacion":"Lugar elevado o estructura donde se presentaban sacrificios y ofrendas a Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-altivez","termino":"Altivez","explicacion":"Actitud orgullosa y arrogante de quien se considera superior.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-amonestar","termino":"Amonestar","explicacion":"Advertir o corregir con seriedad y amor para evitar el mal.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-amen","termino":"Amén","explicacion":"Palabra que expresa certeza y acuerdo: «así es» o «así sea».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-anatema","termino":"Anatema","explicacion":"Persona o cosa puesta bajo condenación o apartada para destrucción; también expresa una maldición solemne.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-anciano","termino":"Anciano","explicacion":"Responsable maduro de una comunidad; también puede referirse a una persona de edad avanzada.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-anticristo","termino":"Anticristo","explicacion":"Persona o poder que se opone a Cristo o pretende ocupar su lugar.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-antitipo","termino":"Antitipo","explicacion":"Realidad definitiva anunciada o representada previamente por un tipo.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-apocalipsis","termino":"Apocalipsis","explicacion":"Revelación de realidades ocultas; también nombre del último libro del Nuevo Testamento.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-aposento","termino":"Aposento","explicacion":"Habitación o sala de una casa.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-aposento-alto","termino":"Aposento alto","explicacion":"Habitación en la planta superior de una casa, usada para reuniones y oración.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-apostasia","termino":"Apostasía","explicacion":"Abandono consciente de la fe que antes se profesaba.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-apocrifo","termino":"Apócrifo","explicacion":"Libro religioso cuya autoridad canónica no es reconocida de igual modo por todas las tradiciones.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-apostol","termino":"Apóstol","explicacion":"Enviado con autoridad; especialmente los discípulos escogidos por Cristo para dar testimonio de Él.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-araba","termino":"Arabá","explicacion":"Depresión geográfica que incluye el valle del Jordán y se extiende hacia el sur.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-arca-del-pacto","termino":"Arca del pacto","explicacion":"Cofre sagrado que representaba la presencia y el pacto de Dios con Israel.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-arcangel","termino":"Arcángel","explicacion":"Ángel de rango principal o con una misión destacada.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-armadura-de-dios","termino":"Armadura de Dios","explicacion":"Conjunto de imágenes espirituales en Efesios 6 para permanecer firmes contra el mal.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-armagedon","termino":"Armagedón","explicacion":"Lugar simbólico o escenario de la confrontación final contra Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-arras","termino":"Arras","explicacion":"Garantía o anticipo de algo futuro; el Espíritu Santo es presentado como arras de nuestra herencia.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-arrebatamiento","termino":"Arrebatamiento","explicacion":"Reunión de los creyentes con Cristo descrita en 1 Tesalonicenses 4.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-arrepentimiento","termino":"Arrepentimiento","explicacion":"Cambio sincero de mente y corazón que lleva a abandonar el pecado y volver a Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-atalaya","termino":"Atalaya","explicacion":"Torre o lugar elevado de vigilancia; también imagen del profeta que advierte al pueblo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-avaricia","termino":"Avaricia","explicacion":"Deseo excesivo de acumular riquezas o bienes.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-aventar","termino":"Aventar","explicacion":"Lanzar el grano al aire para que el viento separe la paja.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-ayo","termino":"Ayo","explicacion":"Tutor o encargado de guiar a un menor; Pablo usa la imagen para explicar la función temporal de la Ley.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-ayuno","termino":"Ayuno","explicacion":"Abstención voluntaria de alimento durante un tiempo para buscar a Dios con oración y humildad.","categoria":"Oración y culto","builtin":true},{"id":"builtin-baluarte","termino":"Baluarte","explicacion":"Defensa o fortificación; figuradamente, protección segura.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-bato","termino":"Bato","explicacion":"Medida hebrea de capacidad para líquidos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-bautismo","termino":"Bautismo","explicacion":"Acto de inmersión o lavado que expresa arrepentimiento, unión con Cristo e incorporación a la comunidad creyente.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-beelzebu","termino":"Beelzebú","explicacion":"Nombre aplicado al príncipe de los demonios.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-belial","termino":"Belial","explicacion":"Expresión que significa maldad o inutilidad; en textos posteriores se personifica como poder maligno.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-bendecir","termino":"Bendecir","explicacion":"Hablar bien, agradecer y pedir el favor de Dios; cuando Dios bendice, concede su bien.","categoria":"Oración y culto","builtin":true},{"id":"builtin-benignidad","termino":"Benignidad","explicacion":"Bondad amable y disposición favorable hacia los demás.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-bestia","termino":"Bestia","explicacion":"Símbolo apocalíptico de poderes políticos y espirituales opuestos a Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-blanca","termino":"Blanca","explicacion":"Moneda de cobre de valor extremadamente pequeño.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-blasfemia","termino":"Blasfemia","explicacion":"Palabra o acción que insulta, desprecia o atribuye maldad a Dios y a lo santo.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-broquel","termino":"Broquel","explicacion":"Escudo pequeño usado para defensa.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-buen-pastor","termino":"Buen Pastor","explicacion":"Título de Cristo como quien guía, protege y entrega su vida por sus ovejas.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-balsamo","termino":"Bálsamo","explicacion":"Sustancia aromática y medicinal; símbolo de sanidad y consuelo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-calcanar","termino":"Calcañar","explicacion":"Talón del pie.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-calumnia","termino":"Calumnia","explicacion":"Acusación falsa que perjudica la reputación de una persona.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-calvario","termino":"Calvario","explicacion":"Nombre latino tradicional para Gólgota.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-calzado-del-evangelio","termino":"Calzado del evangelio","explicacion":"Imagen de estar preparado para anunciar y vivir el evangelio de la paz.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-camino","termino":"Camino","explicacion":"Título de Cristo como la vía hacia el Padre, unido a la verdad y la vida.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-candelero","termino":"Candelero","explicacion":"Soporte para lámparas; en Apocalipsis puede simbolizar una iglesia.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-canon","termino":"Canon","explicacion":"Conjunto de libros reconocidos como Sagrada Escritura por una comunidad de fe.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-caridad","termino":"Caridad","explicacion":"En traducciones antiguas, amor generoso y entregado, especialmente hacia el prójimo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-carismas","termino":"Carismas","explicacion":"Palabra griega para dones de gracia concedidos por Dios.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-cana-cascada","termino":"Caña cascada","explicacion":"Imagen de una persona débil o herida que Cristo no termina de quebrar, sino que trata con misericordia.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-cedazo","termino":"Cedazo","explicacion":"Utensilio parecido a un tamiz para separar materiales; «zarandear» expresa probar o sacudir intensamente.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-ceniza","termino":"Ceniza","explicacion":"Símbolo de duelo, fragilidad, humillación y arrepentimiento.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-centurion","termino":"Centurión","explicacion":"Oficial romano que normalmente mandaba alrededor de cien soldados.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-cerviz","termino":"Cerviz","explicacion":"Parte posterior del cuello; «dura cerviz» significa obstinación y resistencia a obedecer.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-cenir","termino":"Ceñir","explicacion":"Ajustar una túnica con cinturón para prepararse a caminar, trabajar o luchar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-cilicio","termino":"Cilicio","explicacion":"Tela áspera usada como señal de duelo, humillación o arrepentimiento.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-circuncision","termino":"Circuncisión","explicacion":"Señal física del pacto con Abraham; en el Nuevo Testamento también se usa como imagen de una transformación interior.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-cizana","termino":"Cizaña","explicacion":"Planta parecida al trigo cuando es joven; en la parábola representa a los que pertenecen al maligno.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-clamar","termino":"Clamar","explicacion":"Pedir ayuda a Dios con intensidad y urgencia.","categoria":"Oración y culto","builtin":true},{"id":"builtin-codicia","termino":"Codicia","explicacion":"Deseo desordenado de poseer lo que pertenece a otro o de tener cada vez más.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-codo","termino":"Codo","explicacion":"Medida de longitud basada en la distancia del codo a la punta de los dedos, aproximadamente medio metro.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-cohorte","termino":"Cohorte","explicacion":"Unidad militar romana compuesta por varios cientos de soldados.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-comunion","termino":"Comunión","explicacion":"Participación y unión espiritual con Dios y con los demás creyentes.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-concupiscencia","termino":"Concupiscencia","explicacion":"Deseo intenso y desordenado que inclina a la persona hacia el pecado.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-consejo","termino":"Consejo","explicacion":"Orientación sabia para tomar decisiones correctas.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-consolador","termino":"Consolador","explicacion":"Título aplicado al Espíritu Santo como ayudador, defensor y presencia de Cristo con los creyentes.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-consolar","termino":"Consolar","explicacion":"Dar alivio, ánimo y esperanza a quien sufre.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-contienda","termino":"Contienda","explicacion":"Discusión, rivalidad o conflicto persistente entre personas.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-conversion","termino":"Conversión","explicacion":"Cambio de dirección por el que una persona se vuelve del pecado hacia Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-copa-de-ira","termino":"Copa de ira","explicacion":"Imagen de la plenitud del juicio de Dios contra el mal.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-coraza","termino":"Coraza","explicacion":"Armadura que protege el pecho; imagen de justicia o fe y amor.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-corban","termino":"Corbán","explicacion":"Ofrenda dedicada a Dios; Jesús denunció su uso como excusa para no ayudar a los padres.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-cordero-de-dios","termino":"Cordero de Dios","explicacion":"Título de Cristo como sacrificio perfecto que quita el pecado del mundo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-cordura","termino":"Cordura","explicacion":"Buen juicio y sensatez para pensar y actuar correctamente.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-coro","termino":"Coro","explicacion":"Gran medida hebrea de capacidad.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-corona-de-vida","termino":"Corona de vida","explicacion":"Recompensa prometida a quienes permanecen fieles en la prueba.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-corona-incorruptible","termino":"Corona incorruptible","explicacion":"Imagen de la recompensa eterna que no se marchita.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-cristo","termino":"Cristo","explicacion":"Título griego que significa «Ungido» y corresponde a Mesías.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-crucifixion","termino":"Crucifixión","explicacion":"Método romano de ejecución mediante fijación a una cruz, usado contra Jesús.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-cuadrante","termino":"Cuadrante","explicacion":"Moneda romana de muy poco valor.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-cuerpo-de-cristo","termino":"Cuerpo de Cristo","explicacion":"Imagen de la Iglesia como comunidad unida a Cristo y formada por muchos miembros.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-decreto","termino":"Decreto","explicacion":"Decisión o mandato establecido con autoridad.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-decalogo","termino":"Decálogo","explicacion":"Los Diez Mandamientos dados por Dios a Moisés.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-decapolis","termino":"Decápolis","explicacion":"Conjunto de diez ciudades de cultura grecorromana al este y sureste de Galilea.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-dedicacion-fiesta-de-la","termino":"Dedicación, Fiesta de la","explicacion":"Fiesta judía que recuerda la nueva consagración del templo; también llamada Janucá.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-deidad","termino":"Deidad","explicacion":"Naturaleza o condición divina.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-demonio","termino":"Demonio","explicacion":"Ser espiritual maligno que se opone a Dios y busca dañar o engañar.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-denario","termino":"Denario","explicacion":"Moneda romana equivalente aproximadamente al jornal de un trabajador por un día.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-desposada","termino":"Desposada","explicacion":"Mujer comprometida formalmente en matrimonio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-desposorio","termino":"Desposorio","explicacion":"Compromiso matrimonial con fuerza legal antes de la convivencia.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-deuterocanonico","termino":"Deuterocanónico","explicacion":"Libro del Antiguo Testamento recibido como canónico por algunas Iglesias y colocado aparte o no incluido por otras.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-devocion","termino":"Devoción","explicacion":"Entrega constante y afectuosa a Dios.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-diablo","termino":"Diablo","explicacion":"Calumniador o acusador; título del principal enemigo espiritual.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-diezmo","termino":"Diezmo","explicacion":"Décima parte de los bienes o cosechas entregada para el culto y sostenimiento de los levitas.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-discernimiento","termino":"Discernimiento","explicacion":"Capacidad de distinguir entre lo verdadero y lo falso, lo bueno y lo malo.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-discipulo","termino":"Discípulo","explicacion":"Aprendiz y seguidor de un maestro; en el Nuevo Testamento, seguidor de Cristo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-disension","termino":"Disensión","explicacion":"Desacuerdo que produce división o enfrentamiento.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-disolucion","termino":"Disolución","explicacion":"Vida desordenada, entregada a excesos y sin dominio propio.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-divinidad","termino":"Divinidad","explicacion":"Naturaleza propia de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-diacono","termino":"Diácono","explicacion":"Servidor designado para ayudar en las necesidades prácticas y espirituales de la comunidad.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-diaspora","termino":"Diáspora","explicacion":"Dispersión de los judíos fuera de la tierra de Israel.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-dones-espirituales","termino":"Dones espirituales","explicacion":"Capacidades concedidas por el Espíritu Santo para servir y edificar a la Iglesia.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-doxologia","termino":"Doxología","explicacion":"Fórmula breve de alabanza que glorifica a Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-dracma","termino":"Dracma","explicacion":"Moneda griega de valor parecido al denario.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-dragon","termino":"Dragón","explicacion":"Símbolo de Satanás en Apocalipsis.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-dia-del-senor","termino":"Día del Señor","explicacion":"Tiempo de intervención decisiva de Dios en juicio y salvación.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-echar-suertes","termino":"Echar suertes","explicacion":"Método antiguo para tomar una decisión o asignar responsabilidades, confiando el resultado a Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-edificar","termino":"Edificar","explicacion":"Fortalecer espiritualmente a una persona o comunidad.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-efa","termino":"Efa","explicacion":"Medida hebrea de capacidad para productos secos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-efod","termino":"Efod","explicacion":"Vestidura especial del sumo sacerdote, asociada a su servicio y a la consulta de Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-ekklesia","termino":"Ekklesía","explicacion":"Palabra griega traducida «iglesia» o «asamblea».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-eleccion","termino":"Elección","explicacion":"Decisión soberana de Dios de llamar y escoger para sus propósitos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-emmanuel","termino":"Emmanuel","explicacion":"Nombre profético que significa «Dios con nosotros».","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-encarnacion","termino":"Encarnación","explicacion":"Misterio por el que el Hijo eterno de Dios tomó verdadera naturaleza humana en Cristo Jesús.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-endurecimiento","termino":"Endurecimiento","explicacion":"Resistencia interior persistente a escuchar, creer u obedecer a Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-envidia","termino":"Envidia","explicacion":"Tristeza o resentimiento por el bien ajeno y deseo de poseerlo.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-epistola","termino":"Epístola","explicacion":"Carta escrita, especialmente las cartas del Nuevo Testamento.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-era","termino":"Era","explicacion":"Superficie donde se trillaba y aventaba el grano.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-escabel","termino":"Escabel","explicacion":"Banquillo para apoyar los pies; imagen de dominio y autoridad.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-escarnecedor","termino":"Escarnecedor","explicacion":"Persona que se burla con desprecio de Dios, de la verdad o de quienes procuran hacer el bien.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-escatologia","termino":"Escatología","explicacion":"Estudio de las últimas cosas: muerte, resurrección, juicio y destino final.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-esclavo","termino":"Esclavo","explicacion":"Persona propiedad de otra según las sociedades antiguas; la Biblia también usa la imagen para hablar de esclavitud al pecado o servicio a Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-escriba","termino":"Escriba","explicacion":"Experto en copiar, estudiar e interpretar la Ley.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-escudo-de-la-fe","termino":"Escudo de la fe","explicacion":"Imagen de la confianza en Dios que apaga los ataques espirituales.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-espada-de-dos-filos","termino":"Espada de dos filos","explicacion":"Espada cortante por ambos lados; imagen de la palabra de Dios que penetra y discierne.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-esperanza","termino":"Esperanza","explicacion":"Confianza segura en el cumplimiento futuro de las promesas de Dios.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-esposa-del-cordero","termino":"Esposa del Cordero","explicacion":"Imagen de la Iglesia unida a Cristo con fidelidad y amor.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-estadio","termino":"Estadio","explicacion":"Medida antigua de distancia de unos ciento ochenta metros, con variaciones según la época.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-estatuto","termino":"Estatuto","explicacion":"Norma establecida para orientar la vida y el culto del pueblo.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-estirpe","termino":"Estirpe","explicacion":"Linaje o descendencia familiar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-eucaristia","termino":"Eucaristía","explicacion":"Nombre cristiano de la Cena del Señor, centrada en el pan y el vino en memoria y comunión con Cristo.","categoria":"Oración y culto","builtin":true},{"id":"builtin-eunuco","termino":"Eunuco","explicacion":"Hombre castrado o alto funcionario de palacio; el término puede usarse en ambos sentidos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-evangelio","termino":"Evangelio","explicacion":"Buena noticia de la salvación y del Reino de Dios por medio de Cristo Jesús.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-evangelista","termino":"Evangelista","explicacion":"Persona que anuncia el evangelio; también título tradicional de los autores de los cuatro Evangelios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-exhortar","termino":"Exhortar","explicacion":"Animar, aconsejar o llamar con firmeza a hacer lo correcto.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-expiacion","termino":"Expiación","explicacion":"Acción por la que se quita o cubre la culpa del pecado para restaurar la comunión con Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-expiacion-dia-de-la","termino":"Expiación, Día de la","explicacion":"Día anual en que el sumo sacerdote realizaba ritos por los pecados del pueblo.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-falso-profeta","termino":"Falso profeta","explicacion":"Figura que engaña y apoya al poder contrario a Dios en Apocalipsis.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-fariseo","termino":"Fariseo","explicacion":"Miembro de un grupo judío muy dedicado a la Ley y a las tradiciones, criticado por Jesús cuando caía en hipocresía.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-fatuo","termino":"Fatuo","explicacion":"Necio, presumido o falto de juicio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-fe","termino":"Fe","explicacion":"Confianza firme en Dios, en su palabra y en Cristo Jesús.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-fidelidad","termino":"Fidelidad","explicacion":"Lealtad constante y cumplimiento de la palabra dada.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-filacteria","termino":"Filacteria","explicacion":"Pequeña caja con textos de la Ley llevada por algunos judíos en la frente o el brazo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-flagelacion","termino":"Flagelación","explicacion":"Castigo mediante azotes, a menudo severo y previo a una ejecución.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-flecos","termino":"Flecos","explicacion":"Cordones en los bordes de los vestidos israelitas para recordar los mandamientos de Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-flujo","termino":"Flujo","explicacion":"Descarga corporal que en la Ley podía producir impureza ritual.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-forastero","termino":"Forastero","explicacion":"Persona que reside temporalmente en tierra ajena.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-fornicacion","termino":"Fornicación","explicacion":"Relaciones sexuales fuera del matrimonio; en sentido figurado, también puede expresar infidelidad espiritual a Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-fruto-del-espiritu","termino":"Fruto del Espíritu","explicacion":"Cualidades producidas por el Espíritu Santo: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-gehena","termino":"Gehena","explicacion":"Imagen del castigo final, derivada del valle de Hinom junto a Jerusalén.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-genealogia","termino":"Genealogía","explicacion":"Lista ordenada de antepasados y descendientes.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-gentil","termino":"Gentil","explicacion":"Persona no judía, perteneciente a las demás naciones.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-getsemani","termino":"Getsemaní","explicacion":"Huerto cerca del monte de los Olivos donde Jesús oró antes de ser arrestado.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-gloria","termino":"Gloria","explicacion":"Manifestación del honor, majestad, belleza y presencia de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-glorificacion","termino":"Glorificación","explicacion":"Transformación final de los creyentes para compartir la vida incorruptible de Cristo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-glorificar","termino":"Glorificar","explicacion":"Reconocer, mostrar y proclamar la grandeza y el honor de Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-gomer","termino":"Gomer","explicacion":"Medida pequeña de capacidad, equivalente a la décima parte de un efa.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-gozo","termino":"Gozo","explicacion":"Alegría profunda que nace de Dios y no depende solamente de las circunstancias.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-gracia","termino":"Gracia","explicacion":"Favor inmerecido de Dios que perdona, salva, fortalece y transforma.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-golgota","termino":"Gólgota","explicacion":"Lugar de la crucifixión de Jesús; significa «lugar de la Calavera».","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-hades","termino":"Hades","explicacion":"Término griego para el lugar o estado de los muertos, usado de forma semejante a Sheol.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-hebreo","termino":"Hebreo","explicacion":"Nombre antiguo de Abraham y sus descendientes; puede destacar su origen étnico o lingüístico.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-herencia","termino":"Herencia","explicacion":"Bien recibido por pertenencia familiar; espiritualmente, promesas y vida eterna dadas a los hijos de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-herodiano","termino":"Herodiano","explicacion":"Partidario político de la dinastía de Herodes.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-hijo-de-dios","termino":"Hijo de Dios","explicacion":"Título que expresa la relación única y naturaleza divina de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-hijo-del-hombre","termino":"Hijo del Hombre","explicacion":"Título usado por Jesús que expresa su humanidad, autoridad mesiánica y gloria futura.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-hin","termino":"Hin","explicacion":"Medida hebrea para líquidos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-hipocresia","termino":"Hipocresía","explicacion":"Aparentar una virtud o fe que no corresponde con la conducta interior.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-hisopo","termino":"Hisopo","explicacion":"Planta usada para rociar líquidos en ceremonias de purificación.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-holgar","termino":"Holgar","explicacion":"Descansar o dejar de trabajar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-hollar","termino":"Hollar","explicacion":"Pisar, aplastar o tratar con desprecio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-holocausto","termino":"Holocausto","explicacion":"Sacrificio en el que la víctima era quemada completamente sobre el altar.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-homer","termino":"Homer","explicacion":"Gran medida hebrea para productos secos, distinta de gomer.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-hora-novena","termino":"Hora novena","explicacion":"Aproximadamente las tres de la tarde.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-hora-sexta","termino":"Hora sexta","explicacion":"Aproximadamente el mediodía, contando desde las seis de la mañana.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-hosanna","termino":"Hosanna","explicacion":"Expresión hebrea que significa «sálvanos ahora» y llegó a usarse como aclamación de alabanza.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-huestes","termino":"Huestes","explicacion":"Ejércitos o grandes multitudes; «Jah de los ejércitos» expresa el dominio de Dios sobre las huestes celestiales.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-humildad","termino":"Humildad","explicacion":"Reconocer la dependencia de Dios y valorar a los demás sin exaltarse.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-huerfano","termino":"Huérfano","explicacion":"Niño que ha perdido a sus padres o carece de protección familiar.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-idolatria","termino":"Idolatría","explicacion":"Dar a una criatura, objeto, poder o deseo el lugar y la adoración que corresponden solamente a Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-iglesia","termino":"Iglesia","explicacion":"Asamblea o comunidad de quienes pertenecen a Cristo; no se limita a un edificio.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-ignominia","termino":"Ignominia","explicacion":"Deshonra pública muy grave.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-impiedad","termino":"Impiedad","explicacion":"Falta de reverencia hacia Dios y manera de vivir contraria a Él.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-implorar","termino":"Implorar","explicacion":"Rogar con gran humildad y necesidad.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-imposicion-de-manos","termino":"Imposición de manos","explicacion":"Gesto de bendición, oración, sanidad, envío o reconocimiento de un ministerio.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-incienso","termino":"Incienso","explicacion":"Sustancia aromática quemada en el culto; simboliza también las oraciones que suben a Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-incircuncision","termino":"Incircuncisión","explicacion":"Estado de no estar circuncidado; a menudo designa a los gentiles.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-infierno","termino":"Infierno","explicacion":"Término general usado para el castigo y separación definitiva de Dios; distintas palabras bíblicas pueden traducirse así.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-iniquidad","termino":"Iniquidad","explicacion":"Maldad, injusticia o conducta torcida que se opone a la voluntad de Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-inmundicia","termino":"Inmundicia","explicacion":"Estado de impureza ritual o moral.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-insensato","termino":"Insensato","explicacion":"Persona que actúa sin sabiduría y no considera las consecuencias espirituales de sus actos.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-inspiracion","termino":"Inspiración","explicacion":"Obra de Dios por la que las Escrituras fueron comunicadas mediante autores humanos.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-integridad","termino":"Integridad","explicacion":"Coherencia entre lo que se cree, se dice y se hace.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-inteligencia","termino":"Inteligencia","explicacion":"Facultad de comprender; bíblicamente incluye entender el camino de Dios.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-interceder","termino":"Interceder","explicacion":"Orar o actuar a favor de otra persona ante Dios.","categoria":"Oración y culto","builtin":true},{"id":"builtin-intercesor","termino":"Intercesor","explicacion":"Quien ruega a favor de otra persona.","categoria":"Oración y culto","builtin":true},{"id":"builtin-israel","termino":"Israel","explicacion":"Nombre dado a Jacob y, después, al pueblo descendiente de él.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-israelita","termino":"Israelita","explicacion":"Miembro del pueblo de Israel.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-jactancia","termino":"Jactancia","explicacion":"Orgullo expresado al presumir de logros o cualidades.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-jubileo","termino":"Jubileo","explicacion":"Año especial celebrado cada cincuenta años, con liberación de esclavos, devolución de tierras y descanso de la tierra.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-judio","termino":"Judío","explicacion":"Persona perteneciente al pueblo de Judá o, de modo general, al pueblo de Israel.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-juicio-final","termino":"Juicio final","explicacion":"Juicio definitivo de Dios sobre toda la humanidad.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-justificacion","termino":"Justificación","explicacion":"Acto por el que Dios declara justo al creyente por la fe en Cristo, no por méritos propios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-koinonia","termino":"Koinonía","explicacion":"Palabra griega que significa comunión, participación y vida compartida.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-lagar","termino":"Lagar","explicacion":"Lugar donde se pisaban o prensaban uvas para obtener vino; también imagen de juicio.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-lago-de-fuego","termino":"Lago de fuego","explicacion":"Imagen apocalíptica del castigo final del mal, la muerte y quienes rechazan a Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-lascivia","termino":"Lascivia","explicacion":"Conducta o deseo sexual desenfrenado y sin respeto por la pureza.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-lavamiento-de-pies","termino":"Lavamiento de pies","explicacion":"Acto de hospitalidad y humildad que Jesús usó como ejemplo de servicio.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-legion","termino":"Legión","explicacion":"Gran unidad del ejército romano; en un relato se usa para indicar una multitud de demonios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-lepra","termino":"Lepra","explicacion":"Nombre bíblico amplio para diversas enfermedades de la piel y, a veces, contaminaciones en objetos o casas.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-lepta","termino":"Lepta","explicacion":"Moneda griega mínima, equivalente a la «blanca» de la viuda.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-levadura","termino":"Levadura","explicacion":"Sustancia que fermenta la masa; simbólicamente puede representar influencia, corrupción o expansión del Reino según el contexto.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-levita","termino":"Levita","explicacion":"Miembro de la tribu de Leví encargado de diversas tareas del culto y del templo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-ley","termino":"Ley","explicacion":"Enseñanza y mandamientos dados por Dios, especialmente por medio de Moisés.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-libacion","termino":"Libación","explicacion":"Ofrenda líquida, normalmente de vino, derramada delante de Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-libertinaje","termino":"Libertinaje","explicacion":"Uso de la libertad como excusa para vivir sin límites morales.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-libro-de-la-vida","termino":"Libro de la vida","explicacion":"Imagen del registro divino de quienes pertenecen a Dios y reciben vida eterna.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-lisonja","termino":"Lisonja","explicacion":"Alabanza exagerada o falsa usada para agradar o manipular.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-log","termino":"Log","explicacion":"Pequeña medida hebrea para líquidos.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-logos","termino":"Logos","explicacion":"Palabra griega traducida «Verbo» o «Palabra», aplicada a Cristo en Juan 1.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-lomos","termino":"Lomos","explicacion":"Parte baja de la espalda o cintura; «ceñir los lomos» significa prepararse para actuar.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-longanimidad","termino":"Longanimidad","explicacion":"Paciencia perseverante ante ofensas, dificultades o espera prolongada.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-lugar-santisimo","termino":"Lugar Santísimo","explicacion":"Parte más sagrada del tabernáculo y del templo, donde estaba el arca del pacto.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-luna-nueva","termino":"Luna nueva","explicacion":"Comienzo de un mes lunar, señalado con celebraciones y ofrendas especiales.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-luz-del-mundo","termino":"Luz del mundo","explicacion":"Título de Cristo como revelación, verdad y guía que vence las tinieblas.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-maldicion","termino":"Maldición","explicacion":"Declaración de juicio o desgracia; se opone a la bendición.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-mamon","termino":"Mamón","explicacion":"Palabra aramea para riqueza o dinero personificado como un señor rival de Dios.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-mandamiento","termino":"Mandamiento","explicacion":"Orden expresa dada por Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-mansedumbre","termino":"Mansedumbre","explicacion":"Fuerza bajo control, expresada con humildad y suavidad.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-maranata","termino":"Maranata","explicacion":"Expresión aramea que significa «Señor nuestro, ven» o «nuestro Señor viene».","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-martirio","termino":"Martirio","explicacion":"Muerte sufrida por dar testimonio fiel de la fe.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-mayordomo","termino":"Mayordomo","explicacion":"Administrador responsable de los bienes de otra persona.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-mediador","termino":"Mediador","explicacion":"Persona que interviene para reconciliar dos partes; Cristo es mediador entre Dios y los seres humanos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-menora","termino":"Menorá","explicacion":"Candelabro de siete brazos usado en el tabernáculo y el templo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-mesias","termino":"Mesías","explicacion":"El Ungido prometido por Dios; en griego, Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-mies","termino":"Mies","explicacion":"Cereal maduro listo para cosechar; Jesús lo usa como imagen de personas preparadas para recibir el evangelio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-milenio","termino":"Milenio","explicacion":"Periodo de mil años mencionado en Apocalipsis 20 relacionado con el reinado de Cristo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-mina","termino":"Mina","explicacion":"Unidad de dinero y peso menor que un talento.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-mirra","termino":"Mirra","explicacion":"Resina aromática usada como perfume, medicina y preparación funeraria.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-misericordia","termino":"Misericordia","explicacion":"Compasión activa de Dios hacia quien sufre o necesita perdón.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-mitra","termino":"Mitra","explicacion":"Tocado usado por el sumo sacerdote.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-moriah","termino":"Moriah","explicacion":"Región asociada al sacrificio de Isaac y al lugar del templo de Jerusalén.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-muerte-segunda","termino":"Muerte segunda","explicacion":"Condenación definitiva descrita en Apocalipsis como el lago de fuego.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-murmuracion","termino":"Murmuración","explicacion":"Hablar a escondidas contra alguien, quejarse o difamar de manera dañina.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-nardo","termino":"Nardo","explicacion":"Perfume muy costoso obtenido de una planta aromática.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-nazareo","termino":"Nazareo","explicacion":"Persona consagrada a Dios mediante un voto especial que incluía abstenerse de vino, no cortarse el cabello y evitar contacto con muertos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-necedad","termino":"Necedad","explicacion":"Falta de sabiduría moral; en la Biblia suele describir a quien desprecia a Dios y la corrección.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-neguev","termino":"Neguev","explicacion":"Región árida al sur de la tierra de Israel.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-nueva-jerusalen","termino":"Nueva Jerusalén","explicacion":"Ciudad santa de la nueva creación donde Dios habita con su pueblo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-nuevo-cielo-y-nueva-tierra","termino":"Nuevo cielo y nueva tierra","explicacion":"Creación renovada donde habita la justicia y Dios vive con su pueblo.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-obediencia","termino":"Obediencia","explicacion":"Respuesta voluntaria de hacer lo que Dios manda.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-obispo","termino":"Obispo","explicacion":"Supervisor o cuidador espiritual de una iglesia.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-oblacion","termino":"Oblación","explicacion":"Ofrenda, especialmente de harina, aceite o alimentos.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-odre","termino":"Odre","explicacion":"Recipiente de piel usado para guardar líquidos, especialmente vino.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-odre-viejo","termino":"Odre viejo","explicacion":"Imagen de estructuras incapaces de contener la novedad del evangelio.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-ofrenda","termino":"Ofrenda","explicacion":"Don presentado a Dios como acto de adoración, gratitud o expiación.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-omnipotencia","termino":"Omnipotencia","explicacion":"Poder ilimitado de Dios para realizar todo lo conforme a su naturaleza y voluntad.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-omnipresencia","termino":"Omnipresencia","explicacion":"Presencia de Dios en todo lugar sin estar limitado por el espacio.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-omnisciencia","termino":"Omnisciencia","explicacion":"Conocimiento perfecto y completo de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-oprobio","termino":"Oprobio","explicacion":"Deshonra, vergüenza o desprecio público.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-ordenanza","termino":"Ordenanza","explicacion":"Regla o práctica mandada para ser observada.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-oraculo","termino":"Oráculo","explicacion":"Mensaje solemne pronunciado con autoridad divina, a menudo profético.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-pacto","termino":"Pacto","explicacion":"Compromiso solemne establecido por Dios con personas o con su pueblo.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-pan-de-vida","termino":"Pan de vida","explicacion":"Título de Cristo como alimento espiritual que da vida eterna.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-paraiso","termino":"Paraíso","explicacion":"Lugar de bendición y comunión con Dios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-pariente-redentor","termino":"Pariente redentor","explicacion":"Familiar cercano responsable de rescatar propiedades, proteger la familia o casarse con una viuda sin descendencia.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-parusia","termino":"Parusía","explicacion":"Palabra griega para la venida o presencia de Cristo, especialmente su regreso glorioso.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-parabola","termino":"Parábola","explicacion":"Relato o comparación que comunica una enseñanza espiritual mediante situaciones conocidas.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-paraclito","termino":"Paráclito","explicacion":"Palabra griega que significa ayudador, defensor o consolador, aplicada al Espíritu Santo y también a Cristo.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-pascua","termino":"Pascua","explicacion":"Fiesta que recuerda la liberación de Israel de Egipto; para los cristianos se relaciona con la muerte y resurrección de Cristo.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-pavesa","termino":"Pavesa","explicacion":"Partícula ligera que queda de algo quemado.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-paz","termino":"Paz","explicacion":"Bienestar y reconciliación que proceden de Dios; no es solo ausencia de conflicto.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-pectoral","termino":"Pectoral","explicacion":"Pieza del vestido sacerdotal con doce piedras que representaban a las tribus de Israel.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-pentateuco","termino":"Pentateuco","explicacion":"Los cinco primeros libros de la Biblia.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-pentecostes","termino":"Pentecostés","explicacion":"Fiesta celebrada cincuenta días después de la Pascua; en Hechos marca el derramamiento del Espíritu Santo sobre la Iglesia.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-perdon","termino":"Perdón","explicacion":"Cancelación de una culpa u ofensa, acompañada de la decisión de no reclamarla.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-peregrino","termino":"Peregrino","explicacion":"Persona que viaja o vive como extranjero; espiritualmente expresa que la patria definitiva está con Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-persecucion","termino":"Persecución","explicacion":"Hostigamiento o sufrimiento causado por la fe o por hacer lo correcto.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-pesebre","termino":"Pesebre","explicacion":"Comedero de animales donde fue acostado Jesús al nacer.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-piedad","termino":"Piedad","explicacion":"Reverencia hacia Dios que se refleja en una vida obediente y compasiva.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-piedra-angular","termino":"Piedra angular","explicacion":"Piedra principal que sostiene y alinea una construcción; imagen aplicada a Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-posesion-demoniaca","termino":"Posesión demoníaca","explicacion":"Dominio extraordinario de un espíritu maligno sobre una persona, descrito en algunos relatos bíblicos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-potestades","termino":"Potestades","explicacion":"Poderes o autoridades; según el contexto pueden ser humanas o espirituales.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-prebenda","termino":"Prebenda","explicacion":"Beneficio o sustento asignado a un cargo religioso; término de uso posterior, no habitual en el texto bíblico.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-precepto","termino":"Precepto","explicacion":"Instrucción concreta que enseña cómo actuar.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-predestinacion","termino":"Predestinación","explicacion":"Determinación previa de Dios respecto a su plan y al destino de quienes están en Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-pretoriano","termino":"Pretoriano","explicacion":"Relacionado con la guardia o residencia del gobernador o emperador romano.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-pretorio","termino":"Pretorio","explicacion":"Residencia oficial o cuartel del gobernador romano.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-prevaricacion","termino":"Prevaricación","explicacion":"Acción de apartarse deliberadamente de lo recto y actuar con infidelidad o injusticia.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-primicias","termino":"Primicias","explicacion":"Primeros frutos de una cosecha ofrecidos a Dios como reconocimiento de que todo procede de Él.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-primicias-de-los-muertos","termino":"Primicias de los muertos","explicacion":"Título de Cristo resucitado que garantiza la futura resurrección de los creyentes.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-primogenito","termino":"Primogénito","explicacion":"Primer hijo nacido; también título de dignidad, herencia y supremacía.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-principados","termino":"Principados","explicacion":"Autoridades o poderes de alto rango, a veces espirituales.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-proconsul","termino":"Procónsul","explicacion":"Gobernador romano de una provincia senatorial.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-profecia","termino":"Profecía","explicacion":"Mensaje inspirado por Dios que puede exhortar, revelar o anunciar acontecimientos.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-profeta","termino":"Profeta","explicacion":"Persona llamada por Dios para comunicar su mensaje.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-propiciacion","termino":"Propiciación","explicacion":"Sacrificio que satisface la justicia divina y abre el camino a la reconciliación con Dios; en el Nuevo Testamento se aplica a la obra de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-propiciatorio","termino":"Propiciatorio","explicacion":"Cubierta de oro del arca del pacto donde se rociaba sangre en el Día de la Expiación.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-proselito","termino":"Prosélito","explicacion":"Persona de origen gentil que se convertía al judaísmo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-proverbio","termino":"Proverbio","explicacion":"Dicho breve que expresa una verdad práctica o moral.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-providencia","termino":"Providencia","explicacion":"Cuidado y gobierno continuo de Dios sobre su creación y la historia.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-prudencia","termino":"Prudencia","explicacion":"Capacidad de actuar con sabiduría, previsión y buen juicio.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-prueba","termino":"Prueba","explicacion":"Situación que revela, fortalece o examina la fe y el carácter.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-publicano","termino":"Publicano","explicacion":"Recaudador de impuestos para Roma, generalmente despreciado por los judíos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-puerta","termino":"Puerta","explicacion":"Imagen de Cristo como único acceso a la salvación y al rebaño de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-purificacion","termino":"Purificación","explicacion":"Proceso ritual o espiritual de limpieza de impureza o pecado.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-purim","termino":"Purim","explicacion":"Fiesta judía que recuerda la liberación narrada en el libro de Ester.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-pabilo","termino":"Pábilo","explicacion":"Mecha de una lámpara o vela.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-pampano","termino":"Pámpano","explicacion":"Rama tierna de la vid; imagen del discípulo unido a Cristo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-portico","termino":"Pórtico","explicacion":"Galería cubierta sostenida por columnas.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-querubin","termino":"Querubín","explicacion":"Ser celestial asociado a la presencia, santidad y trono de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-raboni","termino":"Raboni","explicacion":"Forma solemne y afectuosa de «maestro mío».","categoria":"Personas y grupos","builtin":true},{"id":"builtin-rabi","termino":"Rabí","explicacion":"Título hebreo que significa «maestro».","categoria":"Personas y grupos","builtin":true},{"id":"builtin-rasgar-vestidos","termino":"Rasgar vestidos","explicacion":"Gesto antiguo de duelo, horror o indignación.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-reconciliacion","termino":"Reconciliación","explicacion":"Restauración de la relación entre Dios y el ser humano, y también entre personas enemistadas.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-redarguir","termino":"Redargüir","explicacion":"Convencer a alguien de su error mediante una corrección clara.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-redencion","termino":"Redención","explicacion":"Liberación obtenida mediante el pago de un precio; Cristo nos libera del pecado por su sacrificio.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-redentor","termino":"Redentor","explicacion":"Persona que rescata pagando un precio; Cristo es el Redentor definitivo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-regeneracion","termino":"Regeneración","explicacion":"Nueva vida espiritual producida por el Espíritu Santo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reino-de-dios","termino":"Reino de Dios","explicacion":"Gobierno soberano y salvador de Dios, presente en Cristo y consumado en el futuro.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reino-de-los-cielos","termino":"Reino de los cielos","explicacion":"Expresión usada especialmente en Mateo con sentido semejante a Reino de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-remanente","termino":"Remanente","explicacion":"Grupo que permanece fiel a Dios después de juicio, crisis o apostasía general.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reprender","termino":"Reprender","explicacion":"Señalar y corregir una falta de manera directa.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-reprobado","termino":"Reprobado","explicacion":"Desaprobado por no superar una prueba moral o espiritual.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-resurreccion","termino":"Resurrección","explicacion":"Acción de volver corporalmente a la vida; Cristo resucitó y los muertos resucitarán.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-revelacion","termino":"Revelación","explicacion":"Acción por la que Dios da a conocer quién es y cuál es su voluntad.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-roca","termino":"Roca","explicacion":"Símbolo de firmeza, refugio y fidelidad; se aplica a Dios y a Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-reprobo","termino":"Réprobo","explicacion":"Persona rechazada o desaprobada por su conducta persistente.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-sabbath","termino":"Sabbath","explicacion":"Forma hebrea de «sábado», relacionada con cesar o descansar.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-sabiduria","termino":"Sabiduría","explicacion":"Capacidad dada por Dios para comprender y aplicar correctamente la verdad.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-sacerdote","termino":"Sacerdote","explicacion":"Persona consagrada para servir en el culto, presentar sacrificios y enseñar la Ley.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-sacrificio","termino":"Sacrificio","explicacion":"Ofrenda presentada a Dios; en el Nuevo Testamento, Cristo es el sacrificio perfecto por el pecado.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-saduceo","termino":"Saduceo","explicacion":"Miembro de una élite sacerdotal judía que no aceptaba la resurrección ni ciertas doctrinas sostenidas por los fariseos.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-saeta","termino":"Saeta","explicacion":"Flecha; figuradamente puede representar ataques, palabras hirientes o juicio.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-salmo","termino":"Salmo","explicacion":"Canto o poema de oración, alabanza, lamento o sabiduría.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-salvacion","termino":"Salvación","explicacion":"Rescate del pecado, de la condenación y de la muerte, concedido por Dios en Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-samaritano","termino":"Samaritano","explicacion":"Habitante de Samaria; judíos y samaritanos mantenían una fuerte separación religiosa y social.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-sanedrin","termino":"Sanedrín","explicacion":"Consejo supremo judío de autoridad religiosa y judicial en tiempos del Nuevo Testamento.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-santa-cena","termino":"Santa Cena","explicacion":"Comida instituida por Jesús con pan y vino para recordar y participar de su sacrificio.","categoria":"Oración y culto","builtin":true},{"id":"builtin-santidad","termino":"Santidad","explicacion":"Condición de estar apartado para Dios y vivir conforme a su pureza.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-santificacion","termino":"Santificación","explicacion":"Proceso por el que Dios aparta y transforma al creyente para vivir en santidad.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-santuario","termino":"Santuario","explicacion":"Lugar santo dedicado a la presencia y al culto de Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-sarmiento","termino":"Sarmiento","explicacion":"Rama de la vid.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-satanas","termino":"Satanás","explicacion":"Adversario y acusador, enemigo espiritual de Dios y de su pueblo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-sefela","termino":"Sefela","explicacion":"Región de colinas bajas entre la costa y las montañas de Judá.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-segunda-venida","termino":"Segunda venida","explicacion":"Regreso futuro y visible de Cristo en gloria.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-selah","termino":"Selah","explicacion":"Término de los Salmos cuyo significado exacto es incierto; probablemente indica una pausa musical o de reflexión.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-sello","termino":"Sello","explicacion":"Marca de autenticidad, propiedad o protección; en Apocalipsis también forma parte de los juicios revelados.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-sello-del-espiritu","termino":"Sello del Espíritu","explicacion":"Marca espiritual de pertenencia y garantía de la obra salvadora de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-seno-de-abraham","termino":"Seno de Abraham","explicacion":"Imagen usada por Jesús para describir el descanso de los justos después de la muerte.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-serafin","termino":"Serafín","explicacion":"Ser celestial descrito en Isaías 6 que proclama la santidad de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-shekina","termino":"Shekiná","explicacion":"Término judío posterior usado para hablar de la presencia gloriosa de Dios entre su pueblo.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-sheol","termino":"Sheol","explicacion":"Término hebreo para el lugar o estado de los muertos.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-siclo","termino":"Siclo","explicacion":"Unidad hebrea de peso y moneda.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-siervo","termino":"Siervo","explicacion":"Persona al servicio de otra; también título de humildad y entrega a Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-siervo-sufriente","termino":"Siervo sufriente","explicacion":"Figura profética de Isaías que sufre por los pecados de otros y se cumple plenamente en Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-simiente","termino":"Simiente","explicacion":"Semilla o descendencia; puede referirse proféticamente a la descendencia prometida.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-simple","termino":"Simple","explicacion":"En Proverbios, persona inexperta y fácilmente influenciable, todavía abierta a aprender.","categoria":"Sabiduría y vida","builtin":true},{"id":"builtin-sinagoga","termino":"Sinagoga","explicacion":"Lugar de reunión judío para oración, lectura y enseñanza de las Escrituras.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-sinopticos","termino":"Sinópticos","explicacion":"Mateo, Marcos y Lucas, llamados así porque presentan una visión paralela de la vida de Jesús.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-sion","termino":"Sion","explicacion":"Colina de Jerusalén y, por extensión, símbolo de la ciudad santa y del pueblo de Dios.","categoria":"Lugares y geografía","builtin":true},{"id":"builtin-soberania","termino":"Soberanía","explicacion":"Autoridad suprema de Dios sobre todo lo creado.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-soberbia","termino":"Soberbia","explicacion":"Orgullo que lleva a una persona a exaltarse a sí misma y a despreciar a Dios o a los demás.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-solaz","termino":"Solaz","explicacion":"Descanso, alivio o consuelo.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-sueno","termino":"Sueño","explicacion":"Medio por el que Dios comunicó mensajes en algunos relatos bíblicos.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-sumo-sacerdote","termino":"Sumo sacerdote","explicacion":"Principal sacerdote de Israel, único autorizado para entrar una vez al año en el Lugar Santísimo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-suplicar","termino":"Suplicar","explicacion":"Pedir algo con humildad, insistencia y profundo deseo.","categoria":"Oración y culto","builtin":true},{"id":"builtin-sabado","termino":"Sábado","explicacion":"Séptimo día, apartado por Dios para descanso y culto.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-tabernaculo","termino":"Tabernáculo","explicacion":"Santuario portátil usado por Israel en el desierto como lugar de la presencia y el culto a Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-tabernaculos","termino":"Tabernáculos","explicacion":"Fiesta judía que recuerda la vida de Israel en tiendas durante el desierto y celebra la provisión de Dios.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-talento","termino":"Talento","explicacion":"Gran unidad de peso y dinero; su valor era muy elevado.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-talit","termino":"Talit","explicacion":"Manto judío de oración con flecos; el término no aparece como tal en todas las traducciones.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-talon","termino":"Talón","explicacion":"Parte posterior del pie; en Génesis 3 aparece en la imagen profética de la lucha contra la serpiente.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-templanza","termino":"Templanza","explicacion":"Dominio propio sobre deseos, impulsos y acciones.","categoria":"Vida cristiana","builtin":true},{"id":"builtin-templo","termino":"Templo","explicacion":"Edificio consagrado al culto de Dios en Jerusalén; también se usa espiritualmente para el cuerpo o la comunidad creyente.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-tentacion","termino":"Tentación","explicacion":"Atracción o prueba que busca llevar al pecado; Dios puede permitir pruebas, pero no induce a hacer el mal.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-testamento","termino":"Testamento","explicacion":"En sentido bíblico puede significar pacto; también designa las dos grandes partes de la Biblia.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-testigo","termino":"Testigo","explicacion":"Persona que declara lo que ha visto o conocido; «mártir» procede de la palabra griega para testigo.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-tetrarca","termino":"Tetrarca","explicacion":"Gobernante de una parte de un territorio.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-tetrarquia","termino":"Tetrarquía","explicacion":"Territorio gobernado por un tetrarca, originalmente una cuarta parte de un reino.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-tipo","termino":"Tipo","explicacion":"Persona, objeto o acontecimiento que anticipa simbólicamente una realidad futura.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-tipologia","termino":"Tipología","explicacion":"Lectura que reconoce en personas, objetos o acontecimientos antiguos figuras que anticipan realidades posteriores, especialmente a Cristo.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-tizon","termino":"Tizón","explicacion":"Trozo de madera parcialmente quemado; «tizón arrebatado del incendio» describe a alguien rescatado.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-tora","termino":"Torá","explicacion":"Palabra hebrea que significa instrucción o ley; se usa especialmente para los cinco libros de Moisés.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-transgresion","termino":"Transgresión","explicacion":"Desobediencia consciente de un mandato o límite establecido por Dios.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-tribulacion","termino":"Tribulación","explicacion":"Tiempo de aflicción, prueba o persecución; en profecía puede referirse a una etapa de sufrimiento intenso.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-tribuno","termino":"Tribuno","explicacion":"Oficial romano de alto rango, normalmente al mando de una cohorte.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-trillar","termino":"Trillar","explicacion":"Separar el grano de la paja golpeándolo o pasándolo bajo instrumentos.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-trinidad","termino":"Trinidad","explicacion":"Un solo Dios que existe eternamente como Padre, Hijo y Espíritu Santo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-trompeta","termino":"Trompeta","explicacion":"Instrumento usado para convocar y anunciar; en Apocalipsis introduce una serie de juicios.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-trompetas-fiesta-de","termino":"Trompetas, Fiesta de","explicacion":"Celebración marcada por el sonido de trompetas al inicio del séptimo mes.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-tutor","termino":"Tutor","explicacion":"Persona encargada del cuidado y formación de un menor o heredero.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-talamo","termino":"Tálamo","explicacion":"Habitación matrimonial o lecho nupcial.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-tartaro","termino":"Tártaro","explicacion":"Término usado en 2 Pedro para el lugar de custodia de ángeles que pecaron.","categoria":"Profecía y vida futura","builtin":true},{"id":"builtin-uncion","termino":"Unción","explicacion":"Consagración y capacitación de Dios; puede referirse al aceite o a la obra del Espíritu Santo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-ungir","termino":"Ungir","explicacion":"Aplicar aceite como señal de consagración, elección o sanidad.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-unguento","termino":"Ungüento","explicacion":"Preparación aromática o medicinal aplicada sobre el cuerpo.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-urim-y-tumim","termino":"Urim y Tumim","explicacion":"Objetos sacerdotales usados para consultar la voluntad de Dios; su forma exacta es desconocida.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-vanagloria","termino":"Vanagloria","explicacion":"Orgullo por los propios logros acompañado del deseo de recibir admiración.","categoria":"Pecado y conducta","builtin":true},{"id":"builtin-velo","termino":"Velo","explicacion":"Cortina que separaba el Lugar Santo del Lugar Santísimo; su rasgadura al morir Cristo simbolizó acceso a Dios.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-verbo","termino":"Verbo","explicacion":"Título de Cristo en Juan 1: la Palabra eterna de Dios hecha carne.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-vid-verdadera","termino":"Vid verdadera","explicacion":"Imagen de Cristo como fuente de vida y fruto para sus discípulos.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-vida-eterna","termino":"Vida eterna","explicacion":"Vida plena y sin fin en comunión con Dios, recibida por medio de Cristo.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-vidente","termino":"Vidente","explicacion":"Antiguo nombre dado a quien recibía revelaciones proféticas de Dios.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-vigilia","termino":"Vigilia","explicacion":"Una de las divisiones de la noche; también tiempo dedicado a permanecer despierto en oración.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-vision","termino":"Visión","explicacion":"Revelación recibida mediante imágenes mostradas por Dios.","categoria":"Biblia y literatura","builtin":true},{"id":"builtin-vituperio","termino":"Vituperio","explicacion":"Insulto, reproche o deshonra grave.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-viuda","termino":"Viuda","explicacion":"Mujer cuyo esposo ha muerto; en la Biblia representa con frecuencia a quienes necesitan protección.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-voto","termino":"Voto","explicacion":"Promesa solemne hecha a Dios.","categoria":"Ley, pacto y culto","builtin":true},{"id":"builtin-yelmo","termino":"Yelmo","explicacion":"Casco de protección; en Efesios simboliza la salvación.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-yugo","termino":"Yugo","explicacion":"Pieza para unir animales de trabajo; simbólicamente expresa carga, servidumbre, enseñanza o unión.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-zarandear","termino":"Zarandear","explicacion":"Mover violentamente como el grano en un cedazo; figuradamente, someter a una prueba fuerte.","categoria":"Palabras antiguas","builtin":true},{"id":"builtin-zelote","termino":"Zelote","explicacion":"Miembro o simpatizante de un movimiento judío contrario al dominio romano.","categoria":"Personas y grupos","builtin":true},{"id":"builtin-zurron","termino":"Zurrón","explicacion":"Bolsa de cuero usada por pastores o viajeros.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-agape","termino":"Ágape","explicacion":"Palabra griega usada para el amor sacrificado, fiel y orientado al bien del otro.","categoria":"Palabras bíblicas","builtin":true},{"id":"builtin-aloe","termino":"Áloe","explicacion":"Sustancia aromática usada, entre otras cosas, en preparaciones funerarias.","categoria":"Objetos y costumbres","builtin":true},{"id":"builtin-angel","termino":"Ángel","explicacion":"Mensajero espiritual de Dios.","categoria":"Salvación y doctrina","builtin":true},{"id":"builtin-azimos","termino":"Ázimos","explicacion":"Panes sin levadura y fiesta asociada a la Pascua.","categoria":"Fiestas y tiempos","builtin":true},{"id":"builtin-obolo","termino":"Óbolo","explicacion":"Moneda griega pequeña.","categoria":"Monedas y medidas","builtin":true},{"id":"builtin-osculo-santo","termino":"Ósculo santo","explicacion":"Beso usado como saludo fraternal entre creyentes.","categoria":"Objetos y costumbres","builtin":true}];
const freshUrl=file=>`${DATA}${file}?v=${APP_VERSION}`;
const storedReadingPoints=JSON.parse(localStorage.getItem('readingPoints')||'[]');
const state={books:[],bookIndex:0,chapter:1,verses:[],titles:{},selected:new Set(),highlights:JSON.parse(localStorage.getItem('highlights')||'{}'),favorites:JSON.parse(localStorage.getItem('favorites')||'{}'),explanations:JSON.parse(localStorage.getItem('explanations')||'{}'),readingPoints:Array.isArray(storedReadingPoints)?storedReadingPoints.map((p,i)=>({...p,id:String(p.id||`${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`)})):[],importedTitles:JSON.parse(localStorage.getItem('importedTitles')||'{}'),externalBible:null,baseTitles:{},dictionaryBase:[],dictionaryCustom:JSON.parse(localStorage.getItem('dictionaryCustom')||'[]'),dictionaryEdits:JSON.parse(localStorage.getItem('dictionaryEdits')||'{}'),dictionaryDeleted:JSON.parse(localStorage.getItem('dictionaryDeleted')||'[]')};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reader=$('#reader'), selectionBar=$('#selectionBar');

function applyTheme(mode=localStorage.getItem('readerTheme')||'dark'){
  const light=mode==='light';
  document.body.classList.toggle('light-mode',light);
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
function openSearchDialog(){
  $('#searchDialog h2').textContent='Buscar en la Biblia';
  $('#searchDialog .search-row').style.display='flex';
  $('#searchResults').innerHTML='<p class="search-help">Busca palabras o una referencia, por ejemplo: Juan 3:16, 1 Corintios 6 o Romanos 8:28-30.</p>';
  $('#searchInput').value='';
  $('#searchDialog').showModal();
}

function save(){localStorage.setItem('highlights',JSON.stringify(state.highlights));localStorage.setItem('favorites',JSON.stringify(state.favorites));localStorage.setItem('explanations',JSON.stringify(state.explanations));localStorage.setItem('last',JSON.stringify({bookIndex:state.bookIndex,chapter:state.chapter}));localStorage.setItem('readingPoints',JSON.stringify(state.readingPoints));localStorage.setItem('importedTitles',JSON.stringify(state.importedTitles||{}));localStorage.setItem('dictionaryCustom',JSON.stringify(state.dictionaryCustom||[]));localStorage.setItem('dictionaryEdits',JSON.stringify(state.dictionaryEdits||{}));localStorage.setItem('dictionaryDeleted',JSON.stringify(state.dictionaryDeleted||[]));updateReadingPointUI();}
function key(v){return `${state.books[state.bookIndex].key}:${state.chapter}:${v}`}
function rangeKey(nums=[...state.selected]){return `${state.books[state.bookIndex].key}:${state.chapter}:${nums.sort((a,b)=>a-b).join(',')}`}
function displayBook(book){const map={mateo:'San Mateo',marcos:'San Marcos',lucas:'San Lucas',juan:'San Juan'};return map[book.key]||book.shortTitle}
function formatNums(nums){nums=[...new Set(nums)].sort((a,b)=>a-b);if(!nums.length)return'';let out=[],start=nums[0],prev=nums[0];for(let i=1;i<=nums.length;i++){const n=nums[i];if(n===prev+1){prev=n;continue}out.push(start===prev?`${start}`:`${start}-${prev}`);start=prev=n}return out.join(', ')}
function currentReference(nums=[...state.selected],upper=false){const b=displayBook(state.books[state.bookIndex]);const r=`${b} ${state.chapter}:${formatNums(nums)}`;return upper?r.toUpperCase():r}
async function init(){
  // Limpieza única de las cachés antiguas de esta aplicación. No afecta a localStorage.
  if('caches' in window){
    try{
      const cacheNames=await caches.keys();
      await Promise.all(cacheNames.filter(name=>name.startsWith('biblia-estudio-')&&name!=='biblia-estudio-v1.54.0').map(name=>caches.delete(name)));
    }catch(error){console.warn('No se pudieron limpiar las cachés antiguas',error)}
  }
  state.books=await fetch(freshUrl('index.json'),{cache:'no-store'}).then(r=>r.json());
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
  state.baseTitles=await fetch(freshUrl('titulos.json'),{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({}));
  await ensureAutomaticTitles();
  state.titles=mergeTitles(mergeTitles(state.baseTitles,state.externalBible?.titles||{}),state.importedTitles||{});
  const last=JSON.parse(localStorage.getItem('last')||'null');
  if(last){state.bookIndex=Math.min(Number(last.bookIndex)||0,state.books.length-1);state.chapter=Math.max(1,Number(last.chapter)||1)}
  await loadChapter();
  // Relee los guardados justo antes de pintar la portada. Esto evita que el punto de libro
  // aparezca vacío durante el primer arranque tras instalar una versión nueva.
  try{state.favorites=JSON.parse(localStorage.getItem('favorites')||'{}')||{}}catch(error){state.favorites={}}
  prepareBooksDrawer();
  updateReadingPointUI();
  showHome();
  updateReadingPointUI();
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
async function loadChapter(){state.selected.clear();const b=state.books[state.bookIndex];const data=await getBookChapters(b);state.verses=(data[state.chapter-1]||[]).map(limpiarTextoBiblico);render();save();}
function render(){const b=state.books[state.bookIndex];$('#bookTitle').textContent=displayBook(b);$('#chapterTitle').textContent=state.chapter;$('#chapterIndicator').textContent=`${displayBook(b)} ${state.chapter}`;const chapterTitles=(state.titles[b.key]?.[String(state.chapter)]||[]).reduce((m,x)=>((m[x.versiculo]||(m[x.versiculo]=[])).push(x.titulo),m),{});reader.innerHTML=`<div class="reader-book-title">${escapeHtml(displayBook(b).toUpperCase())}</div><div class="chapter-number">${state.chapter}</div>`+state.verses.map((t,i)=>{const n=i+1,k=key(n),h=state.highlights[k]?` highlight-${state.highlights[k]}`:'',saved=state.favorites[k]?' saved-verse':'';const headings=(chapterTitles[n]||[]).map(x=>`<h3 class="section-title">${escapeHtml(x)}</h3>`).join('');const exp=findExplanationForVerse(n),explained=exp?' explained-verse':'';return `${headings}<span class="verse${h}${saved}${explained}" data-v="${n}"><sup class="verse-number">${n}</sup>${formatBibleText(t)}</span> `}).join('');updateSelection();updateReadingPointUI();reader.scrollTop=0}
function limpiarTextoBiblico(texto){return String(texto??'').replace(/\r\n?/g,'\n').replace(/\\n/g,'\n').replace(/\/n/gi,'\n').replace(/\u002Fn/gi,'\n').replace(/\n{3,}/g,'\n\n').trim()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function formatBibleText(s){return escapeHtml(limpiarTextoBiblico(s)).replace(/\n/g,'<br>')}
function findExplanationForVerse(n){const prefix=`${state.books[state.bookIndex].key}:${state.chapter}:`;for(const [k,v] of Object.entries(state.explanations)){if(k.startsWith(prefix)){const nums=k.split(':')[2].split(',').map(Number);if(nums.includes(n))return{key:k,...v}}}return null}
function updateSelection(){
  $$('.verse').forEach(el=>el.classList.toggle('selected',state.selected.has(+el.dataset.v)));
  const favoriteBtn=document.querySelector('.action[data-action="favorite"]');
  const toggle=$('#actionsPanelToggle');
  const needsSelection=['highlight','favorite','explain','copy','clear'];
  const hasSelection=state.selected.size>0;

  // El panel lateral y su pestaña permanecen siempre disponibles.
  selectionBar.classList.remove('hidden');
  if(toggle)toggle.setAttribute('aria-expanded',selectionBar.classList.contains('open')?'true':'false');
  $('#selectionReference').textContent=hasSelection?currentReference():'Selecciona uno o varios versículos';

  for(const actionName of needsSelection){
    const btn=document.querySelector(`.action[data-action="${actionName}"]`);
    if(btn){
      btn.disabled=!hasSelection;
      btn.setAttribute('aria-disabled',hasSelection?'false':'true');
    }
  }

  if(hasSelection){
    const nums=[...state.selected];
    const allSaved=nums.every(n=>Boolean(state.favorites[key(n)]));
    if(favoriteBtn){
      const removeMode=allSaved;
      favoriteBtn.dataset.mode=removeMode?'remove':'save';
      favoriteBtn.textContent=removeMode?'QUITAR':'GUARDAR';
      favoriteBtn.setAttribute('aria-label',removeMode?'Quitar de guardados':'Guardar');
      favoriteBtn.title=removeMode?'Quitar de guardados':'Guardar';
    }
  }else if(favoriteBtn){
    favoriteBtn.dataset.mode='save';
    favoriteBtn.textContent='GUARDAR';
    favoriteBtn.setAttribute('aria-label','Guardar');
    favoriteBtn.title='Guardar';
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
reader.addEventListener('click',e=>{const marker=e.target.closest('.explain-marker');if(marker){openViewExplanation(marker.dataset.exp);return}const v=e.target.closest('.verse');if(!v)return;const n=+v.dataset.v;const wasSelected=state.selected.has(n);wasSelected?state.selected.delete(n):state.selected.add(n);updateSelection();if(!wasSelected){selectionBar.classList.add('open');actionsPanelToggle?.setAttribute('aria-expanded','true')}});
// El versículo abierto desde el selector permanece marcado hasta tocar fuera de él.
document.addEventListener('click',e=>{const target=document.querySelector('.verse.reading-target');if(target&&!e.target.closest('.verse.reading-target'))target.classList.remove('reading-target')},true);
$$('.action').forEach(b=>b.addEventListener('click',()=>action(b.dataset.action)));
async function action(a){
  if(a==='clear'){state.selected.clear();updateSelection()}
  if(a==='copy')copyVerses();
  if(a==='highlight')$('#highlightDialog').showModal();
  if(a==='favorite'){
    const nums=[...state.selected];
    const allSaved=nums.length>0&&nums.every(n=>Boolean(state.favorites[key(n)]));
    for(const n of nums){
      const k=key(n);
      if(allSaved)delete state.favorites[k];
      else state.favorites[k]={text:limpiarTextoBiblico(state.verses[n-1]),ref:`${displayBook(state.books[state.bookIndex])} ${state.chapter}:${n}`,savedAt:Date.now()};
    }
    save();
    state.selected.clear();
    render();
    updateSelection();
    toast(allSaved?'Guardado quitado':(nums.length===1?'Versículo guardado':'Versículos guardados'));
  }
  if(a==='explain')openEditExplanation(rangeKey(),currentReference())
  if(a==='dictionary')openDictionary()
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
function normalizeText(x){return x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim()}
function parseReference(raw){const q=normalizeText(raw).replace(/\./g,'');const m=q.match(/^(.+?)\s+(\d+)(?:\s*:\s*(\d+)(?:\s*-\s*(\d+))?)?$/);if(!m)return null;const bookName=m[1].trim();const aliases={salmo:'salmos',cantar:'cantares',apocalipsis:'apocalipsis',revelacion:'apocalipsis','san mateo':'mateo','san marcos':'marcos','san lucas':'lucas','san juan':'juan'};const wanted=aliases[bookName]||bookName;const bi=state.books.findIndex(b=>{const names=[b.key,b.shortTitle,b.title,b.abbr,displayBook(b)].map(normalizeText);return names.includes(wanted)||names.some(n=>n.replace(/^libro (de|del|de los) /,'')===wanted)});if(bi<0)return null;const c=+m[2],v=m[3]?+m[3]:null,endv=m[4]?+m[4]:v,b=state.books[bi];if(c<1||c>b.chapters)return null;return{bi,c,v,endv,ref:v?`${displayBook(b)} ${c}:${v}${endv>v?'-'+endv:''}`:`${displayBook(b)} ${c}`}}
async function openSearchResult(r){state.bookIndex=r.bi;state.chapter=r.c;$('#searchDialog').close();showReader();await loadChapter();if(r.v)setTimeout(()=>{for(let n=r.v;n<=Math.min(r.endv||r.v,state.verses.length);n++)state.selected.add(n);updateSelection();$(`.verse[data-v="${r.v}"]`)?.scrollIntoView({block:'center'})},100)}
async function runSearch(){const raw=$('#searchInput').value.trim();if(raw.length<2)return toast('Escribe al menos 2 caracteres');const box=$('#searchResults');const direct=parseReference(raw);if(direct){box.innerHTML=`<div class="search-result reference-result"><strong>${escapeHtml(direct.ref)}</strong><span>Abrir esta referencia</span></div>`;box.querySelector('.search-result').onclick=()=>openSearchResult(direct);return}const q=normalizeText(raw);box.innerHTML='<p>Buscando en toda la Biblia…</p>';let results=[];for(let bi=0;bi<state.books.length&&results.length<100;bi++){const b=state.books[bi],chapters=await getBookChapters(b);for(let ci=0;ci<chapters.length&&results.length<100;ci++)for(let vi=0;vi<chapters[ci].length&&results.length<100;vi++)if(normalizeText(limpiarTextoBiblico(chapters[ci][vi])).includes(q))results.push({bi,c:ci+1,v:vi+1,endv:vi+1,t:limpiarTextoBiblico(chapters[ci][vi]),ref:`${displayBook(b)} ${ci+1}:${vi+1}`})}box.innerHTML=results.length?results.map((r,i)=>`<div class="search-result" data-i="${i}"><strong>${r.ref}</strong>${formatBibleText(r.t)}</div>`).join(''):'<p>Sin resultados.</p>';$$('.search-result').forEach(el=>el.onclick=()=>openSearchResult(results[+el.dataset.i]))}
$('#settingsBtn').onclick=()=>$('#settingsDialog').showModal();$('#fontSize').oninput=e=>{document.documentElement.style.setProperty('--font-size',e.target.value+'px');localStorage.setItem('fontSize',e.target.value)};const fs=localStorage.getItem('fontSize');if(fs){$('#fontSize').value=fs;document.documentElement.style.setProperty('--font-size',fs+'px')}
let wakeLock=null;$('#keepAwake').onchange=async e=>{try{if(e.target.checked&&'wakeLock'in navigator)wakeLock=await navigator.wakeLock.request('screen');else await wakeLock?.release()}catch{e.target.checked=false;toast('No disponible en este dispositivo')}};
$('#showFavorites').onclick=()=>showCollection('Versículos guardados',Object.entries(state.favorites).map(([k,v])=>({k,ref:v.ref,text:v.text})));$('#showExplanations').onclick=()=>showCollection('Mis explicaciones',Object.entries(state.explanations).sort((a,b)=>b[1].updated-a[1].updated).map(([k,v])=>({k,ref:v.ref,text:v.text,exp:true})));function showCollection(title,items){$('#settingsDialog').close();$('#searchDialog h2').textContent=title;$('#searchDialog .search-row').style.display='none';$('#searchResults').innerHTML=items.length?items.map((x,i)=>`<div class="list-card" data-i="${i}"><strong>${x.ref}</strong><p>${formatBibleText(x.text)}</p></div>`).join(''):'<p>Todavía no hay elementos.</p>';$('#searchDialog').showModal();$$('.list-card').forEach(el=>el.onclick=()=>{const x=items[+el.dataset.i];if(x.exp){$('#searchDialog').close();openViewExplanation(x.k)}else navigateKey(x.k)})}
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
  syncFavoritesFromStorage();
  const entries=Object.entries(state.favorites||{});
  if(!entries.length)return null;
  const [k,v]=entries.sort((a,b)=>(Number(b[1]?.savedAt)||0)-(Number(a[1]?.savedAt)||0))[0];
  const [bookKey,chapter,verse]=k.split(':');
  return{bookKey,chapter:Number(chapter),verse:Number(verse),ref:v.ref,savedAt:Number(v.savedAt)||0};
}
function updateReadingPointUI(){
  const latest=latestSavedPoint();
  const continueBtn=$('#continueReading');
  if(continueBtn){continueBtn.textContent=latest?`Ir a: ${latest.ref}`:'Todavía no hay un punto de libro guardado';continueBtn.disabled=!latest}
  const homeRef=$('#homeContinueRef'),homeContinue=$('#homeContinue');
  if(homeRef)homeRef.textContent=latest?latest.ref:'Todavía no hay un punto de libro guardado';
  if(homeContinue)homeContinue.disabled=!latest;
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
  const marksBox=$('#readingMarksList');
  if(marksBox)marksBox.innerHTML='<p class="empty-saved">El último versículo guardado es el punto de libro.</p>';
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
function getDictionaryEntries(){
  const deleted=new Set(state.dictionaryDeleted||[]), edits=state.dictionaryEdits||{};
  const base=(state.dictionaryBase||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,...(edits[x.id]||{}),builtin:true}));
  const custom=(state.dictionaryCustom||[]).filter(x=>!deleted.has(x.id)).map(x=>({...x,builtin:false}));
  return [...base,...custom].sort((a,b)=>String(a.termino).localeCompare(String(b.termino),'es',{sensitivity:'base'}));
}
function renderDictionary(query=''){
  const q=normalizeDictionaryText(query), all=getDictionaryEntries();
  const filtered=q?all.filter(x=>normalizeDictionaryText(`${x.termino} ${x.explicacion} ${x.categoria}`).includes(q)):all;
  const visible=q?filtered:filtered.slice(0,80);
  $('#dictionaryCount').textContent=q
    ?`${filtered.length.toLocaleString('es-ES')} coincidencia${filtered.length===1?'':'s'} de ${all.length.toLocaleString('es-ES')} entradas`
    :`${all.length.toLocaleString('es-ES')} entradas · escribe para filtrar`;
  $('#dictionaryResults').innerHTML=visible.length
    ?visible.map(x=>`<button class="dictionary-card" type="button" data-id="${escapeHtml(x.id)}"><strong>${escapeHtml(x.termino)}</strong><small>${escapeHtml(x.categoria||'Sin categoría')}</small><p>${escapeHtml(x.explicacion)}</p></button>`).join('')+(q?'':'<p class="dictionary-live-help">Escribe en el buscador y las coincidencias aparecerán al instante.</p>')
    :'<p class="empty-saved">No se encontraron coincidencias.</p>';
  $$('.dictionary-card').forEach(card=>card.addEventListener('click',()=>openDictionaryEditor(card.dataset.id)));
}
function openDictionary(){
  state.selected.clear();updateSelection();
  $('#dictionarySearch').value='';renderDictionary();$('#dictionaryDialog').showModal();
  setTimeout(()=>$('#dictionarySearch').focus(),80);
}
function openDictionaryEditor(id=''){
  const entry=getDictionaryEntries().find(x=>x.id===id);
  $('#dictionaryEntryId').value=entry?.id||'';
  $('#dictionaryTerm').value=entry?.termino||'';
  $('#dictionaryCategory').value=entry?.categoria||'';
  $('#dictionaryExplanation').value=entry?.explicacion||'';
  $('#dictionaryEditTitle').textContent=entry?'Editar palabra':'Añadir palabra';
  $('#deleteDictionaryEntry').style.display=entry?'inline-block':'none';
  $('#dictionaryEditDialog').showModal();
}
$('#runDictionarySearch')?.addEventListener('click',()=>renderDictionary($('#dictionarySearch').value));
$('#dictionarySearch')?.addEventListener('input',e=>renderDictionary(e.target.value));
$('#dictionarySearch')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();renderDictionary(e.target.value)}});
$('#addDictionaryEntry')?.addEventListener('click',()=>openDictionaryEditor());
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
  'highlights','favorites','explanations','last','readingPoints','readingPoint','importedTitles','fontSize','readerTheme',
  'lastLocalBibleAudit','verifiedTitleLayerAudit','titlesChapterOffsetV125','titlesDoubleShiftFixedV126','dictionaryCustom','dictionaryEdits','dictionaryDeleted'
];
function buildCompleteBackup(){
  const data={};
  for(const key of BACKUP_KEYS){const value=localStorage.getItem(key);if(value!==null)data[key]=value}
  return{
    app:'Mi Biblia de Estudio',schema:1,appVersion:APP_VERSION,createdAt:new Date().toISOString(),
    summary:{savedVerses:Object.keys(state.favorites||{}).length,highlights:Object.keys(state.highlights||{}).length,explanations:Object.keys(state.explanations||{}).length,titles:countTitleLayer(state.importedTitles||{}),dictionary:getDictionaryEntries().length,dictionaryCustom:(state.dictionaryCustom||[]).length,dictionaryEdited:Object.keys(state.dictionaryEdits||{}).length,dictionaryDeleted:(state.dictionaryDeleted||[]).length},
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
  try{
    const data=await downloadStructuredTitleSource();
    const audit=buildVerifiedTitleLayer(data);
    if(audit.errors.length)throw new Error(audit.errors[0]);
    const hash=await sha256Hex(titleLayerEntries(audit.result).join('\n'));
    state.importedTitles=audit.result;
    localStorage.setItem('importedTitles',JSON.stringify(audit.result));
    localStorage.setItem('verifiedTitleLayerAudit',JSON.stringify({installedAt:Date.now(),count:audit.count,sha256:hash,ignoredIntroductions:audit.ignoredIntroductions,warnings:audit.warnings,automatic:true}));
  }catch(error){
    console.warn('Los títulos automáticos no pudieron descargarse; se conservarán los ya guardados',error);
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

async function actualizarAplicacion(){
  const indicator=$('#pullRefresh');
  indicator?.classList.add('refreshing');
  if(indicator)indicator.querySelector('strong').textContent='Actualizando…';
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.update()));
    }
    if('caches' in window){
      const names=await caches.keys();
      await Promise.all(names.filter(n=>n.startsWith('biblia-estudio-')).map(n=>caches.delete(n)));
    }
    await fetch(`index.html?v=${Date.now()}`,{cache:'reload'});
  }catch(e){console.warn('No se pudo comprobar la actualización',e)}
  location.reload();
}
(function activarDeslizarParaActualizar(){
  const indicator=$('#pullRefresh');
  let startY=0,pulling=false,distance=0;
  const puedeActualizar=e=>{
    const target=e?.target;
    const enMenu=target instanceof Element && target.closest('#drawer, dialog, .backdrop');
    const drawerCerrado=$('#drawer')?.classList.contains('hidden');
    const pantallaValida=!$('#homeScreen')?.classList.contains('hidden') || !$('#readerScreen')?.classList.contains('hidden');
    return window.scrollY<=0 && drawerCerrado && !document.querySelector('dialog[open]') && pantallaValida && !enMenu;
  };
  window.addEventListener('touchstart',e=>{
    if(e.touches.length===1&&puedeActualizar(e)){startY=e.touches[0].clientY;pulling=true;distance=0}
    else{pulling=false;distance=0}
  },{passive:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling)return;
    distance=Math.max(0,e.touches[0].clientY-startY);
    if(distance<8)return;
    const shown=Math.min(110,distance*.55);
    indicator?.classList.add('visible');
    if(indicator){indicator.style.transform=`translate(-50%, ${shown-70}px)`;indicator.querySelector('span').textContent=distance>=110?'↻':'↓';indicator.querySelector('strong').textContent=distance>=110?'Suelta para actualizar':'Desliza para actualizar'}
  },{passive:true});
  window.addEventListener('touchend',()=>{
    if(!pulling)return;
    pulling=false;
    if(distance>=110){actualizarAplicacion();return}
    if(indicator){indicator.classList.remove('visible');indicator.style.transform='translate(-50%, -70px)'}
  },{passive:true});
})();
window.addEventListener('pageshow',()=>{syncFavoritesFromStorage();updateReadingPointUI();if(state.books.length)prepareBooksDrawer()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){syncFavoritesFromStorage();updateReadingPointUI();if(state.books.length)prepareBooksDrawer()}});
init().catch(e=>{reader.innerHTML='<p>No se pudo cargar la Biblia.</p>';console.error(e)});

