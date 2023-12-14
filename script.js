//encabezado
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//---------------------------------------------------imagen de slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos

updateSlider();

//------------------------------------------------------ transparente header

/*var header = document.getElementById('Header');

window.addEventListener('scroll', () => {

    var scroll = window.scrollY

    if(scroll>10){
        header.style.backgroundColor = '#427D9D'
    }else{
        header.style.backgroundColor = 'transparent'
    }
}) */

//------------------------------------------------------------Formulario-Usuarios



