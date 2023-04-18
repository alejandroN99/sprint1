//Crea una funció que comprimeixi el fitxer del nivell 1.

const fs = require('fs');
const zlib = require('zlib');

const gzip = (inputFile, outputFile) => {
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);
  const zip = zlib.createGzip();

  inputStream.pipe(zip).pipe(outputStream);
};

gzip('./crearArchivo.txt', 'archivoComprimido.txt.gz');