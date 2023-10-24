// callback = a function passed as an argument
//            to another function.

// Ensures that a function is not going to run before a task is
// completed. Helps us develop asynchronous code. (When one function has to wait
// for another function) that helps us avoid errors and potential problems
//  Ex: Wait for a file to load.

// do not include the () when passing a function as a parameter or else it will call it automatically
sum(2, 3, displayConsole);

function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}
function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}