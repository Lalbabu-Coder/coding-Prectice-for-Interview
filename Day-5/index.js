// print a specific number from an array and update the array


// let numbers = [1,2,3,4,6,7,7];

// numbers[3]=5;// so this line is also updating the value of the 4th element in the arry

// console.log(numbers[3]);



// The next question is to find the second largest number in an array
let arr = [10,30,40,50,70];
let first = 0;
let sclast = Infinity-1;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > first){
        sclast = first;
        first = arr[i];

    }else if(arr[i] > sclast && arr[i] !== first){
        sclast = arr[i];
    }
}
console.log("second larget number is:", sclast);