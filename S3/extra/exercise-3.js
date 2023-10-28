const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let divData = document.querySelector('div[data-function=printHere]');
let ul = document.createElement('ul');
divData.appendChild(ul);

for (car of cars){
    let li = document.createElement('li');
    li.textContent = car;
    ul.appendChild(li);
}

console.log(document);


