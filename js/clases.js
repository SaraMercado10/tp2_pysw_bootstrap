/*$(document).ready(function () {
    // ======================
    // Filtros por Categoría
    // ======================
    $('.filter-btn').on('click', function () {
      const filter = $(this).data('filter');
  
      // Agregar clase activa al botón seleccionado
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
  
      // Filtrar elementos
      if (filter === 'all') {
        $('.col-md-4').show();
      } else {
        $('.col-md-4').hide();
        $(`.${filter}`).show();
      }
    });
  });*/
  $(document).ready(function () {
    // Filtros por Categoría
    $('.filter-btn').on('click', function () {
      const filter = $(this).data('filter');
  
      // Agregar clase activa al botón seleccionado
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
  
      // Filtrar elementos
      if (filter === 'all') {
        $('.col-md-4').show();
      } else {
        $('.col-md-4').hide();
        $(`.${filter}`).show();
      }
    });
  });