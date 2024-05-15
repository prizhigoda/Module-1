const str1 = 'test education part 2'
const str = 'text'
function check(string){
    let result = string.length > 5 ? `${string.slice(0,3)}${string.slice(-3)}` : string[0].repeat(string.length)
    console.log(result)
} 
check(str1)
check(str)