// Función para generar una rotación aleatoria y aplicar la clase correspondiente al dado específico
function rollDice(diceId) {
  const dice = document.getElementById(diceId)
  const randomNum = Math.floor(Math.random() * 6) + 1
  let diceClass = ""

  // Reinicia las clases para el dado específico antes de agregar una nueva clase de rotación
  dice.className = "dice"

  // Determina la nueva clase de rotación en función del número aleatorio
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

  // Agrega la nueva clase de rotación al dado específico
  dice.classList.add(diceClass)
}

// Asigna eventos de click a cada botón de "Roll"
document.querySelectorAll(".dice-container button").forEach((button) => {
  button.addEventListener("click", function () {
    const diceId = this.previousElementSibling.id // Obtiene el ID del dado asociado al botón
    rollDice(diceId) // Llama a la función de rotación para el dado específico
  })
})
