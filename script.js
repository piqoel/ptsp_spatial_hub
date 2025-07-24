document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero-section');

    // Efek parallax simpel saat mouse bergerak
    document.addEventListener('mousemove', (e) => {
        // e.clientX adalah posisi mouse horizontal, window.innerWidth adalah lebar layar
        const x = e.clientX / window.innerWidth;
        // e.clientY adalah posisi mouse vertikal, window.innerHeight adalah tinggi layar
        const y = e.clientY / window.innerHeight;
        
        // Menggerakkan posisi background sedikit.
        hero.style.backgroundPosition = `calc(50% + ${ (x - 0.5) * -10 }px) calc(50% + ${ (y - 0.5) * -10 }px)`;
    });
});