//Write a function to accept two array of numbers as input and return an array containing numbers present in both the arrays in ascening order

function mergeArray(arr1,arr2){
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } 
        else if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } 
        else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

let arr1 = [1, 2, 7, 8]
let arr2 = [2, 3, 5, 9, 10]

let output = mergeArray(arr1,arr2)
console.log(output)