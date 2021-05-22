//------------------------------------------------------------------------------
let max = 7;
let min = 1;

let r1 = Math.floor(Math.random() * (max - min)) + min;
let r2 = Math.floor(Math.random() * (max - min)) + min;

console.group('Кубики');
console.log('Первый: ' + r1);
console.log('Второй: ' + r2);
console.groupEnd();

//------------------------------------------------------------------------------
let random = Math.random();

if (Math.round(random)) {
    console.log('Выпал орел')
} else {
    console.log('Выпала решка')
}

//------------------------------------------------------------------------------
let minUser = 1;
let maxUser = +prompt('Введите максимальное значение');

let randomForOne = Math.floor(Math.random() * (maxUser - minUser)) + minUser;

console.log('Рандомное значение: ' + randomForOne);

//------------------------------------------------------------------------------
let firstNum = +prompt('Введите первое значение')
let secondNum = +prompt('Введите второе значение')

if(firstNum > secondNum){
    randNum = Math.floor(Math.random() * (firstNum - secondNum + 1)) + secondNum;
}else {
    randNum = Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;
}
console.log('Значение между введеными: ' + randNum)

//------------------------------------------------------------------------------
let question = prompt('Каково официальное название JavaScript?');

if (question === "ECMAScript"){
    console.log('Верно!')
}else {
    console.log('Вы незнаете? ECMAScript')
}

//------------------------------------------------------------------------------
let a = +prompt('Ведите число А')
let b = +prompt('Ведите число Б')

let cost = (a + b < 4) ? "Мало" : "Много";

console.log(cost);

//------------------------------------------------------------------------------
let start = 1;
let step = 3;

console.log('Арифметическая прогрессия:');
for( let i = 0; i < 50; i++){
    start += step;
    console.log(start);
}

//------------------------------------------------------------------------------
let n1 = 0;
let n2 = 1;

console.log('Последовательность Фибоначи:');
console.log(n1);
console.log(n2);
for( let i = 0; i < 50; i++){
    let n3 = n2 + n1;
    console.log(n3);
    n1 = n2;
    n2 = n3;
}