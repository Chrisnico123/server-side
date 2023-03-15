const Hapi = require('@hapi/hapi')
const route = require('./routes')

const init = async()=>{
    const server = Hapi.server({
        host:'localhost',
        port:5000
    });

    server.route(route)

    await server.start()
    console.log(`server berjalan di ${server.info.uri}`)
}

init();