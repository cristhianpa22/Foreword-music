const perfil = document.getElementById('perfil');

// Botones para Escritorio y Móvil
const perfilbtndesk = document.getElementById('perfilbtndesk');
const perfilebtnmobile = document.getElementById('perfilebtnmobile');

// Función principal de toggle
function toggleProfileDropdown(e) {
    e.preventDefault(); 
    
    if (perfil) {
        // Alternar la clase 'hidden' para mostrar/ocultar
        perfil.classList.toggle('hidden');
    }
}

// Asignar el evento click a los dos botones
if (perfilbtndesk) {
   perfilbtndesk.addEventListener('click', toggleProfileDropdown);
}

if (perfilebtnmobile) {
   perfilebtnmobile.addEventListener('click', toggleProfileDropdown);
}