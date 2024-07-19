// HOIStING

//pHenomenon using which func And variable move at the top
//Actually hoisting is a consequence due to which function and variable are available before their declaration. It happens because of lexial scope


const fun= function f() {
    var x = 10;
    console.log(x);
}

f();