// objects in javascript.

// singleton 



//++++++Interview +++++////

//Object.create // es me hamesha Constractor ke thoruh, singleteton.
 //es tarah bhi object create kiya jata hai.  (create for first method object create)

 //const JsUser = {} // second method hai, object create karne ka.

 // object literals
 const mySym = Symbol("Kumar")

 const JsUser = { // i Abhi hum jo use kiye hai,(Object literals hai.)
    name : "Vikash",
    "fullName" : "Vikash Prajapati",
    [mySym] : "Kumar", // Symbol use karne ka sahi tARIKA HAI [HARMESHA SQURE ROTETION ME HI USE KIYA JAATA HAI]. TAB HI SYMBOL USE HOGA.
    age : 22 ,
    Address : "Bihar",
    Email : "vikash@gmail.com",
    isLoggedIn: false,
    lastDayIsLoggedIn : ["Monday" , "Sunday"],
    
 }

//  console.log(JsUser.Address); // Object ko Access karne ka (first tarika).
//  console.log(JsUser["Email"]); // Object access for (second method)
//  console.log(JsUser["fullName"]); // jab dono tarf se (string ke from write kiya ho ), to Squre rutestion me hi use kiya jaata hai . (ye sahi tarika hota hai.)
//  console.log(JsUser[mySym]); // symbol ko access karne ka tarika squre rutetion me hi use hoga.

 JsUser.Email = "kumar@gmail.com" // Pahle wala Email ko UPDATE kar sakte hai.
//  Object.freeze(JsUser) // yahi tak new email (UPDATE karna hai) 
 JsUser.Email = "panditmicrosoft@gmail.com"
//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Vikash");
}
JsUser.greetingTwo = function(){
    console.log(`Hello I am Prajapti, ${this.Address}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

 
