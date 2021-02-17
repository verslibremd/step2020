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

    public function addOrder($n,$s, $c, $p, $m)
    {
        $query = "INSERT INTO {$this->orderTable} (`name`, `surname`, `city`, `phone`, `mail`) VALUES ('{$n}','{$s}','{$c}','{$p}','{$m}')";
        $result = $this->db->query($query);

        return $result;
    }

}