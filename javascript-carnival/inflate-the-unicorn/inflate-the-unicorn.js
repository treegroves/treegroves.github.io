// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//create a variable for unicorns, which selects all instances of class name 'inflate-an-image'
//create a loop to check for onclick events and if one is clicked on, pass it into through unicornClicked function
//create this function, with a param of e (event)
//in the function create a variable to represent each event targeted
//outside of the function create a counter variable
//inside the function create a counter increment to count each click on the event target
//the counter has a maximum of 2 as there are 3 images to cycle through, create an if statement to reset counter on 3rd click
//include an alert announces which unicorn id is full
//create a console.log to show click events being detected, referring to unicorn id
//for every click on a unicorn change the img src. Manipulate the file number being referenced with a string including the counter.
let unicorns = document.getElementsByClassName('inflate-an-image')
let counter = 0
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}
function unicornClicked(e) {
  let unicorn = e.target
  counter++
  console.log(`I clicked on unicorn number ${unicorn.id}`)
  unicorn.src = './images/unicorn-' + counter + '.png'
  if (counter > 2) {
    counter = 0
    alert(`Unicorn Number ${unicorn.id} has a full balloon`)
  }
}
