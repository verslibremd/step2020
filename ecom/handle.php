<?php
require ('vendor/autoload.php');
$request = json_decode(file_get_contents('php://input'), 1);

if (empty($request)) {
    $request = $_REQUEST;

    if (!empty($_FILES) && array_key_exists('file_img', $_FILES)) {
        $request['file'] = $_FILES['file_img'];
    }
}
//var_dump($_FILES);
//var_dump($request);

$obj = new \Eshop\Product();



if ($request['method'] == 'update')
{
    try {
        $obj->updateProduct($request['id'], $request);

    }
    catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}
elseif ($request['method'] == 'add') {
    $obj->addProduct($request);
}
elseif ($request['method'] == 'delete')
{
    $obj->deleteProduct($request['id']);
}
elseif ($request['method'] == 'getProduct')
{

    $objData = $obj->getProducts(["*"],['id'=>$request['id']]);
    echo json_encode($objData);
}
elseif ($request['method'] == 'deleteCartProduct') {
    $objCart = new \Eshop\Cart(1);
    $resultDeleteProduct = $objCart->deleteCartProduct($request['id']);
    $getCurrentCart = $objCart->getCartData();
    echo json_encode(['result' => $resultDeleteProduct, 'totalPrice' => $getCurrentCart['total_price']]);
}
elseif ($request['method'] == 'addCartProduct') {
    $objAdd = new \Eshop\Cart(1);
    $resultAddProduct = $objAdd->add($request["product_id"],$request["quantity"]);
    $getRes = $objAdd->getCartData();
}
elseif ($request['method'] == 'per') {
    $objA = new \Eshop\Cart(1);
    $get = $objA->updateCart($request["prod"], $request["col"]);
    $getRes = $objA->getCartData();
    echo json_encode(['result' => $get, 'totalP' => $getRes['total_price']]);
}

