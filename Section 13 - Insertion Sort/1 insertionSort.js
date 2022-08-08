const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        // console.log("CURRENTVAL: ", currentVal);
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentVal;
            // console.log("ARR: ", arr);
        }
    }
    return arr;
};

console.log(insertionSort([10, 7, 1, 3]));
