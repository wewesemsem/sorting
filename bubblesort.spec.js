describe('Bubble Sort', function() {
    beforeAll(function () {
      spyOn(swapper, 'swap').and.callThrough();
    });

    it('swap n2 times', function () {
      bubbleSort([6, 8, 4, 9, 1]);
      expect(swapper.swap.calls.count()).toBeLessThan(25);
    });

    // it('has bigO of one with an array of one', function (){
    //   bubbleSort([1]);
    //   expect(swapper.swap.calls.count()).toEqual(0);
    // })

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
