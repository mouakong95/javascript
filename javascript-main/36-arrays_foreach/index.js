// array.forEach() = executes a provided callback function once
//                    for each array element.

let students = ["spongebob", "patrick", "squidward"];

//forEach applies to each element with the student and passes the function argument.9
students.forEach(capitalize);
students.forEach(print);


//capitalizes the first letter of each array element
function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element);
}

console.log(students[0]);