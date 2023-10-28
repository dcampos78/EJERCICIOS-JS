const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (let country of countries) {
    const div$$ = document.createElement("div");
    let h4$$ = document.createElement("h4");
    h4$$.textContent = country.title;
    let img$$ = document.createElement("img");
    img$$.setAttribute("src", country.imgUrl);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    document.body.appendChild(div$$);
}

function removeClick() {
    let body$$ = document.querySelector('body');
    lastDiv$$ = body$$.lastChild;
    body$$.hasChildNodes() ? body$$.removeChild(lastDiv$$) : alert("No quedan elementos!");
}

 document.querySelector("#btn").addEventListener("click", removeClick);



