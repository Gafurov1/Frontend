<?php
/*$page=file_get_contents('http://ddred.ru/users.php');
$date=file_put_contents('jsone.txt',$page);*/
$arr=file_get_contents('jsone.txt');
$file=json_decode($arr,true);
echo '<pre>';
print_r($file);
$family=[];
$name =array_column($file,'name');
foreach ($name as $value){
        
}
print_r($name);