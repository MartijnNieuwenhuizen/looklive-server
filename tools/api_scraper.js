#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var http = require('http');
var constants = require('./constants');

var apiKey = args.api_key;

// Main scraping part
doRequest('home', function(response) {
    var json = JSON.parse(response);

    saveResource('feed', JSON.stringify(json.items));

    json.items.forEach(function(item){
        scrapeAppearance(item.id);
    });
});

function scrapeAppearance(id) {
    doRequest('appearances/'+id, function(response) {
        var json = JSON.parse(response);

        json.product_occurrences.forEach(function(occurrence, i){
            // convert occurrence markers to %
            json.product_occurrences[i].position.x = occurrence.position.x/100;
            json.product_occurrences[i].position.y = occurrence.position.y/100;

            // convert category ids to strings
            json.product_occurrences[i].product.parent_category = constants.getParentCategory(occurrence.product.parent_category_id);
            json.product_occurrences[i].product.category = constants.getCategory(occurrence.product.category_id );

            // scrape the product
            scrapeProduct(occurrence.product.id);
        });
        saveResource('appearance/'+id, JSON.stringify(json));
    });
}

function scrapeProduct(id) {
    doRequest('products/'+id, function(response) {
        var json = JSON.parse(response);

        json.category = constants.getCategory(json.category_id);
        json.parent_category = constants.getCategory(json.parent_category_id);

        json.similars.forEach(function(similar, i) {
            json.similars[i].similar_type = constants.getSimilarType(similar.similar_type);
            json.similars[i].category = constants.getCategory(similar.category_id);
            json.similars[i].parent_category = constants.getCategory(similar.parent_category_id);
        });

        saveResource('product/'+id, JSON.stringify(json));
    });
}

// Utility functions
function doRequest(endpoint, callback) {
    http.get({
        'host': 'www.looklive.com',
        'path': '/api/v3/'+endpoint+'/?limit=100',
        'headers': {
            'Authorization': 'Bearer '+apiKey
        }
    }, function(res) {
        var body = '';

        res.on('data', function(c) {
            body += c;
        });

        res.on('end', function() {
            callback(body);
        });

    }).on('error', function(err) {
        console.log(err);
    });
}

function saveResource(filename, content) {
    fs.writeFile('resources/'+filename+'.json', content, function(err) {
        if(err) {
            console.log(err);
        }
    });
}