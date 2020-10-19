// Создать массив из 10 чисел и написать несколько функций для работы с ним

/* let arr = [];
 for (let i = 0; i<10; i++){
     arr.push(parseInt(Math.random() *100));
}*/

//2)Функция принимает массив и  выводит его на экран.
/*function  showArray(array) {
     for (let item of array){
         document.write(item + '<br>');
     }
 }*/
//3)Функция принимает массив и выводит только четные элементы
    /*function  showEvenArrayElements(array){
        for (let item of array){
            if (item % 2 == 0){
                document.write(item + '<br>');
            }
        }
    }
    showEvenArrayElements(arr);*/

//4)Функция принимает массив и возвращает сумму всех элементов

/*
    function summArray(array) {
        let summ = 0;
        for (let item of array) {
            summ += item;
        }
        return summ;
    }
*/

    /*
    alert('Сумма элементов массива равен ' + summArray(arr));
    */

//Функция принимает массив и возвращает его максиммальный элемент

    /*function maxArray(array){
        let max = array[0];
        for (let item of array) {
            if(item > max){
                max = item;
            }
        }
        return max;
    }
    alert('Максимум ' + maxArray(arr));*/

// 6)Функция добавления нового элемента в массив по указанному индексу

/*
    function addElement(array, element, index) {
        return array.splice(index, 0, element);
    }
showArray(arr);
arr = addElement(arr,77,2);
document.write('<hr>');
showArray(arr);
*/
/*function getMaxString(firstString,secondString) {
    let result = 0;
    if(firstString.length > secondString.length ){
        result = 1;
    }
    else if(firstString.length <secondString.length){
        result = -1;
    }
    return result;
}
let a = "asd";
let b ="qwerty";
let result = getMaxString(a,b);
alert(result);
t);*/

//Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.

/*function firstSimvol(a){
    return a [0] .toUpperCase() + a.slice(1);
}
alert(firstSimvol('asd'));*/

//Написать функцию, которая считает количество гласных
// букв в переданной строке.
/*function words() {
    let k = 0;
    let stringSearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let f = prompt("Введите строку:");
    for (let i = 0; i < f.length; i++)
        for (let j = 0; j < stringSearch.length; j++)
            if (f[i] === stringSearch[j]) {
                ++k;
                break;
            }
    return k ? k : "Нет совпадений";
}
console.log(words());*/

//Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

/*function checkSpam (str){
    return str.toLowerCase().includes( '100% бесплатно') || str.toLowerCase().includes( 'увеличение продаж')|| str.toLowerCase().includes( 'только сегодня')|| str.toLowerCase().includes( 'не удаляйте')|| str.toLowerCase().includes( 'xxx');
}
alert(checkSpam('xxx'));*/

//Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”

/*function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength -3) + '...';
    }
    return str;
}
alert(truncate("Hello, world!" , 4));
    */

//Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

/*let user = {
    name:'Jone',
    surname : 'Smith',
}
user.name = 'Pete';
delete user.name;*/

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
/*let schedule = {};
function isEmpty() {
    for (let key in schedule ) {
        return false;
    }
    return true;
}
alert(isEmpty());*/

//Сумма свойств объекта
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = suma(salaries)

function suma(salaries){
    for (let key in salaries){
        return salaries.John + salaries.Ann + salaries.Pete;
    }
    return 0;
}
alert(sum);*/

//Умножаем все числовые свойства на 2
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(menu){
    for (let  key in menu) {
        if(typeof menu[key] =='number'){
            menu[key]*=2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);
*/

/*class User {
    constructor(name,surname,billing) {
        this.name = name;
        this.surname = surname;
        this.billing = billing;
    }
    set name(value) {
        if (value.length <2) {
            alert("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }
    get name(){
        return this._name;
    }
    set billing(x){
        if(x <= -1 || typeof x != 'number' ){
            alert('error');
        }else {
            this._billing = x;
        }
    }
    get billing(){
        return this._billing;
    }
   }
let user = new User ('Bil', 'Till',  123123);
console.log(user);*/

//Дан пустой массив let a = [];
// Дан массив let b = [‘item1’, ‘item2’, ‘item3’, ‘item4’];
// Необходимо перенести элементы из массива b в массив a так, чтобы в массиве a элементы были в обратном порядке. Использовать метод reverse() запрещено

/*let a = [];
let b = ['item1', 'item2', 'item3', 'item4'] ;
let index;
for (index = b.length - 1; index >= 0; --index){
    console.log(b[index]);
}*/

//
let items = [
    {id: 1, sum: 12},
    {id: 2, sum: 18},
    {id: 3, sum: 1},
    {id: 4, sum:-2},
    {id: 5, sum: 12},
    {id: 6, sum: 6},
    {id: 7, sum: 8},
    {id: 8, sum: 104},
    {id: 9, sum: 13},
    {id: 10, sum: 23},
    {id: 11, sum: 2},
];
function copySorted(items) {
    return items.slice().sort();
}
items.sort(function (a, b) {
    if (a.sum < b.sum) {
        return 1;
    }
    if (a.sum > b.sum) {
        return -1;
    }
      return 0;
});

console.log(copySorted(items));
document.write(result);