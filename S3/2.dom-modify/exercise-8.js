let p8 = document.createElement('p');
let text8 = document.createTextNode('Voy en medio!');
p8.appendChild(text8);

let div1 = document.getElementsByTagName('div')[1];

document.body.insertBefore(p8,div1);

console.log(document);