<?php
require ('FormBuilder.php');


$obj = new FormBuilder();
$obj->addUser("Dima","mao");
$obj->addUser("ima","ao");
$obj->addUser("Di","mao");
$obj->addUser("ma","ma");
$team = $obj->shutUser();
var_dump($team);
