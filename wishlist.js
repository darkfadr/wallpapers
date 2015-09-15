var fs = require('fs'),
    http = require('http');


//fs.readFile('./imgr_walpapers.txt', function(err, data){
var data = fs.readFileSync('./imgr_walpapers.txt', 'utf-8');
    var tags = [];
    console.log(data);
    //err && console.log(err);
    //tags = data.split(',');

    data.split(',').forEach(function(t){
        http.request({
            host: 'imgur.com/',
            path: 'download/'+t
        }, function(res){
            var str = '';

            res.on('data', function(c){
               str += c; 
            });
            
            res.on('end', function(){
                fs.writeFile('IMGR_'+t+'.jpg', res, 'utf-8', function(err, data){
                    console.log(err, data);    
                }) 
            });
        }).end();    
    })
//});
