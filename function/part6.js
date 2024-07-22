//Maths library

//abs
//abs(positive_value) -> positive value
//abs(negative_value) ->positive_counterpart_of that negative value
//[x]  --> Ex: [10] -> 10, |-8| -> 8

// console.log(Math.abs(-9));

// console.log(Math.floor(4.3));

//ceil --> this helps you find, first integer greater than or equal to

// console.log(Math.ceil(7.2));

//Math.max

console.log(Math.min(8,9,10));
console.log(Math.max(6,9,0));

// sqrt ----> sqaure root

console.log(Math.sqrt(100));


 console.log(Math.random());


 // You have to generate random number  between 0-1

 // you will be given two value x and y and you need to generate random number 
 //between x and y inclusive of x and y



/** 
 * @param {x} Lower_Limit
 * @param {y} Upper_Limit
 * @return random number in the range [x,y]
*/
 function randominrange(x , y) {
return Math.random()*(y-x+1)+ x;
 }

 console.log(randominrange(10,35))

 