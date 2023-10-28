const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

let find2010 = movies.find(function (movie){
    return movie.date === 2010;
});

console.log(find2010);