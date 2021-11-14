function sumArray(array) {
    if(!array || array.length < 2) return 0;
    
    let min = array[0], max = array[0], sum = array[0];
    
    for(let i = 1; i < array.length; i++){
      if(array[i] < min) min = array[i];
      if(array[i] > max) max = array[i];
      sum += array[i];
    }
    return sum - min - max;
  }