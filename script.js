document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const closeIcon = document.querySelector('.nav-toggle .close-icon');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    closeIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Detiene la propagación del evento
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // 🚀 Agregar funcionalidad para enviar correo con EmailJS
    (function() {
        emailjs.init("uUrSD0vRCg0bfQ95X"); // Reemplaza con tu User ID de EmailJS
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue

        emailjs.send("service_hojw7tx", "template_k1cn6am", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }).then(function(response) {
            alert("¡Mensaje enviado con éxito!");
            document.getElementById("contactForm").reset(); // Limpiar formulario
        }, function(error) {
            alert("Hubo un error, inténtalo de nuevo.");
            console.log("Error:", error);
        });
    });

});

