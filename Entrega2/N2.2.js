/*Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

class Person {
    constructor(name){
        this.name = name;
    }

    sayName(){
        return console.log (`El nombre es: ${this.name}`);
    }
}

const persons = [
    new Person("Alejandro"),
    new Person("Maria"),
    new Person("Jordi")
]
persons[0].sayName();
persons[1].sayName();
persons[2].sayName();