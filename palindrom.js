// Write a function to identify if a string is a palindrome or not


function palindrome(value) {
    let array = value.split("")
    let reversedArray= []
    for (let i = array.length - 1 ; i >= 0 ; i--){
        reversedArray.push(array[i])
    }

    for (let i=0 ; i<array.length ; i++){
        if(array[i] !== reversedArray[i]){
            return false
        }
    }

    return true
}
const input1 = "yash"
const input2 = "madam"

const palin = palindrome(input1)
const palin2 = palindrome(input2)

console.log(palin)
console.log(palin2)