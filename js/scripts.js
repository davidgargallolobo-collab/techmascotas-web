document.addEventListener('DOMContentLoaded', () => {
    console.log("TechMascotas.com activo");
    
    // Animación suave al hacer scroll en los pills
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const section = document.querySelector('#analisis');
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});