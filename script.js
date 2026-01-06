
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