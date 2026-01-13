
// // whart is javascript ? and what is the use of javascript ?
// // JavaScript is a versatile programming language primarily used for creating interactive and dynamic content on websites. It allows developers to implement complex features such as animations, form validations, and real-time updates, enhancing user experience. Additionally, JavaScript can be used for server-side development through environments like Node.js, making it a full-stack development language. Its widespread use and extensive libraries make it a fundamental tool in modern web development.

// // console.log("Hello, World!");

// // aman kumar 1 
// // satender 0
// // pankaj 

// // // what is ternery operator ?
// // The ternary operator is a concise way to perform conditional expressions in programming languages like JavaScript. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false. The syntax is: condition ? valueIfTrue : valueIfFalse. It allows for shorter and more readable code compared to traditional if-else statements when assigning values based on conditions.

// // // example of ternary operator
// // let age = 18;
// // let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
// // console.log(canVote); // Output: Yes, you can vote.


// // let a = 5
// // console.log(a++) // Output: 5
// // console.log(a++) // Output: 6
// // console.log(a--) // Output: 7
// // console.log(--a) // Output: 6
// // console.log(a++) // Output: 7


// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return 'leap year';
//     } else {
//         return 'not a leap year';
//     }
// }
// console.log(isLeapYear(2020))
// console.log(isLeapYear(2026))
// console.log(isLeapYear(1900))
// console.log(isLeapYear(2021))


// // diff between deep copy and shallow copy ?
// // A shallow copy creates a new object that references the same memory locations as the original object for nested objects, meaning changes to nested objects in the copy will affect the original. A deep copy, on the other hand, creates a completely independent copy of the original object and all of its nested objects, so changes to the copy do not affect the original.

// // example of shallow copy
// let original = { a: 1, b: { c: 2 } };
// let shallowCopy = Object.assign({}, original);
// shallowCopy.b.c = 3;
// console.log(original.b.c); 

// // example of deep copy
// let deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.b.c = 4;
// console.log(original.b.c);

// // Array.flatMap() method in JavaScript is used to first map each element of an array to a new value using a provided function, and then flatten the resulting array by one level. It combines the functionality of map() and flat() into a single method, making it useful for transforming and flattening arrays in a concise manner. This method is particularly helpful when dealing with nested arrays or when you want to apply a transformation that results in multiple values for each input element.

// // example of Array.flatMap()
// let arr = [1, 2, 3];
// let result = arr.flatMap(x => [x, x * 2]);
// console.log(result); // Output: [1, 2, 2, 4, 3, 6]


// function isPrime(num) {
//     if (num <= 1) return 'not a prime number';
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return 'not a prime number';
//     }
//     return 'prime number';
// }
// console.log(isPrime(11))




// function secondLargest(arr) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] !== first) {
//             second = arr[i];
//         }
//     }

//     return second === -Infinity ? 'No second largest number' : second;
// }


// let str = 'ramesh'
// let resulta = ''
// for(let i=0; i<str.length; i++){
//     resulta += str[i]
//     console.log(str[i])
// }

