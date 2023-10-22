
//if the submit button was clicked then run the function
document.getElementById("myButton").onclick = function() {

  //You can do it this way or the bottom method
  /*
    const myCheckBox = document.getElementById("myCheckBox");
    
    if(myCheckBox.checked) {
      ...
    }
    else {
      ...
    }
  */

  //grabs the id of the checked box to see if it was checked
  if(document.getElementById("myCheckBox").checked) {
    console.log("you are subscribed");
  }
  else {
    console.log("you are not subscribed.");
  }

  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if(visaBtn.checked) {
    console.log("you are paying with a visa");
  }
  else if (mastercardBtn.checked) {
    console.log("you are paying with a mastercard");
  }
  else if(paypalBtn.checked) {
    console.log("you are paying with paypal");
  }
  else {
    console.log("Please choose a payment method.");
  }
}