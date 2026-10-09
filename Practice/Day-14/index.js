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

