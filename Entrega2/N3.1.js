//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class Person {
    constructor() {
      throw new Error("Error en el constructor");
    }
}

function CreatePerson  (username) {
    this.username = username;
}



function createObject (param){
    CreatePerson.prototype = Object.create(Person.prototype);
    let persona1 = new CreatePerson (param);

    return persona1;
}

console.log(createObject("Pepe"));
console.log(createObject("Alejandro"));