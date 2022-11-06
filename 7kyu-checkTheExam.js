/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0*/


//P: two inputs, both arrays containing a set of lowercase letters representing the answer key and the student's test answers
//R: return the students score, giving +4 for each correct answer and -1 for each incorrect answer, with 0 for each blank answer
//E: ['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'] => 6
//P: iterate through the test loop checking against the answer key and modifying the score total appropriately
  // return the score total after all answers have been checked

  function checkExam(array1, array2) {
    let score = 0;
     for(let i = 0; i < array1.length; i++){
       if(array1[i] === array2[i]){
         score += 4;
       }else if(array2[i] === ''){
         
       }else{
         score -= 1
       }
     } return score <= 0 ? 0:score
   }