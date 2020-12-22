<?php
//1346
//1
$arr = [];
for ($i=0;$i<10;$i++) {
    $arr[] = rand(10,100);
}
$arrRev = array_reverse($arr);
?>

<p>
<?php foreach ($arr as $key => $value):?>
<span><?=$value?></span>
<?php endforeach?>
</p>

<p>
<?php foreach ($arrRev as $key => $value):?>
<span><?=$value?></span>
<?php endforeach?>
</p>

<?php
//3
$path = $_SERVER['DOCUMENT_ROOT'] . '/img';

$bannersPath = [];
$bann = scandir($path);

foreach ($bann as $item) {
    if ($item !== '.' && $item !== '..') {
        $bannersPath[] = $item;
    }
}
var_dump($bannersPath);
$randomIndex = rand(0, count($bannersPath) - 1);
var_dump($randomIndex);
$currentBanner = $bannersPath[$randomIndex];
?>

<img src="img/<?=$currentBanner?>">


<?php
//4

$a = array_fill(0,5, array());

for ($i = 0; $i < count($a); $i++){
    for ($j = 0; $j<5; $j++){
        $a[$i][$j] = rand(10,100);
    }
}

//echo "<pre>";print_r($a);echo "</pre>";

$aa = $a;
for ($i = 0; $i < count($aa); $i++){
    for ($j = 0; $j<count($i); $j++){
        asort($aa[$i],SORT_NUMERIC);
    }
}
//echo "<pre>";print_r($aa);echo "</pre>";

?>


<?php foreach ($a as $key => $value):?>
    <?php echo "<br>"?>
    <?php foreach ($value as $item):?>
        <span><?=$item?></span>
    <?php endforeach?>
<?php endforeach?>
<hr>
<?php foreach ($aa as $key => $value):?>
    <?php echo "<br>"?>
    <?php foreach ($value as $item):?>
        <span><?=$item?></span>
    <?php endforeach?>
<?php endforeach?>





