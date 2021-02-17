<?php


namespace Eshop;


class Order
{

    protected $orderTable = 'orders';
    protected $db = null;

    public function __construct()
    {
        $this->db = new Db();
    }

    public function addOrder($array)
    {
        $query = "INSERT INTO {$this->orderTable} (`name`, `surname`, `adress`, `phone`, `mail`) VALUES ('{$array['name']}','{$array['surname']}','{$array['adress']}','{$array['phone']}','{$array['mail']}')";
        $result = $this->db->query($query);

        return $result;
    }





}