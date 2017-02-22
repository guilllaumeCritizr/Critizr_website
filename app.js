/*
 * Module dependencies
 */

var express = require('express')
    , fs = require('fs')
    , stylus = require('stylus')
    , nib = require('nib')

var app = express()
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
    { src: __dirname + '/public'
        , compile: compile
    }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res){
    res.send('Hello there !');
})

app.get('/apple-app-site-association', function (req, res){
    fs.readFile("./apple-app-site-association", function(error, content) {
        res.writeHead(200, { 'Content-Type': "application/pkcs7-mime" });
        res.end(content, 'utf-8');
    });
});

app.get('/MRBRICOLAGE/ABCDEF', function (req, res) {
    res.writeHead(200, { 'Content-Type': "application/json" });
    obj = {
        'short': '/MRBRICOLAGE/ABCDEF',
        'long': 'http://www.mr-bricolage.fr/?magasin=Lillers&cz_open=true'
    }
    res.end(JSON.stringify(obj));
})

app.get('/FLUNCH/ABCDEF', function (req, res) {
    res.writeHead(200, { 'Content-Type': "application/json" });
    obj = {
        'short': '/MRBRICOLAGE/ABCDEF',
        'long': 'http://restaurant.flunch.fr/lille/flunch-lille-gare/?store=107&origin=50.62925%2C3.057256&cz_open=true'
    }
    res.end(JSON.stringify(obj));
})
app.listen(process.env.PORT || 3000)