//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string


//P: input will be string of integers, will never be empty
//R: string of 0s and 1s, with digits below 5 becoming 0s and digits 5+ becoming 1s
//E: ('45385593107843568') => '01011110001100111'
//P: function (str){
  //split string into array of individual digits
  //loop through array creating new array of 0s/1s with conditional 
  //join binary array back into string
  //return new string
//}

function fakeBin(str){
    let digits = str.split('')
    let binArr = [];
    let binString = '';
    digits.forEach(num =>{
      if(num < 5){
        binArr.push(0)
      }else{
        binArr.push(1)
      }
    })
    binString = binArr.toString();
    return binString.replace(/,/g, '');
  }