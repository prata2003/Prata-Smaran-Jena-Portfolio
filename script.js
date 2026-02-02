
document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.animationPlayState = 'paused';
        observer.observe(section);
    });

    
   // Initialize EmailJS with your Public Key
emailjs.init('uw0bmbW9cspKx2P2v'); // Replace with your actual Public Key

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send('service_v1ozrhs', 'template_xvhh16q', {
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        message: contactForm.message.value,
    })
    .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    });
});
    });