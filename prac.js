// // // let num = 5
// // // let resul = 1
// // // for(let i=1; i<=num; i++){
// // //     resul *= i
// // // }
// // // console.log(resul)

// // // let n = 3
// // // for(let i=1; i<=10; i++){
// // //    console.log(n*i)
// // // }
// // // 10>123<
// // //    120
// // //      3

// // // let num = 12345
// // // let rev = 0
// // // while(num > 0){
// // //     let lastDigit = num%10
// // //     rev = rev*10+lastDigit
// // //     num = parseInt(num/10)
// // // }
// // // console.log(rev)

// // // let num = 12345
// // // let count = 0
// // //  while(num>0){
// // //     // let lastdigit = num%10
// // //     // count += lastdigit*0+1
// // //     count++
// // //     num = parseInt(num/10)
// // //  }
// // //  console.log(count)

// // // let num = 12345
// // // let sum = 0
// // // while(num>0){
// // //     lastdigit = num%10
// // //     sum += lastdigit
// // //     num = parseInt(num/10)
// // // }
// // // console.log(sum)

// // // let num = 121
// // // let num2 = num
// // // let reverse = 0

// // // while(num>0){
// // //     let lastDigit = num%10
// // //     reverse = reverse*10+lastDigit
// // //     num = parseInt(num/10)
// // // }
// // // // console.log(reverse,num2)

// // // if(num2 == reverse){
// // //     console.log('yes palindrome')
// // // }
// // // else{
// // //     console.log('not palindrome')
// // // }
// // // let n = 958421
// // // let big = -Infinity
// // // while(n>0){
// // //     let lastDigit = n%10
// // //     if(lastDigit > big){
// // //         big = lastDigit
// // //     }
// // //     n = parseInt(n/10)
// // // }
// // // console.log(big)

// // // 5 loop 1 to 5

// // // let num = 145;

// // // let finalResult = 0;

// // // let factorial = [];
// // // while (num > 0) {
// // //   let lastDigit = num % 10;
// // //   let store = 1;
// // //   for (let i = 1; i <= lastDigit; i++) {
// // //     store *= i;
// // //   }
// // //   factorial.push(store);
// // //   num = parseInt(num / 10);
// // // }
// // // for (let i = 0; i < factorial.length; i++) {
// // //   finalResult += factorial[i];
// // // }

// // // if (num == finalResult) {
// // //   console.log("strong");
// // // } else {
// // //   console.log("not strong");
// // // }

// // // let a = 10
// // // let b = 20

// // // for(let i=a; i<=b; i++){
// // //     if(i % 2 == 0){
// // //         console.log(i)
// // //     }
// // // }

// // // let n = 10
// // // let count = 0
// // // for(let i=0; i<=n; i++){
// // // if(n%i !=0 && n%){

// // // }
// // // }

// // // 1 = 0
// // // 2 = 0
// // // 5 = 0
// // // 10 = 0

// // // 3 4 6 7 8 9

// // // let year = 1900

// // // if((year%400 == 0 && year % 100 !=0) && year % 4 ==0){
// // //     console.log('leap')
// // // }

// // // else{
// // //     console.log('not')
// // // }

// // //  let year = 1600

// // // if(((year % 4 == 0 && year % 100 !== 0 )|| year % 400 == 0)){
// // //     console.log('yes')
// // // }
// // // else{console.log('no')}

// // // num khud se divide hota ho or 1 se wo prime agar wo num khud se 1 or bhi kisi se hota hai to nhi h

// // // let num = 7
// // // let count = 0
// // // for(let i=1; i<=num; i++){
// // //     if(num % i == 0){
// // //         count++
// // //     }
// // // }
// // // if(count == 2){
// // //     console.log('prime')
// // // }
// // // else{
// // //     console.log('not')
// // // }

// // // let n = 50

// // // for(let i=0; i<=n; i++){
// // //     let count = 0

