
let arr = [10,20,30,40,50,60,70,80,90,100,110];
let find = 70;

let start = 0;
let end = arr.length - 1;
let flag = false;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === find) {
        console.log('index is found at', mid);
        flag = true;
        break;
    } 
    else if (arr[mid] < find) {
        start = mid + 1;
    } 
    else {
        end = mid - 1;
    }

    console.log(arr.slice(start, end + 1));
}

if (flag === false) {
    console.log('find value is not in array');
}
