// let obj = {
//     3 :'a',
//     '7' : 'rr',
//     ac : 'vd',
//     '0' : 'dsvd',
//     '1' : 'devd',

// }
// console.log(obj[3]);

// // console.log(Object.assign({aa:3}, {a:2}, {b:1}))

// let a = { name: "Radhey", marks: { math: 90 } };

// let b = Object.assign({}, a);

// b.name = "Rahul";
// b.marks.math = 100;

// console.log(a.name);        // "Radhey"
// console.log(a.marks.math); // 100

// let name  = 'rrrr'
// age  = 44
// let obj = {
//   data: { score: 10, marks  :  35},
//   name,
//   age,
// };
// console.log(obj);

// Object.freeze(obj);
// obj.data.score = 99;

// // console.log(obj);
// let obj = { a: 1, b: 2 };
// console.log(obj.c);

// let obj = {};
// obj["name"] = "Radhey";
// obj.age = 27;

// console.log(Object.keys(obj).length);

// let obj = {}
// let b = 'ramesh'
// obj['b'] = 'abcd'
// obj.age = 25

// console.log(obj, Object.keys(obj).length)

// let str = 'ramesh is dancing on the floor'

// let arr = str.split(' ')

// console.log(arr);

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [4, 3, 2, 10]
// let bhr = 0
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(j==i){
//             continue
//         }
//         else{
//            bhr +=(arr[j])
//         }
//     }
//     console.log(bhr)
//     bhr = 0
// }

// let arr  = [4,3,2,10]
// let total = 0
// for(let i =0; i<arr.length; i++){
//     total += arr[i]
// }
// let result = []
// for(let j=0; j<arr.length; j++){
//  result.push(total-arr[j])
// }
// console.log(result);

// customerData = {
//   "name": "John Doe",
//   "email": "johndoe@example.com"
// }

// orderDetails = {
//   "orderHistory": ["order1", "order2", "order3"],
//   "totalSpentAmount": 500
// }

// let newObj = {...customerData, ...orderDetails}

// console.log(newObj)

// let arr = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
//   [10, 20, 30]
// ];
// let uncover = []
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
// uncover.push(arr[i][j])
//     }
// }
// let biggest = -Infinity
// let second = -Infinity
// for(let k=0; k<uncover.length; k++){
//     if(uncover[k]>= biggest){
//         second = biggest
//         biggest = uncover[k]
//     }
// }
// console.log(second);

// let engagementMetrics = [100,200,300]

// engagementMetrics["likes"] = 500;

// console.log(engagementMetrics);

// console.log(engagementMetrics.length);

// let cartItems = [10, 20, 30, 40, 50];

// for (let i = 0; i < cartItems.length; i++) {
//   cartItems.pop();
// }
// console.log(cartItems);

// // let cartItems = [10, 20, 30, 40, 50];
// // let size = cartItems.length;

// // for (let i = 0; i < size; i++) {
// //   cartItems.pop();
// // }

// // console.log(cartItems);

// const userProfile = {
//   name: "John Doe",
//   age: 25,
//   location: "New York",
//   right : 50
// };

// // userProfile.age = 26;

// userProfile = { name: "Jane Doeg", age: 30, location: "Los Angeles", right : 55 };
// console.log(userProfile);

// let arr = [
//   ["1", "Dish1", 10],
//   ["2", "Dish2", 20],
//   ["3", "Dish3", 30],
// ];
// let total = 0
// for(let i =0; i<arr.length; i++){
//     total += arr[i][2]
// }
// console.log(total);


// for (let ch of "ABC") {
//   console.log(ch);
// }


//  let name = 'ramesh'
// // console.log(name.charAt(4))
// let storeUnique = ''
// for(let char of name){
//     if(char == 'a' ||char == 'e' ||char == 'i' ||char == 'o' ||char == 'u' ){
//         storeUnique += char
//     }
// }
// console.log(storeUnique)

//  let name = 'ramesh'
// let reverse = ''
// for(let i=name.length-1; i>=0; i--){
//     reverse =  name[i] + reverse
// }

// console.log(reverse)

// //  let name = 'ramesh'

// let names = 'ram is dancing on the floor '
// let count = 0
// for(let char of names){
//     if(char !== ' '){
//         count++
//     }
// }
// console.log(count)

// let na = 'Radhey'

// let ascii = na.charCodeAt(0)
// ascii = ascii + 32

// console.log(String.fromCharCode(ascii))

// let input = 'We promptly judged antique ivory buckles for the prize'
// input.split(' ').join('').toLowerCase()
//   console.log(input)

// let str = 'this is a sample string'
// let word = ''
// let count = 0
// for(let i=0; i<str.length; i++){
//     if(str[i] !== ' '){
// word = word + str[i]
// }

// if(str[i] == ' ' || i == str.length-1){
//     count++
//     console.log(word)
//     word = ''
//     }
// }
// console.log(count)

// let str = 'this is a sample string'
// let word = ''
// let count = 0

// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== ' ') {
//     word = word + str[i]
//   }

//   if (str[i] === ' ' || i === str.length - 1) {
//     count++
//     console.log(word)
//     word = ''
//   }
// }

// console.log(count)

// if( word !== ''){
//     count++
//     // console.log(word)
// }

// let str = 'this is a sample string'
// let word = ''
// let count = 0
// for(let char of str){
//     if(char !== ' '){
// word = word + char
// }
// else{
//     count++
//     console.log(word)
//     word = ''
//     }
// }
// if(word !== ''){
//     count++
//     // console.log(word)
// }
// console.log(word, count)

// 1
// abc
// 4
// ab
// abd
// cacb
// cabef

// let func = function(value){
//     // let str = 'abc'
//     let count = 0
//     for(let i=0; i<value.length; i++){
//         if('abc'.includes(value[i])){
//          count++
//         }
//     }
//     console.log(count)
// }

// func(['abc','abcd','ab','cfd','abbbbbbb','acbc'])

// let func = function (value) {
//   let count = 0;

//   for (let i = 0; i < value.length; i++) {
//     let word = value[i];
//     let valid = true;

//     for (let ch of word) {
//       if (!"abc".includes(ch)) {
//         valid = false;
//         break;
//       }
//     }

//     if (valid) {
//       count++;
//     }
//   }

//   console.log(count);
// };

// func(["abc", "abcd", "ab", "cfd", "abbbbbbb", "acbc"]);

// for(let i=0; i<n; i++){
//     let store = ''
//     for(let j=i; j<n.length; j++){
//       store += j
//     }
//   }

// let arr = ["abc", "abcd", "ab", "cfd", "abbbbbbb", "acbc"]

// let func = function (arr) {
//   let word = "abc";
//   for (let i = 0; i < arr.length; i++) {
//     let store = arr[i];
//     let isValid = true;

//     for (let char of store) {
//       if (!word.includes(char)) {
//         isValid = false;
//         break;
//       }
//     }
//     if (isValid) {
//       return arr[i];
//     }
//   }
//   return "not";
// };

// console.log(func(["abc", "abcd", "ab", "cfd", "abbbbbbb", "acbc"]));

// let func = function (arr) {
//   let word = 'abc';
//   let count = 0
// let result = []
//   for (let i = 0; i < arr.length; i++) {
//     let store = arr[i];
//     let isValid = true;

//     for (let char of store) {
//       if (!word.includes(char)) {
//         isValid = false;
//         break;
//       }
//     }

//     if (isValid) {
//       result.push(store)
//       count++
//     }
//   }
// // return (result)
// return [result, count]

// };

// console.log(func(["abc", "abcd", "ab", "cfd", "abbbbbbb", "acbc"]));

// let n = 5

// for(let i=0;i<=n;i++){
//   let line = ''
//   for(let j=0;j<=i;j++){
//     line += String.fromCharCode(65 + j)
//   }
//   console.log(line)
// }


// let str = 'raad'
// let arr = []
// for(let i=0; i<str.length; i++){
//   let temp = []
//   for(let j=i+1; j<=str.length; j++){
//     temp.push(str.substring(i,j))
//   }
//   arr.push(temp)
// }
// console.log(arr)



// let str = 'raad';
// let all = [];
// let distinct = [];

// for (let i = 0; i < str.length; i++) {
//   let temp = [];

//   for (let j = i + 1; j <= str.length; j++) {
//     let sub = str.substring(i, j);
//     temp.push(sub);

//     // 👇 DISTINCT CHECK (simple)
//     if (!distinct.includes(sub)) {
//       distinct.push(sub);
//     }
//   }

//   all.push(temp);
// }

// console.log("Grouped substrings:");
// console.log(all);

// console.log("Distinct substrings:");
// console.log(distinct);

// console.log("Count:", distinct.length);



// let str = 'raaad'
// let all = []
// let distinct = []
// for(let i=0; i<str.length; i++){
//   let temp = []
//   for(let j=i+1; j<=str.length; j++){
//     temp.push(str.substring(i,j))
//     if(!distinct.includes(temp)){
//       distinct.push(temp)
//     }
//   } all.push(temp)
// }
// console.log(all,distinct)