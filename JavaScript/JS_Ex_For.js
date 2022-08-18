/* Solicitar o nome da nave;
Qual letra ele quer colocar;
Qual letra substituir;
Exibir um alerta com o novo nome; */

let spaceship = prompt("Qual o nome da sua nave?")
let oldLetter = prompt("Qual letra você quer substituir?")
let newLetter = prompt("Por qual letra você quer substituir a letra " + oldLetter + "?")

let newSpaceship = ""

for(let letter = 0; letter < spaceship.length; letter++) {
  if(spaceship[letter] == oldLetter) {
    newSpaceship += newLetter
  } else {
    newSpaceship += spaceship[letter] //se o caracter não for o novo será colocado o padrão mesmo
  }
}

alert("O novo nome da nave é: " + newSpaceship)