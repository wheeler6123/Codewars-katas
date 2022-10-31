/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)*/


//P:three inputs, all integers, first being beginning, second being end, and third being step multiple
//R: return an integer for the sum of the integers included in the count from beginning to end (if begin is greather than end, return 0)
//E: 2,2,2 => 2
  // 2,6,2 => 12 (2 + 4 + 6)
//P: populate an array with the integers from beginning to end, using the step multiple
  // return array reduced to sum



  const sequenceSum = (begin, end, step) => {
    let arr = [];
    if(begin > end || step > (end-begin) || step < 1){
      return 0;
    }else{
      for(let i = begin; i <= end; i+=step){
        arr.push(i);
      }
    }return arr.reduce((a,c)=>a+c)
  };