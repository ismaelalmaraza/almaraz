
document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. PUBLICACIONES
       
       AGREGA AQUÍ TUS CANCIONES, POEMAS Y PENSAMIENTOS.
       
       Tipos disponibles:
       - cancion
       - pensamiento
       - poema
       - rareza
       - detras

       Para agregar una publicación:
       Copia un bloque {...}, cambia sus datos
       y sepáralo del siguiente con una coma.
    ===================================================== */

    const publicaciones = 
[
  {
    "tipo": "pensamiento",
    "titulo": "La vida que no tuvimos",
    "imagen": "assets/pensamiento.webp",
    "contenido": "Hay personas a las que nunca llegamos a perder del todo, porque tampoco alcanzamos a vivir todo lo que imaginamos con ellas.\n\nY uno termina extrañando cosas que jamás sucedieron: una casa, los domingos, unas manos envejeciendo junto a las nuestras.\n\nQué extraño es guardar luto por un futuro que nunca tuvo pasado."
  },
  {
    "tipo": "pensamiento",
    "titulo": "La última forma de amar",
    "imagen": "assets/pensamiento.webp",
    "contenido": "Un día comprendí que no todas las historias necesitan una última conversación. Algunas terminan cuando dejamos de buscar respuestas donde siempre encontramos silencio.\n\nNo dejé de quererte de golpe. Simplemente aprendí a no tocar una puerta que ya no se abría.\n\nY aunque parezca resignación, también hay una enorme dignidad en retirarse sin convertir el amor en una súplica."
  },
  {
    "tipo": "pensamiento",
    "titulo": "Los domingos también duelen",
    "imagen": "assets/pensamiento.webp",
    "contenido": "El duelo tiene una extraña manera de elegir sus días. A veces nos permite sobrevivir a los aniversarios, a las fotografías y hasta a las despedidas.\n\nPero llega un domingo cualquiera, cuando no sucede absolutamente nada, y nos devuelve de golpe todo lo que creíamos haber aprendido a soportar.\n\nTal vez porque la ausencia se parece demasiado al silencio cuando nadie tiene prisa."
  },
  {
    "tipo": "pensamiento",
    "titulo": "Después de ti",
    "imagen": "assets/pensamiento.webp",
    "contenido": "Después de ti hubo otros nombres, otros abrazos y otras maneras de pronunciar la palabra amor.\n\nNo sería justo decir que nada volvió a importarme. Hubo personas buenas, momentos sinceros y nuevas ilusiones.\n\nPero contigo quedó una pregunta que nunca he sabido responder: ¿qué habría sido de nosotros si la vida nos hubiera concedido un poco más de tiempo?"
  },
  {
    "tipo": "pensamiento",
    "titulo": "Aprender a no esperar",
    "imagen": "assets/pensamiento.webp",
    "contenido": "Renunciar al amor no siempre significa dejar de creer en él. A veces significa dejar de esperar a una persona en particular.\n\nEs guardar su nombre sin volver a buscarlo, escuchar aquella canción sin escribirle y aceptar que una promesa puede seguir siendo hermosa aunque nadie llegue a cumplirla.\n\nHay despedidas que no se dicen. Se practican, silenciosamente, todos los días."
  },
  {
    "tipo": "poema",
    "titulo": "Inventario de lo que no fuimos",
    "imagen": "assets/poems.webp",
    "contenido": "Nos faltó una casa con ventanas al invierno,\nun calendario envejeciendo en la pared,\nla discusión absurda de un domingo\npor quién dejaba enfriarse el café.\n\nNos faltaron las maletas compartidas,\nlas fotografías de algún lugar sin nombre,\nuna mesa con dos platos y la costumbre\nde preguntarnos cómo estuvo el día.\n\nNos faltó conocernos las arrugas,\nperdonarnos los años y el cansancio,\naprender que también existe el amor\ncuando se apaga el entusiasmo.\n\nYo había imaginado tantas cosas\nque terminé creyéndolas recuerdos.\nTenía una vida entera construida\nsobre el terreno frágil de un deseo.\n\nY después vino el tiempo,\ncon su manera educada de destruirlo todo:\nno rompió ninguna puerta,\nno levantó la voz,\nno hizo promesas.\n\nSimplemente pasó.\n\nLlegaron otros nombres,\notros labios, otras manos,\ny esa forma tan humana de fingir\nque ya no nos importa lo que amamos.\n\nPero a veces, cuando la noche se demora,\nme sorprendo haciendo cuentas imposibles:\ncuántos inviernos nos habría dado la vida,\ncuántas veces te habría vuelto a elegir.\n\nNo extraño una casa que tuvimos,\nni una cama, ni una historia compartida.\nExtraño la posibilidad de haber vivido\nuna existencia entera junto a ti.\n\nY quizá eso sea lo más triste:\nque no puedo regresar a ningún sitio,\nporque el lugar donde más te quise\nnunca llegó a existir."
  },
  {
    "tipo": "poema",
    "titulo": "Cuando ya no me duela tu nombre",
    "imagen": "assets/poems.webp",
    "contenido": "Algún día tu nombre será apenas\nuna palabra más entre las otras.\nNo cambiará mi pulso al escucharlo,\nni buscaré tu rostro entre las sombras.\n\nAlgún día pasaré por nuestra historia\nsin detenerme a recoger pedazos,\ny entenderé que no todos los caminos\nse hicieron para andarlos de la mano.\n\nNo sé si habrá una fecha para aquello,\nsi llegará en noviembre o en enero,\nsi una mañana cualquiera despertaré\nsin preguntarme dónde estarás primero.\n\nPorque sanar no tiene ceremonias,\nni una campana anuncia que ha ocurrido.\nA veces simplemente descubrimos\nque una herida ya no sangra como antes.\n\nY aun así, no quiero que te borres.\nNo necesito convertirte en un extraño.\nSería injusto con aquello que sentimos\nnegar que alguna vez nos hizo daño.\n\nQuiero recordarte sin pedirle\nal pasado que me devuelva lo perdido.\nQue tu recuerdo encuentre entre mis cosas\nun lugar donde no duela estar conmigo.\n\nQuiero mirar las luces de diciembre\nsin confundirlas con señales de regreso,\nvolver a escuchar nuestras canciones\nsin escribir tu nombre entre los versos.\n\nY cuando finalmente llegue el día\nen que tu ausencia no me quite el sueño,\nno pensaré que fue pequeño nuestro amor,\nni que lo nuestro mereció el olvido.\n\nComprenderé que hay despedidas\nque tardan muchos años en cumplirse,\ny que seguir viviendo no es traicionar\nlo que una vez juramos no rendir.\n\nTal vez entonces pueda sonreír\nal recordar aquello que no fuimos,\ny agradecerle a la vida haberte hallado,\naunque no me dejara ir contigo."
  },
  {
    "tipo": "poema",
    "titulo": "La costumbre de hablarle a los ausentes",
    "imagen": "assets/poems.webp",
    "contenido": "Todavía tengo cosas que contarte.\nNo son grandes noticias ni milagros:\nla lluvia regresó sobre los techos,\nel árbol del jardín perdió sus ramas.\n\nAyer escuché una canción antigua\ny quise preguntarte si la recuerdas.\nDespués miré el teléfono en silencio,\ncomo quien encuentra una casa sin puertas.\n\nHay días en que olvido por segundos\nque el mundo ya no puede devolverte.\nY entonces la memoria me corrige\ncon la delicadeza cruel de lo irreversible.\n\nHe aprendido a guardar ciertas palabras,\na reservarte un sitio en mis historias,\na pronunciar tu nombre sin testigos\ncuando la noche se parece a tu memoria.\n\nDicen que el tiempo acomoda las ausencias,\nque nos enseña a respirar distinto.\nTal vez sea verdad, pero no explica\npor qué hay recuerdos que nos dejan sin abrigo.\n\nNo te busco en los rostros de la gente,\nni espero que regreses de repente.\nSé que hay despedidas definitivas,\naunque el corazón insista en desmentirlas.\n\nA veces me pregunto si en algún lugar\nexisten los domingos y diciembre,\nsi el tiempo también pasa donde estás\no si todo permanece para siempre.\n\nQuisiera contarte que estoy bien,\naunque esa frase tenga sus matices:\nhay mañanas en que vuelvo a ser feliz\ny otras en que apenas sé qué decirme.\n\nPero sigo caminando, como puedo,\ncon las manos ocupadas de recuerdos.\nNo porque haya aprendido a no extrañarte,\nsino porque también te llevo en cada paso.\n\nY si algún día nos concede el universo\nuna conversación después del tiempo,\nno preguntaré por qué te fuiste.\n\nMe sentaré a tu lado,\ncomo antes de saber lo que era perder,\ny te contaré, despacio,\ntodo lo que pasó mientras no estabas."
  },
  {
    "tipo": "poema",
    "titulo": "No vuelvas si es por lástima",
    "imagen": "assets/poems.webp",
    "contenido": "No vuelvas porque el frío te sorprenda,\nni porque otra voz no sepa comprenderte.\nNo regreses a buscar entre mis brazos\nel refugio que elegiste no tener.\n\nYo también he conocido noches largas,\nla vergüenza de esperar una respuesta,\nel oficio de mirar hacia la puerta\ncuando sé que nadie piensa regresar.\n\nTambién tuve el teléfono en la mano,\ncon palabras que jamás envié,\ny aprendí que a veces el silencio\nes la única respuesta que tendremos.\n\nNo voy a reprocharte lo vivido,\nni convertir la historia en una deuda.\nHubo amor, y eso basta para darle\nun lugar entre las cosas verdaderas.\n\nPero hay algo que los años me enseñaron:\nno se puede mendigar una presencia,\nni sostener con una sola mano\nlo que necesita dos para quedarse.\n\nTe habría acompañado en los inviernos,\nen la enfermedad, el miedo y la derrota.\nNo prometía días sin tormentas,\nsolo no soltarte cuando el cielo se rompiera.\n\nY sin embargo aquí termina todo,\nno porque el sentimiento se haya ido,\nsino porque entendí que hay sacrificios\nque nos dejan sin nosotros mismos.\n\nAsí que no regreses por costumbre,\npor nostalgia, por culpa o por cansancio.\nNo conviertas en consuelo pasajero\nlo que un día te ofrecí para los años.\n\nSi alguna vez recuerdas lo que fuimos,\nno necesitas escribir ni disculparte.\nPuedes guardar lo hermoso de esta historia\nsin venir otra vez a desarmarme.\n\nYo me quedaré con lo que amaba,\ncon lo bueno que también hubo en tus ojos,\ny con esta última manera de quererte:\nabrir las manos,\naunque me tiemblen,\ny dejarte ir del todo."
  },
  {
    "tipo": "poema",
    "titulo": "Donde termina el invierno",
    "imagen": "assets/poems.webp",
    "contenido": "Hace frío cuando empieza a oscurecer,\ncuando diciembre se instala en las ventanas\ny las calles se parecen demasiado\na las cosas que perdimos sin palabras.\n\nHe visto caer la tarde sobre el valle,\nel Nevado desdibujarse entre la niebla,\ny he pensado que también los horizontes\naprenden a esconder lo que les pesa.\n\nNo sé cuántos inviernos me quedan,\nni qué nombre llevará mi último verano.\nSolo sé que hay días en que el cuerpo\nparece caminar más lento que los años.\n\nY aun así, he seguido haciendo planes,\nescribiendo canciones a deshoras,\nguardando en una libreta las palabras\nque no encuentran el valor de ser memoria.\n\nHe querido con la torpeza de los hombres\nque confunden el silencio con prudencia.\nHe perdido por callarme demasiadas cosas\ny por decir algunas cuando ya no había respuesta.\n\nA veces me pregunto qué habría sido\nsi hubiera elegido un rumbo diferente,\nsi el orgullo no pesara tanto entonces,\nsi supiéramos cuidar lo que se pierde.\n\nPero la vida nunca da respuestas\nal examen que presenta cada ausencia.\nSolo deja cicatrices invisibles\ny nos pide continuar con su sentencia.\n\nPor eso ya no espero primaveras\nque devuelvan lo que el tiempo se ha llevado.\nHe aprendido que las flores también crecen\nen jardines que jamás fueron soñados.\n\nSi algún día el camino se termina,\nsi me alcanza la noche en otra parte,\nquisiera que recuerden mis canciones,\nno las veces que no pude levantarme.\n\nQue sepan que hubo amor entre mis ruinas,\nque no todo fue tristeza ni derrota,\nque también supe reír cuando dolía\ny encontré alguna esperanza entre las sombras.\n\nY si después del invierno hay otro cielo,\nsi la vida guarda un sitio para el descanso,\nquisiera llegar sin cuentas pendientes,\ncon el corazón cansado, pero intacto.\n\nPorque al final no somos lo que fuimos,\nni siquiera aquello que perdimos.\nSomos también lo que elegimos conservar\ncuando ya no queda nada que pedirle al destino."
  },
  {
    "tipo": "cancion",
    "titulo": "Cartas que nunca envié",
    "imagen": "assets/unreleased.webp",
    "audio": "assets/cartas-que-nunca-envie.mp3",
    "contenido": "Una canción para el amor que nunca llegó a convertirse en una vida compartida. Para esa persona con quien imaginamos envejecer y a quien, incluso después de otros nombres y otras historias, habríamos vuelto a elegir.\n\nHay cartas que nunca se envían porque, en el fondo, sabemos que no buscamos una respuesta. Solo necesitamos que las palabras encuentren un lugar donde quedarse."
  },
  {
    "tipo": "cancion",
    "titulo": "Cuéntame cómo es el cielo",
    "imagen": "assets/unreleased.webp",
    "audio": "assets/cuentame-como-es-el-cielo.mp3",
    "contenido": "Una conversación imposible con alguien que ya no está. Una canción nacida de las preguntas que deja el duelo: si allá también hace frío, si existen los domingos, si diciembre llega de la misma manera y si quienes se marcharon todavía pueden escucharnos.\n\nHay ausencias que no necesitan respuestas. A veces solo necesitan una guitarra y unos minutos para volver a sentirse cerca."
  },
  {
    "tipo": "cancion",
    "titulo": "Camino al cielo",
    "imagen": "assets/unreleased.webp",
    "audio": "assets/camino-al-cielo.mp3",
    "contenido": "Una canción sobre la fragilidad de la existencia, los días difíciles y el deseo de seguir caminando aun cuando el cuerpo y el ánimo parecen agotarse.\n\nNo habla solamente de la muerte, sino también de la vida que todavía queda por escribir, de las personas que nos sostienen y de esa esperanza pequeña que a veces basta para atravesar otra noche."
  },
  {
    "tipo": "rareza",
    "titulo": "El cajón de las cosas que nunca dije",
    "imagen": "assets/rarities.webp",
    "contenido": "Tengo la costumbre de guardar cosas que probablemente no le interesarían a nadie: frases escritas en servilletas, fotografías desenfocadas, boletos de lugares que ya no recuerdo y comienzos de canciones que jamás terminé.\n\nEn una libreta encontré una frase que escribí hace años: «No me dolió que te fueras. Me dolió haber empezado a imaginar cómo sería quedarte».\n\nNo recuerdo qué día la escribí ni qué había sucedido. Lo extraño es que, al volver a leerla, supe perfectamente de quién hablaba.\n\nQuizá por eso conservo tantas cosas aparentemente inútiles. Porque hay recuerdos que no sabemos dónde poner, y los objetos terminan convirtiéndose en pequeños archivos de lo que fuimos.\n\nAlgunas personas coleccionan monedas, relojes o libros antiguos. Yo, sin proponérmelo, he terminado coleccionando despedidas."
  },
  {
    "tipo": "detras",
    "titulo": "Detrás de «Cartas que nunca envié»",
    "imagen": "assets/detras.webp",
    "contenido": "Hay canciones que nacen de una historia y otras que nacen de todas las historias que nunca llegaron a ocurrir.\n\n«Cartas que nunca envié» pertenece a las segundas.\n\nLa idea surgió de una pregunta aparentemente sencilla: ¿se puede extrañar una vida que nunca compartimos con alguien?\n\nDurante mucho tiempo pensé que el duelo correspondía únicamente a lo que habíamos tenido y perdido. Después comprendí que también podemos sufrir por lo que imaginamos: los viajes que no hicimos, los cumpleaños que no celebramos, las canas que nunca llegamos a conocer.\n\nQuise escribir una canción que reconociera algo difícil de admitir: que después de un gran amor la vida continúa. Llegan otras personas, otros afectos y experiencias que también son verdaderas. Pero eso no impide que, en algún rincón de la memoria, permanezca la certeza de a quién habríamos elegido para llegar al final.\n\nPor eso la canción no busca reclamar ni pedir un regreso. Tampoco pretende idealizar una historia que tuvo sus propias dificultades. Es, más bien, una despedida de aquel futuro imaginado.\n\nLa parte más importante no está en lo que se perdió, sino en lo que nunca ocurrió.\n\nPorque a veces una canción es la única manera de cerrar una carta que no tiene destinatario."
  }
]



    /* =====================================================
       2. CONFIGURACIÓN DE CATEGORÍAS
    ===================================================== */

    const categorias = {
        cancion: 'CANCIÓN INÉDITA',
        pensamiento: 'PENSAMIENTO',
        poema: 'POEMA',
        rareza: 'RAREZA',
        detras: 'DETRÁS DE LA CANCIÓN'
    };

    // Categoría que aparece al entrar a la página
    const categoriaInicial = 'cancion';


    /* =====================================================
       3. MENÚ Y HEADER
    ===================================================== */

    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu-btn');

    function setMenu(open) {
        if (!nav || !menu) return;

        nav.classList.toggle('open', open);
        menu.setAttribute('aria-expanded', String(open));
        menu.textContent = open ? '×' : '☰';
        menu.setAttribute(
            'aria-label',
            open ? 'Cerrar menú' : 'Abrir menú'
        );
    }

    if (menu && nav) {
        menu.addEventListener('click', () => {
            setMenu(!nav.classList.contains('open'));
        });
    }

    if (header) {
        const updateHeader = () => {
            header.classList.toggle(
                'scrolled',
                window.scrollY > 25
            );
        };

        window.addEventListener(
            'scroll',
            updateHeader,
            { passive: true }
        );

        updateHeader();
    }


    /* =====================================================
       4. VENTANAS EMERGENTES
    ===================================================== */

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    let lastFocus = null;

    function showModal(titulo, contenido) {
        if (!modal || !modalTitle || !modalBody) return;

        lastFocus = document.activeElement;

        modalTitle.textContent = titulo;
        modalBody.textContent = contenido;

        // Respetar saltos de línea en poemas y reflexiones
        modalBody.style.whiteSpace = 'pre-line';

        modal.hidden = false;
        document.body.style.overflow = 'hidden';

        modal.querySelector('.close')?.focus();
    }

    function closeModal() {
        if (!modal) return;

        modal.hidden = true;
        document.body.style.overflow = '';

        if (lastFocus && document.contains(lastFocus)) {
            lastFocus.focus();
        }
    }

    document.querySelectorAll('[data-close]').forEach(element => {
        element.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal && !modal.hidden) {
            closeModal();
        }
    });


    /* =====================================================
       5. CREAR TARJETAS AUTOMÁTICAMENTE
    ===================================================== */

    const contenedor = document.querySelector('.posts');

    function crearPublicaciones() {
        if (!contenedor) return;

        contenedor.replaceChildren();

        publicaciones.forEach(publicacion => {

            const article = document.createElement('article');
            article.className = 'post';
            article.dataset.type = publicacion.tipo;

            const button = document.createElement('button');
            button.className = 'post-image';
            button.type = 'button';

            const img = document.createElement('img');
            img.src = publicacion.imagen;
            img.alt = publicacion.titulo;
            img.loading = 'lazy';

            const icon = document.createElement('span');
            icon.className = 'play';

            const esCancion =
                publicacion.tipo === 'cancion' &&
                Boolean(publicacion.audio);

            icon.textContent = esCancion ? '▶' : '↗';

            button.append(img, icon);

            const categoria = document.createElement('small');
            categoria.textContent =
                categorias[publicacion.tipo] ||
                publicacion.tipo.toUpperCase();

            const titulo = document.createElement('h3');
            titulo.textContent = publicacion.titulo;

            article.append(button, categoria, titulo);

            if (esCancion) {

                /* REPRODUCTOR MP3 */

                const audio = document.createElement('audio');
                audio.src = publicacion.audio;
                audio.preload = 'none';

                button.classList.add('audio-trigger');
                button.setAttribute('aria-pressed', 'false');
                button.setAttribute(
                    'aria-label',
                    'Reproducir ' + publicacion.titulo
                );

                button.addEventListener('click', async () => {

                    if (audio.paused) {

                        document.querySelectorAll('.post audio')
                            .forEach(otherAudio => {
                                if (otherAudio !== audio) {
                                    otherAudio.pause();
                                }
                            });

                        try {
                            await audio.play();
                        } catch (error) {
                            console.error(
                                'No se pudo reproducir:',
                                publicacion.titulo,
                                error
                            );
                        }

                    } else {
                        audio.pause();
                    }

                });

                audio.addEventListener('play', () => {
                    icon.textContent = 'Ⅱ';
                    button.setAttribute('aria-pressed', 'true');
                    button.setAttribute(
                        'aria-label',
                        'Pausar ' + publicacion.titulo
                    );
                });

                audio.addEventListener('pause', () => {
                    icon.textContent = '▶';
                    button.setAttribute('aria-pressed', 'false');
                    button.setAttribute(
                        'aria-label',
                        'Reproducir ' + publicacion.titulo
                    );
                });

                audio.addEventListener('ended', () => {
                    icon.textContent = '▶';
                    button.setAttribute('aria-pressed', 'false');
                    button.setAttribute(
                        'aria-label',
                        'Reproducir ' + publicacion.titulo
                    );
                });

                article.appendChild(audio);

            } else {

                /* VENTANA EMERGENTE */

                button.setAttribute(
                    'aria-label',
                    'Abrir ' + publicacion.titulo
                );

                button.addEventListener('click', () => {
                    showModal(
                        publicacion.titulo,
                        publicacion.contenido || ''
                    );
                });

            }

            contenedor.appendChild(article);

        });
    }

    crearPublicaciones();


    /* =====================================================
       6. FILTROS
    ===================================================== */

    const filterBtns = [
        ...document.querySelectorAll('button[data-filter]')
    ];

    function filter(tipo) {

        document.querySelectorAll('.post').forEach(post => {
            post.hidden =
                tipo !== 'todos' &&
                post.dataset.type !== tipo;
        });

        filterBtns.forEach(button => {
            button.classList.toggle(
                'selected',
                button.dataset.filter === tipo
            );
        });

    }

    filterBtns.forEach(button => {
        button.addEventListener('click', () => {
            filter(button.dataset.filter);
        });
    });

    // Mostrar canciones al iniciar
    filter(categoriaInicial);


    /* =====================================================
       7. NAVEGACIÓN
    ===================================================== */

    document.querySelectorAll('.nav a').forEach(link => {

        link.addEventListener('click', () => {

            setMenu(false);

            document.querySelectorAll('.nav a').forEach(item => {
                item.classList.remove('current');
            });

            link.classList.add('current');

            if (link.dataset.category) {
                filter(link.dataset.category);
            }

        });

    });


    /* =====================================================
       8. BOTÓN VER TODO
    ===================================================== */

    const allButton = document.getElementById('all');

    if (allButton) {
        allButton.addEventListener('click', () => {

            filter('todos');

            document.getElementById('contenido')
                ?.scrollIntoView({
                    behavior: 'smooth'
                });

        });
    }


    /* =====================================================
       9. BUSCADOR
    ===================================================== */

    const searchButton = document.querySelector('.search-btn');

    if (searchButton) {
        searchButton.addEventListener('click', () => {

            const term = prompt('Buscar en las publicaciones:');

            if (!term || !term.trim()) return;

            const texto = term.trim().toLowerCase();

            filter('todos');

            document.querySelectorAll('.post').forEach((post, index) => {

                const publicacion = publicaciones[index];

                const contenido = (
                    publicacion.titulo + ' ' +
                    (publicacion.contenido || '')
                ).toLowerCase();

                post.hidden = !contenido.includes(texto);

            });

            document.getElementById('contenido')
                ?.scrollIntoView({
                    behavior: 'smooth'
                });

        });
    }


    /* =====================================================
       10. MODALES DE OBRAS Y AUTOR
    ===================================================== */

    document.querySelectorAll('[data-modal]').forEach(button => {

        button.addEventListener('click', () => {

            if (button.dataset.modal === 'autor') {

                showModal(
                    'Sobre Ismael Almaraz',
                    `Escritor y compositor mexicano.

En la música y en la literatura encuentro formas
de contar aquello que nos transforma: el amor,
la memoria, las despedidas y la esperanza.`
                );

            } else {

                showModal(
                    'Tulipanes en la nieve',
                    `Una historia sobre lo que duele,
lo que sana y todo lo que permanece.

Disponible en Amazon.`
                );

            }

        });

    });


    /* =====================================================
       11. SUSCRIPCIÓN
    ===================================================== */

    const subscribeForm = document.getElementById('subscribe');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', event => {

            event.preventDefault();

            const message = document.getElementById(
                'subscribe-message'
            );

            if (message) {
                message.textContent =
                    'El formulario está listo para conectar ' +
                    'a tu plataforma de correo. ' +
                    'Aún no guarda suscripciones.';
            }

        });
    }


    /* =====================================================
       12. AÑO AUTOMÁTICO
    ===================================================== */

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       13. ANIMACIONES
    ===================================================== */

    if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }

                });

            },
            { threshold: 0.08 }
        );

        document.querySelectorAll(
            '.work, .post, .bottom > div'
        ).forEach(element => {

            element.classList.add('reveal');
            observer.observe(element);

        });

    }

});
