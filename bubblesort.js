function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp;
            }
        }
    }

    console.log('result', arr)
    return arr
}