const menuToggle = document.querySelector('.menu-toggle i');
const nav = document.querySelector('.header-right ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
}); 
