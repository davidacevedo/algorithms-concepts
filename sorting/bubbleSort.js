/**
 * Bubble Sort
 * 
 * In place sorting algorithm. Considered the worst sorting algorithm for it's O(n^2) time complexity
 */

const sampleData = [6,5,4,2,1,3,5,6,7];

function bubbleSort(data) {
  operationsDone = true;
  while(operationsDone) {
    operationsDone = false;

    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > data[i + 1]) {
        const temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        operationsDone = true;
      }
    }
  }

  return data;
}

console.log(bubbleSort(sampleData));