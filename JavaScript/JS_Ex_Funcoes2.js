/* Nave inicia a 150km;
Funcao para desacelerar 20;
Funcao HOF deve imprimir as atualizações de velocidade;
Alerta de que a nave está parada */



// primeiro criar função para desacelerar a nave
// ela vai ter as variáveis velocidade (para desacelerar) e printer (para imprimir o resultado)
function slowDown(velocity, printer) {
    let deceleration = 20
    // dentro da função vai a repetição que irá executar a função enquanto velocidade for maior que 20
    while(velocity > 0) {
      printer(velocity)
      velocity -= deceleration
      // recebemos a velocidade e a diminuimos com 'desaceleração'
    }
    // dentro da função acrescentar o alert
    alert("Nave parada. Comportas podem ser abertas.")
  }
  
  let spaceshipVelocity = 150
  slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
  })