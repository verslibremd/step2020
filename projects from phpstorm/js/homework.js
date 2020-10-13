/*//циклы
/!*
//вывести числа от 4 до 400 на экран
let i = 3;
while (i<400){
    i++;
    document.write(i + "<br>");
}
  //for (let i=4; i<=400; i++){
    //document.write(i + "<br>");
*!/

/!*
//вывести числа в последовательности 4 7 10 13;

/!*
let x = 1;
while (x<13){
    x+=3;
    alert(x);
}
*!/

/!*
for (let x = 4; x < 14; x = x + 3){
    alert(x);
*!/
}
*!/

/!*
//вывести числа 654 653 652 до нуля

let x = 655;
while (x != 0){
    x--;
    document.write(x + "<br>");
}

for (let x = 654; x >= 0; x--){
    document.write(x + "<br>");
}
*!/

/!*
//вывести все годы с 1983 до 2017

/!*
let x = 1982;
while (x<2017){
    x++;
    document.write(x + "<br>");
}
*!/

/!*
for (let x = 1983; x<=2017;x++){
    document.write(x + "<hr>");
}
*!/
*!/

/!*
//вывести числа - 4 -2 0 2 4 6 ... 100

let x = -6;
while (x<100){
    x+=2;
    document.write(x + "<br>");
}


for (let x = -4; x<=100; x+=2){
    document.write(x + "<br>");
}
*!/

/!*
// с помощью цикла напечатайте таблицу умножения на 7 от 1 до 9

    for (let y = 1; y<=9; y++){
        let x = 7;
        document.write(x + " * " + y + " = " + x * y + "<br>");
    }*!/

/!*
// найдите сумму чисел от 0 до 100 (включительно)

/!*
let x = 0;
let y = 100;
let z = x;
while (x<y){
    z += ++x;
}alert(z);
*!/
*!/

/!*
// вывести с помощью цикла коды спецсимволов от 1000 до 2000. Спецсимвол получается комбинацией &#число;
//  например : &#1222;

for (let x = 1000; x<=10000; x++){
    document.write("&#" + x + " ");
}*!/

/!*!//При помощи цикла for выведите чётные числа от 2 до 10

for (let i=2; i<=10; i++){
    if (i%2 != 0) continue;
        alert(i);
}*!/

/!*!//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
/!*for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}*!/

let i = 0;
while (i<3 ){
    alert( `number ${i}!` );
    i++;
}*!/

/!*!//Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
//Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

  /!*  let i = prompt("введите число больше 100","101");
    let x = i;
    while (true){
        if (i<100) {
            x = prompt("введите число больше 100","101");
        }
        else {
        break;
        }
    }*!/

   /!* let i;
    do {
        i = prompt("введите число больше 100","101");
    } while (i<=100 && i);*!/!*!/

/!*
//Вывести простые числа
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Для n = 10 результат должен быть 2,3,5,7.
//P.S. Код также должен легко модифицироваться для любых других интервалов.

n = 10;

nextDel:
for (let i = 2; i<=n; i++){
    for (j = 2; j<i; j++){
        if (i%j == 0) continue nextDel;
    }
    document.write(i + "<hr>");
}
*!/

/!*
/!*1. Напишите скрипт, который запрашивает у пользо-
вателя число N и выводит все четные числа от 2 до N
или N-1, если N нечетное. Например: ввод 10, вывод
2 4 6 8 10; ввод 7, вывод 2 4 6.*!/

let x = parseInt(prompt("введите число","10"));
let y = 0;
while (y<x){
    y++;
    if (y%2 == 0){
        alert(y);
    }
}*!/

/!*
/!*2. Напишите скрипт, который запрашивает у пользова-
теля число N и выводит все нечетные числа от N (или
N-1, если N четное) до 1 в порядке убывания. Напри-
мер, ввод 7, вывод 7 5 3 1; ввод 10, вывод 9 7 5 3 1.*!/

let x = parseInt(prompt("num","10"));
let y = x;

while (y<=x){
    y--;
    if (y%2 != 0){
        alert(y);
    }else if (y==0) break;
}*!/

/!*!/!*3. Напишите скрипт, который запрашивает у пользова-
теля число N и выводит все числа, на которые делится
N, включая число 1 (примеры: ввод N=10, вывод 1, 2,
    5; ввод 11, вывод 1).*!/

let x = parseInt(prompt("num","10"));
let y = 0;

while (y<=x){
    y++;
    if(x%y == 0){
        document.write(y + "<br>");
    }
}*!/

/!*
/!*4. Напишите скрипт, который принимает от пользо-
вателя величину годовой депозитной ставки (в про-
центах) и выводит количество лет, по прошествии
которых вклад увеличится вдвое.*!/

let deposit = +prompt("депозитная ставка");
let d = deposit / 100;
let age = 0 ;
let sum = 100;
while (sum < 200){
    age++
    sum+= sum*d;
    document.write(age);
}*!/

/!*
/!*5. Напишите скрипт, который выводит ровно 10 слу-
чайных чисел из диапазона 1–20, кроме тех, которые
делятся на 4.*!/

let i = 0;
do {
    let rnd = Math.round(Math.random()*19)+1;
    if (rnd % 4 == 0) continue;
    i++;
    document.write(rnd + "<br>");
}while (i<10)*!/

/!*6. Из-за утечки из бака охлаждения ежедневно вытекает
10% налитой воды. При объеме воды менее 10 литров
возникает аварийная ситуация. Составьте програм-
му, которая запрашивает у пользователя первона-
чальный объем воды и рассчитывает, на сколько дней
работы этого хватит.*!/*/

