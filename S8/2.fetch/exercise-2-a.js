const baseUrl = 'https://api.nationalize.io?name=';

let button$$ = document.querySelector("button");
button$$.addEventListener("click", consult);

async function consult () {
    const input$$ = document.querySelector("input");
    const value = input$$.value;
    const response = await fetch(value);
    const json = await response.json();
    return json;
}

