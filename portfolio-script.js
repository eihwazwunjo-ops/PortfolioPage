$(document).ready(function() {
    'use strict';
    
    // Global error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });
    
    // Error handling for image loading
    $('img').on('error', function() {
        console.log('Image failed to load:', this.src);
        $(this).attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+');
    });
    
    // Initialize the application
    init();
    
    function init() {
        setupSmoothScrolling();
        setupScrollAnimations();
        setupNavbarScroll();
        setupProgressBars();
        // setupLoadingScreen(); // Disabled to prevent infinite loading
        setupIntersectionObserver();
        setupProjectHover();
        setupResumeButton();
    }
    
    // Smooth Scrolling for Navigation
    function setupSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            
            const target = $(this.getAttribute('href'));
            if (target.length) {
                const offsetTop = target.offset().top - 80; // Account for fixed navbar
                
                $('html, body').animate({
                    scrollTop: offsetTop
                }, 800, 'swing');
            }
        });
    }
    
    // Scroll Animations
    function setupScrollAnimations() {
        const animatedElements = $('.fade-in, .slide-in-left, .slide-in-right');
        
        function checkAnimation() {
            animatedElements.each(function() {
                const element = $(this);
                const elementTop = element.offset().top;
                const elementBottom = elementTop + element.outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();
                
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    element.addClass('visible');
                }
            });
        }
        
        $(window).on('scroll', throttle(checkAnimation, 16));
        checkAnimation(); // Initial check
    }
    
    // Navbar Scroll Effect
    function setupNavbarScroll() {
        $(window).on('scroll', throttle(function() {
            const scrollTop = $(window).scrollTop();
            const navbar = $('.navbar');
            
            if (scrollTop > 100) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }
        }, 16));
    }
    
    // Progress Bars Animation
    function setupProgressBars() {
        const progressBars = $('.progress-fill');
        
        function animateProgressBars() {
            progressBars.each(function() {
                const bar = $(this);
                const targetWidth = bar.data('width');
                const elementTop = bar.offset().top;
                const elementBottom = elementTop + bar.outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();
                
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    if (!bar.hasClass('animated')) {
                        bar.addClass('animated');
                        bar.css('width', targetWidth);
                    }
                }
            });
        }
        
        $(window).on('scroll', throttle(animateProgressBars, 16));
        animateProgressBars(); // Initial check
    }
    
    // Loading Screen
    function setupLoadingScreen() {
        // Create loading screen
        const loadingScreen = $('<div class="loading"><div class="loading-spinner"></div></div>');
        $('body').prepend(loadingScreen);
        
        // Hide loading screen when page is loaded
        function hideLoadingScreen() {
            setTimeout(function() {
                $('.loading').addClass('hidden');
                setTimeout(function() {
                    $('.loading').remove();
                }, 500);
            }, 1000);
        }
        
        // Multiple fallback methods to ensure loading screen is hidden
        $(window).on('load', hideLoadingScreen);
        $(document).ready(function() {
            setTimeout(hideLoadingScreen, 2000); // Fallback after 2 seconds
        });
        
        // Additional fallback for slow connections
        setTimeout(hideLoadingScreen, 5000); // Force hide after 5 seconds
    }
    
    // Intersection Observer for Performance
    function setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            // Observe elements for animation
            $('.fade-in, .slide-in-left, .slide-in-right').each(function() {
                observer.observe(this);
            });
        }
    }
    
    // Project Hover Effects - Disabled
    function setupProjectHover() {
        // Hover effects disabled to prevent scaling
        // $('.project-item').hover(
        //     function() {
        //         $(this).addClass('hovered');
        //     },
        //     function() {
        //         $(this).removeClass('hovered');
        //     }
        // );
        
        // $('.archive-item').hover(
        //     function() {
        //         $(this).addClass('hovered');
        //     },
        //     function() {
        //         $(this).removeClass('hovered');
        //     }
        // );
    }
    
    // Resume Button Functionality
    function setupResumeButton() {
        $('.resume-btn').on('click', function() {
            // You can add functionality here to open a resume PDF or navigate to a resume page
            alert('이력서 다운로드 기능을 구현할 수 있습니다.');
            
            // Example: Open a PDF in a new tab
            // window.open('path/to/resume.pdf', '_blank');
        });
    }
    
    // Project Button Functionality
    function setupProjectButtons() {
        $('.project-buttons .btn').on('click', function(e) {
            e.preventDefault();
            const buttonText = $(this).text();
            
            if (buttonText === 'PC') {
                // Open project in new tab
                alert('PC 버전 프로젝트를 새 탭에서 열기');
                // window.open('path/to/project', '_blank');
            } else if (buttonText === '기존사이트') {
                // Open original site
                alert('기존 사이트를 새 탭에서 열기');
                // window.open('path/to/original-site', '_blank');
            }
        });
    }
    
    // Social Links Functionality
    function setupSocialLinks() {
        $('.social-link').on('click', function(e) {
            e.preventDefault();
            const platform = $(this).find('i').attr('class');
            
            let url = '';
            switch (platform) {
                case 'fab fa-github':
                    url = 'https://github.com/username';
                    break;
                case 'fab fa-linkedin':
                    url = 'https://linkedin.com/in/username';
                    break;
                case 'fab fa-instagram':
                    url = 'https://instagram.com/username';
                    break;
                default:
                    return;
            }
            
            window.open(url, '_blank');
        });
    }
    
    // Typing Effect for Hero Title
    function setupTypingEffect() {
        const heroTitle = $('.hero-title');
        const text = heroTitle.text();
        heroTitle.text('');
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroTitle.text(heroTitle.text() + text.charAt(i));
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Skill Counter Animation
    function setupSkillCounters() {
        const skillPercentages = $('.skill-percentage');
        
        function animateCounters() {
            skillPercentages.each(function() {
                const counter = $(this);
                const target = parseInt(counter.text());
                const elementTop = counter.offset().top;
                const elementBottom = elementTop + counter.outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();
                
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    if (!counter.hasClass('counted')) {
                        counter.addClass('counted');
                        animateCounter(counter, 0, target, 2000);
                    }
                }
            });
        }
        
        function animateCounter(element, start, end, duration) {
            const range = end - start;
            const increment = range / (duration / 16);
            let current = start;
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= end) {
                    current = end;
                    clearInterval(timer);
                }
                element.text(Math.floor(current) + '%');
            }, 16);
        }
        
        $(window).on('scroll', throttle(animateCounters, 16));
        animateCounters(); // Initial check
    }
    
    // Parallax Effect for Hero Section
    function setupParallaxEffect() {
        $(window).on('scroll', throttle(function() {
            const scrolled = $(window).scrollTop();
            const parallaxElements = $('.hero-section');
            
            parallaxElements.each(function() {
                const element = $(this);
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.css('transform', 'translateY(' + yPos + 'px)');
            });
        }, 16));
    }
    
    // Mobile Menu Toggle
    function setupMobileMenu() {
        // Create mobile menu toggle button
        const mobileToggle = $('<button class="mobile-menu-toggle"><i class="fas fa-bars"></i></button>');
        $('.navbar .container').prepend(mobileToggle);
        
        mobileToggle.on('click', function() {
            $(this).toggleClass('active');
            $('.navbar-nav').toggleClass('show');
        });
        
        // Close mobile menu when clicking on a link
        $('.navbar-nav .nav-link').on('click', function() {
            $('.navbar-nav').removeClass('show');
            $('.mobile-menu-toggle').removeClass('active');
        });
    }
    
    // Back to Top Button
    function setupBackToTop() {
        // Create back to top button
        const backToTop = $('<button class="back-to-top" title="Back to Top"><i class="fas fa-chevron-up"></i></button>');
        $('body').append(backToTop);
        
        // Show/hide button based on scroll position
        $(window).on('scroll', throttle(function() {
            if ($(window).scrollTop() > 300) {
                backToTop.addClass('visible');
            } else {
                backToTop.removeClass('visible');
            }
        }, 16));
        
        // Scroll to top when clicked
        backToTop.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        });
    }
    
    // Initialize additional features
    setupProjectButtons();
    setupSocialLinks();
    setupTypingEffect();
    setupSkillCounters();
    setupParallaxEffect();
    setupMobileMenu();
    setupBackToTop();
    
    // Add CSS for additional features
    const additionalCSS = `
        <style>
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.98) !important;
                box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            }
            
            /* .project-item.hovered .project-image img {
                transform: scale(1.05);
            }
            
            .archive-item.hovered img {
                transform: translateY(-10px);
            } */
            
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: #000000;
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
            }
            
            .back-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .back-to-top:hover {
                background: #333333;
                transform: translateY(-3px);
            }
            
            .mobile-menu-toggle {
                display: none;
                background: none;
                border: none;
                font-size: 24px;
                color: #000000;
                cursor: pointer;
                padding: 0.5rem;
            }
            
            .mobile-menu-toggle.active {
                color: #666666;
            }
            
            .progress-fill.animated {
                transition: width 2s ease-in-out;
            }
            
            .skill-percentage.counted {
                font-weight: 600;
            }
            
            @media (max-width: 992px) {
                .mobile-menu-toggle {
                    display: block;
                }
                
                .navbar-nav {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .navbar-nav.show {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
            }
            
            @media (max-width: 768px) {
                .back-to-top {
                    bottom: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                }
            }
        </style>
    `;
    
    $('head').append(additionalCSS);
    
    // Performance optimization: Throttle function
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Easing function for smooth scrolling
    $.easing.easeInOutCubic = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };
    
    // Console log for debugging
    console.log('Portfolio Website initialized successfully!');
    console.log('jQuery version:', $.fn.jquery);
    console.log('Bootstrap version:', typeof bootstrap !== 'undefined' ? 'Loaded' : 'Not loaded');
});

// Image Popup Function
function openImagePopup(imageSrc) {
    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'image-popup-overlay';
    popupOverlay.innerHTML = `
        <div class="image-popup-content">
            <span class="image-popup-close">&times;</span>
            <img src="${imageSrc}" alt="Popup Image" class="popup-image">
        </div>
    `;
    
    // Add to body
    document.body.appendChild(popupOverlay);
    
    // Close popup when clicking close button or overlay
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay || e.target.classList.contains('image-popup-close')) {
            document.body.removeChild(popupOverlay);
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contains(popupOverlay)) {
            document.body.removeChild(popupOverlay);
        }
    });
}

// Project Open Function
function openProject(projectPath) {
    window.open(projectPath, '_blank');
}

// Additional utility functions
window.PortfolioUtils = {
    // Debounce function for search and other input events
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },
    
    // Format date
    formatDate: function(date, locale = 'ko-KR') {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Smooth scroll to element
    scrollToElement: function(element, offset = 0) {
        const targetPosition = element.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },
    
    // Download resume function
    downloadResume: function() {
        // You can implement resume download functionality here
        const link = document.createElement('a');
        link.href = 'path/to/resume.pdf';
        link.download = '김혜림_이력서.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
