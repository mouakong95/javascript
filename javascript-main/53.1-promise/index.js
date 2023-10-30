// promise = object that encapsulates the result of an asynchronous 
//           operation.
//           Let Asynchronous methods return values like synchronous methods
//            "I promise to return something in the future" 


//            the STATE is 'pending' then: 'fulfilled' or rejected
//            the RESULT is what can be returned
//            2 parts producing and consuming

const promise = new Promise( resolve => {
  setTimeout(resolve, 5000);
});

promise.then( () => console.log("thanks for waiting"));

// OR

//passing an arguement time to the promise
const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting"));