let personagem = ["", "", ""];
let viloes = ["", "", ""];
let forcaPersonagem = 0;
let forcaViloes = 0;

function iniciarJogo() {
    for(let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt("Digite o nome do seu Herói " + (i + 1) + ":");
        personagem[i] = escolhaPersonagem;
        
        //calcular força do herói dps soma do time todo
        forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) +1       // maneira avançada: forcaPersonagem += Math.floor(Math.random() * 10) +1
       
    }

    console.log("Agora,o Array personagem contém: " + personagem)
    console.log("Início Vilões" + viloes)

    for(let i = 0; i < 3; i++) {
        indiceAleatorio = Math.floor(Math.random() * 10)
        viloesPossiveis = 
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

        viloes[i] = viloesPossiveis[indiceAleatorio]
    }

    console.log("Final Vilões" + viloes)



    // Exibe os nomes no HTML
    document.getElementById("informacoesJogador").innerText = "Seus heróis: " + personagem.join(", ");
}

document.getElementById("comecarJogoBtn").addEventListener("click", iniciarJogo);
