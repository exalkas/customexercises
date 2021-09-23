// 01
function hypotenuse(a, b) {
    let cSquare = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(cSquare);
  }

//   02
function midrange(a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    return (min + max) / 2;
}

// 03
function area(radius) {
    return Math.PI * (radius ** 2);
}

// 04
function dice() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}

// 05
function round100(number) {
  return Math.round(number/100) * 100
}
// 06
function parseFirstInt(string) {

    let foundNumbers = '';
  
    for (let i = 0; i < string.length; i++) {

      let firstInt = parseInt(string[i]);

      if (Number.isNaN(firstInt) == false) foundNumbers += string[i];
      
    }

    if (foundNumbers.length == 0) {
      return NaN
    } else {
      return foundNumbers
    }
}

// 06 simpler version 
function parseFirstInt(string) {

    let foundNumbers = '';
  
    for (let i = 0; i < string.length; i++) {

      let firstInt = parseInt(string[i]);

      if (!Number.isNaN(firstInt)) foundNumbers += string[i];
      
    }
  
    return foundNumbers || NaN;
}
