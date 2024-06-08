const images = document.querySelectorAll('.hero-image');
let current = 0;

function changeImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

// Initial call to ensure it's working upon load
changeImage();
// Set the interval
setInterval(changeImage, 5000);


//animations
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Remove 'visible' momentarily to reset the animation, then re-add
            if (entry.isIntersecting) {
                entry.target.classList.remove('visible');  // Remove the class to reset animation
                setTimeout(() => {
                    entry.target.classList.add('visible'); // Add class again to trigger animation
                }, 50); // Short delay to reset the style
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3 });

    // Observing all elements with the class '.animated-container'
    const containers = document.querySelectorAll('.animated-container');
    containers.forEach(container => observer.observe(container));
});

//sidebar






