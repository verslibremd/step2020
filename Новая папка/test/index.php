<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
  global $APPLICATION;
  $APPLICATION->IncludeComponent('web:simple',
      "comp",
      ['COLOR'=>'#f00','SIZE' => '1000px'],
      false
  );
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>

