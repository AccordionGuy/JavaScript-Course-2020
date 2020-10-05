console.log("#")
console.log("##")
console.log("###")
console.log("####")
console.log("#####")
console.log("######")
console.log("#######")

// for (let hashes = 1; hashes <= 7; hashes += 1) {
//   let output = ""

//   for (let characters = 1; characters <= hashes; characters += 1) {
//     output = output + "#"
//   }

//   console.log(output)
// }

output = ""
hashes = 1
while (hashes <= 7) {
  console.log(output += "#")
  hashes += 1
}