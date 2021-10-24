export function uniqueNums(nums) {
    return nums ? nums.filter((item, i) => nums.indexOf(item) === i) : nums
}