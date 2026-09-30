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


function removeDuplicate(arr){
    let slow=0;
    let fast = 1;
    while(fast < arr.length){
        if(arr[slow] !== arr[fast]){
            slow++;
            arr[slow] = arr[fast];
        }
        fast++;
    }
    return arr.slice(0,slow+1)
}
console.log(removeDuplicate([1,1,2,2,3,3,4,4]))