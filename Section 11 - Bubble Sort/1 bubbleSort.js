function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        console.log(arr);
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([10, 1, 5, 8, 3, 9]));

function swap(arr, idx1, idx2) {
    temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
