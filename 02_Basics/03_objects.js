//objects has key value pair

//object literals

const mySym = Symbol("key")  
const user = {
    name : "vaish",
    [mySym] : "myKEY"  ,                    // symbol is declaired in square brackket or the output we get is in form of string 
    age : 20,
    "e mail" : "vaish@gmail",
    location : "Pune" 
}
// console.log(user.name);
// console.log(user["name"]);
// //console.log(user.email);
// console.log(user["e mail"]);
// console.log(user[mySym]);   // symbol can only be accessed in square brackets
// console.log(mySym);

// console.log(user)

// Object.freeze(user)   //freeze is used, after it no changes will be done

user.greeting = function(){
    console.log("hellooo userrrr")
}
console.log(user.greeting())

user.greetingtwo = function(){
    console.log(`hellooo userrr ${this.name}`)
}
console.log(user.greetingtwo());
