// function add(a,b){
//     console.log(arguments);
//     console.log(arguments.length)
//     console.log(arguments[0])
    
//     // console.log(b);
// }
// add(10,20,30,40)

// function add(...arr){
//     console.log(arr);
// }
// add(10,20,30,40)

// function add(...arr){
//     return arr.reduce((sum, a) => sum+a,0)
// }
// const result = add(7,5,8,9)
// console.log(result)


const add = (...args) => {
    let sum = args.reduce((sum,a) => sum+a,0)
    return sum;
}

const results = add(7,5,8,9);
console.log(results)