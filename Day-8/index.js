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


// function removeDuplicate(arr){
//     let slow=0;
//     let fast = 1;
//     while(fast < arr.length){
//         if(arr[slow] !== arr[fast]){
//             slow++;
//             arr[slow] = arr[fast];
//         }
//         fast++;
//     }
//     return arr.slice(0,slow+1)
// }
// console.log(removeDuplicate([1,1,2,2,3,3,4,4]))


// function tenTime(n){
//    for(let i =0; i < n; i++){
//     console.log(i)
//    }
// }
// tenTime(10);

function sortArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {

        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
        else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

console.log(sortArray([11,0,17,7,9]));