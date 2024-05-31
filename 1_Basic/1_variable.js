const accountId = 123456789
let accountEmail = "vikashpandit@gmail.com"
var accountPassward = "212121"
accountCity = "Saran"
let accountState;

// accountId = 2 not allows in const value

accountEmail= "vikash@gmail.com"
accountPassword = "1234"
accountCity = "patna"
/*
   1:- Prefer not to use var 
      because of issue in block Scope and Functional Scope.
   2:- bena (let, const) use kiye hum veriable deciare kar sakte hai.
   3:- hum bena semicolon (;) ke use kiye kar sakte hai.
   4:- our hum example- accountCity; yese hum use karte hai, to      (Undefined) ho gaa.

*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
