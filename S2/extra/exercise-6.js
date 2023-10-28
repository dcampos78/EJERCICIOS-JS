let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];


function swap (array, x, y) {
    let first = array[x];
    let second = array[y];
    array[x] = second;
    array[y] = first;
    return array;
}

let swapping = swap(players, 1, 3); 
console.log(swapping);