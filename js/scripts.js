// Seleção de elementos
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");


// Funções
toggleMenu = () => {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}