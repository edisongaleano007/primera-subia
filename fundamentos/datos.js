const curso1 = require ("./primero");
const fs = require("fs");

console.log(curso1.curso);

let crearArchivo = (curso1) => {
    texto = "el curso es" +curso1.nombre+ "\n" ; 
    fs.writeFile("nombre.txt",texto, (err)=> {
        if (err) throw (err);
        console.log("se ha creado el archivo")
    });


}
crearArchivo (curso1);
