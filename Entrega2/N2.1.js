//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const arrowFunction = (valor) => {
    return {animal: valor};
};

console.log(arrowFunction("Gato"));