// Type conversion = change the datatype of a value to another
//                (string, number, booleans)


// age is considered a string
let age =  window.prompt("how old are you?");

console.log(typeof age);

// Converting the string variable age to number
age = Number(age);

// 
age += 1;

console.log("Happy Birthday, you are ", age, " years old.");


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);

// If you have a value for a boolen it will return true, having no 
//  value returns false.
// We can use this for seeing if a user typed something in
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);