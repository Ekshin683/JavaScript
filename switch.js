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

// let score = 82
// switch(true){
//     case (score > 90 ):
//         console.log("grade O")
//         break;
//     case (score > 80 && score <= 90):
//         console.log("grade A+")
//         break;
//     case (score > 70 && score <= 80):
//         console.log("grade A")
//         break;
//     case (score > 60 && score <= 70):
//         console.log("grade B+")
//         break;
//     case (score >= 50):
//         console.log("grade B")
//         break;
//     default:
//         console.log("grade R")
// }

let subject = "HTML"
switch(subject){
    case "HTML":
        console.log("Hyper Text Markup Language");
        break;
    case "CSS":
        console.log("Cascading Style Sheets");
        break;
    case "JS":
        console.log("JavaScript");
        break;
    default:
        console.log("Invalid subject");
}