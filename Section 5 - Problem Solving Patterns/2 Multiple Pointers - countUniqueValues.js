// Time Complexity - O(N)
// Space Complexity - O(N)

function countUniqueValues(arr) {
    // boundary condition where if array is empty, return
    if (arr.length === 0) return 0;

    // initialize index i at 0
    let i = 0;
    // loop through array with index j at 1
    for (let j = 1; j < arr.length; j++) {
        // if the array at index i does not equal array at index j (values are unique)
        if (arr[i] !== arr[j]) {
            // increase count for i
            i++;
            // let array at index i equal to array at index j
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

// this method uses 2 pointers, i and j
// if a unique value is found, it replaces the index at i with that value, otherwise j moves up
// once this pattern completes, we just need to know up to where i (index value) has stopped to get the list of unique values
