/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.*/



//P: inputs will be 2 arrays, each consisting of 3 positive integers representing dimensions of a cube
//R: return the difference of volume between the 2 cubes
//E: [2,2,3], [5,4,1] => 8 (20-8)
//P: function (a,b){
  // calculate volume of each cube
  // substract volume of one cube from the other
  // return difference as a positive integer
//}

const findDifference = (a,b) => Math.abs((a.reduce((p,c)=>p*c))- (b.reduce((p,c)=>p*c)))