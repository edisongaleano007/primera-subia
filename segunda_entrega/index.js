const { argv } = require("./archivo");
const funciones = require("./funciones");

let comando = argv._[0];

switch (comando) {

    case "crear":
        funciones.crear(argv);
        break

    case "mostrar":
        funciones.mostrar();
        break

    case "mostrarcur":
        funciones.mostrarcur(argv.nombre);
        break

    case "eliminar":
        funciones.eliminar(argv.nombre)
        break
        
    default:
        console.log("no ingreso una funcion existente")
}


