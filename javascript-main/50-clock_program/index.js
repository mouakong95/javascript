const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // if hours >= 12 return pm else am
    let amOrPm = hours >= 12 ? "pm" : "am";

    // converts 24hr time to 12hours
    hours = (hours % 12) || 12;

    //calling function below to add zero's in front of numbers
    // lower than 10.
    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
  }

  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}