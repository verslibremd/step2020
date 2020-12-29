<?php
require ('genForm.php');

$obj = new genForm("int.php","POST");
$obj->createInput("password");
$obj->getForm();
