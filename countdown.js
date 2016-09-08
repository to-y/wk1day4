var countdownGenerator = function (count) {

  return function () {
    console.log(count);
    while (count !== 0) {
      return count--;
    }
  }
}

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!



