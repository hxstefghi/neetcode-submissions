class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const complement = target - currentNum;

            if (numMap.has(complement)) {
                return [numMap.get(complement), i];
            }

            numMap.set(currentNum, i);
        }

        return [];
    }
}

const sol = new Solution();

console.log(sol.twoSum([3, 5, 10, 21, 2], 15));
