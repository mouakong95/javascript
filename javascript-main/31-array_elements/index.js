let prices = [5, 10, 15, 20];

for(let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

// Can also use this method

for(let price of prices) {
  console.log(price);
}