window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        // Adjust the threshold as needed
        navbar.classList.remove("navbar-fixed");
    } else {
        navbar.classList.add("navbar-fixed");
    }
});