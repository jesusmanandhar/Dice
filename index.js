var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSourse = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSourse);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSourse2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 wins";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
