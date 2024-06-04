// Primitive

// there are 7 types of primitive
// 7:- String, Number, Boolean, null,           undefined, Symbol, BigInt.

//  const score = 100
//  const scroeValue = 100.4

//  const isLoggedIn = false
//  const outsideTemp = unll
//  let userEmail; //undefined

//  const id = Symbol('1234')
//  const anotherId = symbol ('1234')

//  console.log(id === anotherId);

// const bigNumber = 23410345625789n



 // Reference (Non Primitive)

 // Array, Objects, Function.

//  const heros = ["Vikash", "Mantu", "Sanjeev"];
//  let obj = {
//     name: "Prajapati",
//     age: 22,
//  }

//  const myFunction = function(){
//     console.log("hello Vikash");
//  }

//  console.log(typeof outsideTemp);



 // *************Memory*********************
//  there are teo types of memory
// 1:- Stack (Primitive)- Value decision aata hai, o value copy milta h.

// 2:- Heap (Non-Primitive)- value ka  refirece milta hai. 

let myVillageName = Doila

let anotherDist = siwan
anotherDist = "patna"

console.log(myVillageName);

let userOne = {
    email: "user@outlook.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vikash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
