<?php
class HtmlBuilder
{
    protected $html = "";

    public function __construct()
    {

    }

    protected function addHtml($element)
    {
        $this->html .= $element .PHP_EOL;
    }

    public function createElement($elementName, $content = "", $attr =[])
    {
        $attrString = "";
        if (!empty($attr) && in_array($attr)){
            foreach ($attr as $name => $value){
                $attrString .= $name . '="' . $value . '" ';
            }
        }
        $element = '<' . $elementName . ' '. $attrString . ">" . $content . '</' . $elementName . ">";
        $this->addHtml(html);
    }

    public function getHtml()
    {
        echo $this->html;
    }
}