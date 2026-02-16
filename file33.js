const student = {
    name:"Ekshin",
    age:21
}
//destructuring - assigning object properties to variables
// names = ["Ekshin","Ajay","Sumanth"]
// const [name1,name2,name3] = names;
// console.log(name1);
// console.log(name2);
// console.log(name3);

const {name,age}= student;
console.log(name);
console.log(age);