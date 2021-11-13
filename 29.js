var numberToPrice = function(number) {
    if (typeof(number) !== 'number'){
      return 'NaN';
    }
    
    let strArr = number.toString().split(".");
    
    let firstHalf = injectCommas(strArr[0]);
    let secondHalf = injectPeriod(strArr[1]);
    
    return firstHalf + secondHalf;
  }
  
  let injectPeriod = (strNum) => {
    if (strNum === undefined || strNum === ''){
      return '.00';
    } else if (strNum.length === 1){
      return "." + strNum + '0';
    }
    
    return "." + strNum.slice(0,2);
  }
  
  let injectCommas = (strNum) => {
    let count = strNum.length;
    let commaCount = 0;
    
    while (count >= 0){
      if (commaCount % 3 === 0 &&
         commaCount !== 0 &&
         count !== 0 &&
         parseInt(strNum[count - 1]).toString() !== 'NaN'){
        
        strNum = strNum.slice(0,count) + ',' + strNum.slice(count);
      }
      commaCount++;
      count--;
    };
    
    return strNum;
  }