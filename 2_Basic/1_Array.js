// Array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Akashy", "Salman"]

// console.log(myArr[2]); // count of number start (o)se ke karta hai.

//  Array Method's//////////////////////////////////

// myArr.push(6) // push yani add value.
// myArr.pop()// remove for last value.
// myArr.unshift(8) // Add First side value. ex- 8,0,1,2,3,4,5
// myArr.shift()// Remove First side value ex- 0,1,2,3,4,5 
// myArr.shift()// Remove First side value ex- 1,2,3,4,5
// console.log(myArr.includes(10)); // Only value result show (false)
// console.log(myArr.includes(19)); // Only show value for (Nigetive)

// const newArray = myArr.join() // change Array to string only
// console.log(myArr);
// console.log(newArray);

// slice and splice ///

console.log("A", myArr);

const myn1 = myArr.slice(1,5) // ye kya karta hai, 1to5 write kiye hai, Zero se start hoga to last wala digit tak count nahi hota hai. 

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,4) // Jo hum log , Value write karte hai o, (Remove hokar bahar 1-4 tak  ARRAY ke form me aata hai.) Present hota hai (is call Splice).
console.log("C", myArr);
console.log(myn2);

