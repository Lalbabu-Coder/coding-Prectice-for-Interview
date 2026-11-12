//Find the maximu  value in the array
//const arr = [1,2,3,4,5,6,7,8,9,10];
// function findMax(arr){
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([1,2,3,4,5,6,7,8,9,10]));

// find the second maximum value in  the array

// function findSecondMax(arr){
//     let max = arr[0];
//     let secmax = arr[0];
//     for(let i = 1 ; i < arr.length; i++){
//         if( arr[i] > max){
//             scmax = max;
//             max = arr[i];

//         }else if(arr[i] > secmax && arr[i] != max){
//             scmax=arr[i];
//         }
//     }
//     return scmax;
// }
// console.log(findSecondMax([1,2,3,4,5,6,7,8,9,10]));

//remove the duplicates value from th array

function removeDuplicates(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]));
