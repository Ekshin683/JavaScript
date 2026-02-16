//promises
function makepayment(){
    return new Promise((resolve,reject)=>{
        // reject()
        // resolve()
        setTimeout(() => {
            console.log("Payment has been processed");
            resolve()
        },5000)
    })
    // setTimeout(() => {console.log("Payment has been processed");
    // },5000)
}
function sendconfirmation(){
    console.log("Order has been placed successfully")
}
// makepayment(sendconfirmation)
makepayment().then(()=>sendconfirmation()).catch(err => console.log(err))
