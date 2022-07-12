function factorial(n) {
  if (n < 2 ) {
    return 1;
   } else {
    let factorial = n;
    while (n > 1) {
      --n;
      factorial = factorial * n;
    }
    return factorial;
  }
}
