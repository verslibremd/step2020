<?php
require ('HtmlBuilder.php');

$attributes = [
    'class' => 'mu-class',
    'id' => 'first'
];

$obj = new HtmlBuilder();
$obj->createElement('h2','title2',$attributes);

?>

<div>
    <div>
        <h1>Static title</h1>
        <? $obj->getHtml()?>
    </div>
</div>
