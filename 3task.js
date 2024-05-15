let str = "abctestabctext"
let str1 = 'testabctext'
function check(string){
    let result = string.slice(0, 3) == "abc" ? "www" + `${string.slice(3)}` : string + "zzz"
    console.log(result)
}
check(str)
check(str1)