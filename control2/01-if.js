// let rate = "4"
// let star = parseInt(rate)

// if(star == 1) {
//     console.log("1")
// }
// if(star==2) {
//     console.log("2")
// }

// if(star==3){
//     console.log("3")
// }

// if(star==4) {
//     console.log("good")
// }


//Login systemconst 

// const email = ""

// //if email is present , ask for password. otherwise ask for email

// if(email) {
//     console.log("Please enter your password");
// }
// else {
//     console.log("Please enter your email");
// }


// // if (email != "")  {  
// //     console.log("please enter password");
    
// // }
// // else {
// //     console.log("Please enter your email");
// // }

// console.log(Boolean(email));

// /* 
// falsy value
// false
// 0 (-0 and BigInt 0n)

// ""
// null
// undefined
// NaN

// */


//If user provide email,password,then allow login, else ask for it

const email = ""
const password = ""

if(email) {
    if(password) {
        console.log("Welcome to the app");
    }
    else {
        console.log("please enter your password");
    }


} else {
    console.log("Please enter Your email");
}

//Logical Operation

// && -> and ; || => OR

if(email && password) {
    console.log("Welcome to the app");
}
else {
    console.log("Please enter email and password")
}


//allow user to signup with google or github

const googletoken = ""
const githubtoken = ""

if(googletoken || githubtoken) {
    console.log("Welcome to the app")
}
else {
    console.log("please login to view your account")
}




let age = 19

if(age >= 18) {
    console.log("You get the driving liscence");

}
else {
    console.log("You are not eligible")
}
const driving = age>=18 ? "true part" : "false"