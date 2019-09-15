// //https://www.npmjs.com/package/node-static
const http = require('http');
const nodestatic = require('node-static');

const file = new nodestatic.Server(`${__dirname}/`,{
        headers: {
                'Access-Control-Allow-Origin': '*',//разрешить всем
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*',
            }
});
 //"создай сервер слушай на потру таком то"
http.createServer((request, response) => { 
        // console.log(request.headers)
        //console.log(request.url)посмотреть обр к серверу
        file.serve(request, response);
}).listen(3000);


// console.log(__dirname)//папка в которой запускаю
// console.log(process.cwd())

// данные телефонаhttp://localhost:3000/phones/nexus-s.json
//запуск на http://localhost:3000/