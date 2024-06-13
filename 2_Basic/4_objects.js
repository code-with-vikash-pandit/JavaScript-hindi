// const newApp = new object ()

// const newApp1 = {} // constractor on create object.

// appUser.id = "2121a"
// appUser.name = "Vikash"
// appUser.isLoggedIn = false

// console.log(newApp1);

const regularUser ={  
    email: "vikash@outlook.com",
    fullname:{
        userfullname :{
            firstname: "Bittu",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.lastname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2}
// const obj4 = Object.assign({}, obj1,obj2,obj3) // ek line me laata hai. wabhi array ke form me.

const obj4 = {...obj1,...obj2,} // hum ese (Spried operator) bolte jaada use hi use kiya jaata hai. 
// console.log(obj4);

const users = [  // ese hum (ARRAy of object) bolte hai.
    {
        id: vikash12,
        email: "vikash2121@outlook.com",
    },

    {
        id: vik1,
        phone: +91,
    },

    {
        id: vik12,
        address: "Bihar",
    }
]

users[1].address
console.log(newApp1)