// array = think of it as a variable that can store multiple values

let fruit = ["apple", "orange", "banana"];

fruit.push("coconut");  //adds coconut to the array
fruit.pop();            // removes the last array
fruit.unshift("mango"); //adds mango to front of the array
fruit.shift();          //removes the first array

let length = fruit.length;  //this gives us the length of the array
let index = fruit.indexOf("orange"); //this gives us the index in which the value is in

//This will sort the array in alphabetical order
fruit = fruit.sort();

//Sorts the array in reverse alphabetical order
fruit = fruit.sort().reverse();

for(let currentFruit of fruit) {
  console.log(currentFruit);
}