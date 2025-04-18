$(document).ready(function () {
    // ======================
    // Filtros por Tags
    // ======================
    $('.filter-btn').on('click', function () {
      const filter = $(this).data('filter');
  
      // Agregar clase activa al botón seleccionado
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
  
      // Filtrar artículos
      if (filter === 'all') {
        $('.article').show();
      } else {
        $('.article').hide();
        $(`.${filter}`).show();
      }
    });
  
    // ======================
    // Scroll Reveal con AOS
    // ======================
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  
    // ======================
    // Comentarios Dinámicos
    // ======================
    $('.reply-btn').on('click', function () {
      const $comment = $(this).closest('.comment');
      alert('¡Función de respuesta no implementada aún!');
    });
  });