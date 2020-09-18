
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

