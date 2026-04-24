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
document.querySelectorAll('.card, .skill-chip, .tool-cmd, .personal-card').forEach(card => {
    observer.observe(card); // Start watching this card
});


(function () {
    const canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    canvas.setAttribute('id', 'blob-canvas');
    canvas.setAttribute('viewBox', '0 0 1200 900');
    canvas.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    canvas.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    canvas.innerHTML = `
        <defs>
            <filter id="b0"><feGaussianBlur stdDeviation="70"/></filter>
        </defs>

        <!-- top-left: purple -->
        <ellipse cx="100" cy="150" rx="380" ry="280" fill="#c670ff" opacity="0.22" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; 40,30; 10,60; 0,0" dur="18s" repeatCount="indefinite"/>
        </ellipse>

        <!-- top-right: pink -->
        <ellipse cx="1100" cy="100" rx="340" ry="260" fill="#ff9ec5" opacity="0.20" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; -30,20; -50,50; 0,0" dur="22s" repeatCount="indefinite"/>
        </ellipse>

        <!-- mid-left: rose -->
        <ellipse cx="200" cy="500" rx="300" ry="240" fill="#ef798a" opacity="0.16" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; 50,-20; 20,30; 0,0" dur="26s" repeatCount="indefinite"/>
        </ellipse>

        <!-- mid-right: lavender -->
        <ellipse cx="1050" cy="480" rx="360" ry="270" fill="#bf94ff" opacity="0.20" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; -40,30; -10,-40; 0,0" dur="20s" repeatCount="indefinite"/>
        </ellipse>

        <!-- center: soft pink -->
        <ellipse cx="580" cy="350" rx="280" ry="200" fill="#ffb8d1" opacity="0.15" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; 20,40; -30,10; 0,0" dur="30s" repeatCount="indefinite"/>
        </ellipse>

        <!-- bottom-left: purple -->
        <ellipse cx="150" cy="820" rx="320" ry="240" fill="#a970ff" opacity="0.18" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; 30,-30; 60,10; 0,0" dur="24s" repeatCount="indefinite"/>
        </ellipse>

        <!-- bottom-right: pink -->
        <ellipse cx="1050" cy="800" rx="300" ry="230" fill="#ff9ec5" opacity="0.18" filter="url(#b0)">
            <animateTransform attributeName="transform" type="translate"
                values="0,0; -20,-40; -50,20; 0,0" dur="28s" repeatCount="indefinite"/>
        </ellipse>
    `;

    document.body.insertBefore(canvas, document.body.firstChild);
})();