function returnDouble(number){
    return new Promise ((resolve,reject) => {
        if(typeof number !== "number") reject("Error, introduzca un numero");
        if(number < 0) reject ("Error, introduzca un numero positivo");

        setTimeout(() => {
            resolve(number * 2);
        },2000);
       
    })
};

async function waitDatas2(){
    const numberDouble = await returnDouble(-2);
    console.log(`El doble es : ${numberDouble}`);
};
waitDatas2().catch((err) => console.log(err));

async function addDoubles (num1,num2,num3){
    const doubleNumber1 = await returnDouble(num1);
    const doubleNumber2 = await returnDouble(num2);
    const doubleNumber3 = await returnDouble(num3);
    const addNumbers = doubleNumber1 + doubleNumber2 + doubleNumber3;
    console.log(`La suma de los dobles de los tres numeros introducidos es : ${addNumbers}`);
};

export {returnDouble,waitDatas2,addDoubles};