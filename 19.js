function betterThanAverage(c, y) {
    return c.reduce((acc, item) => acc + item, 0) / c.length < y;
    // Your code here