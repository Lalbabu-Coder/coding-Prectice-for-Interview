// Find the  second maximum number 

// let arr = [10,12,29,48,90]
// let first = 0;
// let secondmax=Infinity-1;
// for(let i = 0; i < arr.length ; i++){
//     if (arr[i] > first){
//         secondmax=first;
//         first=arr[i]
//     }else if( arr[i] > secondmax && arr[i] == first){
    
//         secondmax=arr[i]

//     }
// }
// console.log(secondmax);


let arr = [10,12,29,48,90]
let first=0;
let sclargest=Infinity-1;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > first){
        sclargest=first
        first=arr[i];
    }else if(arr[i] > sclargest && arr[i] !== first){
        sclargest=arr[i];
    }
}
console.log(sclargest);
