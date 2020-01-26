// binary search (on sorted array of integers)

function binarySearch (numbers, target) {
  let min = 0;
  let max = numbers.length - 1;

  while (max >= min) {
    const mid = Math.floor((min + max) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
}

// binary search using recursion
function binarySearchRecursion(numbers, target) {
  return bSearchRecursion(numbers, target, 0, numbers.length - 1);
}

function bSearchRecursion(numbers, target, min, max) {
  if (max < min) {
    return -1;
  }

  const mid = Math.floor((min + max) / 2);
  if (numbers[mid] === target) {
    return mid;
  } else if (numbers[mid] > target) {
    return bSearchRecursion(numbers, target, min, mid - 1);
  } else {
    return bSearchRecursion(numbers, target, mid + 1, max);
  }
}

const array = [
  20, 137, 203, 225, 228,
  233, 296, 452, 569, 602,
  634, 746, 775, 817, 825,
  832, 923, 933, 950, 970
];

console.log(binarySearch(array, 20))
console.log(binarySearch(array, 137))
console.log(binarySearch(array, 203))
console.log(binarySearch(array, 225))
console.log(binarySearch(array, 228))
console.log(binarySearch(array, 233))
console.log(binarySearch(array, 296))
console.log(binarySearch(array, 452))
console.log(binarySearch(array, 569))
console.log(binarySearch(array, 602))
console.log(binarySearch(array, 634))
console.log(binarySearch(array, 746))
console.log(binarySearch(array, 775))
console.log(binarySearch(array, 817))
console.log(binarySearch(array, 825))
console.log(binarySearch(array, 832))
console.log(binarySearch(array, 923))
console.log(binarySearch(array, 933))
console.log(binarySearch(array, 950))
console.log(binarySearch(array, 970))
