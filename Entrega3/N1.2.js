/**Crea una arrow function que rebi un paràmetre i una funció callback
 *i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

const functionCallback = (value, callback) => {
  if (value > 0) {
    callback("El valor es positivo:" + value);
  } else {
    callback("El valor es negativo:" + value);
  }
};

functionCallback(2, (message) => console.log(message));

functionCallback(-2, (message) => console.log(message));
