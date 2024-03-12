const dice = document.getElementById("dice")
const rollButton = document.getElementById("rollButton")

// Función para generar una rotación aleatoria y aplicar la clase correspondiente al dado
function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1
  let diceClass = ""

  // Eliminar las clases de rotación anteriores antes de agregar una nueva
  dice.className = "dice" // Reinicia las clases

  switch (randomNum) {
    case 1:
      diceClass = "rotate-front"
      break
    case 2:
      diceClass = "rotate-back"
      break
    case 3:
      diceClass = "rotate-right"
      break
    case 4:
      diceClass = "rotate-left"
      break
    case 5:
      diceClass = "rotate-top"
      break
    case 6:
      diceClass = "rotate-bottom"
      break
  }

  // Agrega la nueva clase de rotación
  dice.classList.add(diceClass)
}

// Evento de click para el dado
dice.addEventListener("click", rollDice)

// Evento de click para el botón "Roll"
rollButton.addEventListener("click", rollDice)
