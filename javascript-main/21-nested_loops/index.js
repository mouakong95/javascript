// nested loop = a loop within a loop

let symbol = window.prompt("enter a symbol");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let i = 1; i <= rows; i += 1) {
  for(let j = 1; j <= columns; j+=1) {
    document.getElementById("myRectangle").innerHTML += 1;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}