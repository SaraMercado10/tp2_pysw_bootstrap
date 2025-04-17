$(document).ready(function () {
  // Mega Menú Dropdown
  $('.dropdown').hover(
    function () {
      if ($(window).width() > 992) { // Solo en pantallas grandes (desktop)
        $(this).find('.dropdown-menu').stop(true, true).slideDown(300);
      }
    },
    function () {
      if ($(window).width() > 992) { // Solo en pantallas grandes (desktop)
        $(this).find('.dropdown-menu').stop(true, true).slideUp(300);
      }
    }
  );

  // Manejo del Dropdown en móviles
  $('.dropdown-toggle').on('click', function (e) {
    if ($(window).width() <= 992) { // Solo en pantallas pequeñas (móvil)
      const $dropdownMenu = $(this).next('.dropdown-menu');
      if ($dropdownMenu.is(':visible')) {
        $dropdownMenu.slideUp(300); // Cierra el menú si está visible
      } else {
        $dropdownMenu.slideDown(300); // Abre el menú si está oculto
      }
      e.preventDefault(); // Evita el comportamiento predeterminado de Bootstrap
    }
  });

  // Efecto Hover en Iconos de Redes Sociales
  $('.social-icon').hover(
    function () {
      $(this).css('transform', 'scale(1.2)');
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );

  // ======================
  // Footer: Validación de Formulario + Efecto Spinner
  // ======================

  // Validación de Formulario
  const form = $('#contact-form')[0];
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // Evita el envío real del formulario
      showSpinner(); // Muestra el spinner
      setTimeout(() => {
        hideSpinner(); // Oculta el spinner después de 2 segundos
        alert('¡Formulario enviado correctamente!');
      }, 2000);
    }
    form.classList.add('was-validated');
  });

  // Mostrar Spinner
  function showSpinner() {
    $('#spinner').removeClass('d-none'); // Muestra el spinner
    $('#submit-btn').prop('disabled', true); // Deshabilita el botón
  }

  // Ocultar Spinner
  function hideSpinner() {
    $('#spinner').addClass('d-none'); // Oculta el spinner
    $('#submit-btn').prop('disabled', false); // Habilita el botón
  }
});
