document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("buscar");
    const resultado = document.getElementById("resultado");
    const input = document.getElementById("jogo");

    const menuBtn = document.getElementById("menu_btn");
    const tema = document.getElementById("tema");

    // =====================
    // API
    // =====================
    botao.addEventListener("click", async () => {

        const jogo = input.value.toLowerCase().trim();
        resultado.innerHTML = "";

        try {
            const resposta = await fetch("https://www.freetogame.com/api/games");
            const dados = await resposta.json();

            const encontrados = dados.filter(game =>
                game.title.toLowerCase().includes(jogo)
            );

            if (encontrados.length === 0) {
                resultado.innerHTML = "<p>Nenhum jogo encontrado</p>";
                return;
            }

            encontrados.forEach(game => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${game.thumbnail}">
                    <h2>${game.title}</h2>
                    <p>${game.genre}</p>
                    <p>${game.platform}</p>
                `;

                resultado.appendChild(card);
            });

        } catch (erro) {
            console.log(erro);
            resultado.innerHTML = "<p>Erro ao buscar jogos</p>";
        }
    });

    // =====================
    // MENU
    // =====================
    menuBtn.addEventListener("click", () => {
        document.body.classList.toggle("menu-fechado");
    });

    // =====================
    // TEMA
    // =====================
    tema.addEventListener("click", () => {
        document.body.classList.toggle("claro");

        tema.innerHTML = document.body.classList.contains("claro")
            ? "🌙"
            : "☀️";
    });

});