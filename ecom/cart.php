<?php
require('vendor/autoload.php');

$objCart = new \Eshop\Cart(1);
$cartData = $objCart->getCartData();
//echo "<pre>"; print_r($cartData); echo "</pre>";

$objProd = new \Eshop\Product();
$prodData = $objProd->getProducts();
//echo "<pre>"; print_r($prodData); echo "</pre>";

?>



<!--Добавление товара-->

<table border="1" style="border-color: blue">
    <thead>
        <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Добавить</th>
        </tr>
    </thead>

    <tbody>

    <? foreach ($prodData as $items): ?>
        <tr data-recId="<?=$items['id']?>">
            <td><?=$items['name'] ?></td>
            <td>
                <input type="button" class="inc" value="+">
                <div class="counter" style="display: inline">0</div>
                <input type="button" class="dec" value="-">
            </td>
            <td><?=$items['price']?></td>
            <td><button class="add-record">Добавить</button></td>
        </tr>
    <? endforeach; ?>
    </tbody>
</table>

<script>

    let counter = document.querySelector('.counter');
    let dataAtr = document.querySelector('[data-count]');

    let inc = document.querySelectorAll('.inc');
    inc.forEach(function (elemInc) {
        elemInc.addEventListener('click',function (e) {
            let curVal = counter.innerHTML;
            let newValue = Number(curVal) + 1;
            counter.innerHTML = newValue;
        });
    });


    let dec = document.querySelectorAll('.dec');
    dec.forEach(function (elemDec) {
        elemDec.addEventListener('click',function (e) {
            let curVal = counter.innerHTML;
            let newValue = Number(curVal) - 1;
            counter.innerHTML = newValue;

            if (counter.innerHTML < 0){
                counter.innerHTML = "0";
            }
        });
    });

    let addButtons = document.querySelectorAll('.add-record');
    addButtons.forEach(function (elemButtons) {
        elemButtons.addEventListener('click', function (e) {
            let parentsTr = this.closest('tr');
            let recordsId = parentsTr.dataset.recid;
            let amt = counter.innerHTML;
            console.log(parentsTr);
            console.log(recordsId);
            //console.log(coll)

            let param = {
                product_id: recordsId,
                quantity: amt,
                method: 'addCartProduct'
            };
            let response = fetch('handle.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(param)
            });
        });
    });

    /*    id.addEventListener('click',function (event) {
        let evTar = event.target;
        let curVal = counter.innerHTML;

        if (evTar === inc){
           let newValue = Number(curVal) + 1;
            counter.innerHTML = newValue;
        }
        else{
            newValue = Number(curVal) - 1;
            counter.innerHTML = newValue;
        }

    });*/
</script>






















<!--Удаление товара-->
<table>
    <thead>
    <tr>
        <th>Название</th>
        <th>Кол-во</th>
        <th>Цена</th>
        <th>Удалить</th>
    </tr>
    </thead>
    <tbody>

    <? foreach ($cartData['products'] as $item): ?>
        <tr data-recordId="<?=$item['rid']?>">
            <td><?= $item['name'] ?></td>
            <td>
                <input name="per" type="button" class="decs" value="-">
                <span class="counts"><?= $item['quantity'] ?></span>
                <input name="per" type="button" class="incs" value="+">
            </td>
            <td><?=$item['price']?></td>
            <td><button class="delete-record">Удалить</button></td>
        </tr>
    <? endforeach; ?>
    </tbody>
</table>


<div style="font-size: 18px">
    Итоговая цена: <span class="total-data"><?=$cartData['total_price']?></span>
</div>
<script>

   let counters = document.querySelector('.counts');
    let but = document.getElementsByName('per');
    but.forEach(function (ee) {
        ee.addEventListener('click', function (e) {
            let parentTr = this.closest('tr');
            let rec = parentTr.dataset.recordid;
            let ass = Number(counters.innerHTML) + 1 ;
            //console.log(ass);
            //console.log(rec + "это айди");


            let par = {
                prod: rec,
                col: ass,
                method: 'per'
            };
            let response = fetch('handle.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(par)
            })
        });
    })


    let incs = document.querySelectorAll('.incs');
    incs.forEach(function (elemInc) {
        elemInc.addEventListener('click',function (e) {
            let curVal = counters.innerHTML;
            let newValue = Number(curVal) + 1;
            counters.innerHTML = newValue;
        });
    });


    let decs = document.querySelectorAll('.decs');
    decs.forEach(function (elemDec) {
        elemDec.addEventListener('click',function (e) {
            let curVal = counters.innerHTML;
            let newValue = Number(curVal) - 1;
            counters.innerHTML = newValue;

            if (counters.innerHTML < 0){
                counters.innerHTML = "0";
            }
        });
    });
    

    let deleteButtons = document.querySelectorAll('.delete-record');
    deleteButtons.forEach(function (elemButton) {
        elemButton.addEventListener('click', function (e) {
            let parentTr = this.closest('tr');
            let recordId = parentTr.dataset.recordid;
            console.log(recordId);
            let params = {
                id: recordId,
                method: 'deleteCartProduct'
            };
            let response = fetch('handle.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(params)
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                let totalData = document.querySelector('.total-data').innerHTML = data.totalPrice;

                parentTr.remove();
            });

        });
    });
</script>
