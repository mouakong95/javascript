// slice() executes a section of a string
// and returns it as a new string without modifying the origial

let fullName = "Kongmeng Moua";

let firstName;
let lastName;

//This will slice the first 4 values off 
//lastName = fullName.slice(4)

// You can also apply 2 values, this will slice everything else arond it
//firstName = fullName.slice(0, 3);

//This slices everything else besides the values within 0 and the white space
firstName = fullName.slice(0, fullName.indexOf(" "));

//This slices all the values until after the space.
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);