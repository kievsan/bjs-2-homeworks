function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return  arr1.every((i) => arr1[i] === arr2[i]);
}

function advancedFilter(arr) {
  return arr
      .filter((a) => a > 0)
      .filter((a) => a % 3 === 0)
      .map((a) => a * 10);
}
