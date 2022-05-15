/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.*/



//P: input will be two integers greater than 0, representing the length and width measurements of a 4-sided polygon
//R: if input is a square, return the area if input is a rectangle return its perimeter
//E: 6, 10 --> 32
    //3, 3 --> 9
//P:function(l,w){
  //check if l and w are equal
  //if equal, return l*w
  //if not equal, return 2*l + 2*w
//}

const areaOrPerimeter = (l,w) => l === w ? l*w : 2*l + 2*w