// date function
// using data time 

var date = new Date()
//console.log(date)  // just give date 
console.log(date.toDateString()) // give the date with text based clearly
console.log(date.toTimeString()) // give the time clearly
console.log(date.toLocaleString()) // give the local date and time clearly


console.log(date.getFullYear()) // give the just year
console.log(date.getMonth()) //give the only month 
console.log(date.getDate()) // give the date only
console.log(date.getHours()) // give the hours only
console.log(date.getMinutes()) // give the minutes only
console.log(date.getSeconds()) // give the seconds only