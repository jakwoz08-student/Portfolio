const sections = document.querySelectorAll("main > section");

sections.forEach(function(section) {

    section.addEventListener("mouseenter", function() {
        section.style.transform = "scale(1.02)";
        section.style.backgroundColor = "#0f382b";
        section.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)";
    });

    section.addEventListener("mouseleave", function() {
        section.style.transform = "scale(1)";
        section.style.backgroundColor = "#0b2b21";
        section.style.boxShadow = "none";
    });

});
