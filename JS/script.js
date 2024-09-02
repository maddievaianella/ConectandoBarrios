// Selecciona el botón y el formulario
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// 
submitBtn.addEventListener('click', function() {
    // "Envía" 
    form.reset();
    
    // Mensaje Alert
    alert('Gracias por enviarnos tu mensaje');
});