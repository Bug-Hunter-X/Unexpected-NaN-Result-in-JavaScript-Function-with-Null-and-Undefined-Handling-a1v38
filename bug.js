function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// The bug is that in some cases, the comparison with null might not produce the expected output.
// For instance, if one of the arguments is undefined instead of null, the code will throw an error.
console.log(foo(5, undefined)); // Output: NaN (Not a Number) - Unexpected result