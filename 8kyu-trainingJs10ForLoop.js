// The for loop is a very frequently used loop in JS.

// Recall in lesson 9 we wrote a while loop:

// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }
// We can rewrite it using a for loop, like this:

// function sum1_100(){
//   for (var sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated. The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.

// For the example above, the running order of the code is:

//                               <--- back to part 2
//                   -------------------------------------------
//                   |                 true                    |
// var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
//                                 |  
//                            false|
//                        loop terminated
// When you need to traverse an array, you can use the for loop to access each element using its index. Here's an example:

// function displayElements(array){
//   for (var i=0;i<array.length;i++){
//     console.log(array[i]);
//   }
// }
// This function will display every element of the array on your screen.

// Ok, lesson is over, let's do a task with for.

// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// P: program accepts one param, an array of numbers
// R: program returns an array, containing two arrays with the numbers in the input array separated into an array of odds and an array of evens
// E: [1,2] => [[1],[2]]
//    [1,2,3] => [[1,3],[2]]
//    [3,2,1] => [[3,1],[2]]
// P: Using a for-loop, iterate through the numbers in the input array, check for odd even using modulo, then push the number to the correct array

function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]%2==0){
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    
    
    return [odd,even];
  }