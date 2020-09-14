/*
let age = prompt ("возраст");
let message;
if(age<3) {
    message= "здр,малыш";
}
else if( age < 18){
    message = "привет";
}
else if (age<100){
    message ="здра";
}
else {
    message = "н в";
}
*/


//1 --true
/*
Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными» («falsy») значениями.
Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»).
*/

//2

let company = prompt ("Какое «официальное» название JavaScript?“");
if (company == "ECMAScript") {
    alert("да");
}
    else{
        alert("нет");
}

//3
let num = prompt ("число");
if(num>0) {
    alert("1");
}
else if(num < 0){
    alert("-1");
}
else if (num == 0){
    alert("0");
}


/*let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}*/





/*
5 > 4         // t
"ананас" > "яблоко" //
"2" > "12" // und --- t
undefined == null  //t спец языка
undefined === null //f различные типы
null == "\n0\n" // t --- f
null === +"\n0\n" //f
*/

/*
let name = prompt ("Как вас зовут ?");
alert(`Вас зовут ${name}`)
*/

/*
let a = 2;
let x = 1 + (a *= 2);
alert(x);
*/

/*
let counter = 1;
let a = counter++;
alert(a)
*/

/*
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
a=2
b=2
c=2
d=1
*/

/*
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
let d = 1 + a;
alert( d )
*/

/*
let counter = 1;
let a = counter++; //
alert(a)
*/


/*

let counter = 0;
counter++;
++counter;
alert( counter );
*/

/*
let many = prompt("как дела ?", "хорошо")
alert (many)
*/

/*
let day = confirm("сегодня понедельник !");
alert(day);
*/

/*
let name = prompt("Ваше имя?", "");
alert(`ваше имя ${name}`);
*/

/*
let age = Number("");
alert(age);
alert(typeof age)
*/

/*
let str = "123";
alert(typeof str);


let num = Number(str);
alert(typeof num);
*/

/*
let a = 1, b = 1;

let c = ++a; // ? 2
let d = b++; // ? 1


let a = 2;

let x = 1 + (a *= 2);*/
/*
"" + 1 + 0 //  1 // "10"    -
"" - 1 + 0 // 0 // -1       -
true + false //  1 //       +
6 / "3" //  Nan // 2        -
"2" * "3" //    23// 6      -
4 + 5 + "px"    // // 9px   -
"$" + 4 + 5// $45           +
"4" - 2 // 2                +
"4px" - 2       //Nan       +
7 / 0       // infiniti     +
"  -9  " + 5 //" -9 5"      +
"  -9  " - 5 // -14         -
null + 1    // 1            +
undefined + 1   // Nan      +
" \t \n" - 2  // 0 -2 =-2   -
*/



/*
let value = true;
value = String(value);
*/



/*
alert('Hello World');

alert(3 + 1 + 2);
*/

/*  без "use strict"; работает, с - нет!
num = 5;
alert(num);
*/

/*
const COLOR_RED = "#F00";
let color = COLOR_RED;
alert(color);
*/


/*
let admin;
let name;
name = 'Джон';
admin = name;
alert(admin);

*/
/*

let admin, name = 'Джон';
admin = name;
alert(admin);

let yourPlanet
let userNAME


*/

/*

let message = "hello";
message = 123456;


let you = 4 > 1;
alert(you);

let x;
alert(x);

let y =134;
y = null;
alert(y);
*/
/*

let st = "Дима";
let st2 = "Привет";
let sto = `кстати ${st + st2}`;
alert(sto);
*/


/*
let name, admin;
name = "джон";
admin = name;
alert(admin);

let planetName
let yourName

*/





/*

let name = "джон";


let admin = "джон";
console.log(admin);
alert(admin);
*/


/*
alert("hello");
console.log("ПРИВЕТ");
*/

/*
//alert("1+1");

// переменная
//  let name  = "Dima";
//  console.log(name);

//let name;
//name = "dima";

//let name = "dima",
   // sername = "mao",
   // age = 25
*/


/*
let myName = yourName ="dima";
console.log(myName)
console.log(yourName)

var age = 25;
console.log(age);
*/

/*
const myName ="vers"; //строго заданные
console.log(myName);

const COLOR_RED = "#f00"; // не вычесляемая константа


function getMyStatus() {
  return "success";
}
const myStatus =getMyStatus()

*/
