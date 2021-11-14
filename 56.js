function reverse(str){
    return str
      .trim()
      .split(' ')
      .map((el, i) => {
      return i % 2  
        ? el.split('').reverse().join('')
        : el;
      
    })
    .join(' ');
    //WRITE SOME MAGIC
  }