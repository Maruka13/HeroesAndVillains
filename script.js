let personagem = ["", "", ""];
let viloes = ["", "", ""];
let forcaPersonagem = 0;
let forcaViloes = 0;

function iniciarJogo() {
    for(let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt("Digite o nome do seu Herói " + (i + 1) + ":");
        personagem[i] = escolhaPersonagem;
    }
    console.log("Agora,o Array personagem contém: " + personagem)

    for(let i = 0; i < 3; i++) {
        indiceAleatorio = Math.floor(Math.random() * 10)
        vilõesPossiveis = 
            ["Malenia, Blade of Miquella",
             "Slave Knight Gael",
             "Orphan of Kos",
             "Mohg, Lord of Blood",
             "Elden Beast",
             "Dragonlord Placidusax",
             "Maliketh, the Black Blade",
             "Demon of Hatred",
             "Laxasia",
             "Radahn, Consort of Miquella"
        ]
    }



    // Exibe os nomes no HTML
    document.getElementById("informacoesJogador").innerText = "Seus heróis: " + personagem.join(", ");
}

document.getElementById("comecarJogoBtn").addEventListener("click", iniciarJogo);
