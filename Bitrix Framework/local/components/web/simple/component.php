<?php
//
//echo "<pre>"; print_r($arParams); echo "</pre>";

$desc =[
    '#f00'=>'red',
    '#0f0'=>'green'
];

    $paramColor = $arParams['COLOR'];

    if(array_key_exists($paramColor,$desc)){
        $colorName = $desc[$paramColor];
    }else{
        $colorName ='fdsfds';
    }
    $arrResult['COLOR_NAME'] = $colorName;
    $this->IncludeComponentTemplate();
