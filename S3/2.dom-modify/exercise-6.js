const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement('ul');
newUl.innerHTML = "List de Redes Sociales";

document.body.appendChild(newUl);
    for (i = 0; i <apps.length; i++){
        let addLi = document.createElement("li");
        addLi.innerHTML = apps[i];
        newUl.appendChild(addLi);
    }

console.log(document);