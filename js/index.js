$(document).ready(function () {
    // Animación del Overlay y Contenido
    $(window).on('load', function () {
        $('#hero-overlay').fadeIn(1000, function () {
            // Una vez que el overlay está visible, mostramos el contenido
            $('#hero-content')
                .css('visibility', 'visible') // Hacemos visible el contenido
                .slideDown(1000); // Animamos su aparición
        });
    });

    $('.featured-card').hover(
        function () {
            // Al entrar el mouse
            $(this).find('.card-title').animate({ fontSize: '1.7rem' }, 200); // Aumenta el tamaño del título
            $(this).find('.card-text').animate({ opacity: 0.8 }, 200); // Reduce la opacidad del texto
        },
        function () {
            // Al salir el mouse
            $(this).find('.card-title').animate({ fontSize: '1.5rem' }, 200); // Restaura el tamaño del título
            $(this).find('.card-text').animate({ opacity: 1 }, 200); // Restaura la opacidad del texto
        }
    );

    // ======================
    // Contador Animado
    // ======================
    function animateCounters() {
        $('.counter-number').each(function () {
            const target = $(this).data('target'); // Obtiene el valor objetivo
            const duration = 2000; // Duración total de la animación (en milisegundos)
            const stepTime = Math.abs(Math.floor(duration / target)); // Tiempo entre cada paso
            let current = 0;

            const interval = setInterval(() => {
                if (current >= target) {
                    clearInterval(interval);
                    current = target; // Asegura que el número termine en el valor exacto
                }
                $(this).text(current); // Actualiza el texto del contador
                current++; // Incrementa el valor
            }, stepTime);
        });
    }

    // Iniciar la animación cuando el usuario llegue a la sección
    let countersAnimated = false; // Bandera para evitar múltiples animaciones
    $(window).on('scroll', function () {
        const sectionOffset = $('#animated-counter').offset().top;
        const windowHeight = $(window).height();
        const scrollPosition = $(window).scrollTop();

        if (!countersAnimated && scrollPosition + windowHeight > sectionOffset) {
            animateCounters();
            countersAnimated = true; // Marca la animación como completada
        }
    });

    // ======================
  // Testimonios en Carrusel: Personalización
  // ======================
  const carousel = $('#testimonialCarousel');

  // Configurar la velocidad del carrusel
  carousel.on('slide.bs.carousel', function () {
    const transitionDuration = 800; // Duración de la transición en milisegundos
    $('.carousel-item').css('transition-duration', `${transitionDuration}ms`);
  });

  // Habilitar autoplay y pausa al hacer hover
  let intervalId;
  const startAutoplay = () => {
    intervalId = setInterval(() => {
      carousel.carousel('next');
    }, 5000); // Cambia de diapositiva cada 5 segundos
  };

  const stopAutoplay = () => {
    clearInterval(intervalId);
  };

  // Iniciar autoplay al cargar la página
  startAutoplay();

  // Pausar cuando el usuario pasa el mouse sobre el carrusel
  carousel.hover(
    function () {
      stopAutoplay();
    },
    function () {
      startAutoplay();
    }
  );
});