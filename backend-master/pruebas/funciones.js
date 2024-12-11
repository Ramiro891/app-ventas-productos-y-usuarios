function despedir() {
    console.log("Adiós");
}

despedir();

function despedir2(nombre = "desconocido") {
    console.log("Adiós " + nombre);
}

despedir2("Luis Gómez");

function despedir3(nombre = "desconocido") {
    var mensaje = "Adiós " + nombre;
    return mensaje;
}

console.log(despedir3("Carlos"));

var despedida = (nombre) => {
    console.log("Adiós " + nombre);
}

despedida("Felipito");

var despedida2 = (nombre) => {
    console.log("Adiós " + nombre);
}
despedida2("Pepito");

var despedida3 = (nombre) => {
    return "Adiós " + nombre;
}
console.log(despedida3("Juanito"));

var despedida4 = nombre => "Adiós " + nombre;
console.log(despedida4("Marcelo"));


var despedida5 = function() {
    console.log("Adiós");
}

despedida5();


(() => {
    console.log("10");
})();

var despedida6 = () => {
    console.log("despedida6");
}

var despedida7 = (nombre, callback) => {
    console.log("Adiós " + nombre);
    callback();
}

despedida7("Beethoven", despedida6);
