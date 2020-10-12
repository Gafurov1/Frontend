// Создать массив из 10 чисел и написать несколько функций для работы с ним

 let arr = [];
 for (let i = 0; i<10; i++){
     arr.push(parseInt(Math.random() *100));
}

//2)Функция принимает массив и  выводит его на экран.
function  showArray(array) {
     for (let item of array){
         document.write(item + '<br>');
     }
 }
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
alert(resul
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

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength -3) + '...';
    }
    return str;
}
alert(truncate("Hello, world!" , 12));




