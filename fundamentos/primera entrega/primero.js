let cursos =

    [{

        nombre: 'bases de datos',
        id: 10,
        horas: "5horas",
        valor: 50000

    },

    {
        nombre: 'html',
        id: 20,
        horas: "6 horas",
        valor: 60000
    },
    {
        nombre: 'css',
        id: 30,
        horas: "7 horas",
        valor: 70000
    }];


let obtenerCursos = cursos;
console.log(obtenerCursos);

module.exports = {
    cursos,
    obtenerCursos
};





