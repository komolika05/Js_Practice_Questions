//Write a program to check if a string is palindrome or not

function palindrom(value){
    let array = value.split("")
    let reverseArray = []

    for (let i=array.length -1 ; i >= 0 ; i--) {
        reverseArray.push(array[i])
    }

    for(let i=0 ; i<array.length ; i++){
        if (array[i] !== reverseArray[i]){
            return false
        }
    }
    return true
}

const word = palindrom("kanishka")
const word2 = palindrom("tit")
const word3 = palindrom("tat")
const word4 = palindrom("love")

console.log(word)
console.log(word2)
console.log(word3)
console.log(word4)
