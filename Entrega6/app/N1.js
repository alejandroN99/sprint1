
const add = (num1 , num2) =>  {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
     throw new Error("Error, both arguments have to be type number") ;
    } 

    return num1 + num2
};

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const functionCallback = (value, callback) => {
    if (value > 0) {
      callback("El valor es positivo:" + value);
    } else {
      callback("El valor es negativo:" + value);
    }
};

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

const getEmployee = (value) => {
    return new Promise ((resolve,reject) => {
    
    const employeeFound = employees.find( (employee) => employee.id === value )
    employeeFound ? resolve(employeeFound) : reject(`El id ${value} introducido no existe`)
    })
};

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

 const getSalary = (object) => {
    return new Promise ((resolve,reject) => {
        if(typeof object !== "object") throw new Error (`No ha introducido un objeto`);

        const salaryFound = salaries.find((salary) =>  salary.id === object.id);
        salaryFound ? resolve(salaryFound.salary) : reject("El objecto introducido no se encuentra");
    });
};

function twoSeconds () {
    return new Promise ((resolve,reject) => {
        const time = setTimeout(() => {
            resolve(console.log("You have waited two seconds"));
        },2000)

    })
};

module.exports = {
    add,
    substract, 
    multiply, 
    divide,
    functionCallback,
    getEmployee,
    getSalary,
    twoSeconds
};