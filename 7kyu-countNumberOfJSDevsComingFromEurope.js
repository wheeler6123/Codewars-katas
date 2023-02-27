/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
*/


//P: one input, an array of objects containing info about attendees of a meetup
//R: return the number of attendees who are JavaScript devs and coming from Europe
//E: var list1 = [
  //{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  //{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  //{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  //{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//]; => returns 1
//P: use filter method to reduce array to JS devs coming from Europe, then return the length


const countDevelopers = list => list.filter(person => person.continent === 'Europe' && person.language === 'JavaScript').length