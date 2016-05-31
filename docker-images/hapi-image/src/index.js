var Hapi = require('hapi');
var HapiJsonView = require('hapi-json-view');
var Path = require('path');
var Vision = require('vision');
 
var server = new Hapi.Server();
server.connection({ port: 3000 });
 
server.register(Vision, function (err) {
 
    if (err) {
        throw err;
    }
 
    server.views({
        engines: {
            js: {
                module: HapiJsonView.create(),
                compileMode: 'async',
                contentType: 'application/json'
            }
        },
        path: Path.join(__dirname, 'templates')
    });
 
    server.route({
        method: 'GET',
        path: '/article',
        handler: function (request, reply) {
 
            var article = {
                _id: '507f1f77bcf86cd799439011',
                title: 'Node.js',
                author: {
                    _id: '507f191e810c19729de860ea',
                    name: 'John Doe'
                }
            };
 
            reply.view('article', { article: article });
        }
    });
});