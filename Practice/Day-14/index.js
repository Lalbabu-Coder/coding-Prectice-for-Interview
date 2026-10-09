// Problem

// Ek array candidates diya hai (saare integers distinct hain) aur ek target integer. 
// Tumhe saari unique combinations return karni hain jinke numbers ka sum target ke barabar ho.
// Combinations kisi bhi order mein return kar sakte ho.
// Important rule: Ek hi number ko unlimited baar choose kar sakte ho.
//  Do combinations tab alag maane jaayenge jab kisi ek number ki frequency alag ho (matlab [2,3] aur [3,2] same hain).
// Test cases aise hain ki unique combinations ki count 150 se kam hogi.

// Examples

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// 2 + 2 + 3 = 7 (yahan 2 ko multiple times use kiya), aur 7 = 7. Bas yehi do combinations possible hain.

// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Koi combination 1 nahi bana sakta, isliye empty array.


// Solving Approach:

// Use backtracking. At each step, choose a candidate starting from index start. 
// Because the same number can be reused, the recursive call passes i (not i + 1).
// Passing start prevents permutations of the same combination (e.g., [2,3] and [3,2]).
// Prune when the remaining target goes below 0

// Dry Run 

// backtrack(0, 7, [])
// ├─ pick 2 → backtrack(0, 5, [2])
// │   ├─ pick 2 → backtrack(0, 3, [2,2])
// │   │   ├─ pick 2 → backtrack(0, 1, [2,2,2])
// │   │   │   └─ 2>1, 3>1, 6>1, 7>1 → sab skip, return
// │   │   ├─ pick 3 → backtrack(1, 0, [2,2,3])  ✅ remaining=0 → save [2,2,3]
// │   │   └─ 6>3, 7>3 → skip
// │   ├─ pick 3 → backtrack(1, 2, [2,3])
// │   │   └─ 3>2, 6>2, 7>2 → skip
// │   └─ 6>5, 7>5 → skip
// ├─ pick 3 → backtrack(1, 4, [3])
// │   └─ 3>4? No → pick 3 → backtrack(1, 1, [3,3]) → sab > 1, return
// │      6>4, 7>4 → skip
// ├─ pick 6 → backtrack(2, 1, [6]) → 6>1, 7>1 → skip
// └─ pick 7 → backtrack(3, 0, [7])  ✅ remaining=0 → save [7]


// code 
// var combinationSum = function (candidates, target) {
//     const result = [];

//     function backtrack(start, remaining, path) {
//         if (remaining === 0) {
//             result.push([...path]);
//             return;
//         }

//         for (let i = start; i < candidates.length; i++) {
//             if (candidates[i] > remaining) continue; // prune

//             path.push(candidates[i]);
//             backtrack(i, remaining - candidates[i], path); // i, not i+1 → reuse allowed
//             path.pop(); // undo choice
//         }
//     }

//     backtrack(0, target, []);
//     return result;
// };