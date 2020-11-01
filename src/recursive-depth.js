module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let quantity = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        quantity++;
      }
    }
    return (Math.max(depth, quantity));
  }
};

// 2 passing; 2 failing