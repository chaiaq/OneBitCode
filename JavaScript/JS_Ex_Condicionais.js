/* Pergunte o nome do piloto;
Velocidade inicial da nave em 0;
Perguntar a velocidade que ele quer;
Perdir uma confirmação mostrando a velocidade;
Exibir uma mensagem de acordo com a velocidade */

let pilot = prompt ("Qual seu nome, piloto?")
var velocity = 0

let newVelocity = prompt ("A qual velocidade você quer acelerar?")
let velocityConfirm = confirm ("Indo para " + newVelocity + "km/s, confirmar?")
if(velocityConfirm) {
    velocity = newVelocity
}



if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do piloto: " + pilot + "\nVelocidade atual: " + velocity + "km/s")