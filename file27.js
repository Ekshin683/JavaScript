// let a = 90
// let result = a > 50 ? "pass":"fail";
// // if(a > 50){
// //     result = "pass"
// // }else{
// //     result = "fail"
// // }
// console.log(result)
// let a = 9;

// let result = a > 50 && "pass"
// console.log(result)

// let score
// const result = score || 30
// console.log(result)

let score = 50
switch(score){
    case 90:
        console.log("grade O")
        break;
    case 80:
        console.log("grade A+")
        break;
    case 70:
        console.log("grade A")
        break;
    case 60:
        console.log("grade B+")
        break;
    case 50:{
        console.log("grade B")
        break;
    }
    default:
        console.log("grade R")
}