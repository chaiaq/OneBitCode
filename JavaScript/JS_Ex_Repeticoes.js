/* Solicitar o nome da nave;
Utilizar uma repetição para inverter o nome;
Procurar o caractere 'proibido';
Se encontrado a inversão para;
Alerta com nome original e o nome invertido */

let spaceshipName = prompt("Qual é o nome da nave?")
let invertedName = ""

// S u p e r n o v a    (9 caracteres)
// 0 1 2 3 4 5 6 7 8

for(let letter = spaceshipName.length - 1; letter >= 0; letter--) {
  /* a variável vai ser o tamanho do nome -1; a expressão vai verificar se a variável é maior ou igual a 0; por fim vai diminuir em 1
  invertedName += spaceshipName[letter]
}
console.log(invertedName) */
    if(spaceshipName[letter] == "e") {
        break
    }
    invertedName += spaceshipName[letter]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)