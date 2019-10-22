describe('Split Array function', function() {
    it('can split an array in half', function() {
        const result = split([38, 27, 43, 3, 9, 82, 10])
        expect(result).toEqual([[38, 27, 43, 3], [9, 82, 10]])
    })
})

describe('Merge function', function() {
   it('is able to merge two sorted arrays into one array', function() {
       const arr1 = [27, 38]
       const arr2 = [3, 10]
       expect(merge(arr1, arr2)).toEqual([3,10,27,38])

       const arrOne = [3,27,38,43]
       const arrTwo = [9,10,82]
       expect(merge(arrOne, arrTwo)).toEqual([3,9,10,27,38,43,82])
   }) 
})