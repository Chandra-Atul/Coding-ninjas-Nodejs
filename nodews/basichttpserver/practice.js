const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url); 
    
    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log('Error', err);
            return res.end(err);
        }

        return res.end(data);
    });


    // res.writeHead(200, {'content-type' : 'text/html'});

}


const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on the port", port);
});