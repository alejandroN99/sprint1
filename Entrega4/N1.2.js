/**Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() 
 * després de 2 segons de la seva invocació. */

function twoSeconds () {
    return new Promise ((resolve,reject) => {
        const time = setTimeout(() => {
            resolve(console.log("You have waited two seconds"));
        },2000)

    })
};

async function waitResolve (){
    const data = await twoSeconds();
};

waitResolve();