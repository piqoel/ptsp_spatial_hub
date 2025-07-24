document.addEventListener('DOMContentLoaded', function () {

    const swiperOptions = {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        
        // Opsi untuk membuat kartu rata tengah jika jumlahnya sedikit
        centerInsufficientSlides: true,

        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
        },
    };

    const analyticsSlider = new Swiper('.analytics-slider', {
        ...swiperOptions, // Menggunakan opsi yang sama
        navigation: {
            nextEl: '#analytics .swiper-button-next',
            prevEl: '#analytics .swiper-button-prev',
        },
    });

    const developmentSlider = new Swiper('.development-slider', {
        ...swiperOptions, // Menggunakan opsi yang sama
        navigation: {
            nextEl: '#development .swiper-button-next',
            prevEl: '#development .swiper-button-prev',
        },
    });

    // Kode untuk nav link dan observer tetap sama
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.gallery-section');

    const setActiveLink = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            setActiveLink(targetId.substring(1));

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, { rootMargin: `-120px 0px -40% 0px` });

    sections.forEach(section => {
        observer.observe(section);
    });
});