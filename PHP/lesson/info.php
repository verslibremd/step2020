<?php

/* Таблица умножения
for ($i=1; $i<=10; $i++){
    for ($j=1; $j<=10; $j++){
        $result = $i * $j;
        $resInWind = $i . '*' . $j . '=' . $result . "<br>";
        echo $resInWind;
    }
    echo "<hr>";
}
*/

//В банке открыли депозит под 20% годовых. На депозит положили 300 единиц
// Какая сумма единиц будет через 20 лет ?
// Какая будет прибыль ?
// Вывести в таблице сумму и прибыль за каждый год.

$dep = 300;
$pro = 0.2;
$y = 20;
$arrayEnd = [];

for ($i=1; $i<=$y; $i++){
    $p = $dep * $pro;
    //echo $p . "<br>";
    $dep += $p;
    //echo $dep . "<br>";
    $arrayEnd[] = $dep;
}
?>

<table>
    <tbody>
    <tr class="name" style="background-color: red;">
        <th>Год</th>
        <th>Start</th>
        <th>End</th>
        <th>Profit</th>
    </tr>
    <?php foreach ($arrayEnd as  $key => $value):?>
    <tr style="background-color: gray; color: white"></tr>
        <td><?=$key +1?></td>
        <td><?=round($value / 1.2, 2)?></td>
        <td><?=round($value, 2)?></td>
        <td><?=round($value - $value / 1.2,2)?></td>
    </tbody>
    <?php endforeach?>
</table>


