function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphaNums = [];
    
    text = text.toLowerCase();
    
    for (let i = 0; i < text.length; i++){
      let idx = alphabet.indexOf(text[i]);
      
      if (idx === -1){
        continue;
      } else {
        alphaNums.push(idx + 1);
      }
    }
    return alphaNums.join(" ");
  }