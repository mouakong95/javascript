// setInterval() = invokes a function repeatedly after a number of milliseconds
//                  asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("count up to what?");

max = Number(max);

//runs the function countUp every 1second3

const myTime = setInterval(countUp, 1000)

function countUp() {
  count += 1;
  console.log(count);
  if(count >= max) {
    //stops the event
    clearInterval(myTime);
  }
}