// const emp1 = {
//     name: "Ekshin",
//     display: function(){
//         console.log(this.name);
//     }
// }
// emp1.display()

// const emp2 = {
//     name: "Ajay",
//     display: function(){
//         console.log(this.name);
//     }
// }
// emp2.display()

// function Employee(name){
//     this.name = name;
//     this.display = function(){
//         console.log(this.name);
//     }
// }

// const emp1 = new Employee("Ekshin");
// const emp2 = new Employee("Ajay");
// emp1.display();
// emp2.display();

//prototype
function Employee(name){
    this.name = name;
}
Employee.prototype.display = function(){
    console.log(this.name)
}

const emp1 = new Employee("Ekshin");
const emp2 = new Employee("Ajay");
emp1.display();
emp2.display();