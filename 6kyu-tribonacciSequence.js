/* 
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/



//P: two inputs, one an array containing 3 integers and a second lone non-negative integer (n)
//R: if n is 0, return an empty array. Otherwise, return an array out to n elements containing a tribonacci sequence, starting with the 3 input integers in array and each subsequent number is the sum of the 3 integers preceding it
//E: [1,1,1], 10 => [1,1,1,3,5,9,17,31,57,105]
  // [0,0,1], 10 => [0,0,1,1,2,4,7,13,24,44]
//P: first, make sure n is greater than 0, if not, return an empty array
  // if n is greater than 1, it will represent the total length of the return array, with the first 3 elements being those in the input array
  // initialize a return array with the signature array
  // run a for loop n-3 times (to account for input signature elements) adding the integers in the 3 indices preceding the new num
  // after running n -3 times, return the array



  function tribonacci(signature,n){
    let sequence = []
    if(n < 1){return sequence}
    if(n < 4){return signature.slice(0, n)}
    
    sequence = signature
    
    for(let i = 3; i<n; i++){
      let nextNum = sequence.slice(i-3).reduce((a,c) => a+c, 0)
      sequence.push(nextNum)
    }  
    return sequence
  }