<?php
/*$page=file_get_contents('http://ddred.ru/users.php');
$date=file_put_contents('jsone.txt',$page);*/
$arr=file_get_contents('./jsone.txt');
$file=json_decode($arr,true);
echo '<pre>';
print_r($file);
echo '<pre>';
$family=[];
$name =array_column($file,'name');
function getNamesakes($file, $full)
{
    // вбиваем все фамилии в массив
    $surnames = [];
    foreach ($file as $k => $val) {
        $name = $val["name"];
        if ($full) {
            // если требуется найти полных тёзок, то вбиваем всё имя целиком
            $surnames[] = $name;
        } else {
            $surnames[] = stristr($name, " ");
        }
    }

    // считаем кол-во вхождений каждой фамилии
    $counter = [];
    foreach ($surnames as $k => $val) {
        if (array_key_exists($val, $counter)) {
            $counter[$val]++;
        } else {
            $counter[$val] = 1;
        }
    }
    // выводим результат
    $namesakes = [];
    foreach ($counter as $k => $val) {
        if ($val > 1) $namesakes[] = $k;
    }
    if (!$full) print_r($namesakes);
    return $namesakes;
}
getNamesakes($file, false);

