//hoisting - variables and functions are hoisted to the top of their scope

// console.log(name)
// var name = "Ekshin"
// console.log(name)
//hoistting with var - variables declared with var are hoisted and initialized with undefined
// var name
// console.log(name)
// name = "Ekshin"

// let name
// console.log(name)
// name = "Ekshin"

//greet() //greet is hoisted but not initialized
// function greet(){
//     console.log("Hello World")
// }
const greet = () => {
    console.log("Hello World")
}
greet();