$(document).ready(function () {
    // ======================
    // Animación de Barras de Habilidades
    // ======================
    function animateSkillBars() {
      $('.progress-bar').each(function () {
        const target = $(this).attr('aria-valuemax'); // Obtiene el valor máximo
        $(this).animate({ width: target + '%' }, 2000); // Anima el ancho
      });
    }
  
    // Iniciar animación cuando el usuario llegue a la sección
    let barsAnimated = false;
    $(window).on('scroll', function () {
      const sectionOffset = $('#skill-bars').offset().top;
      const windowHeight = $(window).height();
      const scrollPosition = $(window).scrollTop();
  
      if (!barsAnimated && scrollPosition + windowHeight > sectionOffset) {
        animateSkillBars();
        barsAnimated = true; // Marca la animación como completada
      }
    });
  
    // ======================
    // Manejo del Rating con Estrellas
    // ======================
    $('.star-rating label').hover(
      function () {
        // Al pasar el mouse sobre una estrella, resalta todas las anteriores
        $(this).prevAll().addBack().css('color', '#ffcc00');
      },
      function () {
        // Al salir del grupo de estrellas, restaura el color original
        $('.star-rating label').css('color', '#ccc');
        $('.star-rating input:checked ~ label').prevAll().addBack().css('color', '#ffcc00');
      }
    );
  
    // Al hacer clic en una estrella, guarda la selección
    $('.star-rating input').on('change', function () {
      const value = $(this).val();
      console.log(`Calificación seleccionada: ${value}`);
    });
  });