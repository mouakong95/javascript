// Map = object that holds key-value pairs of any data type.

const store = new Map ([
  ["t-shirt", 20],
  ["jeans", 20],
  ["socks", 20],
  ["underwear", 20],
]);

store.forEach((value, key) => console.log(`Key: ${key} Value: $${value}`));

let shoppingCart = 0;

// you can grab the value by referencing the key
shoppingCart += store.get("t-shirt"); // 20
shoppingCart += store.get("underwear"); // 20
console.log(shoppingCart);  // 40

store.set("hat", 40);

store.delete("hat");

console.log(store.get("t-shirt"));

// This will return a boolean value true / false
console.log(store.has("t-shirts"));

// Size of the current Array
console.log(store.size);


// This is the longer alternative way
/*
store.forEach(keyValuePairs);

function keyValuePairs(value, key) {
  console.log(`${key} $${value}`);
}
*/