//  functions = Defines code once and then use it many times
//    Performing the code, call the function name

startProgram();

function startProgram() {
  let userName = "bro";
  let age = 21;

  happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  console.log("happy birthday to ", userName);
  console.log("you are ", age);
}