function split(wholeArr) {
  const half = Math.ceil(wholeArr.length / 2);
  const firstHalf = wholeArr.slice(0, half);
  const secondHalf = wholeArr.slice(half);
  return [firstHalf, secondHalf];
}

function merge(arrayOne, arrayTwo) {
  let mergedArr = [];

  while (arrayOne.length > 0 || arrayTwo.length > 0) {
    if (arrayOne[0] < arrayTwo[0] || arrayTwo.length === 0) {
      mergedArr.push(arrayOne[0]);
      //    console.log(arrayOne)
      arrayOne.splice(0, 1);
      //  console.log(arrayOne)
    } else {
      mergedArr.push(arrayTwo[0]);
      //  console.log(arrayTwo)
      arrayTwo.splice(0, 1);
      //  console.log(arrayTwo)
    }
  }
  return mergedArr;
}
// let singleElems = [];
// function mergeSort(array) {
//   let allArr = split(array);
//   allArr.forEach(elem => {
//     if (elem.length > 1) {
//       mergeSort(elem);
//     } else {
//       singleElems.push(elem);
//     }
//   });
//   return singleElems;
// }

function mergeSort(array) {
    let hasArrays = false;

    arrayOfArrays = split(array)

    arrayOfArrays.forEach((elem) => {
        if (elem.length > 1) {
            hasArrays = true;
        }
    })  
    // base case: arrays of length 1 
    if (!hasArrays) {
        //merge
        console.log('merge')
    } else {
        //keep splitting
        const result = split(arrayOfArrays) 
        mergeSort(result)
        console.log('split')
    }
    return arrayOfArrays
}