
// function fun() {
//     console.log("Hello world");

//   return  function cleanup() {
//         console.log("Cleaning up the resource");
//     }
// }

// const result = fun();
// console.log(result);
// result();


// IIFE -> immediately invoked funtion expression
//  -> 
let variable = 10;

function f() {
    console.log(variable);
}

f();


// intern by mistake makes the same function

function downloadscript() {
    console.log("New function created");
}

//intern by mistake makes the same function
// To solve this, we can wrap the Whole intern`s code that can break, into an IIFE

(function () {
    function downloadscriptfromideone() {
        console.log("New function Created");
    }
    console.log("calling intern code")
    downloadscriptfromideone();
})();