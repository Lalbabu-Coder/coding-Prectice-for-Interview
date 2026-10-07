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



//array

// let arr = [10,91,101,202,13];
// arr[1]=1000// upadte the array
// console.log(arr[1]);


// access the  the all elemnt in the array
//  let arr = [10,10,201,10,193,10]
// for(let i = 0; i <arr.length; i++){
//     console.log(arr[i]);
    
// }


// find maximum value  

// let arr = [10,10,20,1001,20];
// let max = 0;

// for(let i = 1 ; i < arr.length; i++){
//     if(arr[i] >  max )
//         max = arr[i]
// }

// console.log(max);



// function sum(arr){
//     let total = 0;
//     for(let i =0; i<arr.length; i++){
//         total  += arr[i];
//     }
//     return total;
// }
// console.log(sum([10,39,30,29]));

// function sum (arr){
//     let total = 0;
//     for(let i = 0 ; i<arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sum([20,10,19]));

// let num = 10;
// for(let i = 0 ; i < num ; i++){
//     console.log(i);
    
// }


// let arr=[10,10,39,19,19]
// for(let i = 0 ; i <arr.length ; i++){
//     console.log(arr[i]);
    
// }


let arr=[10,10,39,19,19]
let max =0;
for(let i = 1; i < arr.length ; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
  console.log(max);
  

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