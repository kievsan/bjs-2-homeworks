function compareArrays(arr1, arr2) {
  return  arr1.length === arr2.length
      &&  arr1.every((a,i) => a === arr2[i]);

  // function isEqual(a, i, arr, arr_2 = arr2, a2 = arr_2[i]) {
  //   alert(`${arr}\n${arr_2}\ni=${i}:   ` +
  //       `arr1[${i}]=${a}   ===? ` +
  //       `(${a === a2})   ` +
  //       `arr2[${i}]=${a2}`);
  //   return a === a2;
  // }
  //
  // return  arr1.length === arr2.length
  //     &&  arr1.every(isEqual);
}

function advancedFilter(arr) {
  return arr
      .filter((a) => a > 0)
      .filter((a) => a % 3 === 0)
      .map((a) => a * 10);
}
