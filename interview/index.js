// Reverse the Given string
// function reversestring(str){
//   let newString= '';
//   for(let i = str.length -1; i >= 0; i--){
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reversestring('hello'));

// palindrome check  given a str madam to check if it is palindrome or not.
// function palindrome(str){
//   let left = 0;
//   let right = str.length-1;
//   while(left < right){
//     if(str[left] !== str[right]){
//       return false;
//     }
//     left ++;
//     right --;
//   }
//   return true;
// }
// console.log(palindrome('madam'));

// find the largest  number in the given array 
// function largest(arr){
//   let max = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(largest([10,30,40,30]));

// remove dublicate from given array;

// function removeDuplicate(arr){
//   let unique=[];
//   for(let i = 0; i < arr.length; i++){
//     if( ! unique.includes(arr[i])){
//       unique.push(arr[i]);
//     }

//   }
//   return unique;
// }
// console.log(removeDuplicate([10,20,20,10,40,90,100]))

//Remove duplicates from an array
// function removeDuplicates(arr){
//   let unique=[];
//   for(let i =0 ; i < arr.length; i++){
//     if(! unique.includes(arr[i])){
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// console.log(removeDuplicates([10,10,20,30,30,20,40,50,40,50]))

//find the second Largest number in the given array 
// function sclargest(arr){
//   let max = 0;
//   let secondMax = Infinity;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max ){
//       secondMax  = max;
//       max = arr[i];
//     }
//     else if(arr[i] > secondMax && arr[i] !== max){
//       secondMax=arr[i];
//     }
//   }
//   return secondMax;
// }
// console.log(sclargest([10,39,49,292,494,29]));

// reverse the given str
function reverseString(str){
  let newStr='';
  for(let i = str.length-1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseString('hello'));