// // //     for(let j=1; j<=i; j++){
// // //         if(i%j == 0){
// // //             count++
// // //         }
// // //     }
// // //     if(count == 2){
// // //         console.log(i)
// // //     }
// // // }

// // // let num = 8

// // // let a = 0
// // // let b = 1

// // // console.log(a)
// // // console.log(b)

// // // for(let i=3; i<=num; i++){
// // //     let c = a+b
// // //     a=b
// // //     b=c
// // //     console.log(c)
// // // // }

// // // *
// // // * *
// // // * * *
// // // * * * *

// // // for(let i=1; i<=4; i++){
// // //     let store = ''
// // //     for(let j=1; j<=i; j++){
// // //         store += '* '
// // //     }
// // //     console.log(store)
// // // }

// // // let num = 102030
// // // let count = 0
// // // while(num > 0){
// // //     let lastDigit = num%10
// // //     if(lastDigit != 0){
// // //         count++
// // //     }
// // //      num = parseInt(num/10)
// // // }
// // // console.log(count)

// // // let num = 45664
// // // let temp = num
// // // let lastDigit = num%10

// // // while(temp > 10){
// // //    temp = parseInt(temp/10)  //4

// // // }
// // // let first = temp

// // // if(first == lastDigit){
// // //  console.log('hogya')
// // // }else{
// // //     console.log('nhi hua')
// // // }

// // let num = 2467;
// // let even = 0; // 642
// // let odd = 0; // 7
// // let count = 0;
// // while (num > 0) {
// //   let lastDigit = num % 10;
// //   if (lastDigit % 2 == 0) {
// //     even = even * 10 + lastDigit;
// //   } else if (lastDigit % 2 != 0) {
// //     odd = odd * 10 + lastDigit;
// //   }
// //   count++;
// //   num = parseInt(num / 10);
// // }

// // let countForEven = 0;
// // while (even > 0) {
// //   countForEven++;
// //   even = parseInt(even / 10);
// // }

// // if (count === countForEven) {
// //   console.log("all even");
// // } else {
// //   console.log("not all even");
// // }

// // let num = 235711
// // let checking = 0

// // while(num > 0){
// //     let lastDigit = num%10
// //      checking = lastDigit
// //     num = parseInt(num/10)

// //     let countForPrime = 0
// // for(let i=1; i<=checking; i++){
// //     if(checking%i == 0){
// //         countForPrime++
// //     }
// // }
// // if(countForPrime == 2){
// //     console.log(checking)
// // }
// // }

// // let num = 84723589346;

// // let largest = -Infinity;
// // let secondlargest = -Infinity;
// // while (num > 0) {
// //   let lastDigit = num % 10;
// //   if (lastDigit > largest) {
// //     secondlargest = largest;
// //     largest = lastDigit;
// //   } else if (lastDigit < largest && lastDigit > secondlargest) {
// //     secondlargest = lastDigit;
// //   }
// //   num = parseInt(num / 10);
// // }
// // console.log(largest, secondlargest);


// // let num = 1002003
// // let reverse = 0
// // while(num>0){
// // let lastdigit = num%10
// // if(lastdigit != 0){
// //     reverse = reverse*10+lastdigit
// // }
// // num = parseInt(num/10)
// // }
// // console.log(reverse)


// // let n = '123321'
// // for(let i=0; i<=Math.ceil(n.length/2); i++){
// //     if(n[i] != n[n.length-1-i]){
// //         console.log('not p')
// //         break;
// //     }
// // }
// // console.log('p')



// // let num = '121'

// // let start = 0
// // let end = num.length-1
// // let flag = true

// // while(start < end){

// //  if(num[start] != num[end]){
// //    flag = false
// //    console.log('not palindrome')
// //    break;
// // }
// // start++
// // end--
// // }
// // if(flag){
// //     console.log('palindorme')
// // }

// let n = 9
// let value = parseInt(n/2)


