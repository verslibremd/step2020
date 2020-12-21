<?php
/*//1346

//array_reverse
$b = [];
for ($i=0;$i<10;$i++) {
    $b[] = rand(10,100);
}

$c = array_reverse($b);
*/?><!--
<p>
<?php /*foreach ($b as $key => $value):*/?>
<span><?/*=$value*/?></span>
<?php /*endforeach*/?>
</p>
<p>
<?php /*foreach ($c as $key => $value):*/?>
<span><?/*=$value*/?></span>
<?php /*endforeach*/?>
</p>-->

<?php
/*$path = $_SERVER['DOCUMENT_ROOT'] . '/img';

$bannersPath = [];
$ij = scandir($path);

foreach ($ij as $item) {
    if ($item !== '.' && $item !== '..') {
        $bannersPath[] = $item;
    }
}
var_dump($bannersPath);
$randomIndex = rand(0, count($bannersPath) - 1);
var_dump($randomIndex);
$currentBanner = $bannersPath[$randomIndex];
*/?>

<!--<img src="img/<?/*=$currentBanner*/?>">-->

<?php

//array_fill_keys — Создает массив и заполняет его значениями с определенными ключами
//range — Создает массив, содержащий диапазон элементов

$zz = [];
$ss = [];


for ($i = 0; $i<5; $i++){
    $zz[] = rand(10,100);
}



$a = array_fill(0, 5, $zz);

echo "<pre>";print_r($a);echo "</pre>";



