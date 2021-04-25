
// Arrays.

var emptyAr = [];
var fruits = ['apple', 'mango', 'banana', 'orange'];

console.log(fruits[0]) // accessing an element.
console.log(fruits.length) // getting length.

fruits[0] = 'peach'; // replacing an element.
console.log(fruits);

fruits.push('grapes'); // adds element at back of array.
console.log(fruits);

fruits.pop();   // removes an element from end of array.
console.log(fruits);
console.log('----------------------------------------------------------------------')


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 2);        // Removes the first element of fruits
console.log(fruits);
console.log('----------------------------------------------------------------------')
//The first parameter (0) defines the position.
//The second parameter (2) defines how many elements should be removed.


//The concat() method creates a new array by merging (concatenating) existing arrays:
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
console.log(myChildren);
console.log('----------------------------------------------------------------------')

// sorting array in JS.

// Increasing order.
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // sort action to be taken when a > b i.e a-b is positive.
console.log(points);
console.log('----------------------------------------------------------------------')


// Decreasing order.
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);
console.log('----------------------------------------------------------------------')
