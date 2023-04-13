/*Crea una altra arrow function getSalary() similar a l'anterior 
que rebi com a paràmetre un objecte employee i retorni el seu salari. */

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

 const getSalary = (object) => {
    return new Promise ((resolve,reject) => {
        if(typeof object !== "object") throw new Error (`No ha introducido un objeto`);

        const salaryFound = salaries.find((salary) =>  salary.id === object.id);
        salaryFound ? resolve(salaryFound.salary) : reject("El objecto introducido no se encuentra");
    });
};

getSalary({
    id: 2,
    name: 'Bill Gates'
})
.then((value) => {console.log(`Salary : ${value} $`)})
.catch((err) => {console.log(err)});

getSalary('hola mundo')
.then((value) => {console.log(value)})
.catch((err) => {console.log(err)});



