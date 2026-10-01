// for loop
// const num = 10;
// for(let i = 0; i<num; i++){
//     console.log(i)
// }

//create a fucntion and sum the array value 

// function sum(arr){
//     let total = 0;
//     for(let i = 0; i<arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sum([10,20,30,40,50]));

// let arr = [10,20,30,40,50];
// arr[1]=80
// console.log(arr[1])


//Find the max element in the given array
// let arr = [10,10,20,1001,20];
// let max = 0;
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max)

// find the second max element in the given array
let arr = [10,10,20,1001,20];
let max = 0;
let scmax = Infinity;
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] > max){
        scmax =  max;
        max = arr[i];

    }else if(arr[i] > scmax && arr[i] != max){
        scmax= arr[i];
    }
}
console.log(scmax);