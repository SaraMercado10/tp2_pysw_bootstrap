$(document).ready(function () {
    // ======================
    // Validación en Tiempo Real
    // ======================
    $('#name, #email, #message').on('input', function () {
        const input = $(this);
        const value = input.val().trim();
        const isValid = input[0].checkValidity();

        if (isValid) {
            input.removeClass('is-invalid').addClass('is-valid');
        } else {
            input.removeClass('is-valid').addClass('is-invalid');
        }
    });

    // ======================
    // Envío del Formulario
    // ======================
    $('#contact-form').on('submit', function (event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Verifica si todos los campos son válidos
        if ($(this)[0].checkValidity()) {
            showSpinner(); // Muestra el spinner
            setTimeout(() => {
                hideSpinner(); // Oculta el spinner después de 2 segundos
                $('#confirmationModal').modal('show'); // Muestra el modal de confirmación
            }, 2000);
        } else {
            // Marca los campos inválidos
            $(this).addClass('was-validated');
        }
    });

    // ======================
    // Funciones Auxiliares
    // ======================
    function showSpinner() {
        $('#spinner').removeClass('d-none').fadeIn(); // Muestra el spinner
        $('#submit-btn').prop('disabled', true); // Deshabilita el botón
    }

    function hideSpinner() {
        $('#spinner').fadeOut().addClass('d-none'); // Oculta el spinner
        $('#submit-btn').prop('disabled', false); // Habilita el botón
    }
});