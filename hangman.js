const prompt = require('prompt-sync')();
const countriesCapitals = require('./countries-and-capitals');
const capitals = countriesCapitals.map(e => e.city);
const countries = countriesCapitals.map(e => e.country);

let heart = "❤";

let difficultyChoose = prompt("Choose a difficulty: ");

let easyDif = difficultyChoose;
let mediumDif = difficultyChoose;
let hardDif = difficultyChoose;

let easyHeart = heart.repeat(7);
let mediumHeart = heart.repeat(5);
let hardHeart = heart.repeat(3);

if(easyDif == "easy") {
    console.log("You're playing on easy difficulty!");
} else if (mediumDif == "medium") {
    console.log("You're playing on medium difficulty!");
} else if (hardDif == "hard") {
    console.log("You're playing on hard difficulty!");
} else {
    console.log("Invalid difficulty option. Choose a valid one!");
}

let word = capitals[Math.floor(Math.random() * capitals.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remaininLetters = word.length;

while (remaininLetters > 0) {
    console.log(answerArray.join(" "));
    let guess = prompt("Guess a letter: ");
    if (guess == null) {
        break;
    } else if (guess == "quit") {
        console.log("Goodbye!");
        process.exit();
    } else if (guess.length !== 1) {
        console.log("Please enter a single letter!");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remaininLetters--;
            }
        }
        if (guess !== remaininLetters) {
            if (difficultyChoose == "easy") {
                easyHeart = easyHeart.substring(0, easyHeart.length - 1);
                console.log(easyHeart);
                    if (easyHeart.length == 0) {
                        console.log("Game over!");
                        process.exit();
                    }
            }
            else if (difficultyChoose == "medium") {
                mediumHeart = mediumHeart.substring(0, mediumHeart.length - 1);
                console.log(mediumHeart);
                    if (mediumHeart.length == 0) {
                        console.log("Game over!");
                        process.exit();
                        }
            }
            else if (difficultyChoose == "hard") {
                hardHeart = hardHeart.substring(0, hardHeart.length - 1);
                console.log(hardHeart);
                    if (hardHeart.length == 0) {
                        console.log("Game over!");
                        process.exit();
                        }
            }
        }
    }
}

console.log(answerArray.join(" "));
console.log("Good job! The answer was " + word);