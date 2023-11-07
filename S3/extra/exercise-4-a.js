const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (let country of countries) {
    const div$$ = document.createElement("div");
    let h4$$ = document.createElement("h4");
    h4$$.textContent = country.title;
    div$$.appendChild(h4$$);

    let img$$ = document.createElement("img");
    img$$.setAttribute("src", country.imgUrl);
    img$$.alt = 'Imagen de ' + country.title;
    div$$.appendChild(img$$);

    document.body.appendChild(div$$);
}
console.log(document);




