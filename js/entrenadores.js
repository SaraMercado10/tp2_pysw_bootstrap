$(document).ready(function () {
    // 1. Inicialización del sistema de rating (funcionando)
    $('.rating').each(function () {
        const rating = parseInt($(this).data('rating'));
        $(this).empty();

        for (let i = 1; i <= 5; i++) {
            const star = $('<i class="far fa-star"></i>');
            if (i <= rating) star.addClass('fas');
            $(this).append(star);
        }
    });

    // 2. Versión definitiva para el flip y barras
    $('.trainer-card').each(function () {
        const $card = $(this);
        let barsLoaded = false;

        // Desktop (hover)
        $card.hover(
            function () {
                if (!isMobile()) {
                    $card.addClass('flipped');
                    if (!barsLoaded) {
                        initializeBars($card);
                        barsLoaded = true;
                    }
                }
            },
            function () {
                if (!isMobile()) {
                    $card.removeClass('flipped');
                }
            }
        );

        // Móvil (click)
        $card.on('click', function () {
            if (isMobile()) {
                $card.toggleClass('flipped');
                if ($card.hasClass('flipped') && !barsLoaded) {
                    initializeBars($card);
                    barsLoaded = true;
                }
            }
        });
    });

    // 3. Botón Volver
    $('.flip-back').on('click', function (e) {
        e.stopPropagation();
        $(this).closest('.trainer-card').removeClass('flipped');
    });

    // Función definitiva para inicializar barras
    function initializeBars($card) {
        const $container = $card.find('.progress-bars-container');
        $container.attr('data-loaded', 'true'); // Actualiza el atributo data-loaded

        $card.find('.progress-bar').each(function () {
            const $bar = $(this);
            const width = $bar.data('width');

            // Resetear la barra
            $bar.css({
                width: '0%',
                transition: 'none', // Desactivar transición temporalmente
            });

            // Forzar render
            setTimeout(() => {
                $bar.css({
                    width: width + '%',
                    transition: 'width 1.5s ease-in-out', // Reactivar transición
                });
            }, 50);
        });
    }

    // Función para detectar móviles
    function isMobile() {
        return $(window).width() <= 768;
    }
});