// console.time() = Starts a time you can use to track how long
//                  an operation takes. Give each time a unique name.
//                  Tracks how long a synchronous method takes


//start 
console.time("Response Time");

//alert("Click the Ok Button");
setTimeout(() => console.log("hello"), 3000);

//end
console.timeEnd("Response Time");