// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// P: two inputs, one an integer representing the total bill amount, the second a string representing the rating for the service received
// R: return an integer, representing the correct tip amount rounded up to the nearest dollar
// E: 20, Excellent => 4, as Excellent equates to a 20% tip
//    26.95, good => 3, as good equates to a 10% tip then rounded up to 3
// P: convert the rating to validate input and negate case sensitivity
//    Based on the rating, apply the correct tip % to the bill amount
//    Return the tip result, rounded up to the nearest whole number

function calculateTip(amount, rating) {
    let caseAgnosticRating = rating.toLowerCase();
    let tipGuide = {
      terrible: 0,
      poor: .05,
      good: .10,
      great: .15,
      excellent: .20
    }
    let validRatings = Object.keys(tipGuide);
    if(!validRatings.includes(caseAgnosticRating)) return 'Rating not recognised'
    return Math.ceil(tipGuide[caseAgnosticRating]*amount);
  }