<?php


namespace Eshop;


class Order
{

    protected $db = null;

    public function __construct()
    {
        $this->db = new Db();
    }

    public function getProductInCart()
    {
        $query = "SELECT products.name, in_cart.quantity, products.price 
        FROM `in_cart`
        INNER JOIN products ON products.id = in_cart.product_id";

        $result = $this->db->query($query);
        $return = $result->fetch_all(MYSQLI_ASSOC);
        //var_dump($return);
    }


/*
 SELECT products.name, in_cart.quantity, products.price
FROM in_cart
INNER JOIN products ON products.id = in_cart.product_id
*/

}