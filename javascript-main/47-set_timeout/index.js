// setTimeout() = invokes a function after a number of milleseconds
//                asynchronous function (doesn't pause execution)

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);


function firstMessage(item, price) {
  alert (`Buy this ${item} for this price ${price} `);
}

function secondMessage() {
  alert ("hello 2");
}

function thirdMessage() {
  alert ("hello 3");
}

document.getElementById("myButton").onclick = function() {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
}