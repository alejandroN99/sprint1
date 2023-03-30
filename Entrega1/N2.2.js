//Invoca una funció que retorni un valor des de dins d'una template literal.
const usename= "Alejandro";
const frase= `Mi nombre es ${myName()}`;

function myName(){
    return username;
}

console.log(frase);