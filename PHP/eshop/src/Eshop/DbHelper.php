<?php


namespace Eshop;


class DbHelper
{
    protected $folderPath = 'Db/';
    protected $data = "";
    protected $file = "";
    protected $saveResult = [];
    public function __construct($entityName)
    {
        $path = realpath($this->folderPath . $entityName . '.json');
        if (file_exists($path)){
            $fileContent = file_get_contents($path);
            if (empty($fileContent)){
                $fileData = [];
            }else{
                $fileData = json_decode(file_get_contents($path),true) ;
            }
            if (is_array($fileData)){
                $this->data = $fileData;
            }
            else{
                throw new \Exception('ошибка декодирования');
            }
            $this->file = $path;

        }
        else{
            throw new \Exception('такой файл не найден');
        }
    }
    public function getData(){
        return $this->data;
    }
    public function addDate($info){
        if (is_array($info) && !empty($info)){
            $this->saveResult[] = $info;
        }

    }
    public function save()
    {
        $array = array_merge($this->data,$this->saveResult);
        file_put_contents($this->file,json_encode($array));
        echo "<pre>";
        print_r($array);
        echo "</pre>";
    }

}