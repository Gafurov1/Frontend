//10)
/*
alert('Задайте число 0 до 100');
let a = 0;
let b = 100;
let answer = '';
let  temp = 0;
do{
    temp = parseInt(a+b/2);
    answer = prompt('Ваше число >, < или = ' + temp);
    if(answer == '>'){
    }else  if (answer =='<') {
        b = temp;
    }

    }while (answer !='=');
alert('Введите число' + temp);
*/

//9)
/*
for (let i = 2;i<=9;i++){
    for (let j=1; j<=10;j++){
        document.write((i + ' * ' + j + ' = ' + i * j + '<br>'))
    }
    document.write('<hr>')
}
*/
//7)
let x = prompt('Введите число');
let y = prompt('На сколько цифр сдвинуть');
let result = '';
for (let i = 1; i <= y; i++){
    for (let j = i; j < x.length ;j++){
        result +=x[j];
    }
    result +=x[0];
}
alert(result);






