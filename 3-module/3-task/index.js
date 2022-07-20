function camelize(str) {
  let arr = str.split('');
  let NewStr = '';
  for (let key = 0; key < arr.length; key++) {
    if (arr[key] == '-') {
      NewStr += str.charAt(key + 1).toUpperCase();
      key++;
    } else {
      NewStr += arr[key];
    };
  }
  return NewStr;
}
