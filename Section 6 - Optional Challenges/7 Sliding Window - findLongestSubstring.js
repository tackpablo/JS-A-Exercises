// Time Complexity - O(N)

// function findLongestSubstring(str) {
//     // initialize a variable to hold the longest substring
//     let longestSubStr = -Infinity;
//     // initialize an object to count the number of each letter
//     let subStrKeys = {};

//     // boundary condition where if the str length is 0 (no string), return 0
//     if (str.length === 0) return 0;

//     // initialize position variable that keeps track of where you are on the str
//     let pos = 0;
//     // initialize substring length variable that's a temporary counter
//     let subStrLen = 0;

//     // loop through the string
//     while (pos < str.length) {
//         // if the value for a specific string is not existent in the object (letter is observed for the first time)
//         if (!(str[pos] in subStrKeys)) {
//             // add the letter and the index as value
//             subStrKeys[str[pos]] = pos;
//             // increase position
//             pos++;
//             // increase substring length
//             subStrLen++;

//             // otherwise (meaning that there is a duplicate letter)
//         } else {
//             // if the longest substring is less than the substring length, it equals that
//             if (longestSubStr < subStrLen) longestSubStr = subStrLen;

//             // new position to start is equal +1 index to the last place this letter was found
//             const newPos = subStrKeys[str[pos]] + 1;

//             // reinitialize the object to count the number of each letter
//             subStrKeys = {};

//             // position resets to new position
//             pos = newPos;
//             // reset substring length counter
//             subStrLen = 0;
//         }
//     }

//     // if longest substring is less than substring length, it equals that
//     if (longestSubStr < subStrLen) longestSubStr = subStrLen;

//     // return longest substring
//     return longestSubStr;
// }

// provided solution
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let duplicateIndex = 0;

    for (let i = 0; i < str.length; i++) {
        // variable that shows what str value it currently is
        let char = str[i];
        // if the str value has been counted before
        if (seen[char]) {
            // duplicate index equals the new start location where the str value is seen a second time
            duplicateIndex = Math.max(duplicateIndex, seen[char]);
        }

        // longest is equal to the current index position minus the duplicate index position + 1
        longest = Math.max(longest, i - duplicateIndex + 1);

        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
