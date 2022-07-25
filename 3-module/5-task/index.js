const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
function getMinMax(str) {
  let arr = str
              .split(' ')
              .map(Number)
              .filter (item => isNaN(item) == false)
  return {min: Math.min(...arr), max: Math.max(...arr)}
}

