const accountId = 114567
let acountEmail =  "sourishaniee12@gmail.com"
var accountPwd = "12345"
accountCity = "bangaore"
let accountState;

// accountId = 11324 // not allowed because const you can't change 

accountEmail = "ajdwd@gmail.com"
accountPwd = "42342"
accountCity = "kolkata"
 
console.log(accountId);

/*
Prefer not to use var in javascript because var does not support block scope or functional scope.
Always use 'let' keyword instead of 'var'
*/

console.table([accountId, accountEmail, accountPwd, accountCity, accountState]);
