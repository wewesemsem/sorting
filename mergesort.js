function split(wholeArr) {
  const half = Math.ceil(wholeArr.length / 2);
  const firstHalf = wholeArr.slice(0, half);
  const secondHalf = wholeArr.slice(half);
  return [firstHalf, secondHalf];
}
