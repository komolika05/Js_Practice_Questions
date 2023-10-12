// Write a program to identify a Leap Year

function leapYear(value){
    let a = false
    if (value % 400 === 0 || (value % 100 !== 0 && value % 4 === 0)) {
        a = true
    }
    return a
}
const leap = leapYear(2026)
console.log(leap)