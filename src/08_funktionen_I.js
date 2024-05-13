/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken
// console.log("Hallo, Esther!");

// Funktionsrumpf call(er)
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
// function test() 
// {
//     console.log("Hallo, Esther!"); 
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionaufruf
// outputNames();

// // Funktionsdeklaration
// function outputNames() 
// {
//     // interne Variable | What happens in VEGAS ...
//     let firstName = "Jan";
//   console.log("Hallo, " + firstName + "!"); 
// }

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// outputNames2("Esther"); // Argument --> DAten für Parameter


// function outputNames2(firstName) {  // Parameter
//     console.log("Hallo, " + firstName + "!"); 
// }


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// outputNames3("Maxine","Mützerisch");

// const prompt = require('prompt-sync')({sigint: true});
// outputNames3(prompt("Vorname? : "),prompt("Nachname?: ")); // Piping

// function outputNames3(firstName, familyName) {  // Parameter
//     console.log("Hallo, " + firstName + " " + familyName +"!"); 
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle --> "refactoring"

// outputNamesSRP("Maxine", "Mützerisch");

function outputNamesSRP(firstName, familyName) {  // Parameter

//     1. Funktionalität: string composing
    const GAP = " ";
let outputStr = "Hallo, " + firstName + GAP + familyName +"!"

// // 2. Funktionalität: string output
// console.log(outputStr); 

}

/***** Funktionen 03b *****/

output(getString("Maxine", "Mütze"));
//     1. Funktionalität: string composing
function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName +"!"
    return outputStr;
}

// 2. Funktionalität: string output
output("hi");
output(2); 
output(true);

function output(outputData) {
console.log(outputData);

}


