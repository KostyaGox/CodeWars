String.prototype.toAlternatingCase = function () {
    let flipped = "";
    
    for(let i = 0; i < this.length; i++){
      let letter = this[i];
      
      letter = letter.charCodeAt() <= 90 ? letter.toLowerCase()
                                         : letter.toUpperCase();
      flipped += letter;
    }
    return flipped;
    // Define your method here :)
  }