const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let citiesName = cities.map(function(citie) {
    let cName = citie.name;
    if (citie.isVisited === true){
        cName = cName + '' + '(Visitado)';
    }
    return cName
});
console.log(citiesName);