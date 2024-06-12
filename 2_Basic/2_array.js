const heroes = ["Kohli", "Dhoni", "Sharma"]
const heroes1 = ["Mithun", "Vikash", "Kapil"]

// heroes.push(heroes1)// eske matlab hota hai, ARRAY ke amdar ARRAY add hota hai only.
// console.log(heroes);
// console.log(heroes[2] [3]); // Jo SHARMA hai ex- to ZERO se count hota hai, ex- [2, sharma], [3,sharma ex- r] es me bhi ZERO se count hota hai.
// console.log(heroes[2] [4]);
// console.log(heroes[2] [5]);

// console.log(heroes.concat(heroes1));// ye hota hai, Sab ARRAY ko Ek me hi ADD kar deta hai.

// console.log(heroes.concat(heroes1));
// console.log(heroes[1] [3]);

// const allNewHeroes = [...heroes, ...heroes1] //  Spred operator tukra karna. array ko.
// console.log(allNewHeroes);

// const anotherArray = [1,2,3,[4,3,2,],[6,7,[5,6]]] 
// const atTimeArray= anotherArray.flat(Infinity) // ye FLAT kya karta hai, sab ARRAY ko ek me hi add kar deta hai.
// console.log(anotherArray);

// console.log(Array.isArray("Prajapati")); // only result for (false).
console.log(Array.from("Prajapati")); // Result hamesa dega ARRAY kr from me deta hai.
console.log(Array.from({name:"Vikash"})); // only jo string me hoga use hi convert karega, (name) ko only empty value deta hai.

let score1 = 400
let score2 = 600
let score3 = 900

console.log(Array.of(score1,score2,score3)); // convert karta ARRAY ke form me .