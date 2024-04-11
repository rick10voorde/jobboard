document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Sluit het dropdown-menu als er ergens anders op de pagina wordt geklikt
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
});
