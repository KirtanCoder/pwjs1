// {} --> objects

const user = { 
    username: "hc",
    name: "kirtan",
email: "kirt@.com",
age : 20,
isAdmin: true,
isLoggedIn: true,

tea: ["lemon","peach","ginger"],

address: {
    city:"jaipur",
    state: "Rajasthan"

}
}
const anotheruser = user;


// console.log(user.address.state)
// console.log(user.age)

// console.log(user.tea[1])

// console.log(user["address"]["state"])
// user.email = "kirtankrpc"
// console.log(user)

// console.log(anotheruser)

// delete user.isAdmin
// console.log(user)

const userlistfromdatabase = [{},{},{}]

console.log(Object.keys(user))


console.log(Object.values(user))


console.log(Object.entries(user))

// console.log(user.keyboard) -->  UNDEFINED

console.log(user.hasOwnProperty('tea'))