let string1 = "Aquamarine Black Blue Brown Chocolate "
let string2 = "Green Lime Olive Orange Purple "
let string3 = "Red Tomato Violet White Yellow"

function joinColor(...args) {
  return args.join("")
}
let colors = joinColor(string1, string2, string3)
console.log(colors)

function indexColor(str, index) {
  return str.indexOf(index)
}
let greenIndex = indexColor(colors, "Green")
console.log(greenIndex)

function isColorIncludes(str, index) {
  let lowerStr = str.toLowerCase()
  return lowerStr.includes(index.toLowerCase())
}
console.log(isColorIncludes(colors, "Black"))
console.log(isColorIncludes(colors, "BlAcK"))
console.log(isColorIncludes(colors, "Lilac"))

function replaceColor(str, findStr, newStr) {
  return str.replace(findStr, newStr)
}
let result = replaceColor(string2, "Olive", "Grey")
console.log(result)

function splitColors(str) {
  let arr = str.split(" ")
  let filtered = arr.filter((str) => str.length > 6)
  let sum = filtered.reduce(function (newStr, word) {
    return newStr + " " + word
  }, "")
  return sum
}
console.log(splitColors(colors))

function calculateSpaces(str) {
  let res = str.match(/ /g)
  return res.length
}
console.log(calculateSpaces(string3))
