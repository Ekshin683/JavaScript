function getStudentInfo(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = {
                name:"Ekshindeep",
                email: "ekshin@gmail.com",
                age:22
            }
            // console.log(student);
            resolve(student)
        },2000)
    })
}
function display({name}){
    console.log(name);
}

async function main(){

    // try{
        const result = await getStudentInfo()
        // console.log(result);
        display(result)
        console.log("program completed successfully");
    // }catch(err){
        // console.log(err);
    // }
}

main()
//getStudentInfo should return object name,email amd age