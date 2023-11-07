const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let legendsStreamers = streamers.filter(function (stream){
    if (stream.gameMorePlayed.includes('Legends')){
        if (stream.age>35){
            stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
})
console.log(legendsStreamers);