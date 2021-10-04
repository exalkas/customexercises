// 01
function findDiffer(num1, num2) {

    if (num1 > num2) {
      console.log(
        "The larger of " + num1 + " and " + num2 + " is " + num1 + "."
      );
    } else if (num2 > num1) {
      console.log(
        "The larger of " + num1 + " and " + num2 + " is " + num2 + "."
      );
    } else {
      console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
}

// 02
function printEvenAndOdd() {
    for (let i = 0; i < 16; i++) {
        if (i === 0) {
            console.log(i, 'is even')
        } else if (i % 2 === 0) {
            console.log(i, 'is even')
            
        } else {
            console.log(i, 'is odd')
        }
    }
}

// 03
function checkGrades(marks) {

    let sumOfGrades = 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfGrades += marks[i]
    }

    const average = sumOfGrades / marks.length;

    console.log('The class average mark is', average)

    for (let i = 0; i < marks.length; i++) {

        switch (true) {

            case (marks[i] < 60 ): 
                console.log('For student #'+i, 'the grade is F' )
                break;
            case (marks[i] < 70 ): 
                console.log('For student #'+i, 'the grade is D' )
                break;
            case (marks[i] < 80 ): 
                console.log('For student #'+i, 'the grade is C' )
                break;
            case (marks[i] < 90 ): 
                console.log('For student #'+i, 'the grade is B' )
                break;
            case (marks[i] < 100 ): 
                console.log('For student #'+i, 'the grade is A' )
                break;
            default:
                console.log('Unknown grade for student #'+ i)
        }
    }
}
// checkGrades([80,77,88,95,68])

// 04
function sumUnder1000() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
sumUnder1000()
// 05
function findLongestWord(string) {
    wordsArray = string.split(" ");

    let maxChars = 0

    for (let i  = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > maxChars) maxChars = wordsArray[i].length
    }

    return maxChars;
}

// 06
function equals(a, b) {
    let result = 'UNEQUAL';
    if (a === b) {
      result = 'EQUAL';
    }
    return result;
  }

// 07

function compareEnding(string, end) {
    const endLength = end.length

    const part = string.slice(string.length - endLength)

    if (part === end) {
        return true
    } else {
        return false
    }

    // one liner: return string.slice(string.length - end.length) === end
}

// console.log(compareEnding("Bastian", "n0"))
// console.log(compareEnding("Open sesame", "same"))

// 08
function truncateString(string, num) {
    return string.slice(0, num ) + '...'
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-", 1))

// 09
function addWithSurcharge(a, b) {

    let surcharge = 0;
  
    if (a <= 10) {
      surcharge = surcharge + 1;
    } else {
      surcharge = surcharge + 2;
    }
  
    if (b <= 10) {
      surcharge = surcharge + 1;
    } else {
      surcharge = surcharge + 2;
    }
  
    return a + b + surcharge;
  }

//   10
function checkUpperCase(string) {
    
    const convertedStringToUpperCase = string.toUpperCase()
    if (convertedStringToUpperCase === string) {
        return true;
    } else return false

    //one liner
    return string.toUpperCase() === string
}
// console.log(checkUpperCase('a'))
// console.log(checkUpperCase('A'))
// console.log(checkUpperCase('ABC'))

// 11
function checkNumber(number) {

    if (typeof number === 'number') {
        return true;
    } else return false

    // one liner
    return typeof number === 'number'
}
console.log(checkNumber('1'))
console.log(checkNumber('A'))

// 12
function sumDigits(number) {
    let sum = 0;

    const string = String(number)

    for (let i = 0; i < string.length; i++) {
        sum += parseInt(string[i])
    }

    console.log('Sum is', sum)
}
sumDigits(192)
sumDigits(12)

// 13
function convertCase(string) {
    let convertedString = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() ) {
            convertedString += string[i].toLowerCase()
        } else {
            convertedString += string[i].toUpperCase()
        }
    }

    console.log(convertedString)
}

convertCase('aBBa')

// 14
function commonInArrays(array1, array2) {
    
    let commons = []

    for (let i = 0; i < array1.length; i ++) {
        if (array2.includes(array1[i])) commons.push(array1[i])
    }

    console.log(commons)
}
commonInArrays([1, 2, 3], [1, 2, 4])
commonInArrays([1, 8, 10], [1, 2, 4])
commonInArrays([1, 8, 10], [1, 8, 10])

// 15
function includes(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) return true
    }

    return false;
}
console.log(includes([1,2,3,4,5], 5))
console.log(includes([1,2,3,4,5], 6))