//break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i += 1) {
  if(i == 5) {
    console.log("continue");
    continue;
  }
  if(i == 13) {
    console.log("break");
    break;
  }
  console.log(i);
}
