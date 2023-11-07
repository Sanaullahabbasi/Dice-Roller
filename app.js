var random = Math.floor(Math.random() * 6 + 1);

function img() {
  var imgAnimation = document.querySelector("#dice>img");
  imgAnimation.src = "images/rollingDice.gif";
}
var imgMotion = setInterval(img, 2500);

function roll() {
    var clearBtn = document.getElementById("btn-clear");
  clearInterval(imgMotion);
  var imgAnimation = document.querySelector("#dice>img");
  var dicVal = document.getElementById("diceVal");
  imgAnimation.src = "images/blank.png";
  dicVal.innerHTML = `
  <h1>${random}</h1>
  `
  }

  function rollAgain(){

  }
