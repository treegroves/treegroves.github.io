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
moleImg.src = '/blog/assets/images/mole.PNG'
moleImg.onclick = whackedMole

function whackedMole(e) {
  moleInBox()
  let audioO = new Audio('/blog/assets/whack-audio.wav')
  audioO.play()
  counter++
  document.getElementById('counter').innerHTML = ` Moles Whacked: ${counter}`
}

setTimeout(function () {
  // alert(`your final score is ${counter}`)
  if (confirm(`your final score is ${counter}`)) {
    window.location.reload()
  }
}, 11200)

let timeleft = 10
let downloadTimer = setInterval(function () {
  if (timeleft < 1) {
    clearInterval(downloadTimer)
    document.getElementById('countdown').innerHTML = 'TIMES UP'
  } else {
    document.getElementById('countdown').innerHTML =
      timeleft + ' seconds remaining'
  }
  timeleft -= 1
}, 1000)

// let mole = e.target
// console.log(`I clicked on ${mole}`)
// moleInBox()
// if ((mole.src = '')) {
//   console.log('test')
