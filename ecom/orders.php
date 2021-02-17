<?php
require('vendor/autoload.php');

$obj = new \Eshop\Cart(1);
$cData = $obj->getCartData();

//$cData= $obj->getCartData();
echo "<pre>"; print_r($cData); echo "</pre>";

?>
<style>
    .border-form{
        border-color: blue;
        width: 200px;
    }
    .title{
        font-size: 18px;
        line-height: 5px;
    }
    .inp{
        margin: 5px;
        text-align: center;
    }
    .inp--sub{
        background-color: rgba(107, 121, 198, 0.49);
        height: 30px;
        border: 1px;
        border-radius: 5px;
    }
</style>
<form id="formS" method="post" >
    <fieldset class="border-form">
        <legend class="title">Контактная информация</legend><br>
        <input class="inp" type="text" name="name" placeholder="имя"><br>
        <input class="inp" type="text" name="surname" placeholder="фамилия"><br>
        <input class="inp" type="text" name="adress" placeholder="адрес доставки"><br>
        <input class="inp" type="text" name="phone" placeholder="номер телефона"><br>
        <input class="inp" type="text" name="mail" placeholder="эл.почта"><br>
        <input class="inp inp--sub" name="go" type="submit" value="отправить">
    </fieldset>
</form>

<script>
    let form = document.querySelector('#formS');

   form.onsubmit = function (e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append('method', 'formOrder');

        let response = fetch('handle.php', {
            method: 'POST',
            body: formData
        })
    }
</script>




















<h3>Ваш заказ :</h3>
<table border="1" style="border-color: blue">
    <thead>
    <tr>
        <th>Название</th>
        <th>Количество</th>
        <th>Цена</th>
    </tr>
    </thead>
    <tbody>
    <? foreach ($cData['products'] as $item): ?>
        <tr>
            <td><?=$item['name'] ?></td>
            <td><?=$item['quantity'] ?></td>
            <td><?=$item['price'] ?></td>
        </tr>
    <? endforeach; ?>
    </tbody>
</table>
<div style="font-size: 18px">
    Итоговая цена: <span style="font-weight: bold" class="total-data"><?=$cData['total_price']?></span>
</div>








