// Get a reference to the "Best Sellers" dropdown item and menu
const bestSellerDropdownItem = document.querySelector('.nav-item.dropdown .nav-link.dropdown-toggle');
const bestSellerDropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');

// Add a click event listener to the "Best Sellers" dropdown item
bestSellerDropdownItem.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the href attribute of the "Best Sellers" dropdown item
    const bestSellerHref = bestSellerDropdownItem.getAttribute('href');

    // Scroll to the target section with an offset
    scrollToSection(bestSellerHref, -50); // Adjust the offset as needed

    // Close the dropdown menu if it's open
    if (bestSellerDropdownMenu.classList.contains('show')) {
        bestSellerDropdownMenu.classList.remove('show');
    }
});

// Get a reference to the "Home" link
const homeLink = document.querySelector('a[href="#home"]');

// Get a reference to the "About Us" link within the home section
const aboutLinkHome = document.querySelector('section#home a[href="#about"]');
const aboutLink = document.querySelector('a[href="#about"]');

// Get a reference to the "Menu" link
const menuLink = document.querySelector('a[href="#menu"]');
const menuLinkMenu = document.querySelector('section#about a[href="#menu"]');

// Get a reference to the "Gallery" link
const galleryLink = document.querySelector('a[href="#gallery"]');

// Get a reference to the "Blog" link
const blogLink = document.querySelector('a[href="#blog"]');
const blogLinkMenu = document.querySelector('section#about a[href="#blog"]');

// Get a reference to the "Contact" link
const contactLink = document.querySelector('a[href="#contact"]');

// Get the height of the header to offset the scroll position
const headerHeight = document.querySelector('.header').offsetHeight;

// Function to handle smooth scrolling with an optional offset
function scrollToSection(sectionId, offset = 0) {
    const targetSection = document.querySelector(sectionId);
    const targetOffset = targetSection.offsetTop - headerHeight + offset;

    console.log("Target Section Offset:", targetOffset);

    window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
    });
}
// Add a click event listener to the "Home" link
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#home', -1300);
});

// Add a click event listener to the "About Us" link within the home section
aboutLinkHome.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#about', 200); // Adjust the offset as needed
});

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#about', 80); // Adjust the offset as needed
});

// Add a click event listener to the "Menu" link
menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#menu', 50); // Adjust the offset as needed
});

menuLinkMenu.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#menu', 50); // Adjust the offset as needed
});

// Add a click event listener to the "Gallery" link
galleryLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#gallery', 40); // Adjust the offset as needed
});

// Add a click event listener to the "Blog" link
blogLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#blog', 50); // Adjust the offset as needed
});

blogLinkMenu.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#blog', 50); // Adjust the offset as needed
});

// Add a click event listener to the "Contact" link
contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection('#contact', 60); // Adjust the offset as needed
});

function redirectToFacebook() {
    // Replace the URL below with the actual URL you want to redirect to
    window.location.href = 'https://www.facebook.com/profile.php?id=100086005815983&mibextid=ZbWKwL';
}