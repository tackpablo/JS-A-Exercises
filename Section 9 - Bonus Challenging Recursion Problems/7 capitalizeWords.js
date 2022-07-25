function capitalizeWords(arr) {
    if (!arr.length) return arr;

    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.splice(1)));
}
