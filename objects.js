
// objects.

/*Real Life Objects, Properties, and Methods
In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:*/


// a person object with some properties.
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person);
console.log('----------------------------------------------------------------------')


// accessing object properties.
console.log(person.age);
console.log(person.eyeColor);
console.log(person['age']);
console.log('----------------------------------------------------------------------')


// a person object with a method of full name. 
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

var fullname = person.fullName();
console.log(fullname);
console.log('----------------------------------------------------------------------')


/*The this Keyword
In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.*/


// Declaring objects in JS.
var person = new Object();    /// OR var person = {} 
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);
console.log('----------------------------------------------------------------------')


// Objects Constructor.

function Person(first, last, age, eye) {  // constructor function.
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

var person = new Person('Mark', 'Luis', 23, 'grey');
console.log(person);

var date = new Date()       // inbuilt constructor function explore on your own.
console.log(date);
console.log('----------------------------------------------------------------------')
