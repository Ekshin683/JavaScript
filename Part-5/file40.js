//promises
function makepayment(){
    setTimeout(() => {console.log("Payment has been processed")},5000)
}
function sendconfirmation(){
    console.log("Order has been placed successfully")
}
makepayment()
sendconfirmation()