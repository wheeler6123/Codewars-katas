/* 
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/



//P: two inputs, both strings a first and a last name
//R: return the full name as one string
//E: 'James', 'Stevens' => 'James Stevens'
//P: just return a template literal with the two vars

const combineNames = (first, last) => `${first} ${last}`