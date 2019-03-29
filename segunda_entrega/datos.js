const curso1 = require ("./calculos");

console.log(curso1.cursos);


let {nombre, id, descripcion, valor, modalidad, intensidad_horaria} = curso1;
console.log("el nombre del curso es: " + nombre);
console.log("el id del curso es: "+ id);
console.log("la descripcion del curso es: " + descripcion);
console.log("el valos es: " + valor);
console.log("la modalidad: "+ modalidad);
console.log("la intensidad horaria es: " + intensidad_horaria);