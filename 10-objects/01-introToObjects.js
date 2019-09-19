/*
    objects stores enumarables properties in the key/value pair format
    - denoted by {}
*/

let netflix = {
    id: 1,
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            }, 
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            },
            {
                episode: 6,
                episodeName: 'Hot Girl'
            }
        
        ]
        }
    },
    season2: {},
    season3: {}
}

/*
  - Where arrays us bracket notation ( [] ) objects use dot notation ( . )
*/

// console.log('All Data:', netflix);
// console.log('Season 1', netflix.season1.seasonInfo);
// console.log('Specifc', netflix.season1.seasonInfo.episodeInfo[3]);

// console.log('EP5', netflix.season1.seasonInfo.episodeInfo[4])

// console.log(netflix.season1.seasonInfo.episodeInfo[4])

// console.log(netflix.season1.seasonInfo.episodeInfo[4].toString)

console.log(`episode number: ${netflix.season1.seasonInfo.episodeInfo[4].episode} `)


// console.log(net.season1.seasonInfo.episodeInfo[4])

/*
    JSON Objects

    - JSON stands for JavaScript Object Notation
    - The JSON syntax is derived from Javascipt Object Notation syntax, but the JSON format is text only
    -JSON exists is a string - useful when we want to fetch data from a server
    It needs to be converted to a native JacaScript Object if you want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Objects.keys(spaceJam.toonSquad.duck)) //Gives the indexes of the string 'Daffy Duck'
console.log(Object.keys(spaceJam.toonSquad).toString());


console.log(Object.values(spaceJam.toonSquad).toString());


/*
    -Object Bracket Notation
        -object bracket notation also allows us to parse through an object and pull out specific information
        - using object bracket notation can be useful if we want to store a key from an object in a variable
        -all keys in an object are strings - whcih is why this will work 
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water : true,
    sun : true,
    size: 10
}

// keys in an object are strings - shown below
// let test = Object.keys(garden);
// console.log(test);
// console.log(typeof test[0])

//standard dot notation
console.log(garden.vegetable);

//object bracket notation
let zucchini = garden['vegetable']; //we can access keys in an object by specifying the name of the object followed bu
// the key we want to grab in brackets. The key name that we pass into our object needs to be a string 
// (Wrapped in quotes)
console.log(zucchini);

let baking = {};

baking['zucchini'] = 'better make some bread!'; // setting a key/value pair using object bracket notation

console.log(baking);


console.log(baking[garden['vegetable']]);
console.log(baking['zucchini']);

//using object bracket notation is a good idea when you may not be able to use dot notation to 
// dig into an object

let testObj = {
    "Spaces here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces here"]);
// Our use case for object bracket notation is if a key in our object has spaces in it 

