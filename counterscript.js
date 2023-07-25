// create a Date object for the start of the timer
var startDate = new Date("July 1, 2004");

// this function runs every second and updates the counter
function updateCounter(){
  // get the current date and time
  var now = new Date();
  
  // get the difference between the two in milliseconds
  var diff = now.getTime() - startDate.getTime();
  
  // convert the difference to years, months, days, hours, minutes, and seconds
  var years = Math.floor(diff / (365*24*60*60*1000));
  diff -= years*365*24*60*60*1000;
  var months = Math.floor(diff / (30*24*60*60*1000));
  diff -= months*30*24*60*60*1000;
  var days = Math.floor(diff / (24*60*60*1000));
  diff -= days*24*60*60*1000;
  var hours = Math.floor(diff / (60*60*1000));
  diff -= hours*60*60*1000;
  var minutes = Math.floor(diff / (60*1000));
  diff -= minutes*60*1000;
  var seconds = Math.floor(diff / 1000);

  // convert the values to string and add preceding 0's (if necessary)
  years = years < 10 ? '0' + years : years;
  months = months < 10 ? '0' + months : months;
  days = days < 10 ? '0' + days : days;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // update the HTML element with the id 'counter' with all of the values
  //document.getElementById('counter').innerHTML = years+' years, '+months+' months';
  document.getElementById('counter').innerHTML = years+' years,  and '+months+' months(days:hours:minutes:seconds)';
}

// run the updateCounter function every second
setInterval(updateCounter, 1000);
