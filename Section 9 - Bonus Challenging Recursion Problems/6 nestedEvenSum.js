function nestedEvenSum(obj, res = 0) {
    for (let key in obj) {
        if (obj[key] % 2 === 0) res += obj[key];
        if (typeof obj[key] === "object") res += nestedEvenSum(obj[key]);
    }
    return res;
}
