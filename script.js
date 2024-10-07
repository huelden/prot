document.querySelectorAll('nav a').forEach(anchor =>{
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    
// Altera a cor de fundo da página ao clicar na foto
const profilePhoto = document.querySelector('.profile-photo');

profilePhoto.addEventListener('click', () => {
    document.body.style.backgroundColor = '#dee7ef'; // Muda a cor de fundo
    setTimeout(() => {
        document.body.style.backgroundColor = '#b0bbc4'; // Volta à cor original após 500ms
    }, 500);
});
