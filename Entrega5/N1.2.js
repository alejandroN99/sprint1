//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
const fs = require("fs");

const file = "crearArchivo.txt";
const read = fs.readFileSync(file,"utf-8");

console.log(read);

/*fs.readFile(file,"utf-8",(err,file) => {
    if(err){
        throw err;
    }

    console.log(file);
});*/

