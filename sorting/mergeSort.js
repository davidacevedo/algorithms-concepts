/**
 * Merge Sort
 * 
 * A divide and conquer sorting algorithm
 */

const sampleData = [6,5,4,2,1,3,5,6,7];

function merge(data) {
  mergeSort(data, 0, data.length - 1);
  return data;
}

function mergeSort(data, left, right) {
  if (left >= right) {
    return;
  }

  const middle = Math.floor((right + left) / 2);
  mergeSort(data, left, middle);
  mergeSort(data, middle + 1, right);

  // Merge both halves
  mergeHalves(data, left, middle, right);
}

function mergeHalves(data, left, middle, right) {
  const mergedArray = [];
  let leftStartIndex = left;
  let rightStartIndex = middle + 1;
  while (leftStartIndex <= middle && rightStartIndex <= right) {
    if (data[leftStartIndex] <= data[rightStartIndex]) {
      mergedArray.push(data[leftStartIndex]);
      leftStartIndex++;
    } else {
      mergedArray.push(data[rightStartIndex]);
      rightStartIndex++;
    }
  }

  // Merge the rest of the array from either left or right
  for (let i = leftStartIndex; leftStartIndex <= middle; i++) {
    mergedArray.push(data[leftStartIndex]);
    leftStartIndex++;
  }

  for (let i = rightStartIndex; rightStartIndex <= right; i++) {
    mergedArray.push(data[rightStartIndex]);
    rightStartIndex++;
  }

  // Copy merged array over
  for (let i = left; i <= right; i++) {
    data[i] = mergedArray[i - left];
  }
}


console.log(merge(sampleData));
