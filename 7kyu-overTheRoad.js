// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8
// Note about errors
// If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)


// P: program accepts two params, both integers, the first representing the address of your house, the second the length of the street, represented as the number of houses along one side of the street
// R: program should return an int, representing the house number of the home directly across the street from your own
// E: 1,3 => 6 (the street has houses on the right side using even numbers and increasing in value, on the left are odds in decreasing order)
//    3,3 => 4
//    2,3 => 5
// P: While tempting to build two arrays using evens and odds to the length of the street, the potential tests can generate random numbers in the hundreds of billions, so two massive lists will fail and time out
//    Using the formula 2n + 1 - a will give us the corresponding address for the house across the street, regardless of whether or not a is odd or even 

const overTheRoad = (a,n) => (2*n+1) - a;