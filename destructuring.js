// const  number = [10,20,30,40,50];
//destructuring - assigning array values to variables
// let n1 = number[0];
// let n2 = number[1];
// const [n1, n2,...n3] = number;

// console.log(n1);
// console.log(n2);
// console.log(n3);
//skipping the value
// const [n1, ,n2] = number;

// console.log(n1);
// console.log(n2);
// // console.log(n3);

//default value
const [n1, n2, n3=10,n4=20] = [12,15];

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);