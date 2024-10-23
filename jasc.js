const mode = document.getElementById('mode');
const forms = document.getElementById('forms');
const body = document.body 

window.addEventListener('DOMContentLoaded', () => {
    if (!mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        forms.classList.remove('dark');
        body.classList.remove('dark');
    }

});

mode.addEventListener('click', () => {
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        forms.classList.add('dark');
        body.classList.add('dark');
        
        return;
    
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    forms.classList.remove('dark');
    body.classList.remove('dark');

});

