<?php
// HTML builder
require ('FormBuilder.php');
$obj = new FormBuilder('GET', 'index.php');
$obj->createInput('text');
$opt = [1 => 'Text1', 2 => 'Text2', 3 => 'Text3', 4 => 'asdasdasd'];
$obj->createSelect($opt);
$obj->createInput('submit');
//$obj->getHtml();
$obj->getForm();

$obj2 = new FormBuilder('POST', 'index2.php');
$obj2->createTextarea();
$obj2->createSelect(['1' => '1', '2' => '2']);
$obj2->getForm();

?>



