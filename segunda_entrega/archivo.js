const nombre = {
    default: 0,
    alias: "n"
}
const id = {
    default: 0,
    alias: "i"
}
const descripcion = {
    default: 0,
    alias: "d"
}
const valor = {
    default: 0,
    alias: "v"
}
const modalidad = {
    default: 0,
    alias: "m"
}

const intensidad_horaria = {
    default: 0,
    alias: "h"
}
const creacion = {
    nombre,
    id,
    descripcion,
    valor,
    modalidad,
    intensidad_horaria
}
const muestracur = {
    nombre
}

const actualiza = {
    nombre,
    nombre: true,
    alias: "a"
}

const elimina = {
    nombre
}

const argv = require("yargs")
    .command("crear", "crear un curso en la BD", creacion)
    .command("mostrar", "muestra los cursos")
    .command("mostrarcur", "muestra la informacion de los cursos", muestracur)
    .command("eliminar","eliminar un usuario de la BD",elimina)
    .argv;

module.exports = {
    argv
};