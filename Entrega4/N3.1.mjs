//Força i captura tants errors com puguis dels nivells 1 i 2.
//N1.1

import {getEmployee} from "../Entrega3/functionGetEmployee.mjs";
import { getSalary } from '../Entrega3/functionGetSalary.mjs';

async function showData() {
    try {
        
        const dataEmployee = await getEmployee(2)
        const dataSalaries = await getSalary("dataEmployee")

        console.log(`${dataEmployee.name}. Salary : ${dataSalaries} $`);
        
    } catch (error) {
        console.log(error)
    }
};

showData();

//N1.2

function twoSeconds () {
    return new Promise ((resolve,reject) => {
        const time = setTimeout(() => {
            resolve(console.log("You have waited two seconds"));
        },2000)

        reject(clearTimeout(time));
    })
};

async function waitResolve (){
    const data = await twoSeconds();
};

waitResolve().catch((err) => console.log(`Forzamos la detencion del setTimeout`));

//N2.1

function returnDouble(number){
    return new Promise ((resolve,reject) => {
        if(typeof number !== "number") reject("Error, introduzca un numero");
        if(number < 0) reject ("Error, introduzca un numero positivo");
        

        setTimeout(() => {
            resolve(number * 2);
        },2000);
       
    })
};

async function waitDatas(){
    const numberDouble = await returnDouble(-2);
    console.log(`El doble es : ${numberDouble}`);
};
waitDatas().catch((err) => console.log(err));

async function addDoubles (num1,num2,num3){
    const doubleNumber1 = await returnDouble(num1);
    const doubleNumber2 = await returnDouble(num2);
    const doubleNumber3 = await returnDouble(num3);
    const addNumbers = doubleNumber1 + doubleNumber2 + doubleNumber3;
    console.log(`La suma de los dobles de los tres numeros introducidos es : ${addNumbers}`);
};

addDoubles("ss",3,4).catch((err) => console.log(err));