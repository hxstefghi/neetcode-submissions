class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        let sorted = nums.sort((a, b) => a - b);
        const n = nums.length;

        return ((sorted[n-1] * sorted[n-2]) - (sorted[0] * sorted[1]));
    }
}

let sol = new Solution();

console.log(sol.maxProductDifference([5,6,2,7,4]));
