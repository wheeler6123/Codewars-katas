/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/


//P: one input, an array, should contain only integers
//R: return the sum of the odd numbers in the array, after cubing the initial integers. If any of the array vals are not nums, return undefined
//E: [1,2,3,4] => 28
  // [-3, -2, 2, 3] => 0
  // ['a',12,9,'z',42] => undefined
//P: validation check, if not all elements are nums, return undefined
  // else, map through and cube each element
  // filter so only odds remain
  // reduce and return sum


  function cubeOdd(arr) {
    if(!arr.every(el => typeof(el) === 'number')) return undefined;
    let cubes = arr.map(el => el*el*el);
    let odds = cubes.filter(el => el%2 !== 0);
    return odds ? odds.reduce((a,b) => a+b) : 0
  }