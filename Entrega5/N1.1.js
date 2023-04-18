const fs = require("fs");

const file = "crearArchivo.txt";
const content = "Hola mundo";

fs.writeFileSync(file,content);
console.log("Se ha escrito en un archivo");

/*fs.writeFile(file,content,(err) => {
    if(err){
        throw err;
    }

    console.log("Se ha escrito en un archivo");
});*/