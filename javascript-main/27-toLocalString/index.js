//  toLocalString() = returns a string with a language
//                    sensitive representation of this

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default)
// 'options' = object with formatting options

let myNum = 123456.789;

// this changes the number over to us format
//myNum = myNum.toLocaleString("en-US");

//123,456.789
console.log(myNum);

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(myNum);

/*
//This is in rupees
myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
console.log(myNum);
*/