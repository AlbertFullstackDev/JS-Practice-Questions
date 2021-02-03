/*
Write a JavaScript program to rotate the string 'w3resource' in right direction by
 periodically removing one letter from the end of the string 
 and attaching it to the front. 
*/

let str = "w3resource"
let str2 = " "
for(let i = str.length - 1 ;  i <= str.length - 1 && i >= 0; i--)
 {
      str2 += str.charAt(i)
}
console.log(str2)
