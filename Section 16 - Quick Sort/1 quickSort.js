const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);

        // left side
        quickSort(arr, left, pivotIdx - 1);
        // right side
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
};

function swap(arr, idx1, idx2) {
    temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(quickSort([100, -3, 4, 6, 9, 1, 2, 5, 3]));
