// Synchronous Code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

//Asynchronous Code = Out of sequence
//                    Ex. Access a database
//                        Fetch a file
//                        Tasks that take time
//                    (start now, finish some time later)


console.log("START");
console.log("This is the next step");
setTimeout(() => console.log("this is asynchronous"), 5000);
console.log("End");