const accountID = "saurabh";
let accountName = "sandy";
var accountPassword = 12345;
accountcity = "gairsain";


//accountID = 2 // not allowed because it is decalred with const keyword 


accountName = "saurabh";
accountPassword = 456;
accountcity = "salyana";
console.log(accountName);
/*prefer not to use var because
of issue in block scope and fucitonal scope
*/


console.table([accountID, accountName, accountPassword, accountcity]);

