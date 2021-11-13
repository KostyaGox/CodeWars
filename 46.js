function DNAStrand(dna){
    let dnaKey = {
      "A" : "T",
      "T" : "A",
      "C" : "G",
      "G" : "C"
    }
    
    let compSide = "";
    
    for (let i = 0; i < dna.length; i++){
      compSide += dnaKey[dna[i]];
    }
    
    return compSide;
    //your code here
  }