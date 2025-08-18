// Mouse tracking for dynamic background across entire page
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
    
    // Move stars based on mouse position
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.02;
        const xOffset = (e.clientX - window.innerWidth / 2) * speed;
        const yOffset = (e.clientY - window.innerHeight / 2) * speed;
        
        star.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Create stars
function createStars() {
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
        
        star.className = `star ${size}`;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        document.body.appendChild(star);
    }
    
    // Create symmetrical star patterns
    createSymmetricalStars();
}

// Create perfectly symmetrical star patterns
function createSymmetricalStars() {
    // Create 8-pointed star pattern around the center
    const centerX = 50;
    const centerY = 50;
    const radius = 30;
    
    for (let i = 0; i < 8; i++) {
        const angle = (i * 45) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        const star = document.createElement('div');
        star.className = 'star large symmetrical';
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.animationDelay = (i * 0.5) + 's';
        
        document.body.appendChild(star);
    }
    
    // Create symmetrical star clusters in corners
    const cornerPositions = [
        [20, 20], [80, 20], [20, 80], [80, 80]
    ];
    
    cornerPositions.forEach((pos, index) => {
        for (let i = 0; i < 4; i++) {
            const star = document.createElement('div');
            star.className = 'star medium symmetrical';
            star.style.left = (pos[0] + (i - 1.5) * 5) + '%';
            star.style.top = (pos[1] + (i - 1.5) * 5) + '%';
            star.style.animationDelay = (index * 1 + i * 0.25) + 's';
            
            document.body.appendChild(star);
        }
    });
}

// Create cosmic dust
function createCosmicDust() {
    const dustCount = 50;
    
    for (let i = 0; i < dustCount; i++) {
        const dust = document.createElement('div');
        dust.className = 'cosmic-dust';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.animationDelay = Math.random() * 15 + 's';
        dust.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        document.body.appendChild(dust);
    }
    
    // Create symmetrical dust patterns
    createSymmetricalDust();
}

// Create symmetrical dust patterns
function createSymmetricalDust() {
    // Create dust in symmetrical quadrants
    const quadrants = [
        [25, 25], [75, 25], [25, 75], [75, 75]
    ];
    
    quadrants.forEach((pos, index) => {
        for (let i = 0; i < 6; i++) {
            const dust = document.createElement('div');
            dust.className = 'cosmic-dust symmetrical';
            
            // Create circular pattern around each quadrant center
            const angle = (i * 60) * (Math.PI / 180);
            const radius = 15;
            const x = pos[0] + radius * Math.cos(angle);
            const y = pos[1] + radius * Math.sin(angle);
            
            dust.style.left = x + '%';
            dust.style.top = y + '%';
            dust.style.animationDelay = (index * 5 + i * 0.5) + 's';
            
            document.body.appendChild(dust);
        }
    });
}

// Create floating asteroids
function createAsteroids() {
    const asteroidCount = 20;
    
    for (let i = 0; i < asteroidCount; i++) {
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid';
        asteroid.style.left = Math.random() * 100 + '%';
        asteroid.style.top = Math.random() * 100 + '%';
        asteroid.style.animationDelay = Math.random() * 25 + 's';
        asteroid.style.animationDuration = (Math.random() * 15 + 25) + 's';
        
        document.body.appendChild(asteroid);
    }
    
    // Create symmetrical asteroid patterns
    createSymmetricalAsteroids();
}

// Create symmetrical asteroid patterns
function createSymmetricalAsteroids() {
    // Create asteroids in symmetrical cross pattern
    const crossPositions = [
        [50, 20], [50, 80], [20, 50], [80, 50]
    ];
    
    crossPositions.forEach((pos, index) => {
        for (let i = 0; i < 3; i++) {
            const asteroid = document.createElement('div');
            asteroid.className = 'asteroid symmetrical';
            
            // Create line pattern from center outward
            const offset = (i - 1) * 8;
            let x, y;
            
            if (index < 2) { // Vertical positions
                x = pos[0];
                y = pos[1] + offset;
            } else { // Horizontal positions
                x = pos[0] + offset;
                y = pos[1];
            }
            
            asteroid.style.left = x + '%';
            asteroid.style.top = y + '%';
            asteroid.style.animationDelay = (index * 7 + i * 2) + 's';
            
            document.body.appendChild(asteroid);
        }
    });
}

// Create galaxy spiral arms
function createGalaxyArms() {
    const galaxyArm = document.createElement('div');
    galaxyArm.className = 'galaxy-arm';
    document.body.appendChild(galaxyArm);
    
    // Create galaxy core
    const galaxyCore = document.createElement('div');
    galaxyCore.className = 'galaxy-core';
    document.body.appendChild(galaxyCore);
    
    // Create galaxy rings
    const galaxyRings = document.createElement('div');
    galaxyRings.className = 'galaxy-rings';
    document.body.appendChild(galaxyRings);
}

// Create cosmic clouds
function createCosmicClouds() {
    const cloudCount = 8;
    
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cosmic-cloud';
        cloud.style.left = Math.random() * 100 + '%';
        cloud.style.top = Math.random() * 100 + '%';
        cloud.style.animationDelay = Math.random() * 40 + 's';
        cloud.style.animationDuration = (Math.random() * 20 + 40) + 's';
        
        document.body.appendChild(cloud);
    }
    
    // Create symmetrical clouds for better balance
    const symmetricalCloudCount = 4;
    for (let i = 0; i < symmetricalCloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cosmic-cloud symmetrical';
        
        // Position clouds in symmetrical quadrants
        if (i === 0) {
            cloud.style.left = '20%';
            cloud.style.top = '20%';
        } else if (i === 1) {
            cloud.style.left = '70%';
            cloud.style.top = '20%';
        } else if (i === 2) {
            cloud.style.left = '20%';
            cloud.style.top = '70%';
        } else {
            cloud.style.left = '70%';
            cloud.style.top = '70%';
        }
        
        cloud.style.animationDelay = (i * 15) + 's';
        cloud.style.animationDuration = '60s';
        
        document.body.appendChild(cloud);
    }
}

// Create shooting stars
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight * 0.3);
    
    shootingStar.style.left = startX + 'px';
    shootingStar.style.top = startY + 'px';
    
    document.body.appendChild(shootingStar);
    
    // Remove after animation
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 2000);
}

// Create symmetrical shooting stars
function createSymmetricalShootingStars() {
    // Create shooting stars from all four corners
    const corners = [
        [0, 0], [window.innerWidth, 0], [0, window.innerHeight * 0.3], [window.innerWidth, window.innerHeight * 0.3]
    ];
    
    corners.forEach((pos, index) => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        shootingStar.style.left = pos[0] + 'px';
        shootingStar.style.top = pos[1] + 'px';
        
        document.body.appendChild(shootingStar);
        
        // Remove after animation
        setTimeout(() => {
            if (shootingStar.parentNode) {
                shootingStar.parentNode.removeChild(shootingStar);
            }
        }, 2000);
    });
}

// Initialize stars and shooting stars
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createCosmicDust();
    createAsteroids();
    createGalaxyArms();
    createCosmicClouds();
    
    // Create shooting stars periodically
    setInterval(createShootingStar, 3000);
    
    // Create symmetrical shooting stars every 8 seconds
    setInterval(createSymmetricalShootingStars, 8000);
});



// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add loading animation for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    skillObserver.observe(item);
});

// Back to top button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for back to top button
backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = '#1d4ed8';
});

backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#2563eb';
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
        font-weight: 600;
    }
    
    .back-to-top:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);
