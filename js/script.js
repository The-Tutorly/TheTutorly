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
    const phoneNumber = '+923155171825'; // Replace with your WhatsApp number
    const message = 'Hi welcome to TheTutorly.!'; // Optional: Pre-filled message

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
        const cardWidth = cards[0].offsetWidth + 5; // 20px for margins
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
    const aboutImage = aboutSection.querySelector('.about-image');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const learnMoreContent = document.getElementById('learnMoreContent');
    let isExpanded = false;

    // Learn More button functionality
    learnMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        learnMoreContent.classList.toggle('show');
        learnMoreBtn.textContent = isExpanded ? 'Show Less' : 'Learn More';
    });

    // Scroll animation
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }

    // Check if element is in viewport on scroll
    window.addEventListener('scroll', function() {
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add('animate');
        }
    });

    // Initial check
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('animate');
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Parallax effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        aboutImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });

    const logoWrapper = document.querySelector('.logo_wrapper');
    const brandText = document.querySelector('.brand-text');
    const slogan = document.querySelector('.slogan');
  
    // Add a subtle animation on page load
    logoWrapper.style.opacity = '0';
    logoWrapper.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
      logoWrapper.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      logoWrapper.style.opacity = '1';
      logoWrapper.style.transform = 'translateX(0)';
    }, 100);
  
    // Add hover effect
    logoWrapper.addEventListener('mouseenter', () => {
      brandText.style.color = '#007bff';
      slogan.style.color = '#007bff';
    });
  
    logoWrapper.addEventListener('mouseleave', () => {
      brandText.style.color = '#333';
      slogan.style.color = '#666';
    });

});