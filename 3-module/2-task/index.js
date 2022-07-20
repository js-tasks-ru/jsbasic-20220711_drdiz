function filterRange(arr, a, b) {
  let arrRange = new Array();

  function arrPush(element) {
    arrRange.push(element)
  }

  arrPush(a);
  arrPush(b);
  
  arrRange.sort(function (x, y) { return x - y }); // сортировка массива с диапазоном
  
  let arrFiltered  = new Array;  
  arr.forEach(element => {
    (element >= arrRange[0] && element <= arrRange[1]) ? arrFiltered.push(element) : false;
  });
  return arrFiltered;
}
