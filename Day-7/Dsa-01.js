// this is the first question of the array add two number and find the target and given the  array already sortest so input is Input: numbers = [2,7,11,15] and target 7 i solve the problem using two pointer method for the best time complexity and space complexity

// var twoSum = function(numbers, target){
//     let left = 0;
//     let right = numbers.length - 1;
//     while (left < right){
//         let sum = numbers[left] + numbers[right];
//         if(sum=== target){
//             return[left + 1, right + 1];
//         }
//         else if (sum < target){
//             left++;
//         }
//         else{
//             right--;
//         }
//     }
// }


// var twoSum = function(number , target){
//     let left = 0;
//     let right = number.length-1;
//     while(left<right){
//         let sum = number[left] + number[right];
//         if(sum === target){
//             return[left+1 ,right+1];
//         }
//         else if(sum<target){
//             left++;
//         }
//         else{
//             right--;
//         }
    
//     }
// };
// let number= [2,7,10,15];
// let target = 9;
// console.log(twoSum(number,target));


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