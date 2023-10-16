//Find the middle element if array is odd or even

function middleElement(array){

    if(array.length%2 === 0){
    let middleValue = (array.length-2)/2

    return array[middleValue]
    }
    else {
        let middleValue = (array.length-1)/2

    return array[middleValue]
    }
}
const array = middleElement([1,2,3,4,5,6])
console.log(array)