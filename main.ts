// 1. Creating a Lesson Plan(Using for loop )

let myWork: {name: string; status: boolean}[] = [];


for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 0 ? false : true
    };
    myWork.push(lesson);
}
console.log(myWork);

// 2. Guessing Game (Using while loop )

const maxValue = 10;
const randomNumbers = Math.floor(Math.random() * maxValue) + 1;
console.log("Random number:", randomNumbers); 
let guessCorrect = false;
const guesses = [3, 7, 5, 9, 2]; 
let index = 0;
while (!guessCorrect && index < guesses.length) {
    const currentGuess = guesses[index];
    if (currentGuess === randomNumbers) {
        console.log("Congratulations! You guessed the correct number:", randomNumbers);
        guessCorrect = true;
    } else if (currentGuess < randomNumbers) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
    index++;
};

// 3. Counter Incrementer (Using do while loop )

let counter :number =0;
const steps :Number =1;
do{
    console.log(counter);
    counter += steps.valueOf()
}while(counter < 11);

// 4.Exploring Objects with for...in Loop

let myObjects ={
    item1:"wifi",
    item2:"mobile",
    item3:"charger",
}
for(let A in myObjects){
    if(myObjects.hasOwnProperty(A)){
        console.log(`A ${A}, iter: ${myObjects[A as keyof typeof myObjects]}`);
    }             
};

// 5.Exploring Arrays with Loops(Using loop )

let myArray: number[] = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log("Array:", myArray);

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index: ${i}, Value: ${myArray[i]}`);
}
console.log("Using for...of loop:");
for (let element of myArray) {
    console.log("Value:", element);
};

