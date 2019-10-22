describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array with multiple elements', function() {
    expect(bubbleSort([6, 8, 4, 9, 1])).toEqual([1, 4, 6, 8, 9]);
  });

});
