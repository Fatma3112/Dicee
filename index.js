
function diceGame() {

let randomNumber1 = Math.floor( Math.random() *6)+1;

let randomImg = "dice" + randomNumber1 + ".png";
let randomSource = "images/" + randomImg;
let image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomSource );


let randomNumber2 = Math.floor(Math.random() * 6) +1;
let randomImg2 = "dice" + randomNumber2 + ".png";
let randomSource2 = "images/" + randomImg2;
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomSource2);


if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "🥳 🤩 😎 💃🏻  Player1 winner!";
}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🥳 🤩 😎 💃🏻  Player2 winner!";   
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
}