<?php
require ('vendor/autoload.php');

$user = 3;
try {
    $obj = new \Eshop\Cart($user);
    //$obj->createCart();
    //$obj->add(3,15);
  //$obj->getCartData();

    //$obj->updateCart(9,1);
}

catch (Exception $e) {
    var_dump($e->getMessage());
}

//$res = $obj->getUserCart();
//echo "<pre>"; print_r($res); echo "</pre>";
