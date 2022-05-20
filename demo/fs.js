const fs = require('fs'); //file system
const path = require('path');

// =======================СОЗДАНИЯ ДИРЕКТОРИИ==============================
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//    1. первый параметр path.join(__dirname - директория в которой хотим создать папку, 'test' это название папки которую хотим создать).
//    2. второй параметр path.join (err) - callback функция и обязательный параметр err(ошибка).

//     if (err) { // провекрка на ошибку
//         throw err //отловить и выести ошибку
//     }
//     console.log('Create dir');
// })

// =======================СОЗДАНИЕ ПУТИ К ФАЙЛУ==============================
// Строка содержащая  путь к файлу и его название
const filePath = path.join(__dirname, 'test', 'text.txt');


// ========================СОЗДАНЕ ФАЙЛА=============================
// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//     1. первый парметр путь где будет находиться файл (filepath);
//      2. второй параметр что будет внесено в файл 'Hello NodeJS'
//     if (err) { // провекрка на ошибку
//         throw err //отловить и выести ошибку
//     }
//     console.log('Create file');

//     Перезаписываем предыдущую запись в файле, которую создали выше.
//     fs.writeFile(filePath, '\nHello Again', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('Create file');
//     })

//     Добавляем запись к уже созданой записи
//     fs.appendFile(filePath, '\nHello Again', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('Create file');
//     })
// })

// =======================ТЕНИЕ ФАЙЛА==============================
//Первый способ
// fs.readFile(filePath, (err, content) => {
//      1. первый парметр путь где будет находиться файл (filepath);
//      2. второй параметр получение буффера
//     if (err) {
//         throw err
//     }
//     const data = Buffer.from(content) //присваиваем что написано в content

//     console.log('Content:', data.toString());
// })

//Второй способ(проще)
fs.readFile(filePath, 'utf-8', (err, content) => {
    // 1. первый парметр путь где будет находиться файл (filepath);
    // 2. второй параметр передаем кодировку utf-8
    // 3. третий параметр получение буффера
    if (err) {
        throw err
    }
    console.log(content);
})




