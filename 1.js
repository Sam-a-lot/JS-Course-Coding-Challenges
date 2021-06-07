// Coding Challenge #1

//Data 1
const massMarc = 78;
const massJohn = 92;
const heightMarc = 1.69;
const heightJohn = 1.95;

const bmiMarc = massMarc / heightMarc ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const marcHigherBMI = bmiMarc > bmiJohn;

console.log(bmiMarc, bmiJohn, marcHigherBMI);

//Data 2
const massMark = 95;
const massJonty = 85;
const heightMark = 1.88;
const heightJonty = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJonty = massJonty / (heightJonty * heightJonty);
const markHigherBMI = bmiMark > bmiJonty;

console.log(bmiMark, bmiJonty, markHigherBMI);
