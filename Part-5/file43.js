function f1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("This is f1 function");
            resolve();
        },3000)
    })
}
function f2(){
    console.log("This is f2 function");
}

// f1().then(() => f2()).catch(err => console.log(err))
async function main(){ //async function allows us to use await inside it
    await f1()
    f2()
}

// function main(){
//     f1().then(() => f2()).catch(err => console.log(err))
// }

main()
// await f1()
// f2()