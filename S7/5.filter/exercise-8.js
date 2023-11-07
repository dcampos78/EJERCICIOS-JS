const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let inputbtn = document.querySelector('input[data-function="toFilterStreamers"]');
let button$$ = document.querySelector('button');
button$$.addEventListener('click', inputType);

function inputType (){
    let inputStreamers = streamers.filter(streamer => streamer.name.includes(inputbtn.value));
    return console.log(inputStreamers)
}...inputType

