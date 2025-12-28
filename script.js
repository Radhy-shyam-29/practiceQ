
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


let obj = {
  data: { score: 10, marks  :  35}
};

Object.freeze(obj);
obj.data.score = 99;

console.log(obj);
