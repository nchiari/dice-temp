const dice = document.getElementById("dice")

dice.addEventListener("click", () => {
  // Números aleatorios para las rotaciones en X, Y, y Z
  const xRand = getRandomInt(1, 16) * 90 // Asegúrate de que sea múltiplo de 90
  const yRand = getRandomInt(1, 16) * 90
  const zRand = getRandomInt(1, 16) * 90 // La rotación en Z es opcional y puede hacer que el dado parezca más dinámico

  // Aplicar rotaciones al dado
  dice.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg) rotateZ(${zRand}deg)`
})

// Función para obtener un número entero aleatorio
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
