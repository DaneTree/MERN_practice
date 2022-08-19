//HTTP is a module for creating a server using Node alone 

const http = require('http');
const PORT = process.env.PORT || 3000


http.createServer((req, res) => {
    if(req.url === '/endpoint')
    res.end('<h1>You have reached the endpoint </h1>');
    console.log('req.url: ', req.url);
}).listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});