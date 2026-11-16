// find the maximum number in an array 
//  function findMax(arr){
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max; 
//  }
//  console.log(findMax([1,20,49,292,7]));

// find the second maximum number in an array
// function findSecondMax(arr){
//     let max = arr[0];
//     let secondMax = -Infinity;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             secondMax = max;
//             max = arr[i];
//         }else if(arr[i] > secondMax && arr[i] !== max){
//             secondMax = arr[i];
//         }
//     }
//     return secondMax;
// }
// console.log(findSecondMax([1,2,4,56,890,45,99,1000,1
// ]));

// sum of all the numbers in an array ;
function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([10,394,5056,6706,1000,1]));
