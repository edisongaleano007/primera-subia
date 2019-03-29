let cursos =    {

        nombre: 'bases de datos',
        id: 10,
        descripcion: "5horas",
        valor: 50000,
        madalidad:"presencial o virtuaal",
        intencidad_horaria:"semana o fines de semana"

        


    };

   


let obtenerCursos = cursos;
console.log(obtenerCursos);

module.exports = {
    cursos,
    obtenerCursos
};