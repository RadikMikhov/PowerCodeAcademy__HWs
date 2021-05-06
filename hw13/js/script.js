let firstName, lastName,theatreName, performanceName, sector, row, sit, 
hour, minutes;

firstName = prompt('Введите имя');
lastName = prompt('Введите фамилию');
theatreName = prompt('Введите название театра');
performanceName = prompt('Введите название спектакля');
sector = +prompt('Введите номер сектора');
row = +prompt('Введите номер ряда');
sit = +prompt('Введите номер места');
hour = +prompt('Введите удобное Вам время, часы');
minutes = +prompt('Введите удобное Вам время, минуты');

let massage = `У Вас куплен билет на \nимя:${firstName} ${lastName}, \nтеатр: ${theatreName}, \nспектакль: ${performanceName}, \nсектор - ${sector},ряд - ${row}, место номер - ${sit}, \nна время: ${hour}:${minutes}`;

console.log(massage);