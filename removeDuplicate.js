// Write a program to remove duplicate elements from an array

function doesElementExistInArray(array,element){
    for (let i = 0; i<array.length; i++){
        if (array[i] === element){
        return true
        }
    }
    return false 
}
function getUnique(array){
    let unique = []
    for (const i of array){
        if(!doesElementExistInArray(unique,i)){
            unique.push(i)
        }
    }
    return unique
}
a = [1,2,3,4,5,3,2,6,4,8,5,6,8,9,3,5,2]
const uniqueArr =getUnique(a)
console.log(uniqueArr)