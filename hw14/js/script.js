let price = +prompt('Введите цену товара');

if (price <= 100){
    alert('Это дешево')
}else {
    alert('Это дорого')
}


//----------------------------------------------
let login, password;

login = prompt('Введите логин', 'Админ');

if (login === "Админ"){
    password = prompt('Введите пароль', 'admin');
} else if (login == null){
    alert('Вход отменен')
} else{
    alert('Я Вас не знаю');
}

if (password === "admin"){
    alert('Добро пожаловать!')
} else if (password == null){
    alert('Вход отменен')
} else{
    alert('Пароль неверен')
}

console.log(login);