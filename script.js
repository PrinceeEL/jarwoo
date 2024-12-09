document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle Burger Menu
    function toggleMenu() {
        const menu = document.querySelector('.navbar ul');
        const burger = document.querySelector('.burger-menu');
        menu.classList.toggle('show');
        burger.classList.toggle('open');
    }
});


    // Toggle visibility of sections on click
    const showMoreBtn = document.getElementById("show-more-btn");
    const detailsSection = document.getElementById("details");

    const showPhotosBtn = document.getElementById("show-photos-btn");
    const photoGallery = document.getElementById("photo-gallery");

    const showHistoryBtn = document.getElementById("show-history-btn");
    const historySection = document.getElementById("history");

    showMoreBtn.addEventListener("click", () => {
        if (detailsSection.classList.contains("hidden")) {
            detailsSection.classList.remove("hidden");
            showMoreBtn.textContent = "Sembunyikan Profil";
        } else {
            detailsSection.classList.add("hidden");
            showMoreBtn.textContent = "Tampilkan Profil";
        }
    });

    showPhotosBtn.addEventListener("click", () => {
        if (photoGallery.classList.contains("hidden")) {
            photoGallery.classList.remove("hidden");
            showPhotosBtn.textContent = "Sembunyikan Foto";
        } else {
            photoGallery.classList.add("hidden");
            showPhotosBtn.textContent = "Foto-foto saat magang";
        }
    });

    showHistoryBtn.addEventListener("click", () => {
        if (historySection.classList.contains("hidden")) {
            historySection.classList.remove("hidden");
            showHistoryBtn.textContent = "Sembunyikan Sejarah Telkom";
        } else {
            historySection.classList.add("hidden");
            showHistoryBtn.textContent = "Sejarah Telkom";
        }
    });

    // Intersection Observer for Animations
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    const burger = document.querySelector('.burger-menu');
    menu.classList.toggle('show');
    burger.classList.toggle('open');
}
