const baseUrl = 'https://api.nationalize.io?name=';

let button$$ = document.querySelector("button");
button$$.addEventListener("click", consult);

async function consult () {
    const input$$ = document.querySelector("input");
    const value = input$$.value;
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    console.log(json);
    createP(json);
}

function createP(data) {
    const group$$ = document.querySelector('.group');
    for (const country of data.country){
        const p$$ = document.createElement('p');
        const prob= country.probability * 100;
        p$$.textContent= 'El nombre ' + data.name + ' tiene un ' + prob + ' por ciento de ser ' + country.country_id;
        group$$.appendChild(p$$);
        
    }
}