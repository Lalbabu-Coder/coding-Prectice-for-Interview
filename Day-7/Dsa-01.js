// this is the first question of the array add two number and find the target and given the  array already sortest so input is Input: numbers = [2,7,11,15] and target 7 i solve the problem using two pointer method for the best time complexity and space complexity

var twoSum = function(numbers, target){
    let left = 0;
    let right = numbers.length - 1;
    while (left < right){
        let sum = numbers[left] + numbers[right];
        if(sum=== target){
            return[left + 1, right + 1];
        }
        else if (sum < target){
            left++;
        }
        else{
            right--;
        }
    }
}

