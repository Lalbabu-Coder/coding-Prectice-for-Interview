// Given an array of integers arr[]  and a number k.
//  Return the maximum sum of a subarray of size k. Note:
//   A subarray is a contiguous part of any given array.

// function maxSumSubarray(arr,k){
//     let n = arr.length;
//     if(n<k) return 0;

//     //first window sum
//     let windowSum = 0;
//     for(let i =0; i<k ; i++){
//     windowSum += arr[i];

//     }

//     let maxSum = windowSum;
//     // window sliding hare
//     for(let i = k; i<n; i++){
//         windowSum += arr[i] ;
//         windowSum -= arr[i-k];
//         maxSum = Math.max(maxSum, windowSum);
//     }
//      return maxSum;
// }

// console.log(maxSumSubarray([100,200,300,400],2));


function maxSumSubarray(arr, k){
    let n = arr.length;
    if(n<k) return 0;
    let windowSum =0;
    for(let i=0; i<k; i++){
        windowSum += arr[i];
    }
    let  maxSum = windowSum;
    for(let i=k; i<n; i++){
        windowSum += arr[i];
        windowSum -= arr[i-k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarray([100,200,300,400],2));