function user(){
    let password = "1234";
    function checkPassword(input){
        return input === password;
    }
    return checkPassword;
}
const check = user();
// console.log(check("1234"))
console.log(check("123"))