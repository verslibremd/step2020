<?php
class FormBuilder
{
    public $user = [];

    public $name = " ";
    public $surname = " ";
    public function addUser($name,$surname)
    {
        $this->user[] =  $name . " ". $surname;
    }

    public function shutUser ()
    {
       shuffle($this->user);
        return $this->user;
    }
}
