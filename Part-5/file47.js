const students  = [
    {id:1,name:"Ekshindeep",s1: true,s2:true,s3:false},
    {id:2,name:"Ajay",s1:true,s2:true,s3:true},
    {id:3,name:"Suresh",s1:false,s2:true,s3:true},
    {id:4,name:"vishnu",s1:false,s2:false,s3:false}
]

function getInfo(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = students.find((s) => s.id === id);
            if(student){
                resolve("Info resolved");
            }else{
                reject("Info not found");
            }
        },2000)
    })
}

function get1Info(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = students.find((s) => s.id === id && s.s1 === true);
            if(student){
                resolve("Info resolved");
            }else{
                reject("Info not found");
            }
        },2000)
    })
}

function get2Info(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = students.find((s) => s.id === id && s.s2 === true);
            if(student){
                resolve("Info resolved");
            }else{
                reject("Info not found");
            }
        },2000)
    })
}

function get3Info(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = students.find((s) => s.id === id && s.s3 === true);
            if(student){
                resolve("Info resolved");
            }else{
                reject("Info not found");
            }
        },2000)
    })
}

async function main(){
    try{
        const studentId = 4;
        // const Info = await Promise.all([getInfo(studentId),get1Info(studentId),get2Info(studentId),get3Info(studentId)]);
        const found = await getInfo(studentId);
        const Info = await Promise.any([get1Info(studentId),get2Info(studentId),get3Info(studentId)]);
        console.log(found);
        console.log(Info);
        console.log("Attendence Marked");
    }catch(err){
        console.log(err);
    }
}
main()

