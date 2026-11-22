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
function findMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([2,55,78,99,9,91,9,65,4]));