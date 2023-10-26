// The Date object is used to work with date and times

let date = new Date();

//converts to local time
//date = date.toLocaleString();

//document.getElementById("myLabel").innerHTML = date;

// gets the current year
let year = date.getFullYear();

// gets the current month
//let dayOfMonth = date.getDate();

// gets the current day
// 1 - Monday, 2- Wednesday, 3- Thursday ....
// let dayOfWeek = date.getDay();

//let hour = date.getHours();

//let minutes = date.getMinutes();

//let seconds = date.getSeconds();

date.setFullYear(2023);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);

console.log(date);

document.getElementById("myLabel").innerHTML = formatDate(date) + " "+ formatTime(date);

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return `${month}/${day}/${year}`
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrpm = hours >= 12 ? "pm" : "am";

  //This will convert hours from military to 12hours
  hours = (hours % 12) || 12;
  
  return `${hours}:${minutes}:${seconds} ${amOrpm}`
}