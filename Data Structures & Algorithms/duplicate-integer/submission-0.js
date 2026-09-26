class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;
    }
}

const sol = new Solution();

console.log(sol.hasDuplicate([1,2,3,3]));
