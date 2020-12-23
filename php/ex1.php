<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/img';

$bannerPath = [];
$x = scandir($path);

foreach ($x as $item) {
    if ($item !== '.' && $item !== '..') {
        $bannerPath[] = $item;
    }
}

$randomIndex = rand(0, count($bannerPath) - 1);
$currentBanner = $bannerPath[$randomIndex];
?>

<img src="img/<?=$currentBanner?>">

<!--1
$arr=[];
for ($i=0; $i<11; $i ++) {
    $arr[] =rand(10,100);
}
print_r($arr);
$reverse=array_reverse($arr);
print_r($reverse);-->
<!--?>-->


