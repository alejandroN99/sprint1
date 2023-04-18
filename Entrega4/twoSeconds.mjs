function twoSeconds2 () {
    return new Promise ((resolve) => {
        const time = setTimeout(() => {
            resolve(console.log("You have waited two seconds"));
        },2000)

        clearTimeout(time);
        console.log("Se ha denenido el temporizador");
    })
};

export{twoSeconds2};