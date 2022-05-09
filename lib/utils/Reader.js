//empezamos a separar responsabilidades

const fs = require("fs");

class Reader{
    //funcion a la que le mando el path de un archivo y regreso la lectura
    // de ese archivo
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader
