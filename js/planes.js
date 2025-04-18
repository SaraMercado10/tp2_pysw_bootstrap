$(document).ready(function () {
  // ======================
  // Toggle Mensual/Anual
  // ======================
  let isMonthly = true;

  $('#monthly-btn').on('click', function () {
    if (!isMonthly) {
      isMonthly = true;
      updatePrices();
      $(this).addClass('active');
      $('#annual-btn').removeClass('active');
    }
  });

  $('#annual-btn').on('click', function () {
    if (isMonthly) {
      isMonthly = false;
      updatePrices();
      $(this).addClass('active');
      $('#monthly-btn').removeClass('active');
    }
  });

  function updatePrices() {
    $('.price').each(function () {
      const monthlyPrice = $(this).data('monthly');
      const annualPrice = $(this).data('annual');
      $(this).text(isMonthly ? monthlyPrice : annualPrice);
    });
  }

  // ======================
  // Tooltips
  // ======================
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});