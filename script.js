// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle'); // Select the menu toggle icon
const nav = document.querySelector('nav'); // Select the navigation menu

menuToggle.addEventListener('click', () => {
    // Toggle the display of the navigation menu when the icon is clicked
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Scroll-triggered Animations
function revealElements() {
    const reveals = document.querySelectorAll('.fade-in'); // Select all elements with the 'fade-in' class

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight; // Get the height of the browser window
        const elementTop = reveals[i].getBoundingClientRect().top; // Get the top position of the element relative to the viewport
        const elementVisible = 150; // Define how many pixels before the element is considered "visible"

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active'); // Add the 'active' class to trigger the fade-in animation
        } else {
            reveals[i].classList.remove('active'); // Remove the 'active' class if the element is not visible
        }
    }
}

window.addEventListener('scroll', revealElements); // Call revealElements on scroll
window.addEventListener('load', revealElements);   // And on page load