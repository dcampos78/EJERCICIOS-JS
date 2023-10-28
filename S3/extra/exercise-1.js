const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul = document.createElement('ul');
document.body.appendChild(ul);

for (countrie of countries){
    let li = document.createElement('li');
    li.textContent = countrie;
    ul.appendChild(li);
}

console.log(document);
