function squareDigits(num){
    var num1 = num.toString(); 
    var num2 = num1.split(""); 
    var result = ' ';
    for (var i = 0; i < num2.length; i++) { 
    result += Math.pow( num2[i], 2); 
    }; 
    var test = parseInt(result); 
  
  return test;
  }