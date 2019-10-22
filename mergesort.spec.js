describe('Split Array function', function() {
    it('can split an array in half', function() {
        const result = split([38, 27, 43, 3, 9, 82, 10])
        expect(result).toEqual([[38, 27, 43, 3], [9, 82, 10]])
    })
})