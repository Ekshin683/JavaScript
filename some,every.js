// numbers = [5,6,1,2]

// // numbers.forEach((number) => console.log(number)) //forEach does not return anything, it just iterates through the array and performs the given function on each element
// // numbers.map((number) => console.log(number))//map returns a new array with the results of calling a provided function on every element in the calling array
// // numbers.filter((number) => console.log(number))//filter returns a new array with all elements that pass the test implemented by the provided function
// // numbers.find((number) => console.log(number))//find returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
// // numbers.reduce((acc,number) => console.log(acc,number),0)//reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes four arguments: accumulator, currentValue, currentIndex, sourceArray. The initial value is optional and can be provided as the second argument to reduce. If not provided, the first element of the array will be used as the initial value and the iteration will start from the second element.

// const newArray = numbers.map((number) => {return number+1})
// console.log(newArray)
// const newArray1 = numbers.filter((number) => {
//     return number%2 === 0
// })
// console.log(newArray1) 
// const result = numbers.find((number) => {
//     return number > 3;
// })
// console.log(result)

// const result1 = numbers.reduce((sum,number) => {
//     return sum + number
// },0)
// console.log(result1)

// const result2 = numbers.some((number) => {
//     return number > 4
// })
// console.log(result2)

let marks = [78,50,90,20]

// const result = marks.some((mark) => { //some returns true if at least one element in the array satisfies the provided testing function. Otherwise, it returns false.
//     return mark > 50
// })
// if(result){
//     console.log("you are pass")
// }else{
//     console.log("you are fail")
// }

// const result = numbers.every((number) => { //every returns true if all elements in the array satisfy the provided testing function. Otherwise, it returns false.
//     return number > 1;
// })
// console.log(result);

// const result = marks.every((mark) => { 
//     return mark > 50;
// })
// if(result) console.log("you are pass")
// else console.log("you are fail")

