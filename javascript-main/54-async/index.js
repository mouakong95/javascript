// async = makes a function return a promise
// can reference the promise examples in exercise 53.

async function loadFile() {

  let fileLoaded = false;

  if(fileLoaded) {
    // if true, then resolve this over to promise.then
    return "file loaded";
  }
  else {
    throw "file not loaded.";
  }
}

// if the promise is good, run the function below
loadFile().then(value => console.log(value))

        // if promise is not true, run what was in the else statement
        .catch(error => console.log(error));