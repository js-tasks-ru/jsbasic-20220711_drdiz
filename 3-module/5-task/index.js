const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
function getMinMax(str) {
  let arr = str.split(' ');
  let arrOfelm = arr.map(Number);
  let arrOfNumber = new Array;

  arrOfelm.forEach(element => {
    console.log(typeof(element))
    isNaN(element) ? 1 : arrOfNumber.push(element)  // забираем числа в массив
  });

  let result = {
    min: Math.min(...arrOfNumber),
    max: Math.max(...arrOfNumber)
}

  return result;  
  
  
}

