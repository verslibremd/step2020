<?php
/*1. Имеется массив из 10 элементов, структура элемента:
name, company, position. Вывести на экран массив в
следующем формате: «“Name” is working in “Company” as: “position”».*/

$name = array("Дима","Илья","Федя","Вася","Петя","Иван","Андрей","Витя","Леша","Гриша");
$company = array("Леруа","Леруа","Оби","Оби","Оби","кгб","кгб","кгб","фбк","фбр");
$position = array("пивовар","бариста","уборщик","бармен","повар","агент","судья","разработчик","менеджер","хз");

$array = [];

for ($i = 0; $i<count($name); $i++){
    $v['name'] = $name[$i];
    $v['company'] = $company[$i];
    $v['position'] = $position[$i];
    $array[] = $v;
}

//echo "<pre>";print_r($array);echo "</pre>";
?>

<?php foreach ($array as $value):?>
    <p><?echo $value['name'] . " is working in " . $value['company'] . " as : " . $value['position']?></p>
<?php endforeach?>

<?php
/*2. Отфильтровать массив из задания 1 и вывести работников в зависимости от компаний в виде списка.*/

$countCompany = [];
foreach ($array as $k => $v){
    $countCompany[$v['company']][] = $v['name'];
}
//echo "<pre>";print_r($countCompany);echo "</pre>";
?>

<?php foreach ($countCompany as $key => $value): ?>
    <ul>
        <li><?echo $key?></li>
        <?php foreach ($value as $k =>$v): ?>
        <ul>
            <li style="list-style-type: circle"><?echo $v?></li>
        </ul>
        <?php endforeach;?>
    </ul>
<?php endforeach;?>

<?php
/*3. Создать массив из 10 чисел. В первый элемент записать число 1.
Каждое следующее число генерируется случайно и записывается в массив при условии,
если оно больше предыдущего. Результат массива вывести на страницу.*/

$arrayNum = [];

for ($i = 0; $i < 9; $i++) {

    $arrayNum[0] = 1;
    $randomNum = rand(1,100);

    $current = current($arrayNum);
    $next = next($arrayNum);
    $prev = prev($arrayNum);

      if ($randomNum > $prev){
          $arrayNum[] = $current + $randomNum;
      }
}
//echo "<pre>";print_r($arrayNum);echo "</pre>";

?>

<p>
    <?php foreach ($arrayNum as$value):?>
        <span><?=$value?></span>
    <?php endforeach?>
</p>

<?php
/*4. Создать массив из 10 чисел.
Элемент массива: число с плавающей точкой и степень округления.
Заполнить массив, округлить и вывести на страницу.*/

$arrayDouble = [];

$double = array(1.2545, 55.5555, 7.7543, 111.23232, 2.222, 34.5, 123.123, 4.111, 5.5555, 1.111);
$degree = array(2, 2, 0, 3, 2, 0, 3, 3, 2, 1);

for ($i = 0; $i<count($double); $i++){
    $z['double'] = $double[$i];
    $z['degree'] = $degree[$i];

    $arg1 = $double[$i];
    $arg2 = $degree[$i];
    $result = round($arg1,$arg2);
    $z['result'] = $result;

    $arrayDouble[] = $z;
}
//echo "<pre>";print_r($arrayDouble);echo "</pre>";
?>

<?php foreach ($arrayDouble as $value):?>
    <p><?echo $value['double'] . " rounded to " . $value['degree'] . "  : " . $value['result']?></p>
<?php endforeach?>

<?php
/* 5. Создать массив из 5 элементов.
Элементом массива является массив из 5 цифр. Заполнить элементы случайными числами от 10 до 100.
Вывести массив, минимальные значения в каждом столбце выделить красным цветом.
Найти сумму минимальных элементов в каждом столбце и их среднее значение. */

$arrSum = array_fill(0,5, array());

for ($i = 0; $i < count($arrSum); $i++){
    for ($j = 0; $j<5; $j++){
        $arrSum[$i][$j] = rand(10,100);
    }
}

foreach ($array as $key => $value){
        $arrMinVal[] = min($value);
}

function minValue($array){
    $arrMinVal = [];
    foreach ($array as $key => $value){
        $arrMinVal[] = min($value);
    }
    $sum = array_sum($arrMinVal);
    $averageValue = round($sum / count($arrMinVal),0);

    return "Сумма минимальных элементов = "  . $sum . "<br>" . "их среднее значенние = " . $averageValue;
}
?>

<!--Тут есть вопрос 140-41-->
<?php foreach ($arrSum as $value):?>
    <?php echo "<br>"?>
    <?php foreach ($value as $item):?>
        <span><?=$item . " "?></span>
        <?if($item == min($value)):?>
            <span style="color: red"><?=$item?></span>
        <?endif;?>
    <?php endforeach?>
<?php endforeach?>

<p>
    <?=minValue($arrSum)?>
</p>









