// promise = object that encapsulates the result of an asynchronous 
//           operation.
//           Let Asynchronous methods return values like synchronous methods
//            "I promise to return something in the future" 


//            the STATE is 'pending' then: 'fulfilled' or rejected
//            the RESULT is what can be returned
//            2 parts producing and consuming

//IF it is successful it will invoke the resolve process if not it will invoke the reject
const promise = new Promise((resolve, reject) => {
  
  let fileLoaded = true;

  if(fileLoaded) {
    // if true, then resolve this over to promise.then
    resolve("file loaded");
  }
  else {
    reject("file not loaded.");
  }
});

// if the promise is good, run the function below
promise.then(value => console.log(value))

        // if promise is not true, run what was in the else statement
        .catch(error => console.log(error));

