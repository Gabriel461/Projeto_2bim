 const form = document.getElementById("cadastro");

        form.addEventListener("submit", function(salvar){
            salvar.preventDefault();
            const nome = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            const conta = {
                nome: nome,
                email: email,
                senha: senha
            };

            localStorage.setItem("perfil", JSON.stringify(conta));

            alert("Seu Cadastro foi realizado, confira o nosso site!");

            window.location.href = "site.html";
        });