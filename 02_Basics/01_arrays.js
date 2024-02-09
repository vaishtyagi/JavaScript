//array
const myArr = [0,1,2,3,4,5] //different datatypes of elements can be there 
const myHeros = ["thor","hulk"]
const myArr2 = new Array (1,2,3,4) 
//console.log(myArr[2]);

//Array Methods
// myArr.push(8)
// myArr.push(9)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));
// console.log(myArr);


//splice,slice

console.log("A", myArr); //original array

const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B",myArr); // slice used : slice does not manipulate original array

const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("C",myArr);//splice used; splice manipulates the original array