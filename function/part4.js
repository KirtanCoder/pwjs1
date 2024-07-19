// SCopes
// -> scopes define visibility

// it dtermines where a variable is visible
// is javascript is interprated language? --> when execution happen line by line
//=> bash
// compiled language==>  c/c++
//Hybrid language => java,python,js



//js executes your code in 3 phases:

//1st phase --> compilation ->1.syntax error / 2.scope resolution
//2nd phase --> execution --> 1.value assignment to variable / 2.code execution

// how to stop auto global auto creation

"use strict"; //This enables the scrict mode

//nOTE ---> THIS WAY OF JS TO DO RESOLUTION , AHEAD OF TIME/EXECUTION IS CALLED AS LEXICAL SCOPING-->resolving variable scope before execution,is called lexical scoping

//Dynamic Scoping---> during runtime we do scope resolution.JS doesnot support it,, Bash support it.

//Block scoping---->  { pair of curly braces creates a new block except object creation }
//

//what is block scope?
//-----> 

//Temporal Dead Zone --> It is a term used to describe the state whre variables are un-reachable
 // when we describe variable way let or const 

 function fun() {
    console.log(x);  //TDZ for let and const only
    let x=4;
    console.log(x);

 }

 fun();
