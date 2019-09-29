
var randomNumber1 = Math.floor(Math.random() *6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //string from dice1.png to dice6.png

//now to change image. So tap into the src attribute of the element.
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

//select attribute
var image1 = document.querySelectorAll("img")[0];

//change attribute, what to change it to.

image1.setAttribute("src", randomImageSource);

//for second image

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// change title depending on result

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Joe wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "You win! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
