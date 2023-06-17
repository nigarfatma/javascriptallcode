//inbuilt methos
// const numbers = [1, 2, 3, 4, 4, 5, 6, 6];
// const result = [...new Set(numbers)];
// console.log(result);

//not inbuilt method
function duplicateValue(arr) {
  let uniqueval = [];
  for (i = 0; i < arr.length; i++) {
    if (uniqueval.indexOf(arr[i]) === -1) {
      uniqueval.push(arr[i]);
    }
  }
  return uniqueval;
}
const arr = [1, 2, 3, 1, 4, 2];
const uniqueval = duplicateValue(arr);
console.log(uniqueval);
