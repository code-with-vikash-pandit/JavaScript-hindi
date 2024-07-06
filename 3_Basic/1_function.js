function sayMyName() {
    console.log(10);
    console.log(20);
    console.log(44);
    console.log(55);
    console.log(66);
    console.log(99);  
}

//sayMyName() // With out reference (not class access).

// function addTwoNumber (number1, number2){ // function me jo hum likhte hai, hum use (PEREMETAR) bolte hai
//     console.log(number1+number2);
// }

function addTwoNumber (number1, number2){
    // let result = number1+number2 // [FIRST RULL]
    // return result // Agar hum ek baar (RESULT) print kar diye tab kuch bhi, print nahi hoga. [Jo kuch karna hoga RESULT se pahle]
    return number1+number2// hum kese value me add kar bhi kar sakte hai.  RETURN KEYWORD laga kar .
}

// addTwoNumber(4,53); // hum ese (argument) bolte hai, pass with value.and enter number ;
// addTwoNumber(3, "a");
const result = addTwoNumber(3, 9);
// console.log("Result:", result);
// addTwoNumber(3, null);


function loginUserMessage(username ="Vikash"){
    if (!username) {
        console.log("Plese enter a username");
        // return // Es ke aage print nahi kar sakte hai.
    }
    return `${username} just loggedin`
}
// loginUserMessage("My name vikash")// not show in retuns vlaue.
// console.log(loginUserMessage("My name vikash"));
// console.log(loginUserMessage("Kumar"));


function calculateCartPrice (val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(3, 400, 800, 500,850));

const user = {
    username: "Vikash",
    prices : 101
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // first mathod 
handleObject({  // second MAKE a value Assing
    username: "Vikash",
    price : 499
})

const myNewArray = [300, 450, 860,459]
function returnSecondValue (getarray) {
    return getarray [3]
 }

 console.log(returnSecondValue(myNewArray))
 console.log(returnSecondValue([350,780,600,400,150])); // derect method type value.