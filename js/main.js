// Hamburger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navCenter = document.querySelector('.navCenter');
    const navLinks = document.querySelectorAll('.navCenter .simpleSmall');
    
    // Toggle mobile menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navCenter.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
    
    // Close menu when clicking on links (mobile)
    function closeMenuOnLinkClick() {
        hamburger.classList.remove('active');
        navCenter.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Event Listeners
    hamburger.addEventListener('click', toggleMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenuOnLinkClick);
    });
    
    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(event) {
        const isClickInside = navCenter.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navCenter.classList.contains('active')) {
            closeMenuOnLinkClick();
        }
    });
});
