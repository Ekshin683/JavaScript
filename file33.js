// const student = {
//     name:"Ekshin",
//     age:21,
//     // city: "Jalandhar"
// }
//destructuring - assigning object properties to variables
// names = ["Ekshin","Ajay","Sumanth"]
// const [name1,name2,name3] = names;
// console.log(name1);
// console.log(name2);
// console.log(name3);

// const {name,age}= student;
// console.log(name);
// console.log(age);
// console.log(student.name);

// const {name: userName} = student;
// console.log(userName);
//default value
// const {city="Jalandhar"} = student;
// console.log(city);
// console.log(student);

const student = {
    name:"Ekshin",
    age: 21,
    marks:{
        math: 85,
        science: 90
    }
}
const {marks} = student
console.log(marks);
const {marks:{math}} = student;
console.log(math);