// for (let i = 1; i <= n; i++) {
//   let store = ''
//   for (let j = value; j >= i; j--) {
//       store += ' '
//   }
//   for(let k= 1; k<= i*2-1; k++){
//     store += k
//   }

//   if(i <= value+1){
//     store += ' '
//   }else{
//     store -= ' '
//   }
//   console.log(store)
// }

// // 
// // 
// // 
// // //
// //
// //
// // 
// // 


//   // for(let i=1; i<=5; i++){
//   //   let store = ''
//   //   for(let j=i; j>=1; j--){
//   //     store += j + ' '
//   //   }
//   //   console.log(store)
//   // } 


// setTimeout(()=> console.log('hey this is the div') ,3000)



// ============================================
// 20 CUSTOM JAVASCRIPT METHODS
// Yeh file beginners ke liye hai jo built-in methods ko recreate karna seekh rahe hain
// ============================================

// ==================== STRING METHODS ====================

// 1. myToUpperCase() - String ko uppercase mein convert karo
function myToUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // Agar lowercase letter hai (a-z), toh uppercase mein convert karo
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}




// Test
console.log("1. myToUpperCase:");
console.log(myToUpperCase("hello world")); // "HELLO WORLD"
console.log("---");


// 2. myToLowerCase() - String ko lowercase mein convert karo
function myToLowerCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // Agar uppercase letter hai (A-Z), toh lowercase mein convert karo
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

// Test
console.log("2. myToLowerCase:");
console.log(myToLowerCase("HELLO WORLD")); // "hello world"
console.log("---");


// 3. myTrim() - Start aur end se spaces hatao
function myTrim(str) {
    let start = 0;
    let end = str.length - 1;
    
    // Start se spaces skip karo
    while (start <= end && str[start] === ' ') {
        start++;
    }
    
    // End se spaces skip karo
    while (end >= start && str[end] === ' ') {
        end--;
    }
    
    // Result string banao
    let result = '';
    for (let i = start; i <= end; i++) {
        result += str[i];
    }
    return result;
}

// Test
console.log("3. myTrim:");
console.log("'" + myTrim("   hello world   ") + "'"); // "hello world"
console.log("---");


// 4. myIncludes() - Check karo ki substring present hai ya nahi

function myIncludes(str, searchStr) {
    if (searchStr === '') return true;
    
    for (let i = 0; i <= str.length - searchStr.length; i++) {
        let found = true;
        for (let j = 0; j < searchStr.length; j++) {
            if (str[i + j] !== searchStr[j]) {
                found = false;
                break;
            }
        }
        if (found) return true;
    }
    return false;
}


// Test
console.log("4. myIncludes:");
console.log(myIncludes("hello world", "world")); // true
console.log(myIncludes("hello world", "xyz")); // false
console.log("---");


