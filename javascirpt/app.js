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
/*let age = prompt('Введите число')
if (age > 0){
    alert("1")
}
else if(age <0){
    alert(-1)
}
else{
    alert(0)
}*/
/*
let result;
let result = (a + b < 4) ?'Мало':'Много';
alert(result);
*/
/*let login = prompt('Введите логин');
let message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
        (login == '') ? 'Нет логина' : '';
alert( message);*/
/*const age = prompt("Год вашего рождения")
let result =(2020 - age);
alert(result);*/

/*
let a = prompt("Укажите объем флешки в ГБ");
let message ="Количество файлов";
alert((message+Math.floor((a*1024)/820)));*/
/*const dollar = 74.97;
const rub =0.013;
let nameValue = prompt("Название валюты для обмена");
prompt("На какую валюту")
if (nameValue === "рубли"){
    prompt("сумма которую хотите обменять")
}
 else if (nameValue === "доллар"){
    prompt("сумма которую хотите обменять")
}*/
/* let month = prompt("Введите номер месяца")
switch (month){
    case '1':
        alert("Январь")
        break;
    case '2':
        alert("Февравль")
        break;
    case '3':
        alert("Март")
        break;
    case '4':
        alert("Апрель")
        break;
    case '5':
        alert("Май")
        break;
    case '6':
        alert("Июнь")
        break
    case '7':
        alert("Июль")
        break;
    case '8':
        alert("Август")
        break;
    case '9':
        alert("Сентябрь")
        break ;
    case'10':
        alert("Октябрь")
        break ;
    case '11':
        alert("Ноябрь")
        break;
    case '12':
        alert("Декабрь")
        break;
    default:
        alert("Неверно введен месяц")
}
*/
/*let x1 = prompt("Введите число один ")
x1 = parseInt(x1);
let x2 = prompt("Введите число два")
x2 = parseInt(x2);
let operator = prompt( "Введите оператор (-,+,/)")
switch (operator){
    case'+':
        alert('Результат ' + (x1 + x2));
        break;
        case'-':
        alert('Результат ' + (x1 + x2));
        break;
        case'*':
        alert('Результат ' + (x1 * x2));
        break;
        case'/':
            if(x2 == 0){
                alert('Делить на 0 нельзя');
            }else {
                alert('Результат ' + (x1 / x2));
            }
        break;
    default:
        alert('Неищвестный оператор');
}*/
/*let x = parseInt(prompt("Введите число"));
while (x>0){
    document.write('#<br>');
    x--;
}*/
/*
let x = parseInt(prompt("Введите число"));
while (x>=0){
    document.write(x + '<br>');
    x--;
}
*/
/*let x = parseInt(prompt("Введите число"));
let y = parseInt(prompt("Введите степень"));
let z = y
let result = 1;
while (y > 0){
    result = result * x;
    y--;
}
document.write('Число '  + x + ' в степени ' + z + '=' + result);*/
/*let x = parseInt(prompt('Введите число'));
let y = parseInt(prompt('Введите число 2'));
let min = (x>y)? y: x;
min --;
while (min >1){
    if ((x % min)==0 && (y % min)==0){
        document.write('Делитель ' + min + '<br>');
    }
    min--;
}*/
/*let x = parseInt(prompt('Введите число'));
let result = 1;
let number = x
while (x > 0 ){
    result = result * x;
    x--;
}
document.write('Факториал числа ' + number + ' равен ' + result);*/
/*let x = 0
do {
    x = prompt('Решите пример 2 + 2 * 2 =');
} while (x != 6);
document.write('Поздравляю! ');*/
/*let x = 1000;
let y = 2;
let count = 0;
do {
    x = x/2;
    count ++;
}while (x >= 50);
document.write('Число: ' + x + ' делений: ' + count);*/
/*
let x =parseInt(prompt('Введите число'));
for (let i = 1; i <= 100;i++){
    if((i % x)== 0 && i != x){
        document.write(i +'<br>');
    }
}*/
/*
let x =parseInt(prompt('Введите число'));
let y =parseInt(prompt('Диапозон'))
let counter = 1;
for (let i=x; i <=y; i++){
    if ((counter % 4) == 0){
        document.write(i + '<br>');
    }
    counter++;
}
*/
/*
function show5Blocks()
{
    for (let i = 1;i<=5;i++){
        document.write('<h2> Header' + i + '</h2>');
    }
}
 show5Blocks();*/
/*
function incAndLog(x){
    x=x+1;
    alert("inc x= " + x);
    Log.innerHTML += "<br>inc x = " + x;
}
incAndLog(5);*/
/*function min(a,b){
    if(a >b){
        return b;
    }else {
        return a;
    }
}
alert(min(90,4));*/
/*
function power(x,y){
    let result=1;
        while (y >=1){
            result = result * x;
            y--;
        }
        return result;
}
alert(power(2,9));*/
/*function calc(a,b, operator){
    switch (operator){
        case '+':
            return a + b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
    }
}
alert(calc(10,15, '+'));
alert(calc(10,15, '-'));
alert(calc(10,15, '/'));
alert(calc(10,15, '*'));*/
/*function number(a){
    for( let i = a-1; i>1;i--){
        if((a % i) == 0){
            return 'Число не простое'
        }
    }
    return 'Число простое'
}
alert(number(19));*/
/*
function table(x){
    for(let i=1;i<=10;i++){
        document.write(x + ' * ' + i + ' = ' + x * i +'<br>');
    }
    document.write('<hr>');
}
for(let i = 2;i<= 9;i++){
    table(i);
}*/
/*
function rest(a,b){
    let div = parseInt(a/b);
    return a - b * div;
}
alert(rest(5,2));
alert(rest(15,3));
alert(rest(37,8));*/
/*function  summ(){
    let result = 0;
    for (let i = 0;i< arguments.length;i++){
        if(i>4){
            break;
        }
        result += arguments[i];
    }
    return result;
}
alert(summ(10,13,12,765,700));*/
/*
function max(){
    let max = arguments[0];
    for (let i = 0;i< arguments.length;i++){
        if(arguments[i] > max && i<4){
            max = arguments[i];
        }
    }
    return max;
}
alert(max(70,50,40,30,22));
*/

/*function showNumber(a,b,even) {
    for (let i = a; i <= b; i++) {
        if (even) {
            if ((i % 2) == 0) {
                document.write(i + '<br>');
            } else {
                if ((i % 2) != 0) {
                    document.write(i + '<br>');
                }
            }
        }
    }
}
showNumber(5,50,true);
document.write('<hr>');*/
function  getNextDate(day,month,year){
    let maxDay = 30;
    if(month == 2){
        maxDay =28;
    }else if(month = 1 || month ==3 || month == 5 ||month ==7 ||month== 8 || month ==10 || mounth == 12){
        maxDay=31;
    }
    if(day == maxDay){
        day = 1;
        if(month == 12){
            month =1;
            year++;
        }else {
            month++;
        }
    }else {
        day++;
    }
    if(day < 10){
        month = '0' + month;
    }
    return day + '.' + month + '.' + year;
}
function  isLeapYear(year){
    return((year %400) == 0 ||((year % 4) == 0 &&(year %100) !== 0));
}
