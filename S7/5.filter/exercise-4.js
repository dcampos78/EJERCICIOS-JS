const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let lolStreamersBaby = streamers.filter(function (stream){
    return stream.gameMorePlayed === 'League of Legends' && stream.age < 30     
})
console.log(lolStreamersBaby);