/*//функция
/!*!/!*1. Создайте функцию sayError(), которая будет выводить (при помощи диалогового окна alert)
сообщение с текстом «Some error occurred!».*!/
        function sayError() {
            alert("Some error occurred!");
        }
        sayError();*!/
/!*
/!*2. Создайте функцию showError(x), которая будет выводить (при помощи диалогового окна alert)
сообщение с текстом «Error X occurred!», где Х — текст из аргумента функции
(например, вызов showError(‘Out of memory’) должен вывести сообщение «Error Out of memory occurred!»).   *!/

    function sayError(x) {
        alert("Error " + x + " occurred!");
    }
    sayError("Out of memory");
*!/
/!*
/!*3. Создайте функцию createHeaders(N), которая создаст на странице N заголовков второго уровня (<h2>)
с надписями Header1, Header2 … HeaderN.*!/

    function createHeaders(n) {
        for (let i = 1; i<=n; i++){
            document.write("<h2> Header" + i);
        }
    }
    n = parseInt(prompt("число"));
    createHeaders(n)
*!/
/!*!/!*4. Создайте функцию checkPassword(x), которая вернет значение true, если в качестве аргумента в нее будет
передан допустимый пароль (одно из значений «Step», «Web» или «JavaScript»). Иначе функция должна вернуть false.*!/

    function checkPassword(x) {
        if (x == "Step" || x == "Web" || x == "JavaScript"){
            return alert("true");
        }else {
            return alert("false");
        }
    }
    x = prompt("пароль");
    checkPassword(x);*!/
/!*!/!*5. Создайте функцию определения знака числа sign(x), которая вернет значение –1, если аргумент «х» — от-
рицательное число, 1 — если положительное, 0 — если аргумент «х» равен нулю.*!/
    function sign(x) {
        if (x<0){
            return alert("-1");
        }else if (x == 0){
            return alert("0");
        }else if(x>0){
            return alert(1);
        }
    }
    x = parseInt(prompt("число"));
    sign(x);*!/
/!*!/!*6. Предложите имя (согласно правилам именования) и создайте функцию, которая будет возвращать
названия дней недели по их номеру: 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday.*!/

    function getNameOfDay(x) {
        switch (x) {
            case 0:
                return alert("Sunday");
                break;
            case 1:
                return alert("Monday");
                break;
            case 2:
                return alert("Tuesday");
                break;
            case 3:
                return alert("Wednesday");
                break;
            case 4:
                return alert("Thursday");
                break;
            case 5:
                return alert("Friday");
                break;
            case 6:
                return alert("Saturday");
                break;
            default:
                return alert( "Воскресенья и других дней кроме указанных не существует" );
        }
    }

    x = +prompt("цифра");
    getNameOfDay(x);*!/

/!*!//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

    function getMin(a,b) {
        if (a<b) return a;
        else return b;
    }
    alert(getMin(2,5));
    alert(getMin(3,-1));
    alert(getMin(1,1));*!/
/!*!//Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).P.S.
// В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

let x = parseInt(prompt("число"));
let n = parseInt(prompt("степень"));

function pow(x,n) {
    let result = 1;
    while (n>=1){
        result*= x;
        n--;
    }
    return result;
}
alert(pow(x,n));*!/*/

//объекты

/*/!*Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.*!/

 let user = {};
 user.name = "John";
 user.surname = "Smith";
 user.name = "Pete";
 delete user.name;*/

/*
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let obj = {};

function isEmpty(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}
alert(isEmpty(obj));
obj.name = "Dima";
alert(isEmpty(obj));
*/

/*//Сумма свойств объекта

//У нас есть объект, в котором хранятся зарплаты нашей команды:
/!*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
*!/
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390.
//Если объект salaries пуст, то результат должен быть 0.

/!* мое решение, не гибкое
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getSum(salaries) {
    let sum = 0;

    for (let key in salaries){
        return sum = salaries.John + salaries.Ann + salaries.Pete;
    }
    return 0;
}
alert(getSum(salaries));*!/

/!* нормальное решение
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum); // 390*!/*/

