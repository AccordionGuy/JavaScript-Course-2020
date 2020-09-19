const prompt = require('prompt-sync')();

// FICO credit score ranges
// See the Experian article "What is a good credit score?"
// (https://www.experian.com/blogs/ask-experian/credit-education/score-basics/what-is-a-good-credit-score/)
const POOR_LOW = 300
const POOR_HIGH = 579
const FAIR_LOW = 580
const FAIR_HIGH = 669
const GOOD_LOW = 670
const GOOD_HIGH = 739
const VERY_GOOD_LOW = 740
const VERY_GOOD_HIGH = 799
const EXCEPTIONAL_LOW = 800
const EXCEPTIONAL_HIGH = 850

creditScoreInput = prompt("What's your credit score? :")
creditScore = parseInt(creditScoreInput)

console.log(`You entered a credit score of ${creditScore}.`)
if (creditScore < POOR_LOW) {
  console.log("Security!!!")
} else if (creditScore >= POOR_LOW && creditScore <= POOR_HIGH) {
  console.log("You have a poor credit rating.")
} else if (creditScore >= FAIR_LOW && creditScore <= FAIR_HIGH) {
  console.log("You have a fair credit rating.")
} else if (creditScore >= GOOD_LOW && creditScore <= GOOD_HIGH) {
  console.log("Your credit rating is good.")
} else if (creditScore >= VERY_GOOD_LOW && creditScore <= VERY_GOOD_HIGH) {
  console.log("Your credit rating is very good.")
} else if (creditScore >= EXCEPTIONAL_LOW && creditScore <= EXCEPTIONAL_HIGH) {
  console.log("Your credit rating is exceptional.")
} else {
  console.log("Why hello there, Mr. Bezos!")
}
