//1

const scoresAleeza = [89, 120, 103]; 
const scoresLis = [116, 94, 123];

//1a

// const averageAleeza = scoresAleeza.reduce((a, b) => a + b, 0) / scoresAleeza.length;

const averageAleeza = (scoresAleeza[0]+scoresAleeza[1]+scoresAleeza[2])/3;
const averageLis = (scoresLis[0]+scoresLis[1]+scoresLis[2])/3;
console.log("Average of Aleeza's Scores:", averageAleeza);
console.log("Average of Lis' Scores:", averageLis);

//1b

if (averageAleeza > averageLis) {
    console.log("Aleeza is winner:", averageAleeza)
} else if (averageAleeza == averageLis) {
    console.log("No winner")
} else {
    console.log("Lis is winner:", averageLis)
}

//1c

const scoresAleeza2 = [128, 96, 106]; 
const scoresLis2 = [95, 112, 108];
const averageAleeza2 = (scoresAleeza2[0]+scoresAleeza2[1]+scoresAleeza2[2])/3;
const averageLis2 = (scoresLis2[0]+scoresLis2[1]+scoresLis2[2])/3;
if (averageAleeza2 > averageLis2) {
    console.log("Aleeza2 is winner:", averageAleeza2)
} else if (averageAleeza2 == averageLis2) {
    console.log("No winner")
} else {
    console.log("Lis2 is winner:", averageLis2)
}

//1d

const scoresMary = [97, 134, 105];
const averageMary = (scoresMary[0]+scoresMary[1]+scoresMary[2])/3;
if (averageAleeza2 > averageLis2 && averageAleeza2 > averageMary)  {
    console.log("Aleeza2 is winner:", averageAleeza2)
} else if (averageLis2 > averageAleeza2 && averageLis2 > averageMary) {
    console.log("Lis2 is winner:", averageLis2)
} else if (averageMary > averageAleeza2 && averageMary > averageLis2) {
    console.log("Mary is winner:", averageMary)
} else {
    console.log("No winner")
}

//1e

const scoresMary2 = [122, 140, 112];
const averageMary2 = (scoresMary2[0]+scoresMary2[1]+scoresMary2[2])/3;
if (averageAleeza2 > averageLis2 && averageAleeza2 > averageMary2)  {
    console.log("Aleeza2 is winner:", averageAleeza2)
} else if (averageLis2 > averageAleeza2 && averageLis2 > averageMary2) {
    console.log("Lis2 is winner:", averageLis2)
} else if (averageMary2 > averageAleeza2 && averageMary2 > averageLis2) {
    console.log("Mary2 is winner:", averageMary2)
} else {
    console.log("No winner")
}