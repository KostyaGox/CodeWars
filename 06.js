function gooseFilter (birds) {
    const geese = {"African": 1, "Roman Tufted": 1, "Toulouse": 1, "Pilgrim": 1, "Steinbacher": 1};
    
    return birds.filter(item => !geese[item]);
    // return an array containing all of the strings in the input array except those that match strings in geese
  };