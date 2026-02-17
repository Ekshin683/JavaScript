function f1(num){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log(num);
            if(num % 2 === 0){
                resolve(`${num} is an even number`);
            }else{
                reject("Odd number is not allowed");
            }

        },3000)
    })
}

async function main(){
    let num = Math.floor(Math.random() * 10);
    try{
        const result = await f1(num)
        console.log(result);
        console.log("program completed successfully");
    }catch(err){
        console.log(err);
    }
}
main()