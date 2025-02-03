# JavaScript Type Coercion Bug

This example demonstrates a common error in JavaScript related to type coercion.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition. This can lead to unexpected results.  The solution shows how to explicitly convert the string to a number before performing the addition.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`