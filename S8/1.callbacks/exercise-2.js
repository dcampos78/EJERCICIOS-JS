const userAnwsers = [];

function confirmExample(description){
    confirm(description);
}

function promptExample(description){
    propmt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description));
}

father ("Leccion", confirmExample);
father ("Ayuda", promptExample);

console.log(userAnwsers);