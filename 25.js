function inArray(array1,array2){
    array1 = array1.sort();
  
    let inArray = [];
  
    for (let i = 0; i < array1.length; i++){
      for (let j = 0; j < array2.length; j++){
        if (array2[j].indexOf(array1[i]) !== -1){
          inArray.push(array1[i]);
          break;
        }
      }
    }
  
    return inArray;
  }