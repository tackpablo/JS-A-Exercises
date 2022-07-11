// Time Complexity - O(N)
// Space Complexity - O(N)

// Frequency Counter Solution
function areThereDuplicates() {
    // initialize colletion object
    let collection = {};

    // loop through the arguments (parameters)
    for (let val in arguments) {
        // if a value at index exists, add 1 otherwise equals 1
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }

    // loop through the keys of object
    for (let key in collection) {
        // if any value is greater than 1, return true
        if (collection[key] > 1) return true;
    }

    // otherwise return false
    return false;
}

// Multiple pointers solution
// function areThereDuplicates(...args) {
//     // sort the arguments array
//     args.sort((a, b) => a > b);

//     // initialize both pointers
//     let start = 0;
//     let next = 1;
//     // while next is less than the arguments array length
//     while (next < args.length) {
//         // if args at start is equal to args at next (both pointers are equal)
//         if (args[start] === args[next]) {
//             // return true
//             return true;
//         }
//         // move both pointers up
//         start++;
//         next++;
//     }

//     // otherwise equals false
//     return false;
// }

// Set sizes
// function areThereDuplicates() {
//     // make a new Set (object with unique values only), compare the size to arguments length and return true if they are not (since Set would have less key value pairs stored)
//     return new Set(arguments).size !== arguments.length;
// }

// while all solutions work, it would be easier to just use a frequency counter in this case as the other solutions are overtly complex
