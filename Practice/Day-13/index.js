// let digit = 20;
// for(let i = 0; i < digit; i++){
//     console.log(i);
//}

//  function sum(arr) {
//     total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sum([10,30,394,40]))


// The next question is to find the second largest number in an array
// let arr = [10,30,40,50,70];
// let first = 0;
// let sclast = Infinity-1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclast = first;
//         first = arr[i];

//     }else if(arr[i] > sclast && arr[i] !== first){
//         sclast = arr[i];
//     }
// }
// console.log("second larget number is:", sclast);



//Given the given a array  and reverse the value   using two pointer
// let arr = [1, 2, 3, 4, 5];

// let left = 0;
// let right = arr.length-1;

// while(left < right){
//     [arr[left], arr[right]] = [arr[right],arr[left]];
//     left++;
//     right--;
// }
// console.log(arr)

// given a str  palindrom  and  solve the problem using two pointer
// function isPalindrom(str){
// let left = 0;
// let right = str.length-1;
// while(left<right){
//     if(str[left] !== str[right]){
//         return  false;
//     }
//     left ++;
//     right --;
// }
// return true
// }

// console.log(isPalindrom("madamm"));

//Given a str and check palindrom using two pointer

// function isPalindrom(str){
//     let  left = 0;
//     let right = str.length-1;
//     while(left<right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//        left ++;
//        right--;
//     }
//   return true;
// }
// console.log(isPalindrom("madam"))
// console.log(isPalindrom("hih"))

// Given a array  and reverse the value  solve the problem using Two pointer

// let arr = [1,2,3,4,5]
// let left=0;
// let right=arr.length-1;

// while(left<right){
//     [arr[left], arr[right]] = [arr[right],arr[left]];
//     left++;
//     right--;
// }
// console.log(arr)

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

// let digit = 20;
// for(let i = 0; i < digit; i++){
//     console.log(i);
//}


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

// let arr = [10,39,40,20,193]
// let max= 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]> max){
//         max=arr[i];
//     }
// }
// console.log("Max value:", max);

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

// function num(arr){
//     let total = 0;
//     for(let i =0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(num([10,39,29]));


// let digit = 20;
// for(let i = 0; i < digit; i++){
//     console.log(i);
//}

//  function sum(arr) {
//     total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sum([10,30,394,40]))


// let arr =[10,30,90,80,20];
// let first =0;
// let sclast= Infinity-1;
// for(let i =0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclast=first;
//         first= arr[i];
//     }else if(arr[i]>sclast && arr[i] !== first){
//         sclast=arr[i];
//     }
// }
// console.log("second largest nuber is:", sclast);


// let num = 121;

// let original = num;
// let reverse = 0;

// while (num > 0) {
//     let lastDigit = num % 10;
//     reverse = reverse * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }

// if (original === reverse) {
//     console.log("Palindrome number");
// } else {
//     console.log("Not a palindrome number");
// }

// let num = 113;
// let orignal = num;
// let reverse = 0;
// while(num > 0){
//     let lastDigit = num % 10;
//     reverse = reverse * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }if(orignal === reverse){
//     console.log("Palindrome number");

// }else{
//     console.log("Not a palindome nummber");
// }


// print a specific number from an array and update the array


// let numbers = [1,2,3,4,6,7,7];

// numbers[3]=5;// so this line is also updating the value of the 4th element in the arry

// console.log(numbers[3]);



// The next question is to find the second largest number in an array
// let arr = [10,30,40,50,70];
// let first = 0;
// let sclast = Infinity-1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         sclast = first;
//         first = arr[i];

//     }else if(arr[i] > sclast && arr[i] !== first){
//         sclast = arr[i];
//     }
// }
// console.log("second larget number is:", sclast);

// The third question is to find the second smallest number in an array
// let arr = [10,30,40,50,70];
// let min = Infinity;
// let scMin = Infinity-1;
// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i] < min){
//         scMin = min;
//         min = arr[i];

//     }else if(arr[i] < scMin && arr[i] !== min){
//         scMin = arr[i];

//     }
// }
// console.log("Second smallest number is:", scMin);

// The fourth question is to find the largest number in an array 

// let arr = [10,30,40,50,70];
// let max = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];

//     }
// }
// console.log("Largest number is:", max)

//  check the palindrome number or not 

// let num = 12213;
// let temp = num;
// let rev = 0;
// while(num > 0){
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);

// }if(temp === rev){
//     console.log("The number is palindrome")
// }else{console.log("The number is not Palindrome")}