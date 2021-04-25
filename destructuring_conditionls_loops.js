
// Objects Destucturing  es6

let info = {
    name: 'Aseem',
    age: 20,
    mail: {
        personalMail: 'personalmail@gmail.com',
        collegeMail: 'collegemail@college.edu.in'
    }
}

// console.log(info)

// old method for assigning values\
// const a 
// let name = info.name;
// let age = info.age;
// let p_mail = info.mail.personalMail;
// let c_mail = info.mail.collegeMail;

// console.log(name, age, p_mail, c_mail)

//destructuring

// let {name, age, mail } = info

// console.log(name, age, mail)

// let {
//     name,
//     age,
//     mail : {
//         personalMail,
//         collegeMail,
//     }
// } = info;

// console.log(name, age, personalMail, collegeMail)

// let {name, country} = {name: 'Aseem', country: 'India'}

// console.log(name, country)

// let name, country ;

// ({name, country} = info) ;

// console.log(name) ; // error 

// The ( ) around the assignment statement is required 
// syntax when using the object 
// literal destructuring assignment without a declaration. 
// This is because the {} on the left hand side is 
// considered a block and not an object literal

// Note that the variables in the object on the left 
// hand side should have the same 
// name as a property key in the object info. 
// If the names are different,
//  we'll get undefined:

// let {firstName} = info;
// console.log(firstName)

// let {name: firstName} = info;
// console.log(firstName)

// you can also user default values

// combining arrays with objects

// let college = {
//     name: 'PEC',
//     availableDegrees : ['BTech', 'Mtech', 'Phd']  
// }

// let {
//     name: collegeName,
//     availableDegrees: degrees} = college
// console.log(collegeName, degrees)

// let {name, ...others} = info
// console.log(others)

// conditionals 

// if else conditionals
// let a = 'no'
// if(true)
// {
//     a = 'yes'
// }
// console.log(a)

//  || && === !== > < >= <= 

// const size = 10;
 
// if (size > 100) {
//   console.log('Big');
// } else if (size > 20) {
//   console.log('Medium');
// } else if (size > 4) {
//   console.log('Small');
// } else {
//   console.log('Tiny');
// }
// .. ? s1 : s2
// size > 100 ? console.log('Big') : console.log('Medium') 

// loops

// for 
// while
// do while

// for ([initialization]); [condition]; [final-expression]) {
//     // statement
//  }

// var arr = [ 1, 2, 3 ];
//     for (var i = 0; i < arr.length; i++) {
//        console.log(arr[i]);
//     }

// for (var number = 1; number < 10; number+=2) {
//     if (number === 7) {
//         break;
//     }
//     console.info('number is ' + number);
// }

// for in loop

// for (variable in object) {
//     ...
//     }

// Initialize object.
a = { "a": "Apple", "b": "Banana", "c": "Cat" }

// Iterate over the properties.
// var s = ""
// for (var key in a) {
//     console.log(key, a[key])
//     }

// a=[4,5,6,6]
// for(var i of a)
// console.log(i)
    
// for of loop

// for (variable of object) {
//     statement
// }

// can be done for map, sets as well

//while loop

// while (condition)
// {
//   statement(s);
// }

// var i = 1;
// while (i < 10) 
// {
//   console.log(i);
//    i++; // i=i+1 same thing
// }

// var myArray = [];
// var i = 0;
// while (i <= 4){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray)

//do while 

// do {

//     Statement(s);
 
//  } while (*condition*);
