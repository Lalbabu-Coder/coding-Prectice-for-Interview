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


// let arr = [10,12,29,48,90]
// let first=0;
// let sclargest=Infinity-1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclargest=first
//         first=arr[i];
//     }else if(arr[i] > sclargest && arr[i] !== first){
//         sclargest=arr[i];
//     }
// }
// console.log(sclargest);

// let arr = [10,10,38,28,19,38,67]
// let first = 0;
// let seclast=Infinity-1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         seclast=first
//         first=arr[i];
//     }else if(arr[i] > seclast && arr[i] !== first){
//         seclast=arr[i];
//     }
// }
// console.log(seclast);

// let num = 10;
// for(let i =0; i < num ; i++ ){
//     console.log(i);
    
// }


// let num = 20;
// for(let i =0; i < num ; i++){
//     console.log(i);
    
// }

// let arr=[10,39,10,39,20]
// for(let i =0; i< arr.length; i++){
//     console.log(arr[i]);
    
// }

function num(arr){
    let total = 0;
    for(let i =0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(num([10,39,29]));
