/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/


//P: eight inputs, all positive integers, representing the ages at which an individuals great grandparents died
//R: using the provided formula instructions, return the predicted age at which the individual will die
//E: predictAge(65, 60, 75, 55, 60, 63, 64, 45) => 86
//P: add the ages to an array, map the array to square each age, reduce to a sum, take the square root of the sum and divide by 2, return

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    let sqArr = arr.map(age => age*age)
    let sum = sqArr.reduce((a,c) => a + c)
    let sqRt = Math.sqrt(sum)
    return Math.floor(sqRt/2)
  }