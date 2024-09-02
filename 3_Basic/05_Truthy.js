const userEmail = " yes i am Email"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
    
}

// falsy Values 

// false, 0, -0, BigInt on, "" , null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function (){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// object check

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Colescing Operator (??): null undefined 

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 17 ?? 35


console.log(val1);

// Tarniary Operator 

// condition ? true : false

const teaPrice = 120
teaPrice <= 75 ? console.log("less than 75") : console.log("more than 85");


