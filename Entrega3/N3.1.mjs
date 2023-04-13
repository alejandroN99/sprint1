//Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.


import {getEmployee} from "./functionGetEmployee.mjs";
import { getSalary } from './functionGetSalary.mjs';

getEmployee(5)
.then((value) => {
    console.log(value.name);
    getSalary(value).then((value) => console.log(`Salary: ${value} $`))

}).catch((error) => console.log(error));