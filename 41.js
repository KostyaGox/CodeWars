function enough(cap, on, wait) {
    console.log(cap, on, wait);
    const p = on + wait - cap;
    return p < 0 ? 0 : p;
    // your code here
  }