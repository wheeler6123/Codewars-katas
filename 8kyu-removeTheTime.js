// Task Description
// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

// P: one input, a string, consisting of a long format timestamp using the format Weekday Month Day, Time
// R: return a string, consisting of the input timestamp with only Weekday Month Day included, omitting the Time
// E: "Friday May 2, 7pm" => "Friday May 2"
// P: split the string at the location of the comma
//    return the first portion of the split string

function shortenToDate(longDate) {
    let split = longDate.split(',');
    return split[0];
  }