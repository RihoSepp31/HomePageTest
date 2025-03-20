document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300); // Lisab väikese viivituse, et sektsioonid ilmuksid ükshaaval
    });
});
