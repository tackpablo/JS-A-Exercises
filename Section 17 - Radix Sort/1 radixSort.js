const radixSort = (nums) => {
    const maxDigits = mostDigits(nums);

    for (let i = 0; i < maxDigits; i++) {
        // JS function that creates any number of arrays
        let buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            buckets[digit].push(nums[j]);
        }
        nums = [].concat(...buckets);
    }
    return nums;
};

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]));
    }

    return max;
}

// console.log(getDigit(1234, 2));
// console.log(digitCount(1234));
// console.log(mostDigits([1, 23, 5234, 534, 12355]));
// console.log(radixSort([123, 2156, 53, 7, 2]));
