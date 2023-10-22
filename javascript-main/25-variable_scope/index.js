// variable scope = where a variable is accessible.

//  let = variables are limited to a block of scope {}
//  var = variables are limited to a function(){}

// global variable = is declared outside any function 
// (if global, var will CHANGE browser's window properties.)


// i is only limited within this scope {}
for(let i = 1; i <= 3; i++) {
  
}

// var will only exist within the function 
function doSomething() {
  for(var i = 1; i <= 3; i++) {
  
  }
}


// There is a windows property "name" and using var will change that unintentionally.
// Using let will be better
var name = "BRO";

