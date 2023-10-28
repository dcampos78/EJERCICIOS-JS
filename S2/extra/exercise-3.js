const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let sounds = [];
let iwaves = 0;
let irain = 0;
let ifirecamp = 0;
let ishower = 0;
let itrain = 0;
let iwind = 0;
let i = 0;

for (let nombre in users){
    let favorite = users[nombre].favoritesSounds;
    if (favorite.hasOwnProperty('waves')){
        iwaves = iwaves + 1;
    } if (favorite.hasOwnProperty('rain')){
        irain = irain + 1;
    } if (favorite.hasOwnProperty('firecamp')){
        ifirecamp = ifirecamp + 1;
    } if (favorite.hasOwnProperty('shower')){
        ishower = ishower + 1;
    } if (favorite.hasOwnProperty('train')){
        itrain = itrain + 1;
    } if (favorite.hasOwnProperty('wind')){
        iwind = iwind + 1;
    }
}

console.log("Wawes ha sido añadido como favorito " + iwaves + " veces");
console.log("Rain ha sido añadido como favorito " + irain + " veces");
console.log("Firecamp ha sido añadido como favorito " + ifirecamp + " veces");
console.log("Shower ha sido añadido como favorito " + ishower + " veces");
console.log("Train ha sido añadido como favorito " + itrain + " veces");
console.log("Wind ha sido añadido como favorito " + iwind + " veces");




