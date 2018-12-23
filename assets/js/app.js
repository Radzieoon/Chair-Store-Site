document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById('menuTrigger');
    var menu = document.querySelector('.menu');

    button.addEventListener('click', function() {
        menu.classList.toggle('active-menu');
        this.classList.toggle('active-trigger')
    });

});
