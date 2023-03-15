const routes = [
    {
        method:'GET',
        path:'/',
        handler:(request , h) => {
            return 'home'
        }
    },
    {
        method:'GET',
        path:'/about',
        handler:(request , h) => {
            return 'about page'
        }
    },
    {
        method:'GET',
        path:'/value',
        handler: (request , h) => {
            const {name , nim} = request.query
            return `Halo ${name} dengan NIM ${nim}`
        }
    },
    {
        method:'GET',
        path:'/users/{username?}',
        handler:(request , h) => {
            //if path have username output its name but if no output is stranger
            const {username = 'stranger'} = request.params
            return `Nama Saya ${username}`
        }
    },
    {
        method:'*',
        path:'/',
        handler: (request , h) => {
            return 'Halaman tidak ditemukan'
        }
    },
    {
        method:'*',
        path:'/about',
        handler: (request , h) => {
            return 'Halaman tidak ditemukan'
        }
    },
    {
        method:'*',
        path:'/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    }
]

module.exports = routes