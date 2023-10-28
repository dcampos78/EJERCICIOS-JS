const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
let adultAge = 18;
for(let user of users){
    if (user.years >= adultAge){
        console.log('Usuario Mayor de Edad: ' + user.name)
    } else {
        console.log('Usuario menor de edad: ' + user.name)
    }
}

