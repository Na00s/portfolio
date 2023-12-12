document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        });
    });
});
