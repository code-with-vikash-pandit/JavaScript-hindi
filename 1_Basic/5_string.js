const name = "Vikash"
const repoCount = 50

// console.log(name + '' , repoCount);

// console.log(` hello My name is ${name} my repoCount is ${repoCount}`); 

const gameName = new String('Vikash-h Ku- amr') 
// console.log(`this is my game name ${gameName}`);

// console.log(gameName.length); 
// console.log(gameName.charAt(8)); position check karta hai. number dalne ke baad me'WORD KAA'
// console.log(gameName.indexOf('r')); position check karta hai. 'ALFABET' daalne ke baad me.
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.__proto__);

const newString = gameName.substring(2,5)  // for first count value.
console.log(newString);

const anotherString = gameName.slice (-9,3) // negetive Value. return count
console.log(anotherString);

const newStringOne = "    Vikash      "  // value in laraz space.
console.log(newStringOne);
console.log(newStringOne.trim()); // for in use 'whigte_Space remove value'

const url = 'https://www.fastjobsearchers.com/' // first time add any text. 
 
console.log(url.replace('fast', 'vikash')); // fist in write jo change karna hai, second jo new rakhna hai, aad new value.

console.log(url.includes ('vikash')); //  for check this url replace 'new value'

console.log(gameName.split('_')); // split use with any string ' Convert with ARRAY' me change hota hai. 