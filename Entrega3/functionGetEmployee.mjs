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
const getEmployee = (value) => {
    return new Promise ((resolve,reject) => {
    if(typeof value !== "number") throw new Error ("Error, introduzca un numero.");
    if(value < 0) throw new Error ("Introduzca un numero positivo");
    
    const employeeFound = employees.find( (employee) => employee.id === value )
    employeeFound ? resolve(employeeFound) : reject(`El id ${value} introducido no existe`)
    })
};

export {getEmployee};