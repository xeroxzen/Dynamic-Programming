// Arrow function that takes a value and returns the nth fibonacci number using memoization
const fib = (n, memo = {}) => {
  if (n <= 2) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));
console.log(fib(100));
