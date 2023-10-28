const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let par = ages.filter(function (age){
    if (numero % 2 === 0) {
        return age;
      }
})
console.log(par);