/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
    const posArr = arr.filter(num => num > -1);
    let sum = 0;
    for (i = 0; i < posArr.length; i++){
      sum += posArr[i];
    }
    return sum;
  }