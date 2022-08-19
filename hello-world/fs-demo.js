var fs = require('fs');
var path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err; 
//     console.log('folder being created'); 
//})

fs.writeFile(
    path.join(__dirname, '/test', '/hello.txt'), 'Hello World!', 
    err => {
        if (err) throw err;
        console.log('File being written to...');
    })

    fs.appendFile(
        path.join(__dirname, '/test', '/hello.txt'), ' This is an extra string of text...', 
        err => {
            if (err) throw err;
            console.log('File being written too again...');
        })
