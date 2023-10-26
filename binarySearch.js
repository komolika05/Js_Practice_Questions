// Binary Search Algorithm
// step 1 : Sort the array and divide it into low index, high index, middle index
// step 2 : check if the search value is equal to middle index or not, if yes it will break and return mid value, if not it move to another condition
// step 3 : if search > mid, low = mid + 1
// step 4 : if search < mid, high = mid - 1

function binarySearch(arr, searchValue) {
  let low = 0;
  let high = arr.length - 1;
  let index = -1;

  while (high >= low) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === searchValue) {
      index = mid;
      break;
    } else if (searchValue < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}

const arr = [1, 3, 5, 65, 23, 75, 84, 97, 104];

console.log(binarySearch(arr, 97));
