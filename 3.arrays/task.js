function compareArrays(arr1, arr2) {
  return  arr1.length === arr2.length
      &&  arr1.every((i) => arr1[i-1] === arr2[i-1]);
}

function advancedFilter(arr) {
  return arr
      .filter((a) => a > 0)
      .filter((a) => a % 3 === 0)
      .map((a) => a * 10);
}
