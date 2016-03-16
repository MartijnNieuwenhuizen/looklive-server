var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/feed', function(req, res, next) {
    fs.readFile('resources/feed.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var urlQuery = req.query; // get the Query
        var firstItem = urlQuery.first; // get the first item in the Query
        var lastItem = urlQuery.last; // get the last item in the Query

        var items = JSON.parse(data);
        var pagingItems = items.slice(firstItem, lastItem); // fill the items

        res.render('feed', { title: 'Feed', items: pagingItems, layout: false});
    })
});

router.get('/appearance/:uuid', function(req, res, next) {
    fs.readFile('resources/appearance/'+req.params.uuid+'.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data);
        var products = [];

        item.product_occurrences.forEach(function(occurrence) {
            var product = fs.readFileSync('resources/product/'+occurrence.product.id+'.json', 'utf8');
            products.push(JSON.parse(product));
        });

        res.render('appearance', { title: item.title, item: item , products: products, layout: false});
    })
});

router.get('/product/:uuid', function(req, res, next) {
    sendFile('product/'+req.params.uuid+'.json', res);
});

// Reads and sends file contents
function sendFile(filename, res) {
    res.type('json');
    var file = fs.readFile('resources/'+filename, 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            res.json({'status': 404, 'message': 'resource with name: '+filename+' not found'});
        } else {
            res.send(data);
        }
    });
}

module.exports = router;