// useful string properties and methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

console.log(userName.length);

//This sets the first letter at the position
let firstLetter = userName.charAt(0);
console.log(firstLetter);

// This gives us the index of the specified letter
console.log(userName.indexOf("B"));

//gives the last index of that value
console.log(userName.lastIndexOf("e"));

// This trims the spaces in front and back of the variable
console.log(userName.trim());

// Makes all characters in CAP
console.log(userName.toUpperCase());

//Makes all characters LowerCase
console.log(userName.toLocaleLowerCase());

// REPLACING A STRING CHAR
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);