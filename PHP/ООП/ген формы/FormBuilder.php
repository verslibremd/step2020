<?php


class FormBuilder
{
    protected $method = '';
    protected $action = '';
    protected $html = '';

    public function __construct($method, $action)
    {
        $this->method = $method;
        $this->action = $action;
    }

    public function createInput($type)
    {
        $input = '<input type="' . $type . '">';
        $this->html .= $input;
    }

    public function createTextarea()
    {
        $this->html .= '<textarea></textarea>';
    }

    public function createSelect($options = [])
    {
        $select = '<select>';

        foreach ($options as $key => $value) {
            $select .= '<option value="' . $key . '">' . $value . '</option>';
        }

        $select .= '</select>';

        $this->html .= $select;
    }

    public function getHtml()
    {
        echo $this->html;
    }

    public function getForm()
    {
        $form = '<form method="'. $this->method . '" action="'. $this->action .  '">'. $this->html. '</form>';
        echo $form;
    }
}