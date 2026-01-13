// This makes clicking nav links scroll smoothly instead of jumping
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop the default jump
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Align to top
            });
        }
    });
});

// This watches when cards enter the viewport and fades them in

// Create an observer (a watcher for elements)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When element comes into view
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Make visible
            entry.target.style.transform = 'translateY(0)'; // Move to normal position
        }
    });
}, { 
    threshold: 0.1 // Trigger when 10% of element is visible
});

// Apply observer to all cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card); // Start watching this card
});