// CODING CHALLENGE #3

// Data 1

console.log("Data 1");

const avgDolphinsComp1 = (96 + 108 + 89) / 3;
const avgKoalasComp1 = (88 + 91 + 110) / 3;
console.log(avgDolphinsComp1);
console.log(avgKoalasComp1);

if (avgDolphinsComp1 > avgKoalasComp1) {
    console.log("Dolphins win!")
} else if (avgKoalasComp1 > avgDolphinsComp1) {
    console.log("Koalas win!")
} else if (avgDolphinsComp1 === avgKoalasComp1) {
    console.log("It's a tie!")
};

// Data Bonus 1

console.log("Data Bonus 1");

const avgDolphinsComp2 = (97 + 112 + 101) / 3; //97 + 112 + 101
const avgKoalasComp2 = (109 + 95 + 123) / 3; //109 + 95 + 123
const minimumPoints = 100;

console.log(avgDolphinsComp2);
console.log(avgKoalasComp2);

if (avgDolphinsComp2 > avgKoalasComp2 && avgDolphinsComp2 > minimumPoints || avgDolphinsComp2 === minimumPoints) {
    console.log("Dolphins win!")
} else if (avgKoalasComp2 > avgDolphinsComp2 && avgKoalasComp2 > minimumPoints || avgKoalasComp2 === minimumPoints) {
    console.log("Koalas win!")
} else if (avgDolphinsComp2 === avgKoalasComp2) {
    console.log("It's a tie!")
} else if (avgDolphinsComp2 > avgKoalasComp2 && avgDolphinsComp2 < minimumPoints) {
    console.log("Dolphins have more points, but didn't reach the minimum threshold. :(")
} else if (avgKoalasComp2 > avgDolphinsComp2 && avgKoalasComp2 < minimumPoints) {
    console.log("Koalas have more points, but didn't reach the minimum threshold. :(")
};

// Data Bonus 2

console.log("Data Bonus 2");

const avgDolphinsComp3 = (97 + 112 + 101) / 3; //97 + 112 + 101
const avgKoalasComp3 = (109 + 95 + 106) / 3; //109 + 95 + 106
console.log(avgDolphinsComp3);
console.log(avgKoalasComp3);

if (avgDolphinsComp3 > avgKoalasComp3 && avgDolphinsComp3 > minimumPoints || avgDolphinsComp3 === minimumPoints) {
    console.log("Dolphins win!")
} else if (avgKoalasComp3 > avgDolphinsComp3 && avgKoalasComp3 > minimumPoints || avgKoalasComp3 === minimumPoints) {
    console.log("Koalas win!")
} else if (avgDolphinsComp3 === avgKoalasComp3 && avgDolphinsComp3 > minimumPoints || avgDolphinsComp3 === minimumPoints) {
    console.log("It's a tie!")
} else if (avgDolphinsComp3 === avgKoalasComp3 && avgDolphinsComp3 < minimumPoints) {
    console.log("Teams are tied, but neither reached the minimum threshold. No winner.")
} else if (avgDolphinsComp3 > avgKoalasComp3 && avgDolphinsComp3 < minimumPoints) {
    console.log("Dolphins have more points, but didn't reach the minimum threshold. :(")
} else if (avgKoalasComp3 > avgDolphinsComp3 && avgKoalasComp3 < minimumPoints) {
    console.log("Koalas have more points, but didn't reach the minimum threshold. :(")
};
