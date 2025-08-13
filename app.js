(function () {
  const iframe = document.getElementById('iframeReporte');
  const reportTitle = document.getElementById('reportTitle');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const buttons = document.querySelectorAll('.report-btn');

  function mostrarCarga() {
    loadingOverlay.classList.add('show');
  }

  function ocultarCarga() {
    loadingOverlay.classList.remove('show');
  }

  function cambiarReporte(url, titulo) {
    if (!url || url.trim() === '-') {
      // Opcional: muestra un aviso si aún no hay URL válida
      reportTitle.textContent = `${titulo} (disponible pronto)`;
      return;
    }
    mostrarCarga();
    reportTitle.textContent = titulo;
    iframe.src = url;
  }

  // Manejar clicks sin inline JS
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-url');
      const titulo = btn.getAttribute('data-title') || 'Reporte';
      cambiarReporte(url, titulo);
    });
  });

  // Ocultar indicador cuando carga el iframe
  iframe.addEventListener('load', ocultarCarga);
})();
