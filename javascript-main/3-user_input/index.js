// How to accept user input

//EASY Way with a window prompt

let username = window.prompt("what is ur name?");
console.log(username);

// Advance way

// When the button is clicked, it will grab the submitted value
// from the form.
// This will also change the label for the input to the new value.
document.getElementById("myButton").onclick = function() {
  username = document.getElementById("myText").value;  
  console.log(username);
  document.getElementById("myLabel").innerHTML = username;
}