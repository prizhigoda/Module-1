const input1 = "abctestabctext"
const input2 = "testabctext"
const replacingLetters = (string) => {
    return string.slice(0, 3) === "abc" ? "www" + string.slice(3) : string + "zzz"
}
console.log(replacingLetters(input1))
console.log(replacingLetters(input2))