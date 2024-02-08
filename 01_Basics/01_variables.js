const accountId = 123456
let accountEmail = "bhibu@gmail" /* good way of declairing*/ 
var accountPassword = "hagsja"
accountCity = "Pune" /* not a good way of declairing variable*/
let accountState

accountEmail = "ghty@gmail"
accountPassword = "j23fd"
accountCity = "goa"

/*
Prefer not to use var, because of its problem inblock scope and functional scope
*/

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])