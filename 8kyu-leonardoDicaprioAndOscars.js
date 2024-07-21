// You have to write a function that describe Leo:

// function leo(oscar) {

// }
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

// P: one input, an integer
// R: a string comprised of 4 given options, to be selected based on the value of the input integer
// E: 89 => 'Leo got one already!' as the input val is greater than 88
//    88 => 'Leo finally won the oscar! Leo is happy!' as the input val is 88
//    87 => 'When will you give Leo an Oscar?' as the value is not 86 but less than 88
//    86 => 'Not even for Wolf of wallstreet?!' as the value is 86
// P: check for the 86 and 88 first, since they are the specific values, then check for less than 88 since 86 would already have returned a response, and lastly return 88+ value as the default option


const leo = oscar => oscar == 88 ? 'Leo finally won the oscar! Leo is happy' : 
                     oscar == 86 ? 'Not even for Wolf of wallstreet?!' :
                     oscar < 88 ? 'When will you give Leo an Oscar?' :
                     'Leo got one already!';