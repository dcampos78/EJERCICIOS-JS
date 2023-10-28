

let divFn = document.querySelectorAll("div.fn-insert-here");
for (let div of divFn){
    let p9 = document.createElement('p');
    p9.innerText = 'Voy en medio';
    div.appendChild(p9);
}