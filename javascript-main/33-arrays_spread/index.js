// spread operator = allows an iterable such as an array or string
//                    to be expanded in places where zero or more arguments
//                    are expected (unpacks the elements)

/*
  let numbers = [1,2,3,4,5,6,7];

  //iterates through the whole array to find the max
  let max = Math.max(...numbers);
  console.log(max);
*/

let class1 = ["Spongebob", "patrick", "sandy"];
let class2 = ["squid", "mr.krabs", "plankton"];

class1.push(...class2);
console.log(class1);