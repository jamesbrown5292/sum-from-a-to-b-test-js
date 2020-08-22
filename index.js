
function sum(fromN, toN) {
  // Base case - fromN === toN
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
}

module.exports = sum;
