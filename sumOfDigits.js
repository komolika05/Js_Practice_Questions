// Write a program to calculate sum of all the digits in a number

function sum(value){
    let total = 0
    let array = value.toString().split("")
    for (const element of array){
        total += parseInt(element)
    }
    return total
}
const answer = sum(1789)
console.log(answer)