function foo(a, b) {
  return a + Number(b);
}

console.log(foo(1, '2')); // Output: 3

//Alternative solution using parseInt
function foo2(a, b) {
  return a + parseInt(b, 10);
}
console.log(foo2(1, '2')); // Output: 3