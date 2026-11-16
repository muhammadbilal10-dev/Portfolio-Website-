// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();