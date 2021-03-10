/*
1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

let today = new Date();
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let hours = today.getHours();
let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

console.log(`Today is : ${weekdays[today.getDay()]}`);
console.log(`Current time is :${hours}${ampm} : ${today.getMinutes()} : ${today.getSeconds()}`)