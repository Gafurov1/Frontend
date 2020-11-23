$(document).ready(function () {
    let a = $('.password');
    let b = $('.rep_password')

    $('button').click(function (event) {
        event.preventDefault();
        let c = {
            name: $('.name').val(),
            staff: $('.stuff').val(),
            age: $('.age').val(),
            pass1: $('.password').val(),
            pass2: $('.rep_password').val(),
            token: 'Damir'
        }
        console.log(c);
        if (a.val() === b.val()) {
            $.ajax({
                url: 'http://194.58.122.219/test/jq.php',
                data: c,
                success: function (rest) {
                    alert('Форма отправлена')
                },
                error: function () {
                    alert('Ошибка!');
                }
            })
        }
    })
});
