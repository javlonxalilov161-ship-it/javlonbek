// Main JavaScript file for LuxuryTech Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation for elements when they come into view
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && subject && message) {
                // In a real application, you would send this data to a server
                // For now, we'll just show an alert
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all fields.', 'error');
            }
        });
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add animation to feature cards on hover
    const featureCards = document.querySelectorAll('.group');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('form[maxlength="0"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // Add scroll to top button functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'fixed bottom-6 right-6 w-12 h-12 rounded-full bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-400/30 z-50 opacity-0 transition-opacity duration-300';
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.opacity = '0';
        }
    });
    
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Initialize advanced features
    initAdvancedFeatures();
    
    // Initialize new advanced features
    initInteractiveDataVisualizations();
    initTechEvolutionChart();
    initThemeSwitcher();
    initAdvancedScrollEffects();
    
    // Initialize advanced portfolio features
    initAdvancedPortfolio();
    
    // Initialize advanced services features
    initAdvancedServices();
    
    // Initialize advanced contact features
    initAdvancedContact();
});

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Window resize handling
window.addEventListener('resize', debounce(function() {
    // Reinitialize any components that need to be responsive
    console.log('Window resized');
}, 250));

// Advanced Features Implementation
function initAdvancedFeatures() {
    // Initialize interactive portfolio filtering
    initPortfolioFiltering();
    
    // Initialize animated counters
    initAnimatedCounters();
    
    // Initialize interactive testimonials carousel
    initTestimonialsCarousel();
    
    // Initialize dynamic background effects
    initDynamicBackground();
    
    // Initialize advanced form validation
    initAdvancedFormValidation();
    
    // Initialize interactive map (placeholder)
    initInteractiveMap();
}

// Portfolio filtering functionality
function initPortfolioFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('bg-cyan-400', 'text-black'));
                filterButtons.forEach(btn => btn.classList.add('border', 'border-slate-700'));
                
                // Add active class to clicked button
                this.classList.remove('border', 'border-slate-700');
                this.classList.add('bg-cyan-400', 'text-black');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Animated counters for stats section
function initAnimatedCounters() {
    const counterElements = document.querySelectorAll('.counter');
    
    if (counterElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps
                    
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            clearInterval(timer);
                            current = target;
                        }
                        counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
                    }, 16);
                    
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counterElements.forEach(counter => {
            observer.observe(counter);
        });
    }
}

// Testimonials carousel
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (carousel && slides.length > 0) {
        let currentSlide = 0;
        const slideCount = slides.length;
        
        // Hide all slides except the first one
        slides.forEach((slide, index) => {
            slide.style.display = index === 0 ? 'block' : 'none';
        });
        
        // Function to show a specific slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
                slide.style.opacity = i === index ? '1' : '0';
                slide.style.transition = 'opacity 0.5s ease';
            });
            
            // Update active dot
            if (dots.length > 0) {
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('bg-cyan-400');
                        dot.classList.remove('bg-slate-700');
                    } else {
                        dot.classList.remove('bg-cyan-400');
                        dot.classList.add('bg-slate-700');
                    }
                });
            }
            
            currentSlide = index;
        }
        
        // Auto-advance slides
        setInterval(() => {
            const nextSlide = (currentSlide + 1) % slideCount;
            showSlide(nextSlide);
        }, 5000);
        
        // Dot navigation
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
        }
    }
}

// Dynamic background effects
function initDynamicBackground() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Create canvas for dynamic background
        const canvas = document.createElement('canvas');
        canvas.className = 'absolute top-0 left-0 w-full h-full z-0';
        canvas.style.opacity = '0.1';
        heroSection.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
        
        // Create particles
        const particles = [];
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#22d3ee';
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        });
    }
}

// Advanced form validation
function initAdvancedFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Real-time validation
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('invalid')) {
                    validateField(this);
                }
            });
        });
    });
}

// Field validation function
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous validation classes
    field.classList.remove('invalid', 'valid');
    
    // Validation based on field type
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.id === 'name' && value.length < 2) {
        isValid = false;
        errorMessage = 'Name must be at least 2 characters';
    } else if (field.id === 'message' && value.length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters';
    }
    
    // Apply validation styling
    if (!isValid) {
        field.classList.add('invalid');
        // Create or update error message
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message text-red-500 text-sm mt-1';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    } else {
        field.classList.add('valid');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    return isValid;
}

