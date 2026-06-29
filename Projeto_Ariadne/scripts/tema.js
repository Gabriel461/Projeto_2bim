let body = document.body;
let botao = document.getElementById("tema");
botao.addEventListener("click", tema);

function tema(){
    if(body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        botao.innerText = "🌙";

    } else {
         body.style.backgroundColor = "white";
        body.style.color = "black";
        botao.innerText = "☀️";

    }

}

