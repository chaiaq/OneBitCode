/* Exiba um alerta de Bem vindo;
Peça o nome do usuário;
A idade do usuário;
Peça que confirme a idade;
Exiba um alerta com o nome, idade e a confirmação */

alert ("Bem-vindo! A seguir pediremos que informe alguns dados.")
let name = prompt ("Qual seu nome?")
let age = prompt ("Qual sua idade?")

let ageConfirm = confirm ("Sua idade é " + age + " anos?")
alert ("Nome: " + name + "\nIdade: " + age + "\nIdade confirmada: " + ageConfirm)