// Write a program to calculate sum of all the digits in a number

function sum(value){
    return value.toString().split("")
    .reduce((sum, digit) => 
            sum + parseInt(digit), 0); 
}
const answer = sum(6289)
console.log(answer)