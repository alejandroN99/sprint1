//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

const fs = require('fs');

function crearArchivoCodificado() {
  const file = './crearArchivo.txt';
  // Leer los datos del archivo
  const readFile = fs.readFileSync(file, "utf-8");

  // Codificar los datos en hexadecimal
  const hexData = Buffer.from(readFile).toString('hex');
  console.log('Datos codificados en hexadecimal:', hexData);
  fs.writeFileSync("archivo.hex", hexData);

  // Codificar los datos en base 64
  const base64Data = Buffer.from(readFile).toString('base64');
  console.log('Datos codificados en base 64:', base64Data);
  fs.writeFileSync("archivo.b64", base64Data);

};
crearArchivoCodificado();

//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

const crypto = require('crypto');

function encrypt(param1, param2) {
  const algorithm = 'aes-192-cbc';
  const key = crypto.scryptSync("password", 'salt', 24);
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  const input = fs.createReadStream(param1);
  const output = fs.createWriteStream(param2);

  console.log(`Archivo "${param2}" encriptado correctament.`);
  input.pipe(cipher).pipe(output);
  fileDelete(param1);
}

function fileDelete(param) {
  setTimeout(() => { 
      try {
          fs.unlinkSync(param);
          console.log(`Archivo "${param}" borrado.`);
      } catch(err) {
          console.error(`ERROR: no existe y no se puede borrar.`);
      }        
  }, 3000);
}

setTimeout(() => {
  encrypt("archivo.b64", "archivo_cifradoB64.txt");
  encrypt("archivo.hex", "archivo_cifradoHex.txt");  
}, 2000);

//Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

function decrypt(param1, param2) {
  const algorithm = 'aes-192-cbc';
  const key = crypto.scryptSync("password", 'salt', 24);
  const iv = Buffer.alloc(16, 0);

  const cipher = crypto.createDecipheriv(algorithm, key, iv);

  const input = fs.createReadStream(param1);
  const output = fs.createWriteStream(param2);

  console.log(`Archivo"${param1}" desencriptado correctamente.`);
  input.pipe(cipher).pipe(output);
  //read2(param2);
}
setTimeout(() => {
  decrypt("archivo_cifradoB64.txt", "archivo_nuevoB64.b64");
  decrypt("archivo_cifradoHex.txt", "archivo_nuevoHex.hex");
}, 6000);

setTimeout(() => {
  const readB64 = fs.readFileSync("archivo_nuevoB64.b64", "utf-8");
  const buffer = new Buffer.from(readB64, "base64")
  const utfToString = buffer.toString('utf-8');
  
  console.log(utfToString)
  
}, 7000)

setTimeout(() => {
  const readHex = fs.readFileSync( "archivo_nuevoHex.hex", "utf-8");
  const buffer = new Buffer.from(readHex, "hex")
  const utfToString = buffer.toString('utf-8');
  
  console.log(utfToString)
}, 7000)

