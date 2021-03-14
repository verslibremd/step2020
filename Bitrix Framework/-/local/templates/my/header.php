<?php
global $APPLICATION;
?>

<!doctype html>
<html lang="en">
    <head>
        <? $APPLICATION->ShowHead(); ?>
        <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/style/my_style.css">
    </head>
    <body>
    <div id="panel"><? $APPLICATION->ShowPanel(); ?></div>
    <header>
        <h1>хедер</h1>
    </header>

