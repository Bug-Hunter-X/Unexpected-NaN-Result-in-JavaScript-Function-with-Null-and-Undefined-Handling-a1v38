# Unexpected NaN Result in JavaScript Function

This repository demonstrates a common JavaScript bug related to handling null and undefined values in functions. The initial code attempts to handle null values gracefully but fails to address undefined values, leading to unexpected NaN (Not a Number) results.

## Bug Description

The `foo` function is designed to add two numbers. It correctly handles null values by returning 0. However, if either of the input arguments is `undefined`, the function unexpectedly returns `NaN`. This is because the addition operation (`+`) does not automatically handle undefined values; instead it converts them to NaN before adding them.

## Bug Solution

The solution enhances the `foo` function to explicitly check for both `null` and `undefined` values, ensuring a consistent return of 0 in all cases.  This is achieved by using loose equality (`==`) to check for both null and undefined in one condition.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` to see the buggy code and the improved solution respectively.
3. Run the files using a JavaScript runtime environment (like Node.js) using `node bug.js` and `node bugSolution.js` to observe the different outputs.