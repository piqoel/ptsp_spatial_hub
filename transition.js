document.addEventListener('DOMContentLoaded', () => {
    const pageWrapper = document.getElementById('page-wrapper');
    
    // 1. Efek Fade-in saat halaman dimuat
    pageWrapper.classList.add('fade-in');

    // 2. Efek Fade-out saat link diklik
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="."]');

    internalLinks.forEach(link => {
        // Abaikan link yang membuka tab baru
        if (link.getAttribute('target') === '_blank') {
            return;
        }

        link.addEventListener('click', function(e) {
            const destination = this.href;

            // Jika link mengarah ke halaman yang sama, biarkan default
            if (destination === window.location.href) {
                return;
            }

            e.preventDefault(); // Mencegah pindah halaman secara langsung
            pageWrapper.classList.add('fade-out');

            // Pindah halaman setelah animasi fade-out selesai (500ms)
            setTimeout(() => {
                window.location.href = destination;
            }, 500); 
        });
    });
});