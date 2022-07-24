function capitalizeFirst(arr) {
    if (arr.length === 0) return [];

    let result = [];
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1));

    return result.concat(capitalizeFirst(arr.slice(1)));
}

// function capitalizeWords (arr) {
//     if (arr.length === 1) {
//       return [arr[0].toUpperCase()];
//     }
//     let res = capitalizeWords(arr.slice(0, -1));
//     res.push(arr.slice(arr.length-1)[0].toUpperCase());
//     return res;

//   }
