function fun(){  // function declration

}
//........
const f = function process() { // named function

}
//..............
const g = function () { // anonymous  function

}
//...................
const h = () => {

}
//..............................
(function () {

})()
//...........................
(function exec()    {

}
)


//why named function expre important?

//1. debugging -> Finding error in your code
//2. Recursion
// 3. Reusability


//console.trace("using trace we can print the order in which function is called")

// callstack ->  

function processArray(array, fn) {

}

processArray(2,3,4,5), function cube(x) {return x*x*x;}

// Callbakck ->  callback is a function which is an actual argument to a HOF and is passed as aargument

app. listen(config.PORT, async startServer() => {
    console.log('Server started on PORT', configs.PORT);
});

//listen is a high order function
//startserver is a callback

//one imp use case of callback 
//-> sometimes our fucntion might not complete immediately and complete in future

//in these case when the execution of function complete in future , what should we do can be controlled by callback