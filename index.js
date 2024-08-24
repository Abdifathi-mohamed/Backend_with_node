// variables and arrays

const people = ['Abdi', 'Hassan', 'Ali'];
const ages = [20, 21, 22];

console.log(people);

module.exports = {
    people, ages
};

//server

var http = require('http');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World!');
}).listen(8080);

