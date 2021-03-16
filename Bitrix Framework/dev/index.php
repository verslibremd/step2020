<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

if (CModule::IncludeModule('iblock')) {
    $sort = ['ID' => 'DESC'];
    $filter = ['IBLOCK_ID' => 4];
    $group = false;
    $nav = ['nPageSize' => 10];
    $select = ['ID', 'NAME','PROPERTY_MY_FILE','DETAIL_PICTURE'];

    $get = CIBlockElement::GetList([], $filter, $group, $nav, $select);

    while ($res = $get->Fetch()) {
            echo "<pre>"; print_r($res); echo "</pre>";
    }
}


?>

<form enctype="multipart/form-data" name="my-form" method="post">
    <input type="text" placeholder="имя" name="name"><br>
    <input type="text" placeholder="фамилия" name="surname"><br>
    <input type="file" name="file" ><br>
    <input type="submit" name="sub">
</form>

<?php
$file = $_FILES['file']['name'];
move_uploaded_file($_FILES['file']['tmp_name'], $file);
if(isset($_FILES['file']['name']))
{
    echo "ДА";
}

$el = new CIBlockElement;

$PROPERTY_VALUE = array(
    'name' => $_POST['name'],
    'surname' => $_POST['surname'],
);


//создавался элемент
$arLoadProductArray = Array(
    "IBLOCK_SECTION_ID" => false,
    "IBLOCK_ID"      => 4,
    "NAME"           => 'элемент',
    'PROPERTY_VALUE' => $PROPERTY_VALUE,
);


$ELEMENT_ID = 375;  // код элемента

// новое значение для элемента
$dbr = CIBlockElement::GetList(array(), array("=ID"=>$ELEMENT_ID), false, false, array("IBLOCK_ID"));
if ($dbr_arr = $dbr->Fetch())
{
    $IBLOCK_ID = $dbr_arr["IBLOCK_ID"];
    CIBlockElement::SetPropertyValues($ELEMENT_ID, $IBLOCK_ID, $PROPERTY_VALUE, false);
}

?>






