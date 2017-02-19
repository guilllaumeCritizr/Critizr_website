/*
 * Module dependencies
 */
var express = require('express')
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

app.get('/MRBRICOLAGE/ABCDEF', function (req, res) {
//    res.end('Hi there!')
    res.writeHead(301,
        {Location: 'http://www.mr-bricolage.fr/?magasin=Lillers&cz_open=true'}
    );
    res.end();
})

app.get('/FLUNCH/ABCDEF', function (req, res) {
//    res.end('Hi there!')
    res.writeHead(301,
        {Location: 'http://restaurant.flunch.fr/lille/flunch-lille-gare/?store=107&origin=50.62925%2C3.057256&cz_open=true'}
    );
    res.end();
})
app.listen(process.env.PORT || 3000)