//1) Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.

/*
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength -1) + '…' : str;
}
console.log(truncate('Hello, world!', 8))
*/

//2)Написать функцию, которая проверяет, является ли переданная строка палиндромом.

/*
function isStrPalindrome(str)
{
    let n = str.length;
    for(let i = 0; i < n/2; i++)
    {
        if (str.charAt(i) !== str.charAt(n-1-i))
            return false;
    }
    return true;
}
console.log(isStrPalindrome('топот'));
*/

//3) Написать функцию, которая считает количество слов в
// предложении.
/*
function countWordsInSentence(sentence) {
    sentence = sentence.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == "") {
            sentence.splice(i, 1);
        }
    }
    return (sentence.length);
}
console.log(countWordsInSentence('123 aswda z asdasdasdads'))*/

//4)Написать функцию, которая возвращает самое длинное
// слово из предложения.
/*
function longestWordInSentence(sentence) {
    sentence = sentence.split(" ");
    let word = "";

    for (let i = 0; i < sentence.length; i++) {

        if (sentence[i].length > word.length) {
            word = sentence[i];
        }

    }
    return word;
}
console.log(longestWordInSentence('asd aaaaaaaas sdddddddd'))*/

//5)Написать функцию, которая считает среднюю длину слова
// в предложении.

