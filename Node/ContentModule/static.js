module.exports = function (request, response) {
    var fs = require('fs');

    console.log(`Client request URL: ${request.url}`);

    if (request.url === '/') {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('views/new_car.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/css') {
        fs.readFile('stylesheets/css', 'utf8', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'text/css'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cat1') {
        fs.readFile('images/cat1.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cat2') {
        fs.readFile('images/cat2.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cat3') {
        fs.readFile('images/cat3.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cat4') {
        fs.readFile('images/cat4.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/car1') {
        fs.readFile('images/car1.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/car2') {
        fs.readFile('images/car2.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/car3') {
        fs.readFile('images/car3.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/car4') {
        fs.readFile('images/car4.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/dog1') {
        fs.readFile('images/dog1.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/dog2') {
        fs.readFile('images/dog2.jpg', (errors, contents) => {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end('File not found!!!!');
    }
};