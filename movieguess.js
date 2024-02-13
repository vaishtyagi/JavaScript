const favMovie = "jab we met";
let guess = prompt("Guess my fav movie");

while((guess != favMovie)&&( guess != "quit")){
    guess = prompt("wrong guess,try againnn")
}

if (guess == favMovie){
    console.log("congratssss");
}
else{
    console.log("you quit!??whattt????")
}