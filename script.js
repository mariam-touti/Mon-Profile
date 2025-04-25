document.addEventListener('DOMContentLoaded', function() {
    // Get the offcanvas element
    const offcanvasNavbar = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close the offcanvas menu
            offcanvasNavbar.hide();
        });
    });
    
    // Prevent manual closing
    const closeButton = document.querySelector('.offcanvas-header .btn-close');
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    
    // Alternatively, you could completely remove the close button:
    // closeButton.style.display = 'none';
});