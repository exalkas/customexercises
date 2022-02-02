### Your first Next.js project Day2

##### Style your project accordingly using any way you'd like

1. In the same project you created on the previous day, create a new api route in `api` folder
2. create a function that will accept some parameters using the `req.query` object
3. Bonus: create an api to add items to your data like `/api/addProduct`
   1. create a new page in the front end and add it to the menu
   2. add form controls to that page so the user can fill in the data
   3. send the data to the new api by using the `post` method
   4. in this api implement the necessary functionality to add items to your data
   5. send a response back to client in cases of successful or unsuccessful insertion
   6. handle also cases where you don't receive any data or cases where the data are not correct
4. Bonus2: create another api to implement the `delete item` functionality
   1. add a button to your frontend where user can delete the specific item
   2. send a response back to client in cases of successful or unsuccessful deletion
   3. in case of successful deletion update the list of items in the client (in case it's necessary)