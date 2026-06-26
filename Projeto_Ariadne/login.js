const form = document.getElementById("login");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const emailConta = document.getElementById("email").value;
    const senhaConta = document.getElementById("senha").value;
    const perfil = JSON.parse(localStorage.getItem("perfil"));

    if (emailConta === perfil.email && senhaConta === perfil.senha) {
        let msg = `Seja bem vindo de novo ${perfil.nome}`;
        alert(msg);
        window.location.href = "site.html";
    } else {
        window.alert("Email ou senha incorretos! Entre com email ou senha corretos.")
    }

});