//Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = str => str.toLowerCase().split('').reverse().join('') === str.toLowerCase() ? true : false
