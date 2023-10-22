// const = a variable that cannot be changed

// it is a good practice to make the constants all caps
const PI = 3.14159;
let radius;
let circumference;

radius =  window.prompt("enter the radius of a circle.");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is: ", circumference);