const http = require("http");

const gateway = (request , response) => {
    response.setHeader('Content-Type' , 'text/html');
    
    response.statusCode = 200;
    response.end('<h1>HALO BROK</h1>');
}


const server = http.createServer(gateway);

const port = 5000;
const host = 'localhost';

server.listen(port , host,()=>{
    console.log(`Server berjalan pada http://${host}/${port}`);
});

