const student = {
    name:"John",
    age:20
}
// console.log(student)
// console.log(student.name)
// console.log(student.age)

// student.city = "New York" 
// console.log(student)
// student.city = "Tirupati" //overrides
// console.log(student)
//spread operator
const obj = {...student,city:"New York"}
console.log(obj)

