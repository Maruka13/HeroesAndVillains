let personagem = ["", "", ""];
let viloes = ["", "", ""];
let forcaPersonagem = 0;
let forcaViloes = 0;

function iniciarJogo() {
    for (let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt("Digite o nome do seu Herói " + (i + 1) + ":");
        personagem[i] = escolhaPersonagem;
    }

    // Exibe os nomes no HTML
    document.getElementById("informacoesJogador").innerText = "Seus heróis: " + personagem.join(", ");
}

document.getElementById("comecarJogoBtn").addEventListener("click", iniciarJogo);
