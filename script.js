function rollDice() {
  const dice = document.getElementById("dice")
  const randomSide = Math.floor(Math.random() * 6) + 1
  dice.style.transform = `rotateY(${randomSide * 60}deg)`

  // Agrega lógica para manejar la animación y detener el dado en una cara específica
  // Esto es solo un ejemplo básico y puede requerir ajustes para funcionar como se desea
}
