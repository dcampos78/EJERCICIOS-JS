const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

let funnyAlien = (alie, mutation) =>{
    let cucushu = alie.find(alie => alie.name === "Cucushumushu");
    let porom = mutation.find(mutation => mutation.name === "Porompompero");
    cucushu.mutations = porom;
    return aliens;
}

console.log(funnyAlien(aliens, mutations));

