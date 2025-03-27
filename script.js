// Animasi Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
