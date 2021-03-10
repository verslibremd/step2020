const fs = require('fs');
const path = require('path')
//асинхр.методы не блокируют поток, который в nodejs всего 1

//создать папку
//  первый параметр -путь до папки,
//второй- колбек.
// в nodeJS при работе с асинхр.операциями, то всегда первый параметр в колбек функции -ошибка
//если ошибки нет - придет нулл и иф не сработает
/*
fs.mkdir(path.join(__dirname,"test"), (err) =>{
    if (err){
        throw err
    }
    console.log("папка создана")
})*/

//создать файл
const filePath = path.join(__dirname,'test',"text.txt");

/*
// метод writeFile перетирает уже существующие файлы
fs.writeFile(filePath,"Hello NodeJS", err =>{
    if(err){
        throw err
    }
    console.log("Файл создан!")

    //добавить в файл
    fs.appendFile(filePath,"\nHello Again", err =>{
        if(err){
            throw err
        }
        console.log("Файл создан!")
    })
})
*/

//читать
/*
fs.readFile(filePath, 'utf-8', (err, content)=>{
    if (err){
        throw err
    }
    console.log(content)

    //можно так
    //nodeJs считывает все в буферах. нужно превратить буфер в строку
    //глобальный класс Buffer и метод from куда передается тот буфер полученный из файла
    //const data = Buffer.from(content)
    //console.log('Content: ', data.toString())
})
*/
