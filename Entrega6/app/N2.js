//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
function returnDouble(number){
    return new Promise ((resolve,reject) => {
        if(typeof number !== "number") reject("Error, introduzca un numero");
        if(number < 0) reject ("Error, introduzca un numero positivo");

        setTimeout(() => {
            resolve(number * 2);
        },2000);
       
    })
};

/*Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode.
 dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.*/
class Person {
    constructor(name){
        this.name = name;
    }

    sayName(){
        return console.log (`El nombre es: ${this.name}`);
    }
}

/**Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1. */

class Person2 {
    constructor() {
      throw new Error("Error en el constructor");
    }
}

function CreatePerson  (username) {
    this.username = username;
}



function createObject (param){
    CreatePerson.prototype = Object.create(Person2.prototype);
    let persona1 = new CreatePerson (param);

    return persona1;
}


module.exports = {
    returnDouble,
    Person,
    createObject,
    Person2,
    CreatePerson
};