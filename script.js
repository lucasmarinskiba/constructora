// Mostrar/ocultar proyectos al hacer clic en la flecha
document.getElementById('flecha').addEventListener('click', function() {
    const proyectosGrid = document.getElementById('proyectos-grid');
    const flecha = document.getElementById('flecha');

    if (proyectosGrid.style.display === 'none' || proyectosGrid.style.display === '') {
        proyectosGrid.style.display = 'flex'; // Mostrar proyectos
        flecha.innerHTML = '<i class="fas fa-chevron-up"></i>'; // Cambiar flecha a arriba
    } else {
        proyectosGrid.style.display = 'none'; // Ocultar proyectos
        flecha.innerHTML = '<i class="fas fa-chevron-down"></i>'; // Cambiar flecha a abajo
    }
});

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
});
