document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseenter', function() {
        document.querySelectorAll('.options').forEach(option => {
            option.style.display = 'none';
        });
        const optionsClass = this.getAttribute('data-options');
        document.querySelector(`.${optionsClass}`).style.display = 'flex';
    });
});

document.querySelector('.container').addEventListener('mouseleave', function() {
    document.querySelectorAll('.options').forEach(option => {
        option.style.display = 'none';
    });
});



