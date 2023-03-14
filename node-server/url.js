const http = require('http')

const gateway = (request , response) => {
    response.setHeader('Content-Type','text/html');
    
    const { url , method } = request
    
    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'Homepage'
            }))
        }
        else{
            response.statusCode = 400
            response.end(JSON.stringify({
                message:'bad request'
            }))
        }
    }
    else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200
            response.end('<h1>about</h1>')
        }
        else if(method === 'POST'){
            const data = [];
            
            request.on('data' , (chunk) => {
                data.push(chunk)
            })
            
            request.on('end' , () => {
                response.statusCode = 200
                data = Buffer.concat(data).toString();
                const { name } = JSON.parse(data)
                response.end(`<h1>Haii ${name}</h1>`)
            })
        }
        else{
            response.statusCode = 400
            response.end('<h1>ga ada</h1>')
        }
    }
    else{
        response.statusCode = 404
        response.end(JSON.stringify({
            message : "Halaman tidak ditemukan"
        }))
    }


}

const server = http.createServer(gateway)

const port = 5000;
const host = 'localhost'

server.listen(port , host , () => {
    console.log('berjalan ....')
})