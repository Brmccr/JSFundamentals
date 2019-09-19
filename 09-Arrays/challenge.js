let movies = ['The Matrix', 'The Prestige', 'Inception', 'The Sixth Sense'];

movies.forEach(movieItem => {
    console.log(movieItem);
})

movies.push('Mad Max');
console.log('push:', movies);

movies.forEach(movieItem => {
    console.log(movieItem);
})

movies.splice(2, 1, 'Gattaca');
console.log('splice 2:', movies);

console.log(movies);

movies.forEach(movieItem => {
    console.log(movieItem);
})

