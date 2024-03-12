const dice = document.getElementById("dice")

dice.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 6) + 1
  let diceClass = ""

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

  dice.setAttribute("class", "dice " + diceClass)
})
