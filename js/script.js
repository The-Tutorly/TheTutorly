document.addEventListener('DOMContentLoaded', function() {
    // Existing smooth scrolling code
    document.querySelectorAll('.navbar-nav a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Initialize Bootstrap carousel
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000
    })

    // New WhatsApp button functionality
    const whatsappBtn = document.getElementById('whatsappBtn');
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const message = 'Hello, I have a question!'; // Optional: Pre-filled message

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    }
    // Carousel functionality
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    let cardsPerView = window.innerWidth <= 768 ? 2 : 4;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 20; // 20px for margins
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function moveCarousel(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = cards.length - cardsPerView;
        if (currentIndex > cards.length - cardsPerView) currentIndex = 0;
        updateCarousel();
    }

    prevBtn.addEventListener('click', () => moveCarousel(-1));
    nextBtn.addEventListener('click', () => moveCarousel(1));

    window.addEventListener('resize', () => {
        cardsPerView = window.innerWidth <= 768 ? 2 : 4;
        currentIndex = 0;
        updateCarousel();
    });

    updateCarousel();
    const aboutSection = document.getElementById('about');
    const aboutImage = aboutSection.querySelector('img');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(aboutImage)) {
            aboutImage.style.animation = 'fadeInUp 1s ease-out forwards';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Parallax effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        aboutImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });

});