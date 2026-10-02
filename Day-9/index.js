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



 //print the value 0 to 10 ;


// const val = 10;
// for(i = 0; i<val ; i++){
//     console.log(i);
// }

//create a function and sum of the all array

// function sum(arr){
//     let total = 0;
//     for(let i = 0; i <arr.length ; i++){
//         total += arr[i];
//     }
//         return total;
    
// }
// console.log(sum([10,20,19,10,19]));



// function sum(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }

// console.log(sum([10,20,30,10]));

// function sum(arr){
//   let total = 0;
//   for(let i = 0; i < arr.length ; i ++){
//     total += arr[i];
//   }
//     return total;
// }
// console.log(sum([10,29,29,92,9]));
