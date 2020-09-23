//циклы



//while
/*
//вывести # столько раз сколько указал пользователь

let  x = parseInt(prompt("введите число","1"));
while (x>0){
    document.write("#<br>");
    x--;
}

let x = parseInt(prompt("enter the number","1"));
while (x>0) {
    document.write("# <br>");
    x--;
}


*/
/*
//пользователь ввел число, а на экране вывелись все числа от введенного до 0
let  x = parseInt(prompt("введите число","1"));
while (x>=0){
    document.write(x + "<br>");
    x--;
}*/

/*
//запросить число и степень. возвести число в указанную степень и вывести результат
let  x = parseInt(prompt("введите число","1"));
let  y = parseInt(prompt("введите степень","1"));
let z = y;

let result = 1;
while (y>0) {
    result = result * x;
    y--;
}
document.write("число " +x+ " в степени " +z+ " = " + result);
*/

/*
//запросить 2 числа и запросить общие делители
    let  x = parseInt(prompt("введите число","1"));
    let  y = parseInt(prompt("введите число","1"));
    let min = (x>y)? y: x;
    while (min>1) {
        if ((x % min) == 0 && (y % min) == 0){
            document.write("делитель: " + min + "<br>");
    }
            min--;
    }
*/

/*
//посчитать факториал введенного пользователем числа
let  x = parseInt(prompt("введите число","5"));
let number = x;
let result = 1;
while (x>0) {
    result = result*x;
    x--;
}
document.write("факториал числа " + number + " равен " + result);
*/

//Do while

/*
// предлагать пользователю решить пример 2+2*2 до тех пор пока он не решит его правильно
do {
    var x = prompt("решите пример: 2 + 2 * 2 = "); // не работает с let
}while (x != 6);
alert("Браво!!!!");
*/

/*
//делить число 1000 на 2 пока не получится число меньше 50. вывести это число и сколько делений произвели
let x = 1000;
let y = 2;
let count = 0;

do {
  x = x / 2;
  count++;
} while (x>=50);
document.write("число: " + x + ", делений: " + count);
*/


//for

/*

//вывести все числа от 1 до 100, которые кратны указанному пользователем числу.
/!*
//обычное решение
let x = prompt("введите число","10");

for (let i = 1; i <= 100; i++) {
    if( (i % x) == 0 ) {
        document.write(i + "<br>");
    }
}
*!/

/!* //&& i !=x  если не хочу видеть число введенное пользователем
let x = prompt("введите число","10");

for (let i = 1; i <= 100; i++) {
    if( (i % x) == 0 && i !=x ) {
        document.write(i + "<br>");
    }
}
*!/

/!*
// с continue
let x = prompt("введите число","10");
for (let i = 1; i <= 100; i++) {
    if( (i % x) == 0 || i ==x ) {
        continue;
    }
    document.write(i + "<br>");
}

*!/

*/
/*

//вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает min и max значение диапазона.

let  x = parseInt(prompt("введите число 1","10"));
let  y = parseInt(prompt("введите число 2","20"));
let counter = 1;

for (let i = x; i <= y; i++) {
    if ( (counter % 4) == 0 ) {
        document.write(i + "<br>");
    }
    counter++;
}
*/


/*
//запросить число и проверить, простое ли она. простое делиться без остатка только на себя и на 1
let  x = parseInt(prompt("введите число","10"));
let result = true;  // флаг

for (let i = x - 1; i >1; i--){
    if ((x % i) == 0) {
        result = false;
    }
}
alert((result)? "число простое": "число не простое");
*/
/*
// с break
let  x = parseInt(prompt("введите число","10"));
let result = true;  // флаг

for (let i = x - 1; i >1; i--){
    if ((x % i) == 0) {
        result = false;
        break;
    }
}
alert((result)? "число простое": "число не простое");
*/


/*
let month = prompt("введите номер месяца","1");
switch (month) {
    case "1" :
        alert("январь");
        break;
    case "2" :
        alert("февраль");
            break;
    case "3" :
        alert("март");
         break;
    case "4" :
        alert("апрель");
           break;
    case "5" :
        alert("май");
            break;
    case "6" :
        alert("июнь");
           break;
    case "7" :
        alert("июль");
         break;
    case "8" :
        alert("август");
           break;
    case "9" :
        alert("сентябрь");
              break;
    case "10" :
        alert("октябрь");
            break;
    case "11" :
        alert("ноябрь");
           break;
    case "12" :
        alert("декабрь");
         break;
    default:
        alert("неверно введен месяц");
}
*/

