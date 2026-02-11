// let a = 10
// var b = 20
// const a = 10 // a = 20 //error: Assignment to constant variable.
// a = 20 //error: Assignment to constant variable.
// let a = 10
// console.log(a)
// a = 20
// console.log(a)

// let a = 10
// function f1(){
//     let a = 20
//     console.log(a)
// }
// f1()
// console.log(a)

// let a = 10
// function f1(){
//     let a = 20
//     if(3>1){
//         let a =30
//         console.log(a)
//     }
//     console.log(a)
// }
// f1()
// console.log(a)

var a = 10
function f1(){
    var a = 20
    if(3>1){
        var a =30
        console.log(a)
    }
    console.log(a)
}
f1()
console.log(a)