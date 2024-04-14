function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }
  
  const x = 5;
  const y = 3;
  const result = pow(x, y);
  console.log(result);