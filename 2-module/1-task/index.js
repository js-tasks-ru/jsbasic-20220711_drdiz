function sumSalary(salaries) {
  let sumSal = 0;
  for (key in salaries) {
    if (Number.isInteger(salaries[key])) {
      sumSal += salaries[key];
    }
  }
  return sumSal
}
