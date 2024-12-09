document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen tombol dan bagian yang terkait
    const showMoreBtn = document.getElementById("show-more-btn");
    const detailsSection = document.getElementById("details");

    const showPhotosBtn = document.getElementById("show-photos-btn");
    const photoGallery = document.getElementById("photo-gallery");

    const showHistoryBtn = document.getElementById("show-history-btn");
    const historySection = document.getElementById("history");

    // Event listener untuk tombol "Tampilkan Profil"
    showMoreBtn.addEventListener("click", () => {
        if (detailsSection.classList.contains("hidden")) {
            detailsSection.classList.remove("hidden");
            showMoreBtn.textContent = "Sembunyikan Profil";
        } else {
            detailsSection.classList.add("hidden");
            showMoreBtn.textContent = "Tampilkan Profil";
        }
    });

    // Event listener untuk tombol "Foto-foto saat magang"
    showPhotosBtn.addEventListener("click", () => {
        if (photoGallery.classList.contains("hidden")) {
            photoGallery.classList.remove("hidden");
            showPhotosBtn.textContent = "Sembunyikan Foto";
        } else {
            photoGallery.classList.add("hidden");
            showPhotosBtn.textContent = "Foto-foto saat magang";
        }
    });

    // Event listener untuk tombol "Sejarah Telkom"
    showHistoryBtn.addEventListener("click", () => {
        if (historySection.classList.contains("hidden")) {
            historySection.classList.remove("hidden");
            showHistoryBtn.textContent = "Sembunyikan Sejarah Telkom";
        } else {
            historySection.classList.add("hidden");
            showHistoryBtn.textContent = "Sejarah Telkom";
        }
    });
});
// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi Saat Scroll
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1
};
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
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', () => {
        link.style.transform = 'scale(1.1)';
        setTimeout(() => {
            link.style.transform = '';
        }, 200);
    });
});
