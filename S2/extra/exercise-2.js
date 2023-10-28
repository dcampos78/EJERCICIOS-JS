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

// let sounds = [];
// let iwaves = 0;
// let irain = 0;
// let ifirecamp = 0;
// let ishower = 0;
// let itrain = 0;
// let iwind = 0;
// let i = 0;


// for (let nombre in users) {
//     let favorite = users[nombre].favoritesSounds;
//     if (favorite.hasOwnProperty("waves")){
//         iwaves = iwaves + favorite.waves.volume;
//         sounds.push(iwaves);
//     } if (favorite.hasOwnProperty("rain")){
//         irain = irain + favorite.rain.volume;
//         sounds.push(irain);
//     } if (favorite.hasOwnProperty("firecamp")){
//         ifirecamp = ifirecamp + favorite.firecamp.volume;
//         sounds.push(ifirecamp);
//     } if (favorite.hasOwnProperty("shower")){
//         ishower = ishower + favorite.shower.volume;
//         sounds.push(ishower);
//     } if (favorite.hasOwnProperty("train")){
//         itrain = itrain + favorite.train.volume;
//         sounds.push(itrain);
//     } if (favorite.hasOwnProperty("wind")){
//         iwind = iwind + favorite.wind.volume;
//         sounds.push(iwind);
//     }

//     for (let vol of sounds){
//     i = i + vol;
//     }
//         console.log("La media de volumen de " + users[nombre].name + " es: " + (i/3));
//     }

let totalVolume = 0;
let totalCount = 0;

    for (let user of users){
        const favoritesSounds =user.favoritesSounds;
        for (let soundkey in favoritesSounds){
            const soundInfo = favoritesSounds[soundkey];
            totalVolume += soundInfo.volume;
        }
    }
    console.log(totalVolume / totalCount);