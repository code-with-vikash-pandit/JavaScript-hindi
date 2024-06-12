//

let toDayDate = new Date()
console.log(toDayDate.toDateString());// only date, day, month, year show.
console.log(toDayDate.toString()); // only date, day, month, year show, and show contry.
console.log(typeof toDayDate);

// let myCreatedDate = new Date (2024,5, 15) // javascript me (0) se january start hota h.
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date (2024, 6, 12, 3,57)
// let myCreatedDate = new Date ("2024-06-31") // to write YY-MM-DD formet using for javascript.
let myCreatedDate = new Date ("01-27-2024")// only using for india writeing.
// console.log(myCreatedDate.toLocaleString());

let myTimeNow = Date.now() // using for mili second.
console.log(Math.floor(Date.now()/1000)); // ye hota hai, Decimal value nahi aata hai.

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMonth() +1 ); // curennet month in detected.

`${newDate.getDay()} and the time`// String menu pulestion  hum bolte hai.

newDate.toLocaleString('default', {
    weekday: "narrow",
}) // new model using of javascript rules.