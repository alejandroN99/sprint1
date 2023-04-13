/**Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
 * de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */

import {getEmployee} from "./functionGetEmployee.mjs";
import { getSalary } from './functionGetSalary.mjs';

getEmployee(2)
.then((value) => {
    console.log(value.name);
    getSalary(value).then((value) => console.log(`Salary: ${value} $`))

});
    
