// Write a function to return a reversed array without using any in-built function
// [1,2,3,4] --> [4,3,2,1]
// [c,b,a] --> [a,b,c] (each element will be in string)

function reverse(array){
    let reversedArray= []
    for (let i = array.length - 1 ; i >= 0 ; i--){
        reversedArray.push(array[i])
    }
    return reversedArray
}
//let array = reverse([1,2,3,4])
let array = reverse(["c","b","a"])
console.log(array)
