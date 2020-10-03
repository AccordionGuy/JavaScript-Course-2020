let score = 200
let isFinals = true

if (isFinals) {
  console.log("You won the championship!")
}
if (score <= 180) {
  console.log("Get more practice.")
} else if (score < 300) {
  console.log("Good game!")
} else if (score < 360) {
  console.log("Great game!")
} else if (score == 360) {
  console.log("Perfect game!!!")
} else {
  console.log("Cheater!")
}
