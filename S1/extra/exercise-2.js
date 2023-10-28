const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let fruitI = 0;
for(let i = 0; i < foodSchedule.length; i++) {
    let food = foodSchedule[i];
    if (!food.isVegan) {
        if(fruitI === fruits.length){
            console.log('no more fuits')
        } else {
            foodSchedule[i].name = fruits[fruitI];
            foodSchedule[i].isVegan = true;
            fruitI++;
        }
    }
}
console.log(foodSchedule)