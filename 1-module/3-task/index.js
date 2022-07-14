function ucFirst(str) {
  if (str.length > 0) {
    let firstUpStr = str.charAt(0).toUpperCase() + str.slice(1);
    return firstUpStr;
  }
  else return str;
}