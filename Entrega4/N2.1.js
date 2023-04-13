/**Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
 */

function returnDouble(number){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(number * 2);
        },2000);
       
    })
};

async function waitDatas(){
    const numberDouble = await returnDouble(2);
    console.log(`El doble es : ${numberDouble}`);
};
waitDatas();

async function addDoubles (num1,num2,num3){
    const doubleNumber1 = await returnDouble(num1);
    const doubleNumber2 = await returnDouble(num2);
    const doubleNumber3 = await returnDouble(num3);
    const addNumbers = doubleNumber1 + doubleNumber2 + doubleNumber3;
    console.log(`La suma de los dobles de los tres numeros introducidos es : ${addNumbers}`);
};

addDoubles(2,3,4);