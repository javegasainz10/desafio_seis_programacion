var init = prompt('Elija una opción: 1. Crear una nueva clase, o 2. Solicitar listado de una clase.')

if (init === '1') {
    function setLS(key, value) {
    
    return localStorage.setItem(key, JSON.stringify(value));
    }
    var className = prompt('Elija el nombre de su clase.')
    var inputNames = prompt('Ingrese el nombre de cada estudiante separado por un espacio');
    var inputList = inputNames.split(' ');
    setLS(className, inputList);
} else if (init === '2') {
    function returnClass(className) {
    var storedList = localStorage.getItem(className);
    var returnedList = JSON.parse(storedList);
    
    return console.log(returnedList);
    }
    var solClass = prompt('Ingrese el nombre de su Clase.');
    returnClass(solClass);
} else {
    alert('Error, por favor recargue la página a inicie de nuevo.')
}