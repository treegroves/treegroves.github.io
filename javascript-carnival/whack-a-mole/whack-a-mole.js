// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
//create a 2D array
//declare a variable to access the cells
//variable needs to access table by id and cells by dot notation, select rows and items inside of cells

let cellsArray = document.getElementsByTagName('TD')
let moleImg = document.createElement('img')
let counter = 0
//create a function to put a mole picture into the random cell
function moleInBox() {
  let randomIndex = Math.floor(Math.random() * 24)
  let randomCell = cellsArray[randomIndex]

  randomCell.appendChild(moleImg)
}

moleInBox()

// for (let i = 0; i < cellsArray.length; i++) {
//   cellsArray[i].onclick = whackedMole
// }

//if mole tile is clicked, run moleInBox()
//and delete img
moleImg.classList.add('mole')
moleImg.src = 'mole.PNG'
moleImg.onclick = whackedMole

function whackedMole(e) {
  moleInBox()
  let audioO = new Audio('whack-audio.wav')
  audioO.play()
  counter++
  document.getElementById(
    'counter'
  ).innerHTML = `You have whacked ${counter} moles!`
}

// let mole = e.target
// console.log(`I clicked on ${mole}`)
// moleInBox()
// if ((mole.src = '')) {
//   console.log('test')
