/* Perguntar a distância em anos-luz;
Oferecer as três opções;
Perguntar qual operação deseja;
Verifica a opção com switch;
Exiba um alerta com a distância convertida;
Caso a opção não seja válida emitir um alerta */

let distance = prompt("Qual a distância em anos luz você quer converter?")
let distanceOption = prompt("Para qual unidade você quer converter?\n1-Parsec(pc)\n2-Unidade astronômica(AU)\n3-Quilômetros(km)")

switch(distanceOption) {
  case "1":
    let convertedParsec = distance * 0.306601
    alert("Velocidade em Anos-Luz: " + distance + "\n Velocidade em Parsec: " + convertedParsec + "pc")
    break
  case "2":
    let convertedAu = distance * 63241.1
    alert("Velocidade em Anos-Luz: " + distance + "\n Velocidade em Unidade Astronômica: " + convertedAu + "AU")
    break
  case "3":
    let convertedKm = distance * 9.5 * Math.pow(10,12)
    alert("Velocidade em Anos-Luz: " + distance + "\n Velocidade em Quilômetros: " + convertedKm + "km")
    break
  default:
    alert("Velocidade em Anos-Luz: " + distance + "\n Unidade não identificada: conversão fora do escopo")
}
