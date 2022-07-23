/*You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!*/



//P: input will be an array containing 3 strings
//R: though the description isn't clear, looking at the tests suggests that we are supposed to reverse the order of the array
//E: [3,2,1] => [1,2,3]
//P: should simply need to return the array in reverse order

const fixTheMeerkat = arr => arr.reverse()