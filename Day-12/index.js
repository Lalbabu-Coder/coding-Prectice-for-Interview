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


// The next question is to find the second largest number in an array
// let arr = [10,30,40,50,70];
// let first = 0;
// let sclast = Infinity-1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclast = first;
//         first = arr[i];

//     }else if(arr[i] > sclast && arr[i] !== first){
//         sclast = arr[i];
//     }
// }
// console.log("second larget number is:", sclast);



//Given the given a array  and reverse the value   using two pointer
// let arr = [1, 2, 3, 4, 5];

// let left = 0;
// let right = arr.length-1;

// while(left < right){
//     [arr[left], arr[right]] = [arr[right],arr[left]];
//     left++;
//     right--;
// }
// console.log(arr)

// given a str  palindrom  and  solve the problem using two pointer
// function isPalindrom(str){
// let left = 0;
// let right = str.length-1;
// while(left<right){
//     if(str[left] !== str[right]){
//         return  false;
//     }
//     left ++;
//     right --;
// }
// return true
// }

// console.log(isPalindrom("madamm"));

//Given a str and check palindrom using two pointer

// function isPalindrom(str){
//     let  left = 0;
//     let right = str.length-1;
//     while(left<right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//        left ++;
//        right--;
//     }
//   return true;
// }
// console.log(isPalindrom("madam"))
// console.log(isPalindrom("hih"))

// Given a array  and reverse the value  solve the problem using Two pointer

// let arr = [1,2,3,4,5]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//     [arr[left], arr[right]] = [arr[right],arr[left]];
//     left++;
//     right--;
// }
// console.log(arr)

// Given a array and given array already sorted using two pointer solve the problem and remove duplicate value
// function removeDuplicate(arr){
//     let slow=0;
//     let fast =1;
//     while(fast<arr.length){
//         if(arr[slow] !== arr[fast]){
//             slow++;
//             arr[slow]=arr[fast];
//         }
//         fast++;
//     }
//     return arr.slice(0,slow+1);
// }
// console.log(removeDuplicate([1,1,1,2,2,2,3,3,3]));

// for(let i = 0; i< 100; i++){
//     console.log("Hellow")
// }

// let digit = 20;
// for(let i = 0; i < digit; i++){
//     console.log(i);
//}