// Time Complexity - O(N)

function sameFrequency(nums1, nums2) {
    // initialize 2 objects that will hold letters and count
    let result1 = {};
    let result2 = {};

    // create 2 variables where the number is split and mapped into an array as individual numbers
    const nums1Arr = String(nums1)
        .split("")
        .map((str) => Number(str));
    // console.log("NUMS1: ", nums1Arr);
    const nums2Arr = String(nums2)
        .split("")
        .map((str) => Number(str));
    // console.log("NUMS2: ", nums2Arr);

    // boundary condition where if both arrays have different lengths, return
    if (nums1Arr.length !== nums2Arr.length) return false;

    // loop through nums array 1
    for (let num of nums1Arr) {
        // if nums 1 at index exists, add 1 otherwise equals 1
        result1[num] = (result1[num] || 0) + 1;
    }

    // loop through nums array 2
    for (let num of nums2Arr) {
        // if nums 2 at index exists, add 1 otherwise equals 1
        result2[num] = (result2[num] || 0) + 1;
    }

    // loop through keys of 2 objects
    for (let num in result1) {
        // console.log("res1: ", result1[num]);
        // console.log("res2: ", result2[num]);
        // if no values exist for the objects or they are not equal for the same key
        if (!result1[num] || !result2[num] || result1[num] !== result2[num])
            // return false
            return false;
    }
    // otherwise return true
    return true;
}

// this works due to the check for both arrays having the same length
// we can initialize objects that either the value at specific index exists (+1) or doesnt (=1)
// we can then loop through the keys and check that their values are equal
