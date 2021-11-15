function iterPi(epsilon) {
    n = 1
    myPi = 4 
    factor = -4
    while(Math.abs(Math.PI - myPi) > epsilon) {
      myPi += factor/(n*2+1)
      n++
      factor = -factor
    }
    return [n, +myPi.toFixed(10)]
      // your code
  }