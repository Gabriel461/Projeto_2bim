const botao = document.getElementById("remover");

botao.addEventListener("click", function(){

    localStorage.removeItem("perfil");

    alert("Conta removida com sucesso!");

    window.location.href = "página.html";

});