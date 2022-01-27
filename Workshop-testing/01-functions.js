/**
 * 01
 * Write a function that accepts a letter and returns wether this letter
 * is upperCase or not. if It's uppercase should return true
 * else should return false
 */
function checkUppercase(letter) {
    return letter.toUppercase() === letter
}

/**
 * 02
 * Write a function that counts the number of the odd digits in number.
 *
 */
function countOdd(number) {
    let counter = 0;

    for (let i = 0; i < String(number.length); i++) {
        if (number % 2 !== 0) counter++
    }

    return counter
}


/**
 * 03
 * Write a function that accepts an array with items followed by one or more
 * arguments. The function should return another array that doesn't include
 * any of the elements that have the same values as in the arguments that 
 * come after the array
 * Examples: 
 * clearArray([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * clearArray([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
 * clearArray([2, 3, 2, 3], 2, 3) should return []
 */
function clearArray(array, ...values) {

    values.forEach(item => {
        
        let idx = array.indexOf(item)
        
        while (idx > -1) {
            
            array.splice(idx, 1)
            idx = array.indexOf(item)

        }

    })
    return array
}

console.log(clearArray([1, 2, 3, 1, 2, 3], 2, 3)) // should return [1, 1]
console.log(clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3)) // should return [1, 5, 1]
console.log(clearArray([3, 5, 1, 2, 2], 2, 3, 5)) // should return [1]
console.log(clearArray([2, 3, 2, 3], 2, 3)) // should return []