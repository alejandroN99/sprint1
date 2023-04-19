/**Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera 
 * que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent 
 * un mock del fitxer JSON. */

// console.log(JSON.stringify([{
//     id: 1,
//     name: 'Linux Torvalds'
// }, {
//     id: 2,
//     name: 'Bill Gates'
// },{
//     id: 3,
//     name: 'Jeff Bezos'
// }]));

// console.log(JSON.stringify([{
//     id: 1,
//     salary: 4000
// }, {
//     id: 2,
//     salary: 1000
// }, {
//     id: 3,
//     salary: 2000
// }]));

const data = require ("./data.json")

const getEmployee = (value) => {
    return new Promise ((resolve,reject) => {
    
    const employeeFound = employees.find( (employee) => employee.id === value )
    employeeFound ? resolve(employeeFound) : reject(`El id ${value} introducido no existe`)
    });
};

const getSalary = (object) => {
    return new Promise ((resolve,reject) => {
        if(typeof object !== "object") throw new Error (`No ha introducido un objeto`);

        const salaryFound = salaries.find((salary) =>  salary.id === object.id);
        salaryFound ? resolve(salaryFound.salary) : reject("El objecto introducido no se encuentra");
    });
};

module.exports = {getEmployee,getSalary,returnDouble};

/**Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors
 *  llançats són els esperats. */

function returnDouble(number){
    return new Promise ((resolve,reject) => {
        if(typeof number !== "number") reject("Error, introduzca un numero");
        if(number < 0) reject ("Error, introduzca un numero positivo");

        setTimeout(() => {
            resolve(number * 2);
        },2000);
       
    })
};