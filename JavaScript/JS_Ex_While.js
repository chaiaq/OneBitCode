/* Pedir o nome da nave;
Perguntar se quer entrar na dobra;
Perguntar novamente se for sim e contar cada uma;
Se responder não deverá ser encerrado;
Informar a quantidade de dobras feitas */

let spaceship = prompt("Qual o nome da sua nave?")
let warpSpace = 0
let chosenOption = prompt("Deseja entrar em dobra espacial?\n1-Sim\n2-Não")

while(chosenOption == "1") {
    warpSpace += 1
    chosenOption = prompt("Deseja entrar em dobra espacial?\n1-Sim\n2-Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpSpace)
