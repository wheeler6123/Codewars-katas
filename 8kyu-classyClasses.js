// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// P: input is the shell structure for a class called Person with a constructor function inside
// R: return the class component with the constructor function working properly so that a new Person takes in a string name and an integer age, along with a getInfo method that returns 'johns age is 34'
// E: let john = new Person('john', 34) => john.info returns 'johns age is 34'
// P: write the constructor to require two params, one for name and one for age
//    add a property called info that returns a template literal saying 'names age is age'


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.info = `${name}s age is ${age}`
    }  
  }