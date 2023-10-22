// ternary operator = shortcut for an if/else statement
//            takes 3 operands
//      1. a condition with ?
//      2. expression if True :
//      3. expression if False

//  condition ? exprIfTrue : exprIfFalse

let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
  /*
  if(age >= 18) {
    return true;
  }
  else {
    return false;
  }
  */

  //Another way of writing the if/else in ternary 
  return age >= 18 ? true : false;
}