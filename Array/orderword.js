// inbulit method
function reverseWords(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Reverse the order of the words using the `reverse()` method
  const reversedWords = words.reverse();

  // Join the reversed words back into a sentence using the space separator
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

// Example usage:
const sentence = "Hello, how are you?";
const reversed = reverseWords(sentence);
console.log(reversed); // Output: "you? are how Hello,"

// without inbuilt method