// Interactive map initialization (placeholder)
function initInteractiveMap() {
    const mapContainer = document.querySelector('.map-container');
    
    if (mapContainer) {
        // In a real implementation, you would initialize a map library like Leaflet or Google Maps
        // For this example, we'll just add some interactive elements
        
        mapContainer.addEventListener('click', function(e) {
            // Create a ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'absolute rounded-full bg-cyan-400 opacity-30';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.left = (e.offsetX - 10) + 'px';
            ripple.style.top = (e.offsetY - 10) + 'px';
            ripple.style.transform = 'scale(0)';
            ripple.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            
            mapContainer.appendChild(ripple);
            
            // Animate ripple
            setTimeout(() => {
                ripple.style.transform = 'scale(10)';
                ripple.style.opacity = '0';
            }, 10);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-cyan-500'
    } text-white`;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialize interactive data visualizations
function initInteractiveDataVisualizations() {
    // Performance chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        const performanceChart = performanceCtx.getContext('2d');
        drawRadialChart(performanceChart, 96, '#22d3ee');
    }
    
    // Innovation chart
    const innovationCtx = document.getElementById('innovationChart');
    if (innovationCtx) {
        const innovationChart = innovationCtx.getContext('2d');
        drawRadialChart(innovationChart, 87, '#22d3ee');
    }
    
    // Quality chart
    const qualityCtx = document.getElementById('qualityChart');
    if (qualityCtx) {
        const qualityChart = qualityCtx.getContext('2d');
        drawRadialChart(qualityChart, 94, '#22d3ee');
    }
    
    // Growth chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        const growthChart = growthCtx.getContext('2d');
        drawRadialChart(growthChart, 78, '#22d3ee');
    }
}

// Draw radial chart
function drawRadialChart(ctx, percentage, color) {
    const x = ctx.canvas.width / 2;
    const y = ctx.canvas.height / 2;
    const radius = Math.min(x, y) - 5;
    
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw background circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.lineWidth = 8;
    ctx.stroke();
    
    // Draw percentage arc
    const endAngle = (percentage / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(x, y, radius, -Math.PI / 2, endAngle - Math.PI / 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.stroke();
    
    // Draw center text
    ctx.font = 'bold 12px PT Mono';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(percentage + '%', x, y);
}

// Initialize technology evolution chart
function initTechEvolutionChart() {
    const techChartCtx = document.getElementById('techEvolutionChart');
    if (techChartCtx) {
        const techChart = techChartCtx.getContext('2d');
        drawTechEvolutionChart(techChart);
    }
    
    // Add filter functionality
    const techFilters = document.querySelectorAll('.tech-filter');
    techFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            techFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            // In a real implementation, you would update the chart based on the filter
            console.log('Filtering by:', this.getAttribute('data-filter'));
        });
    });
}

// Draw technology evolution chart
function drawTechEvolutionChart(ctx) {
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Chart dimensions
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const padding = 40;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
        const x = padding + (i * (width - 2 * padding) / 10);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
        const y = padding + (i * (height - 2 * padding) / 10);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
    ctx.lineWidth = 2;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();
    
    // Draw axis labels
    ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
    ctx.font = '12px PT Mono';
    ctx.textAlign = 'center';
    
    // X axis labels (years)
    for (let i = 0; i <= 10; i++) {
        const x = padding + (i * (width - 2 * padding) / 10);
        ctx.fillText(2013 + i, x, height - padding + 20);
    }
    
    // Y axis labels (values)
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = 0; i <= 10; i++) {
        const y = height - padding - (i * (height - 2 * padding) / 10);
        ctx.fillText(i * 10, padding - 10, y);
    }
    
    // Draw data lines
    const dataPoints = [];
    for (let i = 0; i <= 10; i++) {
        dataPoints.push({
            x: padding + (i * (width - 2 * padding) / 10),
            y: height - padding - (Math.random() * (height - 2 * padding))
        });
    }
    
    // AI data (red)
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
    for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(dataPoints[i].x, dataPoints[i].y);
    }
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Automotive data (blue)
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
    for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(dataPoints[i].x, dataPoints[i].y + (Math.random() * 20 - 10));
    }
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Design data (green)
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
    for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(dataPoints[i].x, dataPoints[i].y + (Math.random() * 20 - 10));
    }
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw legend
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ef4444';
    ctx.fillText('AI Development', width - padding - 120, padding + 20);
    
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Automotive Tech', width - padding - 120, padding + 40);
    
    ctx.fillStyle = '#10b981';
    ctx.fillText('Design Innovation', width - padding - 120, padding + 60);
}

// Theme switcher functionality
function initThemeSwitcher() {
    // Create theme switcher button
    const themeSwitcher = document.createElement('button');
    themeSwitcher.innerHTML = '🌓';
    themeSwitcher.className = 'fixed bottom-6 left-6 w-12 h-12 rounded-full bg-slate-800 text-white font-bold shadow-lg z-50 flex items-center justify-center';
    themeSwitcher.setAttribute('aria-label', 'Switch theme');
    document.body.appendChild(themeSwitcher);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('luxuryTechTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Toggle theme on click
    themeSwitcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        // Save preference
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('luxuryTechTheme', 'dark');
        } else {
            localStorage.setItem('luxuryTechTheme', 'light');
        }
    });
}

// Advanced scroll effects
function initAdvancedScrollEffects() {
    // Add scroll-based animations to interactive cards
    const interactiveCards = document.querySelectorAll('.interactive-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // Add parallax effect to background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
}

// Initialize advanced portfolio features
function initAdvancedPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const searchInput = document.getElementById('portfolio-search');
    const sortSelect = document.getElementById('sort-options');
    const gridToggle = document.getElementById('grid-toggle');
    const loadMoreBtn = document.getElementById('load-more');
    
    if (portfolioGrid) {
        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                filterPortfolio();
            }, 300));
        }
        
        // Sort functionality
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                sortPortfolio();
            });
        }
        
        // Grid toggle functionality
        if (gridToggle) {
            gridToggle.addEventListener('click', function() {
                portfolioGrid.classList.toggle('grid-cols-1');
                portfolioGrid.classList.toggle('md:grid-cols-2');
                portfolioGrid.classList.toggle('lg:grid-cols-3');
                
                // Change icon based on view
                const icon = this.querySelector('svg');
                if (portfolioGrid.classList.contains('grid-cols-1')) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
                } else {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />';
                }
            });
        }
        
        // Load more functionality
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                loadMoreProjects();
            });
        }
    }
}

// Filter portfolio items based on search input
function filterPortfolio() {
    const searchInput = document.getElementById('portfolio-search');
    const filterValue = searchInput.value.toLowerCase();
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        const itemCategory = item.getAttribute('data-category').toLowerCase();
        
        if (itemName.includes(filterValue) || itemCategory.includes(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Sort portfolio items
function sortPortfolio() {
    const sortValue = document.getElementById('sort-options').value;
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
    
    // Sort items based on selected option
    portfolioItems.sort((a, b) => {
        switch (sortValue) {
            case 'newest':
                return 0; // In a real implementation, you would sort by date
            case 'oldest':
                return 0; // In a real implementation, you would sort by date
            case 'name':
                const nameA = a.getAttribute('data-name');
                const nameB = b.getAttribute('data-name');
                return nameA.localeCompare(nameB);
            default:
                return 0;
        }
    });
    
    // Re-append sorted items to the grid
    portfolioItems.forEach(item => {
        portfolioGrid.appendChild(item);
    });
}

// Load more projects
function loadMoreProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const loadMoreBtn = document.getElementById('load-more');
    
    // Show loading state
    loadMoreBtn.innerHTML = 'Loading...';
    loadMoreBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        // Create new project items
        const newProjects = [
            {
                name: "AI Predictive Maintenance",
                category: "technology",
                description: "Machine learning algorithms for vehicle maintenance prediction",
                tags: ["AI", "Maintenance", "ML"]
            },
            {
                name: "Biometric Security System",
                category: "innovation",
                description: "Advanced biometric authentication for vehicle access",
                tags: ["Security", "Biometrics", "Innovation"]
            },
            {
                name: "Adaptive Suspension Tech",
                category: "automotive",
                description: "Real-time suspension adjustment for optimal ride comfort",
                tags: ["Automotive", "Suspension", "Comfort"]
            }
        ];
        
        // Add new projects to the grid
        newProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'group portfolio-item';
            projectElement.setAttribute('data-category', project.category);
            projectElement.setAttribute('data-name', project.name);
            projectElement.innerHTML = `
                <div class="rounded-2xl overflow-hidden mb-4 border border-slate-800 group-hover:border-cyan-400 transition duration-300">
                    <div class="bg-gradient-to-br from-slate-800 to-slate-900 h-64 flex items-center justify-center">
                        <div class="bg-slate-700 border-2 border-dashed rounded-xl w-16 h-16"></div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-1">${project.name}</h3>
                <p class="text-slate-400 mb-3">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="text-xs bg-slate-800 px-2 py-1 rounded">${tag}</span>`).join('')}
                </div>
            `;
            portfolioGrid.appendChild(projectElement);
        });
        
        // Reset button
        loadMoreBtn.innerHTML = 'Load More Projects';
        loadMoreBtn.disabled = false;
        
        // Show notification
        showNotification('Loaded 3 more projects', 'success');
    }, 1000);
}

