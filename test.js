function sortCopyOfArray(array) {

    const [...restArray] = array 

    return restArray
}

const words = ['alphabet', 'zoo', 'sofia']

console.log(sortCopyOfArray(words).sort())

