var random = Math.floor(Math.random() * 6 + 1);

function img() {
  var imgAnimation = document.querySelector("#dice>img");
  imgAnimation.src = "images/rollingDice.gif";
}
var imgMotion = setInterval(img, 2500);

function roll() {
  var rollBtn = document.getElementById("btn-roll");
  var imgAnimation = document.querySelector("#dice>img");
  var dicVal = document.getElementById("diceVal");
  var clearBtn = document.getElementById("btn-clear");
  clearBtn.style.display = "block";
  clearInterval(imgMotion);
  rollBtn.style.display = "none";
  imgAnimation.src = "images/blank.png";
  dicVal.innerHTML = `
  <h1>${random}</h1>
  `;
}

function rollAgain() {
  var clearBtn = document.getElementById("btn-clear");
  var rollBtn = document.getElementById("btn-roll");
  rollBtn.style.display = "block";
  clearBtn.style.display = "none";
}
