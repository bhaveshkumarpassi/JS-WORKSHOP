
// Strings.

var testStr = "This-is-a-test-string";

var len = testStr.length; // to get length of string.
console.log(len);
console.log('\n');
console.log('----------------------------------------------------------------------')

var testPos = testStr.indexOf('test'); // to get index where test starts in given string.
console.log(testPos);
console.log('\n');
console.log('----------------------------------------------------------------------')

// slice() extracts a part of a string and returns the extracted part in a new string.
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);
console.log('\n');
console.log('----------------------------------------------------------------------')


var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);
console.log('\n');
console.log('----------------------------------------------------------------------')


//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);
console.log('\n');
console.log('----------------------------------------------------------------------')


//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);
console.log('\n');
console.log('----------------------------------------------------------------------')



var str = "Please visit PEC!";
var res = str.replace("PEC", "IIT Chandigarh ");
console.log(res);
console.log('\n');
console.log('----------------------------------------------------------------------')


var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
console.log(text2);
console.log('----------------------------------------------------------------------')


var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2);
console.log('----------------------------------------------------------------------')
