
function getLocalList(input) {

    var studentsArray = input.split(' ');

    localStorage.setItem('sList', JSON.stringify(studentsArray));
    
    var storedList = localStorage.getItem('sList');

    var returnedList = JSON.parse(storedList);

    return console.log(returnedList);
}

getLocalList(prompt('Ingrese el nombre de cada estudiante separado por un espacio.'));