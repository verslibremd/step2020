<?php
require ('vendor/autoload.php');

$user = 3;
try {
    $obj = new \Eshop\Order();
    //$obj->createCart();
    //$obj->add(3,15);
  //$obj->getCartData();

    $obj->getProductInCart();
}

catch (Exception $e) {
    var_dump($e->getMessage());
}

//$res = $obj->getUserCart();
//echo "<pre>"; print_r($res); echo "</pre>";
