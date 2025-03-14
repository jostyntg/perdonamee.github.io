const envelope = document.getElementById('envelope');
const gif = document.getElementById('romantic-gif');

envelope.addEventListener('click', function() {
    this.classList.toggle('open');

    // Si la carta está abierta, mostrar el GIF después de un pequeño retraso
    if (this.classList.contains('open')) {
        setTimeout(() => {
            gif.classList.add('show-gif');
        }, 400); // Esperamos a que la carta termine de girar
    } else {
        gif.classList.remove('show-gif');
    }
});