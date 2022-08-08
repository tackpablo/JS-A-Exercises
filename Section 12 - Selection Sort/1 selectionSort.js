function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
}

console.log(selectionSort([10, 1, 5, 8]));

function swap(arr, idx1, idx2) {
    temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
