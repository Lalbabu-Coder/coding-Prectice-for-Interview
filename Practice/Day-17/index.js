// find the maximum number in an array
// function findMax(arr){
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max= arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([1,3035,67,89,100]));

// find min number in an array
// function findMin(arr){
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(findMin([2,55,78,99,9,91,9,65,4]));


// find the sum of all numbers in an array
// function findSum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum; 
// }
// console.log(findSum([10,30,5,76,98,10]));

// find the average of all numbers in an array
// function findAverage(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(findAverage([10,30,50,40,10,40]));

// find the second largest number in an array
function findSecondLargest(arr){
    let largest = arr[0];
    let secondLargest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargest([10,30,50,40,10,40]));