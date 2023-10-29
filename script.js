
// Fungsi untuk menangani pergerakan scroll
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Menambahkan event listener ke setiap tautan navigasi
document.addEventListener("DOMContentLoaded", function () {
    var navigationLinks = document.querySelectorAll("nav a");
    
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var targetSectionId = link.getAttribute("href").substring(1);
            scrollToSection(targetSectionId);
        });
    });
});
