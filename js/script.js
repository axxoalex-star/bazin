/**
 * Bazinul de Înot Bacău - Interactive Features
 * Accordion, smooth scroll, mobile menu, header effects
 */

(function() {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const backToTopBtn = document.getElementById('backToTop');
    const accordionHeaders = document.querySelectorAll('.accordion__header');

    // ========================================
    // Sticky Header with Glassmorphism
    // ========================================
    function handleScroll() {
        if (window.scrollY >= 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show/hide back to top button
        if (window.scrollY >= 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // Initial check
    handleScroll();

    // Listen to scroll event with throttle for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleScroll();
                scrollTimeout = null;
            }, 10);
        }
    });

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        });
    }

    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('show');
            document.body.style.overflow = ''; // Restore body scroll
        });
    }

    // Close menu when clicking on nav links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    navMenu.addEventListener('click', function(e) {
        if (e.target === navMenu) {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // ========================================
    // Smooth Scrolling for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Accordion Functionality
    // ========================================
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = item.querySelector('.accordion__content');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other accordions (optional - remove if you want multiple open)
            accordionHeaders.forEach(function(otherHeader) {
                if (otherHeader !== header) {
                    const otherItem = otherHeader.parentElement;
                    const otherContent = otherItem.querySelector('.accordion__content');
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherContent.style.maxHeight = null;
                }
            });

            // Toggle current accordion
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });

        // Set initial aria-expanded state
        header.setAttribute('aria-expanded', 'false');
    });

    // ========================================
    // Back to Top Button
    // ========================================
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Form Validation Enhancement
    // ========================================
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(function(input) {
            // Real-time validation feedback
            input.addEventListener('blur', function() {
                validateField(this);
            });

            // Remove error state on input
            input.addEventListener('input', function() {
                if (this.classList.contains('form__input--error')) {
                    this.classList.remove('form__input--error');
                }
            });
        });

        // Form submission validation
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            inputs.forEach(function(input) {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
                
                // Scroll to first error
                const firstError = contactForm.querySelector('.form__input--error');
                if (firstError) {
                    const headerHeight = header.offsetHeight;
                    const errorPosition = firstError.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                    
                    window.scrollTo({
                        top: errorPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');
        let isValid = true;

        if (required && !value) {
            isValid = false;
        }

        if (value && type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
            }
        }

        if (value && type === 'tel') {
            const phoneRegex = /^[0-9\s\+\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
            }
        }

        if (value && field.tagName === 'TEXTAREA' && value.length < 10) {
            isValid = false;
        }

        if (value && type === 'text' && value.length < 2) {
            isValid = false;
        }

        // Add or remove error class
        if (!isValid) {
            field.classList.add('form__input--error');
        } else {
            field.classList.remove('form__input--error');
        }

        return isValid;
    }

    // ========================================
    // Scroll to Contact Form if There's an Error or Success
    // ========================================
    window.addEventListener('load', function() {
        const alert = document.querySelector('.alert');
        if (alert) {
            setTimeout(function() {
                const headerHeight = header.offsetHeight;
                const alertPosition = alert.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: alertPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });

    // ========================================
    // Active Navigation Link Highlighting
    // ========================================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        const headerHeight = header.offsetHeight;

        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav__link[href="#' + sectionId + '"]');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    // Remove active class from all links
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                    });
                    // Add active class to current link
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial check

    // ========================================
    // Animation on Scroll (Simple Fade In)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ========================================
    // Pricing Card Hover Effects Enhancement
    // ========================================
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ========================================
    // Mobile Device Detection for Call Button
    // ========================================
    const mobileCallBtn = document.querySelector('.mobile-call-btn');
    
    if (mobileCallBtn) {
        // Hide call button on desktop if phone can't be called
        if (window.innerWidth > 768 && !('ontouchstart' in window)) {
            // Keep it visible but you can hide it on pure desktop if needed
            // mobileCallBtn.style.display = 'none';
        }
    }

    // ========================================
    // Lazy Loading Images (if any are added)
    // ========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(function(img) {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ========================================
    // Handle Window Resize
    // ========================================
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 992) {
                navMenu.classList.remove('show');
                document.body.style.overflow = '';
            }

            // Recalculate accordion heights if open
            accordionHeaders.forEach(function(header) {
                if (header.getAttribute('aria-expanded') === 'true') {
                    const content = header.parentElement.querySelector('.accordion__content');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }, 250);
    });

    // ========================================
    // Keyboard Navigation Enhancement
    // ========================================
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
            navToggle.focus();
        }

        // Toggle accordion with Enter or Space
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('accordion__header')) {
            e.preventDefault();
            e.target.click();
        }
    });

    // ========================================
    // Print Optimization
    // ========================================
    window.addEventListener('beforeprint', function() {
        // Expand all accordions for printing
        accordionHeaders.forEach(function(header) {
            header.setAttribute('aria-expanded', 'true');
            const content = header.parentElement.querySelector('.accordion__content');
            content.style.maxHeight = 'none';
        });
    });

    window.addEventListener('afterprint', function() {
        // Collapse all accordions after printing
        accordionHeaders.forEach(function(header) {
            header.setAttribute('aria-expanded', 'false');
            const content = header.parentElement.querySelector('.accordion__content');
            content.style.maxHeight = null;
        });
    });

    // ========================================
    // Performance Monitoring (Optional - Development Only)
    // ========================================
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page Load Time: ' + pageLoadTime + 'ms');
            }, 0);
        });
    }

    // ========================================
    // Initialize Everything
    // ========================================
    console.log('Bazinul de Înot Bacău - Website initialized successfully!');

})();
