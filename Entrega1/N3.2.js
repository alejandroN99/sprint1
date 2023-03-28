/*Crea una funció anònima autoinvocable igualada a una variable que mostri per consola 
el nom de l'usuari/ària a rebut com a paràmetre. */


let invokeAnonymous = (function (name){
    console.log(`Mi nombre es: ${name}`) ;
})("Alejandro");


