const toggleBtn = document.getElementById('menu-toggle');
        const burgerMenu = document.getElementById('burger-menu');

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerMenu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!burgerMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                burgerMenu.classList.remove('active');
                toggleBtn.classList.remove('active');
            }
        });