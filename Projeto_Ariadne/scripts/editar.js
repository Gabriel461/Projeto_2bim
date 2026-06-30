const perfil = JSON.parse(localStorage.getItem("perfil"));

document.getElementById("name").value = perfil.nome;
document.getElementById("email").value = perfil.email;
document.getElementById("senha").value = perfil.senha;

const form = document.getElementById("editar");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = {

        nome: document.getElementById("name").value,

        email: document.getElementById("email").value,

        senha: document.getElementById("senha").value

    };

    localStorage.setItem("perfil", JSON.stringify(usuario));

    alert("Perfil atualizado!");

    window.location.href = "site.html";

});