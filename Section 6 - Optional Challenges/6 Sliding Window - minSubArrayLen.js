// Time Complexity - O(N)

function minSubArrayLen(arr, sum) {
    let total = 0;
    let left = 0;
    let right = 0;
    let minLen = Infinity;

    // loop while the arr length is greater than the window left
    while (left < arr.length) {
        // if the total (sum of values) is less than the sum (given parameter) and end is less than the length of the array - this is to increase size to hit the minimum sum
        if (total < sum && right < arr.length) {
            // add the value of the arr for the right
            total += arr[right];
            // move index of right up by one
            right++;
        }
        // if the total (sum of values) is greater than or equal to the sum (given parameter) - this is to reduce the size from the left to see if we can get a smaller min length
        else if (total >= sum) {
            // min subarray length is equal to the min of itself (infinity), difference in index (length) for right and left
            minLen = Math.min(minLen, right - left);
            // reduce window on the left
            total -= arr[left];
            // move left up by one
            left++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    // if min length isnt changed from the start, return 0 as there are no contiguous subarray that has a sum greater than or equal to sum or it is the new min length value
    return minLen === Infinity ? 0 : minLen;
}
