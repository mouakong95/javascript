// error = object with a description of something went wrong
//        Can't open a file
//        Lose connection
//        User types incorrect input
//        TypeError

// throw = executes a user-defined error


try {
  let x = window.prompt("Enter a #");
  x = Number(x);

  //Error Handling
  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number.`)
}
catch(error) {
  console.log(error);
}

//Finally will execute no matter what
finally {
  console.log("This always executes");
}