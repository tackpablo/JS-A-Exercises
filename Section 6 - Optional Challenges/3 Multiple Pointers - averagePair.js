// Time Complexity - O(N)
// Space Complexity - O(1)

function averagePair(arr, num) {
    // initialize both pointers (one at start and other at end of array)
    let start = 0;
    let end = arr.length - 1;

    // while start is less than end
    while (start < end) {
        // calculate averge
        let avg = (arr[start] + arr[end]) / 2;

        //if average is equal to num, return true
        if (avg === num) return true;
        // else if average is less than num, increase start
        else if (avg < num) start++;
        // else average is greater than num, reduce end
        else end--;
    }

    // otherwise return false
    return false;
}

// solution is possible due to array being sorted
