

 // Initialize AOS animations
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCount = document.querySelector('.cart-count');
        let count = 0;

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                count++;
                cartCount.textContent = count;
                
                // Animation for button click
                button.textContent = 'Added!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '#ffd814';
                }, 1000);
            });
        });

        // Responsive menu toggle (would need more implementation for full mobile menu)
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-label', 'Open menu');
        
        const headerContainer = document.querySelector('.header-container');
        if (window.innerWidth <= 480) {
            headerContainer.insertBefore(mobileMenuBtn, headerContainer.firstChild);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 480) {
                if (!document.querySelector('.mobile-menu-btn')) {
                    headerContainer.insertBefore(mobileMenuBtn, headerContainer.firstChild);
                }
            } else {
                const existingBtn = document.querySelector('.mobile-menu-btn');
                if (existingBtn) {
                    existingBtn.remove();
                }
            }
        });
