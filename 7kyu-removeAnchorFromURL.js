/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/



//P: input will be one, a string containing a URL address
//R: return the string without any anchor tag (# and anything following)
//E: 'www.codewars.com#about' => 'www.codewars.com'
//P: easiest way perhaps is to use split to look for the # and remove everything from that point on
  // as .split() returns an array of split strings, we'll return the 0th index to get the string portion before any splits on '#'


  function removeUrlAnchor(url){
    let splitStr = url.split('#');
    return splitStr[0]
  }