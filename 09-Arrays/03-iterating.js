/* 
    -how can we iterate over an array?
    - for loop
    -forEach() method

-all of the above iterate over properties in an array

*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for(let i = 0; i < food.length; i++){
    console.log(food[i])
}

food.forEach(foodItem => {
    console.log(foodItem);
})

food.forEach((foodItem, index) =>{
    console.log(foodItem);
    console.log(index);
})

