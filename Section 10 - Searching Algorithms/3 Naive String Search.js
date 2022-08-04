function naiveStringSearch(str, val) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < val.length; j++) {
            if (val[j] !== str[i + j]) break;

            if (j === val.length - 1) count++;
        }
    }
    return count;
}
