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

function removeDuplicate(arr){
  let unique=[];
  for(let i = 0; i < arr.length; i++){
    if( ! unique.includes(arr[i])){
      unique.push(arr[i]);
    }

  }
  return unique;
}
console.log(removeDuplicate([10,20,20,10,40,90,100]))