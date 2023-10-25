// arrow function = compact alternative to a traditional function =>

const greeting = function(userName) {
  console.log(`hello ${userName}`);
}

greeting("bro");

// Arrow Function
const percent  = (x, y) => x / y * 100;

// This is the original function
/*
const percent  = function(x, y) {
  return x / y * 100;
}
*/


console.log(`${percent(37, 50)} %`);