function findlargestNumber(arr) {
  let largestnumber = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < largestnumber) {
      largestnumber = arr[i];
    }
  }
  return largestnumber;
}
const array = [0, 1, 2, 3, 4, 8, 9, 12, 22];
const result = findlargestNumber(array);
console.log(result);
