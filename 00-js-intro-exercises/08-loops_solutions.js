// 01
function repeatString(string, num) {
    
    if (num <= 0) return ''

    let result = ''
    for(let i = 1; i <= num; i++) {
        result += string
    }

    return result
}

// 02
function addTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) { // 0 doesn't matter :)
    sum = sum + i;
  }
  return sum;
}
console.log(addTo(5))

// 03
function createDashes(number) {
  let string = ''

  for (let i = 0; i < number; i++) {
    string += '-'
  }
  console.log(string)
}
createDashes(3)

// 04
function lcm(a, b) {

  let theLCM = 0;
  let remainderA;
  let remainderB;

  do {

    theLCM++;
    remainderA = theLCM % a;
    remainderB = theLCM % b;

  } while (remainderA !== 0 || remainderB !== 0)

  return theLCM;
}

// 05
function isPrime(number) {
  
  // start from 2 & end at less than the number itself
  for (let i = 2; i < number; i++) { 
    if (number % i === 0) return false
  }

  return true; // ideally return num > 1 - just in case the number isn't 1 and 0
}

console.log(isPrime(7))
console.log(isPrime(6))

// 06
function trim(str) {

    while (str.substring(0, 1) == " ") {
      // check for white spaces from beginning
      str = str.substring(1, str.length);
    }
    
    while (str.substring(str.length - 1, str.length) == " ") {
      // check white spaces from end
      str = str.substring(0, str.length - 1);
    }
    return str;
}

console.log('\"'+ trim('  abc   ') + '\"') // to make sure that the spaces are gone

// 07
function createPattern() {
  
  for (let x = 1; x <= 6; x++) { // 5 rows of stars
  
    let stars = '' // here we will store the stars

    for (let y = 1; y < x + 1; y++) { // number of stars for each row
      
      stars += "*";

    }

    console.log(stars);
  }
}
createPattern()