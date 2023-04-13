/**Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, 
 * usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */


import {getEmployee} from "../Entrega3/functionGetEmployee.mjs";
import { getSalary } from '../Entrega3/functionGetSalary.mjs';

async function showData() {
    try {
        
        const dataEmployee = await getEmployee(2)
        const dataSalaries = await getSalary(dataEmployee)

        console.log(`${dataEmployee.name}. Salary : ${dataSalaries} $`);
        
    } catch (error) {
        console.log(error)
    }
};

showData();