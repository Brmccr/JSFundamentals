let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.pop();
console.log('pop', food);


for (foodItem of food) {
    console.log(foodItem);
}

food.push('Pizza');
console.log('push:', food);

food.splice(1, 1, 'Bananas');   // This splice method removes shrimp Index [1] splices 1 item [1] and replaces with Bananas
console.log('splice:', food);

let lock = {
    key: ''                 //Objects hold key values
}                           // Key goes inside lock -- 

food.splice(2, 0, 'Sweet potato pie'); // Adds sweet potato pie in at array [2] and removes nothing [0] 
console.log('splice 2:', food);

food.pop(); // pop removes the last item of an array

food.shift(); // removes the first element in an arry
console.log('shift', food)

food.unshift('Popcorn', 'Steak') //unshift adds one or more elements at the start of an array
console.log('unshift', food);