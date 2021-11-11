function bandNameGenerator(str) {
    if (str[0] === str[str.length - 1]){
      return double(str);
    } else {
      return addThe(str);
    }
  }
  
  let addThe = (noun) => {
    return "The " + noun.slice(0,1).toUpperCase() + noun.slice(1);
  }
  
  let double = (noun) => {
    return noun.slice(0,1).toUpperCase() + noun.slice(1) + noun.slice(1);
  }