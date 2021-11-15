function saleHotdogs(n){
    let cents = 0;
    
    cents = n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90;
    return n * cents;
  }