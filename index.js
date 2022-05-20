const chalk = require('chalk');
const text = require('./data.js');
const fs = require('fs')
const path = require('path')


const http = require('http');
//метод создания сервера
const server = http.createServer((req, res) => {
    //1.объект request(отвечает за получение запроса клиента на сервер)
    //2. объект response - параметр callback (отвечает за ответ сервера)
    console.log(req.url);

    if (req.url === '/') {//чтение с главной страницы
        fs.writeFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {

            if (err) {
                throw err
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            res.end(data);
        })
    }
    // res.end('<h1>Hello NODEJS!!!!</h1>');
})
server.listen(3000, () => {
    //1.параметр порт
    //2. параметр callback
    console.log('Server has been started...');
})