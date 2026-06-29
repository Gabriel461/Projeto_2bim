const botao = document.getElementById("menu_btn");
const menu = document.querySelector("aside");

botao.addEventListener("click", function () {
    menu.classList.toggle("fechado");
});