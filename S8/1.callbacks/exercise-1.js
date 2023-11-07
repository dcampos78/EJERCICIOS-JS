const numbersList = [];

function sum(a, b){
    return a + b ;
}

function substract(a, b){
    return a - b ;
}
function father(a, b, callback){
    numbersList.push(callback(a, b));
}

father(1, 2, sum);
father(4, 3, substract);
father(4, 4, sum);

console.log(numbersList);



