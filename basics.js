
// Writing comments in JS.
//-------------------------------------------------//

// Variables and datatypes in JS.

var intJsVariable = 23; 
var floatJsVariable = 45.56; 
var stringJsVariable = "Apple"; // 'Apple' also valid.
var boolJsVariable = true;
var undefinedJsVariable = undefined;

const constantVariable = "constant";

// constantVariable = "non-constant"; -------------  not allowed.---------- 

// Printing output in JS.
console.log(intJsVariable, typeof(intJsVariable));
console.log(floatJsVariable, typeof(floatJsVariable));
console.log(stringJsVariable, typeof(stringJsVariable));
console.log(boolJsVariable, typeof(boolJsVariable));
console.log(undefinedJsVariable, typeof(undefinedJsVariable));
console.log(constantVariable, typeof(constantVariable));

console.log('----------------------------------------------------------------------')

/*
// Alert in JS
alert("This is an alert..");

// Taking Input in JS.
var inputVar = prompt("enter a number");
alert(inputVar);*/


// let keyword in JS.

{
    // scope limited to here.
    let letVar = 45;
    console.log(letVar);
}

console.log('----------------------------------------------------------------------')

//console.log(letVar); // letVar Doesn't exist here.*/

// Type Casting in JS.

var strToInt = parseInt('123');
var strToFloat = parseFloat('123.45');
var numToStr = intJsVariable.toString();

console.log(strToInt, typeof(strToInt));
console.log(strToFloat, typeof(strToFloat));
console.log(numToStr, typeof(numToStr));

console.log('----------------------------------------------------------------------')