/*
let x1 = prompt("введите число 1");
x1 = parseInt(x1);
let x2 = prompt("введите число 2");
x2 = parseInt(x2);
let operator = prompt("введите оператор(+, -,*,/)","+");
switch (operator) {
    case "+" :
        alert("результат" + (x1 + x2));
        break;
    case "-" :
        alert("результат" + (x1 - x2));
        break;
    case "*" :
        alert("результат" + (x1 * x2));
        break;
    case "/" :
    if (x2 == 0){
        alert("делить на ноль нельзя");
    }else{
        alert("результат" + (x1 / x2));
    }
        break;
    default:
        alert("неизвестный оператор");
}
*/



/*      1
const THIS_YEAR = 2020;
let yearOfBirth = prompt("Ваш год рождения");
alert(`Вам ${THIS_YEAR - yearOfBirth} лет!`);
*/


/*
let userVolume = prompt("Укажите объем флеш карты в Gb");
const CONSTANT_VOLUME = 1024;
let fileSize = 820;
alert((userVolume*CONSTANT_VOLUME) / fileSize);
*/


/*
const RUB_USD = 0.013;
const USD_RUB = 75.32;
const RUB_EUR = 0.011;
const EUR_RUB = 89.05;
const USD_EUR = 0.85;
const EUR_USD = 1.18;

let name = prompt( "Валюта","RUB, USD, EUR");
// USD
if (name == "USD") {
    let sum = prompt("Сумма");
    let what = prompt("На какую валюту ?", "RUB, EUR");
    if (what == "RUB") {
        let finalDollRub = sum*USD_RUB;
        let consentFinalDollRub = confirm (`Ваша сумма в рублях ${finalDollRub} Продолжить обмен ?`);
        if (consentFinalDollRub == true) {
            alert(`Мы поменяли ${sum + "долларов" } на ${finalDollRub + "рублей"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
    else if (what == "EUR") {
        let finalDollEuro = sum*USD_EUR;
        let consentFinalDollEuro = confirm (`Ваша сумма в евро ${finalDollEuro} Продолжить обмен ?`);
        if (consentFinalDollEuro == true) {
            alert(`Мы поменяли ${sum + "долларов" } на ${finalDollEuro + "евро"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
}
// RUB
else if (name == "RUB") {
    let sum = prompt("Сумма");
    let what = prompt("На какую валюту ?", "USD, EUR");
    if (what == "USD") {
        let finalRubDoll = sum*RUB_USD;
        let consentFinalRubDoll = confirm (`Ваша сумма в долларах ${finalRubDoll} Продолжить обмен ?`);
        if (consentFinalRubDoll == true) {
            alert(`Мы поменяли ${sum + "рублей" } на ${finalRubDoll + "долларов"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
    else if (what == "EUR") {
        let finalRubEuro = sum*RUB_EUR;
        let consentFinalRubEuro = confirm (`Ваша сумма в евро ${finalRubEuro} Продолжить обмен ?`);
        if (consentFinalRubEuro == true) {
            alert(`Мы поменяли ${sum + "рублей" } на ${finalRubEuro + "евро"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
}
// EUR
else if (name == "EUR") {
    let sum = prompt("Сумма");
    let what = prompt("На какую валюту ?", "RUB, USD");
    if (what == "USD") {
        let finalEuroDoll = sum*EUR_USD;
        let consentFinalEuroDoll = confirm (`Ваша сумма в долларах ${finalEuroDoll} Продолжить обмен ?`);
        if (consentFinalEuroDoll == true) {
            alert(`Мы поменяли ${sum + "евро" } на ${finalEuroDoll + "долларов"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
    else if (what == "RUB") {
        let finalEuroRub = sum*EUR_RUB;
        let consentFinalEuroRub = confirm (`Ваша сумма в рублях ${finalEuroRub} Продолжить обмен ?`);
        if (consentFinalEuroRub == true) {
            alert(`Мы поменяли ${sum + "евро" } на ${finalEuroRub + "рублей"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
}
*/

