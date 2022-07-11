function validAnagram(str1, str2) {
    // boundary condition where if both strings have different lengths, return
    if (str1.length !== str2.length) return false;

    // initialize 2 objects that will hold letters and count
    let valid1 = {};
    let valid2 = {};

    // loop through index (both are same length)
    for (let i = 0; i < str1.length; i++) {
        // if string 1 at index exists, add 1 otherwise equals 1
        valid1[str1[i]] = valid1[str1[i]] ? ++valid1[str1[i]] : 1;
        // if string 2 at index exists, add 1 otherwise equals 1
        valid2[str2[i]] = valid2[str2[i]] ? ++valid2[str2[i]] : 1;
    }

    // loop through keys of 2 objects
    for (let key in valid1) {
        // if no values exist for the objects or they are not equal for the same key
        if (!valid1[key] || !valid2[key] || valid1[key] !== valid2[key]) {
            // return false
            return false;
        }
    }
    // otherwise return true
    return true;
}
