<?php

class genForm
{
    protected $html = "";
    protected $action = '';
    protected $method = '';

    public function __construct($action, $method)
    {
        $this->action = $action;
        $this->method = $method;
    }

    public function createInput($type)
    {
        $input = '<input type="' . $type . '">';
        $this->html.=$input;
    }

    public function getForm()
    {
        $form = '<form method="' . $this->method . 'action="' . $this->action . '">' . $this->html . '</form>';
        echo $form;
    }

}