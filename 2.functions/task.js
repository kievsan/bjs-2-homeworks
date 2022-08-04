// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i in arr) {
    let a = parseFloat(arr[i]);
    if (isNaN(a)) {
      a = 0;
    }
    if (a > max) {
      max = a;
    }
    if (a < min) {
      min = a;
    }
    sum += a;
  }
  avg = +((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  // Ваш код
  sum = 0;
  for (let i in arr) {
    let a = parseFloat(arr[i]);
    if (isNaN(a)) {
      a = 0;
    }
    sum += a;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  // Ваш кода
  max = -Infinity;
  for (let i in arrOfArr) {
    let funcValue = func(arrOfArr[i]);
    if (funcValue > max) {
      max = funcValue;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let params = getArrayParams(arr);
  return Math.abs(params.max - params.min);
}
