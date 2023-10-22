//This generates a random number between 1 and 5 and rounds down
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
  x = Math.floor(Math.random() * 6);
  y = Math.floor(Math.random() * 6);
  z = Math.floor(Math.random() * 6);

  document.getElementById("xlabel").innerHTML = x;
  document.getElementById("ylabel").innerHTML = y;
  document.getElementById("zlabel").innerHTML = z;
}