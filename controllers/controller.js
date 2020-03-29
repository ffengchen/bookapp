var toReadList = [{item: 'book A'}, {item: 'book B'}]

var haveReadList = [{item: 'book C'}, {item : 'book D'}]
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/toRead', function(req, res){
        res.render('toRead', {toRead: toReadList});
    });

    app.get('/haveRead', function(req, res){
        res.render('haveRead', {haveRead: haveReadList});
    });

    app.post('/toRead', urlencodedParser, function(req, res){
        toReadList.push(req.body);
        res.json(toReadList);
    });

    app.post('/haveRead', urlencodedParser, function(req, res){
        toReadList.push(req.body);
        res.json(haveReadList);
    });

    app.delete('/toRead/:item', function(req, res){
        const item = req.params.item;
        for (var i = toReadList.length - 1; i >= 0; i--) {
            if (toReadList[i].item === item) {
                toReadList.splice(i, 1);
            }
        }
        res.json(data)
    });

    app.delete('/haveRead/:item', function(req, res){
        const item = req.params.item;
        for (var i = haveReadList.length - 1; i >= 0; i--) {
            if (haveReadList[i].item === item) {
                haveReadList.splice(i, 1);
            }
        }
        res.json(data)
    });


}