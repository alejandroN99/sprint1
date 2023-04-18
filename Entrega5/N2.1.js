//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const oneSecond = () => {
    setInterval(() => {
        console.log("Ha pasado 1 segundo");
    },1000);  
}; 

oneSecond();

