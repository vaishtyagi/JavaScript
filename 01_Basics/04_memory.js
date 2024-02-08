//datatype = primitive and non primitive(reference)
// in primitive (string, boolean,null,undefined,bigint,number, symbol)
//in non primitive or reference = arrays,objects,functions


// memory = stack (primitive)
//          heap  (non primitive)
                               
let myinstaName = "vaishartzz"      // mmemory storage in case of primitive
let anotherName = myinstaName       // stack me uska copy milta hai
anotherName= "vaishnavi"

console.log(myinstaName)
console.log(anotherName);


let userOne ={                    //memory storage in ccase of non primitive
    email: "user@gmail",          //heap me uska reference milta hai
    upi  : "user@bi"
}
let userTwo = userOne
userTwo.email = "vaish@gmaail"
 
console.log(userOne.email);
console.log(userTwo.email);