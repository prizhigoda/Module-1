const input1 = 'abcbacabcbcabcbaba'
const input2 = 'abcbacabcqbcabcbnaba'

const checkSymbol =(str) => {
  for(const item of str) {
      if (item !== 'a' && item !=='b'&& item !== 'c'){
    
        return false
    }
  }

return true
}

console.log(checkSymbol(input1))
console.log(checkSymbol(input2))
