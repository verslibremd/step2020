<?php
/*
1. Обраться к странице http://ddred.ru/users.php получить данные и сохранить себе в локальный файлик user.json
Далее будем работать только с этим файлом
2. На основе данных из файла нужно создать функции для следующей статистики
- написать функцию, которая возвращает всех однофамильцев
- написать функцию, которая находит полных тезок
- написать функцию, которая возвращает всех пользователей, которые старше 31 года
- написать функцию, которая вычисляет средний возраст пользователей
- написать функцию, которая определяет сколько в компании сотрудников с одинаковой должностью
- написать функцию рандомного увольнения - если возраст кратен 3 или его зовут Bob Proper. Т.е. функция должна вернуть массив без сотрудников, которые подверглись увольнению
- написать функцию, которая выдает зарплату сотруднику.
Зарплата считается следующим образом должности 'Cleaner', 'Director', 'Clerk'  (случайное число от 1000 до 3000 умножить на 3.2 минус возраст сотрудника) , все остальные должности (случайное число от 1000 до 3000 умножить на 0.98 минус возраст сотрудника). На выходе должен получиться массив, в котором для каждого пользователя будет указана зп
Значение зп округляем до целого числа вниз.
*/


//$uG = file_get_contents('http://ddred.ru/users.php');
//$save = file_put_contents('user.json', $uG, FILE_APPEND);

$uA = file_get_contents('user.json');
$arrUJ = json_decode($uA,true);

function getNamesakes ($array){
    $countSecondName = [];
    foreach ($array as $k => $value){
        foreach ($value as $kk => $item){
            if ($kk === "name"){
                $a = explode (" ", $item);
                $secondName = $a[1];
                $countSecondName[$secondName] += 1;
            }
        }
    }

    $lastNameArr = [];
    foreach ($countSecondName as $keyP => $vP){
        if ($vP > 1){
            $lastNameArr[] = $keyP;
        }
    }
    foreach ($lastNameArr as $itemOver){
            return $itemOver . "<br>";
    }

}

//getNamesakes ($arrUJ);

    $arrName = [];
    foreach ($arrUJ as $k => $value){
        foreach ($value as $kk => $item) {
            if ($kk == "name"){
                $arrName[] = $item;
            }
        }
    }
    echo "<pre>";print_r($arrName);echo "</pre>";







