// array.reduce() = reduces an array to a single value

//we are using the reduce method to sum up all values
let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is ${total}`);

function checkOut(total, element) {
  return total + element;
}