// Write a program to remove duplicate elements from an array

function removeDuplicate(a){
    let unique = []
    a.forEach(element => {
        if (!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}
let a=removeDuplicate([2,4,5,6,5,3,2,6,4,9])
console.log(a)