/* 
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/



//P: 4 input params, all strings, the first two being strings for the entered code and the correct code, second two strings represent dates for date used and date code expires
//R: return boolean value for if the code is valid or not
//E: "123", "123", "July 9, 2015", "July 9, 2015" => true
  // "123", "123", "July 9, 2015", "July 2, 2015" => false
//P: first, check the entered code matches the correct code exactly
  // if it does, check the current date is equal to or less than expiration date

  function dateCompare(c,e){
    let currentSplitDate = c.replaceAll(',', '').split(' ')
    let expiringSplitDate = e.replaceAll(',', '').split(' ')
    const months = {'jan' : 1, 'feb': 32, 'mar': 60, 'apr': 91, 'may': 121, 'jun': 152, 'jul': 182, 'aug': 213, 'sep': 244, 'oct': 274, 'nov': 305, 'dec': 335}
    let currentYear = +currentSplitDate[2]
    let expiringYear = +expiringSplitDate[2]
    let currentMonth = currentSplitDate[0].toLowerCase().substring(0,3)
    let expiringMonth = expiringSplitDate[0].toLowerCase().substring(0,3)
    let currentDay = Number(currentSplitDate[1])
    let expiringDay = Number(expiringSplitDate[1])
    if(expiringYear > currentYear){
      return true
    }else if(expiringYear < currentYear){
      return false
    }else{
      return (months[currentMonth] + currentDay) <= (months[expiringMonth] + expiringDay)
    }
  }
  
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && dateCompare(currentDate, expirationDate)
  }