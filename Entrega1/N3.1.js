/*Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */

const array = [];

const x = function numbers() {
    let result = "";
    let i = 0;
    for (i = 0; i < 10; i++) {
        if (i == 9) {
            result += i;
        } else {
            result += i + "-";
        }

    }
    return result;
}


function travelArray() {
    let result = "";
    let i = 0;
    for (i = 0; i < 10; i++) {
        array.push(x);
        result += array[i]() + "\n";
    }
    return result;
}

console.log(travelArray());
