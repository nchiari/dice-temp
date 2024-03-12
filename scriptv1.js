const dice = document.getElementById("dice")
const rollButton = document.getElementById("rollButton") // Obtiene el botón por su ID

function rollDice() {
  const xRand = getRandomInt(1, 16) * 90
  const yRand = getRandomInt(1, 16) * 90
  const zRand = getRandomInt(1, 16) * 90

  dice.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg) rotateZ(${zRand}deg)`
}
// Event listener para el botón
rollButton.addEventListener("click", rollDice)

// Función para obtener un número entero aleatorio
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
