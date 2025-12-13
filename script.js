// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.observe-me').forEach(el => {
    observer.observe(el);
});

// WhatsApp button floating
const floatingWhatsApp = document.createElement('div');
floatingWhatsApp.className = 'fixed bottom-8 right-8 z-50';
floatingWhatsApp.innerHTML = `
    <a href="https://wa.me/7987108907" class="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl pulse-effect">
        <i data-feather="message-circle" class="w-8 h-8"></i>
    </a>
`;
document.body.appendChild(floatingWhatsApp);
feather.replace();
