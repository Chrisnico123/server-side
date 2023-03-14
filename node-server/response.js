const http = require('http');


const gateway = (request , response) => {
    response.setHeader('Content-Type' , 'text/html');
    response.statusCode = 200

    //alternate
    //const { method } = request
    // get request like GET POST etc
    const method = request.method 

    if(method === 'GET'){
        response.end('<h1>GET</h1>')
    }
    if(method === 'POST'){
        let data = [];

        request.on('data' , (chunk) =>{
            data.push(chunk)
        })

        request.on('end' , () => {
            data = Buffer.concat(data).toString();
            const {name} = JSON.parse(data)
            response.end(`<h1>Hai ${name}</h1>`)
        })
    }
    if(method === 'PUT'){
        response.end('<h1>PUT</h1>')
        
    }
    if(method === 'DELETE'){
        response.end('<h1>DELETE</h1>')
    }
    
    
    
}
const server = http.createServer(gateway)
const port = 5000
const host = 'localhost'
server.listen(port , host, () => {
    console.log("Berjalan")
})
