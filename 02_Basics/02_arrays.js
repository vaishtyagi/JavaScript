const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]


// marvel_heros.push(dc_heros)                 push
// //console.log(marvel_heros);


// const newhero = marvel_heros.concat(dc_heros)           concat
// console.log(newhero);


// const hero = [...marvel_heros,...dc_heros]                 //spread:  works just like concat (...)
// console.log(hero);

// const another_array = [1,2,3,[4,5,6],[7,8,[9,10,11]],[12,13]]
// const new_another_array = another_array.flat(1)  // value in ( ) is the layer we want to open
// console.log(new_another_array);

// console.log(Array.isArray("vaishnavi"));   // boolean output is given 
// console.log(Array.from("vaishnavi"));      // converts string to array and gives output


// const math = 67
// const bio = 78
// const chem = 89
// console.log(Array.of(math,bio,chem));