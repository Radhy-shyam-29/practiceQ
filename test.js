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

// const data = [
//   1,
//   2,
//   [3, 4, [5, 6]],
//   {
//     name: "Rohit",
//     skills: ["JS", "React", ["Node", "Mongo"]],
//     address: {
//       city: "Delhi",
//       pin: 110001
//     }
//   }
// ];

// // let deep = JSON.parse(JSON.stringify(data))

// function checking(value){
//   if(typeof value !== 'object' || value === null){
//     return value
//   }
//   let deepest = Array.isArray(value) ? [] : {}

//   for(let key in value){
//     deepest[key]  = checking(value[key]);
//   }
//   return deepest
//   }

//   let deepcopy = checking(data);

// function sum(...a){
//     let total = 0
//     for(let num of a){

//         if(typeof num !== 'number'){
//             return 'not valid number'
//         }else{
//             total += num
//         }
//     }
//     return total
// }

// console.log(sum())

// function sum(...a) {
//   let total = 0;

//   for (let num of a) {
//     if (typeof num !== "number") {
//       return "not valid number";
//     }
//     total += num;
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4));

// const defaults = { theme: "dark", lang: "en", notifications: true };
// const userPrefs = { theme: "light", fontSize: 14 };

// function saveSettings(...settings) {
//   let merged = {};

//   for (let set of settings) {
//     merged = { ...merged, ...set };
//   }

//   console.log(merged);
// }

// saveSettings(defaults, userPrefs);

// let n = 5

// for(let i=0; i<=n; i++){
//     let result = ''
//   for(let j=1; j<=i; j++){
//       result += j
// }
// console.log(result)
// }

//     A
//    B C B
//   C D E D C
//  D E F G F E D
// E F G H I H G F E
//  D E F G F E D
//   C D E D C
//    B C B
//     A

// let n = 5

// for(let i=0; i<=n; i++){
//     let result = ''
//     for(let k=5-i; k>0; k++){
//         result += ' '
//     }
//     for(let j=0; j<i+1; j++){
//         result += '*'
//     }
//     console.log(result)
// }

// console.log(String.fromCharCode(72), String.fromCharCode(69), String.fromCharCode(76), String.fromCharCode(76), String.fromCharCode(79), " ", String.fromCharCode(87), String.fromCharCode(79), String.fromCharCode(82), String.fromCharCode(76), String.fromCharCode(68))

// let arr = [
//   (String.fromCharCode(65 + 7)),
//   (String.fromCharCode(65 + 4)),
//   (String.fromCharCode(65 + 11)),
//   (String.fromCharCode(65 + 11)),
//   (String.fromCharCode(65 + 14)),
//   (String.fromCharCode(32)),
//   (String.fromCharCode(65 + 22)),
//   (String.fromCharCode(65 + 14)),
//   (String.fromCharCode(65 + 17)),
//   (String.fromCharCode(65 + 11)),
//   (String.fromCharCode(65 + 3)),
// ];

// console.log(arr.join(''))

// let codes = [7,4,11,11,14,22,14,17,11,3]
// let result = ''
// for(let i=0; i<codes.length; i++){
// result += String.fromCharCode(65+codes[i])
// }
// console.log(result)

// let s = new Set()

// s.add(100)
// s.add(20)
// s.add(30)

// console.log(s)

// let arr = [10,20,30,20,100,20,30,40,50,10,20]

// let s = new Set()

// for(let t of arr){
//     s.add(t)
// }
// console.log(s)

// let str = "fjshklad";
// let s = new Set(str);
// if (str.length == s.size) {
//   console.log("no repeating");
// } else {
//   console.log("repeating");
// }

// let alphabets = 'qwertyuiopasdfghjklzxcvbnm'

// if(alphabets >= 97 && alphabets <= 122){
//     console.log('only alphabets')
// } else{
//     console.log('something else')
// // }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < arr.length; i++) {
//   let result = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     result +=arr[i][j];
    
// }
// console.log(result);
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr[0].length; i++) {
//   let result = 0;

//   for (let j = 0; j < arr.length; j++) {
//     result += arr[j][i];
//   }

//   console.log(result);
// }


// let rows = arr.length
// let col = arr[0].length

// for(let i=0; i<rows; i++){
//     let result = 0
//     for(let j=0; j<col; j++){
//         result += arr[j][i]
//     }
//     console.log(result)
// }

// let arr = [1,2,4,23,3,4,5,6,45,4,3,2,21,3,4,5,56,6]
// let freq = {}

// for(let i=0; i<arr.length; i++){
//     if(freq[arr[i]]){
//         freq[arr[i]]++
//     }
//     else{
//         freq[arr[i]] = 1
//     }
// }
// console.log(freq)

// let arr = [1,2,4,23,3,4,5,6,45,4,3,2,21,3,4,5,56,6]

// let freq = new Map()

// for(let i=0; i<arr.length; i++){
//     if(freq.has(arr[i])){
//         freq.set(arr[i], freq.get(arr[i]) + 1)
//     }
//     else{
//         freq.set(arr[i] , 1)
//     }
// }
// console.log(freq)

// let arr = [10,21,30,43,50]

// let mapwala = arr.filter((value) => {
//     if(value%2==0){
//         return value
//     }
// })

// console.log(mapwala)

// let mapa = []
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         mapa.push(arr[i])
//     }
// }
// console.log(mapa)


// let arr = [
//   { name: "Ramesh", age: 18 },
//   { name: "Mohan",  age: 16 },
//   { name: "Sohan",  age: 46 },
//   { name: "Vinod",  age: 20 }
// ];

// let x = arr.filter((value) => {
//     if(value.age > 18){
//         return value.age
//     }
// })
// console.log(x)


let countries = [
  "India",
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "South Africa",
  "Italy"
];

// for(let i=0; i<countries.length; i++){
//     if(countries[i].includes('a') && countries[i].includes('i')){
//        console.log(countries[i])
//     }
// }

let x = countries.filter((value) => {
     if(value.includes('a') && value.includes('i')){
     return value
 }
})
console.log(x)