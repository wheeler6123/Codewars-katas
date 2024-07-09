/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/

// P: This function takes two inputs, one for the volume of a potential cube container and the other the length of one side of the container. It is noted that the side will be an integer, but volume is not specified as such
// R: This function should return a boolean value for if the container described using the input variables could possibly be a cube or not. If it could be a cube, the function should return True, and False if not.
// E: [8,2] => True, as a container with cubic volume of 8 would be possible if all sides were of the given length 2
//    [8,3] => False, as a container with cubic volume of 8 would not be possible if the sides were of the given length 3
// P: We can do this in several ways, either using the built in method Math.cbrt(x) to determine the cubic root of the given volume, or by cubing the given side length and checking against the volume.
//    To verify inputs are valid, we need to insure that both input values are integers greater than 0
//    If using the built in method, we can simply check if the cubed root of the given volume equals the length of the side input value, and return the result


function cubeChecker(volume, side){
    return volume > 0 && side > 0 && (Math.cbrt(volume) === side);
  };