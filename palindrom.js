// Write a function to identify if a string is a palindrom or not

function palindrome(value) {
    const length =value.length
    for(let i=0 ; i<length/2 ; i++){
        if(value[i] !== value[length -1 -i]){
            return false
        }
    }
    return true
}
const input1 = palindrome("yash")
const input2 = palindrome("madam")

console.log(input1)
console.log(input2)