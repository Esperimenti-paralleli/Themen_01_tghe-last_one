// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 20;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (false) // fake it!
// if(isJohnOlder) // Verweis auf ein Testergebnis
// if(ageJohn > ageMark) // Test
// { // codeblock
//     console.log("John ist älter!");
// }

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if (true)  // fake it!
// if (false)
// if(isJohnOlder) // Verweis auf ein Testergebnis
// if(ageJohn > ageMark) // Test
// { // ja-zweig
//     console.log("John ist älter!");
// } 
// else 
// { // alternativ-zweig
//     console.log("John ist jünger!");
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder) // Test
// { // ja-zweig
//     console.log("John ist älter!");
// } 
// else if (isJohnEqual)
// { // alternativ-zweig 1..n
//     console.log("John ist gleich alt!");
// }
// else 
// { // gemeinsame Alternative
//     console.log("John ist jünger!");
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
job = "diver"; // .. taucht im Rhein!
job = "artist"; // .. malt ein Bild!
job = "pilot"; // .. macht etwas anderes! --> default
job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

switch (job) 
{
    case "driver": // Test auf Gleichheit ...
        console.log(firstName + "..fährt TAXI!");
        break;
    case "diver": // Test auf Gleichheit ...
    console.log(firstName + ".. malt ein Bild!");
    break;
    case "artist": // Test auf Gleichheit ...
    console.log(firstName + ".. taucht im Rhein!");
    break;
    case "teacher": // Test auf Gleichheit ...
    case "instructor": // Test auf Gleichheit ...
    console.log(firstName + ".. unterrichtet!");
    break;


default:
    console.log(firstName + ".. macht etwas anderes!");

        break;
}

