const path = require('path');

console.log('name file:', path.basename(__filename));

console.log('name directiry:', path.dirname(__filename));

console.log('расширение файла:', path.extname(__filename));

console.log('parse:', path.parse(__filename));

console.log('parse:', path.parse(__filename).name);// выводитт имя файла (может выводить и другие параметры при обращении к другим ключам )

console.log(path.join(__dirname, 'server', 'index.html')); //получаем путь к файлу (__dirname,'папка в которой лежит файл','название файла')