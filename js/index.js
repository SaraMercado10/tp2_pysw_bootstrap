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
});