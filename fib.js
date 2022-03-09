//declare an arrow function with name fib
//fib is a function that takes in a number and returns the fibonacci number
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));
