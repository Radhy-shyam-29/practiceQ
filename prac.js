// // let num = 5
// // let resul = 1
// // for(let i=1; i<=num; i++){
// //     resul *= i
// // }
// // console.log(resul)

// // let n = 3
// // for(let i=1; i<=10; i++){
// //    console.log(n*i)
// // }
// // 10>123<
// //    120
// //      3

// // let num = 12345
// // let rev = 0
// // while(num > 0){
// //     let lastDigit = num%10
// //     rev = rev*10+lastDigit
// //     num = parseInt(num/10)
// // }
// // console.log(rev)

// // let num = 12345
// // let count = 0
// //  while(num>0){
// //     // let lastdigit = num%10
// //     // count += lastdigit*0+1
// //     count++
// //     num = parseInt(num/10)
// //  }
// //  console.log(count)

// // let num = 12345
// // let sum = 0
// // while(num>0){
// //     lastdigit = num%10
// //     sum += lastdigit
// //     num = parseInt(num/10)
// // }
// // console.log(sum)

// // let num = 121
// // let num2 = num
// // let reverse = 0

// // while(num>0){
// //     let lastDigit = num%10
// //     reverse = reverse*10+lastDigit
// //     num = parseInt(num/10)
// // }
// // // console.log(reverse,num2)

// // if(num2 == reverse){
// //     console.log('yes palindrome')
// // }
// // else{
// //     console.log('not palindrome')
// // }
// // let n = 958421
// // let big = -Infinity
// // while(n>0){
// //     let lastDigit = n%10
// //     if(lastDigit > big){
// //         big = lastDigit
// //     }
// //     n = parseInt(n/10)
// // }
// // console.log(big)

// // 5 loop 1 to 5

// // let num = 145;

// // let finalResult = 0;

// // let factorial = [];
// // while (num > 0) {
// //   let lastDigit = num % 10;
// //   let store = 1;
// //   for (let i = 1; i <= lastDigit; i++) {
// //     store *= i;
// //   }
// //   factorial.push(store);
// //   num = parseInt(num / 10);
// // }
// // for (let i = 0; i < factorial.length; i++) {
// //   finalResult += factorial[i];
// // }

// // if (num == finalResult) {
// //   console.log("strong");
// // } else {
// //   console.log("not strong");
// // }

// // let a = 10
// // let b = 20

// // for(let i=a; i<=b; i++){
// //     if(i % 2 == 0){
// //         console.log(i)
// //     }
// // }

// // let n = 10
// // let count = 0
// // for(let i=0; i<=n; i++){
// // if(n%i !=0 && n%){

// // }
// // }

// // 1 = 0
// // 2 = 0
// // 5 = 0
// // 10 = 0

// // 3 4 6 7 8 9

// // let year = 1900

// // if((year%400 == 0 && year % 100 !=0) && year % 4 ==0){
// //     console.log('leap')
// // }

// // else{
// //     console.log('not')
// // }

// //  let year = 1600

// // if(((year % 4 == 0 && year % 100 !== 0 )|| year % 400 == 0)){
// //     console.log('yes')
// // }
// // else{console.log('no')}

// // num khud se divide hota ho or 1 se wo prime agar wo num khud se 1 or bhi kisi se hota hai to nhi h

// // let num = 7
// // let count = 0
// // for(let i=1; i<=num; i++){
// //     if(num % i == 0){
// //         count++
// //     }
// // }
// // if(count == 2){
// //     console.log('prime')
// // }
// // else{
// //     console.log('not')
// // }

// // let n = 50

// // for(let i=0; i<=n; i++){
// //     let count = 0

// //     for(let j=1; j<=i; j++){
// //         if(i%j == 0){
// //             count++
// //         }
// //     }
// //     if(count == 2){
// //         console.log(i)
// //     }
// // }

// // let num = 8

// // let a = 0
// // let b = 1

// // console.log(a)
// // console.log(b)

// // for(let i=3; i<=num; i++){
// //     let c = a+b
// //     a=b
// //     b=c
// //     console.log(c)
// // // }

// // *
// // * *
// // * * *
// // * * * *

// // for(let i=1; i<=4; i++){
// //     let store = ''
// //     for(let j=1; j<=i; j++){
// //         store += '* '
// //     }
// //     console.log(store)
// // }

// // let num = 102030
// // let count = 0
// // while(num > 0){
// //     let lastDigit = num%10
// //     if(lastDigit != 0){
// //         count++
// //     }
// //      num = parseInt(num/10)
// // }
// // console.log(count)

// // let num = 45664
// // let temp = num
// // let lastDigit = num%10

// // while(temp > 10){
// //    temp = parseInt(temp/10)  //4

// // }
// // let first = temp

// // if(first == lastDigit){
// //  console.log('hogya')
// // }else{
// //     console.log('nhi hua')
// // }

// let num = 2467;
// let even = 0; // 642
// let odd = 0; // 7
// let count = 0;
// while (num > 0) {
//   let lastDigit = num % 10;
//   if (lastDigit % 2 == 0) {
//     even = even * 10 + lastDigit;
//   } else if (lastDigit % 2 != 0) {
//     odd = odd * 10 + lastDigit;
//   }
//   count++;
//   num = parseInt(num / 10);
// }

// let countForEven = 0;
// while (even > 0) {
//   countForEven++;
//   even = parseInt(even / 10);
// }

// if (count === countForEven) {
//   console.log("all even");
// } else {
//   console.log("not all even");
// }

// let num = 235711
// let checking = 0

// while(num > 0){
//     let lastDigit = num%10
//      checking = lastDigit
//     num = parseInt(num/10)

//     let countForPrime = 0
// for(let i=1; i<=checking; i++){
//     if(checking%i == 0){
//         countForPrime++
//     }
// }
// if(countForPrime == 2){
//     console.log(checking)
// }
// }

// let num = 84723589346;

// let largest = -Infinity;
// let secondlargest = -Infinity;
// while (num > 0) {
//   let lastDigit = num % 10;
//   if (lastDigit > largest) {
//     secondlargest = largest;
//     largest = lastDigit;
//   } else if (lastDigit < largest && lastDigit > secondlargest) {
//     secondlargest = lastDigit;
//   }
//   num = parseInt(num / 10);
// }
// console.log(largest, secondlargest);


// let num = 1002003
// let reverse = 0
// while(num>0){
// let lastdigit = num%10
// if(lastdigit != 0){
//     reverse = reverse*10+lastdigit
// }
// num = parseInt(num/10)
// }
// console.log(reverse)


// let n = '123321'
// for(let i=0; i<=Math.ceil(n.length/2); i++){
//     if(n[i] != n[n.length-1-i]){
//         console.log('not p')
//         break;
//     }
// }
// console.log('p')



// let num = '121'

// let start = 0
// let end = num.length-1
// let flag = true

// while(start < end){

//  if(num[start] != num[end]){
//    flag = false
//    console.log('not palindrome')
//    break;
// }
// start++
// end--
// }
// if(flag){
//     console.log('palindorme')
// }


for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

// 
// 
// 
//
//
//
// 
// 