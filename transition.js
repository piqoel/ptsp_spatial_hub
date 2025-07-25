if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    // Paksa scroll ke paling atas halaman saat load
    window.scrollTo(0, 0);

    const pageWrapper = document.getElementById('page-wrapper');
    
    // Efek Fade-in saat halaman dimuat
    pageWrapper.classList.add('fade-in');

    // Efek Fade-out saat link diklik
    const internalLinks = document.querySelectorAll('a:not([target="_blank"])');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const destination = this.href;

            // Cek jika link hanya anchor di halaman yang sama
            if (window.location.href.split('#')[0] === destination.split('#')[0] && destination.includes('#')) {
                return;
            }

            e.preventDefault(); 
            pageWrapper.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = destination;
            }, 500); 
        });
    });
});