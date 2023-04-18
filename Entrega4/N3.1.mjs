//Força i captura tants errors com puguis dels nivells 1 i 2.
//N1.1

import {getEmployee} from "../Entrega3/functionGetEmployee.mjs";
import { getSalary } from '../Entrega3/functionGetSalary.mjs';


async function showData() {
    try {
        const dataEmployee = await getEmployee(-2)
        const dataSalaries = await getSalary("dataEmployee")
        
        console.log(`${dataEmployee.name}. Salary : ${dataSalaries} $`);  
    } catch (error) {
        console.log(error)
    }
};

showData();

//N1.2
import{twoSeconds2} from "./twoSeconds.mjs";

async function waitResolve (){
    const data = await twoSeconds2();
    console.log(data);
};

waitResolve().catch((err) => console.log(err));

//N2.1
import { returnDouble,waitDatas2,addDoubles } from "./returnDoubles.mjs";

waitDatas2().catch((err) => console.log(err));
addDoubles("ss",3,4).catch((err) => console.log(err));