//dib arrow function that take a number and decreases it by 1 recursively
const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};
