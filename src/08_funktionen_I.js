/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken
// console.log("Hallo, Esther!");

// Funktionsrumpf call(er)
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test() 
{
    console.log("Hallo, Esther!"); 
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionaufruf
// outputNames();

// Funktionsdeklaration
function outputNames() 
{
    // interne Variable | What happens in VEGAS ...
    let firstName = "Jan";
  console.log("Hallo, " + firstName + "!"); 
}

// console.log(firstName); // Fehler : scope!

