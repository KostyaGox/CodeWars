var maxSequence = function(arr){
    let greatestSum = 0;
    let currSum = 0;
    
    for (let i = 0; i < arr.length; i++){
      if (greatestSum < arr[i] + currSum){
        currSum = currSum + arr[i];
        greatestSum = currSum; 
      } else {
        currSum = currSum + arr[i] > 0 ? currSum + arr[i] : 0;
      }
    }
    
    return greatestSum;
    // ...
  }