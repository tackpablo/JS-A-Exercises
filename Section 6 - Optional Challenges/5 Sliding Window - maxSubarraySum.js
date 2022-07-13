// Time Complexity - O(N)

function maxSubarraySum(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    // initialize variables to hold sums
    let maxSum = 0;
    let tempSum = 0;

    // boundary condition where if the arr array length is shorter than the num, return null as there is no subarray of that size
    if (arr.length < num) return null;

    // loop through arr array (but only the length of num)
    for (let i = 0; i < num; i++) {
        // add the num length values of arr array to maxSum
        maxSum += arr[i];
    }

    // tempSum holds the maxSum temporarily
    tempSum = maxSum;

    // loop through arr array
    for (let i = num; i < arr.length; i++) {
        // let tempSum = tempSum (maxSum) minus the first digit of num and add current index value
        tempSum = tempSum - arr[i - num] + arr[i];
        // maxSum is the max between the maxSum and tempSum
        maxSum = Math.max(maxSum, tempSum);
    }
    // return maxSum
    return maxSum;
}

// This works due to how the sliding window works
// The idea is that if given the parameters maxSubarraySum([100, 200, 300], 2)
// We would loop through to add num length of args array to initialize a max-> 100 + 200 = 300
// And then we would subtract the last value from it and add the newest value to it (keep num length but move it over by one hence sliding window) -> 300 - 100 + 300 = 500
// And since we track the max we return that at the end
