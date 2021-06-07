// Values and Variables

const country = "The Netherlands";
const continent = "Europe";
let population = 17.28;


console.log(country);
console.log(continent);
console.log(population);


// Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// let, const and var

const country = "The Netherlands";
const continent = "Europe";
let population = 17.28;
language = 'Dutch';

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// Basic Operators

let population = 17.28;
console.log(population / 2);
population++;
console.log(population);

population = 17.28;
let populationFinland = 6
console.log(population > populationFinland);

let populationAvg = 33;
console.log(population < populationAvg);

const country = "The Netherlands";
const continent = "Europe";
population = 17.28;
language = 'Dutch';

const description = `country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.'`;
console.log(country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.');


// Strings and Template Literals
const country = "The Netherlands";
const continent = "Europe";
const population = 17.28;
const language = 'Dutch';
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);


// Taking Decisions: if/else statements

const country = "The Netherlands";
const continent = "Europe";
const population = 17;
const language = 'Dutch';
const populationAvg = 33;

if (population > populationAvg) {
    console.log(`${country}' population is above average.`)
} else {
    console.log(`${country}' population is ${populationAvg - population} million below average.`)
}



// Type Conversion and Coercion

'9' - '5'; // output will be 4 (number)
'19' - '13' + '17'; //output will be '617' (string)
'19' - '13' + 17; //output will be 23 (numbers (there is no string after minus operator converts to numbers))
'123' < 57; //output will be false
5 + 6 + '4' + 9 - 4 - 2; //output will be 1143



// Equality Operators: == vs. ===

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 neighbour!');
} else if (numNeighbours > 1)
    console.log('More than 1 neighbour!');
else {
    console.log('No neighbours');
}



// Logical Operators

const country = "The Netherlands";
const isIsland = false;
const population = 17;
const language = 'Dutch';

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}! :)`)
} else {
    console.log(`${country} does not meet your criteria! :()`)
}
