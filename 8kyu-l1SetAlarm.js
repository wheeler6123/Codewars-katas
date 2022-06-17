/*Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true*/



//P: two inputs, both boolean values, first one employment status, second vacation status
//R: return whether or not you need an alarm based on employment and vacation status
//E: (true, true) => false
  //(true, false) => true
//P: function(emp, vac){
  //check emp for true, if false return false
  //if emp true, check vac for true, if false return true, if true return false
//}

const setAlarm = (emp, vac) => !emp ? false : vac ? false : true