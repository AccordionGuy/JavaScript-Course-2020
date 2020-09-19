// FizzBuzz
// ========
// This is a programming challenge given in programmer interviews
// that's been said to weed out a significant percentage of candidates.
// 
// Here's the challenge: Print the numbers 1 through 100, but...
// - If the number is a multiple of 3, print Fizz instead of the number.
// - If the number is a multiple of 5, print Buzz instead of the number.
// - If the number is a multiple of both 3 and 5, print FizzBuzz instead of the number.
//
// For more, see Imran Ghory's 2007 article, "Using FizzBuzz to Find Developers
// Who Grok Coding"
// (https://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/)


for (number = 1; number <= 100; number++) {
  word = ""
  const isMultipleOf3 = (number % 3 == 0)
  const isMultipleOf5 = (number % 5 == 0)

  if (isMultipleOf3 || isMultipleOf5) {
    if (isMultipleOf3) {
      word += "Fizz"
    }
    if (isMultipleOf5) {
      word += "Buzz"
    }
  } else {
    word = number.toString()
  }
  console.log(word)
}