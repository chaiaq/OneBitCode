/* Criar um menu de bordo com o nome da nave;
Velocidade inicia em 0;
Acelera a nave em 5;
Desacelera em 5;
Imprimir os dados (nome e velocidade);
Sair; */



let spaceship = prompt("Qual o nome da sua nave?")

let velocity = 0
let acceleration = 5

function menu () {
  let chosenOption = prompt("O que deseja fazer?\n1-Acelerar 5km/s\n2-Desacelerar 5km/s\n3-Imprimir dados\n4-Sair")
if (chosenOption == "1") {
    speedUp()
    menu()
} else if(chosenOption == "2" && velocity > 5) {
    speedDown()
    menu()
} else if(chosenOption == "2" && velocity < 5) {
    alert("Nave parada.")
    menu()
} else if(chosenOption == "3") {
    print()
    menu()
} else if(chosenOption == "4") {
    alert("Encerrando programa.")
} else {
    menu()
}
  
}

function speedUp() { 
  velocity = velocity + acceleration
  console.log("Nova velocidade: " + velocity)
}

function speedDown() { 
  velocity = velocity - acceleration
  console.log("Nova velocidade: " + velocity)
}

function print() {
  alert("Nome da nave: " + spaceship + "\nVelocidade atual: " + velocity)
}




menu()

