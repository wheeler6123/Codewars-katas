/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico.

Notes:

The input array will always be valid and formatted as in the example above.
*/


//P: one input, an array containing a list of attendee objects
//R: return a string for the first python dev coming - either 'firstName, country' or 'There will be no Python developers'
//E: { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' } => 'Victoria, Puerto Rico'
  // { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' } => 'There will be no Python developers'
//P: first, check if the array contains any python devs, if not return default
  // if it does, return a string with the dev's first name and the country they are from

  function getFirstPython(list) {
    if(!list.some(attendee => attendee.language === 'Python')){
      return 'There will be no Python developers'
    }
    
    for(let i=0; i<list.length; i++){
      let attendee = list[i];
      if (attendee.language === 'Python'){
        return `${attendee.firstName}, ${attendee.country}`
      }
    }
  }