// Initialize advanced services features
function initAdvancedServices() {
    // Add 3D hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            const glowX = (x / rect.width) * 100;
            const glowY = (y / rect.height) * 100;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Add dynamic glow effect
            card.style.boxShadow = `0 10px 30px -5px rgba(34, 211, 238, 0.2), 
                                   0 0 20px -5px rgba(34, 211, 238, 0.1),
                                   inset ${glowX - 50}px ${glowY - 50}px 50px -30px rgba(34, 211, 238, 0.1)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Add animation to process steps when they come into view
    const processSteps = document.querySelectorAll('.process-step');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    processSteps.forEach(step => {
        step.style.opacity = 0;
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });
}

// Initialize advanced contact features
function initAdvancedContact() {
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('div');
        const icon = button.querySelector('svg');
        
        button.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('div').classList.add('hidden');
                    otherItem.querySelector('svg').classList.remove('rotate-180');
                }
            });
            
            // Toggle current item
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
    
    // Enhanced form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            const errorMessages = contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.classList.add('hidden');
            });
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            const checkbox = contactForm.querySelector('input[type="checkbox"]');
            
            let isValid = true;
            
            // Validate name
            if (!name) {
                showError('name', 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate subject
            if (!subject) {
                showError('subject', 'Please enter a subject');
                isValid = false;
            }
            
            // Validate message
            if (!message) {
                showError('message', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            // Validate checkbox
            if (!checkbox.checked) {
                showNotification('Please agree to the Privacy Policy', 'error');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, simulate submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    showNotification('Thank you for your message! We will get back to you soon.', 'success');
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 1500);
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateFieldOnBlur(this);
            });
        });
    }
    
    // Enhanced map interactivity
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.addEventListener('mousemove', function(e) {
            const rect = mapContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create a subtle glow effect that follows the cursor
            mapContainer.style.boxShadow = `inset ${x - rect.width/2}px ${y - rect.height/2}px 100px -30px rgba(34, 211, 238, 0.1)`;
        });
        
        mapContainer.addEventListener('mouseleave', function() {
            mapContainer.style.boxShadow = 'none';
        });
    }
}

// Show error message for a specific field
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        field.classList.add('border-red-500');
    }
}

// Validate field on blur
function validateFieldOnBlur(field) {
    const value = field.value.trim();
    const errorElement = field.parentNode.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.classList.add('hidden');
        field.classList.remove('border-red-500');
    }
    
    if (field.hasAttribute('required') && !value) {
        showError(field.id, 'This field is required');
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(field.id, 'Please enter a valid email address');
        }
    } else if (field.id === 'message' && value.length > 0 && value.length < 10) {
        showError(field.id, 'Message must be at least 10 characters');
    }
}

