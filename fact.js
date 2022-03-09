//arrow function that takes a value and returns the factorial of that value
const fact = (n) => {
  if (n <= 1) {
    return;
  }
  return n * fact(n - 1);
};

console.log(fact(5));
console.log(fact(6));
console.log(fact(7));
console.log(fact(8));
