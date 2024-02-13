   //SCOPE

//scope determines the accessebility of variables objects and 
//functions from different parts of code
// function,Block,Lexical

// let sum= 45;  //global scope

// function calSum(a,b){
//     let sum= a+b; //function scope
//     console.log(sum);   //can get value of sum only within the function
// }
// calSum(1,4);
// console.log(sum);

// BLOCK SCOPE = variables declared inside {} cannot be accessed outside the block
//LEXICAL SCOPE = variables of a function can be called inside the nested function 



// higher order functions

function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("heyyy")
}
multipleGreet (greet,7);