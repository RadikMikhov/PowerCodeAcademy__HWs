let obj = {
	bread: 25,
	milk: 30,
	chips: 50,
	water: 10,
	cucumbers: 42
}
let sum = 0;
let bigPrice = 0;
let bigName = "";
let minPrice = 0;
let minName = "";

for (let key in obj) {
    sum += obj[key];
    
    if (obj[key] > bigPrice) {
        bigPrice = obj[key]
        bigName = key;               
    } 
}

console.log('Общая стоимость покупок: ', sum);
console.log('Самая большая стоимость у: ', bigName);

//-----------------------------------------------------------
let films = [ 
    {
	    title: "Joker",
	    rating: 8.1,
	    premier: true   
    },
    {
        title: "Iron Man",
        rating: 7,
        premier: true
    },
    {
        title: "Thor",
        rating: 7.5,
        premier: false
    },
    {
        title: "Black Panther",
        rating: 8.2,
        premier: true
    },
    {
        title:"Hulk",
        rating: 8.5,
        premier: false
    } 
]

let sumRating = 0;

for (let key in films.rating) {
    sumRating += films.rating[key] / 5;
}
console.log('Средний рейтинг фильмов: ', sumRating);

for (let key in films.premier) {
    if (films.premier === true) {
        console.log(films.title);
    }
}
