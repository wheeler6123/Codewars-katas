/* 
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/



//P: two inputs, first an array of integers and second an integer representing the max number of times an int should occur in the array
//R: return an array containing the input integers, with any excess occurrences removed per the max number of times
//E: [1,2,3,2,2,1,3,5,3,6], 2 => [1,2,3,2,1,3,5,6]
  // [20,37,20,21], 1 => [20,37,21]
//P: create a count object that will take in the elements of the array and count their occurrences as you iterate through
  // create an empty array to take in the input elements until max occurrences is met
  // iterate through array, checking the number of occurrences for each element
  // if the count is less than the max, push the element to the return array and increment the counter object for that value
  // elements with values that have already hit the max will be ignored and not added to return array
  // return the return array with proper limits of values



function deleteNth(arr,n){
  let counts = {};
  let limited = [];
  
  for(let i = 0; i<arr.length; i++){
    let current = arr[i];
    if(!counts[current]){
      counts[current] = 1;
      limited.push(current);
    }else if(counts[current] < n){
      counts[current] += 1;
      limited.push(current);
    }
  }
  return limited
}