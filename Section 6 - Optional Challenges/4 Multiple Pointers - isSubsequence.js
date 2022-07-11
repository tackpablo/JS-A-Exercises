// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    // initialize both pointers at start
    var i = 0;
    var j = 0;

    // if there is no str1, return true
    if (!str1) return true;

    // while second pointer is less than the length of str2
    while (j < str2.length) {
        // if str2 at index j is equal to str1 at index i, increase pointer value
        if (str2[j] === str1[i]) i++;

        // if i is equal to the length of str1 (if it is done looping through str1), return true
        if (i === str1.length) return true;
        // increase second pointer value
        j++;
    }

    // otherwise return false
    return false;
}

// recursive but not Space Complexity O(1)
// function isSubsequence(str1, str2) {
//     // if str1 length equals 0, return true
//     if (str1.length === 0) return true;
//     // if str2 length equals 0, return false
//     if (str2.length === 0) return false;

//     // if str2 at index 0 equals str1 at index 0, return recursively with index 0 removed (and subsequently the first index thereafter) for both str1 and str2
//     if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));

//     // otherwise return recursively with index 0 removed (and subsequently the first index thereafter) only for str2
//     return isSubsequence(str1, str2.slice(1));
// }
