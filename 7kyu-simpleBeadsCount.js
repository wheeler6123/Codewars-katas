// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

// P: This program accepts one input, n, an integer representing the number of blue beads in a string of red and blue beads where two red beads are placed between every two blue beads
// R: Return an integer representing the count of red beads given the input value for blue beads
// E: 0 => 0, if there are fewer than 2 blue beads, the function should return 0
//    3 => 4, there are two red beads between the first two blue beads and two more between the second two blue beads
// P: This function is fairly simple, first we verify that there are at least two blue beads, if not, return 0. If there are at least 2 blue beads, we subtract 1 from the number of blue beads and double it, giving us the number of red beads present. Return that value.


function countRedBeads(n) {
    return n > 1 ? (n-1)*2 : 0;
  }