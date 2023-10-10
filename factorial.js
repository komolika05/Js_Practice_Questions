//Write a function to calculate factorial

function fact(value){
    let i=1
    let f=1
    while (i<=value){
        f=i*f
        i=i+1
    }
    return f
}
const result = fact(0)
console.log(result)