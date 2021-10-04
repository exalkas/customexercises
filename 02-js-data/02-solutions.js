// 01
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

// 02
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