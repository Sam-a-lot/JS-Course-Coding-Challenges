// CODING CHALLENGE #4


/* Tip Calculator: 
If the bill value is between 50 and 300, the tip will be 15%.
If the bill value is below 50 or over 300, the tip will be 20%.
    1. Calculate the tip depending on bill value, without using an if/else statement (use one to start out if easier). Create a variable called 'tip' for this.
    2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 

Test Data: Test for bill values 275, 40 and 430. */

const billValue1 = 275;
const tip1 = billValue1 >= 50 && billValue1 <= 300 ? (billValue1 * 0.15) : (billValue1 * 0.20);

console.log(`The bill is £${billValue1}, the tip is £${tip1} and the total is £${billValue1 + tip1}.`);

// console.log(billValue1);
// console.log(tip1);


const billValue2 = 40;
const tip2 = billValue2 >= 50 && billValue2 <= 300 ? (billValue2 * 0.15) : (billValue2 * 0.20);

console.log(`The bill is £${billValue2}, the tip is £${tip2} and the total is £${billValue2 + tip2}.`);

// console.log(billValue2);
// console.log(tip2);

const billValue3 = 430;
const tip3 = billValue3 >= 50 && billValue3 <= 300 ? (billValue3 * 0.15) : (billValue3 * 0.20);

console.log(`The bill is £${billValue3}, the tip is £${tip3} and the total is £${billValue3 + tip3}.`);

// console.log(billValue3);
// console.log(tip3);
