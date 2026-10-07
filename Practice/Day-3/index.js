// print 1 to 10 number using loop

//  let num = 10;
//  for(let i =0; i < num ; i++){
//     console.log(i);
    
//  }

// using function  [10,20,30,90]   calculte sum all the given number 


// function num(arr){
//     let total=0;
//     for(let i =0; i < arr.length; i++){
//         total += arr[i]
//     }
//     return total;
// }
// console.log(num([10,20,30,90]));


//find second highest number in this array 

// let arr = [10,90,38,49]
// let first=0;
// let sclargest=Infinity-1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclargest=first;
//         first=arr[i];   
// }else if(arr[i] > sclargest && arr[i] !== first){
//    sclargest=arr[i]
// }
// }
// console.log(sclargest);

//find the max value in this arry

let arr = [10,39,40,20,193]
let max= 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]> max){
        max=arr[i];
    }
}
console.log("Max value:", max);