// 5. myIndexOf() - Substring ki position find karo
function myIndexOf(str, searchStr) {
    if (searchStr === '') return 0;
    
    for (let i = 0; i <= str.length - searchStr.length; i++) {
        let found = true;
        for (let j = 0; j < searchStr.length; j++) {
            if (str[i + j] !== searchStr[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }
    return -1;
}

// Test
console.log("5. myIndexOf:");
console.log(myIndexOf("hello world", "world")); // 6
console.log(myIndexOf("hello world", "xyz")); // -1
console.log("---");


// 6. myReplace() - First occurrence ko replace karo
function myReplace(str, searchStr, replaceStr) {
    let index = myIndexOf(str, searchStr);
    if (index === -1) return str;
    
    let result = '';
    for (let i = 0; i < index; i++) {
        result += str[i];
    }
    result += replaceStr;
    for (let i = index + searchStr.length; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

// Test
console.log("6. myReplace:");
console.log(myReplace("hello world", "world", "javascript")); // "hello javascript"
console.log("---");


// 7. myRepeat() - String ko n times repeat karo
function myRepeat(str, count) {
    if (count < 0) return '';
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

// Test
console.log("7. myRepeat:");
console.log(myRepeat("hello", 3)); // "hellohellohello"
console.log("---");


// ==================== ARRAY METHODS ====================

// 8. myPush() - Array ke end mein element add karo
function myPush(arr, element) {
    arr[arr.length] = element;
    return arr.length;
}

// Test
console.log("8. myPush:");
let arr1 = [1, 2, 3];
console.log(myPush(arr1, 4)); // 4
console.log(arr1); // [1, 2, 3, 4]
console.log("---");


// 9. myPop() - Array ke end se element remove karo
function myPop(arr) {
    if (arr.length === 0) return undefined;
    
    let lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
}

// Test
console.log("9. myPop:");
let arr2 = [1, 2, 3, 4];
console.log(myPop(arr2)); // 4
console.log(arr2); // [1, 2, 3]
console.log("---");


// 10. myShift() - Array ke start se element remove karo
function myShift(arr) {
    if (arr.length === 0) return undefined;
    
    let firstElement = arr[0];
    
    // Sare elements ko ek position left shift karo
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    
    return firstElement;
}

// Test
console.log("10. myShift:");
let arr3 = [1, 2, 3, 4];
console.log(myShift(arr3)); // 1
console.log(arr3); // [2, 3, 4]
console.log("---");


// 11. myUnshift() - Array ke start mein element add karo
function myUnshift(arr, element) {
    // Sare elements ko ek position right shift karo
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = element;
    return arr.length;
}

// Test
console.log("11. myUnshift:");
let arr4 = [2, 3, 4];
console.log(myUnshift(arr4, 1)); // 4
console.log(arr4); // [1, 2, 3, 4]
console.log("---");


// 12. myArrayIncludes() - Check karo element present hai ya nahi
function myArrayIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Test
console.log("12. myArrayIncludes:");
console.log(myArrayIncludes([1, 2, 3, 4], 3)); // true
console.log(myArrayIncludes([1, 2, 3, 4], 5)); // false
console.log("---");


// 13. myArrayIndexOf() - Element ki position find karo
function myArrayIndexOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

// Test
console.log("13. myArrayIndexOf:");
console.log(myArrayIndexOf([1, 2, 3, 4], 3)); // 2
console.log(myArrayIndexOf([1, 2, 3, 4], 5)); // -1
console.log("---");


// 14. myReverse() - Array ko reverse karo
function myReverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Swap karo    
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    
    return arr;
}

// Test
console.log("14. myReverse:");
let arr5 = [1, 2, 3, 4, 5];
console.log(myReverse(arr5)); // [5, 4, 3, 2, 1]
console.log("---");


// 15. myJoin() - Array ko string mein convert karo
function myJoin(arr, separator = ',') {
    if (arr.length === 0) return '';
    
    let result = String(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        result += separator + String(arr[i]);
    }
    return result;
}

// Test
console.log("15. myJoin:");
console.log(myJoin([1, 2, 3, 4], '-')); // "1-2-3-4"
console.log(myJoin(['hello', 'world'], ' ')); // "hello world"
console.log("---");


// ==================== NUMBER/MATH METHODS ====================

// 16. myMax() - Sabse bada number find karo
function myMax(...numbers) {
    if (numbers.length === 0) return -Infinity;
    
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Test
console.log("16. myMax:");
console.log(myMax(1, 5, 3, 9, 2)); // 9
console.log(myMax(-1, -5, -3)); // -1
console.log("---");


// 17. myMin() - Sabse chota number find karo
function myMin(...numbers) {
    if (numbers.length === 0) return Infinity;
    
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Test
console.log("17. myMin:");
console.log(myMin(1, 5, 3, 9, 2)); // 1
console.log(myMin(-1, -5, -3)); // -5
console.log("---");


// 18. myAbs() - Absolute value nikalo
function myAbs(num) {
    return num < 0 ? -num : num;
}

// Test
console.log("18. myAbs:");
console.log(myAbs(-5)); // 5
console.log(myAbs(5)); // 5
console.log(myAbs(0)); // 0
console.log("---");


// ==================== OTHER METHODS ====================

// 19. myParseInt() - String se integer nikalo
function myParseInt(str) {
    str = String(str).trim();
    if (str.length === 0) return NaN;
    
    let sign = 1;
    let startIndex = 0;
    
    // Check for sign
    if (str[0] === '-') {
        sign = -1;
        startIndex = 1;
    } else if (str[0] === '+') {
        startIndex = 1;
    }
    
    let result = 0;
    for (let i = startIndex; i < str.length; i++) {
        let digit = str.charCodeAt(i) - 48; // '0' ka ASCII code 48 hai
        
        // Agar valid digit nahi hai (0-9), toh stop
        if (digit < 0 || digit > 9) break;
        
        result = result * 10 + digit;
    }
    
    return sign * result;
}

// Test
console.log("19. myParseInt:");
console.log(myParseInt("123")); // 123
console.log(myParseInt("-456")); // -456
console.log(myParseInt("78.9")); // 78
console.log("---");


// 20. myIsNaN() - Check karo NaN hai ya nahi
function myIsNaN(value) {
    // NaN hi aisa value hai jo khud ke barabar nahi hota
    return value !== value;
}

// Test
console.log("20. myIsNaN:");
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(123)); // false
console.log(myIsNaN("hello")); // false (kyunki "hello" !== "hello" false hai)
console.log(myIsNaN(0/0)); // true
console.log("---");


// ==================== SUMMARY ====================
console.log("\n🎉 Congratulations! Aapne 20 custom JavaScript methods implement kar liye!");
console.log("\n📝 Practice Tips:");
console.log("1. Har function ko line-by-line samjho");
console.log("2. Apne test cases add karo");
console.log("3. Functions ko modify karke experiment karo");
console.log("4. Complexity aur edge cases ke baare mein socho");
console.log("\n💡 Next Steps:");
console.log("- Array methods: map, filter, reduce implement karo");
console.log("- String methods: split, slice implement karo");
console.log("- Apne khud ke unique methods banao!");


// ============================================
// NUMBER FORMATTING & ROUNDING METHODS
// toFixed(), Math.round(), Math.floor(), Math.ceil()
// ============================================

// ==================== 1. myToFixed() ====================
// Decimal places ko control karo aur string return karo

function myToFixed(num, digits = 0) {
    // Agar digits negative hai ya number nahi hai
    if (digits < 0 || digits > 100) {
        throw new RangeError("toFixed() digits argument must be between 0 and 100");
    }
    
    // Agar number infinite hai ya NaN hai
    if (!isFinite(num)) {
        return String(num);
    }
    
    // Step 1: Number ko positive banao aur sign yaad rakho
    let sign = num < 0 ? '-' : '';
    num = Math.abs(num);
    
    // Step 2: Rounding ke liye multiplier banao
    let multiplier = Math.pow(10, digits);
    
    // Step 3: Round karo (0.5 ko upar round karte hain)
    num = num * multiplier;
    num = Math.floor(num + 0.5);
    num = num / multiplier;
    
    // Step 4: String mein convert karo
    let numStr = String(num);
    
    // Step 5: Decimal point find karo
    let dotIndex = numStr.indexOf('.');
    
    if (dotIndex === -1) {
        // Agar decimal point nahi hai
        if (digits > 0) {
            numStr += '.';
            for (let i = 0; i < digits; i++) {
                numStr += '0';
            }
        }
    } else {
        // Agar decimal point hai
        let decimalPart = numStr.substring(dotIndex + 1);
        let zerosNeeded = digits - decimalPart.length;
        
        // Extra zeros add karo
        for (let i = 0; i < zerosNeeded; i++) {
            numStr += '0';
        }
        
        // Agar zyada digits hain toh cut karo
        if (zerosNeeded < 0) {
            numStr = numStr.substring(0, dotIndex + 1 + digits);
        }
        
        // Agar digits 0 hai toh decimal point hatao
        if (digits === 0) {
            numStr = numStr.substring(0, dotIndex);
        }
    }
    
    return sign + numStr;
}

// Tests
console.log("========== 1. myToFixed() ==========");
console.log(myToFixed(3.14159, 2));      // "3.14"
console.log(myToFixed(3.14159, 0));      // "3"
console.log(myToFixed(3.14159, 4));      // "3.1416"
console.log(myToFixed(99.5, 2));         // "99.50"
console.log(myToFixed(0.615, 2));        // "0.62"
console.log(myToFixed(-2.34, 1));        // "-2.3"
console.log(myToFixed(1000, 2));         // "1000.00"
console.log("\n");


// ==================== 2. myMathRound() ====================
// Nearest integer tak round karo (0.5 ko upar round hota hai)

function myMathRound(num) {
    // Agar NaN ya Infinity hai
    if (!isFinite(num)) {
        return num;
    }
    
    // Negative number handle karo
    if (num < 0) {
        // -3.5 should become -3 (not -4)
        return -myMathRound(-num);
    }
    
    // Positive number ke liye
    let integerPart = Math.floor(num);
    let decimalPart = num - integerPart;
    
    // Agar decimal part >= 0.5 hai toh upar round karo
    if (decimalPart >= 0.5) {
        return integerPart + 1;
    } else {
        return integerPart;
    }
}

// Tests
console.log("========== 2. myMathRound() ==========");
console.log(myMathRound(3.4));           // 3
console.log(myMathRound(3.5));           // 4
console.log(myMathRound(3.6));           // 4
console.log(myMathRound(-3.4));          // -3
console.log(myMathRound(-3.5));          // -3 (JavaScript behavior)
console.log(myMathRound(-3.6));          // -4
console.log(myMathRound(0));             // 0
console.log(myMathRound(0.5));           // 1
console.log("\n");


// ==================== 3. myMathFloor() ====================
// Niche wale nearest integer tak round karo (always down)

function myMathFloor(num) {
    // Agar NaN ya Infinity hai
    if (!isFinite(num)) {
        return num;
    }
    
    // Integer part nikalo using bitwise OR (works for 32-bit range)
    // Better approach: manual calculation
    
    // Positive numbers ke liye
    if (num >= 0) {
        return parseInt(num);
    }
    
    // Negative numbers ke liye
    let integerPart = parseInt(num);
    
    // Agar decimal part hai toh ek aur niche jao
    if (num !== integerPart) {
        return integerPart - 1;
    }
    
    return integerPart;
}

// Tests
console.log("========== 3. myMathFloor() ==========");
console.log(myMathFloor(3.9));           // 3
console.log(myMathFloor(3.1));           // 3
console.log(myMathFloor(3));             // 3
console.log(myMathFloor(-3.1));          // -4 (niche jata hai)
console.log(myMathFloor(-3.9));          // -4
console.log(myMathFloor(0));             // 0
console.log(myMathFloor(0.9));           // 0
console.log("\n");


// ==================== 4. myMathCeil() ====================
// Upar wale nearest integer tak round karo (always up)

function myMathCeil(num) {
    // Agar NaN ya Infinity hai
    if (!isFinite(num)) {
        return num;
    }
    
    let integerPart = parseInt(num);
    
    // Agar already integer hai
    if (num === integerPart) {
        return num;
    }
    
    // Positive numbers ke liye upar jao
    if (num > 0) {
        return integerPart + 1;
    }
    
    // Negative numbers ke liye (towards zero)
    return integerPart;
}

// Tests
console.log("========== 4. myMathCeil() ==========");
console.log(myMathCeil(3.1));            // 4 (upar jata hai)
console.log(myMathCeil(3.9));            // 4
console.log(myMathCeil(3));              // 3
console.log(myMathCeil(-3.1));           // -3 (towards zero)
console.log(myMathCeil(-3.9));           // -3
console.log(myMathCeil(0));              // 0
console.log(myMathCeil(0.1));            // 1
console.log("\n");


// ==================== COMPARISON TABLE ====================
console.log("========== COMPARISON TABLE ==========");
console.log("Number    | round | floor | ceil");
console.log("----------|-------|-------|------");

function testAll(num) {
    console.log(
        num.toString().padEnd(10) + "| " + 
        myMathRound(num).toString().padEnd(6) + "| " + 
        myMathFloor(num).toString().padEnd(6) + "| " + 
        myMathCeil(num)
    );
}

testAll(3.2);
testAll(3.5);
testAll(3.8);
testAll(-3.2);
testAll(-3.5);
testAll(-3.8);
testAll(0.1);
testAll(-0.1);

console.log("\n");


// ==================== PRACTICAL EXAMPLES ====================
console.log("========== PRACTICAL EXAMPLES ==========");

// Example 1: Price formatting
let price = 99.456;
console.log("Original price: ₹" + price);
console.log("With toFixed(2): ₹" + myToFixed(price, 2));

// Example 2: Calculate average and round
let marks = [85, 92, 78, 88, 95];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let average = sum / marks.length;
console.log("\nMarks:", marks);
console.log("Average:", average);
console.log("Rounded average:", myMathRound(average));

// Example 3: Pagination (floor use case)
let totalItems = 47;
let itemsPerPage = 10;
let totalPages = myMathCeil(totalItems / itemsPerPage);
console.log("\nTotal items:", totalItems);
console.log("Items per page:", itemsPerPage);
console.log("Total pages needed:", totalPages);

// Example 4: Discount calculation
let originalPrice = 1299.99;
let discount = 15.5; // 15.5%
let discountAmount = originalPrice * (discount / 100);
let finalPrice = originalPrice - discountAmount;
console.log("\nOriginal price: ₹" + originalPrice);
console.log("Discount: " + discount + "%");
console.log("Final price: ₹" + myToFixed(finalPrice, 2));

console.log("\n");


// ==================== KEY DIFFERENCES ====================
console.log("========== KEY DIFFERENCES ==========");
console.log(`
1. Math.floor() - Hamesha NICHE jata hai
   - 3.9 → 3
   - -3.1 → -4 (niche matlab -4)

2. Math.ceil() - Hamesha UPAR jata hai  
   - 3.1 → 4
   - -3.9 → -3 (upar matlab -3)

3. Math.round() - Nearest integer
   - 3.4 → 3
   - 3.5 → 4
   - 3.6 → 4

4. toFixed() - Decimal places fix karta hai aur STRING return karta hai
   - (3.14159).toFixed(2) → "3.14"
   - (99.5).toFixed(2) → "99.50"
`);


// ==================== PRACTICE EXERCISES ====================
console.log("========== PRACTICE EXERCISES ==========");
console.log(`
Try karo:
1. Ek function banao jo price ko Indian format mein show kare
   Example: formatPrice(1234.567) → "₹1,234.57"

2. Ek function banao jo percentage calculate kare
   Example: calculatePercentage(45, 200) → "22.50%"

3. Ek function banao jo rating stars show kare
   Example: showRating(3.7) → "⭐⭐⭐⭐☆" (4 stars)

4. Division remainder nikalne ke liye floor use karo
   Example: Batao 47 items ko 10 per page pe kitne pages chahiye

5. Temperature conversion with rounding
   Example: Celsius to Fahrenheit with 1 decimal place
`);


// parseint 

// let str = ' 123.55 ab345c  '
// function khud(str){
// let result = 0
// for(let i=0; i<str.length; i++){
//   if(str[i] == ' ' ){
//     continue
//   }
//   if(str[i] < '0' || str[i] > '9'){
//     return result
//   }
//   if(str[i] == '.'){
//     return result
//   }
  
//   result = result *10 + (str[i] - '0')
 
// }
//  return result
// }
// console.log(khud(str))