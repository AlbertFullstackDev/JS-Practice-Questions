/*
3. Write a JavaScript program to get the current date.
    Expected Output :
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
   
*/
let today = new Date();

let month = today.getMonth() + 1;

let date = today.getDate();

let year = today.getFullYear();

date = (date > 10) ? date : `0${date}` ;

month = (month > 10) ? month : `0${month}` ;

today = `${month}-${date}-${year}`;
today = `${month}/${date}/${year}`;

console.log(today);