/*let name =prompt("Какое официальное название javascript") ;
if( name =="ECMAScript"){
    alert("Верно!");
}
else {
    alert('Не знаете? ECMAScript!');
}*/
/*
if ("0") {
    alert( 'Привет' ); // true
}*/
let age = prompt('Введите число')
if (age > 0){
    alert("1")
}
else if(age <0){
    alert(-1)
}
else{
    alert(0)
}
/*
let result;
let result = (a + b < 4) ?'Мало':'Много';
alert(result);
*/
let login = prompt('Введите логин');
let message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
        (login == '') ? 'Нет логина' : '';
alert( message);
