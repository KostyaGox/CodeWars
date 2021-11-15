function maxSum(arr,range){
    const sumFrom0toN = [];
    
    for (let i = 0; i < arr.length; i++) {
      sumFrom0toN[i] = (sumFrom0toN[i - 1] || 0) + arr[i]
    }
    
    console.log(sumFrom0toN);
    let currentMaxResult = -Infinity;
    for (let i = 0; i < range.length; i++) {
      const [start, end] = range[i];
      const sum = sumFrom0toN[end] - (sumFrom0toN[start - 1] || 0)
      if (sum > currentMaxResult) {
        currentMaxResult = sum
      }
    }
    
  return currentMaxResult;  
  }