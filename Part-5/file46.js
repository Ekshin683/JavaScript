const students = [
    {
        id: 1,
        name:"Ekshindeep",
        attendence: 80,
        score: 80
    },
    {
        id: 2,
        name: "Sumanth",
        attendence: 90,
        score: 85
    },
    {
        id: 3,
        name: "Suresh",
        attendence: 60,
        score: 70
    },
]
function getStudentInfo(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = students.find((s) => s.id === id);
            if(student) {
                resolve("Student Info resolved");
            } else {
                reject("Student not found");
            }
        },2000)
    })
}

function getAttendenceInfo(id){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const student = students.find((s) => s.id === id && s.attendence >= 75);
            if(student) {
                resolve("Attendence Info resolved");
            } else {
                reject("Attendance info not found");
            }
        },3000)
    })
}

function getExamsInfo(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const student = students.find((s) => s.id === id && s.score >= 70);
            if(student) {
                resolve("score Info resolved");
            } else {
                reject("Exam info not found");
            }
        },1000)
    })
}
function display({name}){
    console.log(name);
}

async function main(){
    try{
    const studentId = 1;
        const result =  await Promise.all([getStudentInfo(studentId),getAttendenceInfo(studentId),getExamsInfo(studentId)])
        console.log("Student Has Been Promoted")
    }catch(err){
        console.log(err);
    }
}
main()