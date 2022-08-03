function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (start <= end && arr[middle] !== val) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else if (val > arr[middle]) {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] == val) {
        return middle;
    }
    return -1;
}
