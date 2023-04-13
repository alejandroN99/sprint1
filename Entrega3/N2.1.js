/* Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

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

getEmployee(2)
.then((value) => {console.log(value.name)})
.catch((err) => {console.log(err)});

