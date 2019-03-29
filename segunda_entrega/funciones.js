const fs = require("fs");
listacursos = [];
const crear = (curso) => {
    listar();
    let cur = {
        nombre: curso.nombre,
        id: curso.id,
        descripcion: curso.descripcion,
        valor: curso.valor,
        modalidad: curso.modalidad,
        intencidad_horaria: curso.intencidad_horaria


    };
    let duplicado = listacursos.find(nom => nom.nombre == curso.nombre);
    if (!duplicado) {
        listacursos.push(cur);
        console.log(listacursos);
        guardar();
    }
    else
        console.log("NOMBRE DE USUARIO YA EXISTE!!!")
}
const listar = () => {

    listacursos = require("./listado.json");

}


const guardar = () => {
    let datos = JSON.stringify(listacursos);
    fs.writeFile("listado.json", datos, (err) => {
        if (err) throw (err);
        console.log("ARCHIVO CREADO CON EXITO!!!");

    })
}

const mostrar = () =>{
    listar()
console.log("los usuarios son: ")
    listacursos.forEach(curso => {
    console.log("El nombre del usuario es: " + curso.nombre);
    console.log("DATOS:");
    console.log("El ID del usuario es: " + curso.id);
console.log("La descripcion del cuso es: " + curso.descripcion);
console.log("El valor del cusro es:" + curso.valor);
console.log("La modalidad del curso es: "+ curso.modalidad );
console.log("La intensidad horaria es: "+ curso.intencidad_horaria)

            
    });
}

const mostrarcur = (nom) =>{
    listar()
    let cur =listacursos.find(buscar => buscar.nombre == nom )
    if(!cur){
        console.log("No exixte el usuario");
  
    }
    else{
    console.log("El nombre del usuario es: " + cur.nombre);
    console.log("DATOS:");
    console.log("El ID del usuario es: " + cur.id);
console.log("La descripcion del cuso es: " + cur.descripcion);
console.log("El valor del cusro es:" + cur.valor);
console.log("La modalidad del curso es: "+ cur.modalidad );
console.log("La intensidad horaria es: "+ cur.intencidad_horaria)
    }
            
    }
const eliminar = (nom) => {
    listar()
    let nuevo = listacursos.filter(mat => mat.nombre != nom);
    if (nuevo.length == listacursos.length ){
        console.log ("ningun usuario tiene ese nombre  ")
    }
        else
        listacursos = nuevo
        guardar()
        }
    



module.exports = {
    crear,
    mostrar,
    mostrarcur,
    eliminar
}