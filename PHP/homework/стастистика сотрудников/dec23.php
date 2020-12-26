<?php

//1.
// Обраться к странице http://ddred.ru/users.php получить данные и сохранить себе в локальный файлик user.json
//Далее будем работать только с этим файлом

//$uG = file_get_contents('http://ddred.ru/users.php');
//$save = file_put_contents('user.json', $uG, FILE_APPEND);

$uA = file_get_contents('user.json');
$arrUJ = json_decode($uA,true);

//2.
// На основе данных из файла нужно создать функции для следующей статистики :

// написать функцию, которая возвращает всех однофамильцев
function getNamesakes ($array){
    $countSecondName = [];
    foreach ($array as $key => $value){
        foreach ($value as $k => $v){
            if ($k == "name"){
                $a = explode (" ", $v);
                $secondName = $a[1];
                $countSecondName[$secondName] += 1;
            }
        }
    }

    $lastNameArr = [];
    foreach ($countSecondName as $k => $v){
        if ($v > 1){
            $lastNameArr[] = $k;
        }
    }
    foreach ($lastNameArr as $v){
            echo $v . "<br>";
    }
}
//getNamesakes ($arrUJ);

//написать функцию, которая находит полных тезок
function cloneNameAndSname ($array){
    $arrName = [];
    foreach ($array as $key => $value){
        foreach ($value as $k => $v) {
            if ($k == "name"){
                $arrName[$v] +=1;
            }
        }
    }
    $lastArr = [];
    foreach ($arrName as $k => $v){
        if ($v > 1){
            $lastArr[] = $k . "<br>";
        }
    }
    foreach ($lastArr as $v){
        echo $v . "<br>";
    }
}
//cloneNameAndSname ($arrUJ);

//написать функцию, которая возвращает всех пользователей, которые старше 31 года
function age($array){
    $arrAge = [];

    foreach ($array as $key => $value){
        foreach ($value as $k => $v){
            if ($k == "age"){
                if ($v > 31){
                    $arrAge[] = $value;
                }
            }
        }
    }
    foreach ($arrAge as $k => $v){
        foreach ($v as $key => $val){
            if ($key === "name"){
                echo $val . ' старше 31 года ' . "<br>";
            }
        }
    }
}
//age($arrUJ);

//написать функцию, которая вычисляет средний возраст пользователей
function averageAge($array){
    $arrAge = [];
    foreach ($array as $key => $value){
        foreach ($value as $k => $v){
            if ($k == "age"){
                $arrAge[] = $v;
            }
        }
    }
    $sum = array_sum($arrAge);
    $length = count($arrAge);
    $averageAge = round($sum / $length,1);
    echo "средний возраст составляет : " . $averageAge;
}
//averageAge($arrUJ);

//написать функцию, которая определяет сколько в компании сотрудников с одинаковой должностью
function samePosition ($array){
    $countSomePosition = [];

    foreach ($array as $key => $value){
        foreach ($value as $k => $v){
            if ($k == "position"){
                $countSomePosition[$v] += 1;
            }
        }
    }

    $numberOfPosts = 0;

    foreach ($countSomePosition as $key => $val){
        echo 'в компании : ' . $val . " " . $key . "<br>";
        if ($val > 1){
            $numberOfPosts +=$val;
        }
    }

    echo '<br>' . 'количество сотрудников с одинаковой должностью : ' .  $numberOfPosts;

}
//samePosition($arrUJ);

//написать функцию рандомного увольнения - если возраст кратен 3 или его зовут Bob Proper.
//Т.е. функция должна вернуть массив без сотрудников, которые подверглись увольнению
//Bob Proper - в моем массиве нет вообще, поэтому Rob
function dismissal($array){
    $luckyOnes = [];
    foreach ($array as $key => $value){
        if ($value['age'] %3 != 0 && $value['name'] != 'Rob Proper'){
            $luckyOnes[] = $value;
        }
    }
    //echo "<pre>";print_r($luckyOnes);echo "</pre>";
    return $luckyOnes;
}
//dismissal($arrUJ);

//- написать функцию, которая выдает зарплату сотруднику.
//Зарплата считается следующим образом :
//должности 'Cleaner', 'Director', 'Clerk'
//(случайное число от 1000 до 3000 умножить на 3.2 минус возраст сотрудника),
//все остальные должности :
//(случайное число от 1000 до 3000 умножить на 0.98 минус возраст сотрудника).
//На выходе должен получиться массив, в котором для каждого пользователя будет указана зп
//Значение зп округляем до целого числа вниз.
function salary ($array){
    $salary = [];
    foreach ($array as $key => $value ){
        if ($value['position'] == 'Cleaner' || $value['position'] == 'Director' || $value['position'] == 'Clerk'){
            $value['salary'] =  round(rand(1000,3000) * 3.2 - $value['age'],0);
            $salary[] = $value;
        }
        else{
            $value['salary'] =  round(rand(1000,3000) * 0.98 - $value['age'],0);
            $salary[] = $value;
        }
    }
    //echo "<pre>";print_r($salary);echo "</pre>";
    return $salary;
}
//salary ($arrUJ);

echo "<pre>";print_r($arrUJ);echo "</pre>";







