// 01
function studentOperations() {

    const student =  { 
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12  
    };

    console.log(student);
    delete student.rollno;
    console.log(student);
}

// 02
const users = []

function addUser(user) {
    users.push(user)
}

function objectProps(object) {
    return Object.keys(object)
}

function objectValues(object) {
    return Object.values(object)
}

function updateCreateProp(object, prop, value) {
    object[prop] = value
    return object
}

function deleteProp(object, prop) {
    delete object[prop]
    return object
}

const user1 = {
    name: 'John',
    address: 'Berlin',
    email: 'email@example.com'
}

addUser(user1)
console.log(users) //print the array
console.log(objectProps(user1)) 
console.log(objectValues(user1)) 
console.log(updateCreateProp(user1, 'name', 'George'))
console.log(deleteProp(user1, 'email'))

// 03
const myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    let starsString = 'Stars: ';
    for (let i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}

// Or...
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);

// 04
function cashRegister(cart){
    let items = Object.keys(cart); // array of items by key   
    let sum = 0; 
    
    for (let i = 0; i < items.length; i++) {
      const itemName = items[i]; // get the name of the key for the item
      const itemPrice = cart[itemName]; // get the price for the item
      sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
    }
  
    return sum;
}
console.log('------------05--------------')
// 05
const products = [
    { // 1
        name: "Blue Shirt",
        price: 10
    },
    { // 2
        name: "Hat",
        price: 15
    },
    { // 3
        name: "Coat",
        price: 100
    },
    { // 4
        name: "Ring",
        price: 72
    },
    { // 5
        name: "Bag",
        price: 19
    },
    { // 6
        name: "Scarf",
        price: 9
    },
    { // 7
        name: "Shoes",
        price: 57
    },
    { // 8
        name: "Underware",
        price: 7
    },
    { // 9
        name: "shocks",
        price: 3
    },
    { // 10
        name: "T-shirt",
        price: 50
    }
]
const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 2
        user: "alkis",
        product: "shocks",
        quantity: 2
    },
    { // 3
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 4
        user: "john",
        product: "Underware",
        quantity: 3
    },
    { // 5
        user: "jim",
        product: "Underware",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Coat",
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Scarf",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Bag",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Underware",
        quantity: 3
    }
]

// a
function addProductToCart(array, item) {
    array.push(item)
}

const product = {
    user: 'alkis',
    product: "Shoes",
    quantity: 7
}

addProductToCart(carts, product)
console.log("🚀 ~ file: 02-solutions.js ~ line 201 ~ carts", carts)


// b
function listProductsForUser(user, array) {

    array.forEach(item => {
        if (item.user === user) console.log('For user', user, 'Product:', item.product, ' Quantity:', item.quantity)
    })
    
}

listProductsForUser('george', carts)

// c
function getTotalItemsForUser(user, array) {
    // 1. find the objects for that user
    // 2. sum the quantities
    const items = []

    array.forEach(item => {
        if (item.user === user) items.push(item)
    })

    let total = 0;

    items.forEach(item => {
        total += item.quantity
    })

    console.log('Total items for user', user ,'is', total)
}
getTotalItemsForUser("alkis", carts);

// d) change the quantity of a given product in that cart
function updateQuantity(array, user, product, quantity) {
    
    let idx = -1;

    array.forEach((item, index) => {
        if (item.product === product && item.user === user) idx = index //item.quantity === quantity doesn't work
    })
    array[idx].quantity = quantity
}
updateQuantity(carts, 'alkis', 'Hat', 15)
console.log("🚀 ~ file: 02-solutions.js ~ line 243 ~ updateQuantity", carts)

// e) delete a product from the cart
function deleteProduct(array, user, product) {
    
    let idx = -1; // initialize it with -1 which means that product is not found by default

    array.forEach((item, index) => {
        if (item.user === user && item.product === product ) {
            idx = index
        }
    })

    if (idx > -1) array.splice(idx, 1)
}
deleteProduct(carts, 'alkis', 'Hat')
console.log("🚀 ~ file: 02-solutions.js ~ line 259 ~ deleteProduct", carts)

// f) find the total value of the cart of a given user

function getTotalCartForUser(user, cartsArray, productsArray) {

    // 1. find the products for the user
    const userItems = [];

    for(let i = 0; i < cartsArray.length; i++ ) {
        if (cartsArray[i].user === user) {
            userItems.push(cartsArray[i])
        }
    }

    // 2. build an arrays with product names and prices
    const itemsWithPrices = [];

    const prices = [];

    for(let i = 0; i < userItems.length; i++) {

        for (i1 = 0; i1 < productsArray.length; i1++) {
            if (userItems[i].product === productsArray[i1].name) {
                itemsWithPrices.push(productsArray[i1]);
                break;
            }
        }
    }

    for (let i = 0; i < itemsWithPrices.length; i++) {
        prices.push(userItems[i].quantity * itemsWithPrices[i].price)
    }
   
    // 3. get the total
    let total = 0

    prices.forEach(item => {
        total += item
    })

    // total = prices.reduce((total, item) => total + item)

    console.log('userItems=', userItems)
    console.log('itemsWithPrices=', itemsWithPrices)
    console.log('Prices', prices)
    console.log('Total', total)
}
getTotalCartForUser('alkis', carts, products)