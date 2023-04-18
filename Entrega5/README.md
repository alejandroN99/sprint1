##Inclou un README amb instruccions per a l'execució de cada part.##

Se guarda en la constante **fs** el modulo fyle system y se crea la funcion *crearArchivoCodificado*, para crear un archivo codificado en *hexadecimal* y otro en *base 64* a partir del archivo *crearArchivo* del nivel 1 con el texto 'Hola Mundo'.

Primero se lee el archivo a codificar con el *fs.readFileSync* y se cofifican con el *Buffer.from().toString()* y se reescriben en un nuevo archivo con *fs.writeFyleSync().*

Para encriptar los archivos anteriores requerimos el módulo **crypto**, a la funcion *encrypt* le pasamos como parámetros el archivo de entrada y el de salida, esta  función encripta un archivo usando el algoritmo **AES-192-CBC.**

Primero, se define el algoritmo de cifrado como “aes-192-cbc” y se genera una clave y un vector de inicialización *(iv)* usando la función *crypto.scryptSync().* Luego, se crea un objeto de cifrado usando la función crypto.createCipheriv() y se especifica el algoritmo de cifrado, la clave y el IV.

Luego creamos con *fs.createReadStream()* un flujo de lectura para el archivo de entrada y un flujo de escritura para el archivo de salida con *fs.createWriteStream()*. 

Se encripta y se llama a la función *fileDelete*, enviando como parámetro el archivo de entrada para que sea eliminado.

Se utiliza el *setTimeout* al llamar a la función encrypt, para controlar la asincronía.

Seguidamente se desencripta los archivos anteriores, con el mismo proceso anterior con la diferencia que se utiliza *crypto.createDecipheriv()*.

Los archivos desencriptados se leen *fs.readFyleSync()*y creamos objeto búfer en *base 64 y otro en hexadecimal*, y posteriormente los pasamos a cadena de texto usando el *buffer.toString('utf-8')*, con un setTimeout para esperar que los archivos anteriores se hayan desencriptado primero.


