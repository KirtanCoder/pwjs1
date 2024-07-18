
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
// let variable = 10;

// function f() {
//     console.log(variable);
// }

// f();


// // intern by mistake makes the same function

// function downloadscript() {
//     console.log("New function created");
// }

//intern by mistake makes the same function
// To solve this, we can wrap the Whole intern`s code that can break, into an IIFE

// (function () {
//     function downloadscriptfromideone() {
//         console.log("New function Created");
//     }
//     console.log("calling intern code")
//     downloadscriptfromideone();
// })();


//intern  by mistake makes the same function

// if(true) {
//     function downloadscriptfromideone() {
//         console.log("new function created");
//     }

//     console.log("calling intern code")
//     downloadscriptfromideone();
// }

// Chaining of functions

//func1(x).func2(y).func3(z)......

// const obj = {
//     func1: function f(x) {
//         return x*x;
//     }
// }

// const result = obj.func1(10);

// console.log(result);

const obj = {
    func1: function f(x) {
        console.log("F called")
        return {
            func2: function g() {
                console.log("G called");
            }
        };
    }
}

obj.func1(10).func2();