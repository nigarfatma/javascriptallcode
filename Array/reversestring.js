// inbuilt method
// const str = "hello";
// const revStr = str.split("");
// console.log(revStr);
//explain-->All three approaches involve iterating over the characters of the string and building a new string in reverse order. The first approach uses the split method to convert the string into an array, the reverse method to reverse the array, and the join method to combine the array elements into a single string again. The second approach uses a decrementing for loop to append each character to the reversed string. The third approach uses the reduce method to iterate over the characters and construct the reversed string.
//explain on "" and not put ""-->In the context of the join() method, passing an empty string "" as the argument means that there will be no separator between the elements when they are joined together into a single string.By default, if you don't provide any argument to the join() method, it uses a comma (,) as the separator. However, when you pass an empty string "" as the argument, it specifies that there should be no separator between the elements.

//without built method
//just basic understanding
// const str = "javascript";

// function reverseStr(str) {
//   console.log(str[9]);
// }
// reverseStr();

//main function

// const str = "javascript";

// function reverseStr(str) {
//   for (i = 0; i < str.length; i++) {
//     console.log(i, str[i]);
//   }
// }
// reverseStr(str);

// const str = "javascript";

// function reverseStr(str) {
//   const output = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     output = output + str[i]; // concatenatedString
//   }
// }
// reverseStr(str);

//2.
// function reverseString(inputString) {
//     let reversedString = '';
//     for (let i = inputString.length - 1; i >= 0; i--) {
//       reversedString += inputString.charAt(i);
//     }
//     return reversedString;
//   }

//   const str = 'hello';
//   const revStr = reverseString(str);
//   console.log(revStr);

//In JavaScript, the charAt() method is used to retrieve the character at a specified index position within a string. It allows you to access a specific character based on its position in the string.The charAt() method takes a single parameter, which is the index of the character you want to retrieve. The index is a zero-based value, meaning the first character has an index of 0, the second character has an index of 1, and so on.

// Here's an example to demonstrate the usage of the charAt() method:
// const str = 'Hello';
// console.log(str.charAt(0)); // Outputs: "H"
// console.log(str.charAt(1)); // Outputs: "e"
// console.log(str.charAt(4)); // Outputs: "o"

//split-->conver string into array
//join--->convert array into string

//using array
// function revstr(str) {
//   const output = [];
//   for (i = str.length - 1; i >= 0; i--) {
//     output.push(str[i]);
//   }
//   return output.join("");
// }
// console.log(revstr("nigar"));
