/*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!*/


//P: two params both integers, one for 'n' number of classmates and one for 'm' number of pages in paperwork. Inputs can be negative
//R: return the total number of blank pages to copy the paperwork for all of your classmates. If any input is negative, return 0
//E: (5,5) => 25
    //(5,0) => 0
//P: function (n,m){
  //check for negative inputs, return 0 if found
  //otherwise return n*m
//}

const paperwork = (n,m) => n < 0 || m < 0 ? 0 : n*m