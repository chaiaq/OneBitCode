/* Filtrar as naves com +9 tripulantes;
Informar o número da plataforma em que está a primeira pendente;
Destacar o nome das naves em caixa alta;
Alerta com as informações; */


const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
    ]
    
    
    let passengers9 = hitchedSpaceships.filter(spaceship => { return spaceship [1] >= 9})
    let passengersFilter = passengers9.map (element => { return element [0]})
    /* é possível encadear diretamente o método:
    const passengers9 = hitchedSpaceships.filter(spaceship => {
    return spaceship [1] >= 9
    }).map(spaceship => {
    return spaceship[0]
    })*/
    
    let falseEngage = hitchedSpaceships.findIndex(element => { return element [2] == false})
    
    
    let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
      let upcased = currentSpaceship[0].toUpperCase()
      return upcased
    })
    
    
    alert("As naves que abrigam mais de 9 tripulantes são: " + passengersFilter.join(", ") + 
         "\nA primeira nave com engate pendente está na plataforma: " + (falseEngage + 1) +
         "\n Os nomes de todas as naves são: " + upcasedSpaceships.join(", "))