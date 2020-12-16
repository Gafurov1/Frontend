<?php
function getPasswordHash($userPassword)
{
    $sold = 'web2020';
    $hashString = $userPassword . $sold;
    return md5($hashString);
}

function saveResult($req)
{
    $string = '';
    $string .= date('d.m.Y H:1') . PHP_EOL;
    foreach ($req as $k => $val) {
        if ($k === 'pass') {
            $val = getPasswordHash($val);
        }
        $string .= $k . ': ' . $val . PHP_EOL;
    }
    $string .= '===============' . PHP_EOL;

    $save = file_put_contents('form.txt', $string, FILE_APPEND);
    return $save;
}
$request = $_REQUEST;
print_r($request);

?>
<form method="post">
    <input placeholder="Имя" name="name" type="text">
    <input placeholder="Фамилия" name="sname" type="text">
    <input placeholder="Возраст" name="age" type="text">
    <input placeholder="Пароль" name="pass" type="password">
    <input type="submit" value="Отправить">
</form>








