// let digit = 20;
// for(let i = 0; i < digit; i++){
//     console.log(i);
//}

//  function sum(arr) {
//     total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sum([10,30,394,40]))


// let arr =[10,30,90,80,20];
// let first =0;
// let sclast= Infinity-1;
// for(let i =0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclast=first;
//         first= arr[i];
//     }else if(arr[i]>sclast && arr[i] !== first){
//         sclast=arr[i];
//     }
// }
// console.log("second largest nuber is:", sclast);


let num = 121;

let original = num;
let reverse = 0;

while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}