//очистить поле ввода
$('.clean').click(function (event){
        $(':input').val('0');
});
//запрет ввода симовлов
$('.text').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});
//вывод цифр по нажатию мышки на цифры кроме стирания
$('button').not('.clean').click(function (){
    let text =$(this).text();
    $("input").val(text);
});
/*document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/!*\-+\(\)=]|Backspace|Enter/)) number(event.key)
})*/

function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            if (button.textContent !== '') {
                button.textContent = Math.trunc(math.evaluate(button.textContent))
            }
        } catch {
            let oldValue = button.textContent
            let newValue = 'недопустимое выражение'

            button.textContent = newValue
            const timer = setTimeout(() => {
                button.textContent = oldValue
                clearTimeout(timer)
            }, 1500)
        }
    } else if (value === 'C') {
        button.textContent = ''
    } else if (value.match(/CE|Backspace/)) {
        button.textContent = button.textContent.substring(0, button.textContent.length - 1)
    } else {
        button.textContent += value
    }
}
