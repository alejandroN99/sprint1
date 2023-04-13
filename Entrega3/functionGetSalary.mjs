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

export {getSalary};