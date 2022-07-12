function factorial(n) {
  if (n < 2 ) {
    return 1;
   } else {
    let i = n;
    while (i > 1) {
      --i;
      n = n * i;
    }
    return n;
  }
}
