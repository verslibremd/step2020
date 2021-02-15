<?php
require('vendor/autoload.php');

$obj = new \Eshop\Order();
$orderData = $obj->getProductInCart();
echo "<pre>"; print_r($orderData); echo "</pre>";

?>
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
    <? foreach($orderData as $it): ?>
        <tr>
            <td><?=$it['name'] ?></td>
        </tr>
    <? endforeach; ?>
    </tbody>
</table>






<!--
SELECT products.name, in_cart.quantity, products.price
FROM in_cart
INNER JOIN products ON products.id = in_cart.product_id
-->