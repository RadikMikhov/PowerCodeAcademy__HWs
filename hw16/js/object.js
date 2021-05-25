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
let minPrice = Infinity;
let minName = "";

for (let key in obj) {
    sum += obj[key];
    
    if (obj[key] > bigPrice) {
        bigPrice = obj[key]
        bigName = key;               
    }


    if (obj[key] < minPrice) {
        minPrice = obj[key]
        minName = key
        }
}

console.log('Общая стоимость покупок: ', sum);
console.log('Самая большая стоимость у: ', bigName);
console.log('Самая меньшая стоимость у: ', minName);


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

for (let i = 0; i < films.length; i++) {
    sumRating += films[i].rating ? films[i].rating : 0;

    if (films[i].premier) {
        console.log("Премьера:", films[i].title)
    }

    if (films[i].rating > 8) {
        console.log(films[i].title, '-', films[i].rating)
    } 
}
console.log('Средняя оценка - ', sumRating / films.length);

