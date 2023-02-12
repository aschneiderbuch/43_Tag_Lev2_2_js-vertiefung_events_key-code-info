console.log("test");
/* 
App
keyCode
code


*/

// wenn Taste auf Tastatur gedrück, dann Taste key anzeigen --> a
// KeyCode = Unicode anzeigen
// Code = key+Taste --> KeyA
//onkeydown

const keyDown = document.querySelector("body");
console.log(keyDown);

document.addEventListener("keydown", (e) => {
    sucheBuchstabe(e)
});


function sucheBuchstabe(e) {
    console.log(e) // ganze Object
    console.log(e.key)   // drückte Buchstabe   oder  e.which
    console.log(e.keyCode);    // Unicode
    console.log(e.code);      // key+Taste
    console.log(e.target.clientHeight);    // drückte Buchstabe

    const outputP = document.querySelectorAll("p");
    console.log(outputP) // ganze Object
    console.log(typeof(outputP))   // objekt
    console.log(Array.isArray(outputP))  // false

outputP[0].innerHTML = e.key;
outputP[1].innerHTML = e.keyCode;
outputP[2].innerHTML = e.code;
}