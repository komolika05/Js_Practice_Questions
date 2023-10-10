// Write a function to calculate sum of all numbers til nth integer. 

function sum(value){
    let i=0
    let f=0
    while (i<=value){
        i=i+1
        f=f+i
    }
    return f
}
const result=sum(5)
console.log(result)