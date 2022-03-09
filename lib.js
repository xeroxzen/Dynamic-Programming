const lib = (n) => {
  if (n <= 1) return;
  lib(n - 2);
  lib(n - 2);
};
