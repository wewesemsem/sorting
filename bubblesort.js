const swapper = {}

function bubbleSort(arr, comparison) {

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
              swapper.swap(i, j, arr)
            }
        }
    }
    return arr
}

swapper.swap = (i, j, arr) => {
  const temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp;
}