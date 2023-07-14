const hamburger = document.querySelector('#btn-hamburger');
const navLinks = document.querySelector("#nav-links");
hamburger.addEventListener('click', function(){
    

    navLinks.classList.toggle("hidden");
    hamburger.classList.toggle("open");
});