/*//Умножаем все числовые свойства на 2
//Создайте функцию multiplyNumeric(obj),
// которая умножает все числовые свойства объекта obj на 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj){
       if (typeof obj[key] == "number"){
        obj[key] *= 2;
       }
    }
}
multiplyNumeric(menu);
alert(menu.width);
alert(menu.height);*/

//Массивы

/*// сумма элементов массива
let arr = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i<arr.length; i++){
    sum+=arr[i];
}
//alert(sum);*/

/*// содержимое массива
let arr2 = [33,"sun",12,"planet"];

for(let i = 0;i<arr2.length;i++){
   // alert(arr2[i]);
}*/

/*//новое значение по указанному индексу
let arr55 = [1,2,3];

function naW(arr,index,newValue) {      //функция записывает новое значение по указанному индексу
    arr[index] = newValue;
}

//alert(arr55);

naW(arr55,0,0);
alert(arr55);
*/

/*// поиск элемента в массиве и возврат его индекса
let arr = [1,2,3,4,5];

let sea = arr.indexOf(5);
//alert(sea);//4

sea = arr.indexOf(0);
//alert(sea);//-1 (не найдем)

let arrD = [1,2,3,4,5,6,7,9,0,8];
let index= arrD.lastIndexOf(8);
alert(index);

*/

/*//сколько раз некоторое искомое значение встречается в массиве.

let arr6 = [12,45,-3,82,12,78,12];
// счетчик для подсчета количества раз вхождения искомого значения в массив
let counter = 0;
// искать будем значение 12
let index = arr6.indexOf(12);
while(index != -1){
    counter++;
// двигаемся дальше по массиву за счет изменения индекса на значение индекс+1
    index = arr6.indexOf(12,index+1);
}
// на экране 3
alert(counter);


let arrD = [1,2,3,4,5,6,7,8,8,9,8,8];
let index = arrD.indexOf(8);
let i = 0;
while (index != -1){
    i++;
    index = arrD.indexOf(8,index+1);
}
alert(i);


let arrD = [12,45,-3,82,12,78,12];
let counter = 0;
let index = arrD.lastIndexOf(12);
while(index != -1){
    counter++;
// мы проверяем на ноль так как ниже начинаем с index-1
//при 0 мы получим старт -1
// для метода lastIndexOf отрицательный индекс
// означает искать с конца массива
    if(index == 0)
        break;
// двигаемся дальше по массиву за счет изменения индекса на значение индекс-1
    index = arrD.lastIndexOf(12,index-1);
}
// на экране 3
alert(counter);

*/

/*
//сортировка
/!*let arr = [10,1,3,33,6];
arr.sort();

//alert(arr);
// 1 10 3 33 6*!/

/!*!//сортировка массива по возрастанию
function compareFunc(a,b){
    if (a>b) {
        return 1;
    }
    else if (b>a) {
        return -1;
    }
    else {
        return 0;
    }
}
//let arr = [10,1,3,33,6];
// 1 3 6 10 33
//alert(arr.sort(compareFunc));*!/

/!*
//сортировка по убыванию
function compareFunc(a,b){
    if(a>b) return -1;
    else if(b>a) return 1;
    else return 0;
}
let arr = [10,1,3,33,6];

// 33 10 6 3 1
arr.sort(compareFunc);
alert(arr);*!/

/!*let a = [1,66,7,3,23,0];
a.sort();
//alert(a);*!/

/!*function compareN(a,b) {
    if (a>b) return 1;
    else if (a<b) return -1;
    else return 0
}
a.sort(compareN);
//alert(a);*!/

/!*
function compareN(a,b) {
    if (a>b) return -1;
    else if (a<b) return 1;
    else return 0;
}
a.sort(compareN);
alert(a);*!/
*/

/*//Операции с массивами
//Давайте произведём 5 операций с массивом.

//Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

let styles =["Джаз","Блюз"];
styles.push("Рок-н-ролл");
styles[1] = "Классика"; // styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп","Рэгги");
alert(styles);*/



//Строки

/*//Пример поиска значения в строке
var str = "earth and sun";

var index = str.indexOf("sun");
alert(index);

index = str.indexOf("moon");
alert(index);*/

/* сколько раз слово встречается в строке
var str = "test it is test sun test no";
var counter = 0;
var wordToFind = "test";
var index = str.indexOf(wordToFind);

while(index != -1){
    counter++;
    index = str.indexOf(wordToFind,index+1);
}

// 3
alert(counter);*/

