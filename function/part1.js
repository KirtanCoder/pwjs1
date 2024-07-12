// //function name-of-function(p1,p2....) {
// logic

// return output
// }


// function calculatesquare(num) {
//     //logic to calculate square of number 

//     let squarevalue = num *num;

//     //return the output of square value

//     return squarevalue;
// }

// let result = calculatesquare(5);

// console.log(result)

// function sum(a,b,c) {

// let d = a+b+c;

// return d;

// }

// let result2 = sum(2,3,4);
// console.log(result2);


// function addnum()  {
//     console.log(arguments)
// }


// addnum(1,2,3)
// addnum(3,0)


function addnum1() {
    let result= 0;
    for(let i=0;i<arguments.length;i++) {
        result += arguments[i];

        return result;
}
}

console.log(addnum1(9,1,2));