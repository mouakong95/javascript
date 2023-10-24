// rest parameters = represents an indefinite number of parameters
//                    (packs arguments into an array)




let a = 1; 
let b = 2; 
let c = 3; 
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

//by using ...numbers we do not have to definitively define the amount of arguments passed
// the function can adjust based off the amount of parameters passed.
function sum(...numbers) {
  let total  = 0;

  for(let number of numbers) {
    total += number;
  }
  return total;
}