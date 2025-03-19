// Mostrar/ocultar proyectos al hacer clic en la flecha
document.getElementById('flecha').addEventListener('click', function() {
    const proyectosGrid = document.getElementById('proyectos-grid');
    const flecha = document.getElementById('flecha');

    if (proyectosGrid.style.display === 'none' || proyectosGrid.style.display === '') {
        proyectosGrid.style.display = 'flex';
        flecha.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else {
        proyectosGrid.style.display = 'none';
        flecha.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
});

// Mostrar/ocultar servicios al hacer clic en la flecha
function toggleServicio(id) {
    const contenido = document.getElementById(`servicio-${id}`);
    const flecha = document.querySelector(`#servicio-${id}`).previousElementSibling.querySelector('i');

    if (contenido.classList.contains('mostrar')) {
        contenido.classList.remove('mostrar');
        flecha.style.transform = 'rotate(0deg)';
    } else {
        contenido.classList.add('mostrar');
        flecha.style.transform = 'rotate(90deg)';
    }
}

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
});
