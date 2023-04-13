/*Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no. */

function returnPromise(num1, num2){
    return new Promise((resolve,reject) => {
        const sum = num1 + num2;

        if(sum > 0 ) {
            resolve(`El resultado de la suma es positivo ${sum}`);
        }else {
            reject(`El resultado de la suma es negativo ${sum}`);
        }
    });
};

returnPromise(2,2).then((value) => {console.log(value)},(err) => {console.log(err)});
returnPromise(-5,3).then((value) => {console.log(value)},(err) => {console.log(err)});