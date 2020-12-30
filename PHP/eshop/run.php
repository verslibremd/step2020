<?php
require ('vendor/autoload.php');
try{
    $obj  = new \Eshop\DbHelper('user');
    $data = $obj->getData();
    echo "<pre>";
    print_r($data);
    echo "</pre>";


    /*$obj->addDate(["a"=>"a","b"=>"b"]);
    $obj->addDate(["e"=>"g","d"=>"z"]);
    $obj->save();*/


}
catch (Exception $e){
    echo $e->getMessage();
}

