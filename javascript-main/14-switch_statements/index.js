// switch = statement that examines a value
//  for a match against many cases clauses.
// More efficient than many "else if" statements


/*
let grade = "A";

switch(grade) {
  case "A": 
    console.log("you did great!");
    break;
  case "B":
    console.log("you did good!");
    break;
  case "C":
    console.log("you did okay");
    break;
  default: 
    console.log(grade, " is not a letter grade.")
    break;
}
*/

let grade = 90;

switch(true) {
  case grade >= 90: 
    console.log("you did great!");
    break;
  case grade >= 80:
    console.log("you did good!");
    break;
  case grade >= 70:
    console.log("you did okay");
    break;
  case grade <= 69:
    console.log("you failed");
    break;
  default: 
    console.log(grade, " is not a letter grade.")
    break;
}