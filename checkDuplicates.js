// Write a function to check duplicates in an array

function doesElementExistInArray(array,element){
    for (let i = 0; i<array.length; i++){
        if (array[i] === element){
        return true
        }
    }
    return false 
}
array = doesElementExistInArray([1,2,3,4,5,2,3,2],3)
console.log(array)