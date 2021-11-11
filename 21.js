function friendFind(line)
{
  
  
  let count = 0;
  
  for (let i = 0; i < line.length; i++){
    if (line[i] === "red"){
      
      count += redScenario(line[i-2],line[i+-1],line[i+1],line[i+2])  
    }
  }
  return count;
}

function redScenario(color02, color01, color1, color2){
  
  if ((color02 === "blue" && color01 === "blue") ||
      (color01 === "blue" && color1 === "blue") ||
      (color1 === "blue" && color2 === "blue")){
    
    return 1;
  }
  return 0;
}