const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name, itv} = car;
console.log(name);
console.log(itv);

let [firstYear, secondYear, thirdYear] = itv;
console.log(firstYear);
console.log(secondYear);
console.log(thirdYear);
