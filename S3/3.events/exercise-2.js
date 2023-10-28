const imput$$ =document.querySelector('input');
imput$$.addEventListener(focus, checkValue);
function checkValue(e){
    const target$$ = e.target; // con Target devuelve el nodo especifico
    console.log(target$$.value); // si pusiera this en the vez de target eligiria cual entre varios imput si hubiera
}